import type { Metadata } from "next";
import { site } from "@/data/site";
import { PageHeader } from "@/components/PageHeader";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description: "The terms that govern your use of this website.",
  path: "/terms",
});

const updated = "October 7, 2026";

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Use" description={`Last updated: ${updated}`} />
      <section className="container-px py-14 lg:py-20">
        <div className="prose-brand mx-auto">
          <p>
            Welcome. By accessing or using this website, you agree to these Terms of Use. If you do
            not agree, please do not use the site. This site is operated by {site.agent.name} (
            {site.agent.title}) with {site.brokerage.name}.
          </p>

          <h2>No professional advice</h2>
          <p>
            The content on this site is provided for general informational purposes only and does
            not constitute legal, financial, tax, or professional advice. Real estate decisions
            should be made with the guidance of appropriate professionals. Mortgage, tax, and
            closing-cost figures (including any calculators) are estimates only and are not a
            guarantee of actual amounts.
          </p>

          <h2>Property and listing information</h2>
          <p>
            Any properties shown on this site are sample/demonstration listings unless otherwise
            connected to an authorized Multiple Listing Service® feed. Property information is
            deemed reliable but is not guaranteed accurate, complete, or current, and should be
            independently verified. Nothing on this site constitutes an offer or solicitation where
            prohibited.
          </p>

          <h2>Trademarks</h2>
          <p>
            REALTOR®, REALTORS®, and the REALTOR® logo are trademarks controlled by The Canadian
            Real Estate Association (CREA) and identify real estate professionals who are members of
            CREA. MLS®, Multiple Listing Service®, and associated logos are owned by CREA and
            identify the quality of services provided by its members. These marks are used here in
            accordance with CREA&apos;s rules.
          </p>

          <h2>Intellectual property</h2>
          <p>
            Unless otherwise noted, the content, design, and branding on this site are owned by or
            licensed to us and may not be copied, reproduced, or distributed without permission.
            Photographs may be stock imagery used under license for demonstration.
          </p>

          <h2>Acceptable use</h2>
          <p>
            You agree not to misuse this site, including by attempting to disrupt it, scrape its
            content without authorization, or use it for any unlawful purpose.
          </p>

          <h2>Third-party links</h2>
          <p>
            This site may link to third-party websites. We are not responsible for the content or
            practices of those sites, and links do not imply endorsement.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, we are not liable for any damages arising from
            your use of, or inability to use, this site or its content. The site is provided on an
            &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of the Province of Manitoba and the federal laws of
            Canada applicable therein.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms? Contact {site.agent.name} at{" "}
            <a href={site.contact.emailHref}>{site.contact.email}</a> or {site.contact.mobile}.
          </p>
        </div>
      </section>
    </>
  );
}
