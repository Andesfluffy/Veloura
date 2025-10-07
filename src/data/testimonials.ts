export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
  metric: string;
  timeline: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Veloura helped me turn a scattered set of skills into an evergreen offer. The mentorship made sure every funnel piece had a story-first approach.",
    name: "Amara L.",
    role: "Former ICU Nurse → Wellness Strategist",
    location: "Auckland, New Zealand",
    metric: "First 12 clients in 14 weeks",
    timeline: "Builder tier, Cohort Q2",
  },
  {
    quote:
      "I appreciated the calm, ethical vibe. We tracked numbers weekly, iterated on copy, and my automation setup was finally something I understood end-to-end.",
    name: "Jonas P.",
    role: "Product Designer → Community SaaS Founder",
    location: "Berlin, Germany",
    metric: "42% lift in qualified leads",
    timeline: "Pro tier, Cohort Q1",
  },
  {
    quote:
      "The accountability pods and office hours made it feel like I had a remote team. I launched my first affiliate bundle without overwhelming tech headaches.",
    name: "Riya S.",
    role: "ESL Teacher → Digital Creator",
    location: "Dubai, UAE",
    metric: "Replaced salary in 6 months (15 hr/week)",
    timeline: "Builder tier, Cohort Q3",
  },
  {
    quote:
      "Their data reviews kept me from chasing vanity metrics. We focused on conversion signals, and the mentor critiques pushed my story forward.",
    name: "Mateo G.",
    role: "Photographer → Boutique Agency Owner",
    location: "Mexico City, Mexico",
    metric: "3 retainer clients, 18% margin bump",
    timeline: "Pro tier, Cohort Q4",
  },
];
