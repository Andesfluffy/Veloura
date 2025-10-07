import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StructuredData } from "@/components/layout/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const title = "Veloura — Modern mentorship for calm online revenue";
const description =
  "Veloura helps you design, automate, and scale an online business with mentorship, curriculum, and a global operator community.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  keywords: [
    "digital business mentorship",
    "online business curriculum",
    "remote work education",
    "automation training",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Veloura — Modern mentorship for calm online revenue",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og/default.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="selection:bg-gold-500/20 selection:text-gold-200 relative min-h-screen bg-black">
        {/* Luxury Background Effects */}
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(227,210,173,0.05),transparent_70%)]" />
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(227,210,173,0.05),transparent_50%)]" />
        <div className="bg-noise pointer-events-none fixed inset-0 opacity-[0.015]" />
        <div className="via-gold-500/20 pointer-events-none fixed inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent" />

        {/* Main Content */}
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
        <StructuredData />
      </body>
    </html>
  );
}
