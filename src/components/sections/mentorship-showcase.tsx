"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { copy } from "@/lib/copy";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const mentors = [
  {
    name: "Selena Quinn",
    title: "Automation Architect",
    timezone: "UTC-5",
    quote:
      "We build systems that feel bespoke yet run on rails. Ethics and customer trust stay non-negotiable.",
    specialties: ["Automation", "No-code ops", "Client experience"],
  },
  {
    name: "Leo Mendes",
    title: "Story & Positioning Mentor",
    timezone: "UTC+1",
    quote:
      "Narrative clarity is leverage. We get members unapologetically specific so their message lands with calm conviction.",
    specialties: ["Narrative design", "Offer positioning", "Content OS"],
  },
  {
    name: "Aya Nakamura",
    title: "Revenue Strategist",
    timezone: "UTC+9",
    quote:
      "Revenue plans deserve calm energy. We map campaigns around your capacity and signals, not hustle myths.",
    specialties: ["Revenue planning", "Analytics", "Partnerships"],
  },
];

export function MentorshipShowcase() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section className="section">
      <Container className="space-y-12">
        <div className="max-w-3xl space-y-4">
          <Badge tone="accent">Mentorship</Badge>
          <h2 className="font-display text-[clamp(2.2rem,3.3vw,3.2rem)] tracking-[-0.04em] text-[rgba(245,227,197,0.92)]">
            {copy.mentorship.headline}
          </h2>
          <p className="text-base text-[rgba(233,211,180,0.7)]">{copy.mentorship.story}</p>
        </div>
        <div ref={ref} className="grid gap-6 lg:grid-cols-3">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.32, 0.04, 0.24, 1] }}
            >
              <Card className="h-full space-y-5 rounded-[var(--radius-xl)] border-[rgba(233,211,180,0.22)] bg-[rgba(17,18,24,0.72)] p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(233,211,180,0.3)] bg-[radial-gradient(circle_at_30%_30%,rgba(245,227,197,0.92),rgba(200,173,123,0.35))] text-base font-semibold text-[#141216]">
                    {mentor.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div className="space-y-1">
                    <p className="text-base font-semibold tracking-tight text-[rgba(245,227,197,0.92)]">
                      {mentor.name}
                    </p>
                    <p className="text-xs tracking-[0.22em] text-[rgba(233,211,180,0.55)] uppercase">
                      {mentor.title}
                    </p>
                  </div>
                  <Badge tone="outline" className="ml-auto text-[0.55rem]">
                    {mentor.timezone}
                  </Badge>
                </div>
                <p className="text-sm leading-relaxed text-[rgba(233,211,180,0.7)]">
                  "{mentor.quote}"
                </p>
                <div className="flex flex-wrap gap-2 text-xs tracking-[0.18em] text-[rgba(233,211,180,0.6)] uppercase">
                  {mentor.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="rounded-full border border-[rgba(233,211,180,0.24)] px-3 py-1"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
