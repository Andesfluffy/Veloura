"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { features } from "@/data/features";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { CircuitBoard, Globe2, Handshake, Layers, Sparkles, Users } from "lucide-react";

const iconMap = {
  Globe2,
  Sparkles,
  Layers,
  Users,
  CircuitBoard,
  Handshake,
};

export function FeatureGrid() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section className="section">
      <Container className="grid gap-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
        <div className="space-y-6">
          <Badge tone="outline" className="w-fit">
            Operating system
          </Badge>
          <h2 className="font-display text-[clamp(2.2rem,3.5vw,3.2rem)] leading-tight tracking-[-0.03em] text-[rgba(245,227,197,0.92)]">
            A measured mix of story, systems, and accountability.
          </h2>
          <p className="text-base leading-relaxed text-[rgba(233,211,180,0.72)]">
            Every feature is tested inside live cohorts before it lands in the platform. Expect
            intentional guidance, not bloated dashboards: the right tools, the right timing, the
            right kind of pressure.
          </p>
        </div>
        <div ref={ref} className="grid gap-6 sm:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : undefined}
                transition={{ delay: index * 0.08, duration: 0.6, ease: [0.32, 0.04, 0.24, 1] }}
              >
                <Card
                  glow
                  className="h-full space-y-5 rounded-[var(--radius-xl)] border-[rgba(233,211,180,0.2)] p-7"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(233,211,180,0.3)] bg-[rgba(21,22,28,0.8)] text-[rgba(245,227,197,0.92)]">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <p className="text-sm tracking-[0.2em] text-[rgba(233,211,180,0.55)] uppercase">
                      Capability
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold tracking-tight text-[rgba(245,227,197,0.92)]">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[rgba(233,211,180,0.7)]">
                      {feature.summary}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
