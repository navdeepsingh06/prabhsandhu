import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BedDouble,
  Bath,
  Maximize,
  Car,
  Calendar,
  Ruler,
  MapPin,
  ChevronLeft,
  Check,
} from "lucide-react";
import { getListings, getListingBySlug } from "@/lib/listings-source";
import { formatPrice } from "@/lib/utils";
import { ListingGallery } from "@/components/ListingGallery";
import { MortgageCalculator } from "@/components/MortgageCalculator";
import { ShowingForm } from "@/components/ShowingForm";
import { MapPlaceholder } from "@/components/MapPlaceholder";
import { Disclaimer } from "@/components/Disclaimer";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  const listings = await getListings();
  return listings.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const listing = await getListingBySlug(slug);
  if (!listing) return pageMetadata({ title: "Listing not found", path: `/listings/${slug}` });
  return pageMetadata({
    title: `${listing.address}, ${listing.neighborhood}`,
    description: `${listing.beds} bed, ${listing.baths} bath ${listing.type.toLowerCase()} in ${listing.neighborhood}, ${listing.city}. ${formatPrice(listing.price)}. ${listing.description}`,
    path: `/listings/${slug}`,
    image: listing.images[0]?.src,
  });
}

export default async function ListingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const listing = await getListingBySlug(slug);
  if (!listing) notFound();

  const facts = [
    { icon: BedDouble, label: "Bedrooms", value: listing.beds },
    { icon: Bath, label: "Bathrooms", value: listing.baths },
    { icon: Maximize, label: "Interior", value: `${listing.sqft.toLocaleString()} ft²` },
    ...(listing.garage ? [{ icon: Car, label: "Garage", value: `${listing.garage}-car` }] : []),
    ...(listing.yearBuilt ? [{ icon: Calendar, label: "Year built", value: listing.yearBuilt }] : []),
    ...(listing.lot ? [{ icon: Ruler, label: "Lot size", value: listing.lot }] : []),
  ];

  return (
    <article className="pt-20 lg:pt-24">
      <div className="container-px py-6">
        <Link
          href="/listings"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden /> Back to listings
        </Link>
      </div>

      {/* Title row */}
      <header className="container-px">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              {listing.status}
            </span>
            <h1 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">{listing.address}</h1>
            <p className="mt-2 flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="h-4 w-4 text-accent-strong" aria-hidden />
              {listing.neighborhood}, {listing.city}, {listing.region} {listing.postalCode}
            </p>
          </div>
          <p className="font-serif text-4xl font-semibold text-primary">{formatPrice(listing.price)}</p>
        </div>
      </header>

      {/* Gallery */}
      <div className="container-px mt-6">
        <ListingGallery images={listing.images} />
      </div>

      {/* Body */}
      <div className="container-px grid gap-12 py-12 lg:grid-cols-3 lg:py-16">
        <div className="lg:col-span-2">
          {/* Key facts */}
          <dl className="grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card p-6 sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.label} className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent-strong">
                  <f.icon className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <dt className="text-xs text-muted-foreground">{f.label}</dt>
                  <dd className="font-medium text-foreground">{f.value}</dd>
                </span>
              </div>
            ))}
          </dl>

          {/* Description */}
          <div className="mt-10">
            <h2 className="font-serif text-2xl font-semibold">About this home</h2>
            <p className="mt-3 leading-relaxed text-foreground/85">{listing.description}</p>
          </div>

          {/* Features */}
          <div className="mt-10">
            <h2 className="font-serif text-2xl font-semibold">Features &amp; highlights</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {listing.features.map((feat) => (
                <li key={feat} className="flex items-start gap-2.5 text-sm text-foreground/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-strong" aria-hidden />
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Map */}
          <div className="mt-10">
            <h2 className="font-serif text-2xl font-semibold">Location</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Approximate location shown. Contact me for the exact address and a private tour.
            </p>
            <MapPlaceholder
              className="mt-4"
              query={`${listing.address}, ${listing.city}, ${listing.region}`}
              label={`${listing.neighborhood}, ${listing.city}`}
            />
          </div>

          <div className="mt-10">
            <Disclaimer />
          </div>
        </div>

        {/* Sidebar: mortgage + showing form */}
        <aside className="space-y-8 lg:col-span-1">
          <div className="lg:sticky lg:top-24 lg:space-y-8">
            <MortgageCalculator price={listing.price} />
            <div className="surface-card p-6">
              <h3 className="font-serif text-xl font-semibold">Schedule a showing</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                I&apos;ll confirm a time that works for you.
              </p>
              <div className="mt-5">
                <ShowingForm listing={`${listing.address}, ${listing.neighborhood}`} />
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Related CTA */}
      <section className="bg-sand/60 py-16">
        <div className="container-px text-center">
          <SectionHeading
            align="center"
            eyebrow="Not quite the one?"
            title="Let me find the right fit"
            description="Tell me what you're looking for and I'll send tailored listings — including new and coming-soon homes across Winnipeg."
            className="mb-8"
          />
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-soft transition hover:bg-primary-light"
          >
            Start a custom search
          </Link>
        </div>
      </section>
    </article>
  );
}
