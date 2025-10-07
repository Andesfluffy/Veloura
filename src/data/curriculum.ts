export type CurriculumModule = {
  title: string;
  emphasis: string;
  deliverables: string[];
  tools: string[];
};

export const curriculumModules: CurriculumModule[] = [
  {
    title: "Foundations",
    emphasis: "Position your offer with ethics and clarity.",
    deliverables: [
      "Brand positioning brief",
      "Audience insight report",
      "Values-based decision filter",
    ],
    tools: ["Notion", "Miro", "Typeform"],
  },
  {
    title: "Content & Story",
    emphasis: "Build a magnetic narrative that travels across platforms.",
    deliverables: [
      "Story vault library",
      "Signature content series plan",
      "Audience nurture outline",
    ],
    tools: ["Descript", "Figma", "Canva"],
  },
  {
    title: "Funnels & Automation",
    emphasis: "Design conversion journeys with automation that feels human.",
    deliverables: ["Landing hub page", "Automation workflow map", "Email sequence templates"],
    tools: ["Webflow", "ConvertKit", "Make"],
  },
  {
    title: "Affiliate Offers / Ecommerce Basics",
    emphasis: "Layer in diversified revenue streams with alignment.",
    deliverables: [
      "Offer selection scorecard",
      "Partnership outreach kit",
      "Micro-offer sales page",
    ],
    tools: ["Shopify", "Airtable", "Loom"],
  },
  {
    title: "Analytics & Optimization",
    emphasis: "Decode your numbers and iterate with calm confidence.",
    deliverables: ["Performance dashboard", "Testing roadmap", "Retro + refinement playbook"],
    tools: ["Looker Studio", "Fathom", "Amplitude"],
  },
  {
    title: "Personal Brand & Authority",
    emphasis: "Design a scalable reputation system around your expertise.",
    deliverables: [
      "Authority asset stack",
      "Thought leadership calendar",
      "Visibility partnership plan",
    ],
    tools: ["LinkedIn", "Circle", "Pitch"],
  },
];
