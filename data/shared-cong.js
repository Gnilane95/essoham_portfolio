const baseUrl = "https://www.aliessoham-maths.fr";
let sitelinks = [
  {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    url: `${baseUrl}/research`,
    lastModified: new Date(),
    changeFrequency: "weekly",
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
