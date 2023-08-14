/** @type {import('next').NextConfig} */

const withFonts = require('next-fonts');

const nextConfig = withFonts({
  reactStrictMode: true,
  images: {
    domains: [
      'i.ytimg.com',
      'placekitten.com',
      'yt3.ggpht.com',
      'yt3.googleusercontent.com'
    ]
  },
  env: {
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID
  },
  webpack(config) {
    // NOTE: svg 파일을 react template 으로 변경
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/ // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ['@svgr/webpack']
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  }
});

module.exports = nextConfig;
