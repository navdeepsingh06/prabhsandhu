/**
 * SAMPLE LISTINGS — placeholder data for demonstration only.
 *
 * // REPLACE WITH REAL: These are fictional properties with stock imagery.
 * Do NOT present as real inventory. When the brokerage connects a CREA DDF/IDX
 * feed, `lib/listings-source.ts` will return live listings in this same shape
 * and the UI needs no changes. Never scrape REALTOR.ca or WinMax.
 */

export type ListingStatus = "For Sale" | "New" | "Pending" | "Sold";
export type PropertyType = "House" | "Condo" | "Townhouse" | "Duplex" | "Land";

export interface Listing {
  slug: string;
  status: ListingStatus;
  type: PropertyType;
  price: number;
  address: string;
  neighborhood: string;
  city: string;
  region: string;
  postalCode: string;
  beds: number;
  baths: number;
  /** Interior size in square feet. */
  sqft: number;
  /** Lot size label (free text, e.g. "50 x 110 ft"). */
  lot?: string;
  yearBuilt?: number;
  garage?: number;
  description: string;
  features: string[];
  images: { src: string; alt: string }[];
  /** ISO date the listing went live — used for "new" sorting. */
  listedOn: string;
  featured?: boolean;
  /** Approx. coordinates for the map placeholder (not precise). */
  coords?: { lat: number; lng: number };
}

// Shared Unsplash imagery (royalty-free) used across the sample set.
const img = (id: string, alt: string) => ({
  src: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=70`,
  alt,
});

export const listings: Listing[] = [
  {
    slug: "412-sage-creek-boulevard",
    status: "New",
    type: "House",
    price: 629900,
    address: "412 Sage Creek Boulevard",
    neighborhood: "Sage Creek",
    city: "Winnipeg",
    region: "MB",
    postalCode: "R3X 0L2",
    beds: 4,
    baths: 3,
    sqft: 2180,
    lot: "48 x 115 ft",
    yearBuilt: 2019,
    garage: 2,
    description:
      "A sun-filled, modern two-storey in sought-after Sage Creek. Open-concept main floor, chef's kitchen with quartz island, and a landscaped backyard built for Winnipeg summers.",
    features: [
      "Quartz kitchen with walk-in pantry",
      "Primary suite with spa ensuite",
      "Fully fenced, landscaped yard",
      "High-efficiency furnace & central air",
      "Walk to Sage Creek Village shops",
    ],
    images: [
      img("photo-1600596542815-ffad4c1539a9", "Modern two-storey home exterior at dusk"),
      img("photo-1600585154340-be6161a56a0c", "Bright open-concept living room"),
      img("photo-1600607687939-ce8a6c25118c", "Quartz kitchen with island"),
      img("photo-1600566753086-00f18fb6b3ea", "Primary bedroom with large windows"),
    ],
    listedOn: "2026-09-28",
    featured: true,
    coords: { lat: 49.843, lng: -96.964 },
  },
  {
    slug: "88-waverley-west-crescent",
    status: "For Sale",
    type: "House",
    price: 749000,
    address: "88 Waverley West Crescent",
    neighborhood: "Waverley West",
    city: "Winnipeg",
    region: "MB",
    postalCode: "R3Y 0W4",
    beds: 5,
    baths: 4,
    sqft: 2640,
    lot: "52 x 120 ft",
    yearBuilt: 2017,
    garage: 2,
    description:
      "Spacious family home in the heart of Waverley West, steps from parks and top-rated schools. Finished basement, triple-pane windows, and an entertainer's deck.",
    features: [
      "Finished basement with rec room",
      "Triple-pane energy-efficient windows",
      "Composite deck & gas BBQ hookup",
      "Main-floor home office",
      "Double attached heated garage",
    ],
    images: [
      img("photo-1570129477492-45c003edd2be", "Two-storey suburban family home"),
      img("photo-1600210492486-724fe5c67fb0", "Open living and dining space"),
      img("photo-1556911220-bff31c812dba", "Contemporary kitchen"),
      img("photo-1584622650111-993a426fbf0a", "Finished basement rec room"),
    ],
    listedOn: "2026-09-15",
    featured: true,
    coords: { lat: 49.796, lng: -97.178 },
  },
  {
    slug: "301-osborne-village-lofts",
    status: "For Sale",
    type: "Condo",
    price: 324900,
    address: "301 - 120 Osborne Street",
    neighborhood: "Osborne Village",
    city: "Winnipeg",
    region: "MB",
    postalCode: "R3L 1Y7",
    beds: 2,
    baths: 2,
    sqft: 1040,
    yearBuilt: 2014,
    garage: 1,
    description:
      "Stylish urban loft in vibrant Osborne Village. Floor-to-ceiling windows, heated underground parking, and every café and boutique at your doorstep.",
    features: [
      "Floor-to-ceiling windows",
      "Heated underground parking stall",
      "In-suite laundry",
      "Rooftop common terrace",
      "Pet-friendly building",
    ],
    images: [
      img("photo-1545324418-cc1a3fa10c00", "Bright condo living room with city views"),
      img("photo-1502672260266-1c1ef2d93688", "Modern condo interior"),
      img("photo-1560448204-e02f11c3d0e2", "Condo kitchen and dining"),
    ],
    listedOn: "2026-09-22",
    featured: true,
    coords: { lat: 49.878, lng: -97.146 },
  },
  {
    slug: "27-river-heights-avenue",
    status: "For Sale",
    type: "House",
    price: 569000,
    address: "27 River Heights Avenue",
    neighborhood: "River Heights",
    city: "Winnipeg",
    region: "MB",
    postalCode: "R3N 1A1",
    beds: 3,
    baths: 2,
    sqft: 1760,
    lot: "50 x 120 ft",
    yearBuilt: 1948,
    garage: 1,
    description:
      "Character-rich two-storey on a tree-lined River Heights street. Original hardwood, updated kitchen, and a deep lot with mature landscaping.",
    features: [
      "Restored oak hardwood floors",
      "Updated kitchen & bathrooms",
      "Wood-burning fireplace",
      "Mature, private backyard",
      "Walk to Academy Road shops",
    ],
    images: [
      img("photo-1583608205776-bfd35f0d9f83", "Character home with front porch"),
      img("photo-1600047509807-ba8f99d2cdde", "Living room with fireplace"),
      img("photo-1556909114-f6e7ad7d3136", "Updated kitchen"),
    ],
    listedOn: "2026-08-30",
    featured: true,
    coords: { lat: 49.868, lng: -97.183 },
  },
  {
    slug: "15-transcona-gardens",
    status: "New",
    type: "Townhouse",
    price: 349900,
    address: "15 - 220 Transcona Boulevard",
    neighborhood: "Transcona",
    city: "Winnipeg",
    region: "MB",
    postalCode: "R2C 5K8",
    beds: 3,
    baths: 2,
    sqft: 1420,
    yearBuilt: 2021,
    garage: 1,
    description:
      "Low-maintenance modern townhouse perfect for first-time buyers or right-sizers. Attached garage, bright open plan, and a private patio.",
    features: [
      "Open-concept main floor",
      "Attached single garage",
      "Private fenced patio",
      "Energy-efficient build (2021)",
      "Low condo fees",
    ],
    images: [
      img("photo-1512917774080-9991f1c4c750", "Modern townhouse exterior"),
      img("photo-1600121848594-d8644e57abab", "Open-plan townhouse interior"),
      img("photo-1600573472550-8090b5e0745e", "Townhouse kitchen"),
    ],
    listedOn: "2026-09-30",
    coords: { lat: 49.9, lng: -97.0 },
  },
  {
    slug: "9-tuxedo-estate-drive",
    status: "For Sale",
    type: "House",
    price: 1195000,
    address: "9 Tuxedo Estate Drive",
    neighborhood: "Tuxedo",
    city: "Winnipeg",
    region: "MB",
    postalCode: "R3P 2N6",
    beds: 5,
    baths: 5,
    sqft: 3980,
    lot: "70 x 140 ft",
    yearBuilt: 2015,
    garage: 3,
    description:
      "An executive residence in prestigious Tuxedo. Soaring ceilings, a gourmet kitchen, home theatre, and resort-style backyard near Assiniboine Park.",
    features: [
      "Chef's kitchen with butler's pantry",
      "Main-floor primary suite option",
      "Home theatre & wine room",
      "Heated triple garage",
      "Steps to Assiniboine Park",
    ],
    images: [
      img("photo-1613490493576-7fde63acd811", "Luxury executive home exterior"),
      img("photo-1600566753190-17f0baa2a6c3", "Grand living room"),
      img("photo-1600210492493-0946911123ea", "Gourmet kitchen"),
      img("photo-1600047509358-9dc75507daeb", "Luxury primary ensuite"),
    ],
    listedOn: "2026-08-12",
    coords: { lat: 49.861, lng: -97.22 },
  },
  {
    slug: "214-the-maples-way",
    status: "Pending",
    type: "House",
    price: 419900,
    address: "214 The Maples Way",
    neighborhood: "The Maples",
    city: "Winnipeg",
    region: "MB",
    postalCode: "R2P 1R4",
    beds: 4,
    baths: 2,
    sqft: 1680,
    lot: "45 x 108 ft",
    yearBuilt: 2002,
    garage: 2,
    description:
      "Well-kept family home in The Maples with room to grow. Bright living spaces, a fenced yard, and quick access to amenities and bus routes.",
    features: [
      "Four generous bedrooms",
      "Double detached garage",
      "Fully fenced backyard",
      "Close to schools & shopping",
      "Move-in ready",
    ],
    images: [
      img("photo-1568605114967-8130f3a36994", "Family home exterior"),
      img("photo-1600566752355-35792bedcfea", "Bright living area"),
      img("photo-1600585152220-90363fe7e115", "Family kitchen"),
    ],
    listedOn: "2026-07-25",
    coords: { lat: 49.95, lng: -97.17 },
  },
  {
    slug: "63-charleswood-bungalow",
    status: "For Sale",
    type: "House",
    price: 489000,
    address: "63 Charleswood Road",
    neighborhood: "Charleswood",
    city: "Winnipeg",
    region: "MB",
    postalCode: "R3R 1R9",
    beds: 3,
    baths: 2,
    sqft: 1520,
    lot: "60 x 130 ft",
    yearBuilt: 1979,
    garage: 2,
    description:
      "Beautifully maintained bungalow on an oversized Charleswood lot. Perfect for down-sizers and families alike, with mature trees and a sunny south yard.",
    features: [
      "Single-level living",
      "Oversized pie-shaped lot",
      "Recently updated roof & windows",
      "Double detached garage",
      "Near Harte Trail & parks",
    ],
    images: [
      img("photo-1598228723793-52759bba239c", "Bungalow with landscaped front yard"),
      img("photo-1600566753051-6057f2a0f0c0", "Bungalow living room"),
      img("photo-1600210491892-03d54c0aaf18", "Bungalow kitchen"),
    ],
    listedOn: "2026-09-05",
    coords: { lat: 49.86, lng: -97.26 },
  },
  {
    slug: "5-st-vital-court",
    status: "Sold",
    type: "House",
    price: 544900,
    address: "5 St. Vital Court",
    neighborhood: "St. Vital",
    city: "Winnipeg",
    region: "MB",
    postalCode: "R2M 2S3",
    beds: 4,
    baths: 3,
    sqft: 1980,
    lot: "46 x 112 ft",
    yearBuilt: 2008,
    garage: 2,
    description:
      "Recently sold — a turn-key two-storey in family-friendly St. Vital near the river and St. Vital Centre. Represented the buyers to a smooth, on-time possession.",
    features: [
      "Sold in a competitive market",
      "Near St. Vital Park & river trails",
      "Double attached garage",
      "Finished basement",
      "Great schools nearby",
    ],
    images: [
      img("photo-1576941089067-2de3c901e126", "Sold family home exterior"),
      img("photo-1600585153490-76fb20a32601", "Spacious interior"),
    ],
    listedOn: "2026-06-18",
    coords: { lat: 49.82, lng: -97.1 },
  },
];

export const propertyTypes: PropertyType[] = ["House", "Condo", "Townhouse", "Duplex", "Land"];

/** Distinct neighborhoods present in the sample set, for the search filter. */
export const listingAreas = Array.from(new Set(listings.map((l) => l.neighborhood))).sort();
