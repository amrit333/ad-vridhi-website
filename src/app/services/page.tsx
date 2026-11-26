import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES, SITE_INFO } from "@/data/site-data";
import { ServiceVisual3D } from "@/components/ServiceVisual3D";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Digital Marketing, Automation & Web Services",
  description:
    "Explore Ad-Vridhi's 8 core services: Performance Marketing, Lead Generation, Social Media Marketing, Technical SEO, Instagram ManyChat Automation, AI Marketing, Website Development & YouTube Marketing.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: SITE_INFO.siteUrl },
          { name: "Services", item: `${SITE_INFO.siteUrl}/services` },
        ]}
      />

      <section className="bg-gradient-to-b from-brand-lavender/45 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-deep shadow-xs">
              Services Directory
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-brand-ink sm:text-5xl">
              Full-Funnel Digital Marketing, Automation &amp; Web Engineering.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
              Choose a dedicated growth lever or combine website development, Meta &amp; Google acquisition, SEO, and ManyChat automation into a cohesive growth partnership.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {SERVICES.map((srv) => (
              <article
                key={srv.slug}
                className="flex flex-col justify-between rounded-[28px] border border-brand-lavender bg-white p-7 shadow-soft transition hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="inline-flex rounded-2xl p-3"
                      style={{ backgroundColor: srv.accentBg }}
                    >
                      <ServiceVisual3D type={srv.visualType} />
                    </div>
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-extrabold text-brand-ink">
                    {srv.title}
                  </h2>
                  <p className="mt-1.5 text-sm font-semibold text-brand-purple">
                    {srv.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                    {srv.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                  <Link
                    href={`/services/${srv.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-brand-deep hover:text-brand-purple"
                  >
                    <span>Explore Service Page</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="text-xs font-bold text-brand-muted hover:text-brand-ink"
                  >
                    Enquire &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
