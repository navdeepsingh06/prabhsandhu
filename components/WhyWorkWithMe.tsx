import { HeartHandshake, KeyRound, LineChart, Languages } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const pillars = [
  {
    icon: HeartHandshake,
    title: "Personalized service",
    body: "You're never a transaction. I tailor every step to your goals, pace, and comfort — with clear communication throughout.",
  },
  {
    icon: KeyRound,
    title: "First-time buyer guidance",
    body: "Buying your first home? I'll demystify financing, offers, and closing so you feel confident at every milestone.",
  },
  {
    icon: LineChart,
    title: "Investor support",
    body: "From cash-flow analysis to resale potential, I help seasoned investors make sharp, well-informed decisions.",
  },
  {
    icon: Languages,
    title: "Multilingual communication",
    body: "Full service in English, Punjabi, and Hindi — so you and your family understand every detail, in your language.",
  },
];

export function WhyWorkWithMe() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {pillars.map((p, i) => (
        <ScrollReveal
          key={p.title}
          as="article"
          delay={i * 0.08}
          className="surface-card group p-6 hover:shadow-lift"
        >
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent-strong transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
            <p.icon className="h-6 w-6" aria-hidden />
          </span>
          <h3 className="mt-5 font-serif text-lg font-semibold">{p.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
        </ScrollReveal>
      ))}
    </div>
  );
}
