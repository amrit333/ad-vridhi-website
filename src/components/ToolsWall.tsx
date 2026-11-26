"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TOOL_CATEGORIES } from "@/data/site-data";
import { ToolBadgeIcon } from "./ToolBadgeIcon";

export function ToolsWall() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const visibleCategories =
    selectedCategory === "all"
      ? TOOL_CATEGORIES
      : TOOL_CATEGORIES.filter((cat) => cat.id === selectedCategory);

  const marqueeTools = TOOL_CATEGORIES.flatMap((cat) => cat.tools);

  return (
    <section className="relative overflow-hidden bg-brand-lavender/45 py-20 sm:py-24" id="tools">
      <div
        data-gsap-parallax="-22"
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-brand-pink/35 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div data-gsap-reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-deep shadow-xs">
            Tools &amp; Technologies
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
            Powered By The Right Tools. Driven By The Right Strategy.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            We combine industry-leading marketing platforms, analytics tools, creative applications and AI technologies to deliver smarter digital growth.
          </p>
        </div>

        {/* Floating Marquee Wall */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-brand-lavender bg-white/85 py-4 shadow-xs">
          <div className="animate-marquee gap-4 px-4">
            {[...marqueeTools, ...marqueeTools].map((tool, index) => (
              <div
                key={`${tool.name}-${index}`}
                className="inline-flex shrink-0 items-center gap-2.5 rounded-xl border border-slate-100 bg-white px-3.5 py-2 shadow-xs transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <ToolBadgeIcon
                  iconSlug={tool.iconSlug}
                  fallbackBadge={tool.fallbackBadge}
                  label={tool.name}
                />
                <span className="text-xs font-bold text-brand-ink">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`rounded-full px-4 py-2 text-xs font-bold transition ${
              selectedCategory === "all"
                ? "bg-brand-deep text-white shadow-sm"
                : "bg-white text-brand-muted hover:text-brand-ink"
            }`}
          >
            All Categories (A–G)
          </button>
          {TOOL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                selectedCategory === cat.id
                  ? "bg-brand-purple text-white shadow-sm"
                  : "bg-white text-brand-muted hover:text-brand-ink"
              }`}
            >
              {cat.code}. {cat.title}
            </button>
          ))}
        </div>

        {/* Staggered 3D Interactive Tool Panels */}
        <div className="mt-10 grid gap-6 md:grid-cols-2" style={{ perspective: "1200px" }}>
          {visibleCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: catIndex * 0.06 }}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-white bg-white/95 p-6 shadow-soft transition-shadow hover:shadow-[0_24px_54px_-16px_rgba(139,112,245,0.22)]"
            >
              <div>
                <span className="inline-block rounded-lg bg-brand-lavender px-2.5 py-1 text-xs font-extrabold text-brand-deep">
                  Category {cat.code}
                </span>
                <h3 className="mt-2 font-display text-lg font-extrabold text-brand-ink">
                  {cat.title}
                </h3>
                <p className="mt-1 text-xs text-brand-muted">{cat.subtitle}</p>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {cat.tools.map((tool) => (
                  <motion.div
                    key={tool.name}
                    whileHover={{ scale: 1.03, y: -3 }}
                    transition={{ type: "spring", stiffness: 320, damping: 22 }}
                    className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm hover:border-brand-purple/45 hover:shadow-md"
                  >
                    <ToolBadgeIcon
                      iconSlug={tool.iconSlug}
                      fallbackBadge={tool.fallbackBadge}
                      label={tool.name}
                    />
                    <div className="min-w-0">
                      <div className="truncate text-sm font-bold text-brand-ink">
                        {tool.name}
                      </div>
                      {tool.note ? (
                        <div className="truncate text-[11px] font-medium text-brand-purple">
                          {tool.note}
                        </div>
                      ) : null}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
