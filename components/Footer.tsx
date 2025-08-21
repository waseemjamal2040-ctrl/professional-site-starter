import { siteConfig } from "@/site.config";

export default function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="container py-6 text-sm flex flex-col md:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} {siteConfig.siteName}. جميع الحقوق محفوظة.</p>
        <p>
          للتواصل: <a className="underline" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
        </p>
      </div>
    </footer>
  );
}
