import { baseUrl } from "../../data/shared-cong";

export default function robots(req, res) {
  const robots = `
    User-agent: *
    Disallow: /private/
    Sitemap: ${baseUrl}/sitemap.xml
    `;
  res.send(robots);
}
