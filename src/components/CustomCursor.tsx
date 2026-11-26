"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<"default" | "interactive" | "project" | "cta">("default");
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduced) return;
    setEnabled(true);

    let targetX = -100;
    let targetY = -100;
    let curX = -100;
    let curY = -100;
    let rafId = 0;
    let active = false;

    const tick = () => {
      curX += (targetX - curX) * 0.25;
      curY += (targetY - curY) * 0.25;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%)`;
      }
      if (active && (Math.abs(targetX - curX) > 0.2 || Math.abs(targetY - curY) > 0.2)) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = 0;
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") {
        setVisible(false);
        active = false;
        return;
      }
      if (!active) {
        curX = e.clientX;
        curY = e.clientY;
        active = true;
        setVisible(true);
      }
      targetX = e.clientX;
      targetY = e.clientY;
      if (!rafId) rafId = requestAnimationFrame(tick);

      const el = e.target instanceof Element ? e.target : null;
      if (el?.closest('[data-cursor="project"]')) {
        setMode("project");
      } else if (el?.closest('[data-cursor="cta"]')) {
        setMode("cta");
      } else if (el?.closest("a, button, [data-cursor='card']")) {
        setMode("interactive");
      } else {
        setMode("default");
      }
    };

    const onMouseLeave = () => {
      setVisible(false);
      active = false;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  if (!enabled) return null;

  const sizeClass =
    mode === "project"
      ? "h-20 w-20 bg-white/95 border-brand-deep text-brand-deep shadow-lg"
      : mode === "cta"
      ? "h-12 w-12 bg-brand-purple/15 border-brand-purple"
      : mode === "interactive"
      ? "h-9 w-9 bg-brand-purple/15 border-brand-purple/70"
      : "h-3 w-3 bg-brand-purple border-brand-purple";

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[990] flex items-center justify-center rounded-full border transition-[width,height,background-color,border-color,opacity] duration-200 will-change-transform ${sizeClass} ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {mode === "project" ? (
        <span className="px-2 text-center font-display text-[9px] font-extrabold leading-tight tracking-wider">
          VIEW PROJECT
        </span>
      ) : null}
    </div>
  );
}
