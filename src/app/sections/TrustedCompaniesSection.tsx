"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const featuredClients = [
  { name: "EFG Hermes", logo: "/clients/efg-dark.png", lightLogo: "/clients/efg-light.png", alt: "EFG Hermes logo" },
  { name: "Valu", logo: "/clients/valu-dark.svg", lightLogo: "/clients/valu-light.svg", alt: "Valu logo", customSize: "w-[75%] h-[75%]" },
  { name: "Balad", logo: "/clients/balad-dark.svg", lightLogo: "/clients/balad-light.svg", alt: "Balad logo", customSize: "w-[80%] h-[80%]" },
  { name: "ELAbd Patisserie", logo: "/clients/alabd-dark.svg", lightLogo: "/clients/alabd-light.svg", alt: "ELAbd Patisserie logo" },
  { name: "Orders&More", logo: "/clients/o-and-m-dark.svg", lightLogo: "/clients/o-and-m-light.svg", alt: "Orders&More logo" },
  { name: "Contact Cars", logo: "/clients/contactcars-dark.svg", lightLogo: "/clients/contactcars-light.svg", alt: "Contact Cars logo" },
  { name: "Moqawalat", logo: "/clients/moqawlat-dark.png", lightLogo: "/clients/moqawlat-light2.png", alt: "Moqawalat logo" },
  { name: "Jamjoom Pharma", logo: "/clients/Jamjoom-dark.svg", lightLogo: "/clients/Jamjoom-light.svg", alt: "Jamjoom Pharma logo" },
  { name: "Furn", logo: "/clients/furn-dark.svg", lightLogo: "/clients/furn-light.svg", alt: "Furn logo" },
  { name: "Alaaqar", logo: "/clients/alaaqar-dark.svg", lightLogo: "/clients/alaaqar-light1.png", alt: "Alaaqar logo" },
];

const TESTIMONIALS = [
  {
    name: "Youssef Abdelrahman",
    title: "Corporate Senior Project Manager, EFG Hermes",
    image: "/testimonials/youssef-abdelrahman.png",
    quote:
      "We have had the pleasure of utilizing the conference system developed by IKEN Technology for several years now, and it has been an absolute game-changer for our organization.",
    company: "EFG Hermes",
  },
  {
    name: "Mohammed Assem",
    title: "CTO & Co-founder, Balad",
    image: "/testimonials/mohammed-assem.png",
    quote:
      "IKEN Technology has truly exceeded our expectations. Their customized software solutions have streamlined our operations and provided a significant boost in productivity.",
    company: "Balad",
  },
  {
    name: "Waleed Kamel",
    title: "Managing Director, contactcars.com",
    image: "/testimonials/waleed-kamel.png",
    quote:
      "We have collaborated with IKEN for a decade as a third-party software provider, successfully executing numerous projects across various technology platforms and business domains.",
    company: "contactcars.com",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 14,
    },
  },
};

export function TrustedCompaniesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1);

  // Mobile Logo Slider state - showing 2x2 grid (4 logos at a time)
  const [logoPageIndex, setLogoPageIndex] = useState(0);
  const totalLogoPages = Math.ceil(featuredClients.length / 4);

  useEffect(() => {
    const logoTimer = setInterval(() => {
      setLogoPageIndex((prev) => (prev + 1) % totalLogoPages);
    }, 2000);
    return () => clearInterval(logoTimer);
  }, [totalLogoPages]);

  const getVisibleLogos = () => {
    const startIndex = logoPageIndex * 4;
    const logos = [];
    for (let i = 0; i < 4; i++) {
      const targetIndex = (startIndex + i) % featuredClients.length;
      logos.push(featuredClients[targetIndex]);
    }
    return logos;
  };
  const visibleLogos = getVisibleLogos();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setSlideDirection(1);
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
  }, []);

  // Auto-advance
  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const handleNext = () => {
    setSlideDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    startTimer();
  };

  const handlePrev = () => {
    setSlideDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    startTimer();
  };

  return (
    <section
      id="testimonials"
      className="scroll-section home-section-y relative overflow-hidden bg-[var(--color-bg-main)]"
    >
      {/* Background Graphic elements */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Subtle Ambient Section Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-main)] via-[var(--color-brand-blue-glow)]/10 to-[var(--color-bg-main)] opacity-70" />

        {/* Central Core Glowing Accent */}
        <div className="absolute left-1/2 top-1/2 h-[min(600px,80vw)] w-[min(900px,100vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-brand-blue-glow)] opacity-30 blur-[130px]" />

        {/* Subtle Radial Glows in Corners */}
        <div className="absolute left-[10%] top-[15%] h-56 w-56 rounded-full bg-[var(--color-brand-cyan-glow)] opacity-20 blur-[80px]" />
        <div className="absolute right-[10%] bottom-[15%] h-56 w-56 rounded-full bg-[var(--color-brand-blue-glow)] opacity-25 blur-[90px]" />

        {/* Slight vignette around edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,transparent_40%,var(--color-bg-main)_100%)] opacity-80" />
      </div>

      <div className="site-container relative z-10">

        {/* Header Area */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto flex flex-col items-center text-center"
        >
          <span className="text-[12px] font-medium uppercase tracking-[4px] text-[var(--color-brand-blue)]">
            PARTNERSHIP
          </span>
          <h2 className="mt-4 text-[32px] font-semibold leading-[1.1] tracking-tight text-[var(--color-text-primary)] md:text-[42px] lg:text-[56px]">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">
              Leading Companies
            </span>
          </h2>
          <p className="mt-5 max-w-[700px] text-[15px] font-medium leading-relaxed text-[var(--color-text-secondary)] opacity-80 md:text-[17px]">
            Discover how industry leaders leverage our solutions to transform operations and accelerate growth.
          </p>
        </motion.div>

        {/* Logos Area */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          id="clients"
          className="scroll-section mx-auto mt-8 w-full max-w-6xl sm:mt-10 lg:mt-16"
        >
          {/* Desktop/Tablet Grid View */}
          <div className="hidden sm:grid sm:grid-cols-3 sm:gap-x-14 sm:gap-y-10 lg:grid-cols-5 lg:gap-x-10 lg:gap-y-10 place-items-center">
            {featuredClients.map((client) => (
              <motion.div
                key={client.name}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                className="group relative flex aspect-[2/1] w-full max-w-[160px] items-center justify-center transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-xl bg-[var(--color-brand-blue)] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-10" />

                <div className="relative flex h-full w-full items-center justify-center">
                  <div className={`relative transition-transform duration-500 ease-out group-hover:scale-105 ${client.customSize || "h-full w-full"}`}>
                    {/* Dark Mode Logo */}
                    <Image
                      src={client.logo}
                      alt={client.alt}
                      fill
                      sizes="(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 160px"
                      className="hidden object-contain opacity-70 transition-all duration-300 group-hover:opacity-100 dark:block"
                    />
                    {/* Light Mode Logo */}
                    <Image
                      src={client.lightLogo || client.logo}
                      alt={client.alt}
                      fill
                      sizes="(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 160px"
                      className="block object-contain opacity-70 transition-all duration-300 group-hover:opacity-100 dark:hidden"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Slider View (2x2 grid of logos visible at a time) */}
          <div className="block sm:hidden relative w-full overflow-hidden px-2 py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={logoPageIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 grid-rows-2 place-items-center gap-x-8 gap-y-6"
              >
                {visibleLogos.map((client, idx) => (
                  <div
                    key={`${client.name}-${idx}`}
                    className="group relative flex aspect-[2/1] w-full max-w-[130px] items-center justify-center transition-all duration-300"
                  >
                    <div className="relative flex h-full w-full items-center justify-center">
                      <div className={`relative transition-transform duration-500 ease-out ${client.customSize || "h-full w-full"}`}>
                        {/* Dark Mode Logo */}
                        <Image
                          src={client.logo}
                          alt={client.alt}
                          fill
                          sizes="40vw"
                          className="hidden object-contain opacity-70 transition-all duration-300 group-hover:opacity-100 dark:block"
                        />
                        {/* Light Mode Logo */}
                        <Image
                          src={client.lightLogo || client.logo}
                          alt={client.alt}
                          fill
                          sizes="40vw"
                          className="block object-contain opacity-70 transition-all duration-300 group-hover:opacity-100 dark:hidden"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

          </div>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mx-auto mt-8 w-full max-w-6xl sm:mt-10 lg:mt-[50px]"
        >
          <div className="relative min-h-[320px] w-full overflow-hidden rounded-[32px] border border-[rgba(15,23,42,0.06)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,250,252,0.98))] shadow-[0_8px_32px_rgba(0,0,0,0.07)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.10)] lg:min-h-[420px] dark:border-[rgba(255,255,255,0.06)] dark:bg-[linear-gradient(180deg,rgba(2,6,23,0.95),rgba(3,7,18,0.98))] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_16px_48px_rgba(59,130,246,0.08)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="flex w-full flex-col lg:h-[420px] lg:flex-row"
                initial={{ opacity: 0, x: slideDirection * 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{
                  opacity: 0,
                  x: slideDirection * -30,
                  transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
                }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Left Side: Client Image */}
                <div className="relative flex h-[180px] w-full shrink-0 items-center justify-center overflow-hidden bg-[rgba(248,250,252,0.8)] sm:h-[220px] lg:h-full lg:w-[38%] dark:bg-[rgba(2,6,23,0.9)]">
                  <motion.div
                    initial={{ scale: 1.03, filter: "brightness(0.95)" }}
                    animate={{ scale: 1, filter: "brightness(1.05)" }}
                    transition={{ duration: 1.1, ease: "easeOut" }}
                    className="relative h-full w-full px-4 py-3 lg:px-0 lg:py-0"
                  >
                    <Image
                      src={TESTIMONIALS[currentIndex].image}
                      alt={TESTIMONIALS[currentIndex].name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 35vw"
                      className="object-contain object-center"
                      priority
                    />
                    {/* Soft fade for horizontal split (desktop only) */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-16 bg-gradient-to-l from-[rgba(248,250,252,0.98)] to-transparent lg:block dark:from-[rgba(3,7,18,0.98)]" />
                  </motion.div>
                </div>

                {/* Right Side: Quote & Content */}
                <div className="relative z-20 flex w-full flex-1 flex-col justify-between p-5 sm:p-10 lg:px-14 lg:py-12 xl:px-[56px] xl:py-12">
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08, duration: 0.45, ease: "easeOut" }}
                    className="pointer-events-none absolute right-6 top-6 select-none font-serif text-[72px] leading-none text-[rgba(15,23,42,0.90)] opacity-100 dark:text-[rgba(255,255,255,0.90)] lg:right-10 lg:top-8 hidden sm:block"
                  >
                    &rdquo;
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex max-w-[700px] flex-1 flex-col justify-center pt-2 lg:pt-0"
                  >
                    <p className="max-w-[720px] text-pretty text-[15px] font-normal leading-[1.7] text-[rgba(15,23,42,0.72)] sm:text-[20px] lg:text-[22px] lg:mb-8 dark:text-[rgba(255,255,255,0.72)]">
                      &ldquo;{TESTIMONIALS[currentIndex].quote}&rdquo;
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.32, duration: 0.45, ease: "easeOut" }}
                    className="mt-6 flex flex-col gap-1 pt-6 lg:mt-auto border-t border-[rgba(15,23,42,0.08)] dark:border-[rgba(255,255,255,0.08)]"
                  >
                    <h3 className="mb-0.5 text-[16px] sm:text-[20px] font-bold tracking-wide text-[#0F172A] dark:text-white">
                      {TESTIMONIALS[currentIndex].name}
                    </h3>
                    <p className="text-[13px] sm:text-[16px] font-medium text-[var(--color-brand-blue)]">
                      {TESTIMONIALS[currentIndex].title}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Slider Navigation */}
          <div
            className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:mt-8 lg:mt-10"
            role="group"
            aria-label="Testimonial slider navigation"
          >
            <button
              onClick={handlePrev}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-border-brand)] hover:text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]/50"
              aria-label="Previous testimonial"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:-translate-x-1"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <div className="flex min-w-[64px] select-none items-baseline justify-center gap-1 font-mono text-sm tracking-wider text-[var(--color-text-primary)]" aria-live="polite">
              <motion.span
                key={currentIndex}
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="inline-block font-bold"
              >
                {String(currentIndex + 1).padStart(2, "0")}
              </motion.span>
              <span className="mx-0.5 text-[var(--color-text-muted)]">/</span>
              <span className="font-medium text-[var(--color-text-muted)]">
                {String(TESTIMONIALS.length).padStart(2, "0")}
              </span>
            </div>

            <div className="flex items-center justify-center gap-2.5" aria-label="Testimonial slides">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => { setCurrentIndex(idx); startTimer(); }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex
                      ? "w-8 bg-[var(--color-brand-blue)]"
                      : "w-3 bg-[var(--color-bg-glass-strong)] hover:bg-[var(--color-text-muted)]"
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                  aria-current={idx === currentIndex ? "true" : undefined}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="group flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-brand-blue)] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-blue)]/80 hover:shadow-[0_2px_14px_var(--color-brand-blue-glow)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]/50"
              aria-label="Next testimonial"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
