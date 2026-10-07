import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

/** Reusable compliance disclaimer for listing pages. */
export function Disclaimer({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "flex items-start gap-2 rounded-xl border border-border bg-muted/40 px-4 py-3 text-xs leading-relaxed text-muted-foreground",
        className
      )}
    >
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent-strong" aria-hidden />
      <span>
        {children ?? (
          <>
            Property information is deemed reliable but is not guaranteed accurate. Listings shown
            here are sample data for demonstration. Independent verification is recommended. Live
            MLS® listings will be provided through an authorized brokerage feed.
          </>
        )}
      </span>
    </p>
  );
}
