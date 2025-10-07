"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

type TooltipProps = {
  content: React.ReactNode;
  children: React.ReactElement;
  className?: string;
  delayDuration?: number;
  side?: TooltipPrimitive.TooltipContentProps["side"];
};

export function Tooltip({
  content,
  children,
  className,
  delayDuration = 100,
  side = "top",
}: TooltipProps) {
  return (
    <TooltipPrimitive.Provider delayDuration={delayDuration}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            align="center"
            sideOffset={8}
            className={cn(
              "data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade z-[140] max-w-xs rounded-[var(--radius-lg)] border border-[rgba(231,214,179,0.35)] bg-[rgba(18,18,20,0.92)] px-3 py-2 text-xs text-[rgba(231,214,179,0.85)] shadow-[var(--shadow-soft)] backdrop-blur-md",
              className,
            )}
          >
            {content}
            <TooltipPrimitive.Arrow className="fill-[rgba(18,18,20,0.92)]" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
