/**
 * TESTIMONIALS — placeholder content.
 *
 * // REPLACE WITH REAL: Swap these for genuine client reviews (with permission).
 * Keep the shape identical. Do not publish fabricated reviews as real.
 */

export interface Testimonial {
  quote: string;
  author: string;
  context: string; // e.g. "First-time buyer, Transcona"
  rating: number; // 1–5
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Prabhdeep made our first home purchase feel easy. He explained every step, answered our questions in Punjabi, and never made us feel rushed.",
    author: "Sample Client",
    context: "First-time buyers · Transcona",
    rating: 5,
  },
  {
    quote:
      "We sold above asking and closed on our timeline. His pricing advice and marketing were spot on, and communication was constant.",
    author: "Sample Client",
    context: "Sellers · Sage Creek",
    rating: 5,
  },
  {
    quote:
      "As an investor, I appreciated his honest analysis of each property. He flagged issues I would have missed and protected my budget.",
    author: "Sample Client",
    context: "Investor · River Heights",
    rating: 5,
  },
  {
    quote:
      "Patient, knowledgeable, and genuinely kind. Being able to go over documents in Hindi gave my parents real peace of mind.",
    author: "Sample Client",
    context: "Move-up buyers · Waverley West",
    rating: 5,
  },
];
