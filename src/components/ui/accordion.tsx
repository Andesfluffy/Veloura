"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  id: string;
  title: string;
  description?: string;
  content: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  defaultOpenIds?: string[];
  allowMultiple?: boolean;
  className?: string;
};

export function Accordion({
  items,
  defaultOpenIds = [],
  allowMultiple = false,
  className,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds);

  const handleToggle = (id: string) => {
    setOpenIds((prev) => {
      const isOpen = prev.includes(id);
      if (allowMultiple) {
        return isOpen ? prev.filter((item) => item !== id) : [...prev, id];
      }
      return isOpen ? [] : [id];
    });
  };

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className={cn(
              "overflow-hidden rounded-[var(--radius-xl)] border border-[rgba(233,211,180,0.2)] bg-[rgba(16,17,23,0.72)] backdrop-blur-lg transition-all duration-300",
              isOpen &&
                "border-[rgba(233,211,180,0.35)] shadow-[0_18px_50px_rgba(233,211,180,0.12)]",
            )}
          >
            <button
              type="button"
              onClick={() => handleToggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`${item.id}-content`}
              className="flex w-full items-center justify-between gap-8 px-6 py-5 text-left transition-colors hover:bg-[rgba(233,211,180,0.08)] focus-visible:ring-2 focus-visible:ring-[rgba(233,211,180,0.45)] focus-visible:outline-none"
            >
              <div>
                <p className="text-lg font-semibold tracking-tight text-[rgba(245,227,197,0.92)]">
                  {item.title}
                </p>
                {item.description ? (
                  <p className="mt-1 text-xs tracking-[0.22em] text-[rgba(233,211,180,0.55)] uppercase">
                    {item.description}
                  </p>
                ) : null}
              </div>
              <span
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(233,211,180,0.32)] text-[rgba(233,211,180,0.75)] transition-all duration-300",
                  isOpen
                    ? "rotate-45 bg-[rgba(233,211,180,0.12)]"
                    : "hover:bg-[rgba(233,211,180,0.08)]",
                )}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="content"
                  id={`${item.id}-content`}
                  role="region"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                  className="px-6 pb-6 text-sm leading-relaxed text-[rgba(233,211,180,0.72)]"
                >
                  {item.content}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
