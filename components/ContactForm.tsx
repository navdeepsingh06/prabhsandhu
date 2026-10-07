"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";
import { contactSchema, type ContactInput } from "@/lib/validation";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

/** Build a pre-filled mailto: link from the submitted values. */
function buildMailto(values: ContactInput): string {
  const subject = `New ${values.formType} inquiry — ${values.name}`;
  const body = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    values.phone ? `Phone: ${values.phone}` : null,
    values.listing ? `Listing: ${values.listing}` : null,
    values.address ? `Property address: ${values.address}` : null,
    values.preferredDate ? `Preferred date/time: ${values.preferredDate}` : null,
    "",
    "Message:",
    values.message,
  ]
    .filter((l) => l !== null)
    .join("\n");
  return `${site.contact.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export type FormType = "contact" | "showing" | "valuation" | "consultation";

interface ContactFormProps {
  formType?: FormType;
  /** Pre-fill listing context (e.g. from a listing detail page). */
  listing?: string;
  /** Show a date field (showing requests). */
  showDate?: boolean;
  /** Show an address field (home valuation). */
  showAddress?: boolean;
  messageLabel?: string;
  messagePlaceholder?: string;
  submitLabel?: string;
  className?: string;
}

const fieldBase =
  "w-full rounded-xl border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 transition";

export function ContactForm({
  formType = "contact",
  listing,
  showDate = false,
  showAddress = false,
  messageLabel = "How can I help?",
  messagePlaceholder = "Tell me a little about what you're looking for…",
  submitLabel = "Send message",
  className,
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      formType,
      listing: listing ?? "",
      company: "",
      consent: false,
    },
  });

  // Static site (GitHub Pages): no server. Open the visitor's email client
  // pre-filled so the message goes straight to the agent's inbox.
  function onSubmit(values: ContactInput) {
    setStatus("idle");
    // Honeypot: silently "succeed" without doing anything.
    if (values.company) {
      setStatus("success");
      return;
    }
    try {
      window.location.href = buildMailto(values);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  const err = (field: keyof ContactInput) =>
    errors[field] ? "border-red-400 focus:ring-red-300" : "border-border focus:ring-accent-strong/40 focus:border-accent-strong";

  const ErrorText = ({ field }: { field: keyof ContactInput }) =>
    errors[field] ? (
      <p className="mt-1 text-xs text-red-600" role="alert">
        {errors[field]?.message as string}
      </p>
    ) : null;

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center",
          className
        )}
        role="status"
      >
        <CheckCircle2 className="h-12 w-12 text-green-600" aria-hidden />
        <h3 className="mt-4 font-serif text-xl font-semibold">Your email is ready to send</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Your email app should have opened with your message filled in — just press send and I&apos;ll
          follow up personally, usually within one business day.
        </p>
        <p className="mt-3 max-w-sm text-sm text-muted-foreground">
          Didn&apos;t open? Email me directly at{" "}
          <a href={site.contact.emailHref} className="font-medium text-accent-strong underline underline-offset-4">
            {site.contact.email}
          </a>{" "}
          or call {site.contact.mobile}.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-medium text-accent-strong underline underline-offset-4"
        >
          Compose another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-4", className)} noValidate>
      {/* Honeypot (hidden from users & AT) */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        {...register("company")}
      />
      <input type="hidden" {...register("formType")} />
      {listing && <input type="hidden" {...register("listing")} />}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1 block text-sm font-medium">
            Name <span className="text-accent-strong">*</span>
          </label>
          <input
            id="cf-name"
            autoComplete="name"
            className={cn(fieldBase, err("name"))}
            placeholder="Your full name"
            {...register("name")}
          />
          <ErrorText field="name" />
        </div>
        <div>
          <label htmlFor="cf-phone" className="mb-1 block text-sm font-medium">
            Phone
          </label>
          <input
            id="cf-phone"
            type="tel"
            autoComplete="tel"
            className={cn(fieldBase, err("phone"))}
            placeholder="(204) 000-0000"
            {...register("phone")}
          />
          <ErrorText field="phone" />
        </div>
      </div>

      <div>
        <label htmlFor="cf-email" className="mb-1 block text-sm font-medium">
          Email <span className="text-accent-strong">*</span>
        </label>
        <input
          id="cf-email"
          type="email"
          autoComplete="email"
          className={cn(fieldBase, err("email"))}
          placeholder="you@example.com"
          {...register("email")}
        />
        <ErrorText field="email" />
      </div>

      {showAddress && (
        <div>
          <label htmlFor="cf-address" className="mb-1 block text-sm font-medium">
            Property address
          </label>
          <input
            id="cf-address"
            className={cn(fieldBase, err("address"))}
            placeholder="123 Example St, Winnipeg, MB"
            {...register("address")}
          />
          <ErrorText field="address" />
        </div>
      )}

      {showDate && (
        <div>
          <label htmlFor="cf-date" className="mb-1 block text-sm font-medium">
            Preferred date / time
          </label>
          <input
            id="cf-date"
            className={cn(fieldBase, err("preferredDate"))}
            placeholder="e.g. Saturday afternoon"
            {...register("preferredDate")}
          />
          <ErrorText field="preferredDate" />
        </div>
      )}

      <div>
        <label htmlFor="cf-message" className="mb-1 block text-sm font-medium">
          {messageLabel} <span className="text-accent-strong">*</span>
        </label>
        <textarea
          id="cf-message"
          rows={5}
          className={cn(fieldBase, "resize-y", err("message"))}
          placeholder={messagePlaceholder}
          {...register("message")}
        />
        <ErrorText field="message" />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-muted-foreground">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-border text-accent-strong focus:ring-accent-strong"
            {...register("consent")}
          />
          <span>
            I agree to be contacted about my inquiry and have read the{" "}
            <a href="/privacy" className="text-accent-strong underline underline-offset-2">
              privacy policy
            </a>
            .
          </span>
        </label>
        <ErrorText field="consent" />
      </div>

      {status === "error" && (
        <p className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden />
          Couldn&apos;t open your email app. Please email me directly at {site.contact.email}.
        </p>
      )}

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-soft transition hover:bg-accent-strong hover:shadow-lift disabled:opacity-60 sm:w-auto"
      >
        <Send className="h-4 w-4" aria-hidden /> {submitLabel}
      </button>
    </form>
  );
}
