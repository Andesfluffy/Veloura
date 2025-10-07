"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { COUNTRY_OPTIONS, AVAILABILITY_OPTIONS, CTA_EVENTS } from "@/lib/constants";
import { leadFormSchema, type LeadFormValues } from "@/lib/validations";
import { track } from "@/lib/analytics";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

export function LeadFormSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [modalOpen, setModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      goals: "",
      availability: "",
      country: "",
    },
  });

  const onSubmit = async (values: LeadFormValues) => {
    try {
      setStatus("submitting");
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Invalid submission");
      }

      setStatus("success");
      setModalOpen(true);
      track(CTA_EVENTS.leadSubmit, { availability: values.availability });
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
        <div className="space-y-6">
          <Badge tone="accent">Apply</Badge>
          <h2 className="font-display text-[clamp(2.1rem,3vw,3rem)] tracking-[-0.03em] text-[rgba(245,227,197,0.92)]">
            Let&apos;s map your next 12 weeks.
          </h2>
          <p className="text-base text-[rgba(233,211,180,0.7)]">
            Your application helps us understand timeline, support needs, and whether Builder or Pro
            is the best fit. A mentor will review and follow up within 48 hours.
          </p>
          <ul className="space-y-2 text-sm text-[rgba(233,211,180,0.6)]">
            <li>• No hard-sell calls. Expect async feedback first.</li>
            <li>• Share realistic availability to match the right pod.</li>
            <li>• Immediate access to the free mini-class after submitting.</li>
          </ul>
        </div>
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.32, 0.04, 0.24, 1] }}
          className="space-y-6 rounded-[var(--radius-2xl)] border border-[rgba(233,211,180,0.24)] bg-[rgba(16,17,23,0.82)] p-8 shadow-[0_28px_90px_rgba(0,0,0,0.45)] md:p-10"
        >
          <Input
            label="Full name"
            placeholder="Avery Morgan"
            {...register("name")}
            error={errors.name?.message}
            required
          />
          <Input
            label="Email"
            placeholder="you@domain.com"
            type="email"
            {...register("email")}
            error={errors.email?.message}
            required
          />
          <div className="space-y-2.5">
            <label className="flex items-center justify-between text-[0.65rem] font-semibold tracking-[0.22em] text-[rgba(233,211,180,0.72)] uppercase">
              <span>Country</span>
              <span className="text-[rgba(233,211,180,0.5)]">Required</span>
            </label>
            <select
              {...register("country")}
              className={cn(
                "w-full rounded-[var(--radius-lg)] border border-[rgba(233,211,180,0.25)] bg-[rgba(15,16,22,0.78)] px-5 py-3.5 text-sm text-[rgba(233,211,180,0.9)] shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-all focus:border-[rgba(233,211,180,0.45)] focus:bg-[rgba(18,19,26,0.92)] focus:ring-1 focus:ring-[rgba(233,211,180,0.45)] focus:outline-none",
                errors.country && "border-red-400/70 focus:ring-red-400/40",
              )}
            >
              <option value="">Select…</option>
              {COUNTRY_OPTIONS.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.country ? (
              <p className="text-xs font-medium text-red-300/90">{errors.country.message}</p>
            ) : null}
          </div>
          <div className="space-y-2.5">
            <label className="flex items-center justify-between text-[0.65rem] font-semibold tracking-[0.22em] text-[rgba(233,211,180,0.72)] uppercase">
              <span>Time availability</span>
              <span className="text-[rgba(233,211,180,0.5)]">Required</span>
            </label>
            <select
              {...register("availability")}
              className={cn(
                "w-full rounded-[var(--radius-lg)] border border-[rgba(233,211,180,0.25)] bg-[rgba(15,16,22,0.78)] px-5 py-3.5 text-sm text-[rgba(233,211,180,0.9)] shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-all focus:border-[rgba(233,211,180,0.45)] focus:bg-[rgba(18,19,26,0.92)] focus:ring-1 focus:ring-[rgba(233,211,180,0.45)] focus:outline-none",
                errors.availability && "border-red-400/70 focus:ring-red-400/40",
              )}
            >
              <option value="">Select…</option>
              {AVAILABILITY_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.availability ? (
              <p className="text-xs font-medium text-red-300/90">{errors.availability.message}</p>
            ) : null}
          </div>
          <Textarea
            label="What are your goals over the next 6 months?"
            placeholder="Share the outcomes you're aiming for and the hurdles you're navigating."
            rows={5}
            {...register("goals")}
            error={errors.goals?.message}
          />
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs tracking-[0.18em] text-[rgba(233,211,180,0.55)] uppercase">
              You’ll receive a detailed onboarding plan within 48 hours.
            </p>
            <Button type="submit" size="lg" disabled={status === "submitting"}>
              {status === "submitting" ? "Submitting…" : "Submit application"}
            </Button>
          </div>
          {status === "error" ? (
            <p className="rounded-[var(--radius-lg)] border border-red-400/35 bg-red-400/10 px-4 py-3 text-sm text-red-200/90">
              Something went wrong. Please try again or email hello@veloura.com.
            </p>
          ) : null}
        </motion.form>
      </Container>
      <Modal
        open={modalOpen}
        onOpenChange={setModalOpen}
        title="Application received"
        description="Check your inbox for next steps, personalized onboarding, and access to the free mini-class."
      >
        <p className="text-sm text-[rgba(233,211,180,0.72)]">
          We review applications within 48 hours. Meanwhile, explore the curriculum preview and join
          the orientation session using the link we just sent.
        </p>
      </Modal>
    </section>
  );
}


