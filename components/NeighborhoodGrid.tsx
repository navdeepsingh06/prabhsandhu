import type { NeighborhoodCardData } from "@/data/neighborhoods";
import { NeighborhoodCard } from "./NeighborhoodCard";
import { ScrollReveal } from "./ScrollReveal";

export function NeighborhoodGrid({ items }: { items: NeighborhoodCardData[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, i) => (
        <ScrollReveal key={item.slug} delay={(i % 4) * 0.06}>
          <NeighborhoodCard item={item} />
        </ScrollReveal>
      ))}
    </div>
  );
}
