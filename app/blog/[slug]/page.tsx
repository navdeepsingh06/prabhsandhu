import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, Clock } from "lucide-react";
import { posts, getPost } from "@/data/blog";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { formatDate } from "@/lib/utils";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return pageMetadata({ title: "Article not found", path: `/blog/${slug}` });
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    image: post.cover.src,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  // Load the MDX body for this slug. Relative path so webpack can build the
  // module context for /content/blog/*.mdx.
  let Content: React.ComponentType;
  try {
    const mod = await import(`../../../content/blog/${slug}.mdx`);
    Content = mod.default;
  } catch {
    notFound();
  }

  return (
    <>
      <PageHeader eyebrow={post.category} title={post.title} />

      <article className="container-px py-14 lg:py-20">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden /> All articles
        </Link>

        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden>·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-4 w-4" aria-hidden /> {post.readingMinutes} min read
            </span>
          </div>

          <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-3xl shadow-soft">
            <Image
              src={post.cover.src}
              alt={post.cover.alt}
              fill
              priority
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="prose-brand mt-10">
            <Content />
          </div>
        </div>
      </article>

      <CTASection />
    </>
  );
}
