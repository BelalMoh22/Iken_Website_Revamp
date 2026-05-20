"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1);
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
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
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
    <div className="relative flex min-h-0 items-center overflow-hidden bg-[var(--color-bg-main)] home-section-y">
      
      {/* Background Graphic elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 h-[min(520px,85vw)] w-[min(520px,85vw)] translate-x-1/4 -translate-y-1/2 rounded-full bg-[var(--color-brand-blue-glow)] opacity-70 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[min(420px,75vw)] w-[min(420px,75vw)] -translate-x-1/4 translate-y-1/4 rounded-full bg-[var(--color-brand-blue-glow)] opacity-40 blur-[90px]" />
      </div>

      <div className="site-container relative z-10 h-full">
        
        {/* Section Header */}
        <div className="mb-6 flex flex-col justify-between gap-5 sm:mb-8 md:flex-row md:items-end md:gap-6">
          <div className="max-w-2xl">
            <h2 className="mb-2 text-3xl font-light tracking-tight text-[var(--color-text-primary)] sm:mb-3 sm:text-4xl lg:text-5xl">
              Trusted by <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)]">Visionaries</span>
            </h2>
            <p className="text-sm font-light leading-relaxed text-[var(--color-text-secondary)] sm:text-base lg:text-lg">
              Discover how industry leaders leverage our solutions to transform their operations and accelerate growth across the region.
            </p>
          </div>
          
          {/* Top Navigation */}
          <div className="flex shrink-0 items-center gap-3 sm:gap-4">
            <button
              onClick={handlePrev}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg-glass)] text-[var(--color-text-secondary)] transition-all duration-300 hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg-main)] hover:border-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-translate-x-1"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <div className="hidden px-2 font-mono text-sm tracking-widest text-[var(--color-text-muted)] sm:block">
              <motion.span 
                key={currentIndex}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="inline-block text-[var(--color-text-primary)]"
              >
                0{currentIndex + 1}
              </motion.span> 
              <span className="mx-2 opacity-50">/</span> 
              0{TESTIMONIALS.length}
            </div>
            <button
              onClick={handleNext}
              className="group flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-brand-blue)] text-white transition-all duration-300 hover:bg-[var(--color-brand-blue)]/80 hover:shadow-[0_2px_14px_var(--color-brand-blue-glow)] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]/50"
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="relative w-full min-h-[280px] overflow-hidden rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] shadow-[0_6px_28px_rgba(0,0,0,0.07)] backdrop-blur-xl sm:min-h-[300px] lg:h-[360px] lg:min-h-[360px] lg:rounded-3xl dark:shadow-[0_10px_36px_rgba(0,0,0,0.28)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="flex min-h-[260px] w-full flex-col sm:min-h-[280px] lg:h-full lg:min-h-0 lg:flex-row"
              initial={{ opacity: 0, x: slideDirection * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: slideDirection * -40, transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              
              {/* Photo — compact on small screens, editorial on desktop */}
              <div className="relative flex h-[100px] w-full shrink-0 items-center justify-center overflow-hidden bg-[var(--color-bg-main)] sm:h-[120px] md:h-[140px] lg:h-full lg:w-[38%] xl:w-[36%]">
                <motion.div
                  initial={{ scale: 1.03, x: slideDirection * 12, filter: "brightness(0.98)" }}
                  animate={{ scale: 1, x: 0, filter: "brightness(1.02)" }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                  className="relative h-full w-full max-h-full px-3 py-2 sm:px-5 sm:py-3 lg:px-4 lg:py-6"
                >
                  <Image
                    src={TESTIMONIALS[currentIndex].image}
                    alt={TESTIMONIALS[currentIndex].name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 36vw"
                    className="object-contain object-center"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[var(--color-bg-card)]/70 to-transparent lg:hidden" />
                </motion.div>
              </div>

              {/* Quote & attribution */}
              <div className="relative z-20 flex min-h-0 w-full flex-1 flex-col justify-between p-4 sm:p-6 lg:w-[62%] lg:p-9 xl:w-[64%] xl:p-10">
                
                <motion.div 
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08, duration: 0.45, ease: "easeOut" }}
                  className="pointer-events-none absolute right-6 top-4 hidden text-5xl font-serif leading-none text-[var(--color-text-primary)] opacity-[0.06] select-none sm:block md:text-6xl lg:right-10 lg:top-8 lg:text-7xl xl:text-8xl"
                >
                  &rdquo;
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex max-w-3xl flex-1 flex-col justify-center"
                >
                  <p className="text-pretty text-sm font-light leading-relaxed text-[var(--color-text-secondary)] sm:text-base sm:leading-relaxed md:text-lg lg:mb-2 lg:text-xl lg:leading-[1.55]">
                    &ldquo;{TESTIMONIALS[currentIndex].quote}&rdquo;
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32, duration: 0.45, ease: "easeOut" }}
                  className="mt-4 flex items-center justify-between gap-3 border-t border-[var(--color-border-light)] pt-3 sm:mt-5 sm:gap-4 sm:pt-4 lg:mt-auto lg:pt-5"
                >
                  <div className="min-w-0">
                    <h3 className="mb-0.5 text-sm font-medium tracking-wide text-[var(--color-text-primary)] sm:text-base md:text-lg">
                      {TESTIMONIALS[currentIndex].name}
                    </h3>
                    <p className="text-xs font-medium text-[var(--color-text-brand)] sm:text-sm">
                      {TESTIMONIALS[currentIndex].title}
                    </p>
                  </div>
                </motion.div>

              </div>
              
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Bottom Pager Indicators */}
        <div className="mt-4 flex justify-center gap-2.5 sm:mt-5 sm:gap-3">
          {TESTIMONIALS.map((_, idx) => (
             <button
             key={idx}
             onClick={() => { setCurrentIndex(idx); startTimer(); }}
             className={`h-1.5 rounded-full transition-all duration-500 ${
               idx === currentIndex ? "w-9 bg-[var(--color-brand-blue)] sm:w-10" : "w-3.5 bg-[var(--color-bg-glass-strong)] hover:bg-[var(--color-text-muted)] sm:w-4"
             }`}
             aria-label={`Go to slide ${idx + 1}`}
           />
          ))}
        </div>

      </div>
    </div>
  );
}
