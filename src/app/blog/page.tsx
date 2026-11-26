import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { BLOG_POSTS, SITE_INFO } from "@/data/site-data";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Digital Growth, SEO & Automation Blog",
  description:
    "Playbooks on ManyChat Instagram funnels, Meta Ads A/B testing, and technical SEO crawl recovery by Ad-Vridhi.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: SITE_INFO.siteUrl },
          { name: "Blog", item: `${SITE_INFO.siteUrl}/blog` },
        ]}
      />

      <section className="bg-gradient-to-b from-brand-lavender/45 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-deep shadow-xs">
              Ad-Vridhi Insights
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-brand-ink sm:text-5xl">
              Practical Playbooks On Performance, Automation &amp; SEO.
            </h1>
            <p className="mt-4 text-base text-brand-muted">
              Actionable notes distilled directly from real Meta Ads, ManyChat DM funnels, and technical Search Console execution.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col justify-between rounded-[28px] border border-brand-lavender bg-white p-7 shadow-soft transition hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-brand-purple">
                    <span>{post.category}</span>
                    <span className="inline-flex items-center gap-1 text-brand-muted">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-xl font-extrabold leading-snug text-brand-ink">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-brand-deep hover:text-brand-purple"
                  >
                    <span>Read Playbook</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
