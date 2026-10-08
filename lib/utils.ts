import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind class names safely (dedupes conflicting utilities). */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Prefix a local public-folder asset path with the deployment basePath.
 * Needed because next/image does not add basePath to unoptimized string srcs.
 * Returns the path unchanged at the root (local dev / Vercel), and prefixed
 * with /<repo> on GitHub Pages. Only use for local paths (leading "/"), not
 * absolute URLs.
 */
export function asset(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${base}${path}`;
}

/** Format a number as Canadian dollars with no decimals. */
export function formatPrice(value: number): string {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(value);
}

/** Compact price for tight spaces, e.g. $629K / $1.2M. */
export function formatPriceCompact(value: number): string {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

/** Format an ISO date as e.g. "September 20, 2026". */
export function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-CA").format(value);
}
