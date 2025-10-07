import type { Metadata } from "next";
import { curriculumModules } from "@/data/curriculum";
import { Container } from "@/components/layout/container";
import { StructuredData } from "@/components/layout/structured-data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Curriculum overview",
  description:
    "Dive into the Veloura curriculum: Foundations, Story, Automation, Offers, Analytics, and Authority—each with tangible deliverables.",
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
      name: "Curriculum",
      item: "https://veloura.com/curriculum",
    },
  ],
};

export default function CurriculumPage() {
  return (
    <>
      <StructuredData id="curriculum-breadcrumbs" data={breadcrumbLd} />
      <div className="page-shell">
        <section className="section">
          <Container className="space-y-12">
            <div className="max-w-3xl space-y-4">
              <Badge tone="accent">Curriculum</Badge>
              <h1 className="font-display text-[clamp(2.4rem,4vw,3.5rem)] tracking-[-0.04em] text-[rgba(245,227,197,0.95)]">
                Six modules designed to move you from clarity to authority.
              </h1>
              <p className="text-lg text-[rgba(233,211,180,0.7)]">
                Each sprint ends with assets you can show a mentor, client, or partner. You’ll build
                foundations, stories, systems, and authority with a measured cadence.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {curriculumModules.map((module, index) => (
                <Card
                  key={module.title}
                  className="flex h-full flex-col gap-6 rounded-[var(--radius-xl)] border-[rgba(233,211,180,0.22)] bg-[rgba(17,18,24,0.72)] p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs tracking-[0.22em] text-[rgba(233,211,180,0.55)] uppercase">
                        Module {index + 1}
                      </p>
                      <h2 className="text-xl font-semibold tracking-tight text-[rgba(245,227,197,0.92)]">
                        {module.title}
                      </h2>
                    </div>
                    <Badge tone="outline">{module.title.split(" ")[0]}</Badge>
                  </div>
                  <p className="text-sm text-[rgba(233,211,180,0.68)]">{module.emphasis}</p>
                  <div className="space-y-3">
                    <h3 className="text-xs tracking-[0.22em] text-[rgba(233,211,180,0.55)] uppercase">
                      Deliverables
                    </h3>
                    <ul className="space-y-2 text-sm text-[rgba(233,211,180,0.7)]">
                      {module.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[rgba(233,211,180,0.6)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xs tracking-[0.22em] text-[rgba(233,211,180,0.55)] uppercase">
                      Tool stack
                    </h3>
                    <div className="flex flex-wrap gap-2 text-xs tracking-[0.18em] text-[rgba(233,211,180,0.6)] uppercase">
                      {module.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-[rgba(233,211,180,0.23)] px-3 py-1"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
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


