"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const services = [
  {
    tag: "Product Development",
    title: "PRODUCT\nDEVELOPMENT",
    desc: "Turn business ideas into clear, validated product roadmaps with measurable milestones.",
    image: "/service/product-discovery-validated-roadmaps.png",
  },
  {
    tag: "Custom Solutions",
    title: "CUSTOM\nSOLUTIONS",
    desc: "Tailored software solutions built to solve your unique business challenges and requirements.",
    image: "/service/custom-software-business-solutions.png",
  },
  {
    tag: "Web & Mobile Apps",
    title: "WEB &\nMOBILE APPS",
    desc: "Cross-platform applications with seamless, high-performance experiences for customers and teams.",
    image: "/service/web-mobile-apps-cross-platform.png",
  },
  {
    tag: "E-Commerce Solutions",
    title: "E-COMMERCE\nSOLUTIONS",
    desc: "Innovative e-commerce platforms that drive online business growth and increase conversions.",
    image: "/service/ecommerce-solutions-growth-conversions.png",
  },
  {
    tag: "Maintenance & Support",
    title: "MAINTENANCE\n& SUPPORT",
    desc: "Ongoing assistance and monitoring to keep your products secure, stable, and performing optimally.",
    image: "/service/maintenance-support-secure-stable.png",
  },
  {
    tag: "Team As A Service",
    title: "TEAM AS\nA SERVICE",
    desc: "Dedicated squads that plan, build, and continuously improve your product pipeline.",
    image: "/service/team-as-a-service-dedicated-squads.png",
  },
];

function ServiceCard({ s, priority = false }: { s: (typeof services)[0]; priority?: boolean }) {
  return (
    <article
      tabIndex={0}
      className="group relative aspect-[1/1.02] w-full cursor-pointer overflow-hidden rounded-2xl border border-black/5 bg-slate-100 shadow-[0_18px_50px_rgba(15,23,42,0.12)] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-blue)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg-main)] sm:aspect-[1/1.04] md:aspect-[1/1.06] lg:aspect-[1/1.2] dark:border-white/10 dark:bg-slate-900 dark:shadow-[0_22px_65px_rgba(0,0,0,0.42)]"
      aria-label={s.tag}
    >
      <Image
        src={s.image}
        alt={s.tag}
        fill
        sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc((100vw - 6.5rem) / 2), 430px"
        className="h-full w-full object-cover object-center transition-transform duration-700 ease-out transform-gpu group-hover:scale-[1.04] group-focus:scale-[1.04]"
        priority={priority}
        quality={100}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.01)_0%,rgba(2,6,23,0.08)_46%,rgba(2,6,23,0.54)_100%)]" />

      <div className="absolute inset-x-0 bottom-0 z-20 px-5 pb-6 pt-16 text-white transition-[background] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-[radial-gradient(ellipse_at_bottom_left,rgba(2,6,23,0.36)_0%,rgba(2,6,23,0.18)_36%,rgba(2,6,23,0.04)_60%,transparent_80%)] group-focus:bg-[radial-gradient(ellipse_at_bottom_left,rgba(2,6,23,0.36)_0%,rgba(2,6,23,0.18)_36%,rgba(2,6,23,0.04)_60%,transparent_80%)] sm:px-6 sm:pb-7">
        <h3 className="m-0 whitespace-pre-line text-lg font-extrabold uppercase leading-[1] tracking-wide text-white [text-shadow:0_2px_22px_rgba(2,6,23,0.76)] sm:text-xl xl:text-[1.45rem]">
          {s.title}
        </h3>

        <div className="pointer-events-none mt-3 grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus:grid-rows-[1fr] group-focus:opacity-100">
          <div className="min-h-0 overflow-hidden">
            <p className="m-0 w-full translate-y-6 text-sm font-medium leading-relaxed text-white/90 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [text-shadow:0_2px_16px_rgba(2,6,23,0.72)] group-hover:translate-y-0 group-focus:translate-y-0 sm:text-[0.95rem]">
              {s.desc}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function NavArrow({
  direction,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  const isPrev = direction === "prev";
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-main)] ${
        isPrev
          ? "border-[var(--color-border-light)] bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] hover:enabled:-translate-y-0.5 hover:enabled:border-[var(--color-border-brand)] hover:enabled:text-[var(--color-text-primary)] disabled:cursor-not-allowed disabled:opacity-35"
          : "border-transparent bg-[var(--color-brand-blue)] text-white shadow-md shadow-[var(--color-brand-blue-glow)] hover:enabled:-translate-y-0.5 hover:enabled:shadow-lg hover:enabled:shadow-[var(--color-brand-blue-glow)] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
      }`}
      aria-label={isPrev ? "Previous service" : "Next service"}
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
        className="transition-transform duration-300"
      >
        {isPrev ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
      </svg>
    </button>
  );
}

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const viewportRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);

  const getStep = useCallback(() => {
    const first = slideRefs.current[0];
    const second = slideRefs.current[1];
    if (!first) return 0;
    return second ? second.offsetLeft - first.offsetLeft : first.offsetWidth;
  }, []);

  const totalSlides = services.length;
  const maxIndex = Math.max(0, totalSlides - slidesPerView);
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
      const nextSlidesPerView = window.innerWidth >= 768 ? 2 : 1;
      setSlidesPerView(nextSlidesPerView);
      setActiveIndex((current) => {
        const nextMaxIndex = Math.max(0, services.length - nextSlidesPerView);
        const next = Math.min(current, nextMaxIndex);
        if (next !== current) {
          window.requestAnimationFrame(() => scrollToIndex(next, "auto"));
        }
        return next;
      });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [scrollToIndex]);

  const navigate = useCallback(
    (dir: -1 | 1) => {
      setActiveIndex((i) => {
        const next = Math.min(maxIndex, Math.max(0, i + dir));
        scrollToIndex(next);
        return next;
      });
    },
    [maxIndex, scrollToIndex],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        navigate(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        navigate(1);
      }
    },
    [navigate],
  );

  const handleScroll = useCallback(() => {
    if (rafRef.current !== null) {
      window.cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = window.requestAnimationFrame(() => {
      const viewport = viewportRef.current;
      const step = getStep();
      if (!viewport || !step) return;

      const nextIndex = Math.min(maxIndex, Math.max(0, Math.round(viewport.scrollLeft / step)));
      setActiveIndex(nextIndex);
    });
  }, [getStep, maxIndex]);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    let startX = 0;
    let startY = 0;
    let isScrolling: "vertical" | "horizontal" | null = null;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 1) return;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isScrolling = null;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 1) return;

      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;

      const diffX = currentX - startX;
      const diffY = currentY - startY;

      if (isScrolling === null) {
        const absX = Math.abs(diffX);
        const absY = Math.abs(diffY);

        if (absX > 6 || absY > 6) {
          if (absY > absX) {
            isScrolling = "vertical";
          } else {
            isScrolling = "horizontal";
          }
        }
      }

      // Prioritize vertical scrolling: do not preventDefault and let native scrolling happen
      if (isScrolling === "vertical") {
        return;
      }
    };

    viewport.addEventListener("touchstart", handleTouchStart, { passive: true });
    viewport.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      viewport.removeEventListener("touchstart", handleTouchStart);
      viewport.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <section
      id="services"
      className="scroll-section home-section-y relative overflow-hidden bg-[var(--color-bg-main)] text-[var(--color-text-primary)]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-72 w-[min(720px,90vw)] -translate-x-1/2 rounded-full bg-[var(--color-brand-blue-glow)] blur-[110px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-light)] to-transparent" />
      </div>

      <div className="site-container relative">
        <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-start lg:gap-10 xl:gap-12">
          <div className="flex items-start">
            <div className="w-full max-w-[31rem] pt-1">
              <div className="mb-6 inline-flex items-center gap-2 text-[var(--color-text-brand)]">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-current" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.22em]">
                  Our Expertise
                </span>
              </div>

              <h2 className="m-0 max-w-[11ch] text-4xl font-semibold leading-[1.02] tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-[3.45rem]">
                WE PROVIDE{" "}
                <span className="bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">
                  GREAT IT SOLUTIONS
                </span>
              </h2>

              <p className="m-0 mt-5 max-w-[27rem] text-base leading-[1.75] text-[var(--color-text-secondary)] sm:text-lg">
                Scalable engineering teams and strategic product development
                to transform your business goals into digital reality. Built for
                modern performance and growth.
              </p>

            </div>
          </div>

          <div className="min-w-0 lg:pt-1">
            <div
              ref={viewportRef}
              className="min-w-0 touch-pan-x touch-pan-y overflow-x-auto overscroll-x-contain scroll-smooth outline-none [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              role="region"
              aria-label="Services carousel"
              aria-roledescription="carousel"
              tabIndex={0}
              onKeyDown={handleKeyDown}
              onScroll={handleScroll}
            >
              <div className="flex snap-x snap-proximity gap-4 scroll-px-4 sm:gap-5 sm:scroll-px-6 lg:snap-mandatory lg:gap-6 xl:gap-8">
                {services.map((s, i) => (
                  <div
                    ref={(node) => {
                      slideRefs.current[i] = node;
                    }}
                    key={s.tag}
                    className="min-w-0 shrink-0 basis-[74%] max-w-[17.5rem] snap-start min-[390px]:basis-[70%] min-[390px]:max-w-[18.75rem] sm:basis-[52%] sm:max-w-[20rem] md:basis-[42%] md:max-w-[21rem] lg:basis-[calc((100%-1.5rem)/2)] lg:max-w-none xl:basis-[calc((100%-2rem)/2)]"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`Slide ${i + 1} of ${totalSlides}: ${s.tag}`}
                  >
                    <ServiceCard s={s} priority={i < 2} />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4 sm:mt-8" role="group" aria-label="Service slider navigation">
              <NavArrow
                direction="prev"
                disabled={safeIndex === 0}
                onClick={() => navigate(-1)}
              />

              <div className="flex min-w-[64px] select-none items-baseline justify-center gap-1 font-mono text-sm tracking-wider text-[var(--color-text-primary)]" aria-live="polite">
                <span className="font-bold">
                  {String(safeIndex + 1).padStart(2, "0")}
                </span>
                <span className="mx-0.5 text-[var(--color-text-muted)]">/</span>
                <span className="font-medium text-[var(--color-text-muted)]">
                  {String(maxIndex + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex items-center justify-center gap-2.5" aria-label="Service slides">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setActiveIndex(idx);
                      scrollToIndex(idx);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === safeIndex
                        ? "w-8 bg-[var(--color-brand-blue)]"
                        : "w-3 bg-[var(--color-bg-glass-strong)] hover:bg-[var(--color-text-muted)]"
                    }`}
                    aria-label={`Go to service slide ${idx + 1}`}
                    aria-current={idx === safeIndex ? "true" : undefined}
                  />
                ))}
              </div>

              <NavArrow
                direction="next"
                disabled={safeIndex === maxIndex}
                onClick={() => navigate(1)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
