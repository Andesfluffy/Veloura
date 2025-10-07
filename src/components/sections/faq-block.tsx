"use client";

import { faqs } from "@/data/faqs";
import { copy } from "@/lib/copy";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Accordion } from "@/components/ui/accordion";

export function FAQBlock() {
  return (
    <section className="section">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <div className="space-y-6">
          <Badge tone="outline">{copy.faq.headline}</Badge>
          <p className="text-base text-[rgba(233,211,180,0.7)]">{copy.faq.intro}</p>
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
  );
}
