"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { curriculumModules } from "@/data/curriculum";
import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function CurriculumOverview() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section className="section">
      <Container className="space-y-12">
        <div className="max-w-3xl space-y-4">
          <Badge tone="outline">Curriculum</Badge>
          <h2 className="font-display text-[clamp(2.2rem,3.3vw,3.1rem)] leading-tight tracking-[-0.03em] text-[rgba(245,227,197,0.92)]">
            The roadmap: from foundations to authority assets.
          </h2>
          <p className="text-base text-[rgba(233,211,180,0.7)]">
            Each module ends with tangible deliverables, mentor critique, and a systems checklist.
            Pick your pace; we&apos;ll help you ship.
          </p>
        </div>
        <div ref={ref} className="grid gap-6 md:grid-cols-2">
          {curriculumModules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: index * 0.08, duration: 0.6, ease: [0.32, 0.04, 0.24, 1] }}
            >
              <Card className="flex h-full flex-col gap-6 rounded-[var(--radius-xl)] border-[rgba(233,211,180,0.22)] bg-[rgba(17,18,24,0.72)] p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-xs tracking-[0.22em] text-[rgba(233,211,180,0.55)] uppercase">
                      Module {index + 1}
                    </p>
                    <h3 className="text-xl font-semibold tracking-tight text-[rgba(245,227,197,0.92)]">
                      {module.title}
                    </h3>
                  </div>
                  <Badge tone="accent" className="text-[0.6rem]">
                    {module.title.split(" ")[0]}
                  </Badge>
                </div>
                <p className="text-sm text-[rgba(233,211,180,0.7)]">{module.emphasis}</p>
                <div className="space-y-3">
                  <h4 className="text-xs tracking-[0.22em] text-[rgba(233,211,180,0.55)] uppercase">
                    Deliverables
                  </h4>
                  <ul className="space-y-2 text-sm text-[rgba(233,211,180,0.72)]">
                    {module.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[rgba(233,211,180,0.6)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xs tracking-[0.22em] text-[rgba(233,211,180,0.55)] uppercase">
                    Tool stack
                  </h4>
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
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
