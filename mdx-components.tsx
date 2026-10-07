import type { MDXComponents } from "mdx/types";

/**
 * Global MDX component overrides. Applied to every compiled .mdx file so blog
 * posts inherit the brand prose styling automatically (see `.prose-brand`).
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="mb-4 text-3xl sm:text-4xl">{children}</h1>,
    h2: ({ children }) => <h2 className="mt-10 mb-3 text-2xl">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-8 mb-2 text-xl">{children}</h3>,
    p: ({ children }) => <p className="mb-4 leading-relaxed text-foreground/85">{children}</p>,
    ul: ({ children }) => (
      <ul className="mb-4 list-disc space-y-1 pl-5 marker:text-accent-strong">{children}</ul>
    ),
    ol: ({ children }) => <ol className="mb-4 list-decimal space-y-1 pl-5">{children}</ol>,
    a: ({ href, children }) => (
      <a href={href} className="font-medium text-accent-strong underline underline-offset-4">
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-accent pl-4 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
    ...components,
  };
}
