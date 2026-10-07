/**
 * BLOG REGISTRY — metadata for each post. The post body lives as an .mdx file
 * in /content/blog/<slug>.mdx and is imported dynamically by the [slug] route.
 * To add a post: drop a new .mdx file in /content/blog and add an entry here.
 */

export interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readingMinutes: number;
  category: string;
  cover: { src: string; alt: string };
}

export const posts: PostMeta[] = [
  {
    slug: "first-time-buyer-guide-winnipeg",
    title: "First-Time Buyer Guide for Winnipeg",
    excerpt:
      "From pre-approval to possession day — a clear, step-by-step roadmap for buying your first home in Winnipeg, with Manitoba-specific costs explained.",
    date: "2026-09-20",
    readingMinutes: 7,
    category: "Buying",
    cover: {
      src: "https://images.unsplash.com/photo-1560520655-947a0f9a1c92?auto=format&fit=crop&w=1200&q=70",
      alt: "Keys being handed over in front of a new home",
    },
  },
  {
    slug: "selling-your-home-manitoba-market",
    title: "Selling Your Home in a Manitoba Market",
    excerpt:
      "How to price, prepare, and market your Winnipeg home for a smooth, successful sale — and what to expect at each stage of the process.",
    date: "2026-08-14",
    readingMinutes: 6,
    category: "Selling",
    cover: {
      src: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=70",
      alt: "Bright, staged living room ready for sale",
    },
  },
];

export const postsByDate = [...posts].sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string): PostMeta | undefined {
  return posts.find((p) => p.slug === slug);
}
