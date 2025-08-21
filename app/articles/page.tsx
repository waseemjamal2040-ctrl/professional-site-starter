import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";

type Post = {
  id: number;
  title: string;
  excerpt: string | null;
  cover: string | null;
  slug: string | null;
  published_at: string | null;
  created_at: string | null;
};

const PROJECT_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;

function toPublicUrl(cover: string | null): string | null {
  if (!cover) return null;
  if (cover.startsWith("http://") || cover.startsWith("https://")) return cover;
  return `${PROJECT_URL}/storage/v1/object/public/images/${cover}`;
}

async function getPosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from("posts")
    .select("id, title, excerpt, cover, slug, published_at, created_at")
    .order("published_at", { ascending: false, nullsFirst: false })
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase error:", error.message);
    return [];
  }
  return Array.isArray(data) ? data : [];
}

export default async function ArticlesPage() {
  const posts = await getPosts();

  return (
    <main style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Articles</h1>

      {posts.length === 0 ? (
        <p>لا يوجد مقالات حالياً.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
          }}
        >
          {posts.map((post) => {
            const coverUrl = toPublicUrl(post.cover);
            return (
              <article
                key={post.id}
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 12,
                  padding: "1rem",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "16 / 9",
                    overflow: "hidden",
                    borderRadius: 8,
                    background: "#f3f4f6",
                  }}
                >
                  {coverUrl ? (
                    <Image
                      src={coverUrl}
                      alt={post.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={false}
                    />
                  ) : (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 14,
                        color: "#6b7280",
                      }}
                    >
                      لا توجد صورة
                    </div>
                  )}
                </div>

                <h3 style={{ marginTop: 12, marginBottom: 6 }}>{post.title}</h3>
                {post.excerpt && (
                  <p style={{ color: "#4b5563" }}>{post.excerpt}</p>
                )}
              </article>
            );
          })}
        </div>
      )}
    </main>
  );
}