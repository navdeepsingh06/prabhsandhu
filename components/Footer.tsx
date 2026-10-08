import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { asset } from "@/lib/utils";
import { NewsletterForm } from "./NewsletterForm";
import { SocialLinks } from "./SocialLinks";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-px py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand + contact */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={asset(site.brokerage.logo)}
                alt=""
                width={44}
                height={44}
                className="h-10 w-10 brightness-0 invert"
              />
              <span className="flex flex-col leading-tight">
                <span className="font-serif text-xl font-semibold">{site.agent.name}</span>
                <span className="text-xs uppercase tracking-[0.16em] text-primary-foreground/70">
                  {site.agent.title} · {site.brokerage.name}
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/80">
              {site.bio.short}
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a href={site.contact.mobileHref} className="flex items-center gap-3 hover:text-accent">
                  <Phone className="h-4 w-4 text-accent" aria-hidden />
                  {site.contact.mobile} <span className="text-primary-foreground/50">(mobile)</span>
                </a>
              </li>
              <li>
                <a href={site.contact.officeHref} className="flex items-center gap-3 hover:text-accent">
                  <Phone className="h-4 w-4 text-accent" aria-hidden />
                  {site.contact.office} <span className="text-primary-foreground/50">(office)</span>
                </a>
              </li>
              <li>
                <a href={site.contact.emailHref} className="flex items-center gap-3 break-all hover:text-accent">
                  <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                  {site.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.region} {site.address.postalCode}
                </span>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <nav className="lg:col-span-2" aria-label="Footer">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-primary-foreground/80 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources */}
          <nav className="lg:col-span-2" aria-label="Resources">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/buy" className="text-primary-foreground/80 hover:text-white">
                  Buying Guide
                </Link>
              </li>
              <li>
                <Link href="/sell" className="text-primary-foreground/80 hover:text-white">
                  Home Valuation
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods" className="text-primary-foreground/80 hover:text-white">
                  Neighbourhood Guides
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-primary-foreground/80 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-primary-foreground/80 hover:text-white">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </nav>

          {/* Newsletter + social */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Winnipeg market notes
            </h3>
            <p className="mt-4 text-sm text-primary-foreground/80">
              Occasional updates on listings, neighbourhoods, and the local market. No spam —
              unsubscribe anytime.
            </p>
            <div className="mt-4">
              <NewsletterForm />
            </div>
            <div className="mt-6">
              <p className="mb-3 text-xs uppercase tracking-wider text-primary-foreground/60">
                Follow along
              </p>
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Compliance / trademark attribution */}
        <div className="mt-14 border-t border-white/10 pt-8 text-xs leading-relaxed text-primary-foreground/60">
          <p className="mb-3">
            {site.agent.name} ({site.agent.legalName}), {site.agent.title}, is a licensed real
            estate professional with <strong className="font-medium text-primary-foreground/80">{site.brokerage.name}</strong>, {site.address.street}, {site.address.city}, {site.address.region} {site.address.postalCode}.
          </p>
          <p className="mb-3">
            The trademarks REALTOR®, REALTORS®, and the REALTOR® logo are controlled by The
            Canadian Real Estate Association (CREA) and identify real estate professionals who are
            members of CREA. The trademarks MLS®, Multiple Listing Service®, and the associated
            logos are owned by CREA and identify the quality of services provided by real estate
            professionals who are members of CREA.
          </p>
          <p className="mb-3">
            We are committed to the principles of fair housing and equal professional service to
            all. We do not discriminate on the basis of race, religion, colour, national or ethnic
            origin, sex, sexual orientation, gender identity, age, marital or family status, or
            disability, in accordance with the Manitoba Human Rights Code.
          </p>
          <p>
            Listing information is deemed reliable but is not guaranteed accurate. Independent
            verification is recommended.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-2 border-t border-white/10 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center">
          <p>
            © {year} {site.agent.name}. All rights reserved.
          </p>
          <p className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
