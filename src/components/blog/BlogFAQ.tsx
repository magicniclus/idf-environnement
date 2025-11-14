import type { BlogPostFAQItem } from "@/data/blogPosts";

export default function BlogFAQ({ faq }: { faq: BlogPostFAQItem[] }) {
  if (!faq || faq.length === 0) return null;

  return (
    <section className="mt-12 border-t border-slate-100 pt-10">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
        Questions fréquentes sur ce type de travaux
      </h2>
      <div className="space-y-4">
        {faq.map((item, index) => (
          <details
            key={index}
            className="group border border-slate-200 rounded-xl px-4 py-3 bg-slate-50/70"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <span className="font-semibold text-slate-900">
                {item.question}
              </span>
              <span className="text-yellow-500 group-open:rotate-45 transition-transform text-xl leading-none">
                +
              </span>
            </summary>
            <p className="mt-3 text-slate-600 text-sm md:text-base">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
