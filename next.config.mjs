import createMDX from "@next/mdx";

// For GitHub Pages (a project site served under /<repo>), the CI build sets
// GITHUB_PAGES=true so the app uses the correct basePath. Local dev/build stay
// at the root. Override the repo name here if you rename the repository.
const isPages = process.env.GITHUB_PAGES === "true";
const repo = "prabhsandhu";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a fully static site in `out/` (no Node server) — required by Pages.
  output: "export",
  // Pages serves nested routes as folders; trailing slashes avoid 404s.
  trailingSlash: true,
  // GitHub Pages has no image optimizer, so serve images as-is.
  images: { unoptimized: true },
  // Serve correctly from https://<user>.github.io/<repo>.
  ...(isPages ? { basePath: `/${repo}`, assetPrefix: `/${repo}/` } : {}),
  // Exposed to the client so the `asset()` helper can prefix local image paths
  // (next/image does NOT add basePath to unoptimized string srcs).
  env: { NEXT_PUBLIC_BASE_PATH: isPages ? `/${repo}` : "" },
  // Allow .mdx files to be treated as pages/content imports.
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

const withMDX = createMDX({ options: {} });

export default withMDX(nextConfig);
