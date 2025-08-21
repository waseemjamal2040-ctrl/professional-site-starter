import { listPosts } from "@/lib/posts";

export default async function HomePage() {
  const posts = (await listPosts()).slice(0, 6);

  return (
    <div className="space-y-10">
      <section className="rounded-2xl border p-8 text-center bg-gradient-to-b from-white to-slate-100">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Welcome to My Website
        </h1>
        <p className="mt-6 text-lg text-slate-600">
          This is a simple article publishing website using Supabase and Next.js
        </p>
      </section>

      <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="rounded-lg border p-4 shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-slate-700">{post.content}</p>
          </article>
        ))}
      </section>
    </div>
  );
}