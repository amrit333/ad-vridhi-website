import type { Metadata } from "next";
import Link from "next/link";
import { Award, CheckCircle2, ArrowRight, GraduationCap, ShieldCheck } from "lucide-react";
import { SITE_INFO, HISTORICAL_ACHIEVEMENTS } from "@/data/site-data";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { AboutPageCharacter3D } from "@/components/AboutPageCharacter3D";

export const metadata: Metadata = {
  title: "About Ad-Vridhi & Founder Amritpal Singh",
  description:
    "Learn about Ad-Vridhi, Founder Amritpal Singh, Co-Founder Akansha Kumari, verified Google Analytics (GA4) credentials, and our strategic approach across Noida, Delhi NCR & India.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: SITE_INFO.siteUrl },
          { name: "About", item: `${SITE_INFO.siteUrl}/about` },
        ]}
      />

      <section className="bg-gradient-to-b from-brand-lavender/45 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-deep shadow-xs">
                About Ad-Vridhi
              </span>
              <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-brand-ink sm:text-5xl">
                Creativity, Strategy &amp; Technology Built For Real Growth.
              </h1>
              <p className="mt-5 text-base leading-relaxed text-brand-muted sm:text-lg">
                {SITE_INFO.positioning}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                Based in {SITE_INFO.location}, Ad-Vridhi serves growth-minded businesses across Noida, Delhi NCR, India, and international markets without bloated agency layers—combining custom websites, Meta &amp; Google Ads, SEO, and ManyChat automation under one roof.
              </p>
            </div>

            <div className="flex justify-center lg:col-span-6">
              <div className="relative flex h-[340px] w-[340px] items-center justify-center rounded-full bg-gradient-to-br from-brand-lavender via-[#C7B8FA] to-brand-purple p-5 shadow-soft sm:h-[400px] sm:w-[400px]">
                <div className="h-full w-full overflow-hidden rounded-full border-4 border-white/85 bg-gradient-to-b from-white/95 to-brand-lavender/70">
                  <AboutPageCharacter3D />
                </div>
                <div className="glass-panel pointer-events-none absolute -bottom-4 rounded-2xl px-5 py-3 text-center">
                  <div className="font-display text-sm font-extrabold text-brand-ink">
                    Creative Minds. Strategic Thinking.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authentic Founder Profile (From CV) */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="rounded-[28px] border border-brand-lavender bg-white p-7 shadow-soft lg:col-span-7 sm:p-9">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-purple">
                Founder &amp; Lead Strategist
              </span>
              <h2 className="mt-2 font-display text-3xl font-extrabold text-brand-ink">
                {SITE_INFO.founder.name}
              </h2>
              <p className="mt-1 text-sm font-semibold text-brand-muted">
                {SITE_INFO.founder.role} • {SITE_INFO.founder.experience}
              </p>

              <p className="mt-5 text-sm leading-relaxed text-brand-muted">
                With 2.5+ years of end-to-end campaign ownership across paid media, organic Instagram growth, technical SEO, and AI content pipelines, Amritpal combines technical software foundations with ROI-focused marketing execution.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3 rounded-2xl bg-[#FAF8FF] p-4">
                  <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-brand-purple" />
                  <div>
                    <div className="font-display text-sm font-bold text-brand-ink">
                      Education
                    </div>
                    <div className="text-xs text-brand-muted">
                      {SITE_INFO.founder.education}
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-[#FAF8FF] p-4">
                  <div className="flex items-center gap-2 font-display text-sm font-bold text-brand-ink">
                    <Award className="h-5 w-5 text-brand-purple" />
                    <span>University &amp; Hackathon Honours</span>
                  </div>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {SITE_INFO.founder.awards.map((award) => (
                      <li key={award} className="flex items-start gap-2 text-xs text-brand-muted">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-purple" />
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Certifications + Co-Founder */}
            <div className="space-y-6 lg:col-span-5">
              <div className="rounded-[28px] border border-brand-lavender bg-[#FAF8FF] p-7">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-purple">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Certifications &amp; Applied Skills</span>
                </div>
                <div className="mt-5 space-y-3.5">
                  {SITE_INFO.founder.certifications.map((cert) => (
                    <div key={cert.title} className="rounded-2xl bg-white p-4 shadow-xs">
                      <div className="font-display text-sm font-bold text-brand-ink">
                        {cert.title}
                      </div>
                      <div className="mt-0.5 text-xs text-brand-muted">
                        {cert.issuer} • {cert.period}
                      </div>
                      {cert.credentialId ? (
                        <div className="mt-1 text-[11px] font-semibold text-brand-purple">
                          Credential ID: {cert.credentialId}
                        </div>
                      ) : null}
                      {cert.verifyUrl ? (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 inline-block text-xs font-bold text-brand-deep underline"
                        >
                          Verify Certificate &rarr;
                        </a>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-brand-lavender bg-white p-6 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-purple">
                  Leadership Partner
                </div>
                <div className="mt-1 font-display text-xl font-extrabold text-brand-ink">
                  {SITE_INFO.coFounder.name}
                </div>
                <div className="text-xs font-semibold text-brand-muted">
                  {SITE_INFO.coFounder.role} • {SITE_INFO.coFounder.phoneDisplay}
                </div>
              </div>
            </div>
          </div>

          {/* Historical Career Results Summary */}
          <div className="mt-12 rounded-[28px] bg-gradient-to-r from-[#39208C] to-[#8B70F5] p-8 text-white">
            <h2 className="font-display text-2xl font-extrabold">
              Documented Historical Campaign Results
            </h2>
            <p className="mt-1 text-xs text-white/80">
              Historical campaign outcomes achieved across prior experience (not guaranteed agency results for future engagements).
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {HISTORICAL_ACHIEVEMENTS.map((item) => (
                <div key={item.metric} className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <div className="font-display text-xl font-extrabold">{item.metric}</div>
                  <div className="text-xs font-semibold text-brand-lavender">{item.context}</div>
                  <div className="mt-1 text-[11px] text-white/75">{item.source}</div>
                </div>
              ))}
            </div>
            <div className="mt-7">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-xs font-extrabold uppercase tracking-wider text-brand-deep"
              >
                <span>Work With Ad-Vridhi</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
