"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const cyclingWords = ["Software", "Products", "Platforms", "Solutions"];

const marqueeItems = [
  "Custom Software",
  "Web & Mobile Apps",
  "E-Commerce Solutions",
  "Team as a Service",
  "Product Discovery",
  "Dev Partnership",
  "Enterprise Integration",
  "Maintenance & Support",
];

function useCountUp(target: number, durationMs = 900) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs]);

  return value;
}

function Stat({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const n = useCountUp(value, 1500);

  return (
    <div className="text-center">
      <p className="bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-2xl font-black leading-none text-transparent sm:text-[1.75rem] md:text-3xl">
        {n}
        {suffix}
      </p>
      <p className="mt-0.5 text-[11px] leading-tight text-[var(--color-text-muted)] sm:text-xs">{label}</p>
    </div>
  );
}

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const t = setInterval(() => setWordIndex((i) => (i + 1) % cyclingWords.length), 2400);
    return () => clearInterval(t);
  }, [shouldReduceMotion]);

  return (
    <section id="home" className="scroll-section relative flex flex-col overflow-hidden bg-[var(--color-bg-main)] text-[var(--color-text-primary)] md:min-h-[calc(100svh-5rem)]">

      {/* ── Orb / glow field ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[38%] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-brand-blue)] opacity-[0.14] blur-[130px]" />
        <div className="absolute right-[-15%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[var(--color-brand-blue)] opacity-[0.08] blur-[140px]" />
        <div className="absolute bottom-[5%] left-[-10%] h-[400px] w-[400px] rounded-full bg-[var(--color-brand-cyan)] opacity-[0.08] blur-[130px]" />

        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-text-primary) 1px,transparent 1px),linear-gradient(90deg,var(--color-text-primary) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_42%,transparent_35%,var(--color-bg-main)_100%)]" />
      </div>

      {/* ── Top badge strip ── */}
      <motion.div
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="site-container relative z-10 flex justify-center pb-2 pt-2 sm:pb-3 sm:pt-3 md:pb-6 md:pt-6"
      >
        <div className="flex max-w-full items-center gap-2 rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg-glass)] px-3 py-1.5 backdrop-blur-sm sm:px-4">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent-blue)] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent-blue)]" />
          </span>
          <span className="min-w-0 text-[9px] font-semibold uppercase tracking-[0.13em] text-[var(--color-text-secondary)] min-[390px]:text-[10px] sm:tracking-[0.18em] md:text-[11px]">
            Product Engineering Partner · Est. 2018 · Cairo, Egypt
          </span>
        </div>
      </motion.div>

      {/* ── Main headline ── */}
      <div className="site-container relative z-10 flex w-full flex-col items-center justify-start pb-1 pt-1 text-center sm:pb-3 sm:pt-2 md:flex-1 md:justify-center md:pb-0">

        {/* Big headline with cycling word */}
        <div className="mb-2 overflow-hidden sm:mb-3 md:mb-4">
          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="text-[1.95rem] font-black leading-[1.02] tracking-tight min-[375px]:text-[2.1rem] min-[390px]:text-[2.2rem] min-[414px]:text-[2.32rem] md:text-[3.5rem] md:leading-[1.05] lg:text-[4.5rem]"
            aria-label="We Build Software That Drive Growth"
          >
            <span className="text-[var(--color-text-primary)]">We Build&nbsp;</span>

            {/* Cycling word */}
            <span className="relative inline-flex min-w-[4.65em] justify-center overflow-hidden whitespace-nowrap align-bottom" aria-hidden="true">
              {shouldReduceMotion ? (
                <span className="bg-gradient-to-r from-[var(--color-brand-blue)] via-[var(--color-brand-cyan)] to-[var(--color-brand-blue)] bg-clip-text text-transparent">
                  {cyclingWords[0]}
                </span>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.span
                    key={cyclingWords[wordIndex]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-gradient-to-r from-[var(--color-brand-blue)] via-[var(--color-brand-cyan)] to-[var(--color-brand-blue)] bg-clip-text text-transparent"
                  >
                    {cyclingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              )}
            </span>

            <br />
            <span className="text-[var(--color-text-primary)]">That Drive Growth</span>
          </motion.h1>
        </div>

        {/* Supporting Line / Eyebrow */}
        {/* <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.32 }}
          className="mb-8 max-w-2xl text-[10px] min-[390px]:text-[11px] md:text-[12px] font-bold uppercase tracking-[0.24em] sm:tracking-[0.35em] text-[var(--color-text-brand)] opacity-90"
        >
          For startups and enterprises that need reliable product delivery
        </motion.p> */}

        <motion.p
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.42 }}
          className="mb-3 max-w-[34ch] text-[14px] leading-relaxed text-[var(--color-text-secondary)] min-[390px]:text-[15px] md:mb-6 md:max-w-xl md:text-lg"
        >
          From product discovery to full-scale delivery — IKEN engineers
          software, apps, and technology partnerships that scale with your
          ambitions.
        </motion.p>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.52 }}
          className="mb-3 flex w-full max-w-[26rem] flex-col justify-center gap-2 min-[430px]:w-auto min-[430px]:max-w-none min-[430px]:flex-row min-[430px]:gap-3 md:mb-6 md:gap-4"
        >
          <Link
            href="/contact"
            className="flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] px-6 py-3 text-sm font-bold text-white shadow-[0_2px_18px_var(--color-brand-blue-glow)] transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_26px_var(--color-brand-blue-glow)] md:px-8 md:py-3.5"
          >
            Book a Discovery Call
          </Link>
          <a
            href="#work"
            className="flex items-center justify-center rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg-glass)] px-6 py-3 text-sm font-bold text-[var(--color-text-primary)] backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-[var(--color-border-brand)] hover:bg-[var(--color-bg-glass-strong)] md:px-8 md:py-3.5"
          >
            View Work
          </a>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-8 flex flex-wrap items-center justify-center gap-2"
        >
          {["Trusted by 50+ clients", "Weekly sprint demos", "Senior-led teams"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg-glass)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-secondary)]"
            >
              {item}
            </span>
          ))}
        </motion.div> */}

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.68 }}
          className="grid w-full max-w-[24rem] grid-cols-2 gap-x-5 gap-y-2 border-t border-[var(--color-border-light)] pb-1 pt-2 min-[430px]:max-w-[28rem] sm:flex sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-x-10 sm:gap-y-4 sm:pb-4 sm:pt-5 md:pb-6"
        >
          {[
            { v: 7, s: "+", l: "Years" },
            { v: 100, s: "+", l: "Delivered Products" },
            { v: 50, s: "+", l: "Clients" },
            { v: 6, s: "", l: "Industries" },
          ].map(({ v, s, l }) => (
            <Stat key={l} value={v} suffix={s} label={l} />
          ))}
        </motion.div>
      </div>

      {/* ── Services marquee strip ── */}
      <div className="relative z-10 -mt-px overflow-x-auto overflow-y-hidden border-t border-[var(--color-border-light)] bg-[var(--color-bg-glass)] py-1.5 backdrop-blur-sm [scrollbar-width:none] sm:py-4 [&::-webkit-scrollbar]:hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="flex min-w-max whitespace-nowrap px-2 sm:px-0"
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="mx-5 inline-flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)] sm:mx-8 sm:gap-3 sm:text-[11px] sm:tracking-[0.18em]">
              <span className="h-1 w-1 rounded-full bg-[var(--color-brand-blue)]" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
