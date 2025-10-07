"use client";

import { useMemo } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: React.ReactNode[];
  className?: string;
  speed?: "slow" | "normal" | "fast";
};

const speedMap: Record<NonNullable<MarqueeProps["speed"]>, string> = {
  slow: "animate-[ticker_28s_linear_infinite]",
  normal: "animate-[ticker_20s_linear_infinite]",
  fast: "animate-[ticker_14s_linear_infinite]",
};

export function Marquee({ items, className, speed = "normal" }: MarqueeProps) {
  const reducedMotion = useReducedMotion();
  const list = useMemo(() => [...items, ...items], [items]);

  if (reducedMotion) {
    return (
      <div
        className={cn(
          "flex flex-wrap items-center justify-center gap-x-8 gap-y-4 rounded-full border border-[rgba(231,214,179,0.18)] bg-[rgba(15,15,16,0.55)] px-6 py-4 text-xs tracking-[0.28em] text-[rgba(231,214,179,0.55)] uppercase",
          className,
        )}
      >
        {items}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grain-overlay relative overflow-hidden rounded-full border border-[rgba(231,214,179,0.18)] bg-[rgba(15,15,16,0.55)] py-4",
        className,
      )}
    >
      <div
        className={cn(
          "flex min-w-full items-center gap-10 text-xs tracking-[0.3em] whitespace-nowrap text-[rgba(231,214,179,0.55)] uppercase",
          speedMap[speed],
        )}
      >
        {list.map((item, index) => (
          <span key={index} className="flex items-center gap-3">
            <span className="h-px w-8 bg-[rgba(231,214,179,0.35)]" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
