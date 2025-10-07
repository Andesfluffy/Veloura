"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { NAV_ITEMS, CTA_EVENTS } from "@/lib/constants";
import { track } from "@/lib/analytics";
import { Button } from "@/components/ui/button";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        className="border-gold-500/20 bg-dark-900/90 text-gold-400 hover:border-gold-500/30 hover:text-gold-300 focus:ring-gold-500/20 relative flex h-14 w-14 items-center justify-center rounded-full border-2 shadow-[0_4px_12px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all duration-300 focus:ring-2 focus:outline-none"
      >
        <span className="sr-only">Toggle navigation</span>
        <div className="grid h-5 w-5 place-items-center">
          <div
            className="relative h-[2px] w-5 bg-current before:absolute before:h-[2px] before:w-5 before:bg-current before:transition-all before:duration-300 after:absolute after:h-[2px] after:w-5 after:bg-current after:transition-all after:duration-300"
            style={open ? { background: "transparent", transform: "rotate(45deg)" } : undefined}
            aria-hidden="true"
          >
            <span
              className="absolute block h-[2px] w-5 bg-current transition-all duration-300"
              style={
                open
                  ? { transform: "rotate(-90deg)", opacity: 0 }
                  : { transform: "translateY(-6px)" }
              }
            />
            <span
              className="absolute block h-[2px] w-5 bg-current transition-all duration-300"
              style={
                open ? { transform: "rotate(90deg)", opacity: 0 } : { transform: "translateY(6px)" }
              }
            />
          </div>
        </div>
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            id="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="bg-dark-900/95 fixed inset-0 z-40 backdrop-blur-2xl"
          >
            <div className="flex h-full flex-col justify-between px-6 py-16">
              <div className="space-y-10">
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: reduceMotion ? 0 : index * 0.08,
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      className="group text-gold-300/90 hover:text-gold-200 relative block overflow-hidden py-2 text-2xl font-medium tracking-[0.32em] transition-colors duration-300"
                      onClick={() => setOpen(false)}
                    >
                      <span className="relative z-10">{item.label}</span>
                      <span className="from-gold-500/60 via-gold-400/60 to-gold-500/60 absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="space-y-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: reduceMotion ? 0 : 0.4, duration: 0.5 }}
              >
                <Button
                  className="w-full text-base"
                  onClick={() => {
                    track(CTA_EVENTS.heroPrimary, { from: "mobile_menu" });
                    setOpen(false);
                  }}
                >
                  Start Mini-Class
                </Button>
                <Button
                  variant="secondary"
                  className="w-full text-base"
                  onClick={() => setOpen(false)}
                >
                  Explore How It Works
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
