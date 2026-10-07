import { ContactForm } from "./ContactForm";

/** "What's My Home Worth?" lead form — a ContactForm preset with an address field. */
export function HomeValuationForm() {
  return (
    <ContactForm
      formType="valuation"
      showAddress
      messageLabel="Tell me about your home"
      messagePlaceholder="Approx. square footage, bedrooms, recent updates, and your ideal timeline…"
      submitLabel="Request my free evaluation"
    />
  );
}
