"use client";

/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { useTheme } from "next-themes";
import { Header } from "../../sections/Header";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { useMounted } from "../../hooks/useMounted";


const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const, delay } },
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
        <section className="relative overflow-hidden border-b border-[var(--color-border-light)] py-20 lg:py-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,var(--color-brand-blue-glow),transparent)]" />
          <div className="site-container">
            <Breadcrumbs />
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div initial="hidden" animate="visible" variants={fadeUp(0)} className="min-w-0">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-border-brand)] bg-[var(--color-brand-blue-glow)] px-3.5 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-blue)]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-brand)]">Case Study · TaaS</span>
                </div>
                <h1 className="mb-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl text-[var(--color-text-primary)]">
                  IKEN × ELAbd
                </h1>
                <p className="mb-6 text-2xl font-semibold leading-snug text-[var(--color-text-secondary)]">
                  A Strategic TaaS Partnership Driving Digital Growth
                </p>
                <p className="mb-8 max-w-lg text-base leading-relaxed text-[var(--color-text-secondary)] opacity-80">
                  ELAbd — Egypt's most celebrated pastry brand — partnered with IKEN Technology as their dedicated development arm, establishing a full TaaS model to accelerate digital transformation.
                </p>
                    {/* Redesigned Text-Only Highlight Badges */}
                <div className="mb-8 grid gap-4 border-l-2 border-[var(--color-brand-blue)] pl-4 min-[380px]:grid-cols-3">
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
                      <Image src="/clients/elabd-logo-square.svg" alt="ELAbd Patisserie brand logo" width={128} height={128} className="h-full w-full object-cover" />
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
        <section className="border-b border-[var(--color-border-light)] py-16 lg:py-20">
          <div className="site-container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0)}
              className="mb-12">
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
                { title: "Tech Expertise", desc: "Frontend, Backend, Mobile, DevOps, QA, and Product Management", icon: "⚡" },
                { title: "Business Integration", desc: "Deep collaboration with marketing, sales, and operations for aligned execution", icon: "🔗" },
                { title: "Fast Delivery", desc: "Continuous delivery with agile release cycles and rapid feature deployment", icon: "🚀" },
                { title: "Cost Efficiency", desc: "Full platform ownership from development to optimization — no full-time hiring costs", icon: "💰" },
              ].map((item, i) => (
                <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeUp(i * 0.07)}
                  className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-6 transition-all hover:border-[var(--color-border-brand)] hover:bg-[var(--color-bg-glass-strong)]">
                  <div className="mb-3 text-2xl">{item.icon}</div>
                  <h3 className="mb-2 text-base font-bold text-[var(--color-text-primary)]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── KEY INITIATIVES ── */}
        <section className="border-b border-[var(--color-border-light)] py-16 lg:py-20">
          <div className="site-container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0)} className="mb-12">
              <div className="mb-2 inline-flex items-center gap-2 text-[var(--color-text-brand)]">
                <span className="inline-flex h-3 w-3 rounded-[2px] bg-[var(--color-brand-blue)]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">Delivered</span>
              </div>
              <h2 className="text-3xl font-bold text-[var(--color-text-primary)] sm:text-4xl">Key Initiatives</h2>
            </motion.div>
            <div className="space-y-4">
              {[
                { n: "01", title: "E-Commerce Flow Optimization", desc: "Redesigned product catalog management and streamlined checkout experience, resulting in improved platform stability, faster page loads, and measurably higher customer satisfaction scores." },
                { n: "02", title: "Learning Management System", desc: "Custom-built LMS designed specifically for internal training programs, enabling HR and Sales teams to upskill employees efficiently and track professional development progress." },
                { n: "03", title: "Coupon & Discount Management", desc: "Sophisticated promotional campaign system enabling targeted offers, seasonal discounts, and loyalty rewards that drive conversion rates and customer retention." },
                { n: "04", title: "Multi-Department Collaboration", desc: "Cross-functional technology support extending beyond e-commerce to HR, Sales, Marketing, and Customer Success teams, creating unified digital operations." },
              ].map((item, i) => (
                <motion.div key={item.n} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeUp(i * 0.06)}
                  className="flex gap-4 rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-5 transition-all hover:border-[var(--color-border-brand)] sm:gap-5 sm:p-6">
                  <span className="mt-0.5 text-2xl font-black text-[var(--color-brand-blue)]/30 tabular-nums">{item.n}</span>
                  <div>
                    <h3 className="mb-1.5 text-base font-bold text-[var(--color-text-primary)]">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TAAS TEAM ── */}
        <section className="border-b border-[var(--color-border-light)] py-16 lg:py-20">
          <div className="site-container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0)} className="mb-12">
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
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round"/><circle cx="12" cy="7" r="4"/>
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
        <section id="results" className="scroll-section border-b border-[var(--color-border-light)] py-16 lg:py-20">
          <div className="site-container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0)} className="mb-12">
              <div className="mb-2 inline-flex items-center gap-2 text-[var(--color-text-brand)]">
                <span className="inline-flex h-3 w-3 rounded-[2px] bg-[var(--color-brand-blue)]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">Outcomes</span>
              </div>
              <h2 className="text-3xl font-bold text-[var(--color-text-primary)] sm:text-4xl">Impact &amp; Results</h2>
              <p className="mt-3 max-w-2xl text-[var(--color-text-secondary)]">
                Measurable business outcomes across multiple dimensions, demonstrating the tangible value of the TaaS model in accelerating digital transformation.
              </p>
            </motion.div>
            <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { v: "45%", l: "Faster Time-to-Market", sub: "New features deployed in half the time" },
                { v: "30%", l: "Order Volume Increase", sub: "Following UI/UX enhancements and platform optimization" },
                { v: "5+", l: "Departments Supported", sub: "E-Commerce, HR, Sales, Marketing, Operations" },
                { v: "200+", l: "Employees Trained", sub: "Internal staff upskilled through the custom LMS" },
              ].map((item, i) => (
                <motion.div key={item.l} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeUp(i * 0.07)}
                  className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-6 text-center">
                  <p className="bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-4xl font-black text-transparent sm:text-5xl">
                    {item.v}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[var(--color-text-primary)]">{item.l}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-muted)]">{item.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Before/After bars */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0.1)}
              className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-6">
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-[var(--color-text-brand)]">Before vs. After Partnership</p>
              <div className="space-y-5">
                {[
                  { label: "Feature Delivery Speed", before: 50, after: 80 },
                  { label: "Platform Uptime", before: 65, after: 99 },
                  { label: "Customer Satisfaction", before: 72, after: 89 },
                ].map((bar) => (
                  <div key={bar.label}>
                    <div className="mb-2 flex justify-between text-xs">
                      <span className="font-medium text-[var(--color-text-secondary)]">{bar.label}</span>
                      <span className="text-[var(--color-text-muted)]">{bar.before}% → <span className="text-[var(--color-brand-blue)] font-semibold">{bar.after}%</span></span>
                    </div>
                    <div className="relative h-2 overflow-hidden rounded-full bg-[var(--color-bg-glass-strong)]">
                      <div className="absolute left-0 top-0 h-full rounded-full bg-[var(--color-text-muted)] opacity-20" style={{ width: `${bar.before}%` }} />
                      <div className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)]" style={{ width: `${bar.after}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex gap-4 text-xs">
                <span className="flex items-center gap-1.5 text-[var(--color-text-muted)]"><span className="h-2.5 w-2.5 rounded-full bg-white/10" />Before</span>
                <span className="flex items-center gap-1.5 text-[var(--color-text-brand)]"><span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)]" />After Partnership</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── TECH STACK ── */}
        <section className="border-b border-[var(--color-border-light)] py-16 lg:py-20">
          <div className="site-container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0)} className="mb-12">
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
              {[["Reliable","99.9% uptime with redundant systems"],["Scalable","Cloud-native architecture handles traffic spikes"],["Secure","Industry-standard encryption and compliance"]].map(([t,d]) => (
                <div key={t} className="flex items-start gap-3 rounded-xl border border-[var(--color-border-light)] bg-[var(--color-bg-glass)] p-4">
                  <span className="mt-0.5 text-[var(--color-brand-blue)]">✓</span>
                  <div><p className="text-sm font-bold text-[var(--color-text-primary)]">{t}</p><p className="text-xs text-[var(--color-text-muted)]">{d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL ── */}
        <section className="border-b border-[var(--color-border-light)] py-16 lg:py-20">
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
                  <Image src="/clients/br-elabd.png" alt="ELAbd Patisserie brand logo" width={48} height={48} className="h-10 w-10 object-contain" />
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
        <section className="py-20 lg:py-28">
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

      <footer className="relative z-10 border-t border-[var(--color-border-light)] py-4 text-center text-xs text-[var(--color-text-muted)]">
        © {new Date().getFullYear()} IKEN Technology. All rights reserved.
      </footer>
    </div>
  );
}
