import { siteConfig } from "@/site.config";

export const revalidate = 0;

export default function ContactPage() {
  return (
    <section className="prose mx-auto">
      <h1>تواصل معنا</h1>
      <p>راسلنا على البريد: <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a></p>
    </section>
  );
}
