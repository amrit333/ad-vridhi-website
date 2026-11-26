import { ArrowRight, Compass, Palette, BarChart3, Bot } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { ServiceCard3D } from "@/components/ServiceCard3D";
import { AboutSectionAnimated } from "@/components/AboutSectionAnimated";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ToolsWall } from "@/components/ToolsWall";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { WebDesignShowcase } from "@/components/WebDesignShowcase";
import { CapabilitiesCharacterStage } from "@/components/CapabilitiesCharacterStage";
import { MagneticLink } from "@/components/MagneticLink";
import {
  PORTFOLIO_BRANDS,
  PROCESS_STEPS,
  SERVICES,
  SITE_INFO,
} from "@/data/site-data";

export default function HomePage() {
  return (
    <>
      {/* 1. Interactive 3D Hero Section */}
      <HeroSection />

      {/* 2. Client / Brand Portfolio Reference Showcase */}
      <section className="border-y border-brand-lavender bg-[#FAF8FF] py-12">
        <div data-gsap-reveal className="mx-auto max-w-7xl px-5 sm:px-8">
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
                className="flex flex-col justify-between rounded-2xl border border-brand-lavender bg-white px-5 py-4 text-center shadow-xs transition hover:-translate-y-1 hover:border-brand-purple/40 hover:shadow-soft"
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

      {/* 3. Services Section with Interactive 3D Tilt Cards */}
      <section className="bg-white py-20 sm:py-28" id="services">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div data-gsap-reveal className="lg:sticky lg:top-28 lg:col-span-4">
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
                <MagneticLink
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-purple to-brand-electric px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-soft"
                >
                  <span>Explore All 8 Services</span>
                  <ArrowRight className="h-4 w-4" />
                </MagneticLink>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
              {SERVICES.map((srv) => (
                <ServiceCard3D key={srv.slug} service={srv} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. About Us Section — Animated 3D Character & Dashboard Composition */}
      <AboutSectionAnimated />

      {/* 5. Purple Full-Width Performance & Portfolio Section with Modal */}
      <PortfolioSection />

      {/* 6. Creative Capabilities Section — Alternating Layout */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div data-gsap-reveal className="lg:col-span-6">
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
                      data-cursor="card"
                      className="rounded-2xl border border-brand-lavender bg-[#FAF8FF] p-5 transition duration-300 hover:-translate-y-1 hover:border-brand-purple/50 hover:shadow-soft"
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

            <div data-gsap-reveal className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-brand-lavender via-white to-brand-pink/50 p-6 shadow-soft">
                <CapabilitiesCharacterStage />
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

      {/* 7. Tools & Technologies Interactive 3D Logo Wall */}
      <ToolsWall />

      {/* 8. Testimonials Ready Carousel */}
      <TestimonialsCarousel />

      {/* 9. Creative Web Design Concepts Showcase */}
      <WebDesignShowcase />

      {/* 10. Our 6-Stage Process Timeline */}
      <section className="bg-white py-20 sm:py-24" id="process">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div data-gsap-reveal className="mx-auto max-w-2xl text-center">
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
                data-gsap-process
                data-cursor="card"
                className="rounded-3xl border border-brand-lavender bg-white p-6 shadow-soft transition hover:-translate-y-1.5 hover:border-brand-purple/40"
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
            data-gsap-parallax="-30"
            className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-brand-pink/30 blur-3xl"
            aria-hidden="true"
          />
          <div
            data-gsap-parallax="30"
            className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-brand-cyan/30 blur-3xl"
            aria-hidden="true"
          />

          <div data-gsap-reveal className="relative mx-auto max-w-3xl">
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
              <MagneticLink
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-brand-deep shadow-lg hover:bg-brand-lavender"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-4 w-4" />
              </MagneticLink>
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
