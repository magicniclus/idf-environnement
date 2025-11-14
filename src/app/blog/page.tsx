import BlogLayout from "@/components/blog/BlogLayout";
import { blogPosts } from "@/data/blogPosts";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  const featured = blogPosts.filter((post) => post.isFeatured);
  const others = blogPosts.filter((post) => !post.isFeatured);

  return (
    <BlogLayout>
      <section className="max-w-6xl mx-auto px-4 pt-10 md:pt-14">
        <header className="mb-10 md:mb-14 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Actualités et conseils travaux et isolation thermique par l'exterieur
          </h1>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Articles pratiques pour mieux comprendre l'isolation, la rénovation énergétique
            et les aides disponibles pour vos travaux en IDF et partout en France.
          </p>
        </header>

        {featured.length > 0 && (
          <section className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
              A la une
            </h2>
            <div className="grid md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)] gap-8 items-stretch">
              {featured.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col md:flex-row"
                >
                  <div className="relative w-full md:w-1/2 h-56 md:h-auto">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 md:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-yellow-600 font-semibold mb-2">
                        Article à la une
                      </p>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-yellow-600">
                        {post.title}
                      </h3>
                      <p className="text-sm md:text-base text-slate-600 mb-3 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                      <span>
                        {post.city} {post.region}
                      </span>
                      <span>
                        {post.readingTimeMinutes} min de lecture
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
            Tous nos articles
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 flex flex-col"
              >
                <div className="relative w-full h-40">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <p className="text-xs uppercase tracking-wide text-yellow-600 font-semibold mb-1">
                    {post.city}, {post.region}
                  </p>
                  <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-1 group-hover:text-yellow-600">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-3 mb-3">
                    {post.excerpt}
                  </p>
 <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                      <span>
                        {post.city} {post.region}
                      </span>
                      <span>
                        {post.readingTimeMinutes} min de lecture
                      </span>
                    </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </BlogLayout>
  );
}
