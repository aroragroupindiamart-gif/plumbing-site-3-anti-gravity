/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  allowedDevOrigins: ["*"],
  async rewrites() {
    return [
      {
        source: "/sitemap/:state(\\w+(?:-\\d+)?)\\.xml",
        destination: "/sitemap/:state",
      },
    ];
  },
};

export default nextConfig;
