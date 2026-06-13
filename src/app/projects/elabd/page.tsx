"use client";

/* eslint-disable react/no-unescaped-entities */

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Code2, Network, Rocket, Wallet, type LucideIcon } from "lucide-react";

import { Header } from "../../sections/Header";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { ContactSection } from "../../sections/ContactSection";
import { useMounted } from "../../hooks/useMounted";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" as const, delay: Math.min(delay, 0.04) } },
});

const initiatives = [
  {
    id: 1,
    n: "01",
    title: "E-Commerce Flow Optimization",
    desc: "Redesigned product catalog management and streamlined checkout experience, resulting in improved platform stability, faster page loads, and measurably higher customer satisfaction scores.",
    image: "/clients/elabd-frame.svg"
  },
  {
    id: 2,
    n: "02",
    title: "Learning Management System",
    desc: "Custom-built LMS designed specifically for internal training programs, enabling HR and Sales teams to upskill employees efficiently and track professional development progress.",
    image: "/clients/elabd-lms.svg"
  },
  {
    id: 3,
    n: "03",
    title: "Coupon & Discount Management",
    desc: "Sophisticated promotional campaign system enabling targeted offers, seasonal discounts, and loyalty rewards that drive conversion rates and customer retention.",
    image: "/clients/elabd-coupons.svg"
  },
  {
    id: 4,
    n: "04",
    title: "Corporate Website Development",
    desc: "Designed a comprehensive corporate website presenting the company's history, products, values, and brand story through a modern digital experience.",
    image: "/clients/coperateWebsite.svg"
  }
];

const roleCards: { title: string; desc: string; icon: LucideIcon }[] = [
  { title: "Tech Expertise", desc: "Frontend, Backend, Mobile, DevOps, QA, and Product Management", icon: Code2 },
  { title: "Business Integration", desc: "Deep collaboration with marketing, sales, and operations for aligned execution", icon: Network },
  { title: "Fast Delivery", desc: "Continuous delivery with agile release cycles and rapid feature deployment", icon: Rocket },
  { title: "Cost Efficiency", desc: "Full platform ownership from development to optimization - no full-time hiring costs", icon: Wallet },
];

function ElAbdLogo({ className = "h-12 w-auto" }: { className?: string }) {
  const { theme } = useTheme();
  const mounted = useMounted();
  const src = mounted && theme === "dark" ? "/clients/alabd-dark.svg" : "/clients/alabd-light.svg";

  return (
    <Image
      src={src}
      alt="ELAbd Patisserie brand logo"
      width={168}
      height={64}
      className={`${className} object-contain`}
      style={{ width: "auto" }}
    />
  );
}

function CarouselArrow({
  direction,
  disabled,
  onClick,
  label,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
  label: string;
}) {
  const isPrev = direction === "prev";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-main)] ${isPrev
          ? "border-[var(--color-border-light)] bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] hover:enabled:-translate-y-0.5 hover:enabled:border-[var(--color-border-brand)] hover:enabled:text-[var(--color-text-primary)] disabled:cursor-not-allowed disabled:opacity-35"
          : "border-transparent bg-[var(--color-brand-blue)] text-white shadow-md shadow-[var(--color-brand-blue-glow)] hover:enabled:-translate-y-0.5 hover:enabled:shadow-lg hover:enabled:shadow-[var(--color-brand-blue-glow)] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
        }`}
      aria-label={label}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {isPrev ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
      </svg>
    </button>
  );
}

function RoleCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const viewportRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);

  const getStep = useCallback(() => {
    const first = slideRefs.current[0];
    const second = slideRefs.current[1];
    if (!first) return 0;
    return second ? second.offsetLeft - first.offsetLeft : first.offsetWidth;
  }, []);

  const maxIndex = Math.max(0, roleCards.length - slidesPerView);
  const safeIndex = Math.min(activeIndex, maxIndex);

  const scrollToIndex = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const viewport = viewportRef.current;
      const step = getStep();
      if (!viewport || !step) return;
      viewport.scrollTo({ left: index * step, behavior });
    },
    [getStep],
  );

  useEffect(() => {
    const update = () => {
      const nextSlidesPerView = window.innerWidth >= 640 ? 2 : 1;
      setSlidesPerView(nextSlidesPerView);
      setActiveIndex((current) => {
        const nextMaxIndex = Math.max(0, roleCards.length - nextSlidesPerView);
        const next = Math.min(current, nextMaxIndex);
        window.requestAnimationFrame(() => scrollToIndex(next, "auto"));
        return next;
      });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [scrollToIndex]);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const navigate = useCallback(
    (dir: -1 | 1) => {
      setActiveIndex((index) => {
        const next = Math.min(maxIndex, Math.max(0, index + dir));
        scrollToIndex(next);
        return next;
      });
    },
    [maxIndex, scrollToIndex],
  );

  const handleScroll = useCallback(() => {
    if (rafRef.current !== null) {
      window.cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = window.requestAnimationFrame(() => {
      const viewport = viewportRef.current;
      const step = getStep();
      if (!viewport || !step) return;
      setActiveIndex(Math.min(maxIndex, Math.max(0, Math.round(viewport.scrollLeft / step))));
    });
  }, [getStep, maxIndex]);

  return (
    <>
      <div
        ref={viewportRef}
        className="-mx-4 flex snap-x snap-proximity gap-4 overflow-x-auto overscroll-x-contain px-4 pb-2 outline-none [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0 lg:pb-0"
        role="region"
        aria-label="ELAbd role cards carousel"
        aria-roledescription="carousel"
        tabIndex={0}
        onScroll={handleScroll}
      >
        {roleCards.map((item, i) => {
          const IconComponent = item.icon;
          return (
            <motion.article
              ref={(node) => {
                slideRefs.current[i] = node;
              }}
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp(i * 0.07)}
              className="min-w-0 shrink-0 basis-[82%] snap-start rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-6 transition-all hover:border-[var(--color-border-brand)] hover:bg-[var(--color-bg-glass-strong)] sm:basis-[calc((100%-1rem)/2)] lg:basis-auto"
              role="group"
              aria-roledescription="slide"
              aria-label={`Role ${i + 1} of ${roleCards.length}: ${item.title}`}
            >
              <div className="mb-3.5 flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border-light)] bg-[var(--color-bg-glass-strong)] shadow-[0_2px_12px_var(--color-brand-blue-glow)]">
                  <IconComponent className="h-[22px] w-[22px] text-[var(--color-brand-blue)]" strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-bold leading-tight text-[var(--color-text-primary)]">{item.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{item.desc}</p>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4 lg:hidden" role="group" aria-label="Role slider navigation">
        <CarouselArrow direction="prev" disabled={safeIndex === 0} onClick={() => navigate(-1)} label="Previous role" />

        <div className="flex items-center justify-center gap-2.5" aria-label="Role slides">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setActiveIndex(idx);
                scrollToIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === safeIndex ? "w-8 bg-[var(--color-brand-blue)]" : "w-3 bg-[var(--color-bg-glass-strong)] hover:bg-[var(--color-text-muted)]"
                }`}
              aria-label={`Go to role slide ${idx + 1}`}
              aria-current={idx === safeIndex ? "true" : undefined}
            />
          ))}
        </div>

        <CarouselArrow direction="next" disabled={safeIndex === maxIndex} onClick={() => navigate(1)} label="Next role" />
      </div>
    </>
  );
}

export default function ElAbdCaseStudy() {
  const [activeCard, setActiveCard] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % initiatives.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, activeCard]);
  return (
    <div className="min-h-screen bg-[var(--color-bg-main)] text-[var(--color-text-primary)]">
      {/* Ambient glows */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-[var(--color-brand-blue-glow)] opacity-[0.5] blur-[140px]" />
        <div className="absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[var(--color-brand-cyan-glow)] opacity-[0.4] blur-[140px]" />
      </div>

      {/* Header */}
      <Header />

      <main className="relative z-10">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden border-b border-[var(--color-border-light)] pb-16 pt-6 sm:pb-20 sm:pt-8 lg:pb-36 lg:pt-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,var(--color-brand-blue-glow),transparent)]" />
          <div className="site-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
              {/* Text Content Column */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp(0)}
                className="min-w-0 lg:col-span-5 xl:col-span-5 flex flex-col justify-center"
              >
                <Breadcrumbs />
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-border-brand)] bg-[var(--color-brand-blue-glow)] px-3.5 py-1.5 self-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-blue)]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-brand)]">Case Study · TaaS</span>
                </div>
                <h1 className="mb-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl text-[var(--color-text-primary)]">
                  IKEN × ELAbd
                </h1>
                <p className="mb-5 text-xl font-semibold leading-snug text-[var(--color-text-secondary)] sm:text-2xl lg:mb-6">
                  A Strategic TaaS Partnership Driving Digital Growth
                </p>
                <p className="mb-6 max-w-lg text-base leading-relaxed text-[var(--color-text-secondary)] opacity-80 lg:mb-8">
                  ELAbd — Egypt's most celebrated pastry brand — partnered with IKEN Technology as their dedicated development arm, establishing a full TaaS model to accelerate digital transformation.
                </p>
                {/* Redesigned Text-Only Highlight Badges */}
                <div className="mb-6 grid gap-4 border-l-2 border-[var(--color-brand-blue)] pl-4 min-[380px]:grid-cols-3 lg:mb-8">
                  {[
                    { label: "E-Commerce", value: "Platform" },
                    { label: "TaaS", value: "Model" },
                    { label: "Full-Stack", value: "Delivery" },
                  ].map((item) => (
                    <div key={item.label} className="flex min-w-0 flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-brand)]">
                        {item.label}
                      </span>
                      <span className="text-sm font-bold text-[var(--color-text-primary)] mt-1">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link href="/contact"
                    className="rounded-full bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-px hover:shadow-xl">
                    Start a Partnership
                  </Link>
                  <a href="#results"
                    className="rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg-glass)] px-6 py-2.5 text-sm font-bold text-[var(--color-text-primary)] transition-all hover:border-[var(--color-border-brand)] hover:bg-[var(--color-bg-glass-strong)]">
                    See Results ↓
                  </a>
                </div>
              </motion.div>

              {/* Product Showcase Column */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp(0.12)}
                className="lg:col-span-7 xl:col-span-7 flex items-center justify-center relative w-full overflow-visible lg:pl-4"
              >
                {/* Main Showcase Wrapper with negative margin for desktop overlap */}
                <div className="relative w-full max-w-[550px] lg:max-w-[680px] lg:-mr-20 xl:-mr-32 z-10">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative w-full select-none"
                  >
                    {/* Main Showcase SVG - Sitting naturally with clean soft shadows */}
                    <div className="relative overflow-visible">
                      <Image
                        src="/clients/elabd-usecase-heroSection.svg"
                        alt="ELAbd Patisserie E-Commerce platform showcase"
                        width={820}
                        height={615}
                        className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_30px_70px_rgba(0,0,0,0.55)] rounded-2xl"
                        priority
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── IKEN'S ROLE ── */}
        <section className="border-b border-[var(--color-border-light)] py-12 lg:py-20">
          <div className="site-container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0)}
              className="mb-8 lg:mb-12">
              <div className="mb-2 inline-flex items-center gap-2 text-[var(--color-text-brand)]">
                <span className="inline-flex h-3 w-3 rounded-[2px] bg-[var(--color-brand-blue)]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">Our Role</span>
              </div>
              <h2 className="text-3xl font-bold text-[var(--color-text-primary)] sm:text-4xl">ELAbd's In-House Tech Arm</h2>
              <p className="mt-3 max-w-2xl text-[var(--color-text-secondary)]">
                IKEN functions as ELAbd's in-house technical division — providing full-stack capabilities through a dedicated squad model without the overhead of building internal infrastructure.
              </p>
            </motion.div>
            <RoleCarousel />
            <div className="hidden">
              {[
                { title: "Tech Expertise", desc: "Frontend, Backend, Mobile, DevOps, QA, and Product Management", icon: Code2 },
                { title: "Business Integration", desc: "Deep collaboration with marketing, sales, and operations for aligned execution", icon: Network },
                { title: "Fast Delivery", desc: "Continuous delivery with agile release cycles and rapid feature deployment", icon: Rocket },
                { title: "Cost Efficiency", desc: "Full platform ownership from development to optimization — no full-time hiring costs", icon: Wallet },
              ].map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    variants={fadeUp(i * 0.07)}
                    className="min-w-0 shrink-0 basis-[82%] snap-start rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-6 transition-all hover:border-[var(--color-border-brand)] hover:bg-[var(--color-bg-glass-strong)] sm:basis-[calc((100%-1rem)/2)] lg:basis-auto">
                    <div className="mb-3.5 flex items-center gap-3.5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border-light)] bg-[var(--color-bg-glass-strong)] shadow-[0_2px_12px_var(--color-brand-blue-glow)]">
                        <IconComponent className="h-[22px] w-[22px] text-[var(--color-brand-blue)]" strokeWidth={1.8} />
                      </div>
                      <h3 className="text-base font-bold text-[var(--color-text-primary)] leading-tight">{item.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── KEY INITIATIVES ── */}
        <section className="relative overflow-hidden border-b border-[var(--color-border-light)] py-12 lg:py-20">
          {/* Subtle soft lighting glows behind right image */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute right-[10%] top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[var(--color-brand-blue-glow)] opacity-[0.4] blur-[130px]" />
          </div>

          <div className="site-container relative z-10">
            {/* Header: Full-width at the top */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp(0)}
              className="mb-8 lg:mb-12"
            >
              <div className="mb-2.5 inline-flex items-center gap-2 text-[var(--color-text-brand)]">
                <span className="inline-flex h-3 w-3 rounded-[2px] bg-[var(--color-brand-blue)]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-brand)]">Delivered</span>
              </div>
              <h2 className="text-3xl font-black text-[var(--color-text-primary)] sm:text-4xl lg:text-[42px] leading-tight tracking-tight">
                Key Initiatives
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-center">
              {/* Left Side (Content & Cards Stack) - order-2 on mobile, lg:order-1 on desktop */}
              <div className="w-full lg:col-span-7 xl:col-span-6 flex flex-col justify-center order-2 lg:order-1">
                <div
                  className="space-y-4 md:space-y-5 max-w-[580px] w-full"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  {initiatives.map((item, i) => {
                    const isActive = activeCard === i;
                    return (
                      <motion.div
                        key={item.id}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp(i * 0.05)}
                        onClick={() => setActiveCard(i)}
                        className={`group flex gap-4 sm:gap-5 rounded-[20px] border p-4 sm:p-5 cursor-pointer select-none transition-all duration-300 ${isActive
                          ? "border-[var(--color-brand-blue)]/35 bg-[var(--color-bg-glass-strong)]/70 shadow-[0_10px_30px_rgba(59,130,246,0.08)] scale-[1.02]"
                          : "border-[var(--color-border-light)]/60 bg-[var(--color-bg-card)]/50 backdrop-blur-md hover:-translate-y-0.5 hover:border-[var(--color-brand-blue)]/30 hover:bg-[var(--color-bg-glass-strong)]/60 hover:shadow-[0_10px_30px_rgba(59,130,246,0.08)]"
                          }`}
                      >
                        <span className={`mt-0.5 text-3xl sm:text-4xl font-black tracking-tight tabular-nums select-none shrink-0 transition-colors duration-300 ${isActive
                          ? "text-[var(--color-brand-blue)]/55"
                          : "text-[var(--color-brand-blue)]/20 group-hover:text-[var(--color-brand-blue)]/40"
                          }`}>
                          {item.n}
                        </span>
                        <div className="flex flex-col">
                          <h3 className={`mb-1 text-base sm:text-[17px] font-bold transition-colors duration-300 ${isActive ? "text-[var(--color-text-brand)]" : "text-[var(--color-text-primary)]"
                            }`}>
                            {item.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] opacity-85 max-w-[480px]">
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Right Side (Visual Area) - order-1 on mobile, lg:order-2 on desktop */}
              <div className="w-full lg:col-span-5 xl:col-span-6 flex items-center justify-center relative order-1 lg:order-2">
                {/* Soft ambient inner glow behind mockups */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-gradient-to-tr from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] opacity-[0.07] blur-[90px] rounded-full pointer-events-none" />

                <motion.div
                  initial={{ opacity: 1, y: 0, scale: 1 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full max-w-[460px] md:max-w-full h-[320px] sm:h-[400px] lg:h-[460px] xl:h-[520px] flex justify-center items-center overflow-hidden"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCard}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full flex justify-center items-center"
                    >
                      <motion.div
                        animate={{
                          y: [0, -8, 0],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="w-full h-full flex justify-center items-center"
                      >
                        <Image
                          src={initiatives[activeCard].image}
                          alt={initiatives[activeCard].title}
                          width={600}
                          height={600}
                          className="w-full h-auto max-h-full object-contain select-none pointer-events-none"
                          priority
                        />
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TAAS TEAM ── */}
        <section className="border-b border-[var(--color-border-light)] py-12 lg:py-20">
          <div className="site-container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0)} className="mb-8 lg:mb-12">
              <div className="mb-2 inline-flex items-center gap-2 text-[var(--color-text-brand)]">
                <span className="inline-flex h-3 w-3 rounded-[2px] bg-[var(--color-brand-blue)]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">Team Composition</span>
              </div>
              <h2 className="text-3xl font-bold text-[var(--color-text-primary)] sm:text-4xl">TaaS Model in Action</h2>
              <p className="mt-3 max-w-2xl text-[var(--color-text-secondary)]">
                Our dedicated team operates with the same priorities and urgency as internal staff — enabling flexible scaling based on project demands and business cycles.
              </p>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { role: "Developers", desc: "Full-stack engineers building robust, scalable solutions" },
                { role: "UI/UX Designers", desc: "Creating intuitive, beautiful user experiences" },
                { role: "QA Engineers", desc: "Ensuring reliability through comprehensive testing" },
                { role: "Product Managers", desc: "Aligning technology with business objectives" },
                { role: "DevOps", desc: "Maintaining secure, performant infrastructure" },
              ].map((item, i) => (
                <motion.div key={item.role} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeUp(i * 0.07)}
                  className="flex items-start gap-3 rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-5">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--color-border-brand)] bg-[var(--color-brand-blue-glow)] text-[var(--color-text-brand)]">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" /><circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[var(--color-text-primary)]">{item.role}</p>
                    <p className="text-xs text-[var(--color-text-secondary)]">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── IMPACT & RESULTS ── */}
        <section id="results" className="scroll-section relative overflow-hidden border-b border-[var(--color-border-light)] py-12 lg:py-20">
          {/* Subtle soft lighting glows behind right dashboard */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute right-[5%] bottom-[10%] h-[450px] w-[450px] rounded-full bg-[var(--color-brand-cyan-glow)] opacity-[0.35] blur-[120px]" />
          </div>

          <div className="site-container relative z-10">
            {/* Header: Full-width at the top */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp(0)}
              className="mb-8 lg:mb-12 max-w-3xl"
            >
              <div className="mb-2.5 inline-flex items-center gap-2 text-[var(--color-text-brand)]">
                <span className="inline-flex h-3 w-3 rounded-[2px] bg-[var(--color-brand-blue)]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-brand)]">Outcomes</span>
              </div>
              <h2 className="text-3xl font-black text-[var(--color-text-primary)] sm:text-4xl lg:text-[42px] leading-tight tracking-tight mb-4">
                Impact &amp; Results
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[var(--color-text-secondary)] opacity-85">
                Measurable business outcomes across multiple dimensions, demonstrating the tangible value of the TaaS model in accelerating digital transformation.
              </p>
            </motion.div>

            {/* Split layout: metrics grid on left, chart on right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-stretch">
              {/* Left Side (2x2 Metric Cards Grid) */}
              <div className="w-full lg:col-span-6 xl:col-span-5">
                <div className="grid grid-cols-2 gap-4 sm:gap-5 h-full">
                  {[
                    { v: "45%", l: "Faster Time-to-Market", sub: "New features deployed in half the time" },
                    { v: "30%", l: "Order Volume Increase", sub: "Following UI/UX enhancements and platform optimization" },
                    { v: "5+", l: "Departments Supported", sub: "E-Commerce, HR, Sales, Marketing, Operations" },
                    { v: "200+", l: "Employees Trained", sub: "Internal staff upskilled through the custom LMS" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.l}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp(i * 0.05)}
                      className="group flex flex-col items-center justify-center text-center rounded-[20px] border border-[var(--color-border-light)]/60 bg-[var(--color-bg-card)]/50 backdrop-blur-md p-4 sm:p-5 min-h-[140px] sm:min-h-[160px] h-full transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-brand-blue)]/30 hover:bg-[var(--color-bg-glass-strong)]/60 hover:shadow-[0_10px_30px_rgba(59,130,246,0.06)]"
                    >
                      <span className="bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-3xl sm:text-4xl font-black text-transparent select-none transition-transform duration-300 group-hover:scale-105">
                        {item.v}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[var(--color-text-primary)] mt-2 transition-colors duration-300">
                        {item.l}
                      </span>
                      <span className="text-[10px] sm:text-xs leading-relaxed text-[var(--color-text-muted)] mt-1.5 max-w-[180px]">
                        {item.sub}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Side (Dashboard Chart Panel) */}
              <div className="w-full lg:col-span-6 xl:col-span-7 flex">
                <motion.div
                  initial={{ opacity: 1, y: 0, scale: 1 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full flex flex-col justify-between rounded-[24px] border border-[var(--color-border-light)]/60 bg-[var(--color-bg-card)]/40 backdrop-blur-md p-5 sm:p-6 md:p-7 relative overflow-hidden group hover:border-[var(--color-border-brand)]/40 transition-all duration-300 shadow-xl"
                >
                  {/* Subtle inner background glow */}
                  <div className="absolute -right-20 -top-20 w-48 h-48 bg-gradient-to-tr from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] opacity-[0.05] blur-3xl rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-700" />

                  <div className="relative z-10 w-full flex flex-col h-full">
                    {/* Dashboard Header */}
                    <div className="mb-6">
                      <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-text-brand)]">
                        Before vs. After Partnership
                      </span>
                    </div>

                    {/* Grouped Vertical Bar Chart */}
                    <div className="relative flex-1 min-h-[220px] sm:min-h-[240px] w-full mt-2 pl-8 pr-2">
                      {/* Grid Lines */}
                      <div className="absolute inset-x-0 top-0 bottom-0 pl-8 pointer-events-none">
                        {[100, 80, 60, 40, 20].map((val) => (
                          <div
                            key={val}
                            className="absolute left-8 right-0 border-t border-[var(--color-border-light)]/40 flex items-center"
                            style={{ bottom: `${val}%` }}
                          >
                            <span className="absolute -left-8 text-[10px] sm:text-[11px] font-bold text-[var(--color-text-muted)] w-6 text-right pr-1 select-none -translate-y-1/2 tabular-nums">
                              {val}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Bars Container */}
                      <div className="absolute left-8 right-0 bottom-0 top-0 flex justify-around items-end">
                        {[
                          { label: "Feature Delivery Speed", before: 50, after: 80 },
                          { label: "Platform Uptime", before: 65, after: 99 },
                          { label: "Customer Satisfaction", before: 72, after: 89 },
                        ].map((data) => (
                          <div key={data.label} className="flex flex-col items-center relative w-1/3 h-full justify-end group/bar">
                            {/* Visual Grouped Bars */}
                            <div className="flex items-end gap-1.5 sm:gap-2.5 h-full w-full justify-center pb-[2px]">
                              {/* Before Bar */}
                              <motion.div
                                initial={{ height: "0%" }}
                                whileInView={{ height: `${data.before}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                                className="w-3.5 sm:w-5 md:w-6 bg-slate-400/20 dark:bg-slate-700/35 rounded-t-[4px] transition-all duration-300 group-hover/bar:bg-slate-400/30 dark:group-hover/bar:bg-slate-700/50"
                              />
                              {/* After Bar */}
                              <motion.div
                                initial={{ height: "0%" }}
                                whileInView={{ height: `${data.after}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                className="w-3.5 sm:w-5 md:w-6 bg-gradient-to-t from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] rounded-t-[4px] shadow-[0_0_15px_rgba(14,165,233,0.1)] transition-all duration-300 group-hover/bar:brightness-110 group-hover/bar:shadow-[0_0_20px_rgba(14,165,233,0.2)]"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* X-Axis labels */}
                    <div className="flex justify-around pl-8 mt-3 relative z-10">
                      {[
                        { label: "Feature Delivery Speed" },
                        { label: "Platform Uptime" },
                        { label: "Customer Satisfaction" },
                      ].map((data) => (
                        <div key={data.label} className="w-1/3 text-center px-1">
                          <span className="text-[10px] sm:text-xs font-semibold text-[var(--color-text-muted)] line-clamp-2 sm:line-clamp-none leading-snug">
                            {data.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Chart Legend */}
                    <div className="mt-6 pl-8 flex gap-5 text-xs relative z-10">
                      <span className="flex items-center gap-2 text-[var(--color-text-muted)] select-none">
                        <span className="h-2.5 w-2.5 rounded-full bg-slate-400/30 dark:bg-slate-700/50 border border-[var(--color-border-light)]/40" />
                        Before
                      </span>
                      <span className="flex items-center gap-2 text-[var(--color-text-brand)] font-semibold select-none">
                        <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-tr from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)]" />
                        After Partnership
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TECH STACK ── */}
        <section className="border-b border-[var(--color-border-light)] py-12 lg:py-20">
          <div className="site-container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0)} className="mb-8 lg:mb-12">
              <div className="mb-2 inline-flex items-center gap-2 text-[var(--color-text-brand)]">
                <span className="inline-flex h-3 w-3 rounded-[2px] bg-[var(--color-brand-blue)]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">Technology</span>
              </div>
              <h2 className="text-3xl font-black leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-[42px]">Technology Stack</h2>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text-muted)]">Enterprise-Grade Technology Foundation</p>
            </motion.div>

            {/* 3×2 Icon Card Grid */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "React",
                  subtitle: "Frontend Framework",
                  desc: "Delivering fast, dynamic, and responsive user interfaces for web and mobile platforms with a component-driven architecture.",
                  glowColor: "rgba(97,218,251,0.18)",
                  borderHover: "rgba(97,218,251,0.5)",
                  logo: "/clients/react-logo.svg",
                  logoAlt: "React logo",
                  logoBg: false,
                },
                {
                  title: ".NET",
                  subtitle: "Backend Framework",
                  desc: "Powering enterprise-grade business logic, APIs, integrations, and platform operations with high performance and scalability.",
                  glowColor: "rgba(95,90,220,0.18)",
                  borderHover: "rgba(95,90,220,0.5)",
                  logo: "/clients/net-logo.svg",
                  logoAlt: ".NET 8 logo",
                  logoBg: false,
                },
                {
                  title: "Microsoft SQL Server",
                  subtitle: "Relational Database",
                  desc: "Providing secure, reliable, and highly optimized data storage for transactional and business-critical workloads.",
                  glowColor: "rgba(204,52,52,0.18)",
                  borderHover: "rgba(204,52,52,0.5)",
                  logo: "/clients/sql-logo.svg",
                  logoAlt: "Microsoft SQL Server logo",
                  logoBg: false,
                },
                {
                  title: "Azure DevOps",
                  subtitle: "CI/CD & DevOps Platform",
                  desc: "Automating deployments, release pipelines, source control, and development workflows for faster delivery.",
                  glowColor: "rgba(0,120,212,0.18)",
                  borderHover: "rgba(0,120,212,0.5)",
                  logo: "/clients/azure-logo.svg",
                  logoAlt: "Azure DevOps logo",
                  logoBg: false,
                },
                {
                  title: "Docker",
                  subtitle: "Containerization",
                  desc: "Packaging applications into portable containers ensuring consistent environments across development, staging, and production.",
                  glowColor: "rgba(13,183,237,0.18)",
                  borderHover: "rgba(13,183,237,0.5)",
                  logo: "/clients/docker-logo.svg",
                  logoAlt: "Docker logo",
                  logoBg: false,
                },
                {
                  title: "MyFatoorah",
                  subtitle: "Payment Gateway",
                  desc: "Enabling secure online payments, local payment methods, and seamless checkout experiences across the platform.",
                  glowColor: "rgba(0,168,107,0.18)",
                  borderHover: "rgba(0,168,107,0.5)",
                  logo: "/clients/myFatoorah-logo.jpeg",
                  logoAlt: "MyFatoorah logo",
                  logoBg: true,
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp(i * 0.07)}
                  className="group relative flex flex-col rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-border-brand)] hover:bg-[var(--color-bg-glass-strong)]"
                  style={{
                    ["--card-glow" as string]: item.glowColor,
                    ["--card-border" as string]: item.borderHover,
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ boxShadow: `0 0 32px ${item.glowColor}, inset 0 0 20px ${item.glowColor}` }}
                  />
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Logo */}
                    <div
                      className={`mb-4 flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border-light)] transition-all duration-300 ${item.logoBg ? "bg-white p-1" : "bg-[var(--color-bg-glass-strong)]"}`}
                      style={{ boxShadow: `0 2px 16px ${item.glowColor}` }}
                    >
                      <Image
                        src={item.logo}
                        alt={item.logoAlt}
                        width={40}
                        height={40}
                        className="h-10 w-10 object-contain select-none"
                      />
                    </div>
                    {/* Title & Subtitle */}
                    <p className="text-base font-bold leading-tight text-[var(--color-text-primary)]">{item.title}</p>
                    <p className="mt-0.5 mb-3 text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--color-text-secondary)]">{item.subtitle}</p>
                    {/* Description */}
                    <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] flex-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL ── */}
        <section className="border-b border-[var(--color-border-light)] py-12 lg:py-20">
          <div className="site-container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0)} className="mb-8 lg:mb-12">
              <div className="mb-2.5 inline-flex items-center gap-2 text-[var(--color-text-brand)]">
                <span className="inline-flex h-3 w-3 rounded-[2px] bg-[var(--color-brand-blue)]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Partnership</span>
              </div>
              <h2 className="text-3xl font-black leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-[42px]">What Our Client Says</h2>
              <p className="mt-2 text-[var(--color-text-secondary)]">Trusted by leading companies across multiple industries.</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp(0.08)}
              className="relative overflow-hidden rounded-[28px] border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-5 shadow-2xl backdrop-blur-md sm:p-6 lg:p-8"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[var(--color-brand-blue-glow)] blur-3xl" />
              <div className="relative z-10 grid gap-6 md:grid-cols-[0.85fr_1.25fr] md:items-center lg:gap-10">
                <div className="overflow-hidden rounded-[24px] border border-[var(--color-border-light)] bg-[var(--color-bg-main)]/70">
                  <Image
                    src="/testimonials/mohammed-assem.png"
                    alt="Temporary testimonial portrait"
                    width={520}
                    height={620}
                    className="h-full max-h-[420px] w-full object-cover object-top"
                  />
                </div>
                <div>
                  <div className="mb-5 text-7xl font-black leading-none text-[var(--color-brand-blue)]/20">“</div>
                  <blockquote className="text-xl font-semibold leading-relaxed text-[var(--color-text-primary)] sm:text-2xl">
                    “Partnering with IKEN Technology gave us speed, flexibility, and top-tier e-commerce expertise. They are not just a vendor — they are part of our team.”
                  </blockquote>
                  <div className="mt-8 flex flex-wrap items-end justify-between gap-5">
                    <div>
                      <p className="text-base font-bold text-[var(--color-text-primary)]">ELAbd Leadership</p>
                      <p className="mt-1 text-sm text-[var(--color-text-muted)]">ELAbd Patisserie, Egypt</p>
                    </div>
                    <ElAbdLogo className="h-14 w-auto" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-12 sm:py-16 lg:py-28">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0)}>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-blue)]">Ready?</p>
              <h2 className="mb-5 text-3xl font-black tracking-tight text-[var(--color-text-primary)] sm:text-5xl">
                Let's Create Your{" "}
                <span className="bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">
                  Digital Future
                </span>
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-[var(--color-text-secondary)]">
                The ELAbd–IKEN partnership demonstrates what's possible when innovative technology meets strategic collaboration. Whether you're beginning your digital transformation journey or looking to accelerate existing initiatives, the TaaS model offers a proven path to success.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact"
                  className="rounded-full bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-px hover:shadow-xl">
                  Get Started Today
                </Link>
                <Link href="/"
                  className="rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg-glass)] px-8 py-3.5 text-sm font-bold text-[var(--color-text-primary)] transition-all hover:border-[var(--color-border-brand)] hover:bg-[var(--color-bg-glass-strong)]">
                  Learn More
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-[var(--color-text-secondary)]">
                <a href="mailto:contact@iken.tech" className="transition hover:text-[var(--color-text-primary)]">contact@iken.tech</a>
                <a href="https://wa.me/201050500017" className="transition hover:text-[var(--color-text-primary)]">(+20) 105 0500017</a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <ContactSection />
    </div>
  );
}

