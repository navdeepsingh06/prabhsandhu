# Prabhdeep Sandhu — Winnipeg REALTOR® Website

A modern, boutique personal-brand website for **Prabhdeep Sandhu**, REALTOR® with
**WinMax Real Estate Ltd.** in Winnipeg, Manitoba. Built with Next.js (App
Router), TypeScript, and Tailwind CSS, and content-driven so it's easy to edit.

- **Palette:** midnight teal `#0E2A2B` + warm copper `#B87333` on soft warm-white
- **Type:** Playfair Display (headings) + Inter (body); Noto Sans Gurmukhi &
  Devanagari for the trilingual badge
- **Languages:** English · ਪੰਜਾਬੀ · हिन्दी (a visible selling point)

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint
```

Node 18.18+ is recommended (tested on Node 24).

---

## Project structure

```
app/                 Routes (App Router) + API + sitemap/robots/OG image
  listings/[slug]    Listing detail (gallery, mortgage calc, showing form)
  neighborhoods/...  Guides index + 3 sample guide pages
  blog/[slug]        MDX blog posts
  api/contact        Form handler (stubbed; Resend-ready)
components/          Reusable UI (Header, Footer, ListingCard, forms, etc.)
content/blog/        Blog posts as .mdx files
data/                ⭐ Edit these to run the site (see below)
lib/                 utils, zod validation, mortgage math, SEO/JSON-LD,
                     and the DDF/IDX listings adapter
public/brand/        Logo + portrait placeholders (swap for real files)
```

---

## Editing site content (no code required)

All editable content lives in **`/data`**:

| File | What it controls |
| --- | --- |
| `data/site.ts` | **The main file** — name, brokerage, phone/email, address, hours, languages, social links, bio, nav, and SEO defaults. |
| `data/listings.ts` | Sample property listings (clearly marked placeholder data). |
| `data/testimonials.ts` | Client testimonials (placeholder — replace with real ones). |
| `data/neighborhoods.ts` | Neighbourhood cards + the 3 full guide pages. |
| `data/stats.ts` | The stats row. Real facts vs. clearly-flagged sample numbers. |
| `data/faqs.ts` | Buyer and seller FAQ content. |
| `data/blog.ts` | Blog post metadata (title, date, cover). Bodies live in `content/blog/*.mdx`. |

> **Honesty note:** Only verified facts are presented as true. Sample listings,
> testimonials, and illustrative stats are labelled and marked
> `// REPLACE WITH REAL` in the data files. Replace them before launch.

### Add a blog post
1. Create `content/blog/my-post.mdx` (Markdown with optional JSX).
2. Add an entry to `posts` in `data/blog.ts` (slug must match the filename).

---

## Swapping photos and the logo

See `public/brand/README.md`. In short: drop your real headshot and WinMax logo
into `public/brand/` (same filenames), or update the paths in `data/site.ts`.

Listing and neighbourhood imagery currently uses Unsplash URLs; replace the
`src` values in `data/listings.ts` / `data/neighborhoods.ts` with your own photos
(local files in `public/` or your image host). Add any new remote image host to
`images.remotePatterns` in `next.config.mjs`.

---

## Changing the brand colors

Colors are defined once as CSS variables in **`app/globals.css`** under `:root`
(HSL channels) and surfaced to Tailwind in `tailwind.config.ts`. To match the
WinMax brand, edit the `--color-*` values in `globals.css` — the whole UI
updates. No other changes needed.

---

## Forms & email

Forms use **react-hook-form + zod** and POST to `app/api/contact/route.ts`.
Out of the box, submissions are **validated and logged to the server console**
so everything works in development.

To deliver leads by email with [Resend](https://resend.com):

1. `npm i resend`
2. Copy `.env.example` → `.env.local` and set `RESEND_API_KEY`,
   `LEAD_INBOX_EMAIL`, `LEAD_FROM_EMAIL` (verify your sending domain in Resend).
3. Uncomment the Resend block in `app/api/contact/route.ts`.

---

## Connecting live MLS® listings (DDF®/IDX)

Listings flow through a single adapter: **`lib/listings-source.ts`**. Today it
returns the sample data; swap in a live feed without touching any UI:

1. Obtain **CREA DDF®** (Data Distribution Facility) credentials through the
   brokerage, or use a brokerage-approved IDX/VOW provider, under a signed data
   agreement.
2. Set `DDF_FEED_URL` and `DDF_API_KEY` in `.env.local`.
3. Implement `fetchFromDDF()` in `lib/listings-source.ts`, mapping feed records
   to the `Listing` interface.
4. Set `SOURCE = "ddf"` in that file. Done.

> ⚠️ **Compliance:** Connect listings only through an authorized feed. Do **not**
> scrape REALTOR.ca or the WinMax website — their terms prohibit it and it can
> jeopardize the brokerage's MLS® access. Listing data is always shown with a
> "deemed reliable but not guaranteed" disclaimer.

---

## SEO & accessibility

- Per-page metadata + Open Graph (`lib/seo.ts`), generated OG image
  (`app/opengraph-image.tsx`), `sitemap.xml`, `robots.txt`.
- JSON-LD `RealEstateAgent` + `LocalBusiness` with the real address/phone
  (`lib/jsonld.ts`).
- Semantic HTML, keyboard-navigable menu/lightbox/slider, visible focus rings,
  alt text, and `prefers-reduced-motion` support throughout.

Set `NEXT_PUBLIC_SITE_URL` in production so canonical URLs, the sitemap, and
Open Graph tags use your real domain.

---

## Deploying to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import it at [vercel.com/new](https://vercel.com/new) — no config needed.
3. Add environment variables from `.env.example` (at minimum
   `NEXT_PUBLIC_SITE_URL`; add the Resend/DDF keys when ready).
4. Deploy. Vercel detects Next.js automatically.

---

## Trademarks & credits

REALTOR®, REALTORS®, MLS®, and Multiple Listing Service® are trademarks owned or
controlled by The Canadian Real Estate Association (CREA). Placeholder imagery
from [Unsplash](https://unsplash.com). Icons by [Lucide](https://lucide.dev).
