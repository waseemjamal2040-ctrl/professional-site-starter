import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.siteName}`,
    default: `${siteConfig.siteName} — ${siteConfig.tagline}`
  },
  description: siteConfig.tagline,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: siteConfig.siteName,
    description: siteConfig.tagline,
    type: "website",
    url: "/",
    siteName: siteConfig.siteName
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <Navbar />
          <main className="container flex-1 py-6">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
