import { blogPosts } from "@/data/blogPosts";
import BlogArticleLayout from "@/components/blog/BlogArticleLayout";
import BlogFAQ from "@/components/blog/BlogFAQ";
import BlogMostViewed from "@/components/blog/BlogMostViewed";
import QuoteForm from "@/components/forms/QuoteForm";
import type { Metadata } from "next";

interface BlogArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article introuvable | IDF Environnement",
      description: "Cet article n'existe pas ou n'est plus disponible.",
    };
  }

  const url = `https://www.idf-environnement.fr/blog/${post.slug}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      type: "article",
      locale: "fr_FR",
    },
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return null;
  }

  return (
    <BlogArticleLayout post={post}>
      {post.sections.map((section) => (
        <section key={section.id} className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            {section.heading}
          </h2>
          <p
            id={section.id}
            className="text-slate-700 leading-relaxed whitespace-pre-line"
          >
            {section.body}
          </p>
        </section>
      ))}

      <BlogFAQ faq={post.faq} />
      <BlogMostViewed currentSlug={post.slug} />
      <section className="mt-12 border-t border-slate-100 pt-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Parlez-nous de votre projet
          </h2>
          <p className="text-slate-600 mb-6 text-sm md:text-base">
            Décrivez votre situation en {post.city} ou dans la région {post.region}, nous vous rappelons pour une étude personnalisée et gratuite.
          </p>
          <QuoteForm />
        </div>
      </section>
    </BlogArticleLayout>
  );
}
