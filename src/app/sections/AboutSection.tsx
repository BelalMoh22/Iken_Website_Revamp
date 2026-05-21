"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pillars = [
  {
    tag: "Core Strength",
    title: "Innovative Solutions",
    desc: "Cutting-edge technology tailored to each client's unique needs — from discovery workshops to production-ready systems built for scale.",
    short: "Custom-built tech for every challenge.",
    image: "/service/product-discovery.png",
    icon: "bulb",
  },
  {
    tag: "Business Impact",
    title: "Business Growth",
    desc: "Effective solutions engineered to move the needle — aligning product decisions directly with your core business objectives.",
    short: "Results that directly impact your revenue.",
    image: "/service/web-mobile-engineering.png",
    icon: "growth",
  },
  {
    tag: "Our Promise",
    title: "Quality Service",
    desc: "Built on years of consistent delivery. We don't just ship — we maintain, improve, and stand behind everything we build.",
    short: "Reliability and excellence, always.",
    image: "/service/software-support.png",
    icon: "star",
  },
  {
    tag: "Future-Ready",
    title: "Digital Transformation",
    desc: "Modernising legacy systems, digitising workflows, and embedding technology into the heart of your operations.",
    short: "From legacy to leading-edge.",
    image: "/service/team-as-a-service.png",
    icon: "transform",
  },
];

function PillarGlyph({ kind }: { kind: string }) {
  const paths: Record<string, string> = {
    bulb: "M12 2a7 7 0 0 1 7 7c0 2.6-1.4 4.9-3.5 6.2V17a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1.8A7 7 0 0 1 12 2ZM9 21h6M10 17h4",
    growth: "M22 12h-4l-3 9L9 3l-3 9H2",
    star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z",
    transform: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2-2h14a2 2 0 0 0 2-2v-7M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",
  };
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d={paths[kind] ?? paths.bulb} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetAutoTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % pillars.length);
    }, 4500);
  }, []);

  const handlePillarClick = (idx: number) => {
    setActiveIndex(idx);
    resetAutoTimer();
  };

  useEffect(() => {
    resetAutoTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetAutoTimer]);

  return (
    <section id="about" className="scroll-section home-section-y relative m-0 w-full overflow-hidden bg-[linear-gradient(180deg,var(--color-bg-main)_0%,var(--color-bg-card)_52%,var(--color-bg-main)_100%)]">
      {/* Background elements */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[var(--color-brand-blue)] opacity-[0.2] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-[var(--color-brand-cyan)] opacity-[0.12] blur-3xl" />

      <div className="site-container">
        <div className="relative flex flex-col gap-8 sm:gap-10 lg:grid lg:grid-cols-[0.94fr_1.06fr] lg:grid-rows-[auto_1fr] lg:items-center lg:gap-12">

          {/* Left — info + pillar list */}
          <aside className="order-1 z-10 shrink-0 lg:col-start-1 lg:row-start-1">
            <div className="w-full lg:max-w-[34rem]">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-2 text-[var(--color-text-brand)]">
                  <span className="inline-flex h-3.5 w-3.5 rounded-[3px] bg-[var(--color-brand-blue)]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em]">About IKEN</span>
                </div>
                <h2 className="mt-4 max-w-[18rem] text-[2rem] font-semibold leading-[1.08] tracking-tight text-[var(--color-text-primary)] min-[390px]:max-w-[20rem] min-[390px]:text-[2.25rem] sm:max-w-[18ch] sm:text-5xl">
                  <span className="block">Empowering</span>
                  <span className="block">
                    Businesses{" "}
                    <span className="bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">
                      Since
                    </span>
                  </span>
                  <span className="block bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">
                    2018
                  </span>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  IKEN Technology pioneers cutting-edge solutions tailored for all business sizes. Backed by over 7 years of unparalleled expertise, we build long-term, reliable partnerships that deliver real results — from startups to enterprise.
                </p>
              </motion.div>

            </div>
          </aside>

          {/* Pillar list */}
          <div className="order-3 z-10 w-full lg:col-start-1 lg:row-start-2 lg:max-w-[34rem]">
              <div className="flex flex-col gap-5 sm:gap-6 lg:mt-8">
                {pillars.map((pillar, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <motion.button
                      key={pillar.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.15 }}
                      type="button"
                      onClick={() => handlePillarClick(idx)}
                      className={`flex w-full items-start gap-4 rounded-xl text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-blue)] ${isActive ? "opacity-100" : "opacity-55 hover:opacity-80"}`}
                    >
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors duration-300 ${isActive ? "border-[var(--color-border-brand)] bg-[var(--color-brand-blue-glow)] text-[var(--color-brand-blue)]" : "border-transparent bg-transparent text-[var(--color-text-muted)]"}`}>
                        <PillarGlyph kind={pillar.icon} />
                      </div>
                      <div>
                        <h3 className={`text-lg font-semibold transition-colors duration-300 ${isActive ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-secondary)]"}`}>{pillar.title}</h3>
                        <p className={`mt-1 text-sm leading-relaxed transition-colors duration-300 ${isActive ? "text-[var(--color-text-secondary)]" : "text-[var(--color-text-muted)]"}`}>{pillar.desc}</p>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
          </div>

          {/* Right — image carousel */}
          <div className="relative order-2 w-full flex items-center lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:min-h-0 lg:self-stretch">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative mx-auto h-[220px] w-full max-w-[42rem] overflow-hidden rounded-2xl border border-[var(--color-border-light)] shadow-[0_8px_28px_rgba(0,0,0,0.08)] min-[390px]:h-[248px] sm:h-[300px] md:h-[340px] lg:h-[min(520px,58vh)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.35)]"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={pillars[activeIndex].image}
                    alt={pillars[activeIndex].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 52vw"
                    className="object-cover brightness-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(3,10,24,0.01)_0%,rgba(3,10,24,0.04)_52%,rgba(3,10,24,0.08)_100%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,var(--color-brand-blue-glow),transparent_34%)] opacity-70" />

                  {/* Text overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent_0%,rgba(6,12,24,0.2)_38%,rgba(6,12,24,0.54)_100%)] px-4 pb-5 pt-12 sm:px-6 sm:pb-6 sm:pt-14 lg:px-8 lg:pb-8">
                    <div className="max-w-3xl">
                      <div className="border-t border-[var(--color-border-light)] pt-4 sm:pt-5">
                        <div className="mb-1.5 flex items-center gap-2.5 sm:mb-2 sm:gap-3">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--color-border-brand)] bg-[linear-gradient(145deg,var(--color-brand-blue),var(--color-brand-cyan))] text-[var(--color-text-primary)] sm:h-9 sm:w-9 sm:rounded-xl">
                            <PillarGlyph kind={pillars[activeIndex].icon} />
                          </div>
                          <h3 className="text-lg font-semibold tracking-tight text-white sm:text-2xl sm:leading-tight md:text-[1.75rem]">
                            {pillars[activeIndex].title}
                          </h3>
                        </div>
                      </div>
                      <div className="mt-3 border-l-2 border-[var(--color-brand-blue)] pl-2.5 sm:mt-4 sm:pl-3">
                        <p className="text-xs font-medium uppercase tracking-[0.13em] text-white/50">{pillars[activeIndex].short}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress/Counter */}
              <div className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-[var(--color-bg-glass-strong)] px-2.5 py-1 font-mono text-xs tracking-widest backdrop-blur-sm border border-white/10">
                <span className="inline-block text-white">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span className="text-white/40">/</span>
                <span className="text-white/40">{String(pillars.length).padStart(2, "0")}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
