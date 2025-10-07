export const SITE_NAME = "Veloura";
export const SITE_URL = "https://veloura.com";
export const CONTACT_EMAIL = "hello@veloura.com";

export const NAV_ITEMS = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Curriculum", href: "/curriculum" },
  { label: "Mentorship", href: "/mentorship" },
  { label: "Community", href: "/community" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
];

export const FOOTER_LEGAL = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Cookies", href: "/cookies" },
];

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/veloura", handle: "@veloura" },
  { label: "YouTube", href: "https://youtube.com/@veloura", handle: "@veloura" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/veloura" },
];

export const CTA_EVENTS = {
  heroPrimary: "cta_hero_primary",
  heroSecondary: "cta_hero_secondary",
  pricingPlan: "cta_pricing_plan",
  leadSubmit: "lead_form_submit",
} as const;

export const COUNTRY_OPTIONS = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "New Zealand",
  "Germany",
  "Singapore",
  "Philippines",
  "United Arab Emirates",
  "Other",
] as const;

export const AVAILABILITY_OPTIONS = [
  "5-7 hours weekly",
  "8-12 hours weekly",
  "12-20 hours weekly",
  "20+ hours weekly",
] as const;
