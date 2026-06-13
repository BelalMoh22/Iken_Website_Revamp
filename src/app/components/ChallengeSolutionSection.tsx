"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export type ChallengeSolutionPair = {
  number: string;
  challengeTitle: string;
  challengeDescription: string;
  challengeIcon: "list" | "clock" | "eye" | "tag";
  solutionTitle: string;
  solutionDescription: string;
  solutionIcon: "layers" | "zap" | "chart" | "sliders";
  solutionAccent: "purple" | "blue" | "green" | "orange";
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const solutionAccentClasses: Record<ChallengeSolutionPair["solutionAccent"], string> = {
  purple: "border-purple-500/25 bg-purple-500/10 text-purple-400 dark:text-purple-300",
  blue: "border-blue-500/25 bg-blue-500/10 text-[var(--color-brand-blue)]",
  green: "border-emerald-500/25 bg-emerald-500/10 text-emerald-500 dark:text-emerald-400",
  orange: "border-orange-500/25 bg-orange-500/10 text-orange-500 dark:text-orange-400",
};

const solutionTitleClasses: Record<ChallengeSolutionPair["solutionAccent"], string> = {
  purple: "text-purple-500 dark:text-purple-300",
  blue: "text-[var(--color-brand-blue)]",
  green: "text-emerald-500 dark:text-emerald-400",
  orange: "text-orange-500 dark:text-orange-400",
};

function Icon({ name, className = "h-[21px] w-[21px]" }: { name: ChallengeSolutionPair["challengeIcon"] | ChallengeSolutionPair["solutionIcon"]; className?: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const icons: Record<ChallengeSolutionPair["challengeIcon"] | ChallengeSolutionPair["solutionIcon"], ReactNode> = {
    list: (
      <>
        <path d="M8 7h10" />
        <path d="M8 12h10" />
        <path d="M8 17h10" />
        <path d="M4 7h.01M4 12h.01M4 17h.01" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" />
      </>
    ),
    eye: (
      <>
        <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
        <circle cx="12" cy="12" r="2.5" />
      </>
    ),
    tag: (
      <>
        <path d="M4 5v6.2c0 .5.2 1 .6 1.4l7.8 7.8a2 2 0 0 0 2.8 0l5.2-5.2a2 2 0 0 0 0-2.8L12.6 4.6A2 2 0 0 0 11.2 4H5a1 1 0 0 0-1 1Z" />
        <circle cx="8" cy="8" r="1.15" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </>
    ),
    zap: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
    chart: (
      <>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M8 16v-4M12 16V8M16 16v-6" />
      </>
    ),
    sliders: (
      <>
        <path d="M4 7h9M17 7h3" />
        <path d="M4 12h3M11 12h9" />
        <path d="M4 17h11M19 17h1" />
        <circle cx="15" cy="7" r="2" />
        <circle cx="9" cy="12" r="2" />
        <circle cx="17" cy="17" r="2" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...common}>
      {icons[name]}
    </svg>
  );
}

function ArrowConnector() {
  return (
    <div className="hidden items-center justify-self-center lg:flex">
      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg-glass)] text-[var(--color-text-muted)] transition-colors duration-300 group-hover:border-[var(--color-border-brand)] group-hover:text-[var(--color-text-brand)]">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>
    </div>
  );
}

function MobileDivider() {
  return (
    <div className="my-3 flex items-center gap-3 pl-[25px]">
      <span className="h-px flex-1 bg-[var(--color-border-light)]" />
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg-main)] text-[var(--color-text-muted)] shadow-sm">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
      <span className="h-px flex-1 bg-[var(--color-border-light)]" />
    </div>
  );
}

function ChallengeSolutionRow({ pair, index }: { pair: ChallengeSolutionPair; index: number }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ delay: index * 0.04 }}
      className="group overflow-hidden rounded-[22px] border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-4 text-left shadow-sm transition-all duration-300 hover:border-[var(--color-border-brand)] sm:p-5 lg:grid lg:min-h-[108px] lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-8 lg:rounded-2xl lg:px-9 lg:py-6"
    >
      <div className="lg:hidden">
        <div className="mb-4 flex items-center">
          <span className="flex h-9 min-w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-brand)] bg-[var(--color-brand-blue-glow)] px-3 text-[13px] font-extrabold leading-none tabular-nums text-[var(--color-text-brand)]">
            {pair.number}
          </span>
        </div>

        <div className="flex min-w-0 gap-3.5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] border border-[var(--color-brand-blue)]/25 bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)]">
            <Icon name={pair.challengeIcon} className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="mb-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">Challenge</p>
            <h3 className="text-[15.5px] font-extrabold leading-snug text-[var(--color-text-primary)]">
              {pair.challengeTitle}
            </h3>
            <p className="mt-1.5 text-[12.5px] leading-[1.55] text-[var(--color-text-secondary)]">
              {pair.challengeDescription}
            </p>
          </div>
        </div>

        <MobileDivider />

        <div className="flex min-w-0 gap-3.5">
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] border ${solutionAccentClasses[pair.solutionAccent]}`}>
            <Icon name={pair.solutionIcon} className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="mb-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">Solution</p>
            <h3 className={`text-[15.5px] font-extrabold leading-snug ${solutionTitleClasses[pair.solutionAccent]}`}>
              {pair.solutionTitle}
            </h3>
            <p className="mt-1.5 text-[12.5px] leading-[1.55] text-[var(--color-text-secondary)]">
              {pair.solutionDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Left Column (Challenge + Number) - styled with brand blue */}
      <div className="hidden min-w-0 items-center gap-5 lg:flex">
        {/* Row number */}
        <span className="min-w-[28px] shrink-0 text-[21px] font-extrabold leading-none tabular-nums text-[var(--color-text-brand)]">
          {pair.number}
        </span>
        {/* Icon */}
        <div className="flex min-w-0 flex-1 items-center gap-5">
          <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[12px] border border-[var(--color-brand-blue)]/25 bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)]">
            <Icon name={pair.challengeIcon} />
          </div>
          {/* Text content */}
          <div className="min-w-0 flex-1">
            <h3 className="text-[16.5px] font-extrabold leading-snug text-[var(--color-text-primary)]">
              {pair.challengeTitle}
            </h3>
            <p className="mt-1 text-[13px] leading-[1.55] text-[var(--color-text-secondary)]">
              {pair.challengeDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Middle Column (Arrow Connector exactly in the half / center) */}
      <ArrowConnector />

      {/* Right Column (Solution) - keeping original accent colors */}
      <div className="hidden min-w-0 items-center gap-5 lg:flex">
        {/* Icon */}
        <div className={`flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[12px] border ${solutionAccentClasses[pair.solutionAccent]}`}>
          <Icon name={pair.solutionIcon} />
        </div>
        {/* Text content */}
        <div className="min-w-0 flex-1">
          <h3 className={`text-[16.5px] font-extrabold leading-snug ${solutionTitleClasses[pair.solutionAccent]}`}>
            {pair.solutionTitle}
          </h3>
          <p className="mt-1 text-[13px] leading-[1.55] text-[var(--color-text-secondary)]">
            {pair.solutionDescription}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export function ChallengeSolutionSection({ pairs }: { pairs: ChallengeSolutionPair[] }) {
  return (
    <section className="relative scroll-mt-28 overflow-hidden border-b border-[var(--color-border-light)] bg-[var(--color-bg-main)] py-14 text-[var(--color-text-primary)] lg:py-20">
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,var(--color-brand-blue-glow),transparent_60%)] opacity-60" />

      <div className="site-container relative z-10">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
          <div className="mb-2 inline-flex items-center justify-center gap-2 text-[var(--color-text-brand)]">
            <span className="inline-flex h-3 w-3 rounded-[2px] bg-[var(--color-brand-blue)]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em]">OUR APPROACH</span>
          </div>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-[36px]">
            From Challenge to Solution
          </h2>
          <p className="mx-auto mt-2.5 max-w-[620px] text-sm leading-relaxed text-[var(--color-text-secondary)]">
            Replacing disconnected systems and manual processes with a centralized platform that streamlines and scales operations.
          </p>
        </div>

        {/* Rows - enlarged to max-w-[1200px] */}
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-3.5 lg:gap-4">
          {pairs.map((pair, index) => (
            <ChallengeSolutionRow key={pair.number} pair={pair} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
