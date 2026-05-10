"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export function ErrorActions() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
    >
      <motion.div variants={itemVariants}>
        <Link
          href="/"
          className="inline-flex min-w-[160px] items-center justify-center rounded-full bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] px-8 py-3.5 text-sm font-bold tracking-wide text-white shadow-[0_0_14px_rgba(59,130,246,0.3)] transition-all hover:-translate-y-px hover:shadow-[0_0_22px_rgba(59,130,246,0.5)] sm:text-base"
        >
          Back Home
        </Link>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Link
          href="/contact"
          className="inline-flex min-w-[160px] items-center justify-center rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg-glass)] px-8 py-3.5 text-sm font-bold tracking-wide text-[var(--color-text-primary)] transition-all hover:border-[var(--color-border-brand)] hover:bg-[var(--color-bg-glass-strong)] hover:-translate-y-px sm:text-base"
        >
          Start a Project
        </Link>
      </motion.div>
    </motion.div>
  );
}
