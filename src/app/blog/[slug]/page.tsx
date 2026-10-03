import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/constants";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage(
  props: PageProps<"/blog/[slug]">
) {
  const { slug } = await props.params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Simple markdown-like rendering: split by ## for headings, paragraphs by double newline
  const renderContent = (content: string) => {
    const blocks = content.split("\n\n");
    return blocks.map((block, index) => {
      const trimmed = block.trim();
      if (!trimmed) return null;

      if (trimmed.startsWith("## ")) {
        return (
          <h2 key={index}>{trimmed.replace("## ", "")}</h2>
        );
      }

      // Handle bold text with **
      const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
      const rendered = parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        // Handle italic with *
        const italicParts = part.split(/(\*[^*]+\*)/g);
        return italicParts.map((ip, j) => {
          if (ip.startsWith("*") && ip.endsWith("*")) {
            return <em key={`${i}-${j}`}>{ip.slice(1, -1)}</em>;
          }
          return ip;
        });
      });

      return <p key={index}>{rendered}</p>;
    });
  };

  return (
    <section className="py-24 md:py-32">
      <div className="container-site">
        <div className="max-w-2xl mx-auto">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-stone-400 hover:text-stone-600 transition-colors mb-8"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-6">
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
            <span className="text-xs text-stone-400">{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-semibold text-stone-900 leading-tight tracking-tight mb-4">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg text-stone-500 leading-relaxed mb-10">
            {post.excerpt}
          </p>

          {/* Divider */}
          <div className="section-divider mb-10" />

          {/* Content */}
          <div className="prose-meleph">{renderContent(post.content)}</div>

          {/* Bottom nav */}
          <div className="mt-16 pt-8 border-t border-stone-200">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-900 hover:text-amber-700 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              All Articles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
