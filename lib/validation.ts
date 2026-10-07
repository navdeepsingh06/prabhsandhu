import { z } from "zod";

/**
 * Zod schemas shared by the client forms (react-hook-form) and the
 * /api/contact route. Keeping them here guarantees client and server validate
 * identically.
 */

const name = z.string().trim().min(2, "Please enter your name.").max(80);
const email = z.string().trim().email("Please enter a valid email address.");
const phone = z
  .string()
  .trim()
  .min(7, "Please enter a valid phone number.")
  .max(25)
  .regex(/^[0-9+().\-\s]+$/, "Please enter a valid phone number.");

export const contactSchema = z.object({
  // Honeypot: real users leave this empty; bots tend to fill it. We accept any
  // value at the schema level so the API can silently 200 a filled honeypot
  // (rather than signalling detection with a validation error).
  company: z.string().optional(),
  formType: z
    .enum(["contact", "showing", "valuation", "consultation"])
    .default("contact"),
  name,
  email,
  phone: phone.optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please add a few more details.").max(2000),
  // Optional context fields used by specialized forms:
  listing: z.string().max(160).optional(),
  preferredDate: z.string().max(40).optional(),
  address: z.string().max(200).optional(),
  consent: z
    .boolean()
    .refine((v) => v === true, "Please agree so I can contact you."),
});

export type ContactInput = z.infer<typeof contactSchema>;
