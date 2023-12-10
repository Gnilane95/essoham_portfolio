const baseUrl = "https://www.aliessoham-maths.fr";
let sitelinks = [
  {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 1,
  },
  {
    url: `${baseUrl}/research`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  },
  {
    url: `${baseUrl}/publications`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  },
  {
    url: `${baseUrl}/teaching`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.5,
  },
  {
    url: `${baseUrl}/talks`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    url: `${baseUrl}/cv_EA.pdf`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.5,
  },
];

module.exports = {
  baseUrl,
  sitelinks,
};
