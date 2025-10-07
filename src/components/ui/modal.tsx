"use client";

import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function Modal({ open, onOpenChange, title, description, children }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const close = useCallback(() => onOpenChange(false), [onOpenChange]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };
    if (open) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  if (typeof document === "undefined") {
    return null;
  }

  const modalContent = (
    <AnimatePresence>
      {open ? (
        <motion.div
          ref={overlayRef}
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[rgba(7,7,8,0.85)] backdrop-blur-sm"
          onClick={(event) => {
            if (event.target === overlayRef.current) {
              close();
            }
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby={description ? "modal-description" : undefined}
            initial={{ y: 24, opacity: 0.8, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 24, opacity: 0.6, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "grain-overlay relative max-w-lg rounded-[var(--radius-2xl)] border border-[rgba(231,214,179,0.25)] bg-[rgba(12,12,13,0.92)] p-8 text-left shadow-[var(--shadow-elevated)]",
            )}
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-5 right-5 text-[rgba(231,214,179,0.6)] transition-colors hover:text-[rgba(231,214,179,0.9)] focus-visible:ring-2 focus-visible:ring-[rgba(231,214,179,0.35)] focus-visible:outline-none"
              aria-label="Close modal"
            >
              ✕
            </button>
            <div className="space-y-3">
              <h3 id="modal-title" className="text-2xl font-semibold text-[rgba(231,214,179,0.95)]">
                {title}
              </h3>
              {description ? (
                <p id="modal-description" className="text-sm text-[rgba(231,214,179,0.75)]">
                  {description}
                </p>
              ) : null}
              <div>{children}</div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
