import type { Metadata } from "next";
import Image from "next/image";
import { Award, Users, Languages, HandHeart, ShieldCheck, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import { asset } from "@/lib/utils";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsRow } from "@/components/StatsRow";
import { LanguageBadge } from "@/components/LanguageBadge";
import { CTASection } from "@/components/CTASection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Prabhdeep Sandhu",
  description:
    "Meet Prabhdeep Sandhu, REALTOR® with WinMax Real Estate Ltd. — 6+ years guiding Winnipeg buyers, sellers, and investors with personalized, multilingual service in English, Punjabi, and Hindi.",
  path: "/about",
});

const values = [
  { icon: HandHeart, title: "Personalized", body: "Advice tailored to your goals, never a one-size-fits-all script." },
  { icon: ShieldCheck, title: "Honest", body: "Straight answers, even when they're not what you hoped to hear." },
  { icon: Sparkles, title: "Detail-oriented", body: "Nothing slips through the cracks, from first showing to closing." },
  { icon: Languages, title: "Inclusive", body: "Full service in English, Punjabi, and Hindi for you and your family." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Hi, I'm Prabhdeep — your Winnipeg real estate partner."
        description="Six-plus years of local experience, and a genuinely personal approach to one of life's biggest decisions."
      />

      {/* Story + portrait */}
      <section className="container-px py-16 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-5 lg:gap-16">
          <ScrollReveal from="right" className="lg:col-span-2">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl bg-muted shadow-soft">
              <Image
                src={asset(site.agent.portrait)}
                alt={site.agent.portraitAlt}
                fill
                sizes="(min-width: 1024px) 35vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="mx-auto mt-6 max-w-sm rounded-2xl border border-border bg-card p-5 text-sm">
              <p className="font-semibold text-primary">{site.agent.name}, {site.agent.title}</p>
              <p className="text-muted-foreground">{site.brokerage.name}</p>
              <p className="mt-2 text-muted-foreground">
                As seen on REALTOR.ca as {site.agent.legalName}
              </p>
            </div>
          </ScrollReveal>

          <div className="lg:col-span-3">
            <SectionHeading eyebrow="My Story" title="Real estate, made personal" className="mb-6" />
            <div className="space-y-4 text-muted-foreground">
              {site.bio.long.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-5">
                <Award className="h-6 w-6 text-accent-strong" aria-hidden />
                <p className="mt-3 font-serif text-2xl font-semibold text-primary">6+ Years</p>
                <p className="text-sm text-muted-foreground">of local experience</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <Languages className="h-6 w-6 text-accent-strong" aria-hidden />
                <p className="mt-3 font-serif text-2xl font-semibold text-primary">3 Languages</p>
                <p className="text-sm text-muted-foreground">English · Punjabi · Hindi</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <Users className="h-6 w-6 text-accent-strong" aria-hidden />
                <p className="mt-3 font-serif text-2xl font-semibold text-primary">All Clients</p>
                <p className="text-sm text-muted-foreground">first-timers to investors</p>
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-3 text-sm font-medium text-foreground">A warm welcome in every language:</p>
              <LanguageBadge variant="greetings" />
            </div>
          </div>
        </div>
      </section>

      {/* Approach / values */}
      <section className="bg-sand/60 py-20 lg:py-24">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="My Approach"
            title="What you can count on"
            description="The values that guide how I work with every client."
            className="mb-12"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <ScrollReveal
                key={v.title}
                as="article"
                delay={i * 0.08}
                className="surface-card p-6 text-center"
              >
                <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent-strong">
                  <v.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container-px py-16 lg:py-20">
        <StatsRow />
      </section>

      {/* Community */}
      <section className="container-px pb-20 lg:pb-24">
        <div className="grid items-center gap-10 rounded-3xl bg-primary px-6 py-12 text-primary-foreground lg:grid-cols-2 lg:px-12 lg:py-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Community
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold">Proud to serve Winnipeg</h2>
            <p className="mt-4 text-primary-foreground/80">
              Winnipeg is a city of welcoming, diverse communities — and I&apos;m proud to help
              families from all backgrounds find their place in it. Serving clients in English,
              Punjabi, and Hindi means more neighbours feel truly understood throughout one of
              life&apos;s biggest decisions.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=70"
              alt="A family celebrating in their new home"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
