import Link from "next/link";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { SERVICES, SITE_INFO } from "@/data/site-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-lavender bg-[#FAF8FF] pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 border-b border-brand-lavender pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <BrandMark size="footer" />
            <p className="max-w-xs text-sm leading-relaxed text-brand-muted">
              {SITE_INFO.positioning}
            </p>
            <div className="flex items-start gap-2 text-sm text-brand-ink">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-purple" />
              <span>{SITE_INFO.location}</span>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-widest text-brand-deep">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-brand-muted">
              <li><Link href="/" className="hover:text-brand-purple">Home</Link></li>
              <li><Link href="/about" className="hover:text-brand-purple">About Ad-Vridhi</Link></li>
              <li><Link href="/services" className="hover:text-brand-purple">All Services</Link></li>
              <li><Link href="/works" className="hover:text-brand-purple">Portfolio &amp; Concepts</Link></li>
              <li><Link href="/blog" className="hover:text-brand-purple">Growth Blog</Link></li>
              <li><Link href="/contact" className="hover:text-brand-purple">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-widest text-brand-deep">
              Core Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-brand-muted">
              {SERVICES.slice(0, 6).map((srv) => (
                <li key={srv.slug}>
                  <Link href={`/services/${srv.slug}`} className="hover:text-brand-purple">
                    {srv.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-widest text-brand-deep">
              Direct Leadership Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-brand-muted">
              <li>
                <a
                  href={`tel:${SITE_INFO.founder.phoneRaw}`}
                  className="inline-flex items-center gap-2 font-medium text-brand-ink hover:text-brand-purple"
                >
                  <Phone className="h-4 w-4 text-brand-purple" />
                  <span>{SITE_INFO.founder.name} (Founder): {SITE_INFO.founder.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_INFO.coFounder.phoneRaw}`}
                  className="inline-flex items-center gap-2 font-medium text-brand-ink hover:text-brand-purple"
                >
                  <Phone className="h-4 w-4 text-brand-purple" />
                  <span>{SITE_INFO.coFounder.name} (Co-Founder): {SITE_INFO.coFounder.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_INFO.founder.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-brand-purple"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-600" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_INFO.founder.email}`}
                  className="inline-flex items-center gap-2 hover:text-brand-purple"
                >
                  <Mail className="h-4 w-4 text-brand-purple" />
                  <span>{SITE_INFO.founder.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-7 text-xs text-brand-muted sm:flex-row">
          <p>&copy; {year} {SITE_INFO.brandName}. All rights reserved.</p>
          <p>Serving {SITE_INFO.serviceRegions}</p>
        </div>
      </div>
    </footer>
  );
}
