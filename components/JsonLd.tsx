import { jsonLdScript } from "@/lib/jsonld";

/** Embeds a schema.org JSON-LD object as a script tag. */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // Content is serialized/escaped in jsonLdScript to be injection-safe.
      dangerouslySetInnerHTML={{ __html: jsonLdScript(data) }}
    />
  );
}
