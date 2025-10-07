import type { Metadata } from "next";
import { StructuredData } from "@/components/layout/structured-data";
import { LeadFormSection } from "@/components/sections/lead-form";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Apply to Veloura",
  description:
    "Submit your details to access the mini-class and receive a tailored onboarding plan from Veloura mentors.",
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
      name: "Apply",
      item: "https://veloura.com/apply",
    },
  ],
};

const readiness = [
  {
    title: "You're committed to ethical growth",
    description:
      "You want honest marketing, consent-based automation, and momentum you can sustain.",
  },
  {
    title: "You can dedicate focused time",
    description:
      "Allocate 8 hours per week (Builder) or 12 hours (Pro) to ship assets, review data, and iterate.",
  },
  {
    title: "You're ready to be coachable",
    description:
      "You crave feedback, accountability, and peers who hold you to a professional standard.",
  },
];

export default function ApplyPage() {
  return (
    <>
      <StructuredData id="apply-breadcrumbs" data={breadcrumbLd} />
      <div className="page-shell">
        <section className="section">
          <Container className="space-y-10">
            <div className="max-w-3xl space-y-4">
              <Badge tone="accent">Apply</Badge>
              <h1 className="font-display text-[clamp(2.4rem,4vw,3.5rem)] tracking-[-0.04em] text-[rgba(245,227,197,0.95)]">
                We're here for steady operators ready to earn on their terms.
              </h1>
              <p className="text-lg text-[rgba(233,211,180,0.7)]">
                Tell us about your goals and availability. We'll respond within two business days
                with next steps and an invitation to the live orientation.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {readiness.map((item) => (
                <Card
                  key={item.title}
                  className="h-full rounded-[var(--radius-xl)] border-[rgba(233,211,180,0.22)] bg-[rgba(17,18,24,0.72)] p-6"
                >
                  <h2 className="text-base font-semibold text-[rgba(245,227,197,0.9)]">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm text-[rgba(233,211,180,0.68)]">{item.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>
        <LeadFormSection />
      </div>
    </>
  );
}
