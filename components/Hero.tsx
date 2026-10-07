import Image from "next/image";
import { Phone } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "./Button";
import { SearchBar } from "./SearchBar";
import { LanguageBadge } from "./LanguageBadge";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[92vh] flex-col justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=2000&q=70"
        alt="A welcoming Winnipeg home at golden hour"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Gradient overlays for legible text (WCAG AA) */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/30" />

      <div className="container-px relative z-10 pb-10 pt-28 lg:pt-32">
        <div className="max-w-2xl">
          <p className="eyebrow text-accent">
            <span className="h-px w-8 bg-accent" aria-hidden /> Winnipeg &amp; Surrounding Area
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Your Winnipeg home journey, guided personally.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
            Personalized, expert real estate service for first-time buyers through seasoned
            investors — with honest guidance every step of the way.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="accent" size="lg">
              Book a Free Consultation
            </Button>
            <Button href="/listings" variant="light" size="lg">
              View Listings
            </Button>
          </div>

          <LanguageBadge className="mt-8" tone="light" />
        </div>

        {/* Search */}
        <div className="mt-10 max-w-4xl">
          <SearchBar />
        </div>
      </div>

      {/* Floating contact chip */}
      <a
        href={site.contact.mobileHref}
        className="container-px relative z-10 hidden items-center gap-2 pb-8 text-sm text-white/80 hover:text-white lg:flex"
      >
        <Phone className="h-4 w-4 text-accent" aria-hidden /> Call {site.contact.mobile} — I&apos;d love to help.
      </a>
    </section>
  );
}
