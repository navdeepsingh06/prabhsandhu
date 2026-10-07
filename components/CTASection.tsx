import { Phone } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "./Button";
import { LanguageBadge } from "./LanguageBadge";
import { ScrollReveal } from "./ScrollReveal";

/** Deep-teal call-to-action banner used near the foot of most pages. */
export function CTASection({
  title = "Let's start your Winnipeg home journey",
  description = "Book a free, no-obligation consultation. I'll listen to your goals and map out a clear plan — in English, Punjabi, or Hindi.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-px py-16 lg:py-20">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">{title}</h2>
          <p className="mt-4 text-primary-foreground/80">{description}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact" variant="accent" size="lg">
              Book a Free Consultation
            </Button>
            <Button href={site.contact.mobileHref} variant="light" size="lg">
              <Phone className="h-4 w-4" aria-hidden /> {site.contact.mobile}
            </Button>
          </div>
          <LanguageBadge className="mt-8 justify-center" tone="light" />
        </ScrollReveal>
      </div>
    </section>
  );
}
