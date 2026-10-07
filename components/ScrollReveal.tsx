"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Direction the element eases in from. */
  from?: "up" | "down" | "left" | "right" | "fade";
  as?: "div" | "section" | "li" | "article";
}

const offsets: Record<NonNullable<ScrollRevealProps["from"]>, { x?: number; y?: number }> = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: 24 },
  right: { x: -24 },
  fade: {},
};

/**
 * Scroll-into-view reveal. Respects prefers-reduced-motion by rendering the
 * content statically (no transform/opacity animation).
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  from = "up",
  as = "div",
}: ScrollRevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={cn(className)}
      initial={{ opacity: 0, ...offsets[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
