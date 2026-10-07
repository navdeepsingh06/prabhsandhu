import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";

/**
 * Contact / lead intake endpoint.
 *
 * Validates with the shared zod schema, then delivers the lead. Email delivery
 * is STUBBED: if RESEND_API_KEY is set it sends via Resend; otherwise it logs
 * to the server console so the site works out-of-the-box in development.
 *
 * To enable email:
 *   1. npm i resend
 *   2. Set RESEND_API_KEY, LEAD_INBOX_EMAIL, LEAD_FROM_EMAIL in .env.local
 *   3. Uncomment the Resend block below.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed.", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const data = parsed.data;

  // Honeypot: silently accept (so bots think they succeeded) but do nothing.
  if (data.company) {
    return NextResponse.json({ ok: true });
  }

  const subject = `New ${data.formType} lead — ${data.name}`;

  try {
    if (process.env.RESEND_API_KEY) {
      // --- Resend delivery (uncomment after installing `resend`) ----------
      // const { Resend } = await import("resend");
      // const resend = new Resend(process.env.RESEND_API_KEY);
      // await resend.emails.send({
      //   from: process.env.LEAD_FROM_EMAIL ?? "website@example.com",
      //   to: process.env.LEAD_INBOX_EMAIL ?? "prabhsandhu@winmaxrealestate.ca",
      //   replyTo: data.email,
      //   subject,
      //   text: formatLead(data),
      // });
      console.info("[contact] RESEND_API_KEY present — wire up Resend to send:", subject);
    } else {
      // Development fallback: log the lead so nothing is lost.
      console.info("[contact] New lead (email not configured):\n" + formatLead(data));
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Delivery error:", err);
    return NextResponse.json(
      { ok: false, error: "Could not send message. Please try again." },
      { status: 500 }
    );
  }
}

function formatLead(d: Record<string, unknown>): string {
  return [
    `Type:     ${d.formType}`,
    `Name:     ${d.name}`,
    `Email:    ${d.email}`,
    `Phone:    ${d.phone || "—"}`,
    d.listing ? `Listing:  ${d.listing}` : null,
    d.address ? `Address:  ${d.address}` : null,
    d.preferredDate ? `Preferred: ${d.preferredDate}` : null,
    ``,
    `Message:`,
    `${d.message}`,
  ]
    .filter(Boolean)
    .join("\n");
}
