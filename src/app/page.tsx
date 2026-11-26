import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Compass, Palette, BarChart3, Bot } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { ServiceVisual3D } from "@/components/ServiceVisual3D";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ToolsWall } from "@/components/ToolsWall";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { WebDesignShowcase } from "@/components/WebDesignShowcase";
import {
  PORTFOLIO_BRANDS,
  PROCESS_STEPS,
  SERVICES,
  SITE_INFO,
} from "@/data/site-data";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Client / Brand Portfolio Reference Showcase */}
      <section className="border-y border-brand-lavender bg-[#FAF8FF] py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-center font-display text-sm font-extrabold uppercase tracking-[0.18em] text-brand-deep">
            Creative Experiences. Measurable Growth.
          </p>
          <p className="mt-1.5 text-center text-xs text-brand-muted">
            Selected brands &amp; campaigns from founder {SITE_INFO.founder.name}&apos;s documented portfolio experience
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PORTFOLIO_BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="flex flex-col justify-between rounded-2xl border border-brand-lavender bg-white px-5 py-4 text-center shadow-xs transition hover:-translate-y-0.5 hover:border-brand-purple/40"
              >
                <div className="font-display text-lg font-extrabold tracking-tight text-brand-ink">
                  {brand.name}
                </div>
                <div className="mt-1 text-xs font-medium text-brand-muted">
                  {brand.context}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services Asymmetric Section */}
      <section className="bg-white py-20 sm:py-28" id="services">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Sticky Left Editorial Column */}
            <div className="lg:sticky lg:top-28 lg:col-span-4">
              <span className="inline-block rounded-full bg-brand-lavender px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-deep">
                We Create Digital Experiences
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-4xl">
                We Are Here To Make Your Digital Presence Stand Out.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-brand-muted">
                Instead of isolated tactics, Ad-Vridhi unifies performance media, organic content, technical SEO, ManyChat automation, and modern web development into one cohesive system.
              </p>
              <div className="mt-7">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-purple to-brand-electric px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-soft transition hover:-translate-y-0.5"
                >
                  <span>Explore All 8 Services</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Floating Service Cards with Distinct 3D Visuals */}
            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
              {SERVICES.map((srv) => (
                <article
                  key={srv.slug}
                  className="group flex flex-col justify-between rounded-[28px] border border-brand-lavender bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-purple/50"
                >
                  <div>
                    <div
                      className="inline-flex rounded-2xl p-3"
                      style={{ backgroundColor: srv.accentBg }}
                    >
                      <ServiceVisual3D type={srv.visualType} />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-extrabold text-brand-ink">
                      {srv.title}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-brand-purple">
                      {srv.tagline}
                    </p>
                    <p className="mt-2.5 text-sm leading-relaxed text-brand-muted">
                      {srv.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <Link
                      href={`/services/${srv.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-brand-deep transition-all group-hover:gap-2.5 group-hover:text-brand-purple"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. About Us Section — Circular Lavender-to-Purple Gradient Composition */}
      <section className="relative overflow-hidden bg-[#FAF8FF] py-20 sm:py-28" id="about">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12">
          {/* Left Circular Gradient Composition + Glass Card */}
          <div className="relative flex justify-center lg:col-span-6">
            <div className="relative flex h-[340px] w-[340px] items-center justify-center rounded-full bg-gradient-to-br from-brand-lavender via-[#C7B8FA] to-brand-purple p-6 shadow-soft sm:h-[430px] sm:w-[430px]">
              <img
                src="/images/about-strategist-3d.jpg"
                alt="3D illustration of digital strategist interacting with marketing analytics dashboard"
                width={1024}
                height={1024}
                className="h-full w-full rounded-full border-4 border-white/80 object-cover shadow-lg"
              />

              {/* Floating Glassmorphism Card */}
              <div className="glass-panel absolute -bottom-5 left-4 right-4 rounded-2xl p-4 sm:left-auto sm:-right-8 sm:bottom-10 sm:w-64">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-purple">
                  <Sparkles className="h-3.5 w-3.5" />
                  Ad-Vridhi Mindset
                </div>
                <div className="mt-1 font-display text-base font-extrabold text-brand-ink">
                  Creative Minds. Strategic Thinking.
                </div>
              </div>

              {/* Floating Decorative Orb */}
              <div
                className="pointer-events-none absolute -left-4 top-10 h-12 w-12 rounded-full bg-gradient-to-br from-brand-pink to-brand-purple shadow-md"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Right Editorial Copy + Authentic Founder Profile */}
          <div className="lg:col-span-6">
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

            {/* Authentic Founder Introduction from CV */}
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
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-purple to-brand-electric px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-soft transition hover:-translate-y-0.5"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Purple Full-Width Performance & Portfolio Section */}
      <PortfolioSection />

      {/* 6. Creative Capabilities Section — Alternating Layout */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="inline-block rounded-full bg-brand-lavender px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-deep">
                Integrated Capabilities
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
                We Combine Creativity With Technology.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-brand-muted">
                Every brand touchpoint—from your website layout to your Meta Pixel events and ManyChat automated replies—operates as one connected growth machine.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Compass,
                    title: "Digital Strategy",
                    desc: "Audience positioning, funnel mapping, and ROI-focused channel plans.",
                  },
                  {
                    icon: Palette,
                    title: "Creative Design",
                    desc: "High-retention Reels, thumbnails, landing pages, and brand aesthetics.",
                  },
                  {
                    icon: BarChart3,
                    title: "Performance Marketing",
                    desc: "Data-backed Meta Ads, Google Search PPC, and weekly CPL optimization.",
                  },
                  {
                    icon: Bot,
                    title: "Marketing Automation",
                    desc: "ManyChat DM flows, story triggers, and AI-accelerated content ops.",
                  },
                ].map((cap) => {
                  const Icon = cap.icon;
                  return (
                    <div
                      key={cap.title}
                      className="rounded-2xl border border-brand-lavender bg-[#FAF8FF] p-5 transition hover:border-brand-purple/50"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand-purple shadow-xs">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-3 font-display text-base font-extrabold text-brand-ink">
                        {cap.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-brand-muted">
                        {cap.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-brand-lavender via-white to-brand-pink/50 p-6 shadow-soft">
                <img
                  src="/images/hero-workspace-3d.jpg"
                  alt="Marketing specialist analytics workspace"
                  width={1024}
                  height={1024}
                  className="rounded-[26px] object-cover"
                />
                <div className="glass-panel mt-4 flex items-center justify-between rounded-2xl px-5 py-3.5">
                  <span className="font-display text-sm font-bold text-brand-ink">
                    GA4 + Meta Pixel + Search Console Ready
                  </span>
                  <span className="rounded-full bg-brand-purple px-3 py-1 text-[10px] font-bold uppercase text-white">
                    Full Telemetry
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Tools & Technologies Interactive Wall */}
      <ToolsWall />

      {/* 8. Testimonials Ready Carousel */}
      <TestimonialsCarousel />

      {/* 9. Creative Web Design Concepts Showcase */}
      <WebDesignShowcase />

      {/* 10. Our 6-Stage Process Timeline */}
      <section className="bg-white py-20 sm:py-24" id="process">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-brand-lavender px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-deep">
              How We Work
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
              Our Six-Stage Growth Process.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS_STEPS.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-brand-lavender bg-white p-6 shadow-soft transition hover:-translate-y-1"
              >
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} font-display text-sm font-extrabold text-white shadow-md`}
                >
                  {item.step}
                </span>
                <h3 className="mt-4 font-display text-xl font-extrabold text-brand-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Final Full-Width Gradient CTA */}
      <section className="px-5 pb-20 sm:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-gradient-to-r from-[#39208C] via-[#8B70F5] to-[#5B6CFF] px-6 py-16 text-center text-white shadow-soft sm:px-12 sm:py-20">
          <div
            className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-brand-pink/30 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-brand-cyan/30 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-3xl">
            <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm">
              Ready To Move Forward?
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
              Let&apos;s Turn Your Ideas Into Reality.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              Whether you need a powerful website, smarter marketing or a complete digital growth strategy, Ad-Vridhi is ready to help.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-brand-deep shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-lavender"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={SITE_INFO.founder.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-7 py-4 text-xs font-extrabold uppercase tracking-wider text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <span>WhatsApp {SITE_INFO.founder.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
