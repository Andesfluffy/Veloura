"use client";

import { copy } from "@/lib/copy";
import { CTA_EVENTS } from "@/lib/constants";
import { track } from "@/lib/analytics";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <section className="section">
      <Container>
        <div className="relative overflow-hidden rounded-[var(--radius-2xl)] border border-[rgba(233,211,180,0.24)] bg-[rgba(16,17,23,0.82)] px-8 py-14 md:px-12 md:py-16">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(245,227,197,0.2),rgba(16,17,23,0.1))]" />
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)] lg:items-center">
            <div className="space-y-4">
              <h2 className="font-display text-[clamp(2rem,3vw,2.8rem)] tracking-[-0.03em] text-[rgba(245,227,197,0.94)]">
                {copy.cta.headline}
              </h2>
              <p className="text-base text-[rgba(233,211,180,0.72)]">{copy.cta.subheadline}</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
              <Button
                size="lg"
                onClick={() => track(CTA_EVENTS.heroPrimary, { from: "cta_banner" })}
                className="sm:min-w-[220px]"
              >
                {copy.cta.button}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => track(CTA_EVENTS.heroSecondary, { from: "cta_banner" })}
                className="sm:min-w-[220px]"
              >
                Explore Programs
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
