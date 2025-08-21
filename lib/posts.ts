
import { supabase } from "./supabaseClient";

export type PostMeta = {
  title: string;
  date: string; // نملأها من published_at
  excerpt?: string;
  tags?: string[];
  cover?: string;
  slug: string;
  content?: string;
};

// إرجاع أحدث المقالات
export async function listPosts(): Promise<PostMeta[]> {
  const { data, error } = await supabase
    .from("posts")
    .select("slug,title,excerpt,cover,tags,published_at,content")
    .order("published_at", { ascending: false });

  if (error) throw new Error(error.message);

  return (data ?? []).map((row: any) => ({
    title: row.title,
    date: row.published_at ?? new Date().toISOString(),
    excerpt: row.excerpt ?? "",
    tags: Array.isArray(row.tags) ? row.tags : [],
    cover: row.cover ?? "",
    slug: row.slug,
    content: row.content ?? "",
  }));
}

// جميع الوسوم (نجمعها من الصفوف)
export async function getAllTags(): Promise<string[]> {
  const { data, error } = await supabase.from("posts").select("tags");

  if (error) throw new Error(error.message);

  const set = new Set<string>();
  (data ?? []).forEach((r: any) => (r.tags ?? []).forEach((t: string) => set.add(t)));
  return Array.from(set).sort();
}

// جلب مقال واحد وتحويل المحتوى إلى HTML جاهز للعرض
export async function getPostHtml(
  slug: string
): Promise<{ meta: PostMeta | null; html: string }> {
  const { data, error } = await supabase
    .from("posts")
    .select("slug,title,excerpt,cover,tags,published_at,content")
    .eq("slug", slug)
    .limit(1)
    .single();

  if (error && error.code !== "PGRST116") throw new Error(error.message);
  if (!data) return { meta: null, html: "" };

  const meta: PostMeta = {
    title: data.title,
    date: data.published_at ?? new Date().toISOString(),
    excerpt: data.excerpt ?? "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    cover: data.cover ?? "",
    slug: data.slug,
    content: data.content ?? "",
  };

  const html = String(data.content ?? "");
  return { meta, html };
}
