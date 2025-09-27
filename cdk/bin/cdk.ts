#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { ThinkcarStack } from '../lib/thinkcar-stack';

const app = new cdk.App();
new ThinkcarStack(app, 'ThinkcarStack', {
  domainName: 'vberkoz.com',
  subdomain: 'thinkcar',
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});