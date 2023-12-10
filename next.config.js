/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap", // The :path parameter isn't used here so will be automatically passed in the query
      },
      {
        source: "/robots.txt",
        destination: "/api/robots",
      },
      {
        source: "/manifest.webmanifest",
        destination: "/api/manifest",
      },
    ];
  },
};

module.exports = nextConfig;
