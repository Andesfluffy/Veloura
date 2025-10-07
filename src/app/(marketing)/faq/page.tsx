import type { Metadata } from "next";
import { faqs } from "@/data/faqs";
import { StructuredData } from "@/components/layout/structured-data";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Accordion } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description:
    "Get clarity on time commitment, experience level, costs, ethics, and refunds before joining Veloura.",
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
      name: "FAQ",
      item: "https://veloura.com/faq",
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <StructuredData id="faq-breadcrumbs" data={breadcrumbLd} />
      <div className="page-shell">
        <section className="section">
          <Container className="space-y-10">
            <div className="max-w-3xl space-y-4">
              <Badge tone="accent">FAQ</Badge>
              <h1 className="font-display text-[clamp(2.4rem,3.8vw,3.4rem)] tracking-[-0.04em] text-[rgba(245,227,197,0.95)]">
                Clarity before commitment.
              </h1>
              <p className="text-lg text-[rgba(233,211,180,0.7)]">
                Transparency matters. Explore answers to the most common questions about time, cost,
                ethics, and results.
              </p>
            </div>
            <Accordion
              allowMultiple
              items={faqs.map((faq) => ({
                id: faq.question.toLowerCase().replace(/\s+/g, "-"),
                title: faq.question,
                description: faq.category,
                content: faq.answer,
              }))}
            />
          </Container>
        </section>
      </div>
    </>
  );
}
