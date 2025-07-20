/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "/",
  trailingSlash: true,
  images: {
    unoptimized: true, // <== disable image optimization for static export
  },
};

module.exports = nextConfig;
