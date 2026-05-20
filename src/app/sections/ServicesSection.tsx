"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const services = [
  {
    tag: "Product Discovery",
    title: "PRODUCT\nDISCOVERY",
    desc: "Turn business ideas into clear, validated product roadmaps with measurable milestones.",
    image: "/service/product-discovery.png",
  },
  {
    tag: "Custom Software",
    title: "CUSTOM\nSOFTWARE",
    desc: "Tailored software solutions built to solve your unique business challenges and requirements.",
    image: "/service/enterprise-integrations.png",
  },
  {
    tag: "Web & Mobile Apps",
    title: "WEB &\nMOBILE APPS",
    desc: "Cross-platform applications with seamless, high-performance experiences for customers and teams.",
    image: "/service/web-mobile-engineering.png",
  },
  {
    tag: "E-Commerce Solutions",
    title: "E-COMMERCE\nSOLUTIONS",
    desc: "Innovative e-commerce platforms that drive online business growth and increase conversions.",
    image: "/service/mobile-management.png",
  },
  {
    tag: "Maintenance & Support",
    title: "MAINTENANCE\n& SUPPORT",
    desc: "Ongoing assistance and monitoring to keep your products secure, stable, and performing optimally.",
    image: "/service/software-support.png",
  },
  {
    tag: "Team As A Service",
    title: "TEAM AS\nA SERVICE",
    desc: "Dedicated squads that plan, build, and continuously improve your product pipeline.",
    image: "/service/team-as-a-service.png",
  },
];

function ServiceCard({ s }: { s: typeof services[0] }) {
  return (
    <article
      tabIndex={0}
      className="group relative h-[310px] w-[min(240px,72vw)] shrink-0 cursor-pointer overflow-hidden rounded-[24px] opacity-95 transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-blue)] focus-within:opacity-100 hover:opacity-100 min-[390px]:h-[330px] sm:h-[360px]"
    >
      <Image 
        src={s.image} 
        alt={s.title} 
        fill 
        sizes="(max-width: 768px) 72vw, 240px"
        className="object-cover brightness-[1.02] transition-all duration-700 ease-out group-hover:scale-[1.035] group-focus-within:scale-[1.035]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(3,10,24,0.01)_0%,rgba(3,10,24,0.04)_52%,rgba(3,10,24,0.08)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,var(--color-brand-blue-glow),transparent_45%)] opacity-0 transition-opacity duration-500 group-hover:opacity-90 group-focus-within:opacity-90" />

      <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,transparent_0%,rgba(6,12,24,0.16)_52%,rgba(6,12,24,0.5)_100%)] transition-all duration-500 group-hover:h-48 group-hover:opacity-90 group-focus-within:h-48 group-focus-within:opacity-90" />

      <div className="absolute inset-x-6 bottom-6 z-10 transition-transform duration-500 ease-out group-hover:-translate-y-24 group-focus-within:-translate-y-24">
        <h3 className="mb-0 whitespace-pre-line text-xl font-bold leading-tight text-white drop-shadow-[0_1px_6px_rgba(6,12,24,0.14)]">
          {s.title}
        </h3>
        <div className="absolute left-0 top-full w-full pt-3 pointer-events-none">
          <p className="text-sm leading-relaxed text-white/85 opacity-0 translate-y-4 drop-shadow-[0_1px_6px_rgba(6,12,24,0.14)] transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
            {s.desc}
          </p>
        </div>
      </div>
    </article>
  );
}

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1536) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 640) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, services.length - visibleCount);
  const currentIndex = Math.min(activeIndex, maxIndex);

  const moveServices = useCallback((direction: -1 | 1) => {
    setActiveIndex((index) => Math.min(maxIndex, Math.max(0, index + direction)));
  }, [maxIndex]);

  return (
    <section
      id="services"
      className="scroll-section home-section-y relative overflow-hidden bg-[var(--color-bg-main)]"
    >
      <div className="site-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-12">
          
          {/* Left Side: 40% Width Text Content */}
          <div className="flex flex-col justify-center lg:w-[40%] shrink-0">
            <div className="max-w-[480px]">
              <div className="inline-flex items-center gap-2 text-[var(--color-text-brand)] mb-4">
                <span className="inline-flex h-3 w-3 rounded-full bg-[var(--color-brand-blue)]" />
                <span className="text-xs font-bold uppercase tracking-widest">Our Expertise</span>
              </div>
              <h2 className="text-4xl font-semibold leading-[1.2] tracking-tight text-[var(--color-text-primary)] sm:text-5xl">
                WE PROVIDE{" "}
                <span className="bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">
                  GREAT IT SOLUTIONS
                </span>
              </h2>
              <p className="mt-4 text-base leading-[1.6] text-[var(--color-text-secondary)]">
                Scalable engineering teams and strategic product development to transform your business goals into digital reality. Built for modern performance and growth.
              </p>
              
              {/* Scroll Indicator */}
              <div className="hidden lg:flex items-center gap-3 mt-10 text-xs font-bold text-[var(--color-text-muted)] tracking-widest uppercase">
                <span>Explore Services</span>
                <span className="h-px w-10 bg-[var(--color-border-light)]" />
              </div>
            </div>
          </div>

          {/* Right Side: 60% Width Cards Track */}
          <div className="w-full lg:w-[60%]">
            <div className="mx-auto mb-5 flex w-[min(240px,72vw)] items-center justify-end gap-3 sm:w-[504px] 2xl:w-[768px]">
              <button
                type="button"
                onClick={() => moveServices(-1)}
                disabled={currentIndex === 0}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg-glass)] text-[var(--color-text-secondary)] transition-all duration-300 hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg-main)] hover:border-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-white/50 disabled:pointer-events-none disabled:opacity-40"
                aria-label="Previous services"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-translate-x-1">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </button>
              <div className="text-[var(--color-text-muted)] font-mono text-sm tracking-widest px-1 sm:px-2">
                <span className="inline-block text-[var(--color-text-primary)]">
                  {String(currentIndex + 1).padStart(2, '0')}
                </span>
                <span className="mx-2 opacity-50">/</span>
                <span className="opacity-70">{String(maxIndex + 1).padStart(2, '0')}</span>
              </div>
              <button
                type="button"
                onClick={() => moveServices(1)}
                disabled={currentIndex === maxIndex}
                className="group flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-brand-blue)] text-white transition-all duration-300 hover:bg-[var(--color-brand-blue)]/80 hover:shadow-[0_2px_14px_var(--color-brand-blue-glow)] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]/50 disabled:pointer-events-none disabled:opacity-40"
                aria-label="Next services"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            </div>

            <div className="mx-auto w-[min(240px,72vw)] overflow-hidden sm:w-[504px] 2xl:w-[768px]">
              <div
                className="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: `translateX(calc(-${currentIndex} * (min(240px, 72vw) + 1.5rem)))` }}
              >
                {services.map((s) => (
                  <ServiceCard key={s.title} s={s} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
