"use client";

import { motion } from "framer-motion";

const models = [
  {
    icon: "team",
    badge: "Scalable Unit",
    title: "Team as a Service",
    desc: "Access elite, cross-functional professionals across various tech disciplines to bolster your internal capacity instantly.",
    features: ["Dedicated Teams", "Agile Methodology", "Quality Solutions"],
    benefits: ["Scalability", "Flexibility", "Cost-Effective", "Reduced Time to Market"],
    footer: "Ideal when you need reliable delivery capacity without expanding permanent headcount.",
  },
  {
    icon: "partner",
    badge: "Strategic Alignment",
    title: "Development Partnership",
    desc: "A dedicated software development ecosystem deeply embedded within your business to drive long-term innovation.",
    features: ["Strategic Partnership", "Innovative Solutions", "Measurable Success"],
    benefits: ["Technological Expertise", "Dedicated Resources", "Increased Productivity", "Long-term Partnership"],
    footer: "Ideal when your product needs sustained ownership, context, and continuous improvement.",
  },
];

function ModelIcon({ kind }: { kind: string }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[var(--color-brand-blue-glow)] text-[var(--color-brand-blue)]">
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.9">
        {kind === "team" ? (
          <>
            <path d="M16 11a3 3 0 1 0-2.83-4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 11a3 3 0 1 1 2.83-4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4.5 18.5c.5-2.7 2-4 3.5-4s3 1.3 3.5 4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.5 18.5c.5-2.7 2-4 3.5-4s3 1.3 3.5 4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 13.5c.7-.6 1.7-1 3-1s2.3.4 3 1" strokeLinecap="round" strokeLinejoin="round" />
          </>
        ) : (
          <>
            <path d="m8.2 12.6-1.5 1.5a3.1 3.1 0 0 1-4.4-4.4L5.8 6.2a3.1 3.1 0 0 1 4.4 0l.8.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="m15.8 11.4 1.5-1.5a3.1 3.1 0 0 1 4.4 4.4l-3.5 3.5a3.1 3.1 0 0 1-4.4 0l-.8-.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="m8.5 15.5 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}
      </svg>
    </div>
  );
}

export function ModelsSection() {
  return (
    <section id="models" className="scroll-section relative overflow-hidden bg-[var(--color-bg-main)] py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,var(--color-brand-blue-glow),transparent_30%),radial-gradient(circle_at_85%_65%,var(--color-brand-cyan-glow),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-light)] to-transparent" />

      <div className="site-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="mb-12 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 text-[var(--color-text-brand)]">
            <span className="inline-flex h-3.5 w-3.5 rounded-[3px] bg-[var(--color-brand-cyan)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em]">How We Work</span>
          </div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-5xl">
            Engagement models built around your capacity needs
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-text-secondary)]">
            Choose the operating model that fits your roadmap, from flexible expert capacity to an embedded development partnership.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {models.map((model, index) => {
            return (
              <motion.article
                key={model.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-lg border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-6 shadow-[0_28px_80px_rgba(15,23,42,0.08)] transition-colors sm:p-8 dark:shadow-[0_28px_80px_rgba(0,0,0,0.22)]"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-brand)] to-transparent" />
                <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[var(--color-brand-blue-glow)] blur-3xl" />

                <div className="relative flex items-start justify-between gap-5">
                  <ModelIcon kind={model.icon} />
                  <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-brand)] bg-[var(--color-brand-blue-glow)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.13em] text-[var(--color-text-brand)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-blue)]" />
                    {model.badge}
                  </div>
                </div>

                <div className="relative mt-8">
                  <h3 className="text-2xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-[1.7rem]">{model.title}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-text-secondary)]">{model.desc}</p>

                  <div className="mt-8">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">Core Features</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {model.features.map((feature) => (
                        <span key={feature} className="rounded bg-[var(--color-bg-glass-strong)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-secondary)]">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 border-t border-[var(--color-border-light)] pt-6">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">Key Benefits</p>
                    <div className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {model.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)]">
                          <span className="flex h-4 w-4 items-center justify-center rounded-full text-[var(--color-brand-blue)]">
                            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
                              <path d="m4.5 8.2 2 2 5-5" strokeLinecap="round" strokeLinejoin="round" />
                              <circle cx="8" cy="8" r="5.5" />
                            </svg>
                          </span>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 rounded-md border border-dashed border-[var(--color-border-brand)] bg-[var(--color-brand-blue-glow)] p-4">
                    <p className="text-sm font-medium leading-relaxed text-[var(--color-text-secondary)]">{model.footer}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-light)] to-transparent" />
    </section>
  );
}
