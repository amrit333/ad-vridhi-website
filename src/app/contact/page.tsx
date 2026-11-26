import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone, CalendarCheck } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SITE_INFO } from "@/data/site-data";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Ad-Vridhi | Book a Growth Consultation",
  description:
    "Start your website, Meta & Google Ads, SEO, or ManyChat automation project with Ad-Vridhi in Noida, Delhi NCR & India. Call +91 85449-26441 or message via WhatsApp.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: SITE_INFO.siteUrl },
          { name: "Contact", item: `${SITE_INFO.siteUrl}/contact` },
        ]}
      />

      <section className="bg-gradient-to-b from-brand-lavender/45 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <span className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-deep shadow-xs">
                Get Started
              </span>
              <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-brand-ink sm:text-5xl">
                Let&apos;s Turn Your Ideas Into Reality.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-brand-muted">
                Share your goals and current digital channels. We will review your website, ad funnel, or automation bottlenecks and respond directly within one business day.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-brand-lavender bg-white p-5 shadow-xs">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                    Direct Leadership Lines
                  </div>
                  <div className="mt-3 space-y-3 text-sm">
                    <a
                      href={`tel:${SITE_INFO.founder.phoneRaw}`}
                      className="flex items-center gap-2.5 font-bold text-brand-ink hover:text-brand-purple"
                    >
                      <Phone className="h-4 w-4 text-brand-purple" />
                      <span>{SITE_INFO.founder.name} (Founder): {SITE_INFO.founder.phoneDisplay}</span>
                    </a>
                    <a
                      href={`tel:${SITE_INFO.coFounder.phoneRaw}`}
                      className="flex items-center gap-2.5 font-bold text-brand-ink hover:text-brand-purple"
                    >
                      <Phone className="h-4 w-4 text-brand-purple" />
                      <span>{SITE_INFO.coFounder.name} (Co-Founder): {SITE_INFO.coFounder.phoneDisplay}</span>
                    </a>
                    <a
                      href={`mailto:${SITE_INFO.founder.email}`}
                      className="flex items-center gap-2.5 text-brand-muted hover:text-brand-purple"
                    >
                      <Mail className="h-4 w-4 text-brand-purple" />
                      <span>{SITE_INFO.founder.email}</span>
                    </a>
                    <div className="flex items-center gap-2.5 text-brand-muted">
                      <MapPin className="h-4 w-4 text-brand-purple" />
                      <span>{SITE_INFO.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={SITE_INFO.founder.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition hover:bg-emerald-700"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp Consultation</span>
                  </a>
                  <a
                    href={`tel:${SITE_INFO.founder.phoneRaw}`}
                    className="inline-flex items-center gap-2 rounded-full border border-brand-lavender bg-white px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-brand-deep hover:bg-brand-lavender/40"
                  >
                    <CalendarCheck className="h-4 w-4" />
                    <span>Book Discovery Call</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-brand-lavender bg-white p-7 shadow-soft lg:col-span-7 sm:p-9">
              <h2 className="font-display text-2xl font-extrabold text-brand-ink">
                Project &amp; Growth Enquiry
              </h2>
              <p className="mt-1 mb-6 text-sm text-brand-muted">
                Protected against spam • Direct response from Ad-Vridhi leadership
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
