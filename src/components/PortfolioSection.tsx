"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { HISTORICAL_ACHIEVEMENTS, REAL_PROJECTS } from "@/data/site-data";

export function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? REAL_PROJECTS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === REAL_PROJECTS.length - 1 ? 0 : prev + 1));
  };

  const featured = REAL_PROJECTS[activeIndex];

  return (
    <section
      id="works"
      className="relative overflow-hidden bg-gradient-to-br from-[#8B70F5] via-[#6A52EA] to-[#39208C] py-20 text-white sm:py-28"
    >
      {/* Subtle Ambient Shapes */}
      <div
        className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-brand-pink/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-12 h-80 w-80 rounded-full bg-brand-cyan/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading + Arrow Controls */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-lavender backdrop-blur-sm">
              Portfolio &amp; Historical Performance
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
              Experience Performance.
            </h2>
            <p className="mt-3 text-lg font-medium text-white/85">
              Creative Ideas. Beautiful Execution. Measurable Impact.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous portfolio project"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-brand-deep"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next portfolio project"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-brand-deep"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Verified Historical Achievements Strip */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HISTORICAL_ACHIEVEMENTS.map((item) => (
            <div
              key={item.metric}
              className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md"
            >
              <div className="font-display text-2xl font-extrabold text-white">
                {item.metric}
              </div>
              <div className="mt-1 text-sm font-semibold text-brand-lavender">
                {item.context}
              </div>
              <div className="mt-1.5 text-xs text-white/75">{item.source}</div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-white/75">
          * Metrics above document verified historical campaign results from founder Amritpal Singh&apos;s professional experience and are not guarantees of future client outcomes.
        </p>

        {/* Featured Two-Column Overlapping Case Study Showcase */}
        <div className="mt-12 grid items-center gap-8 lg:grid-cols-12">
          <div className="relative overflow-hidden rounded-[32px] bg-white/15 p-5 backdrop-blur-md lg:col-span-7">
            <div
              className={`flex min-h-[300px] flex-col justify-between rounded-[24px] bg-gradient-to-br ${featured.gradient} p-7 shadow-xl sm:min-h-[340px]`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  {featured.category}
                </span>
                <span className="rounded-full bg-black/25 px-3.5 py-1 text-xs font-semibold text-white">
                  {featured.period}
                </span>
              </div>

              <div className="my-6">
                <div className="text-xs font-bold uppercase tracking-widest text-white/80">
                  Portfolio Reference
                </div>
                <div className="mt-1 font-display text-2xl font-extrabold text-white sm:text-3xl">
                  {featured.client}
                </div>
              </div>

              <div className="rounded-2xl border border-white/25 bg-white/15 p-4 backdrop-blur-sm">
                <div className="text-xs font-semibold uppercase tracking-wider text-white/80">
                  Documented Milestone
                </div>
                <div className="mt-1 font-display text-xl font-extrabold text-white">
                  {featured.metricBadge}
                </div>
              </div>
            </div>
          </div>

          {/* Overlapping White Translucent Card */}
          <div className="glass-panel-purple rounded-[30px] p-7 text-brand-ink lg:-ml-16 lg:col-span-5 lg:p-9">
            <span className="inline-block rounded-full bg-brand-lavender px-3 py-1 text-xs font-bold text-brand-deep">
              Project 0{activeIndex + 1} / 0{REAL_PROJECTS.length}
            </span>
            <h3 className="mt-4 font-display text-2xl font-extrabold leading-snug text-brand-ink">
              {featured.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted">
              {featured.summary}
            </p>
            <ul className="mt-5 space-y-2 text-xs font-medium text-brand-ink">
              {featured.execution.map((step) => (
                <li key={step} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-purple" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-xl bg-brand-lavender/60 p-3 text-xs font-semibold text-brand-deep">
              {featured.resultNote}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href={`/works#${featured.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-purple to-brand-electric px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:opacity-95"
              >
                <span>View Project</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/works"
                className="text-xs font-bold uppercase tracking-wider text-brand-deep hover:underline"
              >
                View All Works &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Selector Pills for All 5 Real Projects */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {REAL_PROJECTS.map((proj, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={proj.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`rounded-2xl border p-4 text-left transition-all ${
                  isActive
                    ? "border-white bg-white text-brand-ink shadow-lg"
                    : "border-white/25 bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <div
                  className={`text-[10px] font-bold uppercase tracking-wider ${
                    isActive ? "text-brand-purple" : "text-brand-lavender"
                  }`}
                >
                  Project 0{idx + 1}
                </div>
                <div className="mt-1 font-display text-sm font-bold leading-snug">
                  {proj.title}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
