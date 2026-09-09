import type { MetadataRoute } from "next";
import { sectors } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://obi2027.ng";
  const routes = ["", "/about", "/kwankwaso", "/nigeria-today", "/evidence", "/media"];
  return [
    ...routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: route === "" ? 1 : 0.8 })),
    ...sectors.map((sector) => ({ url: `${base}/${sector.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 })),
  ];
}
