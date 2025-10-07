import type { Metadata } from "next";
import { copy } from "@/lib/copy";
import { Container } from "@/components/layout/container";
import { StructuredData } from "@/components/layout/structured-data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Mentorship experience",
  description:
    "Work with Veloura mentors through 1:1 sessions, weekly masterminds, and office hours tailored to your timezone and business model.",
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://veloura.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Mentorship",
      item: "https://veloura.com/mentorship",
    },
  ],
};

const formats = [
  {
    title: "1:1 strategy labs",
    description:
      "Operator-to-operator deep dives. Positioning, offer refinement, and analytics reviews in one focused hour. Included monthly in Builder, bi-weekly in Pro.",
  },
  {
    title: "Weekly masterminds",
    description:
      "Facilitated roundtables capped at eight operators. Hot seats, critiques, and focused sprints that keep momentum without burnout.",
  },
  {
    title: "Async office hours",
    description:
      "Submit Loom walkthroughs or docs, receive annotated feedback within 48 hours. Perfect for refining funnels or automation workflows.",
  },
];

const mentorTraits = [
  "Active operators: every mentor currently runs a profitable remote-first business.",
  "Ethics-led frameworks: automation, AI, and growth decisions grounded in transparency.",
  "Timezone coverage: Americas, EMEA, and APAC mentors to meet you where you work.",
];

export default function MentorshipPage() {
  return (
    <>
      <StructuredData id="mentorship-breadcrumbs" data={breadcrumbLd} />
      <div className="page-shell">
        <section className="section">
          <Container className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
            <div className="space-y-6">
              <Badge tone="accent">Mentorship</Badge>
              <h1 className="font-display text-[clamp(2.4rem,4vw,3.5rem)] tracking-[-0.04em] text-[rgba(245,227,197,0.95)]">
                Experienced operators who coach with empathy and precision.
              </h1>
              <p className="text-lg text-[rgba(233,211,180,0.7)]">{copy.mentorship.story}</p>
              <ul className="space-y-3 text-sm text-[rgba(233,211,180,0.64)]">
                {mentorTraits.map((trait) => (
                  <li key={trait} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[rgba(233,211,180,0.6)]" />
                    <span>{trait}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="space-y-6 rounded-[var(--radius-xl)] border-[rgba(233,211,180,0.22)] bg-[rgba(17,18,24,0.72)] p-8">
              <h2 className="text-xl font-semibold tracking-tight text-[rgba(245,227,197,0.92)]">
                Mentorship formats
              </h2>
              <div className="space-y-5">
                {formats.map((format) => (
                  <div
                    key={format.title}
                    className="border-b border-[rgba(233,211,180,0.18)] pb-4 last:border-none last:pb-0"
                  >
                    <p className="text-xs tracking-[0.22em] text-[rgba(233,211,180,0.55)] uppercase">
                      {format.title}
                    </p>
                    <p className="mt-2 text-sm text-[rgba(233,211,180,0.7)]">
                      {format.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </Container>
        </section>
      </div>
    </>
  );
}
