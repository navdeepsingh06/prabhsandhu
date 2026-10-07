import type { Metadata } from "next";
import { Suspense } from "react";
import { getListings } from "@/lib/listings-source";
import { listingAreas } from "@/data/listings";
import { ListingsBrowser } from "@/components/ListingsBrowser";
import { PageHeader } from "@/components/PageHeader";
import { Disclaimer } from "@/components/Disclaimer";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Winnipeg Listings",
  description:
    "Browse homes for sale across Winnipeg and surrounding Manitoba. Filter by area, price, beds, and type. Live MLS® listings connect via an authorized brokerage feed.",
  path: "/listings",
});

export default async function ListingsPage() {
  // Filters from the URL (?area=…&maxPrice=…) are read client-side in
  // ListingsBrowser so this page can be fully static-exported.
  const listings = await getListings();

  return (
    <>
      <PageHeader
        eyebrow="Properties"
        title="Find your next Winnipeg home"
        description="Explore current listings across the city. Adjust the filters to narrow your search, or reach out and I'll set up a custom search for you."
      />

      <section className="container-px py-14 lg:py-16">
        <div className="mb-8">
          <Disclaimer />
        </div>
        <Suspense fallback={null}>
          <ListingsBrowser listings={listings} areas={listingAreas} />
        </Suspense>

        <div className="mt-16 rounded-2xl border border-accent/30 bg-accent/5 p-6 lg:p-8">
          <h2 className="font-serif text-xl font-semibold">Looking for live MLS® listings?</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            The properties above are sample data. Full, up-to-the-minute MLS® listings will be
            powered by an authorized CREA DDF®/IDX feed through WinMax Real Estate Ltd. In the
            meantime, I&apos;m happy to send you current listings that match exactly what you&apos;re
            looking for — including new and coming-soon homes.
          </p>
        </div>
      </section>
    </>
  );
}
