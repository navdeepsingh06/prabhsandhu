import type { Metadata } from "next";
import { Lightbulb } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Timeline, type TimelineStep } from "@/components/Timeline";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { buyFaqs } from "@/data/faqs";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Buying a Home in Winnipeg",
  description:
    "A clear, step-by-step guide to buying a home in Winnipeg — from pre-approval to possession — with first-time buyer tips and Manitoba-specific FAQs.",
  path: "/buy",
});

const steps: TimelineStep[] = [
  {
    title: "Pre-approval",
    body: "We start by getting you pre-approved so you know your budget and can shop with confidence. I'll connect you with trusted mortgage professionals if you need one.",
  },
  {
    title: "Search",
    body: "Together we define your must-haves and tour homes across the neighbourhoods that fit your life and budget. I flag anything that could affect value or cost.",
  },
  {
    title: "Offer",
    body: "When you find the one, I prepare a competitive, well-protected offer and negotiate hard on your behalf — price, possession date, deposit, and conditions.",
  },
  {
    title: "Conditions",
    body: "After acceptance, we satisfy conditions like financing and a home inspection. If something unexpected comes up, we revisit the deal together.",
  },
  {
    title: "Possession",
    body: "Your lawyer handles the paperwork and transfer of funds, and the keys are yours. I'm here before, during, and long after closing.",
  },
];

const tips = [
  "Get pre-approved before you fall in love with a home — it sets a realistic budget and strengthens your offers.",
  "Budget beyond the down payment: land transfer tax, legal fees, inspection, and moving costs add up.",
  "Explore first-time buyer tools like the FHSA, the Home Buyers' Plan, and the Home Buyers' Amount.",
  "Don't skip the home inspection — it's inexpensive insurance against costly surprises.",
  "Think about resale from day one: location, layout, and lot often matter more than finishes.",
  "Lean on me for referrals — lenders, lawyers, and inspectors I trust to treat you well.",
];

export default function BuyPage() {
  return (
    <>
      <PageHeader
        eyebrow="For Buyers"
        title="Buying a home in Winnipeg, step by step"
        description="Whether it's your first home or your fifth, here's exactly how we'll get you there — calmly and confidently."
      />

      {/* Timeline */}
      <section className="container-px py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="The Process"
              title="From first look to front-door keys"
              className="mb-8"
            />
            <Timeline steps={steps} />
          </div>

          {/* First-time buyer tips */}
          <div>
            <SectionHeading eyebrow="First-Time Buyers" title="Six tips worth knowing" className="mb-8" />
            <ul className="space-y-4">
              {tips.map((tip, i) => (
                <ScrollReveal
                  as="li"
                  key={i}
                  delay={i * 0.05}
                  className="surface-card flex items-start gap-3 p-4"
                >
                  <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-accent-strong" aria-hidden />
                  <span className="text-sm leading-relaxed text-foreground/85">{tip}</span>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand/60 py-20 lg:py-24">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="Questions"
            title="Buyer FAQ"
            description="Straight answers to the questions I hear most from Winnipeg buyers."
            className="mb-10"
          />
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={buyFaqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to start your home search?"
        description="Book a free consultation and let's map out your plan — in English, Punjabi, or Hindi."
      />
    </>
  );
}
