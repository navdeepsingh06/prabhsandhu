import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { NeighborhoodCardData } from "@/data/neighborhoods";

export function NeighborhoodCard({ item }: { item: NeighborhoodCardData }) {
  const hasGuide = item.hasGuide;
  const inner = (
    <div className="surface-card group relative h-72 overflow-hidden">
      <Image
        src={item.image.src}
        alt={item.image.alt}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105 motion-reduce:transform-none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-xl font-semibold">{item.name}</h3>
          {hasGuide && (
            <ArrowUpRight className="h-5 w-5 shrink-0 translate-y-0.5 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
          )}
        </div>
        <p className="mt-1 text-sm text-white/80">{item.tagline}</p>
        {hasGuide && (
          <span className="mt-3 inline-block text-xs font-semibold uppercase tracking-wider text-accent">
            Read the guide
          </span>
        )}
      </div>
    </div>
  );

  if (hasGuide) {
    return (
      <Link href={`/neighborhoods/${item.slug}`} className="block focus-visible:outline-none">
        {inner}
      </Link>
    );
  }
  return inner;
}
