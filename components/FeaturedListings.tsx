import type { Listing } from "@/data/listings";
import { ListingCard } from "./ListingCard";
import { ScrollReveal } from "./ScrollReveal";

export function FeaturedListings({ listings }: { listings: Listing[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {listings.map((l, i) => (
        <ScrollReveal key={l.slug} delay={(i % 4) * 0.08}>
          <ListingCard listing={l} />
        </ScrollReveal>
      ))}
    </div>
  );
}
