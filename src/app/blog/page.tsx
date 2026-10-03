import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BLOG_POSTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on AI systems, digital product design, data engineering, and building technology that works in the real world.",
};

export default function BlogPage() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-site">
        <SectionHeading
          label="Blog"
          title="Insights from the field"
          description="Practical perspectives on building AI systems, digital products, and the engineering practices that make them work."
        />

        <div className="max-w-3xl mx-auto space-y-8">
          {BLOG_POSTS.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block animate-fade-in-up opacity-0"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <article className="group bg-white border border-stone-200 rounded-2xl p-8 card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex px-2.5 py-0.5 text-xs font-medium rounded-full bg-amber-50 text-amber-700 border border-amber-200/60">
                    {post.category}
                  </span>
                  <span className="text-xs text-stone-400">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="text-xs text-stone-400">·</span>
                  <span className="text-xs text-stone-400">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-stone-900 mb-2 group-hover:text-amber-700 transition-colors">
                  {post.title}
                </h2>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-stone-900 group-hover:text-amber-700 transition-colors">
                  Read article
                  <svg
                    className="w-4 h-4 transition-transform duration-250 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
