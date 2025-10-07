import type { Metadata } from "next";
import { StructuredData } from "@/components/layout/structured-data";
import { HeroSection } from "@/components/sections/hero";
import { CoreStrategy } from "@/components/sections/core-strategy";
import { MarketingGoals } from "@/components/sections/marketing-goals";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { ProcessSteps } from "@/components/sections/process-steps";
import { CurriculumOverview } from "@/components/sections/curriculum-overview";
import { MentorshipShowcase } from "@/components/sections/mentorship-showcase";
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel";
import { PricingTable } from "@/components/sections/pricing-table";
import { FAQBlock } from "@/components/sections/faq-block";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Build a real online business with modern mentorship",
  description:
    "Veloura blends mentorship, modern digital skills, and automation so you can operate a calm, profitable online business without the hype.",
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://veloura.com/",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <StructuredData id="home-breadcrumbs" data={breadcrumbLd} />
      <div>
        <HeroSection />
      </div>
    </>
  );
}
