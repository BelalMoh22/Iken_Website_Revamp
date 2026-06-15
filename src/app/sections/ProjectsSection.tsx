"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import styles from "./ProjectsSection.module.css";

const fade = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

interface Product {
  title: string;
  image: string;
  logo?: string;
  href?: string;
}

const products: Product[] = [
  {
    title: "ELAbd Patisserie",
    image: "/products/Elabd.svg",
    href: "/projects/elabd",
  },
  {
    title: "Contact Cars",
    image: "/products/contactcars.svg",
  },
  {
    title: "Orders & More",
    image: "/products/O&M.svg",
    href: "/projects/orders-and-more",
  },
  {
    title: "Moqawalat",
    image: "/products/moqawalat.svg",
  },
];

export function ProjectsSection() {
  const shouldReduceMotion = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const getStep = useCallback(() => {
    const first = slideRefs.current[0];
    const second = slideRefs.current[1];
    if (!first) return 0;
    return second ? second.offsetLeft - first.offsetLeft : first.offsetWidth;
  }, []);

  const scrollToIndex = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const viewport = viewportRef.current;
      const step = getStep();
      if (!viewport || !step) return;
      viewport.scrollTo({ left: index * step, behavior });
    },
    [getStep],
  );

  const goToSlide = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const next = (index + products.length) % products.length;
      setCurrentSlide(next);
      scrollToIndex(next, behavior);
    },
    [scrollToIndex],
  );

  const handleScroll = useCallback(() => {
    if (rafRef.current !== null) {
      window.cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = window.requestAnimationFrame(() => {
      const viewport = viewportRef.current;
      const step = getStep();
      if (!viewport || !step) return;

      const nextIndex = Math.min(
        products.length - 1,
        Math.max(0, Math.round(viewport.scrollLeft / step)),
      );
      setCurrentSlide(nextIndex);
    });
  }, [getStep]);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || typeof IntersectionObserver === "undefined") {
      const frame = window.requestAnimationFrame(() => setIsVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.35 },
    );

    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldReduceMotion || isPaused || !isVisible) return;

    const timer = window.setInterval(() => {
      setCurrentSlide((current) => {
        const next = (current + 1) % products.length;
        scrollToIndex(next);
        return next;
      });
    }, 3000);

    return () => window.clearInterval(timer);
  }, [isPaused, isVisible, scrollToIndex, shouldReduceMotion]);

  return (
    <motion.section
      id="work"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fade}
      transition={{ duration: 0.45 }}
      className="scroll-section relative overflow-hidden bg-[var(--color-bg-main)] home-section-y"
    >
      {/* Background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[var(--color-brand-blue)] opacity-[0.1] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <div className="site-container section-header mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row md:items-end">
          <div className="space-y-3 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-text-brand)]">
              Selected Projects
            </p>
            <h2 className="text-[1.78rem] font-semibold leading-[1.08] tracking-tight text-[var(--color-text-primary)] sm:text-[2.1rem] lg:text-[2.35rem]">
              Results We{" "}
              <span className="bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">
                Delivered
              </span>
            </h2>
          </div>
        </div>

        <div className="site-container mx-auto w-full max-w-7xl px-0 sm:px-2">
          <div
            ref={viewportRef}
            className={`${styles.carousel} overflow-x-auto scroll-smooth outline-none [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden`}
            role="region"
            aria-label="Projects carousel"
            aria-roledescription="carousel"
            tabIndex={0}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            onScroll={handleScroll}
          >
            <div className={styles.track}>
              {products.map((project, idx) => {
                const prevIndex = (currentSlide - 1 + products.length) % products.length;
                const nextIndex = (currentSlide + 1) % products.length;
                const isActive = idx === currentSlide;
                const isPrev = idx === prevIndex;
                const isNext = idx === nextIndex;

                return (
              <div
                key={project.title}
                ref={(node) => {
                  slideRefs.current[idx] = node;
                }}
                className={`${styles.slide} ${
                  isActive ? styles.activeSlide : ""
                } ${isPrev ? styles.prevSlide : ""} ${isNext ? styles.nextSlide : ""}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${idx + 1} of ${products.length}: ${project.title}`}
              >
                <article className={`${styles.card} relative mx-auto w-full max-w-[min(360px,calc(100vw-3rem))] overflow-hidden rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] shadow-[0_6px_22px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:shadow-[0_8px_28px_rgba(0,0,0,0.28)] sm:max-w-[360px]`}>
                  <div className="relative h-64 overflow-hidden">
                    {project.logo ? (
                      <div className="relative h-full w-full bg-white">
                        <Image
                          src={project.logo}
                          alt={project.title}
                          fill
                          sizes="(max-width: 767px) min(360px, calc(100vw - 3rem)), 360px"
                          loading="lazy"
                          className="object-contain p-8"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(248,250,252,0.08)_100%)]" />
                      </div>
                    ) : (
                      <>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 767px) min(360px, calc(100vw - 3rem)), 360px"
                          loading="lazy"
                          className="object-cover scale-[1.08] origin-center"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(6,12,24,0.18)_100%)]" />
                      </>
                    )}
                  </div>
                  <div className="flex items-center justify-between p-5">
                    <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text-primary)]">
                      {project.title}
                    </h3>
                    {project.href && (
                      <Link
                        href={project.href}
                        className="relative z-20 inline-flex h-9 shrink-0 touch-manipulation items-center justify-center whitespace-nowrap rounded-full border border-[var(--color-border-brand)] bg-[var(--color-brand-blue-glow)] px-4 text-xs font-semibold leading-none text-[var(--color-text-brand)] transition-all hover:bg-[var(--color-brand-blue-glow)]/20"
                      >
                        View Case Study
                      </Link>
                    )}
                  </div>
                </article>
              </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="site-container mt-6 flex flex-wrap items-center justify-center gap-4 px-1 sm:mt-8 sm:px-0" role="group" aria-label="Project slider navigation">
          <button
            onClick={() => goToSlide(currentSlide - 1)}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-border-brand)] hover:text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]/50"
            aria-label="Previous project"
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

          <div className="flex items-center justify-center gap-2.5" aria-label="Project slides">
            {products.map((project, idx) => (
              <button
                key={project.title}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? "w-8 bg-[var(--color-brand-blue)]"
                    : "w-3 bg-[var(--color-bg-glass-strong)] hover:bg-[var(--color-text-muted)]"
                }`}
                aria-label={`Go to project slide ${idx + 1}`}
                aria-current={idx === currentSlide ? "true" : undefined}
              />
            ))}
          </div>

          <button
            onClick={() => goToSlide(currentSlide + 1)}
            className="group flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-brand-blue)] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-blue)]/80 hover:shadow-[0_2px_14px_var(--color-brand-blue-glow)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]/50"
            aria-label="Next project"
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

        <p className="site-container mx-auto mt-8 max-w-4xl px-0 text-center text-base font-medium leading-relaxed text-[var(--color-text-secondary)] md:mt-10 sm:text-xl">
          We engineer high-performance digital products and scalable platforms
          that deliver measurable business impact—from rapid-growth startups to
          global enterprises.
        </p>
      </div>
    </motion.section>
  );
}
