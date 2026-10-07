import type { Config } from "tailwindcss";

/**
 * Brand tokens live as CSS variables in app/globals.css (`:root`), and are
 * surfaced to Tailwind here. To re-brand (e.g. to the WinMax palette), edit the
 * HSL values in globals.css — every utility class below updates automatically.
 *
 * Colors use the `<alpha-value>` channel so opacity utilities (bg-primary/80) work.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,md,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core brand surfaces
        primary: {
          DEFAULT: "hsl(var(--color-primary) / <alpha-value>)",
          light: "hsl(var(--color-primary-light) / <alpha-value>)",
          dark: "hsl(var(--color-primary-dark) / <alpha-value>)",
          foreground: "hsl(var(--color-primary-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--color-accent) / <alpha-value>)",
          strong: "hsl(var(--color-accent-strong) / <alpha-value>)",
          foreground: "hsl(var(--color-accent-foreground) / <alpha-value>)",
        },
        cream: "hsl(var(--color-cream) / <alpha-value>)",
        sand: "hsl(var(--color-sand) / <alpha-value>)",
        ink: "hsl(var(--color-ink) / <alpha-value>)",
        // Semantic aliases
        background: "hsl(var(--color-background) / <alpha-value>)",
        foreground: "hsl(var(--color-foreground) / <alpha-value>)",
        muted: {
          DEFAULT: "hsl(var(--color-muted) / <alpha-value>)",
          foreground: "hsl(var(--color-muted-foreground) / <alpha-value>)",
        },
        card: "hsl(var(--color-card) / <alpha-value>)",
        border: "hsl(var(--color-border) / <alpha-value>)",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        gurmukhi: ["var(--font-gurmukhi)", "var(--font-inter)", "sans-serif"],
        devanagari: ["var(--font-devanagari)", "var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(14, 42, 43, 0.18)",
        card: "0 4px 24px -8px rgba(14, 42, 43, 0.14)",
        lift: "0 24px 60px -20px rgba(14, 42, 43, 0.28)",
      },
      maxWidth: {
        content: "1200px",
        prose: "72ch",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        shimmer: "shimmer 1.6s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
