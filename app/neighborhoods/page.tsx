import type { Metadata } from "next";
import { neighborhoodCards } from "@/data/neighborhoods";
import { PageHeader } from "@/components/PageHeader";
import { NeighborhoodGrid } from "@/components/NeighborhoodGrid";
import { CTASection } from "@/components/CTASection";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Winnipeg Neighbourhood Guides",
  description:
    "Explore Winnipeg's neighbourhoods — Sage Creek, River Heights, Transcona, St. Vital, Waverley West, and more. Lifestyle, schools, amenities, and transit at a glance.",
  path: "/neighborhoods",
});

export default function NeighborhoodsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Explore Winnipeg"
        title="Neighbourhood guides"
        description="Every Winnipeg neighbourhood has its own character. Here's a look at some of my favourites — tap a card with a guide to dive deeper."
      />

      <section className="container-px py-16 lg:py-24">
        <NeighborhoodGrid items={neighborhoodCards} />
        <p className="mt-8 text-sm text-muted-foreground">
          More in-depth guides are on the way. Don&apos;t see your area?{" "}
          <a href="/contact" className="font-medium text-accent-strong underline underline-offset-4">
            Ask me about it
          </a>{" "}
          — I know the whole city.
        </p>
      </section>

      <CTASection
        title="Curious which neighbourhood fits you?"
        description="Tell me about your lifestyle and budget, and I'll point you to the areas that make the most sense."
      />
    </>
  );
}
