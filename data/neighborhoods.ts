/**
 * NEIGHBORHOODS — Winnipeg area cards + three full sample guides.
 *
 * Card facts are general descriptions. Any "market snapshot" numbers are
 * // REPLACE WITH REAL placeholders and are labelled as illustrative in the UI.
 */

export interface NeighborhoodCardData {
  slug: string;
  name: string;
  tagline: string;
  image: { src: string; alt: string };
  /** Whether a full guide page exists at /neighborhoods/[slug]. */
  hasGuide?: boolean;
}

export interface MarketSnapshot {
  medianPrice: string;
  avgDaysOnMarket: string;
  trend: string;
}

export interface NeighborhoodGuide extends NeighborhoodCardData {
  intro: string[];
  lifestyle: string;
  schools: string[];
  amenities: string[];
  transit: string;
  // REPLACE WITH REAL — illustrative only.
  marketSnapshot: MarketSnapshot;
}

const img = (id: string, alt: string) => ({
  src: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=70`,
  alt,
});

export const neighborhoodCards: NeighborhoodCardData[] = [
  {
    slug: "sage-creek",
    name: "Sage Creek",
    tagline: "Master-planned family living on the city's east side.",
    image: img("photo-1570129477492-45c003edd2be", "Sage Creek modern homes"),
    hasGuide: true,
  },
  {
    slug: "river-heights",
    name: "River Heights",
    tagline: "Tree-lined character streets near Academy Road.",
    image: img("photo-1583608205776-bfd35f0d9f83", "River Heights character home"),
    hasGuide: true,
  },
  {
    slug: "transcona",
    name: "Transcona",
    tagline: "Friendly, affordable, and full of community spirit.",
    image: img("photo-1512917774080-9991f1c4c750", "Transcona residential street"),
    hasGuide: true,
  },
  {
    slug: "west-kildonan",
    name: "West Kildonan",
    tagline: "Established riverside neighbourhood with great value.",
    image: img("photo-1598228723793-52759bba239c", "West Kildonan bungalow"),
  },
  {
    slug: "st-vital",
    name: "St. Vital",
    tagline: "Parks, the river, and shopping all close at hand.",
    image: img("photo-1576941089067-2de3c901e126", "St. Vital family home"),
  },
  {
    slug: "waverley-west",
    name: "Waverley West",
    tagline: "One of Winnipeg's fastest-growing new communities.",
    image: img("photo-1600210492486-724fe5c67fb0", "Waverley West new build"),
  },
  {
    slug: "charleswood",
    name: "Charleswood",
    tagline: "Leafy, spacious lots with a semi-rural feel.",
    image: img("photo-1600047509807-ba8f99d2cdde", "Charleswood home exterior"),
  },
  {
    slug: "tuxedo",
    name: "Tuxedo",
    tagline: "Prestige living beside Assiniboine Park.",
    image: img("photo-1613490493576-7fde63acd811", "Tuxedo executive home"),
  },
  {
    slug: "osborne-village",
    name: "Osborne Village",
    tagline: "Winnipeg's most walkable, vibrant urban village.",
    image: img("photo-1545324418-cc1a3fa10c00", "Osborne Village condo view"),
  },
  {
    slug: "the-maples",
    name: "The Maples",
    tagline: "Diverse, welcoming, and wonderfully connected.",
    image: img("photo-1568605114967-8130f3a36994", "The Maples family home"),
  },
];

export const neighborhoodGuides: NeighborhoodGuide[] = [
  {
    slug: "sage-creek",
    name: "Sage Creek",
    tagline: "Master-planned family living on the city's east side.",
    image: img("photo-1570129477492-45c003edd2be", "Sage Creek modern homes"),
    hasGuide: true,
    intro: [
      "Sage Creek is one of Winnipeg's most popular master-planned communities, designed around green space, walking paths, and a welcoming village centre.",
      "It's a favourite for young families and professionals who want newer homes, modern amenities, and an easy connection to the Perimeter Highway.",
    ],
    lifestyle:
      "Life in Sage Creek revolves around its parks, ponds, and the Sage Creek Village shopping area. Weekends mean trail walks, splash-pad afternoons, and coffee at a neighbourhood café — all within a tidy, modern setting.",
    schools: [
      "Nearby public and divisional elementary options",
      "French immersion programs within the division",
      "Short drive to south Winnipeg high schools",
    ],
    amenities: [
      "Sage Creek Village shops, grocery & dining",
      "Medical clinic and pharmacy",
      "Parks, ponds, and an extensive trail network",
      "Quick access to the Perimeter Highway",
    ],
    transit:
      "Primarily a car-oriented community with Winnipeg Transit routes connecting to downtown and the University of Manitoba; cycling paths link to neighbouring areas.",
    marketSnapshot: { medianPrice: "$—", avgDaysOnMarket: "—", trend: "Data placeholder" },
  },
  {
    slug: "river-heights",
    name: "River Heights",
    tagline: "Tree-lined character streets near Academy Road.",
    image: img("photo-1583608205776-bfd35f0d9f83", "River Heights character home"),
    hasGuide: true,
    intro: [
      "River Heights is a timeless Winnipeg neighbourhood known for its mature elm canopy, character homes, and the boutiques and cafés of Academy Road and Corydon Avenue.",
      "It blends established charm with strong resale value, drawing families and professionals who love walkable, central living.",
    ],
    lifestyle:
      "Residents enjoy strolling Academy Road's shops and restaurants, visiting local parks, and the easy reach of Assiniboine Park and the river. The vibe is classic, cultured, and community-minded.",
    schools: [
      "Well-regarded public and private schools nearby",
      "French immersion options in the area",
      "Close to the University of Winnipeg and amenities",
    ],
    amenities: [
      "Academy Road & Corydon dining and shopping",
      "Grant Park Shopping Centre nearby",
      "Parks, community centres, and the river trail",
      "Minutes to downtown and Assiniboine Park",
    ],
    transit:
      "Excellent transit access to downtown and the universities, plus highly walkable commercial streets — many errands can be done on foot.",
    marketSnapshot: { medianPrice: "$—", avgDaysOnMarket: "—", trend: "Data placeholder" },
  },
  {
    slug: "transcona",
    name: "Transcona",
    tagline: "Friendly, affordable, and full of community spirit.",
    image: img("photo-1512917774080-9991f1c4c750", "Transcona residential street"),
    hasGuide: true,
    intro: [
      "Transcona has a proud, small-town feel within the city. Its historic Regent Avenue main street, local events, and strong community pride make it a welcoming place to put down roots.",
      "With a mix of established and newer homes, it's especially popular with first-time buyers and growing families seeking value.",
    ],
    lifestyle:
      "Expect friendly neighbours, local festivals, and a genuine community spirit. Regent Avenue offers everyday shopping, restaurants, and services, with plenty of parks and rec facilities close by.",
    schools: [
      "Several elementary and high school options",
      "Community recreation and arena programs",
      "Libraries and after-school amenities nearby",
    ],
    amenities: [
      "Regent Avenue shopping and big-box retail",
      "Kildonan Place mall nearby",
      "Parks, arenas, and community clubs",
      "Easy access to the east Perimeter",
    ],
    transit:
      "Served by Winnipeg Transit with direct routes downtown; a car remains handy for the area's more spread-out amenities.",
    marketSnapshot: { medianPrice: "$—", avgDaysOnMarket: "—", trend: "Data placeholder" },
  },
];

export const guideSlugs = neighborhoodGuides.map((g) => g.slug);
