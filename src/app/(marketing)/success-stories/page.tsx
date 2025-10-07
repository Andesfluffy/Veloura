import type { Metadata } from "next";
import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/layout/container";
import { StructuredData } from "@/components/layout/structured-data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Success stories",
  description:
    "Real operators, transparent timelines, and the results they built with Veloura mentorship.",
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
      name: "Success Stories",
      item: "https://veloura.com/success-stories",
    },
  ],
};

export default function SuccessStoriesPage() {
  return (
    <>
      <StructuredData id="success-stories-breadcrumbs" data={breadcrumbLd} />
      <div className="page-shell">
        <section className="section">
          <Container className="space-y-12">
            <div className="max-w-3xl space-y-4">
              <Badge tone="accent">Success stories</Badge>
              <h1 className="font-display text-[clamp(2.4rem,3.8vw,3.5rem)] tracking-[-0.04em] text-[rgba(245,227,197,0.95)]">
                Honest wins from calm, consistent execution.
              </h1>
              <p className="text-lg text-[rgba(233,211,180,0.7)]">
                Measurable outcomes, candid timelines, and a clear look at the effort involved.
                These are operators who chose momentum over shortcuts.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {testimonials.map((story) => (
                <Card
                  key={story.name}
                  className="h-full space-y-4 rounded-[var(--radius-xl)] border-[rgba(233,211,180,0.22)] bg-[rgba(17,18,24,0.74)] p-8"
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs tracking-[0.22em] text-[rgba(233,211,180,0.55)] uppercase">
                    <span>{story.timeline}</span>
                    <span className="h-px w-8 bg-[rgba(233,211,180,0.24)]" />
                    <span>{story.metric}</span>
                  </div>
                  <p className="text-lg leading-relaxed text-[rgba(245,227,197,0.88)]">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                  <div className="space-y-1 text-sm text-[rgba(233,211,180,0.7)]">
                    <p className="font-semibold text-[rgba(245,227,197,0.9)]">{story.name}</p>
                    <p>{story.role}</p>
                    <p className="text-[rgba(233,211,180,0.55)]">{story.location}</p>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}
