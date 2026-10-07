/**
 * STATS ROW
 *
 * `realStats` are verified facts and are rendered as truth.
 * `placeholderStats` are illustrative only and MUST be clearly flagged in the UI.
 * // REPLACE WITH REAL before presenting any number below as factual.
 */

export interface Stat {
  value: string;
  label: string;
  /** When true, the UI marks this as sample/illustrative data. */
  placeholder?: boolean;
}

export const realStats: Stat[] = [
  { value: "6+", label: "Years of Experience" },
  { value: "3", label: "Languages Spoken" },
  { value: "Winnipeg", label: "& Surrounding Area" },
];

// REPLACE WITH REAL — illustrative numbers only; shown with a "sample" note.
export const placeholderStats: Stat[] = [
  { value: "150+", label: "Happy Clients", placeholder: true },
  { value: "$0", label: "In Sales Volume", placeholder: true },
];
