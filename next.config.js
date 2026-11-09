/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  devIndicators: false,
  productionBrowserSourceMaps: true,
  outputFileTracingRoot: __dirname,
  images: {
    formats: ["image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

module.exports = nextConfig;
