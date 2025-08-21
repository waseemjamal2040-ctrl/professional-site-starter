import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { siteConfig } from "@/site.config";

export default function Navbar() {
  return (
    <header className="border-b sticky top-0 z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur">
      <nav className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="logo" className="h-7 w-7"/>
          <span className="font-semibold">{siteConfig.siteName}</span>
        </Link>
        <div className="flex items-center gap-4">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm hover:underline">
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
