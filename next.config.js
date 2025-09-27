/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Images need special handling for static export
  images: {
    unoptimized: true,
  },
  // Disable server-side features that aren't compatible with static exports
  trailingSlash: true,
}

module.exports = nextConfig
