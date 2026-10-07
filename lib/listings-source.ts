/**
 * LISTINGS SOURCE ADAPTER
 * =======================================================================
 * This is the single seam between the UI and wherever listings come from.
 * Today it returns the local sample data in `data/listings.ts`. When the
 * brokerage connects a live MLS® feed, implement a provider here that returns
 * the SAME `Listing[]` shape and the rest of the site keeps working unchanged.
 *
 * ❗ COMPLIANCE: Connect listings only through an authorized feed — typically
 * CREA's DDF® (Data Distribution Facility) or a brokerage-approved IDX/VOW
 * provider, under a signed data agreement. Do NOT scrape REALTOR.ca or the
 * WinMax website; their terms of use prohibit it and it risks the brokerage's
 * MLS® access.
 *
 * Suggested path to go live:
 *   1. Obtain DDF credentials via WinMax Real Estate Ltd. / CREA.
 *   2. Set DDF_FEED_URL and DDF_API_KEY in your environment (.env.local).
 *   3. Implement `fetchFromDDF()` below (RETS/OData or the provider's REST API),
 *      mapping feed fields to the `Listing` interface.
 *   4. Flip `SOURCE` to "ddf". No UI changes required.
 * =======================================================================
 */

import { listings as sampleListings, type Listing } from "@/data/listings";

type Source = "sample" | "ddf";

// Switch to "ddf" once fetchFromDDF() is implemented and credentials are set.
const SOURCE: Source = "sample";

export interface ListingQuery {
  area?: string;
  type?: string;
  minPrice?: number;
  maxPrice?: number;
  minBeds?: number;
  status?: string;
}

/** Returns all listings from the active source. */
export async function getListings(): Promise<Listing[]> {
  if (SOURCE === "ddf") {
    try {
      return await fetchFromDDF();
    } catch (err) {
      // Fail safe to sample data so the page never breaks.
      console.error("DDF feed error, falling back to sample listings:", err);
      return sampleListings;
    }
  }
  return sampleListings;
}

export async function getListingBySlug(slug: string): Promise<Listing | undefined> {
  const all = await getListings();
  return all.find((l) => l.slug === slug);
}

export async function getFeaturedListings(limit = 4): Promise<Listing[]> {
  const all = await getListings();
  const featured = all.filter((l) => l.featured && l.status !== "Sold");
  return (featured.length ? featured : all).slice(0, limit);
}

/** Server-side filter helper (also mirrored client-side for instant UX). */
export function filterListings(all: Listing[], q: ListingQuery): Listing[] {
  return all.filter((l) => {
    if (q.area && l.neighborhood !== q.area) return false;
    if (q.type && l.type !== q.type) return false;
    if (q.status && l.status !== q.status) return false;
    if (typeof q.minPrice === "number" && l.price < q.minPrice) return false;
    if (typeof q.maxPrice === "number" && l.price > q.maxPrice) return false;
    if (typeof q.minBeds === "number" && l.beds < q.minBeds) return false;
    return true;
  });
}

/**
 * TODO: Implement against your authorized DDF/IDX provider.
 * Example shape only — replace with the real request + field mapping.
 */
async function fetchFromDDF(): Promise<Listing[]> {
  const url = process.env.DDF_FEED_URL;
  const key = process.env.DDF_API_KEY;
  if (!url || !key) throw new Error("DDF_FEED_URL / DDF_API_KEY not configured");

  // const res = await fetch(url, { headers: { Authorization: `Bearer ${key}` } });
  // const data = await res.json();
  // return data.map(mapDdfRecordToListing);
  throw new Error("fetchFromDDF() not implemented yet");
}
