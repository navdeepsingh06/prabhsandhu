import { ImageResponse } from "next/og";
import { site } from "@/data/site";

// Branded default Open Graph image, generated at build/request time. Applies to
// every route that doesn't set its own openGraph.images.
export const alt = site.seo.siteName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// NOTE: Satori (next/og) requires every element with multiple children to use
// flex, and only renders fonts it has glyphs for — so text is kept to single
// strings in Latin script here.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0e2a2b 0%, #15423f 100%)",
          padding: "72px",
          color: "#faf7f1",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: "#b87333", display: "flex" }} />
          <div style={{ display: "flex", fontSize: 28, letterSpacing: 2, color: "#d9c6a5" }}>
            {site.brokerage.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 34, color: "#d9a066" }}>
            {`${site.agent.title} · Winnipeg & Area`}
          </div>
          <div style={{ display: "flex", fontSize: 82, fontWeight: 700, marginTop: 12 }}>
            {site.agent.name}
          </div>
          <div style={{ display: "flex", fontSize: 34, color: "#cdd6d4", marginTop: 20 }}>
            Personalized real estate in 3 languages
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#9fb0ad" }}>{site.contact.mobile}</div>
      </div>
    ),
    { ...size }
  );
}
