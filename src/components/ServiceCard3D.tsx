"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceItem } from "@/data/site-data";
import { ServiceVisual3D } from "./ServiceVisual3D";

export function ServiceCard3D({ service }: { service: ServiceItem }) {
  const cardRef = useRef<HTMLElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, gx: 50, gy: 50, active: false });
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const hoverOk = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setCanHover(hoverOk && !reduced);
  }, []);

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!canHover || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const ry = (px - 0.5) * 11;
    const rx = (0.5 - py) * 11;
    setTilt({ rx, ry, gx: px * 100, gy: py * 100, active: true });
  };

  const handleLeave = () => {
    setTilt({ rx: 0, ry: 0, gx: 50, gy: 50, active: false });
  };

  return (
    <article
      ref={cardRef}
      data-cursor="card"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateZ(0)`,
        transition: tilt.active
          ? "transform 120ms ease-out, box-shadow 200ms ease"
          : "transform 420ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 300ms ease",
        transformStyle: "preserve-3d",
      }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-brand-lavender bg-white p-7 shadow-soft active:scale-[0.985] hover:border-brand-purple/55 hover:shadow-[0_28px_56px_-18px_rgba(139,112,245,0.28)]"
    >
      {/* Dynamic cursor-reactive ambient gradient shift */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(320px circle at ${tilt.gx}% ${tilt.gy}%, rgba(139, 112, 245, 0.12), transparent 65%)`,
        }}
      />

      <div style={{ transform: "translateZ(26px)" }} className="relative">
        <div
          className="inline-flex rounded-2xl p-3 transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-105"
          style={{
            backgroundColor: service.accentBg,
            transform: tilt.active
              ? `translate3d(${tilt.ry * 0.7}px, ${-tilt.rx * 0.7}px, 16px)`
              : undefined,
          }}
        >
          <ServiceVisual3D type={service.visualType} />
        </div>

        <h3 className="mt-5 font-display text-xl font-extrabold text-brand-ink">
          {service.title}
        </h3>
        <p className="mt-2 text-sm font-semibold text-brand-purple">
          {service.tagline}
        </p>
        <p className="mt-2.5 text-sm leading-relaxed text-brand-muted">
          {service.description}
        </p>
      </div>

      <div
        style={{ transform: "translateZ(18px)" }}
        className="relative mt-6 border-t border-slate-100 pt-4"
      >
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-brand-deep transition-all group-hover:gap-2.5 group-hover:text-brand-purple"
        >
          <span>Learn More</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
