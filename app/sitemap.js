export default function sitemap() {
  return [
    {
      url: "https://www.buddhasrestaurant.ee/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.buddhasrestaurant.ee/menu",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
