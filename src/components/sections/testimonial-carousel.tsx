"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const INTERVAL = 7000;

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const reduceMotion = useReducedMotion();
  const active = useMemo(() => testimonials[index], [index]);

  useEffect(() => {
    if (reduceMotion || isHovered) {
      return;
    }
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, INTERVAL);
    return () => window.clearInterval(timer);
  }, [reduceMotion, isHovered]);

  return (
    <section className="section">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <div className="space-y-6">
          <Badge tone="outline">Success stories</Badge>
          <h2 className="font-display text-[clamp(2.2rem,3.1vw,3rem)] tracking-[-0.04em] text-[rgba(245,227,197,0.92)]">
            Testimony from operators who trade hype for integrity.
          </h2>
          <p className="text-base leading-relaxed text-[rgba(233,211,180,0.7)]">
            Transparent metrics, honest timelines, and a clear view of the work involved. These
            outcomes are the product of consistent effort plus mentorship—not shortcuts.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <Button
              variant="secondary"
              size="sm"
              aria-label="Previous testimonial"
              onClick={() =>
                setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
              }
            >
              Prev
            </Button>
            <Button
              variant="secondary"
              size="sm"
              aria-label="Next testimonial"
              onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
            >
              Next
            </Button>
            <div className="ml-4 flex flex-1 gap-2">
              {testimonials.map((item, dotIndex) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setIndex(dotIndex)}
                  aria-label={`View testimonial from ${item.name}`}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${
                    dotIndex === index
                      ? "bg-[rgba(233,211,180,0.85)]"
                      : "bg-[rgba(233,211,180,0.28)] hover:bg-[rgba(233,211,180,0.45)]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <Card
          glow
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="space-y-6 rounded-[var(--radius-2xl)] border-[rgba(233,211,180,0.24)] bg-[rgba(18,19,26,0.82)] p-10"
        >
          <div className="text-xs tracking-[0.22em] text-[rgba(233,211,180,0.6)] uppercase">
            {active.timeline}
          </div>
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.32, 0.04, 0.24, 1] }}
              className="space-y-6 text-[1.15rem] leading-[1.8] text-[rgba(245,227,197,0.9)]"
            >
              "{active.quote}"
              <footer className="space-y-2 border-t border-[rgba(233,211,180,0.18)] pt-4 text-sm text-[rgba(233,211,180,0.7)]">
                <div className="font-semibold text-[rgba(245,227,197,0.9)]">{active.name}</div>
                <div>{active.role}</div>
                <div className="text-xs tracking-[0.22em] text-[rgba(233,211,180,0.58)] uppercase">
                  {active.location} · {active.metric}
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </Card>
      </Container>
    </section>
  );
}
