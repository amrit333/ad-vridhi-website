"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import { MagneticLink } from "./MagneticLink";

const HeroWorkspace3D = dynamic(
  () => import("./HeroWorkspace3D").then((mod) => mod.HeroWorkspace3D),
  {
    ssr: false,
    loading: () => (
      <div className="relative h-[360px] w-full overflow-hidden rounded-[28px] bg-gradient-to-br from-[#F7F4FF] via-white to-[#FDF2FA] sm:h-[440px]">
        <img
          src="/images/hero-workspace-3d.jpg"
          alt="3D creative digital marketing workspace"
          width={1024}
          height={1024}
          className="h-full w-full object-cover"
        />
      </div>
    ),
  }
);

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-12 sm:pt-16 lg:pb-28 lg:pt-20">
      {/* Background Soft Pink & Blue Gradient Lighting + Parallax Dashed Lines */}
      <div
        data-gsap-parallax="-28"
        className="pointer-events-none absolute -left-32 top-0 h-[460px] w-[460px] rounded-full bg-brand-pink/45 blur-[110px]"
        aria-hidden="true"
      />
      <div
        data-gsap-parallax="36"
        className="pointer-events-none absolute -right-24 top-10 h-[520px] w-[520px] rounded-full bg-brand-electric/15 blur-[120px]"
        aria-hidden="true"
      />
      <svg
        data-gsap-parallax="-18"
        className="pointer-events-none absolute inset-x-0 top-12 mx-auto h-[520px] w-full max-w-7xl opacity-45"
        viewBox="0 0 1200 520"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M-40 360C180 180 420 440 680 220C890 42 1080 190 1260 90"
          stroke="#8B70F5"
          strokeWidth="1.5"
          strokeDasharray="6 8"
        />
        <circle cx="110" cy="110" r="7" fill="#8B70F5" fillOpacity="0.35" />
        <circle cx="560" cy="84" r="5" fill="#55D9EA" fillOpacity="0.6" />
        <circle cx="1095" cy="410" r="10" fill="#8B70F5" fillOpacity="0.25" />
      </svg>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="lg:col-span-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-purple/25 bg-brand-lavender px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-deep">
            <Sparkles className="h-3.5 w-3.5 text-brand-purple" />
            Welcome to Ad-Vridhi
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-ink sm:text-5xl lg:text-[3.55rem]">
            We Create <br className="hidden sm:block" />
            And Turn{" "}
            <span className="relative inline-block text-brand-purple">
              <span className="relative z-10">Ideas Into Reality.</span>
              <svg
                className="pointer-events-none absolute -inset-x-3 -inset-y-1.5 h-[calc(100%+12px)] w-[calc(100%+24px)]"
                viewBox="0 0 320 84"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <motion.path
                  initial={{ strokeDashoffset: 700, opacity: 0 }}
                  animate={{ strokeDashoffset: 0, opacity: 0.8 }}
                  transition={{ duration: 1.1, delay: 0.35, ease: "easeInOut" }}
                  strokeDasharray="700"
                  d="M14 48C18 18 96 6 178 9C260 12 308 28 304 52C300 76 218 79 138 76C58 73 10 66 14 48Z"
                  stroke="#F58206"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-muted sm:text-lg">
            From creative websites to performance-driven marketing, we turn ambitious business ideas into powerful digital experiences that attract, engage and convert.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <MagneticLink
              href="/about"
              className="inline-flex items-center justify-center rounded-full border-2 border-brand-lavender bg-white px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider text-brand-deep transition-colors hover:border-brand-purple hover:bg-brand-lavender/40"
            >
              Read More
            </MagneticLink>
            <MagneticLink
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-purple to-brand-electric px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-white shadow-[0_16px_34px_-10px_rgba(91,108,255,0.65)]"
            >
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </MagneticLink>
          </div>
        </motion.div>

        {/* RIGHT COLUMN — Interactive R3F 3D Studio + Floating Translucent Glass Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.12 }}
          className="relative lg:col-span-6"
        >
          <div className="relative mx-auto max-w-[560px] rounded-[36px] bg-gradient-to-br from-brand-lavender via-white to-brand-pink/60 p-4 shadow-soft">
            <HeroWorkspace3D />

            {/* Floating Translucent Glass Card: "Your Growth" */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: [0, -7, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.45 },
                y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="glass-panel mt-4 rounded-3xl p-4 sm:absolute sm:-bottom-6 sm:-left-8 sm:mt-0 sm:w-72 sm:p-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-bold text-brand-ink">
                  Your Growth
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-brand-lavender px-2.5 py-0.5 text-[10px] font-bold text-brand-deep">
                  <TrendingUp className="h-3 w-3 text-brand-purple" />
                  Historical Data
                </span>
              </div>

              <div className="mt-3 flex items-center gap-4">
                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
                  <svg className="h-16 w-16 -rotate-90" viewBox="0 0 64 64" aria-hidden="true">
                    <circle cx="32" cy="32" r="25" stroke="#F0EAFE" strokeWidth="7" fill="none" />
                    <motion.circle
                      cx="32"
                      cy="32"
                      r="25"
                      stroke="#8B70F5"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeDasharray="157"
                      initial={{ strokeDashoffset: 157 }}
                      animate={{ strokeDashoffset: 32 }}
                      transition={{ duration: 1.3, delay: 0.5, ease: "easeOut" }}
                      fill="none"
                    />
                  </svg>
                  <span className="absolute font-display text-xs font-extrabold text-brand-deep">
                    200+
                  </span>
                </div>

                <div>
                  <div className="font-display text-base font-extrabold text-brand-ink">
                    200+ Leads Generated
                  </div>
                  <div className="text-xs font-semibold text-brand-purple">
                    Meta Ads Campaign Result
                  </div>
                  <div className="mt-1 text-[10px] leading-tight text-brand-muted">
                    Historical 2-month career result (Solitaire Infosys); not a guaranteed outcome.
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Subtle Floating 3D Purple Decorative Object near Bottom */}
            <motion.div
              data-gsap-parallax="-24"
              animate={{ y: [0, 10, 0], rotate: [0, 8, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -bottom-5 -right-4 hidden h-16 w-16 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-deep shadow-glass sm:block"
              aria-hidden="true"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
