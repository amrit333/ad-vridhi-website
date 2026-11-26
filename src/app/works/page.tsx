import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { REAL_PROJECTS, SITE_INFO } from "@/data/site-data";
import { WebDesignShowcase } from "@/components/WebDesignShowcase";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Portfolio & Concept Works",
  description:
    "Explore verified portfolio projects (Solitaire Infosys, Stitchery by Preet, Daydream Epoxy, Tech Wealth Coach) and clearly labelled conceptual web design showcases by Ad-Vridhi.",
  alternates: { canonical: "/works" },
};

export default function WorksPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: SITE_INFO.siteUrl },
          { name: "Works", item: `${SITE_INFO.siteUrl}/works` },
        ]}
      />

      <section className="bg-gradient-to-b from-[#39208C] via-[#6A52EA] to-[#8B70F5] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
            Portfolio Archive
          </span>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Documented Campaigns &amp; Creative Growth Work.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/85">
            Each case study below reflects documented work from Amritpal Singh&apos;s professional portfolio, separated clearly from our fictional website design concepts below.
          </p>

          <div className="mt-12 space-y-6">
            {REAL_PROJECTS.map((proj, idx) => (
              <article
                key={proj.id}
                id={proj.slug}
                className="grid items-center gap-6 rounded-[28px] border border-white/20 bg-white/10 p-6 backdrop-blur-md lg:grid-cols-12 sm:p-8"
              >
                <div className="lg:col-span-4">
                  <div className={`rounded-2xl bg-gradient-to-br ${proj.gradient} p-6 shadow-lg`}>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-white/80">
                      Project 0{idx + 1} • {proj.period}
                    </div>
                    <div className="mt-2 font-display text-2xl font-extrabold text-white">
                      {proj.client}
                    </div>
                    <div className="mt-4 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white">
                      {proj.metricBadge}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-lavender">
                    {proj.category}
                  </span>
                  <h2 className="mt-1 font-display text-2xl font-extrabold text-white">
                    {proj.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-white/85">
                    {proj.challenge}
                  </p>
                  <ul className="mt-4 space-y-1.5 text-xs text-white/90">
                    {proj.execution.map((step) => (
                      <li key={step}>• {step}</li>
                    ))}
                  </ul>
                  <p className="mt-4 rounded-xl bg-black/20 p-3 text-xs font-semibold text-brand-lavender">
                    {proj.resultNote}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WebDesignShowcase />

      <section className="bg-white py-14 text-center">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="font-display text-2xl font-extrabold text-brand-ink sm:text-3xl">
            Want Results &amp; Design Craft Like This For Your Brand?
          </h2>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-purple to-brand-electric px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-white shadow-soft"
          >
            <span>Start Your Project</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
