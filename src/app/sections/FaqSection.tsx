"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity and scope. A standard product discovery phase takes 2-4 weeks, while MVP development typically ranges from 2-3 months. We provide a detailed timeline during our initial proposal."
  },
  {
    question: "Are we provide dedicated development teams?",
    answer: "Yes, we offer Team as a Service (TaaS) where we provide dedicated, cross-functional engineering teams that integrate seamlessly with your internal operations and scale as your product grows."
  },
  {
    question: "Can IKEN work with existing products?",
    answer: "Absolutely. We often take over legacy systems, perform codebase audits, and execute modernization strategies to improve performance, scalability, and maintainability without disrupting current users."
  },
  {
    question: "Are we provide post-launch support?",
    answer: "Yes. Launching is just the beginning. We offer comprehensive maintenance, monitoring, and support packages to ensure your product remains secure, performant, and up-to-date with the latest OS and browser changes."
  },
  {
    question: "Can you scale teams as products grow?",
    answer: "Our enterprise scalability model is designed for this. As your user base and feature requirements grow, we can rapidly augment your dedicated team with specialized engineers, QA testers, and DevOps experts."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="scroll-section relative overflow-hidden bg-[var(--color-bg-main)] text-[var(--color-text-primary)]">
      <div className="pointer-events-none absolute inset-0 border-t border-[var(--color-border-light)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,var(--color-brand-blue-glow),transparent_60%)]" />

      <div className="site-container relative pb-16 pt-16 md:pb-24">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3 inline-flex items-center gap-2 text-[var(--color-text-brand)]"
          >
            <span className="inline-flex h-3.5 w-3.5 rounded-[3px] bg-[var(--color-brand-blue)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em]">FAQ</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-[var(--color-text-primary)]"
          >
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)]"
          >
            We believe in transparent product partnerships. Here are answers to the most common questions about working with IKEN Technology.
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-3xl">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                className="mb-4"
              >
                <div
                  className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen 
                      ? "border-[var(--color-border-brand)] bg-[var(--color-bg-glass-strong)] shadow-[0_4px_24px_var(--color-brand-blue-glow)]" 
                      : "border-[var(--color-border-light)] bg-[var(--color-bg-glass)] hover:border-[var(--color-border-brand)] hover:bg-[var(--color-bg-glass-strong)]"
                  }`}
                >
                  <button
                    onClick={() => toggleOpen(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-blue)] sm:p-6"
                  >
                    <span className={`text-base font-medium sm:text-lg transition-colors ${isOpen ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-primary)] group-hover:text-[var(--color-text-primary)]"}`}>
                      {faq.question}
                    </span>
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg-main)] text-[var(--color-text-brand)] transition-transform duration-300 ${isOpen ? "rotate-180 border-[var(--color-border-brand)]" : "group-hover:border-[var(--color-border-brand)]"}`}>
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 text-sm leading-relaxed text-[var(--color-text-secondary)] sm:px-6 sm:pb-6 sm:text-base">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
