import type { MetadataRoute } from "next";

import { getUMKM } from "@/services/umkm";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "http://localhost:3000";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const umkm = await getUMKM();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/umkm`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  const umkmPages: MetadataRoute.Sitemap = umkm.map((item) => ({
    url: `${BASE_URL}/umkm/${item.id}`,
    lastModified: item.updated_at
      ? new Date(item.updated_at)
      : new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...umkmPages,
  ];
}