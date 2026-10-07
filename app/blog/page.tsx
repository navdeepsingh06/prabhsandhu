import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { postsByDate } from "@/data/blog";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { formatDate } from "@/lib/utils";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog & Resources",
  description:
    "Winnipeg real estate tips and guides for buyers and sellers — from first-time buyer basics to selling strategies in a Manitoba market.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Winnipeg real estate, explained"
        description="Practical guides and local insights to help you buy and sell with confidence."
      />

      <section className="container-px py-16 lg:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {postsByDate.map((post, i) => (
            <ScrollReveal key={post.slug} as="article" delay={(i % 2) * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="surface-card group block overflow-hidden hover:shadow-lift"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.cover.src}
                    alt={post.cover.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105 motion-reduce:transform-none"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span aria-hidden>·</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" aria-hidden /> {post.readingMinutes} min read
                    </span>
                  </div>
                  <h2 className="mt-3 font-serif text-xl font-semibold group-hover:text-accent-strong">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-strong">
                    Read article <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CTASection
        title="Have a question I haven't covered?"
        description="I'm always happy to talk through your situation — no pressure, just honest answers."
      />
    </>
  );
}
