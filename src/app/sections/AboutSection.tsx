"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % pillars.length);
    }, 4500); // Cycle every 4.5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative w-full overflow-hidden bg-[linear-gradient(180deg,var(--color-bg-main)_0%,var(--color-bg-card)_52%,var(--color-bg-main)_100%)] m-0 flex min-h-[100vh] items-center py-20 lg:py-24">
      {/* Background elements */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[var(--color-brand-blue)] opacity-[0.2] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-[var(--color-brand-cyan)] opacity-[0.12] blur-3xl" />

      <div className="mx-auto w-full max-w-[90rem]">
        <div className="relative flex flex-col lg:grid lg:grid-cols-[0.88fr_1.12fr] lg:gap-0 lg:items-center">

          {/* Left — info + pillar list */}
          <aside className="px-6 py-8 pb-6 sm:px-10 lg:px-12 lg:py-12 z-10 shrink-0">
            <div className="w-full lg:mx-auto lg:max-w-[34rem]">

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
                <h2 className="mt-4 max-w-[18ch] text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-5xl">
                  Empowering Businesses{" "}
                  <span className="bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">Since 2018</span>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  IKEN Technology pioneers cutting-edge solutions tailored for all business sizes. Backed by over 7 years of unparalleled expertise, we build long-term, reliable partnerships that deliver real results — from startups to enterprise.
                </p>
              </motion.div>

              {/* Pillar list */}
              <div className="mt-10 flex flex-col gap-6">
                {pillars.map((pillar, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <motion.div
                      key={pillar.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.15 }}
                      onClick={() => setActiveIndex(idx)}
                      className={`flex items-start gap-4 cursor-pointer transition-all duration-300 ${isActive ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
                    >
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors duration-300 ${isActive ? "border-[var(--color-border-brand)] bg-[var(--color-brand-blue-glow)] text-[var(--color-brand-blue)]" : "border-transparent bg-transparent text-[var(--color-text-muted)]"}`}>
                        <PillarGlyph kind={pillar.icon} />
                      </div>
                      <div>
                        <h3 className={`text-lg font-semibold transition-colors duration-300 ${isActive ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-secondary)]"}`}>{pillar.title}</h3>
                        <p className={`mt-1 text-sm leading-relaxed transition-colors duration-300 ${isActive ? "text-[var(--color-text-secondary)]" : "text-[var(--color-text-muted)]"}`}>{pillar.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Right — image carousel */}
          <div className="relative p-6 sm:p-10 lg:p-5 lg:h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-full h-[400px] sm:h-[500px] lg:h-[650px] overflow-hidden rounded-2xl border border-[var(--color-border-light)] shadow-2xl"
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
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(3,10,24,0.12)_0%,rgba(3,10,24,0.4)_46%,rgba(3,10,24,0.85)_100%)] opacity-[0.95]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,var(--color-brand-blue-glow),transparent_30%)]" />

                  {/* Text overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent_0%,rgba(6,12,24,0.85)_40%,var(--color-brand-deep)_100%)] px-6 pb-8 pt-20 lg:px-8 lg:pb-10">
                    <div className="max-w-3xl">
                      <div className="border-t border-[var(--color-border-light)] pt-5">
                        <div className="mb-2 flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border-brand)] bg-[linear-gradient(145deg,var(--color-brand-blue),var(--color-brand-cyan))] text-[var(--color-text-primary)]">
                            <PillarGlyph kind={pillars[activeIndex].icon} />
                          </div>
                          <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-[1.85rem]">
                            {pillars[activeIndex].title}
                          </h3>
                        </div>
                        <p className="text-sm leading-relaxed text-white/70">{pillars[activeIndex].desc}</p>
                      </div>
                      <div className="mt-4 border-l-2 border-[var(--color-brand-blue)] pl-3">
                        <p className="text-xs font-medium uppercase tracking-[0.13em] text-white/50">{pillars[activeIndex].short}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress/Counter */}
              <div className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-black/30 px-2.5 py-1 font-mono text-xs tracking-widest backdrop-blur-sm border border-white/10">
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
