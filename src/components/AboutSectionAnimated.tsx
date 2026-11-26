"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, BarChart2, Zap } from "lucide-react";
import { SITE_INFO } from "@/data/site-data";

export function AboutSectionAnimated() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8FF] py-20 sm:py-28" id="about">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12">
        {/* Left Circular Lavender-to-Purple Gradient Composition + Animated Mini Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center lg:col-span-6"
        >
          <div className="relative flex h-[340px] w-[340px] items-center justify-center rounded-full bg-gradient-to-br from-brand-lavender via-[#C7B8FA] to-brand-purple p-6 shadow-soft sm:h-[435px] sm:w-[435px]">
            <motion.img
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src="/images/about-strategist-3d.jpg"
              alt="3D illustration of creative digital marketing strategist with analytics dashboard"
              width={1024}
              height={1024}
              className="h-full w-full rounded-full border-4 border-white/80 object-cover shadow-lg"
            />

            {/* Animated Rising Mini Analytics Bars Pill (Top Left) */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="glass-panel absolute -left-3 top-6 hidden rounded-2xl p-3 sm:block"
            >
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-deep">
                <BarChart2 className="h-3.5 w-3.5 text-brand-purple" />
                Analytics Sync
              </div>
              <div className="mt-2 flex h-9 items-end gap-1.5">
                {[38, 62, 54, 86, 100].map((pct, i) => (
                  <motion.span
                    key={pct}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                    style={{ height: `${pct}%` }}
                    className={`w-2 origin-bottom rounded-full ${
                      i >= 3 ? "bg-brand-amber" : "bg-brand-purple"
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Floating Icon Pill (Top Right) */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              className="glass-panel absolute -right-3 top-14 hidden items-center gap-2 rounded-full px-3.5 py-2 sm:inline-flex"
            >
              <Zap className="h-3.5 w-3.5 text-brand-amber" />
              <span className="text-[11px] font-extrabold text-brand-ink">ManyChat + GA4</span>
            </motion.div>

            {/* Floating Glassmorphism Card */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="glass-panel absolute -bottom-5 left-4 right-4 rounded-2xl p-4 sm:left-auto sm:-right-8 sm:bottom-10 sm:w-64"
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-purple">
                <Sparkles className="h-3.5 w-3.5" />
                Ad-Vridhi Mindset
              </div>
              <div className="mt-1 font-display text-base font-extrabold text-brand-ink">
                Creative Minds. Strategic Thinking.
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Editorial Copy + Authentic Founder Profile */}
        <div data-gsap-reveal className="lg:col-span-6">
          <span className="inline-block rounded-full bg-brand-lavender px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-deep">
            About Ad-Vridhi
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-4xl">
            We Are Here To Make Your Brand Stand Out.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            Ad-Vridhi brings creativity, strategy and technology together to help businesses establish a powerful digital presence and achieve meaningful growth.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "Strategy-driven marketing.",
              "Creative digital experiences.",
              "Measurable business growth.",
            ].map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm font-bold text-brand-ink">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-purple" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 rounded-2xl border border-brand-lavender bg-white p-5 shadow-xs">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-purple">
              Founder Profile
            </div>
            <div className="mt-1 font-display text-lg font-extrabold text-brand-ink">
              {SITE_INFO.founder.name}
            </div>
            <div className="text-xs font-semibold text-brand-muted">
              {SITE_INFO.founder.role} • {SITE_INFO.founder.experience}
            </div>
            <p className="mt-2 text-xs leading-relaxed text-brand-muted">
              Google Analytics (GA4) Certified strategist (ID: 192846237) and BCA graduate (Punjab University, Patiala) combining Meta Ads, ManyChat automation, SEO, and AI content workflows.
            </p>
          </div>

          <div className="mt-7">
            <Link
              href="/about"
              data-cursor="cta"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-purple to-brand-electric px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-soft transition hover:-translate-y-0.5"
            >
              <span>Discover Our Story</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
