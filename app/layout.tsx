import type { Metadata } from "next";
import { Playfair_Display, Inter, Noto_Sans_Gurmukhi, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { site, siteUrl } from "@/data/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { realEstateAgentJsonLd, localBusinessJsonLd } from "@/lib/jsonld";

// --- Fonts (self-hosted via next/font; exposed as CSS variables) ---
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const gurmukhi = Noto_Sans_Gurmukhi({
  subsets: ["gurmukhi"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-gurmukhi",
});
const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-devanagari",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.seo.defaultTitle,
    template: site.seo.titleTemplate,
  },
  description: site.seo.description,
  keywords: [...site.seo.keywords],
  authors: [{ name: site.agent.name }],
  creator: site.agent.name,
  publisher: site.brokerage.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: site.seo.siteName,
    title: site.seo.defaultTitle,
    description: site.seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.defaultTitle,
    description: site.seo.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-CA"
      className={`${playfair.variable} ${inter.variable} ${gurmukhi.variable} ${devanagari.variable}`}
    >
      <body>
        {/* Site-wide structured data */}
        <JsonLd data={realEstateAgentJsonLd()} />
        <JsonLd data={localBusinessJsonLd()} />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2 focus:text-sm focus:text-primary-foreground"
        >
          Skip to content
        </a>

        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
