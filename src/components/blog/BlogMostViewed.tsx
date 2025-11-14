import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

interface BlogMostViewedProps {
  currentSlug: string;
}

export default function BlogMostViewed({ currentSlug }: BlogMostViewedProps) {
  const mostViewed = blogPosts
    .filter((post) => post.slug !== currentSlug)
    .sort((a, b) => b.views - a.views)
    .slice(0, 3);

  if (mostViewed.length === 0) return null;

  return (
    <section className="mt-12 border-t border-slate-100 pt-10">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
        Nos articles les plus consultés
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {mostViewed.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block bg-slate-50 hover:bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all"
          >
            <p className="text-xs uppercase tracking-wide text-yellow-600 font-semibold mb-2">
              {post.city} • {post.region}
            </p>
            <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-2 group-hover:text-yellow-600">
              {post.title}
            </h3>
            <p className="text-sm text-slate-600 line-clamp-3 mb-3">
              {post.excerpt}
            </p>
            <p className="text-xs text-slate-500">
              {post.views} lectures estimées
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}