"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const updateVisibility = () => {
      rafRef.current = null;
      setIsVisible((current) => {
        const next = window.scrollY > 300;
        return current === next ? current : next;
      });
    };

    const toggleVisibility = () => {
      if (rafRef.current !== null) return;
      rafRef.current = window.requestAnimationFrame(updateVisibility);
    };

    updateVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    
    // Clean up any hashes from the URL smoothly without reloading
    if (window.location.hash) {
      window.history.pushState(null, "", window.location.pathname);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="group fixed bottom-6 right-6 z-[60] flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-[var(--color-border-brand)] bg-[var(--color-bg-glass)] text-[var(--color-brand-blue)] shadow-[0_4px_20px_var(--color-brand-blue-glow)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand-cyan)] hover:bg-[var(--color-bg-glass-strong)] hover:text-[var(--color-brand-cyan)] hover:shadow-[0_8px_30px_var(--color-brand-cyan-glow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-cyan)]"
        >
          <svg
            className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:-translate-y-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
