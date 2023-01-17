/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "fr", "wo"],
    defaultLocale: "en",
  },
  images: {
    domains: ["image.shutterstock.com", "links.papareact.com"],
  },
};

module.exports = nextConfig;
