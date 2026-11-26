"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const PLACEHOLDER_SLOTS = [
  {
    id: 1,
    slotLabel: "Verified Client Review Slot 01 (Placeholder)",
    quote:
      "Ready to display verified client feedback once published with client permission. Designed as a glassmorphic review module for upcoming Ad-Vridhi engagements.",
    clientName: "Client Name — Pending Publication",
    companyName: "Verified Partner Organisation",
  },
  {
    id: 2,
    slotLabel: "Verified Client Review Slot 02 (Placeholder)",
    quote:
      "Testimonial-ready component reserved for documented campaign impact, communication quality, and ROI feedback from active Ad-Vridhi clients.",
    clientName: "Founder / Marketing Lead — Pending",
    companyName: "Growth Partner Brand",
  },
];

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const current = PLACEHOLDER_SLOTS[index];

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div
        className="pointer-events-none absolute right-0 top-10 h-96 w-96 rounded-full bg-brand-pink/35 blur-[110px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left 3D Character Visual */}
          <div className="lg:col-span-5">
            <div className="mx-auto max-w-sm overflow-hidden rounded-[36px] bg-gradient-to-br from-brand-lavender via-white to-brand-pink/55 p-4 shadow-soft">
              <img
                src="/images/testimonial-client-3d.jpg"
                alt="3D character illustration representing Ad-Vridhi business clients"
                width={1024}
                height={1024}
                className="aspect-square w-full rounded-[28px] object-cover"
              />
            </div>
          </div>

          {/* Right Glass Testimonial Card & Carousel Controls */}
          <div className="lg:col-span-7">
            <span className="inline-block rounded-full bg-brand-lavender px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-deep">
              Client Feedback Module
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
              Our Clients Say.
            </h2>

            <div className="glass-panel mt-7 rounded-[28px] border border-brand-lavender p-7 sm:p-9">
              <div className="flex items-center justify-between gap-3">
                <Quote className="h-9 w-9 text-brand-purple/60" />
                <span className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-bold text-amber-800 border border-amber-200">
                  {current.slotLabel}
                </span>
              </div>

              <p className="mt-5 text-lg leading-relaxed text-brand-ink sm:text-xl">
                &ldquo;{current.quote}&rdquo;
              </p>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-brand-lavender pt-5">
                <div className="flex items-center gap-3.5">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-purple to-brand-electric font-display text-sm font-bold text-white">
                    AV
                  </span>
                  <div>
                    <div className="font-display text-sm font-extrabold text-brand-ink">
                      {current.clientName}
                    </div>
                    <div className="text-xs text-brand-muted">{current.companyName}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() =>
                      setIndex((i) => (i === 0 ? PLACEHOLDER_SLOTS.length - 1 : i - 1))
                    }
                    aria-label="Previous testimonial slot"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-lavender bg-white text-brand-deep hover:border-brand-purple"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setIndex((i) => (i === PLACEHOLDER_SLOTS.length - 1 ? 0 : i + 1))
                    }
                    aria-label="Next testimonial slot"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-lavender bg-white text-brand-deep hover:border-brand-purple"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
