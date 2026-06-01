import { createClient } from "contentful";
import { ArtikelPulsa } from "./types";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getArtikelPulsas(): Promise<ArtikelPulsa[]> {
  try {
    const entries = await client.getEntries({
      content_type: "artikelpulsa",
      limit: 1000,
      "fields.category": "Artikel Publish",
      "fields.brand": "Planet Pulsa",
    });

    return entries.items as unknown as ArtikelPulsa[];
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}

export async function getArtikelBySlug(slug: string): Promise<ArtikelPulsa | null> {
  try {
    const entries = await client.getEntries({
      content_type: "artikelpulsa",
      "fields.slug": slug,
      limit: 1,
    });

    if (entries.items.length === 0) {
      return null;
    }

    return entries.items[0] as unknown as ArtikelPulsa;
  } catch (error) {
    console.error("Error fetching article by slug:", error);
    return null;
  }
}