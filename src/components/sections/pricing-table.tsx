"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { pricingPlans } from "@/data/pricing";
import { copy } from "@/lib/copy";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/analytics";
import { CTA_EVENTS } from "@/lib/constants";
import { cn, formatCurrency } from "@/lib/utils";

export function PricingTable() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (inView) {
      track("pricing_plan_impression", { plans: pricingPlans.length });
    }
  }, [inView]);

  return (
    <section className="section">
      <Container className="space-y-12">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <Badge tone="accent" className="mx-auto">
            Pricing
          </Badge>
          <h2 className="font-display text-[clamp(2.3rem,3.4vw,3.4rem)] tracking-[-0.04em] text-[rgba(245,227,197,0.92)]">
            {copy.pricing.headline}
          </h2>
          <p className="text-base text-[rgba(233,211,180,0.7)]">{copy.pricing.description}</p>
        </div>
        <div ref={ref} className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: index * 0.12, duration: 0.6, ease: [0.32, 0.04, 0.24, 1] }}
            >
              <Card
                className={cn(
                  "flex h-full flex-col gap-6 rounded-[var(--radius-xl)] border-[rgba(233,211,180,0.22)] bg-[rgba(17,18,24,0.74)] p-8",
                  plan.featured &&
                    "border-[rgba(233,211,180,0.35)] shadow-[0_18px_60px_rgba(233,211,180,0.28)]",
                )}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold tracking-tight text-[rgba(245,227,197,0.92)]">
                      {plan.name}
                    </h3>
                    {plan.featured ? <Badge tone="accent">Builder's choice</Badge> : null}
                  </div>
                  <p className="text-sm tracking-[0.2em] text-[rgba(233,211,180,0.55)] uppercase">
                    {plan.tagline}
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-semibold text-[rgba(245,227,197,0.95)]">
                      {formatCurrency(plan.price)}
                    </span>
                    <span className="text-xs tracking-[0.2em] text-[rgba(233,211,180,0.55)] uppercase">
                      {plan.frequency}
                    </span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-[rgba(233,211,180,0.7)]">
                  {plan.description}
                </p>
                <ul className="flex-1 space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature.label} className="flex items-start gap-3">
                      <span
                        className={cn(
                          "mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border",
                          feature.included
                            ? "border-[rgba(233,211,180,0.5)] bg-[rgba(233,211,180,0.18)] text-[rgba(233,211,180,0.92)]"
                            : "border-[rgba(233,211,180,0.18)] text-[rgba(233,211,180,0.4)]",
                        )}
                        aria-hidden
                      >
                        {feature.included ? <Check className="h-3 w-3" /> : "–"}
                      </span>
                      <div
                        className={cn(
                          "space-y-1 text-[rgba(233,211,180,0.75)]",
                          !feature.included && "text-[rgba(233,211,180,0.4)]",
                        )}
                      >
                        <span>{feature.label}</span>
                        {feature.note ? (
                          <span className="block text-xs tracking-[0.18em] text-[rgba(233,211,180,0.48)] uppercase">
                            {feature.note}
                          </span>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.featured ? "primary" : "secondary"}
                  size="lg"
                  className="w-full"
                  onClick={() => track(CTA_EVENTS.pricingPlan, { plan: plan.id })}
                >
                  {plan.ctaLabel}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="rounded-[var(--radius-xl)] border border-[rgba(233,211,180,0.2)] bg-[rgba(14,16,22,0.72)] p-8 text-sm text-[rgba(233,211,180,0.7)] sm:p-10">
          {copy.pricing.guarantee}
        </div>
      </Container>
    </section>
  );
}
