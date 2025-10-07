
import type { Metadata } from "next";
import { copy } from "@/lib/copy";
import { Container } from "@/components/layout/container";
import { StructuredData } from "@/components/layout/structured-data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "How Veloura works",
  description:
    "Discover Veloura's three-phase model — Learn, Build, Earn — that keeps you grounded while you design calm online revenue.",
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
      name: "How It Works",
      item: "https://veloura.com/how-it-works",
    },
  ],
};

export default function HowItWorksPage() {
  return (
    <>
      <StructuredData id="how-it-works-breadcrumbs" data={breadcrumbLd} />
      <div className="page-shell">
        <section className="section">
          <Container className="space-y-12">
            <div className="max-w-3xl space-y-4">
              <Badge tone="accent">How it works</Badge>
              <h1 className="font-display text-[clamp(2.4rem,4vw,3.6rem)] tracking-[-0.04em] text-[rgba(245,227,197,0.95)]">
                A three-phase model that keeps you grounded.
              </h1>
              <p className="text-lg text-[rgba(233,211,180,0.72)]">{copy.howItWorks.intro}</p>
            </div>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
              <Card className="space-y-4 rounded-[var(--radius-xl)] border-[rgba(233,211,180,0.22)] bg-[rgba(17,18,24,0.72)] p-8">
                <h2 className="text-xl font-semibold tracking-tight text-[rgba(245,227,197,0.9)]">
                  Your checkpoints
                </h2>
                <p className="text-sm leading-relaxed text-[rgba(233,211,180,0.68)]">
                  Each phase ends with mentor review, tangible proof of work, and a restart plan.
                  That cadence keeps your effort directional — no busywork, no guesswork.
                </p>
                <ul className="space-y-3 text-sm text-[rgba(233,211,180,0.68)]">
                  <li>- Clarity critiques on positioning, storytelling, and ethics.</li>
                  <li>- Build sprints with automation audits and async office hours.</li>
                  <li>- Earn camps focused on signals, not vanity metrics.</li>
                </ul>
              </Card>
              <div className="space-y-6">
                {copy.howItWorks.phases.map((phase, index) => (
                  <Card
                    key={phase.title}
                    className="rounded-[var(--radius-xl)] border-[rgba(233,211,180,0.22)] bg-[rgba(17,18,24,0.72)] p-8"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(233,211,180,0.35)] bg-[rgba(21,22,28,0.86)] text-sm font-semibold text-[rgba(245,227,197,0.9)]">
                        0{index + 1}
                      </div>
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <p className="text-xs uppercase tracking-[0.22em] text-[rgba(233,211,180,0.55)]">
                            {phase.title}
                          </p>
                          <h3 className="text-lg font-semibold tracking-tight text-[rgba(245,227,197,0.92)]">
                            {phase.summary}
                          </h3>
                        </div>
                        <ul className="space-y-2 text-sm text-[rgba(233,211,180,0.7)]">
                          {phase.outcomes.map((outcome) => (
                            <li key={outcome} className="flex items-start gap-3">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[rgba(233,211,180,0.6)]" />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}
