import { NextResponse } from "next/server";
import { SITE_URL } from "@/lib/constants";

export function GET() {
  const content = ["User-agent: *", "Allow: /", "", `Sitemap: ${SITE_URL}/sitemap.xml`].join("\n");

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
