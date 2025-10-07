export type FAQ = {
  question: string;
  answer: string;
  category?: string;
};

export const faqs: FAQ[] = [
  {
    question: "Do I need prior business or marketing experience?",
    answer:
      "No. Veloura was built for career-switchers and creatives who want a structured path. We start with positioning fundamentals, paired implementation, and automation templates that remove the intimidation factor.",
    category: "Experience",
  },
  {
    question: "How much time should I realistically commit each week?",
    answer:
      "We recommend 6–8 focused hours for the Starter tier, 10–12 hours for Builder, and 12–18 hours for Pro. Every sprint includes guidance on how to adapt if you’re balancing a day job or caregiving.",
    category: "Time",
  },
  {
    question: "Is Veloura another hype-y online course?",
    answer:
      "We stay allergic to hype. There are no earnings claims or unrealistic timelines. Expect clear milestones, live mentor critiques, peer accountability, and a transparent look at what consistent work really requires.",
    category: "Ethics",
  },
  {
    question: "What if I can’t keep up or need to pause?",
    answer:
      "Life happens. You can pause once per year with no penalty, move into a lighter pod, or switch to audit mode until you have capacity again. We’ll help you create a restart plan when you’re ready.",
    category: "Support",
  },
  {
    question: "What is your refund or guarantee policy?",
    answer:
      "We offer a 30-day clarity guarantee. If Veloura isn’t the right fit, submit your completed action sheets within the first 30 days and we’ll either recalibrate your plan or issue a refund.",
    category: "Guarantee",
  },
  {
    question: "Can I join from outside the United States?",
    answer:
      "Absolutely. Our community spans 40+ countries. Live sessions rotate time zones and are captioned. We also host async replays and region-specific cohorts.",
    category: "Global",
  },
  {
    question: "Will I get 1:1 mentorship?",
    answer:
      "Every tier includes live mentor reviews. The Pro tier adds bi-weekly 1:1 strategy sessions and bespoke asset development. You can always book additional sessions à la carte.",
    category: "Mentorship",
  },
  {
    question: "How does Veloura handle automation and AI ethically?",
    answer:
      "We emphasize consent-led data collection, transparent disclosures, and human oversight. Automation is used to remove busywork, not authenticity. We provide policies you can adapt to your own business.",
    category: "Automation",
  },
];



