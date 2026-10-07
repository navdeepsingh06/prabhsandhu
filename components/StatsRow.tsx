import { realStats, placeholderStats } from "@/data/stats";
import { ScrollReveal } from "./ScrollReveal";
import { cn } from "@/lib/utils";

/**
 * Stats band. Real, verified facts render plainly. Placeholder/illustrative
 * numbers are visually flagged so nothing fabricated reads as fact.
 */
export function StatsRow({ includePlaceholders = true }: { includePlaceholders?: boolean }) {
  const stats = includePlaceholders ? [...realStats, ...placeholderStats] : realStats;

  return (
    <ScrollReveal
      as="div"
      className={cn(
        "grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border text-center md:grid-cols-3",
        stats.length > 4 ? "lg:grid-cols-5" : "lg:grid-cols-4"
      )}
    >
      {stats.map((s) => (
        <div key={s.label} className="relative bg-card px-4 py-8">
          <p className="font-serif text-3xl font-semibold text-primary lg:text-4xl">{s.value}</p>
          <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          {s.placeholder && (
            <span className="absolute right-2 top-2 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-700">
              Sample
            </span>
          )}
        </div>
      ))}
    </ScrollReveal>
  );
}
