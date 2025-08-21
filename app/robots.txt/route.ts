import { NextResponse } from "next/server";

export function GET() {
  const base = process.env.SITE_URL || "https://example.com";
  return new NextResponse(`User-agent: *
Allow: /

Sitemap: ${base}/sitemap.xml
`, {
    headers: { "Content-Type": "text/plain" }
  });
}
