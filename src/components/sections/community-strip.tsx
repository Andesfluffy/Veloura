"use client";

import { motion } from "framer-motion";
import { copy } from "@/lib/copy";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";

const stats = [
  { label: "Members", value: "1,820+", note: "Independent operators" },
  { label: "Countries", value: "42", note: "Every major timezone" },
  { label: "Live sessions", value: "6x weekly", note: "Rotating cohorts" },
];

export function CommunityStrip() {
  return (
    <section className="section">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
        <div className="space-y-6">
          <Badge tone="accent">Community</Badge>
          <h2 className="font-display text-[clamp(2.1rem,3.2vw,3.1rem)] tracking-[-0.03em] text-[rgba(245,227,197,0.92)]">
            {copy.community.headline}
          </h2>
          <p className="text-base leading-relaxed text-[rgba(233,211,180,0.7)]">
            {copy.community.description}
          </p>
          <p className="text-sm tracking-[0.22em] text-[rgba(233,211,180,0.55)] uppercase">
            Monthly challenges. Accountability pods matched by timezone, energy, and ambition.
          </p>
        </div>
        <div className="space-y-6 rounded-[var(--radius-2xl)] border border-[rgba(233,211,180,0.2)] bg-[rgba(14,16,22,0.72)] p-10 shadow-[0_24px_90px_rgba(0,0,0,0.45)]">
          <div className="grid gap-6 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.08, duration: 0.6, ease: [0.32, 0.04, 0.24, 1] }}
                className="space-y-2"
              >
                <p className="text-xs tracking-[0.22em] text-[rgba(233,211,180,0.58)] uppercase">
                  {stat.label}
                </p>
                <p className="text-2xl font-semibold text-[rgba(245,227,197,0.95)]">{stat.value}</p>
                <p className="text-xs text-[rgba(233,211,180,0.55)]">{stat.note}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.35, duration: 0.6, ease: [0.32, 0.04, 0.24, 1] }}
            className="rounded-[var(--radius-xl)] border border-[rgba(233,211,180,0.2)] bg-[rgba(18,19,26,0.8)] p-6 text-sm text-[rgba(233,211,180,0.68)]"
          >
            Members in {stats[1].value} countries coordinate async and live. Update this block with
            fresh metrics as your community scales—it keeps momentum honest and inspiring.
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
