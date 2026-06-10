"use client";

import { LayoutGroup, motion } from "framer-motion";
import { useState } from "react";

export type ChallengeSolutionPair = {
  beforeLead: string;
  beforeRest: string;
  afterLead: string;
  afterRest: string;
};

const ROW_TRANSITION = {
  duration: 0.42,
  ease: [0.22, 1, 0.36, 1] as const,
};

const CONNECTOR_LANE = 104;
const CONNECTOR_SIZE = 42;
const CONNECTOR_RADIUS = CONNECTOR_SIZE / 2;

const CARD_BASE =
  "relative min-h-[5rem] rounded-xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] shadow-[0_12px_30px_rgba(15,23,42,0.07)] dark:shadow-[0_16px_36px_rgba(0,0,0,0.32)]";

function CrossIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M5 12h13" strokeLinecap="round" />
      <path d="m14 7 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PairText({
  lead,
  rest,
  active = false,
}: {
  lead: string;
  rest: string;
  active?: boolean;
}) {
  return (
    <p
      className={`text-[13px] leading-[1.65] lg:text-[14px] ${
        active ? "text-white" : "text-[var(--color-text-secondary)]"
      }`}
    >
      <span className={`font-semibold ${active ? "text-white" : "text-[var(--color-text-primary)]"}`}>
        {lead}
      </span>{" "}
      {rest}
    </p>
  );
}

function ConnectorArrow({ isActive }: { isActive: boolean }) {
  return (
    <motion.div
      animate={{ x: isActive ? 24 : -10, scale: isActive ? 1.08 : 1 }}
      transition={ROW_TRANSITION}
      className={`relative z-30 flex shrink-0 items-center justify-center rounded-full border transition-[border-color,background-color,box-shadow,color] duration-[450ms] ${
        isActive
          ? "border-[var(--color-brand-cyan)]/80 bg-gradient-to-br from-[var(--color-brand-cyan)] to-[var(--color-brand-blue)] text-white shadow-[0_0_28px_var(--color-brand-cyan-glow),0_0_12px_rgba(34,211,238,0.45)]"
          : "border-[var(--color-brand-cyan)]/35 bg-[var(--color-bg-glass-strong)] text-[var(--color-brand-cyan)] shadow-[0_0_14px_var(--color-brand-cyan-glow)] dark:bg-[#0a2036]"
      }`}
      style={{ width: CONNECTOR_SIZE, height: CONNECTOR_SIZE }}
    >
      <ArrowIcon />
    </motion.div>
  );
}

function ConnectorLane({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative z-20 flex shrink-0 items-center justify-center" style={{ width: CONNECTOR_LANE }}>
      <motion.div
        animate={{ opacity: isActive ? 0.95 : 0.22, scaleX: isActive ? 0.9 : 0.42 }}
        transition={ROW_TRANSITION}
        className={`absolute h-[3px] origin-center rounded-full transition-colors duration-[450ms] ${
          isActive
            ? "bg-gradient-to-r from-[var(--color-brand-blue)] via-[var(--color-brand-cyan)] to-[var(--color-brand-cyan)]"
            : "bg-[var(--color-brand-cyan)]/30"
        }`}
        style={{ width: CONNECTOR_LANE - 18 }}
        aria-hidden="true"
      />
      <ConnectorArrow isActive={isActive} />
    </div>
  );
}

function ChallengeRow({
  pair,
  index,
  activeIndex,
  onActivate,
  onDeactivate,
}: {
  pair: ChallengeSolutionPair;
  index: number;
  activeIndex: number | null;
  onActivate: (index: number) => void;
  onDeactivate: () => void;
}) {
  const isActive = activeIndex === index;

  return (
    <div
      data-challenge-solution-row={index}
      className="challenge-solution-row relative py-1.5 sm:py-2"
      onMouseEnter={() => onActivate(index)}
      onMouseMove={() => onActivate(index)}
      onMouseLeave={onDeactivate}
      onPointerEnter={() => onActivate(index)}
      onPointerLeave={onDeactivate}
    >
      <div className="flex w-full items-center">
        {/* Before card */}
        <motion.div
          animate={{ x: isActive ? 16 : 0 }}
          transition={ROW_TRANSITION}
          className="relative z-10 min-w-0 flex-1"
        >
          <div
            className={`${CARD_BASE} transition-[border-color,box-shadow] duration-[450ms] ${
              isActive
                ? "border-[var(--color-border-brand)] bg-[var(--color-bg-glass-strong)] shadow-[0_16px_38px_rgba(0,76,153,0.12)] dark:border-[var(--color-brand-cyan)]/25 dark:shadow-[0_0_24px_rgba(34,211,238,0.08)]"
                : ""
            }`}
          >
            <div className="flex min-h-[5rem] items-center gap-3.5 px-5 py-4 sm:gap-4 sm:px-6 sm:py-[1.125rem]">
              <span className="flex h-[1.65rem] w-[1.65rem] shrink-0 items-center justify-center rounded-full border border-rose-500/35 bg-rose-500/10 text-rose-500 dark:border-rose-400/30 dark:bg-rose-500/15 dark:text-rose-400">
                <CrossIcon />
              </span>
              <PairText lead={pair.beforeLead} rest={pair.beforeRest} />
            </div>
          </div>
        </motion.div>

        <ConnectorLane isActive={isActive} />

        {/* After card */}
        <motion.div
          animate={{ x: isActive ? -10 : 0 }}
          transition={ROW_TRANSITION}
          className="relative z-10 min-w-0 flex-1"
        >
          <div
            className={`${CARD_BASE} overflow-hidden transition-[border-color,box-shadow] duration-[450ms] ${
              isActive ? "border-[var(--color-brand-cyan)]/45 shadow-[0_0_34px_var(--color-brand-cyan-glow)]" : ""
            }`}
          >
            <motion.div
              data-challenge-solution-active-fill
              initial={{ opacity: 0 }}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={ROW_TRANSITION}
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--color-brand-blue)] via-[var(--color-brand-cyan)] to-[var(--color-brand-blue)]"
              aria-hidden="true"
            />

            <div
              className={`pointer-events-none absolute top-1/2 z-20 -translate-y-1/2 rounded-full border bg-[var(--color-bg-main)] transition-[border-color,box-shadow] duration-[450ms] ${
                isActive
                  ? "border-[var(--color-brand-cyan)]/35 shadow-[inset_-8px_0_18px_rgba(34,211,238,0.08)]"
                  : "border-[var(--color-border-light)] dark:border-white/[0.06]"
              }`}
              style={{
                left: -CONNECTOR_RADIUS,
                width: CONNECTOR_SIZE,
                height: CONNECTOR_SIZE,
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 flex min-h-[5rem] items-center gap-3.5 px-5 py-4 pl-14 sm:gap-4 sm:px-6 sm:py-[1.125rem] sm:pl-14">
              <div className="min-w-0 flex-1">
                <PairText lead={pair.afterLead} rest={pair.afterRest} active={isActive} />
              </div>
              <span
                className={`flex h-[1.65rem] w-[1.65rem] shrink-0 items-center justify-center rounded-full border transition-[border-color,background-color,color] duration-[450ms] ${
                  isActive
                    ? "border-white/30 bg-white/20 text-white"
                    : "border-[var(--color-brand-cyan)]/20 bg-[var(--color-bg-glass-strong)] text-[var(--color-brand-cyan)] dark:text-emerald-300"
                }`}
              >
                <CheckIcon />
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function DesktopChallengeSolution({ pairs }: { pairs: ChallengeSolutionPair[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <LayoutGroup id="challenge-solution">
      <div
        className="mx-auto w-full max-w-[64rem]"
        onMouseLeave={() => setActiveIndex(null)}
        onPointerLeave={() => setActiveIndex(null)}
      >
        <div
          className="mb-6 grid px-1 sm:mb-7"
          style={{ gridTemplateColumns: `1fr ${CONNECTOR_LANE}px 1fr` }}
        >
          <p className="text-center text-[12px] font-bold uppercase tracking-[0.24em] text-rose-500 dark:text-rose-400">
            Before
          </p>
          <p className="col-start-3 text-center text-[12px] font-bold uppercase tracking-[0.24em] text-emerald-600 dark:text-emerald-400">
            After
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:gap-3.5">
          {pairs.map((pair, index) => (
            <ChallengeRow
              key={pair.beforeLead}
              pair={pair}
              index={index}
              activeIndex={activeIndex}
              onActivate={setActiveIndex}
              onDeactivate={() => setActiveIndex(null)}
            />
          ))}
        </div>
      </div>
    </LayoutGroup>
  );
}

export function ChallengeSolutionSection({
  pairs,
  mobile,
}: {
  pairs: ChallengeSolutionPair[];
  mobile: React.ReactNode;
}) {
  return (
    <section className="relative scroll-mt-28 overflow-hidden border-b border-[var(--color-border-light)] bg-[var(--color-bg-main)] py-16 text-[var(--color-text-primary)] dark:bg-[#050a14] lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.12),transparent_55%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.08),transparent_58%)]" />
      <div className="site-container relative z-10">
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
          <div className="mb-2.5 inline-flex items-center gap-2 text-[var(--color-text-brand)] dark:text-cyan-400">
            <span className="inline-flex h-3 w-3 rounded-[2px] bg-[var(--color-brand-blue)] dark:bg-cyan-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Our Approach</span>
          </div>
          <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-[44px]">
            From Challenge to Solution
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-text-secondary)] sm:text-[15px]">
            Replacing disconnected systems and manual processes with a centralized platform that streamlines and scales
            operations.
          </p>
        </div>

        <div className="hidden lg:block">
          <DesktopChallengeSolution pairs={pairs} />
        </div>

        <div className="lg:hidden">{mobile}</div>
      </div>
    </section>
  );
}
