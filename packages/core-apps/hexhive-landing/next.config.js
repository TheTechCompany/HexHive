/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  // webpack: (config) => {
  //   const tsRule = config.module.rules.find(
  //     (rule) => rule.test && rule.test.toString().includes("tsx|ts")
  //   );
  //   tsRule.include = undefined;
  //   tsRule.exclude = /node_modules/;

  //   return config;
  // },
  experimental: {
    externalDir: true
  }
});
