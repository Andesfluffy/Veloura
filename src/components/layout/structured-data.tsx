import { SITE_NAME, SITE_URL } from "@/lib/constants";

export function StructuredData() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": SITE_URL,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/og/default.png`,
    sameAs: ["https://twitter.com/veloura", "https://linkedin.com/company/veloura"],
    description: "Modern mentorship for calm online revenue",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
