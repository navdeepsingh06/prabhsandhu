/** FAQ content for the Buy and Sell pages. Plain, Manitoba-aware guidance. */

export interface FAQ {
  q: string;
  a: string;
}

export const buyFaqs: FAQ[] = [
  {
    q: "How much do I need for a down payment in Manitoba?",
    a: "In Canada, the minimum down payment is 5% on the first $500,000 of a home's price and 10% on the portion above that. Putting down less than 20% means you'll pay CMHC mortgage default insurance, which is added to your mortgage. I'll help you run the numbers before you shop.",
  },
  {
    q: "Should I get pre-approved before looking at homes?",
    a: "Yes. A mortgage pre-approval tells you your realistic budget, locks a rate for a set period, and makes your offers far more credible to sellers. It's the first step I recommend for every buyer.",
  },
  {
    q: "What closing costs should I budget for?",
    a: "Beyond your down payment, budget for Manitoba Land Transfer Tax, legal fees, a home inspection, title insurance, and prorated property taxes. A common rule of thumb is roughly 1.5%–4% of the purchase price. I'll give you a tailored estimate.",
  },
  {
    q: "How does the Manitoba Land Transfer Tax work?",
    a: "Manitoba charges a tiered land transfer tax paid at closing, calculated on the property's purchase price. It rises with price, so it's worth estimating early. Your lawyer calculates the exact amount — I'll walk you through a close approximation up front.",
  },
  {
    q: "Do first-time buyers have any special programs?",
    a: "Yes — federal tools like the Home Buyers' Plan (RRSP withdrawal), the First Home Savings Account (FHSA), and the Home Buyers' Amount can help. Eligibility changes over time, so I'll point you to current resources and your mortgage professional.",
  },
  {
    q: "How long does it take to buy a home?",
    a: "From pre-approval to possession, many purchases take about 30–90 days depending on the market and your timeline. Once an offer is accepted, a typical possession date is 30–60 days out, with condition periods in the first week or two.",
  },
];

export const sellFaqs: FAQ[] = [
  {
    q: "How do you price my home?",
    a: "I prepare a comparative market analysis using recent sales of similar nearby homes, current competition, and your home's condition and features. Pricing right from day one attracts more showings and stronger offers.",
  },
  {
    q: "What does it cost to sell?",
    a: "Typical costs include the real estate commission (agreed up front), legal fees, any mortgage discharge or payout costs, and optional prep like staging or minor repairs. I'll give you a clear net-proceeds estimate before we list.",
  },
  {
    q: "Should I make repairs or stage before listing?",
    a: "Often a few targeted improvements and light staging deliver the best return. I'll walk your home with you and recommend only the changes likely to pay off — no unnecessary spending.",
  },
  {
    q: "How long will it take to sell?",
    a: "It depends on price, condition, and market conditions. With the right pricing and marketing, well-prepared Winnipeg homes often attract serious interest quickly. I'll set realistic expectations based on current data for your area.",
  },
  {
    q: "How do you market my property?",
    a: "Professional photography, a compelling listing, MLS® exposure through the brokerage, social media, and my personal network — presented clearly in English, Punjabi, and Hindi to reach more qualified buyers.",
  },
  {
    q: "Can I buy and sell at the same time?",
    a: "Absolutely, and many clients do. We coordinate possession dates, financing, and conditions so the transition is as smooth as possible. I'll help you plan the timing and any bridge-financing questions with your lender.",
  },
];
