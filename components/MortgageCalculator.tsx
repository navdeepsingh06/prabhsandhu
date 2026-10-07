"use client";

import { useMemo, useState } from "react";
import { calculateMortgage } from "@/lib/mortgage";
import { formatPrice } from "@/lib/utils";

/** Manitoba-aware mortgage estimator. Pure client-side; no network. */
export function MortgageCalculator({ price }: { price: number }) {
  const [homePrice, setHomePrice] = useState(price);
  const [downPct, setDownPct] = useState(20);
  const [rate, setRate] = useState(5.25);
  const [years, setYears] = useState(25);

  const downPayment = Math.round((homePrice * downPct) / 100);

  const result = useMemo(
    () =>
      calculateMortgage({
        price: homePrice,
        downPayment,
        annualRatePct: rate,
        amortizationYears: years,
      }),
    [homePrice, downPayment, rate, years]
  );

  const field = "w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm focus:border-accent-strong focus:outline-none focus:ring-2 focus:ring-accent-strong/40";

  return (
    <div className="surface-card p-6">
      <h3 className="font-serif text-xl font-semibold">Mortgage calculator</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        A quick estimate for this home. Manitoba-aware (CMHC insurance &amp; land transfer tax).
      </p>

      <div className="mt-5 grid grid-cols-2 gap-4">
        <label className="col-span-2">
          <span className="mb-1 block text-xs font-medium text-muted-foreground">Home price</span>
          <input
            type="number"
            min={0}
            step={1000}
            value={homePrice}
            onChange={(e) => setHomePrice(Math.max(0, Number(e.target.value)))}
            className={field}
          />
        </label>

        <label className="col-span-2">
          <span className="mb-1 flex items-center justify-between text-xs font-medium text-muted-foreground">
            <span>Down payment</span>
            <span className="text-foreground">
              {downPct}% · {formatPrice(downPayment)}
            </span>
          </span>
          <input
            type="range"
            min={5}
            max={50}
            step={1}
            value={downPct}
            onChange={(e) => setDownPct(Number(e.target.value))}
            className="w-full accent-[hsl(var(--color-accent))]"
            aria-label="Down payment percentage"
          />
        </label>

        <label>
          <span className="mb-1 block text-xs font-medium text-muted-foreground">Rate (%)</span>
          <input
            type="number"
            min={0}
            max={25}
            step={0.05}
            value={rate}
            onChange={(e) => setRate(Math.max(0, Number(e.target.value)))}
            className={field}
          />
        </label>

        <label>
          <span className="mb-1 block text-xs font-medium text-muted-foreground">Amortization</span>
          <select
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className={field}
          >
            {[15, 20, 25, 30].map((y) => (
              <option key={y} value={y}>
                {y} years
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-6 rounded-xl bg-primary p-5 text-primary-foreground">
        <p className="text-sm text-primary-foreground/70">Estimated monthly payment</p>
        <p className="font-serif text-3xl font-semibold">{formatPrice(result.monthlyPayment)}</p>
        <dl className="mt-4 space-y-1.5 text-sm">
          {result.insurable && (
            <div className="flex justify-between">
              <dt className="text-primary-foreground/70">CMHC insurance (added)</dt>
              <dd>{formatPrice(result.cmhcPremium)}</dd>
            </div>
          )}
          <div className="flex justify-between">
            <dt className="text-primary-foreground/70">Total financed</dt>
            <dd>{formatPrice(result.principal)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-primary-foreground/70">Est. MB land transfer tax</dt>
            <dd>{formatPrice(result.landTransferTax)}</dd>
          </div>
        </dl>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        Estimates only, for planning purposes. Actual payments, insurance premiums, and taxes
        depend on your lender, approval, and legal closing. Confirm figures with a mortgage
        professional.
      </p>
    </div>
  );
}
