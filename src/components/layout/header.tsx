"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { NAV_ITEMS, CTA_EVENTS } from "@/lib/constants";
import { track } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/logo";
import { Wordmark } from "@/components/brand/wordmark";
import { Container } from "@/components/layout/container";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { cn } from "@/lib/utils";

const HEADER_THRESHOLD = 32;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollRef = useRef(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setIsScrolled(current > HEADER_THRESHOLD);
      if (current <= HEADER_THRESHOLD) {
        setHidden(false);
      } else {
        setHidden(current > lastScrollRef.current && current > 200);
      }
      lastScrollRef.current = current;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{ y: hidden && !reduceMotion ? -120 : 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500",
        isScrolled
          ? "border-[rgba(233,211,180,0.16)] bg-[rgba(10,11,15,0.82)] shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-[var(--header-height)] items-center justify-between gap-6">
        <Link
          href="/"
          className="group flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-[rgba(233,211,180,0.45)] focus-visible:outline-none"
        >
          <Logo className="h-10 w-10 transition-transform duration-300 group-hover:scale-[1.04]" />
          <Wordmark className="text-sm tracking-[0.5em] text-[rgba(233,211,180,0.78)] uppercase transition-colors duration-300 group-hover:text-[rgba(233,211,180,0.95)]" />
        </Link>
        <nav className="hidden items-center gap-8 text-[0.72rem] font-semibold tracking-[0.34em] text-[rgba(233,211,180,0.65)] uppercase lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-2 transition-colors duration-300 hover:text-[rgba(233,211,180,0.92)] focus-visible:ring-2 focus-visible:ring-[rgba(233,211,180,0.45)] focus-visible:outline-none"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="pointer-events-none absolute inset-x-0 -bottom-[6px] h-px origin-left scale-x-0 bg-gradient-to-r from-[rgba(233,211,180,0)] via-[rgba(233,211,180,0.6)] to-[rgba(233,211,180,0)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button
            variant="primary"
            size="sm"
            onClick={() => track(CTA_EVENTS.heroPrimary, { from: "header" })}
            className="shadow-[0_12px_36px_rgba(233,211,180,0.22)] hover:shadow-[0_18px_46px_rgba(233,211,180,0.28)]"
          >
            Apply Now
          </Button>
        </div>
        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </Container>
    </motion.header>
  );
}
