"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Monitor, Smartphone } from "lucide-react";
import { CONCEPT_PROJECTS } from "@/data/site-data";

export function WebDesignShowcase() {
  const [activeId, setActiveId] = useState<(typeof CONCEPT_PROJECTS)[number]["id"]>("realestate");
  const activeConcept =
    CONCEPT_PROJECTS.find((item) => item.id === activeId) ?? CONCEPT_PROJECTS[0];

  return (
    <section className="bg-[#F9F7FF] py-20 sm:py-28" id="web-concepts">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-brand-lavender px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-deep">
            Creative Web Design Concepts (Not Claimed Client Projects)
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-brand-ink sm:text-5xl">
            Your Website Should Be As Unique As Your Business.
          </h2>
          <p className="mt-4 text-base text-brand-muted">
            Explore four original fictional website concepts demonstrating how Ad-Vridhi tailors visual design, conversion hierarchy, and mobile polish to distinct industries.
          </p>
        </div>

        {/* Concept Tabs */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CONCEPT_PROJECTS.map((concept, idx) => {
            const selected = concept.id === activeId;
            return (
              <button
                key={concept.id}
                type="button"
                onClick={() => setActiveId(concept.id)}
                className={`rounded-2xl border p-4 text-left transition-all ${
                  selected
                    ? "border-brand-purple bg-white shadow-soft"
                    : "border-brand-lavender bg-white/70 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-brand-purple">
                  <span>Concept 0{idx + 1}</span>
                  <span className="rounded bg-brand-lavender px-1.5 py-0.5 text-brand-deep">
                    Conceptual
                  </span>
                </div>
                <div className="mt-1.5 font-display text-sm font-extrabold text-brand-ink">
                  {concept.label}
                </div>
              </button>
            );
          })}
        </div>

        {/* Desktop + Mobile Preview Stage */}
        <div className="mt-8 rounded-[32px] border border-brand-lavender bg-white p-5 shadow-soft sm:p-8">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                {activeConcept.industry} • {activeConcept.designLanguage}
              </div>
              <h3 className="font-display text-xl font-extrabold text-brand-ink">
                {activeConcept.title}
              </h3>
            </div>
            <div className="inline-flex items-center gap-3 text-xs font-semibold text-brand-muted">
              <span className="inline-flex items-center gap-1"><Monitor className="h-3.5 w-3.5" /> Desktop</span>
              <span className="inline-flex items-center gap-1"><Smartphone className="h-3.5 w-3.5" /> Mobile</span>
            </div>
          </div>

          <div className="grid items-stretch gap-6 lg:grid-cols-12">
            {/* Desktop Browser Mockup */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg lg:col-span-8">
              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-2.5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-0.5 text-[11px] text-slate-500">
                  concept-preview.ad-vridhi.in/{activeConcept.id}
                </span>
                <span className="text-[10px] font-bold uppercase text-brand-purple">Concept</span>
              </div>

              {activeId === "realestate" && (
                <div className="bg-[#F6F1E9] p-6 text-[#1D1A16] sm:p-8">
                  <div className="flex items-center justify-between border-b border-[#1D1A16]/10 pb-3 text-xs uppercase tracking-widest">
                    <span className="font-bold">Aurelia Ridge</span>
                    <span>Villas • Architecture • Private Tours</span>
                  </div>
                  <div className="mt-6 grid items-center gap-6 sm:grid-cols-2">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#8D6A35]">
                        Luxury Real Estate Concept
                      </span>
                      <h4 className="mt-2 font-display text-2xl font-bold leading-tight">
                        Architecture Carved Into Quiet Horizons.
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-[#5E564B]">
                        Sixteen private limestone residences with panoramic ridge views and appointment-only viewings.
                      </p>
                      <span className="mt-4 inline-block bg-[#1D1A16] px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-[#F6F1E9]">
                        Request Private Dossier
                      </span>
                    </div>
                    <div className="rounded-xl bg-gradient-to-br from-[#2D261E] via-[#574530] to-[#C9A875] p-5 text-[#FAF6F0]">
                      <div className="text-[10px] uppercase tracking-widest opacity-80">Estate Overview</div>
                      <div className="mt-1 font-display text-lg font-bold">The Ridge Pavilion</div>
                      <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/20 pt-3 text-xs">
                        <div><strong>6,400 sq.ft</strong><br />Private Plot</div>
                        <div><strong>4 / 16</strong><br />Available</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeId === "ecommerce" && (
                <div className="bg-[#FCFAF8] p-6 text-[#141414] sm:p-8">
                  <div className="flex items-center justify-between border-b border-[#E8E3DC] pb-3 text-xs font-bold uppercase tracking-widest">
                    <span>KORA ATELIER</span>
                    <span>Lookbook • Ceramics • Bag (2)</span>
                  </div>
                  <div className="mt-6 grid items-center gap-6 sm:grid-cols-2">
                    <div>
                      <span className="rounded bg-[#FAECE7] px-2 py-0.5 text-[10px] font-bold uppercase text-[#A84428]">
                        D2C E-commerce Concept
                      </span>
                      <h4 className="mt-2 font-display text-2xl font-extrabold leading-tight">
                        Tactile Objects For Slow Living.
                      </h4>
                      <p className="mt-2 text-xs text-stone-600">
                        Small-batch stoneware and organic linen essentials structured for mobile-first D2C conversion.
                      </p>
                      <span className="mt-4 inline-block rounded-full bg-[#141414] px-4 py-2 text-[11px] font-bold text-white">
                        Explore Collection
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-[#F3EEE8] p-3">
                        <div className="h-16 rounded-lg bg-gradient-to-br from-[#D5A38C] to-[#B45339]" />
                        <div className="mt-2 text-xs font-bold">Sienna Carafe</div>
                        <div className="text-[11px] text-stone-600">₹3,490</div>
                      </div>
                      <div className="rounded-xl bg-[#F3EEE8] p-3">
                        <div className="h-16 rounded-lg bg-gradient-to-br from-[#D6D1C7] to-[#78716C]" />
                        <div className="mt-2 text-xs font-bold">Linen Throw</div>
                        <div className="text-[11px] text-stone-600">₹5,200</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeId === "education" && (
                <div className="bg-[#F4F7FC] p-6 text-[#0F172A] sm:p-8">
                  <div className="flex items-center justify-between rounded-xl bg-white px-4 py-2.5 text-xs font-bold shadow-xs">
                    <span>Nalanda Digital Academy</span>
                    <span className="text-blue-700">Cohorts • Syllabus • Apply</span>
                  </div>
                  <div className="mt-6 grid items-center gap-6 sm:grid-cols-2">
                    <div>
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-[10px] font-bold text-blue-700">
                        Education Institute Concept
                      </span>
                      <h4 className="mt-2 font-display text-2xl font-extrabold leading-tight">
                        Cohort-Based Learning With Practical Outcomes.
                      </h4>
                      <p className="mt-2 text-xs text-slate-600">
                        Mentor-led sprints, clear syllabus milestones, and frictionless admissions enquiries.
                      </p>
                      <span className="mt-4 inline-block rounded-full bg-blue-700 px-4 py-2 text-[11px] font-bold text-white">
                        Download Syllabus
                      </span>
                    </div>
                    <div className="space-y-2 rounded-xl border border-slate-200 bg-white p-4 text-xs font-semibold">
                      <div className="flex justify-between rounded-lg bg-slate-50 p-2.5">
                        <span>01. Core Foundations</span><span className="text-blue-700">Weeks 1–4</span>
                      </div>
                      <div className="flex justify-between rounded-lg bg-slate-50 p-2.5">
                        <span>02. Live Studio Lab</span><span className="text-blue-700">Weeks 5–10</span>
                      </div>
                      <div className="flex justify-between rounded-lg bg-slate-50 p-2.5">
                        <span>03. Capstone Project</span><span className="text-blue-700">Weeks 11–16</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeId === "startup" && (
                <div className="bg-[#0B0A12] p-6 text-white sm:p-8">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs text-slate-300">
                    <span className="font-bold text-white">Veloce<span className="text-brand-cyan">.ai</span></span>
                    <span>Platform • Integrations • Book Demo</span>
                  </div>
                  <div className="mt-6 grid items-center gap-6 sm:grid-cols-2">
                    <div>
                      <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[10px] font-bold text-cyan-300">
                        Technology Startup Concept
                      </span>
                      <h4 className="mt-2 font-display text-2xl font-extrabold leading-tight">
                        Autonomous Revenue Telemetry For Modern SaaS.
                      </h4>
                      <p className="mt-2 text-xs text-slate-300">
                        Unify CRM pipelines, attribution events, and product signals in real time.
                      </p>
                      <span className="mt-4 inline-block rounded-full bg-brand-purple px-4 py-2 text-[11px] font-bold text-white">
                        Book Live Sandbox
                      </span>
                    </div>
                    <div className="rounded-xl border border-white/15 bg-white/5 p-4 font-mono text-xs text-slate-200">
                      <div className="text-cyan-300">$ veloce sync --attribution</div>
                      <div className="mt-1 text-emerald-400">✓ GA4 + Meta CAPI Linked</div>
                      <div className="text-emerald-400">✓ Funnel Latency: 14ms</div>
                      <div className="mt-2 border-t border-white/10 pt-2 text-amber-300">
                        Pipeline Forecast Ready
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Preview Frame */}
            <div className="flex items-center justify-center rounded-2xl bg-brand-lavender/45 p-5 lg:col-span-4">
              <div className="w-full max-w-[230px] rounded-[28px] bg-[#171722] p-2.5 shadow-xl">
                <div className="overflow-hidden rounded-[22px] bg-white">
                  <div className="mx-auto h-3.5 w-16 rounded-b-xl bg-[#171722]" />
                  <div className="p-4">
                    <span className="rounded bg-brand-lavender px-2 py-0.5 text-[9px] font-bold uppercase text-brand-deep">
                      Mobile View
                    </span>
                    <div className="mt-2 font-display text-sm font-extrabold text-brand-ink">
                      {activeConcept.label}
                    </div>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-brand-muted">
                      Thumb-friendly navigation, fast media loading, and high-contrast mobile CTAs.
                    </p>
                    <div className="mt-4 rounded-xl bg-gradient-to-br from-brand-purple to-brand-electric p-3 text-white">
                      <div className="text-[10px] uppercase opacity-80">Conversion Ready</div>
                      <div className="mt-0.5 text-xs font-bold">Responsive 375px+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center">
            <p className="max-w-2xl text-sm text-brand-muted">{activeConcept.description}</p>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-brand-purple to-brand-electric px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-soft"
            >
              <span>Let&apos;s Build Your Website</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
