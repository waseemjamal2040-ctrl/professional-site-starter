import { getPostHtml } from "@/lib/posts";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

export const revalidate = 0;

export default async function ArticlePage({ params: { slug } }: Props) {
  const { meta, html } = await getPostHtml(slug);
  if (!meta) return notFound();
  return (
    <article className="prose mx-auto">
      <h1>{meta.title}</h1>
      <p className="text-sm opacity-70">
        {new Date(meta.date).toLocaleDateString("ar-EG")} — {(meta.tags ?? []).join(" • ")}
      </p>
      {meta.cover && <img src={meta.cover} alt="" />}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
