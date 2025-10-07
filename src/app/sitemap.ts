import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const routes = [
  "/",
  "/how-it-works",
  "/curriculum",
  "/mentorship",
  "/community",
  "/success-stories",
  "/pricing",
  "/faq",
  "/apply",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.6,
  }));
}
