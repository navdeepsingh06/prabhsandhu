"use client";

import { useCallback, useEffect, useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { testimonials } from "@/data/testimonials";

export function TestimonialSlider() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const count = testimonials.length;
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  // Auto-advance (paused on hover/focus; disabled for reduced motion).
  useEffect(() => {
    if (paused || reduce) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [paused, reduce, next]);

  const t = testimonials[index];

  return (
    <div
      className="relative mx-auto max-w-3xl text-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Client testimonials"
    >
      <Quote className="mx-auto h-10 w-10 text-accent/40" aria-hidden />

      <div className="relative mt-4 min-h-[180px] sm:min-h-[160px]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex justify-center gap-1" aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" aria-hidden />
              ))}
            </div>
            <p className="mt-4 font-serif text-xl leading-relaxed text-foreground sm:text-2xl">
              “{t.quote}”
            </p>
            <footer className="mt-5 text-sm">
              <span className="font-semibold text-primary">{t.author}</span>
              <span className="mx-2 text-border">|</span>
              <span className="text-muted-foreground">{t.context}</span>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition hover:bg-primary hover:text-primary-foreground"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex gap-2" role="tablist" aria-label="Choose testimonial">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === index}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-accent" : "w-2 bg-border hover:bg-accent/50"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition hover:bg-primary hover:text-primary-foreground"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <p className="mt-5 text-xs text-muted-foreground">
        Sample testimonials shown for layout. Real client reviews will appear here.
      </p>
    </div>
  );
}
