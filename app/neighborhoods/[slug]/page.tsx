import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronLeft,
  GraduationCap,
  ShoppingBag,
  Bus,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { neighborhoodGuides, guideSlugs } from "@/data/neighborhoods";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return guideSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = neighborhoodGuides.find((g) => g.slug === slug);
  if (!guide) return pageMetadata({ title: "Neighbourhood not found", path: `/neighborhoods/${slug}` });
  return pageMetadata({
    title: `${guide.name} Neighbourhood Guide`,
    description: `${guide.name}, Winnipeg: ${guide.tagline} Lifestyle, schools, amenities, transit, and a local market snapshot.`,
    path: `/neighborhoods/${slug}`,
    image: guide.image.src,
  });
}

export default async function NeighborhoodGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = neighborhoodGuides.find((g) => g.slug === slug);
  if (!guide) notFound();

  const sections = [
    { icon: Sparkles, title: "Lifestyle", body: <p className="text-muted-foreground">{guide.lifestyle}</p> },
    {
      icon: GraduationCap,
      title: "Schools",
      body: (
        <ul className="space-y-1.5 text-muted-foreground">
          {guide.schools.map((s) => (
            <li key={s} className="flex gap-2">
              <span className="text-accent-strong">•</span> {s}
            </li>
          ))}
        </ul>
      ),
    },
    {
      icon: ShoppingBag,
      title: "Amenities",
      body: (
        <ul className="space-y-1.5 text-muted-foreground">
          {guide.amenities.map((a) => (
            <li key={a} className="flex gap-2">
              <span className="text-accent-strong">•</span> {a}
            </li>
          ))}
        </ul>
      ),
    },
    { icon: Bus, title: "Transit & getting around", body: <p className="text-muted-foreground">{guide.transit}</p> },
  ];

  return (
    <>
      <PageHeader eyebrow="Neighbourhood Guide" title={guide.name} description={guide.tagline} />

      {/* Hero image */}
      <div className="container-px -mt-8 lg:-mt-10">
        <div className="relative aspect-[16/7] overflow-hidden rounded-3xl shadow-soft">
          <Image
            src={guide.image.src}
            alt={guide.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      <section className="container-px py-14 lg:py-20">
        <Link
          href="/neighborhoods"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden /> All neighbourhoods
        </Link>

        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <div className="prose-brand">
              {guide.intro.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-foreground/85">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10 space-y-8">
              {sections.map((s) => (
                <div key={s.title} className="surface-card p-6">
                  <h2 className="flex items-center gap-2.5 font-serif text-xl font-semibold">
                    <s.icon className="h-5 w-5 text-accent-strong" aria-hidden />
                    {s.title}
                  </h2>
                  <div className="mt-3 text-sm leading-relaxed">{s.body}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Market snapshot (placeholder) */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <div className="surface-card p-6">
                <h2 className="flex items-center gap-2.5 font-serif text-xl font-semibold">
                  <TrendingUp className="h-5 w-5 text-accent-strong" aria-hidden />
                  Market snapshot
                </h2>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <dt className="text-muted-foreground">Median price</dt>
                    <dd className="font-medium">{guide.marketSnapshot.medianPrice}</dd>
                  </div>
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <dt className="text-muted-foreground">Avg. days on market</dt>
                    <dd className="font-medium">{guide.marketSnapshot.avgDaysOnMarket}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-muted-foreground">Trend</dt>
                    <dd className="font-medium">{guide.marketSnapshot.trend}</dd>
                  </div>
                </dl>
                <p className="mt-4 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-700">
                  Sample figures. Ask me for a current, data-backed market report for {guide.name}.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary-light"
                >
                  Request a {guide.name} report
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CTASection
        title={`Thinking about ${guide.name}?`}
        description="Let's talk about what's available now and what's coming soon in this neighbourhood."
      />
    </>
  );
}
