import * as cdk from 'aws-cdk-lib';
import * as path from 'node:path';
import { Construct } from 'constructs';

interface thinkcarStackProps extends cdk.StackProps {
  domainName: string;
  subdomain: string;
  githubRepo: string;
  env: {
    account: string | undefined;
    region: string | undefined;
  };
}

export class ThinkcarStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: thinkcarStackProps) {
    super(scope, id, props);

    // --- 1. IAM Role for GitHub Actions (OIDC) ---
    // Define the ARN for the GitHub OIDC provider
    const githubOidcProviderArn = `arn:aws:iam::${props.env.account}:oidc-provider/token.actions.githubusercontent.com`;

    // Create the IAM Role for GitHub Actions
    const githubActionsRole = new cdk.aws_iam.Role(this, 'ThinkcarGitHubActionsDeployRole', {
      roleName: 'ThinkcarGitHubActionsDeployRole', // Explicit name for easy reference
      // The role can be assumed by the GitHub OIDC provider
      assumedBy: new cdk.aws_iam.WebIdentityPrincipal(githubOidcProviderArn, {
        StringLike: {
          // Restrict assumption to pull requests or pushes on the main branch of your repo
          'token.actions.githubusercontent.com:sub': `repo:${props.githubRepo}:*`,
        },
        StringEquals: {
          'token.actions.githubusercontent.com:aud': 'sts.amazonaws.com',
        },
      }),
      description: 'IAM role for GitHub Actions to deploy the ThinkcarStack',
    });

    // Grant the role permissions to deploy and manage all resources in this stack.
    // **Important:** For a complete CDK deployment, the role typically needs broader
    // permissions, including the ability to manage CloudFormation, S3, Route53,
    // and create/update resources *outside* of this stack (like the CDK Toolkit bucket).
    // The following policy grants administrative access, which is common for a CI/CD role.
    // For production, you should create a more restrictive policy.
    githubActionsRole.addManagedPolicy(
      cdk.aws_iam.ManagedPolicy.fromAwsManagedPolicyName('AdministratorAccess') // Use a more restrictive policy for production
    );

    // Output the ARN of the role for use in the GitHub Actions workflow
    new cdk.CfnOutput(this, 'ThinkcarGitHubActionsDeployRoleArn', {
      value: githubActionsRole.roleArn,
      description: 'ARN of the IAM role for GitHub Actions deployment',
    });
    // --- End of IAM Role Setup ---

    const domain = `${props.subdomain}.${props.domainName}`;
    const hostedZone = cdk.aws_route53.HostedZone.fromLookup(this, 'thinkcarStackZone', {
      domainName: props.domainName,
    });

    const cert = new cdk.aws_certificatemanager.Certificate(this, 'thinkcarStackCert', {
      domainName: domain,
      validation: cdk.aws_certificatemanager.CertificateValidation.fromDns(hostedZone),
    });

    const bucket = new cdk.aws_s3.Bucket(this, 'thinkcarStackBucket', {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      blockPublicAccess: cdk.aws_s3.BlockPublicAccess.BLOCK_ALL,
      autoDeleteObjects: true,
      publicReadAccess: false,
    });

    const oai = new cdk.aws_cloudfront.OriginAccessIdentity(this, 'thinkcarStackOAI');
    bucket.grantRead(oai);

    const cfFunction = new cdk.aws_cloudfront.Function(this, 'thinkcarStackIndexHtmlFunction', {
      code: cdk.aws_cloudfront.FunctionCode.fromInline(`
        function handler(event) {
          var request = event.request;
          var uri = request.uri;

          if (uri.endsWith("/")) {
            request.uri += "index.html";
          } else if (!uri.includes(".")) {
            request.uri += "/index.html";
          }

          return request;
        }
      `),
    });

    const distribution = new cdk.aws_cloudfront.Distribution(this, 'thinkcarStackDistribution', {
      defaultRootObject: 'index.html',
      defaultBehavior: {
        origin: cdk.aws_cloudfront_origins.S3BucketOrigin.withOriginAccessIdentity(bucket, {
          originAccessIdentity: oai,
        }),
        viewerProtocolPolicy: cdk.aws_cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        functionAssociations: [{
          function: cfFunction,
          eventType: cdk.aws_cloudfront.FunctionEventType.VIEWER_REQUEST,
        }],
      },
      domainNames: [domain],
      certificate: cert,
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
          ttl: cdk.Duration.minutes(5)
        },
        {
          httpStatus: 403,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
          ttl: cdk.Duration.minutes(5)
        },
      ],
    });

    new cdk.aws_s3_deployment.BucketDeployment(this, 'thinkcarStackBucketDeployment', {
      sources: [
        cdk.aws_s3_deployment.Source.asset(path.join(process.cwd(), '../out')),
      ],
      destinationBucket: bucket,
      distributionPaths: ['/*'],
      distribution,
    });

    new cdk.aws_route53.ARecord(this, 'thinkcarStackAliasRecord', {
      zone: hostedZone,
      recordName: props.subdomain,
      target: cdk.aws_route53.RecordTarget.fromAlias(new cdk.aws_route53_targets.CloudFrontTarget(distribution)),
    });
  }
}
