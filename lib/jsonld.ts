import { site, siteUrl } from "@/data/site";

/**
 * Structured data (schema.org) for rich results. Uses the REAL business
 * address and phone numbers from data/site.ts. Rendered as a <script> in the
 * root layout and on the contact page.
 */

export function realEstateAgentJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${siteUrl}/#agent`,
    name: site.agent.name,
    alternateName: site.agent.legalName,
    url: siteUrl,
    image: `${siteUrl}${site.agent.portrait}`,
    telephone: site.contact.mobile,
    email: site.contact.email,
    jobTitle: "REALTOR®",
    knowsLanguage: site.languages.map((l) => l.label),
    worksFor: {
      "@type": "RealEstateOrganization",
      name: site.brokerage.name,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: {
      "@type": "City",
      name: "Winnipeg",
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#office`,
    name: `${site.agent.name} — ${site.brokerage.name}`,
    image: `${siteUrl}${site.agent.portrait}`,
    url: siteUrl,
    telephone: site.contact.office,
    email: site.contact.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
  };
}

/** Serialize JSON-LD for safe embedding in a <script> tag. */
export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
