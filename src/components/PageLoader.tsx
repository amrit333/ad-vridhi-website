"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function PageLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setShow(false);
      return;
    }
    const timer = setTimeout(() => setShow(false), 520);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeOut" } }}
          className="pointer-events-none fixed inset-0 z-[999] flex items-center justify-center bg-white"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="font-display text-lg font-extrabold tracking-tight text-brand-ink">
              Ad-Vridhi
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="h-0.5 w-24 origin-left rounded-full bg-gradient-to-r from-brand-purple via-brand-electric to-brand-amber"
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
