import { ScrollReveal } from "./ScrollReveal";

export interface TimelineStep {
  title: string;
  body: string;
}

/** Vertical numbered process timeline used on the Buy and Sell pages. */
export function Timeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <ol className="relative space-y-8 before:absolute before:left-[19px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border">
      {steps.map((step, i) => (
        <ScrollReveal as="li" key={step.title} delay={i * 0.06} className="relative flex gap-5">
          <span
            className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-serif text-sm font-semibold text-primary-foreground ring-4 ring-background"
            aria-hidden
          >
            {i + 1}
          </span>
          <div className="pt-1">
            <h3 className="font-serif text-lg font-semibold">{step.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
          </div>
        </ScrollReveal>
      ))}
    </ol>
  );
}
