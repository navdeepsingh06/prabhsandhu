import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const icons = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
} as const;

/** Renders only the social links that have a URL configured in data/site.ts. */
export function SocialLinks({ className }: { className?: string }) {
  const entries = (Object.keys(icons) as Array<keyof typeof icons>)
    .map((key) => ({ key, url: site.social[key] }))
    .filter((e) => e.url);

  if (!entries.length) return null;

  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {entries.map(({ key, url }) => {
        const Icon = icons[key];
        return (
          <li key={key}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${site.agent.name} on ${key[0].toUpperCase() + key.slice(1)}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Icon className="h-5 w-5" aria-hidden />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
