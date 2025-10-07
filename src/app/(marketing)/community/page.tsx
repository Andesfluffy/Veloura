import type { Metadata } from "next";
import { copy } from "@/lib/copy";
import { Container } from "@/components/layout/container";
import { StructuredData } from "@/components/layout/structured-data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Community experience",
  description:
    "Inside Veloura’s private collective: global cohorts, accountability pods, language support, and calm challenges.",
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
      name: "Community",
      item: "https://veloura.com/community",
    },
  ],
};

const pillars = [
  {
    title: "Private collective",
    description:
      "Circle rooms curated for funnel feedback, automation audits, and authority building. No spam, no pitch threads—just operators getting sharper.",
  },
  {
    title: "Build weeks & challenges",
    description:
      "Monthly implementation sprints with templates, checklists, and mentor critiques. Designed to be doable alongside life and work.",
  },
  {
    title: "Accountability pods",
    description:
      "Pods of four to six people matched by timezone, goal, and energy. Weekly check-ins, shared metrics dashboards, and gentle accountability.",
  },
];

export default function CommunityPage() {
  return (
    <>
      <StructuredData id="community-breadcrumbs" data={breadcrumbLd} />
      <div className="page-shell">
        <section className="section">
          <Container className="space-y-12">
            <div className="max-w-3xl space-y-4">
              <Badge tone="accent">Community</Badge>
              <h1 className="font-display text-[clamp(2.3rem,3.6vw,3.4rem)] tracking-[-0.04em] text-[rgba(245,227,197,0.95)]">
                {copy.community.headline}
              </h1>
              <p className="text-lg text-[rgba(233,211,180,0.7)]">{copy.community.description}</p>
              <p className="text-sm tracking-[0.22em] text-[rgba(233,211,180,0.55)] uppercase">
                English cohorts live today; Spanish and Tagalog pods launch soon.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {pillars.map((pillar) => (
                <Card
                  key={pillar.title}
                  className="h-full space-y-3 rounded-[var(--radius-xl)] border-[rgba(233,211,180,0.22)] bg-[rgba(17,18,24,0.72)] p-8"
                >
                  <h2 className="text-lg font-semibold tracking-tight text-[rgba(245,227,197,0.92)]">
                    {pillar.title}
                  </h2>
                  <p className="text-sm text-[rgba(233,211,180,0.68)]">{pillar.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}

