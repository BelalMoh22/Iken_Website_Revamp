"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const pillars = [
  {
    title: "Senior Engineering",
    desc: "Expert engineers focused on scalable architecture and clean delivery.",
    short: "Execution quality you can trust from day one.",
    strip: "ENGINEERED FOR LONG-TERM SCALABILITY",
    image: "/service/senior-engineering-scalable-architecture-showcase.webp",
    icon: "engineering",
  },
  {
    title: "Fast Execution",
    desc: "Lean processes that reduce delivery time without sacrificing quality.",
    short: "Results that directly impact your revenue.",
    strip: "BUILT FOR FAST PRODUCT DELIVERY",
    image: "/service/fast-execution-lean-delivery-showcase.webp",
    icon: "execution",
  },
  {
    title: "Product Mindset",
    desc: "We build solutions aligned with business goals and user needs.",
    short: "Built around outcomes, not just output.",
    strip: "SOLUTIONS DESIGNED FOR BUSINESS GROWTH",
    image: "/service/product-mindset-business-user-needs-showcase.webp",
    icon: "product",
  },
  {
    title: "Long-Term Scalability",
    desc: "Systems designed to evolve with growing teams and products.",
    short: "Architecture that grows with your business.",
    strip: "TECHNOLOGY THAT SUPPORTS REAL BUSINESS IMPACT",
    image: "/service/long-term-scalability-growing-products-showcase.webp",
    icon: "scalability",
  },
];

function PillarGlyph({ kind }: { kind: string }) {
  const paths: Record<string, string> = {
    engineering: "M10 3h4M12 3v4m-5 4h10M7 11l-2 9m14-9 2 9M9.5 20h5",
    execution: "M3 12h6l3 8 4-16 3 8h2",
    product: "M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Zm8-1.5v12M8 9.5l8 5",
    scalability: "M4 18h16M7 14l3-3 3 2 4-5",
  };

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
      <path d={paths[kind] ?? paths.execution} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();
  const IMAGE_TRANSITION_SECONDS = 0.62;
  const SLIDE_HOLD_MS = 2000;
  const AUTO_ROTATE_MS = Math.round(IMAGE_TRANSITION_SECONDS * 1000) + SLIDE_HOLD_MS;

  const sectionRef = useRef<HTMLElement>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const switchToIndex = useCallback((idx: number) => {
    setActiveCardIndex(idx);
    setImageIndex(idx);
  }, []);

  const restartAutoRotate = useCallback(() => {
    if (shouldReduceMotion || !isSectionVisible) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setImageIndex((prev) => {
        const next = (prev + 1) % pillars.length;
        setActiveCardIndex(next);
        return next;
      });
    }, AUTO_ROTATE_MS);
  }, [AUTO_ROTATE_MS, isSectionVisible, shouldReduceMotion]);

  const stopAutoRotate = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const handlePillarClick = (idx: number) => {
    switchToIndex(idx);
    restartAutoRotate();
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof IntersectionObserver === "undefined") {
      const frame = window.requestAnimationFrame(() => setIsSectionVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsSectionVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldReduceMotion || !isSectionVisible) {
      stopAutoRotate();
      return;
    }

    restartAutoRotate();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isSectionVisible, restartAutoRotate, shouldReduceMotion, stopAutoRotate]);

  const renderFeatureCards = () => (
    <div className="mt-5 flex flex-col gap-1.5">
      {pillars.map((pillar, idx) => {
        const isActive = idx === activeCardIndex;
        return (
          <motion.button
            key={pillar.title}
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.2, delay: 0, ease: "easeOut" }}
            type="button"
            onClick={() => handlePillarClick(idx)}
            className={`group relative flex w-full items-start gap-3 rounded-xl border border-transparent px-2.5 py-2 text-left [transform:translateZ(0)] [webkit-tap-highlight-color:transparent] transition-[border-color,background-color,opacity,transform] duration-320 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-blue)] ${isActive
                ? "border-[var(--color-border-brand)] bg-[linear-gradient(132deg,rgba(37,99,235,0.16),rgba(14,165,233,0.08)_45%,rgba(6,11,24,0.2)_100%)]"
                : "bg-transparent hover:bg-[var(--color-bg-glass)]"
              }`}
          >
            <span className={`absolute left-0 top-2.5 w-[2px] rounded-full transition-all duration-320 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? "h-10 bg-[var(--color-brand-blue)] shadow-[0_0_14px_var(--color-brand-blue-glow)]" : "h-7 bg-[var(--color-border-light)] group-hover:h-8 group-hover:bg-[var(--color-border-brand)]"}`} />

            <span className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border [transform:translateZ(0)] ${isActive
                ? "transition-[border-color,background-color,color,opacity,transform] duration-320 ease-[cubic-bezier(0.22,1,0.36,1)] border-[var(--color-border-brand)] bg-[rgba(37,99,235,0.2)] text-[var(--color-text-brand)]"
                : "transition-all duration-300 ease-[ease] border-[rgba(0,102,204,0.15)] bg-[rgba(0,102,204,0.08)] text-[#4A7DB8] group-hover:bg-[rgba(0,102,204,0.16)] group-hover:translate-x-[4px]"
              }`}>
              <PillarGlyph kind={pillar.icon} />
            </span>

            <span className="block">
              <span className={`block text-[1.05rem] font-semibold leading-tight transition-colors duration-320 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]"}`}>
                {pillar.title}
              </span>
              <span className={`mt-1 block text-sm leading-relaxed transition-colors duration-320 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? "text-[var(--color-text-secondary)]" : "text-[var(--color-text-muted)] group-hover:text-[var(--color-text-secondary)]"}`}>
                {pillar.desc}
              </span>
            </span>
          </motion.button>
        );
      })}
    </div>
  );

  const renderCtas = () => (
    <div className="mt-6 flex flex-col gap-3 xs:flex-row xs:flex-wrap xs:items-center">
      <Link
        href="/contact"
        className="rounded-full bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] px-6 py-3 text-center text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
      >
        Book a strategy call
      </Link>
      <a
        href="#work"
        className="rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg-glass)] px-6 py-3 text-center text-sm font-semibold text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-border-brand)]"
      >
        See client proof
      </a>
    </div>
  );

  const renderShowcase = () => (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="relative z-10"
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
        className="relative mx-auto w-full max-w-[44rem]"
        onMouseEnter={stopAutoRotate}
        onMouseLeave={restartAutoRotate}
      >
        <div className="relative overflow-hidden rounded-[1.5rem] border border-[var(--color-border-light)] bg-[var(--color-bg-card)] shadow-[0_4px_14px_rgba(0,0,0,0.06)] dark:shadow-[0_6px_18px_rgba(0,0,0,0.22)]">
          {pillars.map((pillar, idx) => {
            const isActive = idx === imageIndex;

            return (
              <motion.div
                key={pillar.title}
                initial={false}
                animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 1.01, x: isActive ? 0 : -10 }}
                transition={{ duration: IMAGE_TRANSITION_SECONDS, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 will-change-transform will-change-opacity"
                aria-hidden={!isActive}
              >
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(100vw - 3rem), (max-width: 1279px) 55vw, 704px"
                  priority={idx === 0}
                  loading={idx === 0 ? "eager" : "lazy"}
                  unoptimized
                  className="object-cover"
                />
              </motion.div>
            );
          })}

          <div className="relative h-[18.5rem] sm:h-[22rem] lg:h-[31rem]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,12,24,0.02)_24%,rgba(4,12,24,0.12)_58%,rgba(4,12,24,0.54)_100%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_86%_10%,rgba(255,255,255,0.18),transparent_34%)]" />

          <div className="absolute inset-x-0 bottom-0 h-[96px] sm:h-[102px]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,15,30,0)_0%,rgba(6,15,30,0.34)_48%,rgba(6,15,30,0.58)_100%)]" />
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`overlay-${imageIndex}`}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-x-4 bottom-3 will-change-opacity sm:inset-x-5 sm:bottom-4"
              >
                <div className="flex items-center gap-2 text-white">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-border-brand)] bg-[var(--color-brand-blue-glow)] text-[var(--color-brand-cyan)]">
                    <PillarGlyph kind={pillars[imageIndex].icon} />
                  </span>
                  <h3 className="text-[1.12rem] font-semibold leading-none tracking-tight text-white [text-shadow:0_2px_10px_rgba(2,6,23,0.65)] sm:text-[1.3rem]">
                    {pillars[imageIndex].title}
                  </h3>
                </div>
                <div className="mt-3 h-px w-[78%] bg-white/30" />
                <div className="mt-2 flex items-center gap-2">
                  <span className="h-3.5 w-px bg-[var(--color-brand-cyan)]/90" aria-hidden="true" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/78 sm:text-xs">
                    {pillars[imageIndex].strip}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="scroll-section section-y relative m-0 w-full overflow-hidden bg-[linear-gradient(180deg,var(--color-bg-main)_0%,var(--color-bg-card)_52%,var(--color-bg-main)_100%)]"
      aria-labelledby="about-title"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-8 h-56 w-56 rounded-full bg-[var(--color-brand-blue-glow)] blur-3xl"
        animate={{ x: [0, 10, 0], y: [0, -6, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 right-6 h-56 w-56 rounded-full bg-[var(--color-brand-cyan-glow)] blur-3xl"
        animate={{ x: [0, -8, 0], y: [0, 8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:radial-gradient(circle_at_1px_1px,var(--color-text-primary)_1px,transparent_0)] [background-size:3px_3px]" />

      <div className="site-container">
        <div
          id="why-iken"
          className="relative mx-auto grid max-w-[78rem] items-center gap-8 md:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_16%,var(--color-brand-blue-glow),transparent_52%)] opacity-35" />

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="section-eyebrow">
              <span className="h-3.5 w-3.5 rounded-[4px] bg-[var(--color-brand-blue)] shadow-[0_0_8px_var(--color-brand-blue-glow)]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">About IKEN</span>
            </div>

            <h2
              id="about-title"
              className="max-w-[17ch] text-[1.78rem] font-semibold leading-[1.08] tracking-tight text-[var(--color-text-primary)] sm:max-w-[16ch] sm:text-[2.1rem] lg:text-[2.35rem]"
            >
              Why Companies{" "}
              <span className="bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">
                Choose IKEN
              </span>
            </h2>

            <div className="mt-6 lg:hidden">
              {renderShowcase()}
            </div>

            <p className="mt-4 hidden max-w-[48ch] text-sm leading-relaxed text-[var(--color-text-secondary)] sm:text-[15px] lg:block">
              IKEN Technology empowers businesses with reliable, scalable digital solutions built by experts and delivered with speed, precision, and measurable impact.
            </p>

            <div className="lg:hidden">
              <p className="section-subtitle max-w-[48ch] text-sm sm:text-[15px]">
                IKEN Technology empowers businesses with reliable, scalable digital solutions built by experts and delivered with speed, precision, and measurable impact.
              </p>
              {renderFeatureCards()}
              {renderCtas()}
            </div>

            <div className="hidden lg:block">
              {renderFeatureCards()}
              <div className="mt-6 flex flex-wrap items-center gap-3 md:mt-8">
                <Link
                  href="/contact"
                  className="rounded-full bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  Book a strategy call
                </Link>
                <a
                  href="#work"
                  className="rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg-glass)] px-6 py-3 text-sm font-semibold text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-border-brand)]"
                >
                  See client proof
                </a>
              </div>
            </div>
          </motion.div>

          <div className="relative z-10 hidden lg:block">{renderShowcase()}</div>
        </div>
      </div>
    </section>
  );
}
