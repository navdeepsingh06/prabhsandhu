import createMDX from "@next/mdx";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // This project has a parent-folder lockfile; pin the tracing root to here so
  // Next doesn't infer the wrong workspace root (affects Vercel output tracing).
  outputFileTracingRoot: __dirname,
  // Allow .mdx files to be treated as pages/content imports.
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    // Remote placeholder imagery (Unsplash). Swap/remove when using local brand photos.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
  },
};

const withMDX = createMDX({
  // Keep MDX options minimal; add remark/rehype plugins here if needed later.
  options: {},
});

export default withMDX(nextConfig);
