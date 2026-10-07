import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const fontClass: Record<string, string> = {
  sans: "font-sans",
  gurmukhi: "font-gurmukhi",
  devanagari: "font-devanagari",
};

/**
 * Language strip highlighting the agent's trilingual service.
 * `variant="strip"` is the compact hero strip; `variant="greetings"` shows the
 * native greeting in each script (uses the Gurmukhi/Devanagari fonts).
 */
export function LanguageBadge({
  variant = "strip",
  className,
  tone = "light",
}: {
  variant?: "strip" | "greetings";
  className?: string;
  tone?: "light" | "dark";
}) {
  if (variant === "greetings") {
    return (
      <ul className={cn("flex flex-wrap gap-3", className)}>
        {site.languages.map((l) => (
          <li
            key={l.label}
            className="surface-card flex flex-col items-center px-5 py-3 text-center"
          >
            <span className={cn("text-xl text-primary", fontClass[l.font])}>{l.greeting}</span>
            <span className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {l.label}
            </span>
          </li>
        ))}
      </ul>
    );
  }

  const toneClass =
    tone === "light"
      ? "text-white/90"
      : "text-primary";

  return (
    <div
      className={cn(
        "inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm font-medium",
        toneClass,
        className
      )}
      aria-label={`Service available in ${site.languages.map((l) => l.label).join(", ")}`}
    >
      <span className="uppercase tracking-[0.18em] text-accent">Speaking</span>
      {site.languages.map((l, i) => (
        <span key={l.label} className="inline-flex items-center gap-3">
          <span className={cn(fontClass[l.font])}>{l.native}</span>
          {i < site.languages.length - 1 && (
            <span aria-hidden className="text-accent/70">
              ·
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
