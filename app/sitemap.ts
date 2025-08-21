import { MetadataRoute } from "next";
import { listPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.SITE_URL || "https://example.com";
  const routes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/articles`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() }
  ];
  const posts = listPosts();
  for (const p of posts) {
    routes.push({ url: `${base}/articles/${p.slug}`, lastModified: new Date(p.date) });
  }
  return routes;
}
