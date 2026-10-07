import { MapPin, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Map placeholder. Shows the address and a "Get directions" link to Google Maps.
 * To use a live embed, replace the inner block with an <iframe> from Google Maps
 * (Embed API) or Mapbox — no API key is required for the basic Google embed link.
 */
export function MapPlaceholder({
  query,
  label,
  className,
}: {
  query: string;
  label?: string;
  className?: string;
}) {
  const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  return (
    <div
      className={cn(
        "relative flex min-h-[220px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted/50 p-6 text-center",
        className
      )}
    >
      {/* Subtle map-grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--color-primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--color-primary)) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <MapPin className="relative h-8 w-8 text-accent-strong" aria-hidden />
      <p className="relative mt-3 text-sm font-medium text-foreground">{label ?? query}</p>
      <a
        href={directions}
        target="_blank"
        rel="noopener noreferrer"
        className="relative mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent-strong underline underline-offset-4"
      >
        Get directions <ExternalLink className="h-3.5 w-3.5" aria-hidden />
      </a>
      <p className="relative mt-2 text-xs text-muted-foreground">Interactive map embed can be added here.</p>
    </div>
  );
}
