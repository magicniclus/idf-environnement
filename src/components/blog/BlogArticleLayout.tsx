import BlogLayout from "./BlogLayout";
import type { BlogPost } from "@/data/blogPosts";
import QuoteForm from "@/components/forms/QuoteForm";
import Link from "next/link";
import Image from "next/image";

export default function BlogArticleLayout({
  post,
  children,
}: {
  post: BlogPost;
  children: React.ReactNode;
}) {
  return (
    <BlogLayout>
      <div className="relative h-[200px] w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <section className="max-w-6xl mx-auto px-4 pt-5 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-12 border border-slate-100 space-y-8 md:space-y-10">
          <nav className="text-xs md:text-sm text-slate-500 mb-4" aria-label="Fil d'Ariane">
            <ol className="flex flex-wrap items-center gap-1">
              <li>
                <Link href="/" className="hover:text-slate-900">
                  Accueil
                </Link>
              </li>
              <li className="mx-1">/</li>
              <li>
                <Link href="/blog" className="hover:text-slate-900">
                  Blog
                </Link>
              </li>
              <li className="mx-1">/</li>
              <li className="text-slate-700 font-medium truncate max-w-[180px] md:max-w-xs">
                {post.title}
              </li>
            </ol>
          </nav>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wide text-yellow-600 font-semibold">
                {post.city} • {post.region}
              </p>
              <p className="text-sm text-slate-500">
                Publié le {new Date(post.publishedAt).toLocaleDateString("fr-FR")} • {post.readingTimeMinutes} min de lecture
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-700"
                >
                  #{tag.replace(/_/g, "-")}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-[minmax(0,2.3fr)_minmax(0,1fr)] gap-10 md:gap-14 items-start">
            <div>
              <header className="mb-6 md:mb-8">
                <h1 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2 md:mb-3">
                  {post.title}
                </h1>
                <p className="text-slate-600 text-sm md:text-base max-w-3xl">
                  {post.subtitle}
                </p>
              </header>

              <article className="prose prose-slate max-w-none">
                {children}
              </article>
            </div>

            <aside className="space-y-6 md:space-y-8">
              {post.sections && post.sections.length > 0 && (
                <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-4 md:p-5">
                  <h2 className="text-sm font-semibold text-slate-900 mb-3">
                    Sommaire de l'article
                  </h2>
                  <ul className="space-y-1 text-sm list-disc pl-5 marker:text-yellow-500">
                    {post.sections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="text-slate-600 hover:text-yellow-600 hover:underline"
                        >
                          {section.heading}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 md:p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900 mb-1">
                  Obtenez une étude gratuite
                </h2>
                <p className="text-sm text-slate-600 mb-4">
                  Profitez des aides disponibles pour vos travaux en {post.city} et dans toute la région {post.region}.
                </p>
                <QuoteForm />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </BlogLayout>
  );
}
