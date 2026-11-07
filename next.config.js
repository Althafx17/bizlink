/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  devIndicators: false,
  outputFileTracingRoot: __dirname,
  images: {
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
