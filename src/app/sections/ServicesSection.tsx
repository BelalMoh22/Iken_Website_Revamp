"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type RefObject } from "react";

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

function ServiceCard({ s, containerRef }: { s: typeof services[0]; containerRef: RefObject<HTMLDivElement | null> }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const onChange = () => setIsMobile(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!isMobile || !cardRef.current) {
      setIsInView(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      {
        root: containerRef.current,
        rootMargin: "0px -30% 0px -30%",
        threshold: 0.55,
      },
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [containerRef, isMobile]);

  const active = isMobile && isInView;

  return (
    <div
      ref={cardRef}
      className={`group relative shrink-0 overflow-hidden rounded-[24px] transition-all duration-500 ease-out snap-start
        w-[280px] h-[380px] sm:h-[420px] cursor-pointer
        ${active ? "opacity-100" : "opacity-85 hover:opacity-100"}
      `}
    >
      {/* Background Image with Hover/Focus Reveal */}
      <Image 
        src={s.image} 
        alt={s.title} 
        fill 
        className={`object-cover transition-all duration-500 ease-out filter group-hover:scale-105 group-hover:brightness-100 ${
          active ? "brightness-100" : "brightness-[0.75]"
        }`}
      />
      
      {/* Subtle Overlay Gradient for readability */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 ${active ? "opacity-40" : "group-hover:opacity-40"}`} />
      
      {/* Content Overlay */}
      <div className="absolute bottom-6 left-6 right-6 z-10">
        <div className="mb-2 flex items-center gap-2">
          <span className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 ${active ? "bg-[var(--color-brand-blue)]" : "bg-white/40 group-hover:bg-[var(--color-brand-blue)]"}`} />
          <span className="text-[10px] font-bold uppercase tracking-wider text-white/60 group-hover:text-[var(--color-brand-blue)] transition-colors duration-500">
            {s.tag}
          </span>
        </div>
        <h3 className="text-xl font-bold leading-tight text-white mb-2">
          {s.title}
        </h3>
        <p className={`text-sm leading-relaxed text-white/70 transition-all duration-500 ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"}`}>
          {s.desc}
        </p>
      </div>
    </div>
  );
}

export function ServicesSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="services"
      className="relative bg-[var(--color-bg-main)] py-20 lg:py-24 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[90rem] px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-12">
          
          {/* Left Side: 40% Width Text Content */}
          <div className="flex flex-col justify-center lg:w-[40%] shrink-0">
            <div className="max-w-[480px]">
              <div className="inline-flex items-center gap-2 text-[var(--color-text-brand)] mb-4">
                <span className="inline-flex h-3 w-3 rounded-full bg-[var(--color-brand-blue)]" />
                <span className="text-xs font-bold uppercase tracking-widest">Our Expertise</span>
              </div>
              <h2 className="text-4xl font-semibold leading-[1.2] tracking-tight text-[var(--color-text-primary)] sm:text-5xl">
                WE PROVIDE{" "}
                <span className="text-[var(--color-brand-blue)]">
                  GREAT IT SOLUTIONS
                </span>
              </h2>
              <p className="mt-4 text-base leading-[1.6] text-[#6b7280]">
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
          <div className="lg:w-[60%] w-full">
            <div 
              ref={trackRef}
              className="flex items-center overflow-x-auto overflow-y-hidden snap-x snap-proximity gap-6 pb-8 hide-scrollbar scroll-smooth w-full"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {services.map((s) => (
                <ServiceCard key={s.title} s={s} containerRef={trackRef} />
              ))}
              {/* Trailing Spacer */}
              <div className="w-[10vw] shrink-0" />
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
