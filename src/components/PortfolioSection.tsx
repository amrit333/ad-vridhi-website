"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, X } from "lucide-react";
import { HISTORICAL_ACHIEVEMENTS, REAL_PROJECTS, RealProjectItem } from "@/data/site-data";

function AnimatedCounterText({ raw }: { raw: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(raw);

  useEffect(() => {
    const match = raw.match(/^([^0-9]*)([0-9,]+)(.*)$/);
    if (!match) return;
    const [, prefix, numStr, suffix] = match;
    const target = Number(numStr.replace(/,/g, ""));
    const hasComma = numStr.includes(",");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !target) return;

    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const start = performance.now();
        const dur = 1100;
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          const val = Math.round(eased * target);
          setDisplay(`${prefix}${hasComma ? val.toLocaleString("en-IN") : val}${suffix}`);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [raw]);

  return <span ref={ref}>{display}</span>;
}

export function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalProject, setModalProject] = useState<RealProjectItem | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalProject(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const prevSlide = () =>
    setActiveIndex((prev) => (prev === 0 ? REAL_PROJECTS.length - 1 : prev - 1));
  const nextSlide = () =>
    setActiveIndex((prev) => (prev === REAL_PROJECTS.length - 1 ? 0 : prev + 1));

  const featured = REAL_PROJECTS[activeIndex];

  return (
    <section
      id="works"
      className="relative overflow-hidden bg-gradient-to-br from-[#8B70F5] via-[#6A52EA] to-[#39208C] py-20 text-white sm:py-28"
    >
      <div
        data-gsap-parallax="-30"
        className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-brand-pink/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        data-gsap-parallax="32"
        className="pointer-events-none absolute -right-24 bottom-12 h-80 w-80 rounded-full bg-brand-cyan/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading + Rotating Circular Arrow Controls */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div data-gsap-reveal className="max-w-2xl">
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
              className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition duration-300 hover:-rotate-12 hover:bg-white hover:text-brand-deep"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next portfolio project"
              className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition duration-300 hover:rotate-12 hover:bg-white hover:text-brand-deep"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Animated Historical Metrics + Progressive Bar/Graph Visualization */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HISTORICAL_ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={item.metric}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md"
            >
              <div className="flex items-baseline justify-between gap-2">
                <div className="font-display text-2xl font-extrabold text-white">
                  <AnimatedCounterText raw={item.metric} />
                </div>
                {/* Animated Progress Spark Bar */}
                <div className="flex h-6 items-end gap-1" aria-hidden="true">
                  {[45, 70, 95].map((h, barIdx) => (
                    <motion.span
                      key={h}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: 0.2 + barIdx * 0.1 }}
                      style={{ height: `${h}%` }}
                      className="w-1.5 origin-bottom rounded-full bg-brand-cyan/80"
                    />
                  ))}
                </div>
              </div>
              <div className="mt-1 text-sm font-semibold text-brand-lavender">
                {item.context}
              </div>
              <div className="mt-1.5 text-xs text-white/75">{item.source}</div>
            </motion.div>
          ))}
        </div>

        <p className="mt-4 text-xs text-white/75">
          * Metrics above document verified historical campaign results from founder Amritpal Singh&apos;s professional experience and are not guarantees of future client outcomes.
        </p>

        {/* Cinematic Two-Column Case Study Reveal + Overlapping Card */}
        <div className="mt-12 grid items-center gap-8 lg:grid-cols-12">
          <motion.div
            key={featured.id}
            initial={{ opacity: 0, clipPath: "inset(0 8% 0 8% round 32px)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0% 0 0% round 32px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onClick={() => setModalProject(featured)}
            data-cursor="project"
            className="group relative cursor-pointer overflow-hidden rounded-[32px] bg-white/15 p-5 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 lg:col-span-7"
          >
            <div
              className={`flex min-h-[320px] flex-col justify-between rounded-[24px] bg-gradient-to-br ${featured.gradient} p-7 shadow-xl transition-transform duration-500 group-hover:scale-[1.015] sm:min-h-[360px]`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  {featured.category}
                </span>
                <span className="rounded-full bg-black/25 px-3.5 py-1 text-xs font-semibold text-white">
                  {featured.period}
                </span>
              </div>

              <div className="my-5">
                <div className="text-xs font-bold uppercase tracking-widest text-white/80">
                  Portfolio Reference (Click to Preview)
                </div>
                <div className="mt-1 font-display text-2xl font-extrabold text-white sm:text-3xl">
                  {featured.client}
                </div>
              </div>

              {/* Self-Drawing Graph Line Inside Project Card */}
              <div className="rounded-2xl border border-white/25 bg-white/15 p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-white/80">
                      Documented Milestone
                    </div>
                    <div className="mt-1 font-display text-xl font-extrabold text-white">
                      {featured.metricBadge}
                    </div>
                  </div>
                  <svg className="h-10 w-24 shrink-0" viewBox="0 0 96 40" fill="none" aria-hidden="true">
                    <motion.path
                      key={`line-${featured.id}`}
                      initial={{ strokeDashoffset: 130 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                      strokeDasharray="130"
                      d="M4 34L26 24L48 28L70 12L92 5"
                      stroke="#FFFFFF"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Overlapping White Translucent Card */}
          <motion.div
            key={`card-${featured.id}`}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="glass-panel-purple rounded-[30px] p-7 text-brand-ink lg:-ml-16 lg:col-span-5 lg:p-9"
          >
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
              <button
                type="button"
                onClick={() => setModalProject(featured)}
                data-cursor="cta"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-purple to-brand-electric px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:opacity-95"
              >
                <span>View Project</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </button>
              <Link
                href="/works"
                className="text-xs font-bold uppercase tracking-wider text-brand-deep hover:underline"
              >
                View All Works &rarr;
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Selector Pills */}
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

      {/* Cinematic Project Preview Modal */}
      <AnimatePresence>
        {modalProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalProject(null)}
            className="fixed inset-0 z-[950] flex items-center justify-center bg-brand-ink/70 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[32px] bg-white p-7 text-brand-ink shadow-2xl sm:p-9"
            >
              <button
                type="button"
                onClick={() => setModalProject(null)}
                aria-label="Close project preview"
                className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-lavender bg-white text-brand-ink hover:bg-brand-lavender"
              >
                <X className="h-4 w-4" />
              </button>

              <div className={`rounded-2xl bg-gradient-to-r ${modalProject.gradient} p-6 text-white`}>
                <span className="rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
                  {modalProject.category} • {modalProject.period}
                </span>
                <h3 id="modal-project-title" className="mt-3 font-display text-2xl font-extrabold">
                  {modalProject.title}
                </h3>
                <div className="mt-2 text-sm font-semibold text-white/90">
                  {modalProject.metricBadge}
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="font-display text-sm font-extrabold uppercase tracking-wider text-brand-deep">
                    Challenge
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-brand-muted">
                    {modalProject.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-sm font-extrabold uppercase tracking-wider text-brand-deep">
                    Execution Highlights
                  </h4>
                  <ul className="mt-2 space-y-2 text-sm text-brand-ink">
                    {modalProject.execution.map((step) => (
                      <li key={step} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-purple" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-brand-lavender/55 p-4 text-xs font-semibold text-brand-deep">
                  {modalProject.resultNote}
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5">
                <button
                  type="button"
                  onClick={() => setModalProject(null)}
                  className="rounded-full border border-brand-lavender px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-deep hover:bg-brand-lavender/40"
                >
                  &larr; Back to Portfolio
                </button>
                <Link
                  href={`/works#${modalProject.slug}`}
                  onClick={() => setModalProject(null)}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-purple to-brand-electric px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white"
                >
                  <span>Full Case Study Page</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
