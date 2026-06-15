"use client";

/* eslint-disable react/no-unescaped-entities */

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import { ChallengeSolutionSection } from "../../components/ChallengeSolutionSection";

import { Header } from "../../sections/Header";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { ContactSection } from "../../sections/ContactSection";
import { useMounted } from "../../hooks/useMounted";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 1, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut" as const,
      delay: Math.min(delay, 0.04),
    },
  },
});

const initiatives = [
  {
    id: 1,
    n: "01",
    title: "E-Commerce Flow Optimization",
    desc: "Redesigned product catalog management and streamlined checkout experience, resulting in improved platform stability, faster page loads, and measurably higher customer satisfaction scores.",
    image: "/clients/elabd-ecommerce.svg",
  },
  {
    id: 2,
    n: "02",
    title: "Learning Management System",
    desc: "Custom-built LMS designed specifically for internal training programs, enabling HR and Sales teams to upskill employees efficiently and track professional development progress.",
    image: "/clients/elabd-lms.svg",
  },
  {
    id: 3,
    n: "03",
    title: "Coupon & Discount Management",
    desc: "Sophisticated promotional campaign system enabling targeted offers, seasonal discounts, and loyalty rewards that drive conversion rates and customer retention.",
    image: "/clients/elabd-coupons.svg",
  },
  {
    id: 4,
    n: "04",
    title: "Corporate Website Development",
    desc: "Designed a comprehensive corporate website presenting the company's history, products, values, and brand story through a modern digital experience.",
    image: "/clients/coperateWebsite.svg",
  },
];

const challengeSolutionPairs = [
  {
    number: "01",
    challengeTitle: "Unstable Digital Commerce Experience",
    challengeDescription:
      "ElAbd needed to improve the reliability and usability of its digital ordering experience as online demand grew.",
    challengeIcon: "list" as const,
    solutionTitle: "Optimized Customer Journey",
    solutionDescription:
      "IKEN improved the product browsing and checkout flow to create a faster, smoother, and more dependable e-commerce experience.",
    solutionIcon: "layers" as const,
    solutionAccent: "purple" as const,
  },
  {
    number: "02",
    challengeTitle: "Limited Internal Digital Enablement",
    challengeDescription:
      "HR and Sales teams needed a more structured way to train employees and track professional development across the organization.",
    challengeIcon: "clock" as const,
    solutionTitle: "Scalable Training Infrastructure",
    solutionDescription:
      "IKEN delivered a digital learning foundation that helped internal teams upskill employees and monitor training progress more efficiently.",
    solutionIcon: "zap" as const,
    solutionAccent: "blue" as const,
  },
  {
    number: "03",
    challengeTitle: "Slow Campaign Execution",
    challengeDescription:
      "Marketing and sales promotions required more flexibility to support targeted offers, seasonal campaigns, and loyalty-driven growth.",
    challengeIcon: "tag" as const,
    solutionTitle: "Configurable Promotion Operations",
    solutionDescription:
      "IKEN enabled ElAbd to manage campaigns with more control, making promotions easier to launch, adjust, and scale.",
    solutionIcon: "sliders" as const,
    solutionAccent: "orange" as const,
  },
  {
    number: "04",
    challengeTitle: "Disconnected Department Workflows",
    challengeDescription:
      "Technology needs extended beyond e-commerce, with HR, Sales, Marketing, Operations, and Customer Success requiring aligned digital support.",
    challengeIcon: "eye" as const,
    solutionTitle: "Embedded TaaS Collaboration",
    solutionDescription:
      "IKEN operated as an integrated technology partner, supporting multiple departments through a dedicated team aligned with ElAbd’s business priorities.",
    solutionIcon: "chart" as const,
    solutionAccent: "green" as const,
  },
];

function ElAbdLogo({ className = "h-12 w-auto" }: { className?: string }) {
  const { theme } = useTheme();
  const mounted = useMounted();
  const src =
    mounted && theme === "dark"
      ? "/clients/alabd-dark.svg"
      : "/clients/alabd-light.svg";

  return (
    <Image
      src={src}
      alt="ELAbd Patisserie brand logo"
      width={168}
      height={64}
      loading="lazy"
      className={`${className} object-contain`}
      style={{ width: "auto" }}
    />
  );
}

export default function ElAbdCaseStudy() {
  const shouldReduceMotion = useReducedMotion();
  const initiativesSectionRef = useRef<HTMLElement>(null);
  const [activeCard, setActiveCard] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInitiativeVisible, setIsInitiativeVisible] = useState(false);

  useEffect(() => {
    const section = initiativesSectionRef.current;
    if (!section || typeof IntersectionObserver === "undefined") {
      const frame = window.requestAnimationFrame(() =>
        setIsInitiativeVisible(true),
      );
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsInitiativeVisible(entry.isIntersecting),
      { threshold: 0.25 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldReduceMotion || isPaused || !isInitiativeVisible) return;

    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % initiatives.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isInitiativeVisible, isPaused, shouldReduceMotion]);
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
        <section
          id="hero"
          className="section-hero-y relative overflow-hidden border-b border-[var(--color-border-light)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,var(--color-brand-blue-glow),transparent)]" />
          <div className="site-container">
            <Breadcrumbs />

            {/* Mobile-only: badge + heading above the image */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(0)}
              className="mb-6 lg:hidden"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-border-brand)] bg-[var(--color-brand-blue-glow)] px-3.5 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-blue)]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-brand)]">
                  Case Study · TaaS
                </span>
              </div>
              <h1 className="text-4xl font-black leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-5xl">
                ELAbd
              </h1>
              <p className="mt-4 text-xl font-semibold leading-snug text-[var(--color-text-secondary)] sm:text-2xl">
                A Strategic TaaS Partnership Driving Digital Growth
              </p>
            </motion.div>

            <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12">
              {/* Text column — below image on mobile (order-2), left on desktop (lg:order-1) */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp(0)}
                className="order-2 min-w-0 lg:order-1"
              >
                {/* Desktop-only badge + heading */}
                <div className="mb-4 hidden items-center gap-2 rounded-full border border-[var(--color-border-brand)] bg-[var(--color-brand-blue-glow)] px-3.5 py-1.5 lg:inline-flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-blue)]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-brand)]">
                    Case Study · TaaS
                  </span>
                </div>
                <h1 className="mb-4 hidden text-4xl font-black leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:block lg:text-6xl">
                  ELAbd
                </h1>
                <p className="mb-5 hidden text-xl font-semibold leading-snug text-[var(--color-text-secondary)] sm:text-2xl lg:mb-6 lg:block">
                  A Strategic TaaS Partnership Driving Digital Growth
                </p>

                <p className="mb-6 max-w-lg text-base leading-relaxed text-[var(--color-text-secondary)] opacity-80 lg:mb-8">
                  ELAbd — Egypt's most celebrated pastry brand — partnered with
                  IKEN Technology as their dedicated development arm,
                  establishing a full TaaS model to accelerate digital
                  transformation.
                </p>

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
                      <span className="mt-1 text-sm font-bold text-[var(--color-text-primary)]">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="rounded-full bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-px hover:shadow-xl"
                  >
                    Start a Partnership
                  </Link>
                  <a
                    href="#results"
                    className="rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg-glass)] px-6 py-2.5 text-sm font-bold text-[var(--color-text-primary)] transition-all hover:border-[var(--color-border-brand)] hover:bg-[var(--color-bg-glass-strong)]"
                  >
                    See Results ↓
                  </a>
                </div>
              </motion.div>

              {/* Image column — on top on mobile (order-1), right on desktop (lg:order-2) */}
              <div className="order-1 lg:order-2">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp(0.12)}
                  className="relative mx-auto w-full max-w-[640px]"
                >
                  <div className="absolute -inset-8 rounded-full bg-[var(--color-brand-blue-glow)] blur-3xl" />
                  <div className="relative">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="select-none"
                    >
                      <Image
                        src="/clients/elabd-usecase-heroSection.svg"
                        alt="ELAbd Patisserie E-Commerce platform showcase"
                        width={820}
                        height={615}
                        className="h-auto w-full object-contain drop-shadow-2xl"
                        priority
                        sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(100vw - 3rem), (max-width: 1279px) 50vw, 640px"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FROM CHALLENGE TO SOLUTION ── */}
        <ChallengeSolutionSection
          pairs={challengeSolutionPairs}
          subtitle="Turning ElAbd’s digital growth needs into scalable platforms, smoother operations, and embedded technology delivery."
        />

        {/* ── KEY INITIATIVES ── */}
        <section
          ref={initiativesSectionRef}
          className="section-y relative overflow-hidden border-b border-[var(--color-border-light)]"
        >
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
              className="section-header"
            >
              <div className="section-eyebrow">
                <span className="inline-flex h-3 w-3 rounded-[2px] bg-[var(--color-brand-blue)]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-brand)]">
                  Delivered
                </span>
              </div>
              <h2 className="text-3xl font-black text-[var(--color-text-primary)] sm:text-4xl lg:text-[42px] leading-tight tracking-tight">
                Key Initiatives
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 items-center gap-8 md:gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
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
                        className={`card-pad group flex gap-4 rounded-[20px] border cursor-pointer select-none transition-all duration-300 sm:gap-5 ${
                          isActive
                            ? "border-[var(--color-brand-blue)]/35 bg-[var(--color-bg-glass-strong)]/70 shadow-[0_10px_30px_rgba(59,130,246,0.08)] scale-[1.02]"
                            : "border-[var(--color-border-light)]/60 bg-[var(--color-bg-card)]/50 backdrop-blur-md hover:-translate-y-0.5 hover:border-[var(--color-brand-blue)]/30 hover:bg-[var(--color-bg-glass-strong)]/60 hover:shadow-[0_10px_30px_rgba(59,130,246,0.08)]"
                        }`}
                      >
                        <span
                          className={`mt-0.5 text-3xl sm:text-4xl font-black tracking-tight tabular-nums select-none shrink-0 transition-colors duration-300 ${
                            isActive
                              ? "text-[var(--color-brand-blue)]/55"
                              : "text-[var(--color-brand-blue)]/20 group-hover:text-[var(--color-brand-blue)]/40"
                          }`}
                        >
                          {item.n}
                        </span>
                        <div className="flex flex-col">
                          <h3
                            className={`mb-1 text-base sm:text-[17px] font-bold transition-colors duration-300 ${
                              isActive
                                ? "text-[var(--color-text-brand)]"
                                : "text-[var(--color-text-primary)]"
                            }`}
                          >
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
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] bg-gradient-to-tr from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] opacity-[0.08] dark:opacity-[0.07] blur-[90px] rounded-full pointer-events-none" />

                <motion.div
                  initial={{ opacity: 1, y: 0, scale: 1 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full max-w-[560px] md:max-w-[620px] lg:max-w-full h-[340px] sm:h-[440px] lg:h-[540px] xl:h-[620px] flex justify-center items-center overflow-hidden"
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
                        className="project-showcase-shadow w-full h-full flex justify-center items-center"
                      >
                        <Image
                          src={initiatives[activeCard].image}
                          alt={initiatives[activeCard].title}
                          width={1600}
                          height={1216}
                          sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) 620px, (max-width: 1279px) 50vw, 620px"
                          loading="lazy"
                          className="w-full h-auto max-h-full object-contain select-none pointer-events-none"
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
        <section className="section-y border-b border-[var(--color-border-light)]">
          <div className="site-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp(0)}
              className="section-header"
            >
              <div className="section-eyebrow">
                <span className="inline-flex h-3 w-3 rounded-[2px] bg-[var(--color-brand-blue)]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Team Composition
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[var(--color-text-primary)] sm:text-4xl">
                TaaS Model in Action
              </h2>
              <p className="section-subtitle max-w-2xl">
                Our dedicated team operates with the same priorities and urgency
                as internal staff — enabling flexible scaling based on project
                demands and business cycles.
              </p>
            </motion.div>
            <div className="grid grid-gap sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  role: "Developers",
                  desc: "Full-stack engineers building robust, scalable solutions",
                },
                {
                  role: "UI/UX Designers",
                  desc: "Creating intuitive, beautiful user experiences",
                },
                {
                  role: "QA Engineers",
                  desc: "Ensuring reliability through comprehensive testing",
                },
                {
                  role: "Product Managers",
                  desc: "Aligning technology with business objectives",
                },
                {
                  role: "DevOps",
                  desc: "Maintaining secure, performant infrastructure",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.role}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp(i * 0.07)}
                  className="card-pad flex items-start gap-3 rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)]"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--color-border-brand)] bg-[var(--color-brand-blue-glow)] text-[var(--color-text-brand)]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path
                        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                        strokeLinecap="round"
                      />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[var(--color-text-primary)]">
                      {item.role}
                    </p>
                    <p className="text-xs text-[var(--color-text-secondary)]">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── IMPACT & RESULTS ── */}
        <section
          id="results"
          className="scroll-section section-y relative overflow-hidden border-b border-[var(--color-border-light)]"
        >
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
              className="section-header max-w-3xl"
            >
              <div className="section-eyebrow">
                <span className="inline-flex h-3 w-3 rounded-[2px] bg-[var(--color-brand-blue)]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-brand)]">
                  Outcomes
                </span>
              </div>
              <h2 className="text-3xl font-black text-[var(--color-text-primary)] sm:text-4xl lg:text-[42px] leading-tight tracking-tight">
                Impact &amp; Results
              </h2>
              <p className="section-subtitle text-sm opacity-85 sm:text-base">
                Measurable business outcomes across multiple dimensions,
                demonstrating the tangible value of the TaaS model in
                accelerating digital transformation.
              </p>
            </motion.div>

            {/* Split layout: metrics grid on left, chart on right */}
            <div className="grid grid-cols-1 items-stretch gap-8 md:gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
              {/* Left Side (2x2 Metric Cards Grid) */}
              <div className="w-full lg:col-span-6 xl:col-span-5">
                <div className="grid h-full grid-cols-2 gap-4 md:gap-6">
                  {[
                    {
                      v: "45%",
                      l: "Faster Time-to-Market",
                      sub: "New features deployed in half the time",
                    },
                    {
                      v: "30%",
                      l: "Order Volume Increase",
                      sub: "Following UI/UX enhancements and platform optimization",
                    },
                    {
                      v: "5+",
                      l: "Departments Supported",
                      sub: "E-Commerce, HR, Sales, Marketing, Operations",
                    },
                    {
                      v: "200+",
                      l: "Employees Trained",
                      sub: "Internal staff upskilled through the custom LMS",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={item.l}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp(i * 0.05)}
                      className="card-pad group flex min-h-[140px] h-full flex-col items-center justify-center rounded-[20px] border border-[var(--color-border-light)]/60 bg-[var(--color-bg-card)]/50 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-brand-blue)]/30 hover:bg-[var(--color-bg-glass-strong)]/60 hover:shadow-[0_10px_30px_rgba(59,130,246,0.06)] sm:min-h-[160px]"
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
                  className="card-pad group relative flex w-full flex-col justify-between overflow-hidden rounded-[24px] border border-[var(--color-border-light)]/60 bg-[var(--color-bg-card)]/40 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-[var(--color-border-brand)]/40"
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
                          {
                            label: "Feature Delivery Speed",
                            before: 50,
                            after: 80,
                          },
                          { label: "Platform Uptime", before: 65, after: 99 },
                          {
                            label: "Customer Satisfaction",
                            before: 72,
                            after: 89,
                          },
                        ].map((data) => (
                          <div
                            key={data.label}
                            className="flex flex-col items-center relative w-1/3 h-full justify-end group/bar"
                          >
                            {/* Visual Grouped Bars */}
                            <div className="flex items-end gap-1.5 sm:gap-2.5 h-full w-full justify-center pb-[2px]">
                              {/* Before Bar */}
                              <motion.div
                                initial={{ height: "0%" }}
                                whileInView={{ height: `${data.before}%` }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 0.95,
                                  ease: [0.16, 1, 0.3, 1],
                                  delay: 0.1,
                                }}
                                className="w-3.5 sm:w-5 md:w-6 bg-slate-400/20 dark:bg-slate-700/35 rounded-t-[4px] transition-all duration-300 group-hover/bar:bg-slate-400/30 dark:group-hover/bar:bg-slate-700/50"
                              />
                              {/* After Bar */}
                              <motion.div
                                initial={{ height: "0%" }}
                                whileInView={{ height: `${data.after}%` }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 0.95,
                                  ease: [0.16, 1, 0.3, 1],
                                  delay: 0.2,
                                }}
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
                        <div
                          key={data.label}
                          className="w-1/3 text-center px-1"
                        >
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
        <section className="section-y border-b border-[var(--color-border-light)]">
          <div className="site-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp(0)}
              className="section-header"
            >
              <div className="mb-2 inline-flex items-center gap-2 text-[var(--color-text-brand)]">
                <span className="inline-flex h-3 w-3 rounded-[2px] bg-[var(--color-brand-blue)]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Technology
                </span>
              </div>
              <h2 className="text-3xl font-black leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-[42px]">
                Technology Stack
              </h2>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                Enterprise-Grade Technology Foundation
              </p>
            </motion.div>

            {/* 3×2 Icon Card Grid */}
            <div className="grid grid-gap sm:grid-cols-2 lg:grid-cols-3">
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
                    style={{
                      boxShadow: `0 0 32px ${item.glowColor}, inset 0 0 20px ${item.glowColor}`,
                    }}
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
                        loading="lazy"
                        className="h-10 w-10 object-contain select-none"
                      />
                    </div>
                    {/* Title & Subtitle */}
                    <p className="text-base font-bold leading-tight text-[var(--color-text-primary)]">
                      {item.title}
                    </p>
                    <p className="mt-0.5 mb-3 text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--color-text-secondary)]">
                      {item.subtitle}
                    </p>
                    {/* Description */}
                    <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] flex-1">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL ── */}
        <section className="section-y border-b border-[var(--color-border-light)]">
          <div className="site-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp(0)}
              className="section-header"
            >
              <div className="mb-2.5 inline-flex items-center gap-2 text-[var(--color-text-brand)]">
                <span className="inline-flex h-3 w-3 rounded-[2px] bg-[var(--color-brand-blue)]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
                  Partnership
                </span>
              </div>
              <h2 className="text-3xl font-black leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-[42px]">
                What Our Client Says
              </h2>
              <p className="mt-2 text-[var(--color-text-secondary)]">
                Trusted by leading companies across multiple industries.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp(0.08)}
              className="card-pad relative overflow-hidden rounded-[28px] border border-[var(--color-border-light)] bg-[var(--color-bg-card)] shadow-2xl backdrop-blur-md"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[var(--color-brand-blue-glow)] blur-3xl" />
              <div className="relative z-10 grid gap-6 md:grid-cols-[0.85fr_1.25fr] md:items-center lg:gap-10">
                <div className="overflow-hidden rounded-[24px] border border-[var(--color-border-light)] bg-[var(--color-bg-main)]/70">
                  <Image
                    src="/testimonials/mohammed-assem.png"
                    alt="Temporary testimonial portrait"
                    width={520}
                    height={620}
                    sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) 35vw, 360px"
                    loading="lazy"
                    className="h-full max-h-[420px] w-full object-cover object-top"
                  />
                </div>
                <div>
                  <div className="mb-5 text-7xl font-black leading-none text-[var(--color-brand-blue)]/20">
                    “
                  </div>
                  <blockquote className="text-xl font-semibold leading-relaxed text-[var(--color-text-primary)] sm:text-2xl">
                    “Partnering with IKEN Technology gave us speed, flexibility,
                    and top-tier e-commerce expertise. They are not just a
                    vendor — they are part of our team.”
                  </blockquote>
                  <div className="mt-8 flex flex-wrap items-end justify-between gap-5">
                    <div>
                      <p className="text-base font-bold text-[var(--color-text-primary)]">
                        ELAbd Leadership
                      </p>
                      <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                        ELAbd Patisserie, Egypt
                      </p>
                    </div>
                    <ElAbdLogo className="h-14 w-auto" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <ContactSection />
    </div>
  );
}
