"use client";

import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/og/default.png`,
  sameAs: [
    "https://instagram.com/veloura",
    "https://youtube.com/@veloura",
    "https://www.linkedin.com/company/veloura",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello@veloura.com",
    },
  ],
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-[var(--spacing-lg)]"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <Script id="organization-structured-data" type="application/ld+json">
        {JSON.stringify(organizationJsonLd)}
      </Script>
    </>
  );
}
