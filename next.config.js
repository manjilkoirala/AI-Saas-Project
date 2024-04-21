const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "googleusercontent.com",
      "oaidalleapiprodscus.blob.core.windows.net",
      "cdn.openai.com"
    ]
  },
  webpack: (config, { isServer }) => {
    if (process.env.ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: isServer ? 8887 : 8889, // Changed port here
        openAnalyzer: true,
      }));
    }

    return config;
  },
}

module.exports = nextConfig