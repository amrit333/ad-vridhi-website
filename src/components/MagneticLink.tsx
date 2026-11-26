"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

interface MagneticLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export function MagneticLink({ href, className = "", children }: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(!isTouch && !reduced);
  }, []);

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = (e.clientX - (rect.left + rect.width / 2)) * 0.18;
    const relY = (e.clientY - (rect.top + rect.height / 2)) * 0.18;
    setOffset({ x: Math.max(-8, Math.min(8, relX)), y: Math.max(-8, Math.min(8, relY)) });
  };

  const handleLeave = () => {
    if (offset.x !== 0 || offset.y !== 0) setOffset({ x: 0, y: 0 });
  };

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      data-cursor="cta"
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: "transform 220ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      className={className}
    >
      {children}
    </Link>
  );
}
