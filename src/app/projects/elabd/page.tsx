"use client";

/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Network, Rocket, Wallet } from "lucide-react";

import { useTheme } from "next-themes";
import { Header } from "../../sections/Header";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { useMounted } from "../../hooks/useMounted";
import { ContactSection } from "../../sections/ContactSection";


const fadeUp = (delay = 0) => ({
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" as const, delay: Math.min(delay, 0.04) } },
});

function GetThemedLogo({ className = "h-10 w-auto" }) {
  const { theme } = useTheme();
  const mounted = useMounted();
  return (
    <Image src="/iken-logo-new.png" alt="IKEN" width={120} height={40}
      className={`${className} object-contain transition-all ${mounted && theme === "dark" ? "brightness-0 invert" : ""}`}
      style={{ width: "auto" }} />
  );
}

export default function ElAbdCaseStudy() {
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
        <section className="relative overflow-hidden border-b border-[var(--color-border-light)] py-12 sm:py-16 lg:py-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,var(--color-brand-blue-glow),transparent)]" />
          <div className="site-container">
            <Breadcrumbs />
            <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
              <motion.div initial="hidden" animate="visible" variants={fadeUp(0)} className="min-w-0">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-border-brand)] bg-[var(--color-brand-blue-glow)] px-3.5 py-1.5">
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

              {/* Logos card (Enlarged) */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp(0.12)}
                className="flex flex-col items-center justify-center">
                <div className="flex w-full max-w-md flex-col items-center justify-center gap-8 rounded-3xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-5 shadow-2xl relative overflow-hidden backdrop-blur-md group hover:border-[var(--color-border-brand)]/50 transition-all duration-500 sm:p-10">
                  {/* Immersive ambient glowing circle in the center */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] opacity-[0.08] blur-3xl rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-700" />

                  <div className="flex items-center justify-center gap-4 sm:gap-8 relative z-10">
                    <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-[var(--color-border-brand)]/30 bg-[var(--color-brand-blue-glow)] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,183,255,0.2)] transition-all duration-300 sm:h-32 sm:w-32 sm:p-6">
                      <GetThemedLogo className="h-14 w-auto" />
                    </div>

                    <div className="text-4xl font-black text-[var(--color-text-muted)] animate-pulse select-none">×</div>

                    <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-3xl border border-rose-500/20 bg-rose-500/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(244,63,94,0.15)] transition-all duration-300 sm:h-32 sm:w-32">
                      <Image src="/clients/elabd-logo-usecase.svg" alt="ELAbd Patisserie brand logo" width={128} height={128} className="h-full w-full object-cover" />
                    </div>
                  </div>

                  <div className="text-center relative z-10">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-brand)]">Strategic Technology Alliance</div>
                    <div className="mt-1.5 text-xs text-[var(--color-text-muted)]">Accelerating scale through unified product delivery</div>
                  </div>
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
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
                    className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-6 transition-all hover:border-[var(--color-border-brand)] hover:bg-[var(--color-bg-glass-strong)]">
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
                <div className="space-y-4 md:space-y-5 max-w-[580px] w-full">
                  {[
                    { n: "01", title: "E-Commerce Flow Optimization", desc: "Upgraded catalog management and checkout to improve platform stability, page load speeds, and customer satisfaction." },
                    { n: "02", title: "Learning Management System", desc: "Developed a custom internal training platform for HR and Sales to efficiently upskill employees and track their professional development." },
                    { n: "03", title: "Coupon & Discount Management", desc: "Created an advanced promotional system for targeted, seasonal, and loyalty discounts aimed at boosting conversion rates and customer retention." },
                    { n: "04", title: "Multi-Department Collaboration", desc: "Provided cross-functional technology support across HR, Sales, Marketing, and Customer Success to unify digital operations." },
                  ].map((item, i) => (
                    <motion.div 
                      key={item.n} 
                      initial="hidden" 
                      whileInView="visible" 
                      viewport={{ once: true }}
                      variants={fadeUp(i * 0.05)}
                      className="group flex gap-4 sm:gap-5 rounded-[20px] border border-[var(--color-border-light)]/60 bg-[var(--color-bg-card)]/50 backdrop-blur-md p-4 sm:p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-brand-blue)]/30 hover:bg-[var(--color-bg-glass-strong)]/60 hover:shadow-[0_10px_30px_rgba(59,130,246,0.08)]"
                    >
                      <span className="mt-0.5 text-3xl sm:text-4xl font-black text-[var(--color-brand-blue)]/20 tracking-tight tabular-nums select-none shrink-0 transition-colors duration-300 group-hover:text-[var(--color-brand-blue)]/40">
                        {item.n}
                      </span>
                      <div className="flex flex-col">
                        <h3 className="mb-1 text-base sm:text-[17px] font-bold text-[var(--color-text-primary)] transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] opacity-85 max-w-[480px]">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
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
                  className="relative w-full max-w-[460px] md:max-w-full flex justify-center items-center"
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
                    className="w-full flex justify-center items-center"
                  >
                    <Image
                      src="/clients/frame-logo.png"
                      alt="ELAbd Patisserie Mobile Solutions Showcase"
                      width={600}
                      height={600}
                      className="w-full h-auto object-contain max-h-[460px] lg:max-h-[520px] xl:max-h-[580px] select-none pointer-events-none"
                      priority
                    />
                  </motion.div>
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
              <h2 className="text-3xl font-bold text-[var(--color-text-primary)] sm:text-4xl">Inside the Tech Stack</h2>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text-muted)]">Enterprise-Grade Technology Foundation</p>
            </motion.div>
            <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { area: "Web Platform", tech: "React / Next.js / ASP.NET MVC", desc: "Server-side rendering for optimal performance and SEO" },
                { area: "Mobile Apps", tech: "React Native", desc: "Cross-platform native experience with single codebase" },
                { area: "Backend Services", tech: ".NET Core, Firebase", desc: "Scalable microservices with real-time capabilities" },
                { area: "Infrastructure", tech: "Azure DevOps, CI/CD", desc: "Automated deployment pipelines and monitoring" },
                { area: "Integrations", tech: "Payment Gateways, Delivery APIs, Coupon Engine", desc: "Seamless third-party service connectivity" },
              ].map((item, i) => (
                <motion.div key={item.area} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeUp(i * 0.06)}
                  className="rounded-2xl border border-[var(--color-border-brand)] bg-[var(--color-brand-blue-glow)] p-5">
                  <p className="mb-0.5 text-sm font-bold text-[var(--color-brand-blue)]">{item.area}</p>
                  <p className="mb-2 text-xs font-semibold text-[var(--color-text-primary)]">{item.tech}</p>
                  <p className="text-xs leading-relaxed text-[var(--color-text-secondary)]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[["Reliable", "99.9% uptime with redundant systems"], ["Scalable", "Cloud-native architecture handles traffic spikes"], ["Secure", "Industry-standard encryption and compliance"]].map(([t, d]) => (
                <div key={t} className="flex items-start gap-3 rounded-xl border border-[var(--color-border-light)] bg-[var(--color-bg-glass)] p-4">
                  <span className="mt-0.5 text-[var(--color-brand-blue)]">✓</span>
                  <div><p className="text-sm font-bold text-[var(--color-text-primary)]">{t}</p><p className="text-xs text-[var(--color-text-muted)]">{d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL ── */}
        <section className="border-b border-[var(--color-border-light)] py-12 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0)}>
              <div className="mb-2 inline-flex items-center gap-2 text-[var(--color-text-brand)]">
                <span className="inline-flex h-3 w-3 rounded-[2px] bg-[var(--color-brand-blue)]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">Voice from ELAbd</span>
              </div>
              <blockquote className="mt-6 text-2xl font-semibold leading-relaxed text-[var(--color-text-primary)] sm:text-3xl">
                "Partnering with IKEN Technology gave us speed, flexibility, and top-tier e-commerce expertise.{" "}
                <span className="bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">
                  They are not just a vendor — they are part of our team.
                </span>"
              </blockquote>
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white p-1">
                  <Image src="/clients/alabd-light.svg" alt="ELAbd Patisserie brand logo" width={48} height={48} className="h-10 w-10 object-contain" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-[var(--color-text-primary)]">ELAbd Leadership</p>
                  <p className="text-xs text-[var(--color-text-muted)]">ELAbd Patisserie, Egypt</p>
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

