"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const differentiators = [
  {
    title: "Business-first engineering",
    desc: "We map each sprint to a business KPI so features ship with clear ROI, not vanity output.",
  },
  {
    title: "Senior delivery ownership",
    desc: "You work directly with senior product and engineering leads who stay accountable from discovery to scale.",
  },
  {
    title: "Fast, measurable execution",
    desc: "Weekly demos, transparent priorities, and live metrics keep progress visible and decisions data-backed.",
  },
];

export function DifferentiationSection() {
  return (
    <section id="why-iken" className="scroll-section relative overflow-hidden bg-[var(--color-bg-main)] py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,var(--color-brand-blue-glow),transparent_38%)]" />

      <div className="site-container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="mb-10 max-w-3xl"
        >
          <div className="mb-3 inline-flex items-center gap-2 text-[var(--color-text-brand)]">
            <span className="inline-flex h-3.5 w-3.5 rounded-[3px] bg-[var(--color-brand-cyan)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em]">Why IKEN</span>
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-5xl">
            Built for teams that need speed without sacrificing product quality
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)]">
            If you are stuck between hiring slowly or outsourcing blindly, IKEN gives you a third path:
            a senior product engineering partner focused on business outcomes.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {differentiators.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-glass)] p-6 transition-colors hover:border-[var(--color-border-brand)] hover:bg-[var(--color-bg-glass-strong)]"
            >
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">{item.desc}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Book a strategy call
          </Link>
          <a
            href="#projects"
            className="rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg-glass)] px-6 py-3 text-sm font-semibold text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-border-brand)]"
          >
            See proof in projects
          </a>
        </div>
      </div>
    </section>
  );
}
