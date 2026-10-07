import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { getFeaturedListings } from "@/lib/listings-source";
import { neighborhoodCards } from "@/data/neighborhoods";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { FeaturedListings } from "@/components/FeaturedListings";
import { WhyWorkWithMe } from "@/components/WhyWorkWithMe";
import { StatsRow } from "@/components/StatsRow";
import { NeighborhoodGrid } from "@/components/NeighborhoodGrid";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { ContactForm } from "@/components/ContactForm";
import { LanguageBadge } from "@/components/LanguageBadge";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/Button";

export default async function HomePage() {
  const featured = await getFeaturedListings(4);

  return (
    <>
      <Hero />

      {/* Featured listings */}
      <section className="container-px py-20 lg:py-28">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Featured Properties"
            title="Handpicked Winnipeg homes"
            description="A sample of the kind of homes I help clients buy and sell across the city."
          />
          <Button href="/listings" variant="outline" className="shrink-0">
            View all listings <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
        <FeaturedListings listings={featured} />
        <p className="mt-6 text-xs text-muted-foreground">
          Sample listings shown for demonstration. Live MLS® listings connect via an authorized
          brokerage feed.
        </p>
      </section>

      {/* Why work with me */}
      <section className="bg-sand/60 py-20 lg:py-28">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="Why Work With Prabhdeep"
            title="A calmer, clearer way to buy and sell"
            description="Boutique, personal service — backed by six-plus years of local experience."
            className="mb-12"
          />
          <WhyWorkWithMe />
        </div>
      </section>

      {/* Stats */}
      <section className="container-px py-16 lg:py-20">
        <StatsRow />
      </section>

      {/* Bio teaser */}
      <section className="container-px py-10 pb-20 lg:pb-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal from="right">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl bg-muted shadow-soft">
              <Image
                src={site.agent.portrait}
                alt={site.agent.portraitAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <p className="eyebrow mb-3">Meet Prabhdeep</p>
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
              Turning property dreams into reality — in your language.
            </h2>
            <div className="mt-5 space-y-4 text-muted-foreground">
              <p>{site.bio.long[0]}</p>
              <p>{site.bio.long[1]}</p>
            </div>
            <LanguageBadge variant="greetings" className="mt-6" />
            <div className="mt-8">
              <Button href="/about" variant="primary">
                More about me <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="bg-sand/60 py-20 lg:py-28">
        <div className="container-px">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Explore Winnipeg"
              title="Neighbourhoods I know and love"
              description="From riverside character homes to brand-new master-planned communities."
            />
            <Button href="/neighborhoods" variant="outline" className="shrink-0">
              All neighbourhoods <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>
          <NeighborhoodGrid items={neighborhoodCards.slice(0, 8)} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-px py-20 lg:py-28">
        <SectionHeading
          align="center"
          eyebrow="Client Stories"
          title="Trusted by Winnipeg families"
          className="mb-10"
        />
        <TestimonialSlider />
      </section>

      {/* Final CTA with contact form */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="container-px grid gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Let&apos;s Talk
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
              Book your free consultation
            </h2>
            <p className="mt-4 max-w-md text-primary-foreground/80">
              Tell me a little about your goals and I&apos;ll follow up personally — usually within
              one business day. No pressure, no obligation.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-primary-foreground/85">
              <li>
                <Link href={site.contact.mobileHref} className="hover:text-accent">
                  Mobile · {site.contact.mobile}
                </Link>
              </li>
              <li>
                <Link href={site.contact.emailHref} className="break-all hover:text-accent">
                  {site.contact.email}
                </Link>
              </li>
              <li className="text-primary-foreground/70">
                {site.address.street}, {site.address.city}, {site.address.region}{" "}
                {site.address.postalCode}
              </li>
            </ul>
          </div>
          <div className="rounded-3xl bg-background p-6 text-foreground shadow-lift sm:p-8">
            <ContactForm formType="consultation" submitLabel="Book my consultation" />
          </div>
        </div>
      </section>
    </>
  );
}
