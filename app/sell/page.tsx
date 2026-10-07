import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Timeline, type TimelineStep } from "@/components/Timeline";
import { FAQAccordion } from "@/components/FAQAccordion";
import { HomeValuationForm } from "@/components/HomeValuationForm";
import { CTASection } from "@/components/CTASection";
import { sellFaqs } from "@/data/faqs";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Selling Your Winnipeg Home",
  description:
    "Sell your Winnipeg home with confidence. A proven process, honest pricing, and multilingual marketing — plus a free, no-obligation home evaluation.",
  path: "/sell",
});

const steps: TimelineStep[] = [
  {
    title: "Consultation & valuation",
    body: "We meet, walk your home, and I prepare a comparative market analysis so we price with real data — not guesswork.",
  },
  {
    title: "Prepare & stage",
    body: "I recommend only the improvements likely to pay off, then arrange professional photography that makes your home shine.",
  },
  {
    title: "List & market",
    body: "Your home goes live on the MLS® with broad exposure, social media, and my personal network — presented in English, Punjabi, and Hindi.",
  },
  {
    title: "Showings & offers",
    body: "I coordinate showings, gather feedback, and help you weigh each offer on price, conditions, and timing — negotiating for your best outcome.",
  },
  {
    title: "Conditions & closing",
    body: "Once conditions are satisfied, your lawyer completes the paperwork and the sale closes on your possession date. Smooth and on time.",
  },
];

export default function SellPage() {
  return (
    <>
      <PageHeader
        eyebrow="For Sellers"
        title="Sell for more, with less stress"
        description="A clear process, honest pricing advice, and marketing that reaches more qualified buyers across Winnipeg's diverse communities."
      />

      {/* Valuation lead form + process */}
      <section className="container-px py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="The Process" title="How we'll sell your home" className="mb-8" />
            <Timeline steps={steps} />
          </div>

          <div>
            <div className="surface-card p-6 sm:p-8">
              <p className="eyebrow mb-2">Free &amp; No Obligation</p>
              <h2 className="font-serif text-2xl font-semibold">What&apos;s my home worth?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Get a personalized home evaluation based on current Winnipeg market data. I&apos;ll
                follow up with a realistic price range and a plan to maximize your sale.
              </p>
              <div className="mt-6">
                <HomeValuationForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand/60 py-20 lg:py-24">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="Questions"
            title="Seller FAQ"
            description="What Winnipeg homeowners most want to know before they list."
            className="mb-10"
          />
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={sellFaqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Thinking about selling?"
        description="Let's talk strategy and timing. Book a free, no-obligation consultation today."
      />
    </>
  );
}
