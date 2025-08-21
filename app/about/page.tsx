import { siteConfig } from "@/site.config";

export const revalidate = 0;

export default function AboutPage() {
  return (
    <section className="prose mx-auto">
      <h1>من نحن</h1>
      <p>
        {siteConfig.siteName} — {siteConfig.tagline}. هذا الموقع مُصمَّم ليكون بسيطًا، سريعًا، وسهل الإدارة
        عبر تحرير ملفات Markdown فقط دون الحاجة إلى خبرة برمجية.
      </p>
    </section>
  );
}
