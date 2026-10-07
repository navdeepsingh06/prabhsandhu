"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { listingAreas, propertyTypes } from "@/data/listings";
import { cn } from "@/lib/utils";

const priceOptions = [
  { label: "Any price", value: "" },
  { label: "Up to $300K", value: "300000" },
  { label: "Up to $450K", value: "450000" },
  { label: "Up to $600K", value: "600000" },
  { label: "Up to $800K", value: "800000" },
  { label: "$800K+", value: "99000000" },
];

const bedOptions = [
  { label: "Any beds", value: "" },
  { label: "1+", value: "1" },
  { label: "2+", value: "2" },
  { label: "3+", value: "3" },
  { label: "4+", value: "4" },
];

/** Hero search that routes to /listings with query params the page reads. */
export function SearchBar({ className }: { className?: string }) {
  const router = useRouter();
  const [area, setArea] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [beds, setBeds] = useState("");
  const [type, setType] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (area) params.set("area", area);
    if (maxPrice) params.set("maxPrice", maxPrice);
    if (beds) params.set("minBeds", beds);
    if (type) params.set("type", type);
    const qs = params.toString();
    router.push(qs ? `/listings?${qs}` : "/listings");
  }

  const selectClass =
    "w-full rounded-xl border border-border bg-card px-3 py-3 text-sm text-foreground focus:border-accent-strong focus:outline-none focus:ring-2 focus:ring-accent-strong/40";

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "grid grid-cols-2 gap-3 rounded-2xl bg-card/95 p-3 shadow-lift backdrop-blur md:grid-cols-5",
        className
      )}
      aria-label="Search listings"
    >
      <label className="col-span-1">
        <span className="sr-only">Area</span>
        <select className={selectClass} value={area} onChange={(e) => setArea(e.target.value)}>
          <option value="">All areas</option>
          {listingAreas.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </label>

      <label className="col-span-1">
        <span className="sr-only">Property type</span>
        <select className={selectClass} value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">All types</option>
          {propertyTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>

      <label className="col-span-1">
        <span className="sr-only">Maximum price</span>
        <select className={selectClass} value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}>
          {priceOptions.map((o) => (
            <option key={o.label} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </label>

      <label className="col-span-1">
        <span className="sr-only">Bedrooms</span>
        <select className={selectClass} value={beds} onChange={(e) => setBeds(e.target.value)}>
          {bedOptions.map((o) => (
            <option key={o.label} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        className="col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:bg-accent-strong md:col-span-1"
      >
        <Search className="h-4 w-4" aria-hidden />
        Search
      </button>
    </form>
  );
}
