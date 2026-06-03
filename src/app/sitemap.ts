import { MetadataRoute } from "next";
import { getAllArtikelPulsas } from "@/lib/contentful";

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArtikelPulsas();

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
      url: "https://planetpulsa.id/profil-planet-pulsa",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
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