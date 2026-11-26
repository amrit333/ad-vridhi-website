import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICES, SITE_INFO } from "@/data/site-data";
import { ServiceVisual3D } from "@/components/ServiceVisual3D";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return SERVICES.map((srv) => ({ slug: srv.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const pageUrl = `${SITE_INFO.siteUrl}/services/${service.slug}`;

  return (
    <>
      <ServiceJsonLd
        name={service.title}
        description={service.seoDescription}
        url={pageUrl}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: SITE_INFO.siteUrl },
          { name: "Services", item: `${SITE_INFO.siteUrl}/services` },
          { name: service.title, item: pageUrl },
        ]}
      />

      <section className="bg-gradient-to-b from-brand-lavender/45 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-deep hover:text-brand-purple"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to All Services</span>
          </Link>

          <div className="mt-8 rounded-[32px] border border-brand-lavender bg-white p-7 shadow-soft sm:p-11">
            <div
              className="inline-flex rounded-2xl p-3.5"
              style={{ backgroundColor: service.accentBg }}
            >
              <ServiceVisual3D type={service.visualType} />
            </div>

            <h1 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-brand-ink sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-3 text-lg font-semibold text-brand-purple">
              {service.tagline}
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-muted">
              {service.description}
            </p>

            <div className="mt-8 rounded-2xl bg-[#FAF8FF] p-6">
              <h2 className="font-display text-lg font-extrabold text-brand-ink">
                What&apos;s Included
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-brand-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-purple" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-brand-lavender bg-brand-lavender/35 p-5 text-xs leading-relaxed text-brand-deep">
              <strong>Context &amp; Transparency:</strong> {service.outcomesNote}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-purple to-brand-electric px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-soft"
              >
                <span>Request Strategy For {service.shortTitle}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/works"
                className="inline-flex items-center rounded-full border border-brand-lavender px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-brand-deep hover:bg-brand-lavender/40"
              >
                View Related Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
