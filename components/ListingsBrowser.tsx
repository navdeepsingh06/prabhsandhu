"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal, X, SearchX } from "lucide-react";
import type { Listing } from "@/data/listings";
import { propertyTypes } from "@/data/listings";
import { ListingCard, ListingCardSkeleton } from "./ListingCard";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

type SortKey = "newest" | "price-asc" | "price-desc" | "beds-desc";

const sortOptions: { value: SortKey; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "beds-desc", label: "Most Bedrooms" },
];

export function ListingsBrowser({
  listings,
  areas,
}: {
  listings: Listing[];
  areas: string[];
}) {
  // Initial filters come from the URL (?area=…&maxPrice=…&minBeds=…&type=…),
  // set by the hero SearchBar. Read on the client so the page stays static.
  const params = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [area, setArea] = useState(() => params.get("area") ?? "");
  const [type, setType] = useState(() => params.get("type") ?? "");
  const [maxPrice, setMaxPrice] = useState(() => params.get("maxPrice") ?? "");
  const [minBeds, setMinBeds] = useState(() => params.get("minBeds") ?? "");
  const [status, setStatus] = useState(() => params.get("status") ?? "");
  const [sort, setSort] = useState<SortKey>("newest");
  const [showFilters, setShowFilters] = useState(false);

  // Brief skeleton on mount to demonstrate the loading state (and to mirror the
  // latency of a future live feed).
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 450);
    return () => clearTimeout(t);
  }, []);

  const filtered = useMemo(() => {
    const max = maxPrice ? Number(maxPrice) : Infinity;
    const beds = minBeds ? Number(minBeds) : 0;
    const result = listings.filter((l) => {
      if (area && l.neighborhood !== area) return false;
      if (type && l.type !== type) return false;
      if (status && l.status !== status) return false;
      if (l.price > max) return false;
      if (l.beds < beds) return false;
      return true;
    });

    result.sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "beds-desc":
          return b.beds - a.beds;
        default:
          return b.listedOn.localeCompare(a.listedOn);
      }
    });
    return result;
  }, [listings, area, type, status, maxPrice, minBeds, sort]);

  const hasActiveFilters = area || type || maxPrice || minBeds || status;

  function reset() {
    setArea("");
    setType("");
    setMaxPrice("");
    setMinBeds("");
    setStatus("");
  }

  const selectClass =
    "w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm text-foreground focus:border-accent-strong focus:outline-none focus:ring-2 focus:ring-accent-strong/40";

  const Filters = (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      <label>
        <span className="mb-1 block text-xs font-medium text-muted-foreground">Area</span>
        <select className={selectClass} value={area} onChange={(e) => setArea(e.target.value)}>
          <option value="">All areas</option>
          {areas.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span className="mb-1 block text-xs font-medium text-muted-foreground">Type</span>
        <select className={selectClass} value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">All types</option>
          {propertyTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span className="mb-1 block text-xs font-medium text-muted-foreground">Status</span>
        <select className={selectClass} value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Any status</option>
          <option value="New">New</option>
          <option value="For Sale">For Sale</option>
          <option value="Pending">Pending</option>
          <option value="Sold">Sold</option>
        </select>
      </label>
      <label>
        <span className="mb-1 block text-xs font-medium text-muted-foreground">Max price</span>
        <select className={selectClass} value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}>
          <option value="">Any</option>
          <option value="300000">$300K</option>
          <option value="450000">$450K</option>
          <option value="600000">$600K</option>
          <option value="800000">$800K</option>
          <option value="1500000">$1.5M</option>
        </select>
      </label>
      <label>
        <span className="mb-1 block text-xs font-medium text-muted-foreground">Beds</span>
        <select className={selectClass} value={minBeds} onChange={(e) => setMinBeds(e.target.value)}>
          <option value="">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
      </label>
      <label>
        <span className="mb-1 block text-xs font-medium text-muted-foreground">Sort</span>
        <select
          className={selectClass}
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
        >
          {sortOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );

  return (
    <div>
      {/* Toolbar */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground" aria-live="polite">
          {loading ? "Loading listings…" : `${filtered.length} ${filtered.length === 1 ? "property" : "properties"}`}
          {hasActiveFilters && !loading && (
            <button
              onClick={reset}
              className="ml-3 inline-flex items-center gap-1 text-accent-strong underline underline-offset-2"
            >
              <X className="h-3.5 w-3.5" aria-hidden /> Clear filters
            </button>
          )}
        </p>
        <button
          onClick={() => setShowFilters((v) => !v)}
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium lg:hidden"
          aria-expanded={showFilters}
        >
          <SlidersHorizontal className="h-4 w-4" aria-hidden /> Filters
        </button>
      </div>

      {/* Filters: always visible on desktop, toggle on mobile */}
      <div className={cn("mb-8 rounded-2xl border border-border bg-muted/40 p-4", !showFilters && "hidden lg:block")}>
        {Filters}
      </div>

      {/* Grid / skeleton / empty */}
      {loading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <ListingCardSkeleton key={i} />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-muted/30 py-20 text-center">
          <SearchX className="h-10 w-10 text-muted-foreground" aria-hidden />
          <h3 className="mt-4 text-xl">No properties match your filters</h3>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Try widening your search, or get in touch — I can set up a custom search for off-market
            and brand-new listings.
          </p>
          <div className="mt-6 flex gap-3">
            <Button variant="outline" size="sm" onClick={reset}>
              Clear filters
            </Button>
            <Button href="/contact" variant="accent" size="sm">
              Contact Prabhdeep
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((l, i) => (
            <ListingCard key={l.slug} listing={l} priority={i < 3} />
          ))}
        </div>
      )}
    </div>
  );
}
