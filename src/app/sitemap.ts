import { MetadataRoute } from "next";
import { getArtikelPulsas } from "@/lib/contentful";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getArtikelPulsas();

  const articleUrls = articles.map((article) => ({
    url: `https://planetpulsa.id/blog/${article.fields.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://planetpulsa.id",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://planetpulsa.id/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...articleUrls,
  ];
}