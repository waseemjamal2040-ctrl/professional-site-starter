import Link from "next/link";

export function ArticleCard({ post }: { post: any }) {
  return (
    <Link href={`/articles/${post.slug}`} className="block rounded-2xl border hover:shadow-md transition overflow-hidden">
      {post.cover && <img src={post.cover} alt="" className="w-full h-44 object-cover" />}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{post.title}</h3>
        <p className="text-sm opacity-80 mb-2">{post.excerpt}</p>
        <div className="text-xs opacity-70">{new Date(post.date).toLocaleDateString("ar-EG")}</div>
        <div className="mt-2 flex flex-wrap gap-2">
          {post.tags?.map((t: string) => (
            <span key={t} className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">{t}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
