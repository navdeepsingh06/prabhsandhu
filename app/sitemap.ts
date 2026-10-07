import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";
import { listings } from "@/data/listings";
import { guideSlugs } from "@/data/neighborhoods";
import { posts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/listings",
    "/buy",
    "/sell",
    "/about",
    "/neighborhoods",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const listingRoutes = listings.map((l) => ({
    url: `${siteUrl}/listings/${l.slug}`,
    lastModified: new Date(l.listedOn),
    changeFrequency: "daily" as const,
    priority: 0.6,
  }));

  const guideRoutes = guideSlugs.map((slug) => ({
    url: `${siteUrl}/neighborhoods/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const postRoutes = posts.map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...listingRoutes, ...guideRoutes, ...postRoutes];
}
