/**
 * SITE CONFIG — single source of truth for Prabhdeep Sandhu's brand site.
 * Edit values here and they propagate across the whole site (header, footer,
 * contact page, JSON-LD, metadata, etc.). Only real, verified facts belong here.
 */

export const site = {
  // --- Identity -----------------------------------------------------------
  agent: {
    name: "Prabhdeep Sandhu",
    legalName: "Prabhdeep Singh Sandhu", // as shown on REALTOR.ca
    title: "REALTOR®",
    yearsExperience: 6, // "6+ years" — real
    portrait: "/brand/portrait-placeholder.svg", // REPLACE WITH REAL headshot
    portraitAlt: "Portrait of Prabhdeep Sandhu, REALTOR®",
  },

  brokerage: {
    name: "WinMax Real Estate Ltd.",
    logo: "/brand/winmax-logo-placeholder.svg", // REPLACE WITH REAL brokerage logo
  },

  // --- Contact ------------------------------------------------------------
  contact: {
    mobile: "(204) 999-1421",
    mobileHref: "tel:+12049991421",
    office: "(204) 560-7555",
    officeHref: "tel:+12045607555",
    email: "prabhsandhu@winmaxrealestate.ca",
    emailHref: "mailto:prabhsandhu@winmaxrealestate.ca",
  },

  address: {
    street: "1194 Jefferson Avenue",
    city: "Winnipeg",
    region: "MB",
    regionName: "Manitoba",
    postalCode: "R2P 0C7",
    country: "CA",
    countryName: "Canada",
    // Used for the map embed placeholder & "Get directions" link.
    mapsQuery: "1194 Jefferson Avenue, Winnipeg, MB R2P 0C7",
  },

  // Office hours — adjust to the agent's real availability.
  hours: [
    { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
    { day: "Saturday", time: "10:00 AM – 4:00 PM" },
    { day: "Sunday", time: "By appointment" },
  ],

  // --- Market -------------------------------------------------------------
  market: {
    primary: "Winnipeg",
    area: "Winnipeg and surrounding area, Manitoba",
  },

  // --- Languages (a visible selling point) --------------------------------
  languages: [
    { label: "English", native: "English", greeting: "Welcome", font: "sans" as const },
    { label: "Punjabi", native: "ਪੰਜਾਬੀ", greeting: "ਜੀ ਆਇਆਂ ਨੂੰ", font: "gurmukhi" as const },
    { label: "Hindi", native: "हिन्दी", greeting: "स्वागत है", font: "devanagari" as const },
  ],

  // --- Social -------------------------------------------------------------
  // Facebook is real; others are placeholders — update or remove as needed.
  social: {
    facebook: "https://www.facebook.com/prabhsandhu.ca/",
    instagram: "", // REPLACE WITH REAL (leave empty to hide the icon)
    linkedin: "", // REPLACE WITH REAL
    youtube: "", // REPLACE WITH REAL
  },

  // --- Bio (polished first person; same meaning as the source bio) --------
  bio: {
    short:
      "I offer personalized service and expert guidance through every step of buying or selling your home in Winnipeg.",
    long: [
      "I believe every real estate journey deserves a personal touch. Whether you're buying your first home or growing an investment portfolio, I offer personalized service and expert guidance at every step — so the process feels clear, calm, and genuinely yours.",
      "I work with a wide range of clients, from first-time buyers taking an exciting leap to seasoned investors sharpening their strategy. My goal is always the same: a smooth, successful journey that turns your property dreams into reality.",
      "Serving Winnipeg and the surrounding area in English, Punjabi, and Hindi, I make sure you feel understood and confident — in the language you're most comfortable speaking.",
    ],
  },

  // --- Navigation ---------------------------------------------------------
  nav: [
    { label: "Home", href: "/" },
    { label: "Listings", href: "/listings" },
    { label: "Buy", href: "/buy" },
    { label: "Sell", href: "/sell" },
    { label: "Neighborhoods", href: "/neighborhoods" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],

  // --- SEO defaults -------------------------------------------------------
  seo: {
    siteName: "Prabhdeep Sandhu — Winnipeg REALTOR®",
    titleTemplate: "%s | Prabhdeep Sandhu, Winnipeg REALTOR®",
    defaultTitle: "Prabhdeep Sandhu — Winnipeg REALTOR® | WinMax Real Estate",
    description:
      "Personalized, multilingual real estate service in Winnipeg and surrounding Manitoba. Prabhdeep Sandhu, REALTOR® with WinMax Real Estate Ltd., guides first-time buyers through seasoned investors in English, Punjabi, and Hindi.",
    keywords: [
      "Winnipeg realtor",
      "Winnipeg real estate agent",
      "Punjabi realtor Winnipeg",
      "Hindi speaking realtor Winnipeg",
      "buy a home Winnipeg",
      "sell my home Winnipeg",
      "Manitoba real estate",
      "WinMax Real Estate",
      "first-time home buyer Winnipeg",
    ],
  },
} as const;

/** Resolve the canonical site URL (env override for production). */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.prabhdeepsandhu.ca";

export type Site = typeof site;
