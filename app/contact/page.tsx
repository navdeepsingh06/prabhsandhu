import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { site } from "@/data/site";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { MapPlaceholder } from "@/components/MapPlaceholder";
import { SocialLinks } from "@/components/SocialLinks";
import { LanguageBadge } from "@/components/LanguageBadge";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Prabhdeep Sandhu",
  description:
    "Get in touch with Prabhdeep Sandhu, REALTOR® with WinMax Real Estate Ltd. in Winnipeg. Call, email, or send a message — service in English, Punjabi, and Hindi.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's connect"
        description="Have a question or ready to get started? Reach out any way you like — I'd love to help."
      />

      <section className="container-px py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Details */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl font-semibold">Get in touch directly</h2>
            <ul className="mt-6 space-y-5">
              <li>
                <a href={site.contact.mobileHref} className="group flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent-strong">
                    <Phone className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                      Mobile (call or text)
                    </span>
                    <span className="font-medium group-hover:text-accent-strong">
                      {site.contact.mobile}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href={site.contact.officeHref} className="group flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent-strong">
                    <Phone className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                      Office
                    </span>
                    <span className="font-medium group-hover:text-accent-strong">
                      {site.contact.office}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href={site.contact.emailHref} className="group flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent-strong">
                    <Mail className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                      Email
                    </span>
                    <span className="break-all font-medium group-hover:text-accent-strong">
                      {site.contact.email}
                    </span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent-strong">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                    Office address
                  </span>
                  <span className="font-medium">
                    {site.brokerage.name}
                    <br />
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.region} {site.address.postalCode}
                  </span>
                </span>
              </li>
            </ul>

            {/* Hours */}
            <div className="mt-8 rounded-2xl border border-border bg-card p-5">
              <h3 className="flex items-center gap-2 font-serif text-lg font-semibold">
                <Clock className="h-5 w-5 text-accent-strong" aria-hidden /> Office hours
              </h3>
              <dl className="mt-3 space-y-2 text-sm">
                {site.hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">{h.day}</dt>
                    <dd className="font-medium">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-8">
              <p className="mb-3 text-sm font-medium">Prefer another language? No problem:</p>
              <LanguageBadge variant="greetings" />
            </div>

            <div className="mt-8">
              <p className="mb-3 text-xs uppercase tracking-wide text-muted-foreground">Follow along</p>
              <div className="rounded-2xl bg-primary p-4">
                <SocialLinks />
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="surface-card p-6 sm:p-8">
              <h2 className="font-serif text-2xl font-semibold">Send me a message</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                I&apos;ll reply personally, usually within one business day.
              </p>
              <div className="mt-6">
                <ContactForm formType="contact" />
              </div>
            </div>

            <div className="mt-8">
              <MapPlaceholder query={site.address.mapsQuery} label={`${site.brokerage.name} — ${site.address.street}`} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
