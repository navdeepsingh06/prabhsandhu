import { ScrollReveal } from "./ScrollReveal";
import { cn } from "@/lib/utils";

/**
 * Inner-page header band (deep teal) that sits beneath the fixed header. The
 * top padding clears the header; the header is solid on these routes.
 */
export function PageHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <section className={cn("bg-primary text-primary-foreground", className)}>
      <div className="container-px pb-14 pt-28 lg:pb-16 lg:pt-36">
        <ScrollReveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
          {eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {eyebrow}
            </p>
          )}
          <h1 className="font-serif text-4xl font-semibold leading-[1.1] sm:text-5xl">{title}</h1>
          {description && (
            <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">{description}</p>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
