// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove `output: 'export'`
  images: {
    domains: ['images.pexels.com'],
  },
};

module.exports = nextConfig;
