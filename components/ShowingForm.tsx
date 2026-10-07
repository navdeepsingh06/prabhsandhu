import { ContactForm } from "./ContactForm";

/** "Schedule a Showing" form — a ContactForm preset with a date field. */
export function ShowingForm({ listing }: { listing: string }) {
  return (
    <ContactForm
      formType="showing"
      listing={listing}
      showDate
      messageLabel="Anything I should know?"
      messagePlaceholder="Questions about this home, or preferred viewing times…"
      submitLabel="Request a showing"
    />
  );
}
