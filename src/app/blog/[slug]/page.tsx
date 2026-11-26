import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BLOG_POSTS, SITE_INFO } from "@/data/site-data";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: SITE_INFO.siteUrl },
          { name: "Blog", item: `${SITE_INFO.siteUrl}/blog` },
          { name: post.title, item: `${SITE_INFO.siteUrl}/blog/${post.slug}` },
        ]}
      />

      <article className="bg-gradient-to-b from-brand-lavender/35 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-deep hover:text-brand-purple"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Growth Playbooks</span>
          </Link>

          <div className="mt-6 flex items-center gap-3 text-xs font-bold text-brand-purple">
            <span>{post.category}</span>
            <span>•</span>
            <span className="text-brand-muted">{post.readTime}</span>
          </div>

          <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            {post.excerpt}
          </p>

          <div className="mt-10 space-y-8 rounded-[28px] border border-brand-lavender bg-white p-7 shadow-soft sm:p-10">
            {post.sections.map((sec) => (
              <section key={sec.heading}>
                <h2 className="font-display text-xl font-extrabold text-brand-ink">
                  {sec.heading}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-brand-muted sm:text-base">
                  {sec.body}
                </p>
              </section>
            ))}

            <div className="border-t border-slate-100 pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-purple to-brand-electric px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white"
              >
                <span>Discuss This Strategy With Ad-Vridhi</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
