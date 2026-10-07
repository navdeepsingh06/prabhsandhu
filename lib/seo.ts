import type { Metadata } from "next";
import { site, siteUrl } from "@/data/site";

/**
 * Build per-page metadata consistently (title template, canonical, Open Graph,
 * Twitter). Pass a page title/description/path and get a complete Metadata object.
 */
export function pageMetadata({
  title,
  description,
  path = "/",
  image,
  keywords,
}: {
  title: string;
  description?: string;
  path?: string;
  /** Absolute/relative image URL. If omitted, the generated opengraph-image is used. */
  image?: string;
  keywords?: string[];
}): Metadata {
  const url = `${siteUrl}${path}`;
  const desc = description ?? site.seo.description;
  // When an explicit image is given, use it; otherwise fall back to the
  // file-based opengraph-image convention (handled automatically by Next).
  const ogImage = image ? (image.startsWith("http") ? image : `${siteUrl}${image}`) : undefined;

  return {
    title,
    description: desc,
    keywords: keywords ?? [...site.seo.keywords],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_CA",
      url,
      siteName: site.seo.siteName,
      title: `${title} | ${site.agent.name}, Winnipeg REALTOR®`,
      description: desc,
      ...(ogImage ? { images: [{ url: ogImage, width: 1200, height: 630, alt: site.seo.siteName }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}
