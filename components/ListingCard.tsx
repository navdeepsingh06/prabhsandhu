import Link from "next/link";
import Image from "next/image";
import { BedDouble, Bath, Maximize, MapPin } from "lucide-react";
import type { Listing, ListingStatus } from "@/data/listings";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";

const statusStyles: Record<ListingStatus, string> = {
  New: "bg-accent text-accent-foreground",
  "For Sale": "bg-primary text-primary-foreground",
  Pending: "bg-amber-500 text-white",
  Sold: "bg-neutral-700 text-white",
};

export function ListingCard({ listing, priority = false }: { listing: Listing; priority?: boolean }) {
  const cover = listing.images[0];
  return (
    <article className="surface-card group overflow-hidden hover:shadow-lift">
      <Link href={`/listings/${listing.slug}`} className="block focus-visible:outline-none">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105 motion-reduce:transform-none"
            priority={priority}
          />
          <span
            className={cn(
              "absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold shadow-sm",
              statusStyles[listing.status]
            )}
          >
            {listing.status}
          </span>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-4">
            <p className="font-serif text-2xl font-semibold text-white">
              {formatPrice(listing.price)}
            </p>
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-serif text-lg font-semibold text-foreground">{listing.address}</h3>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-accent-strong" aria-hidden />
            {listing.neighborhood}, {listing.city}
          </p>

          <dl className="mt-4 flex items-center gap-4 border-t border-border pt-4 text-sm text-foreground/80">
            <div className="flex items-center gap-1.5">
              <BedDouble className="h-4 w-4 text-accent-strong" aria-hidden />
              <dt className="sr-only">Bedrooms</dt>
              <dd>{listing.beds} bd</dd>
            </div>
            <div className="flex items-center gap-1.5">
              <Bath className="h-4 w-4 text-accent-strong" aria-hidden />
              <dt className="sr-only">Bathrooms</dt>
              <dd>{listing.baths} ba</dd>
            </div>
            <div className="flex items-center gap-1.5">
              <Maximize className="h-4 w-4 text-accent-strong" aria-hidden />
              <dt className="sr-only">Interior size</dt>
              <dd>{listing.sqft.toLocaleString()} ft²</dd>
            </div>
            <span className="ml-auto text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {listing.type}
            </span>
          </dl>
        </div>
      </Link>
    </article>
  );
}

/** Skeleton placeholder shown while listings "load". */
export function ListingCardSkeleton() {
  return (
    <div className="surface-card overflow-hidden" aria-hidden>
      <div className="skeleton aspect-[4/3]" />
      <div className="space-y-3 p-5">
        <div className="skeleton h-5 w-2/3 rounded" />
        <div className="skeleton h-4 w-1/2 rounded" />
        <div className="skeleton mt-4 h-4 w-full rounded" />
      </div>
    </div>
  );
}
