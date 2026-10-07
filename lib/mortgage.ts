/**
 * Manitoba-aware mortgage math for the listing-detail calculator.
 *
 * Covers: CMHC default-insurance premiums (when down payment < 20%), the
 * amortized monthly payment, and an estimate of Manitoba Land Transfer Tax.
 * These are approximations for planning only — confirm exact figures with a
 * mortgage professional and your lawyer.
 */

export interface MortgageInputs {
  price: number;
  downPayment: number; // dollars
  annualRatePct: number; // e.g. 5.25
  amortizationYears: number; // e.g. 25
}

export interface MortgageResult {
  downPaymentPct: number;
  insurable: boolean;
  cmhcPremium: number;
  principal: number; // financed amount incl. premium
  monthlyPayment: number;
  landTransferTax: number;
}

/**
 * CMHC premium rate based on loan-to-value. Required when down payment is
 * under 20% (and the price qualifies). Rates per CMHC's standard tiers.
 */
function cmhcPremiumRate(loanToValue: number): number {
  if (loanToValue <= 0.65) return 0.006;
  if (loanToValue <= 0.75) return 0.017;
  if (loanToValue <= 0.8) return 0.024;
  if (loanToValue <= 0.85) return 0.028;
  if (loanToValue <= 0.9) return 0.031;
  return 0.04; // up to 95%
}

/**
 * Manitoba Land Transfer Tax — tiered marginal brackets applied to the
 * purchase price (as published by the Province of Manitoba):
 *   $0–$30,000           0.0%
 *   $30,000–$90,000      0.5%
 *   $90,000–$150,000     1.0%
 *   $150,000–$200,000    1.5%
 *   above $200,000       2.0%
 */
export function manitobaLandTransferTax(price: number): number {
  const brackets: Array<[number, number, number]> = [
    [0, 30000, 0],
    [30000, 90000, 0.005],
    [90000, 150000, 0.01],
    [150000, 200000, 0.015],
    [200000, Infinity, 0.02],
  ];
  let tax = 0;
  for (const [lower, upper, rate] of brackets) {
    if (price > lower) {
      tax += (Math.min(price, upper) - lower) * rate;
    }
  }
  return Math.round(tax);
}

export function calculateMortgage(inputs: MortgageInputs): MortgageResult {
  const { price, downPayment, annualRatePct, amortizationYears } = inputs;

  const safePrice = Math.max(0, price);
  const safeDown = Math.min(Math.max(0, downPayment), safePrice);
  const downPaymentPct = safePrice > 0 ? safeDown / safePrice : 0;

  const baseLoan = Math.max(0, safePrice - safeDown);
  const loanToValue = safePrice > 0 ? baseLoan / safePrice : 0;

  // CMHC insurance applies when down payment < 20% and price is under $1M.
  const insurable = downPaymentPct < 0.2 && safePrice > 0 && safePrice < 1_000_000;
  const cmhcPremium = insurable ? Math.round(baseLoan * cmhcPremiumRate(loanToValue)) : 0;

  const principal = baseLoan + cmhcPremium;

  // Canadian mortgages compound semi-annually; convert to an effective
  // monthly rate for an accurate payment figure.
  const n = amortizationYears * 12;
  let monthlyPayment = 0;
  if (principal > 0 && n > 0) {
    if (annualRatePct <= 0) {
      monthlyPayment = principal / n;
    } else {
      const semiAnnual = annualRatePct / 100 / 2;
      const monthlyRate = Math.pow(1 + semiAnnual, 2 / 12) - 1;
      monthlyPayment =
        (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
    }
  }

  return {
    downPaymentPct,
    insurable,
    cmhcPremium,
    principal: Math.round(principal),
    monthlyPayment: Math.round(monthlyPayment),
    landTransferTax: manitobaLandTransferTax(safePrice),
  };
}
