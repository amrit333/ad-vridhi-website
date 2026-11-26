"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollStoryEngine() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      // Staggered section reveal blocks with distinct upward entrance
      gsap.utils.toArray<HTMLElement>("[data-gsap-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 86%",
              once: true,
            },
          }
        );
      });

      // Subtle parallax drift on decorative floating elements
      gsap.utils.toArray<HTMLElement>("[data-gsap-parallax]").forEach((el) => {
        const speed = Number(el.getAttribute("data-gsap-parallax")) || -30;
        gsap.to(el, {
          y: speed,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement || el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Process cards staggered entrance
      const processCards = gsap.utils.toArray<HTMLElement>("[data-gsap-process]");
      if (processCards.length > 0) {
        gsap.fromTo(
          processCards,
          { y: 28, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: processCards[0],
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return null;
}
