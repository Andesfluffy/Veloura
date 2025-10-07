type PricingFeature = {
  label: string;
  included: boolean;
  note?: string;
};

export type PricingPlan = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  frequency: "one-time" | "quarterly" | "annually";
  description: string;
  featured?: boolean;
  features: PricingFeature[];
  ctaLabel: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Mini-class + community",
    price: 295,
    frequency: "one-time",
    description:
      "Jump into the methodology with guided sprints, accountability pods, and the free mini-class unlocked.",
    features: [
      { label: "On-demand mini-class library", included: true },
      { label: "Live orientation with mentor", included: true },
      { label: "Community access + accountability pods", included: true },
      { label: "Weekly mastermind access", included: false, note: "Upgrade anytime." },
      { label: "Done-with-you workflow critiques", included: false },
      { label: "Personal brand launch kit", included: false },
    ],
    ctaLabel: "Start with Starter",
  },
  {
    id: "builder",
    name: "Builder",
    tagline: "Full curriculum + group mentorship",
    price: 545,
    frequency: "quarterly",
    description:
      "Work the full curriculum with mentor feedback, mastermind seats, and automation setups reviewed in real time.",
    featured: true,
    features: [
      { label: "Everything in Starter", included: true },
      { label: "Full Veloura curriculum access", included: true },
      { label: "Weekly mentor masterminds", included: true },
      { label: "Automation stack audits", included: true },
      { label: "Implementation coworking rooms", included: true },
      { label: "Growth KPI dashboard templates", included: true },
    ],
    ctaLabel: "Apply for Builder",
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "1:1 mentoring + personal brand kit",
    price: 1495,
    frequency: "quarterly",
    description:
      "Pair with a lead mentor for bespoke strategy, done-with-you authority assets, and private visibility rollouts.",
    features: [
      { label: "Everything in Builder", included: true },
      { label: "Bi-weekly 1:1 mentor sessions", included: true },
      { label: "Custom authority asset production", included: true },
      { label: "Brand identity refresh", included: true },
      { label: "Launch campaign war room", included: true },
      { label: "Private partner introductions", included: true },
    ],
    ctaLabel: "Join the Pro cohort",
  },
];
