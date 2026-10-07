"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";
import { z } from "zod";

const emailSchema = z.string().email();

/** Lightweight newsletter signup. Posts to /api/contact as a "newsletter" lead. */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!emailSchema.safeParse(email).success) {
      setState("error");
      return;
    }
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "contact",
          name: "Newsletter subscriber",
          email,
          message: "Newsletter signup from website footer.",
          consent: true,
        }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <p className="inline-flex items-center gap-2 text-sm text-primary-foreground/90">
        <Check className="h-4 w-4 text-accent" aria-hidden />
        Thanks! You&apos;re on the list.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-sm gap-2" noValidate>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (state === "error") setState("idle");
        }}
        placeholder="Your email address"
        aria-invalid={state === "error"}
        className="min-w-0 flex-1 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/60"
      />
      <button
        type="submit"
        disabled={state === "loading"}
        className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground transition hover:bg-accent-strong disabled:opacity-60"
      >
        <Send className="h-4 w-4" aria-hidden />
        <span className="hidden sm:inline">Subscribe</span>
      </button>
    </form>
  );
}
