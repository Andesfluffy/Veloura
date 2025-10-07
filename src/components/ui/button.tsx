"use client";

import { forwardRef } from "react";
import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  MotionProps & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    align?: "left" | "center";
  };

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium uppercase tracking-[0.12em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:ring-[rgba(233,211,180,0.55)]";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "relative overflow-hidden border border-[rgba(233,211,180,0.35)] bg-[radial-gradient(circle_at_20%_20%,rgba(245,227,197,0.92),rgba(200,173,123,0.92))] text-[#111216] shadow-[0_14px_36px_rgba(233,211,180,0.28)] before:absolute before:inset-0 before:bg-[conic-gradient(from_140deg,rgba(255,255,255,0.65),rgba(255,255,255,0)_45%)] before:opacity-0 before:transition-opacity hover:before:opacity-100 hover:-translate-y-[3px] hover:shadow-[0_22px_54px_rgba(233,211,180,0.35)] active:translate-y-[1px]",
  secondary:
    "relative overflow-hidden border border-[rgba(233,211,180,0.32)] bg-[rgba(18,19,24,0.85)] text-[rgba(233,211,180,0.9)] backdrop-blur-xl hover:border-[rgba(233,211,180,0.45)] hover:text-[rgba(233,211,180,0.98)] hover:-translate-y-[2px] hover:shadow-[0_14px_34px_rgba(233,211,180,0.18)] active:translate-y-[1px]",
  ghost:
    "relative overflow-hidden text-[rgba(233,211,180,0.82)] hover:text-[rgba(233,211,180,0.95)] hover:-translate-y-[2px] bg-transparent hover:bg-[rgba(233,211,180,0.08)] backdrop-blur-sm active:translate-y-[1px]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[0.65rem]",
  md: "px-7 py-3 text-[0.7rem]",
  lg: "px-9 py-4 text-[0.78rem]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", align = "center", children, ...props }, ref) => {
    return (
      <motion.button
        whileTap={{ scale: 0.98 }}
        whileHover={{ y: align === "left" ? -2 : -3 }}
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  },
);

Button.displayName = "Button";
