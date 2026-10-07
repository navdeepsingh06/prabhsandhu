import type { Metadata } from "next";
import { site } from "@/data/site";
import { PageHeader } from "@/components/PageHeader";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Prabhdeep Sandhu collects, uses, and protects your personal information.",
  path: "/privacy",
});

const updated = "October 7, 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" description={`Last updated: ${updated}`} />
      <section className="container-px py-14 lg:py-20">
        <div className="prose-brand mx-auto">
          <p>
            This Privacy Policy explains how {site.agent.name} ({site.agent.title}), operating with{" "}
            {site.brokerage.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;), collects, uses, and protects
            your personal information when you use this website. We are committed to handling your
            information in accordance with Canada&apos;s Personal Information Protection and
            Electronic Documents Act (PIPEDA) and applicable Manitoba law.
          </p>

          <h2>Information we collect</h2>
          <p>We collect information you choose to provide, which may include:</p>
          <ul>
            <li>Contact details such as your name, email address, and phone number;</li>
            <li>Details about your real estate needs (e.g. budget, preferred areas, timeline);</li>
            <li>Any message or information you submit through our forms; and</li>
            <li>
              Basic technical and usage data (such as pages visited) collected automatically to
              help us improve the site.
            </li>
          </ul>

          <h2>How we use your information</h2>
          <ul>
            <li>To respond to your inquiries and provide real estate services;</li>
            <li>To send information you request, such as listings or market updates;</li>
            <li>To send newsletters or updates where you have opted in (you may unsubscribe anytime); and</li>
            <li>To meet our legal, regulatory, and professional obligations.</li>
          </ul>

          <h2>Sharing your information</h2>
          <p>
            We do not sell your personal information. We may share it only as needed to deliver our
            services — for example, with your consent, with service providers (such as our email
            provider) acting on our behalf, with the brokerage, or where required by law. Our
            brokerage and real estate professionals are also governed by the rules of their
            regulator and real estate boards.
          </p>

          <h2>Cookies and analytics</h2>
          <p>
            This site may use cookies and similar technologies to operate effectively and to
            understand how visitors use the site. You can control cookies through your browser
            settings.
          </p>

          <h2>Your choices and rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal information, and
            you may withdraw consent or unsubscribe from communications at any time, subject to
            legal and contractual limits. To make a request, contact us using the details below.
          </p>

          <h2>Data retention and security</h2>
          <p>
            We retain personal information only as long as necessary for the purposes described
            above or as required by law, and we use reasonable safeguards to protect it. No method
            of transmission over the internet is completely secure, however, and we cannot guarantee
            absolute security.
          </p>

          <h2>Contact us</h2>
          <p>
            Questions about this policy or your information? Contact {site.agent.name} at{" "}
            <a href={site.contact.emailHref}>{site.contact.email}</a> or {site.contact.mobile}.
            Mailing address: {site.address.street}, {site.address.city}, {site.address.region}{" "}
            {site.address.postalCode}.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes take effect when posted on
            this page, with the &ldquo;last updated&rdquo; date revised accordingly.
          </p>
        </div>
      </section>
    </>
  );
}
