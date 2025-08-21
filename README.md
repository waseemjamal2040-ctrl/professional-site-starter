# Professional Site Starter (Next.js 14 + Tailwind + Markdown)

Ready-to-deploy site for articles/blog with Arabic-friendly defaults, dark/light mode,
and SEO basics. Non-coders can manage content by editing Markdown files on GitHub.
Deploy easily to Vercel.

## Quick Start (Non-Programmer Friendly)

1. **Create a GitHub repo** and upload all files of this folder.
2. Go to **vercel.com → Add New Project → Import GitHub Repo**.
3. Keep defaults and click **Deploy**. After build finishes, your site is live.
4. To add a new article:
   - In GitHub, open the `content/posts` folder.
   - Click **Add file → Create new file**.
   - Name it like `my-first-post.md` and paste the template below (update title/date/tags/content).
   - Commit changes. Vercel rebuilds automatically; updates appear within ~1–2 minutes.

### Markdown Frontmatter Template
```
---
title: "عنوان المقال"
date: "2025-08-19"
excerpt: "ملخص قصير للمقال يظهر في البطاقات ومحركات البحث."
tags: ["تسويق", "تعليم"]
cover: "/images/sample-cover.jpg"
---

اكتب محتوى المقال هنا. يمكنك استخدام **تنسيقات** مثل العناوين والقوائم والروابط.
```

## Customize Brand
- Edit `site.config.ts` for `siteName`, `tagline`, `contactEmail`, social links, and colors.
- Replace `public/logo.svg` with your logo (same filename).

## Pages
- `/` الرئيسية + أحدث المقالات
- `/articles` كل المقالات مع فلترة بالوسوم
- `/articles/[slug]` صفحة المقال
- `/about` من نحن
- `/contact` تواصل معنا

## Notes
- Content is built from Markdown files in `content/posts` (Git-based CMS via GitHub UI).
- For instant updates without rebuild or to use a traditional CMS, you can later switch to a headless CMS. For now, this starter is optimized for simplicity and reliability.
- Caching issues are minimized by static generation per deployment (no stale CDN cache).

## Development (optional)
- `npm install`
- `npm run dev`

License: MIT
