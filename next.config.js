/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/compareprix",
  assetPrefix: "/compareprix/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
