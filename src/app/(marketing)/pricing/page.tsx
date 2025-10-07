import type { Metadata } from "next";
import { pricingPlans } from "@/data/pricing";
import { faqs } from "@/data/faqs";
import { StructuredData } from "@/components/layout/structured-data";
import { PricingTable } from "@/components/sections/pricing-table";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Accordion } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Pricing & tiers",
  description:
    "Choose the Veloura plan that matches your momentum—Starter, Builder, or Pro—with transparent features and guarantees.",
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
      name: "Pricing",
      item: "https://veloura.com/pricing",
    },
  ],
};

const tierFaqs = [
  {
    id: "starter-faq",
    title: "Starter tier questions",
    content:
      "Starter is perfect for exploring the methodology and community accountability. Upgrade to Builder when you’re ready for mentor critiques or automation audits.",
  },
  {
    id: "builder-faq",
    title: "Builder tier questions",
    content:
      "Builder includes weekly masterminds, automation audits, and coworking rooms. It’s ideal when you want structure, feedback, and steady implementation momentum.",
  },
  {
    id: "pro-faq",
    title: "Pro tier questions",
    content:
      "Pro adds bi-weekly 1:1 mentoring, a personal brand kit, and campaign war rooms. Choose Pro when you’re ready to scale authority or launch high-ticket offers.",
  },
];

export default function PricingPage() {
  return (
    <>
      <StructuredData id="pricing-breadcrumbs" data={breadcrumbLd} />
      <div className="page-shell">
        <PricingTable />
        <section className="section">
          <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="space-y-4">
              <Badge tone="outline">Need clarity?</Badge>
              <p className="text-base text-[rgba(233,211,180,0.7)]">
                Every tier includes the full methodology. The difference lies in cadence, mentor
                access, and the volume of done-with-you support.
              </p>
              <ul className="space-y-3 text-sm text-[rgba(233,211,180,0.65)]">
                {pricingPlans.map((plan) => (
                  <li key={plan.id}>
                    <strong className="text-[rgba(245,227,197,0.9)]">{plan.name}:</strong>{" "}
                    {plan.description}
                  </li>
                ))}
              </ul>
            </div>
            <Accordion
              allowMultiple
              items={[
                ...tierFaqs,
                ...faqs.slice(0, 3).map((faq) => ({
                  id: faq.question.toLowerCase().replace(/\s+/g, "-"),
                  title: faq.question,
                  content: faq.answer,
                })),
              ]}
            />
          </Container>
        </section>
      </div>
    </>
  );
}


