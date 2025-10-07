import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { copy } from "@/lib/copy";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";

export function ProcessSteps() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section">
      <Container className="space-y-12">
        <div className="max-w-3xl space-y-4">
          <Badge tone="accent">Methodology</Badge>
          <h2 className="font-display text-[clamp(2.2rem,3.2vw,3.2rem)] tracking-[-0.03em] text-[rgba(245,227,197,0.92)]">
            {copy.howItWorks.heading}
          </h2>
          <p className="text-base text-[rgba(233,211,180,0.7)]">{copy.howItWorks.intro}</p>
        </div>
        <div ref={ref} className="grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:items-start">
          <div className="space-y-6 rounded-[var(--radius-xl)] border-[rgba(233,211,180,0.2)] bg-[rgba(14,15,21,0.7)] p-6">
            <p className="text-sm uppercase tracking-[0.22em] text-[rgba(233,211,180,0.6)]">
              Phase flow
            </p>
            <p className="text-sm leading-relaxed text-[rgba(233,211,180,0.68)]">
              Learn -> Build -> Earn is more than steps - it is a pace. Each checkpoint includes mentor
              review, shipped assets, and a simple proof of work to keep you honest.
            </p>
          </div>
          <div className="space-y-8">
            {copy.howItWorks.phases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : undefined}
                transition={{ delay: index * 0.12, duration: 0.6, ease: [0.32, 0.04, 0.24, 1] }}
                className="grid gap-6 rounded-[var(--radius-xl)] border-[rgba(233,211,180,0.22)] bg-[rgba(17,18,24,0.72)] p-8 md:grid-cols-[auto,1fr]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-[rgba(233,211,180,0.35)] bg-[rgba(21,21,27,0.86)] text-lg font-semibold text-[rgba(245,227,197,0.9)]">
                  0{index + 1}
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.22em] text-[rgba(233,211,180,0.55)]">
                      {phase.title}
                    </p>
                    <h3 className="text-xl font-semibold tracking-tight text-[rgba(245,227,197,0.92)]">
                      {phase.summary}
                    </h3>
                  </div>
                  <ul className="grid gap-2 text-sm text-[rgba(233,211,180,0.7)] sm:grid-cols-2">
                    {phase.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-3">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[rgba(233,211,180,0.6)]" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
