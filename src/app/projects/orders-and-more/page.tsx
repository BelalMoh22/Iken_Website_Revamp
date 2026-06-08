"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import type { ReactNode } from "react";

import { Header } from "../../sections/Header";
import { ContactSection } from "../../sections/ContactSection";
import { useMounted } from "../../hooks/useMounted";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const, delay },
  },
});

type IconName =
  | "cloud"
  | "container"
  | "credit-card"
  | "database"
  | "eye"
  | "layers"
  | "server"
  | "shopping-cart"
  | "sparkles"
  | "tags"
  | "truck"
  | "users"
  | "workflow"
  | "zap";

function AppIcon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const paths: Record<IconName, ReactNode> = {
    cloud: <path d="M17.5 18H7.2a4.2 4.2 0 0 1-.7-8.34A5.8 5.8 0 0 1 17.2 7.7 4.2 4.2 0 0 1 17.5 18Z" />,
    container: (
      <>
        <path d="M4 7.5 12 3l8 4.5-8 4.5-8-4.5Z" />
        <path d="M4 7.5v9L12 21l8-4.5v-9" />
        <path d="M12 12v9" />
      </>
    ),
    "credit-card": (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="M3 10h18M7 15h4" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
        <path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
      </>
    ),
    eye: (
      <>
        <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </>
    ),
    server: (
      <>
        <rect x="4" y="4" width="16" height="7" rx="2" />
        <rect x="4" y="13" width="16" height="7" rx="2" />
        <path d="M8 7.5h.01M8 16.5h.01M12 7.5h4M12 16.5h4" />
      </>
    ),
    "shopping-cart": (
      <>
        <path d="M4 5h2l2 10h10l2-7H7" />
        <circle cx="10" cy="20" r="1.5" />
        <circle cx="17" cy="20" r="1.5" />
      </>
    ),
    sparkles: (
      <>
        <path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3Z" />
        <path d="m5 14 .9 2.1L8 17l-2.1.9L5 20l-.9-2.1L2 17l2.1-.9L5 14ZM19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z" />
      </>
    ),
    tags: (
      <>
        <path d="M4 5v6.2c0 .5.2 1 .6 1.4l7.8 7.8a2 2 0 0 0 2.8 0l5.2-5.2a2 2 0 0 0 0-2.8L12.6 4.6A2 2 0 0 0 11.2 4H5a1 1 0 0 0-1 1Z" />
        <circle cx="8" cy="8" r="1.2" />
      </>
    ),
    truck: (
      <>
        <path d="M3 7h11v10H3zM14 11h3.5l2.5 3v3h-6z" />
        <circle cx="7" cy="19" r="1.5" />
        <circle cx="17" cy="19" r="1.5" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="9.5" cy="7" r="4" />
        <path d="M21 21v-2a3.5 3.5 0 0 0-2.8-3.4M16.5 3.4a4 4 0 0 1 0 7.2" />
      </>
    ),
    workflow: (
      <>
        <rect x="3" y="4" width="6" height="6" rx="1.5" />
        <rect x="15" y="14" width="6" height="6" rx="1.5" />
        <path d="M9 7h3a3 3 0 0 1 3 3v1M15 17h-3a3 3 0 0 1-3-3v-1" />
      </>
    ),
    zap: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  };

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...common}>
      {paths[name]}
    </svg>
  );
}

function TechBrandIcon({ name }: { name: string }) {
  if (name === "React") {
    return (
      <svg viewBox="0 0 64 64" className="h-10 w-10 text-[#61dafb]" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="3">
          <ellipse cx="32" cy="32" rx="25" ry="10" />
          <ellipse cx="32" cy="32" rx="25" ry="10" transform="rotate(60 32 32)" />
          <ellipse cx="32" cy="32" rx="25" ry="10" transform="rotate(120 32 32)" />
        </g>
        <circle cx="32" cy="32" r="5" fill="currentColor" />
      </svg>
    );
  }

  if (name === "Node.js") {
    return (
      <div className="flex h-10 items-center text-[22px] font-black tracking-tight text-[#8cc84b]" aria-hidden="true">
        node<span className="ml-0.5 text-[15px]">js</span>
      </div>
    );
  }

  if (name === "PostgreSQL") {
    return (
      <svg viewBox="0 0 64 64" className="h-10 w-10 text-[#6fb6ff]" aria-hidden="true">
        <path d="M17 33C12 28 13 17 21 12c7-5 20-5 26 2 6 7 5 20-1 25-3 2-7 3-11 2l-2 10c-.4 2-3.4 2-3.8.1L27 41c-4 0-7-2-10-8Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="M37 21c3 2 5 6 4 10M27 22c-2 4-2 9 1 13M34 40c4 3 8 3 12 1" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <circle cx="26" cy="22" r="1.7" fill="currentColor" />
        <circle cx="38" cy="22" r="1.7" fill="currentColor" />
      </svg>
    );
  }

  if (name === "AWS") {
    return (
      <svg viewBox="0 0 64 64" className="h-10 w-10 text-[#ff9900]" aria-hidden="true">
        <path d="M14 34 32 24l18 10-18 10-18-10Z" fill="currentColor" opacity="0.9" />
        <path d="M14 24 32 14l18 10-18 10-18-10Z" fill="currentColor" opacity="0.55" />
        <path d="M14 44 32 34l18 10-18 10-18-10Z" fill="currentColor" opacity="0.75" />
        <path d="M16 50c10 5 22 5 32-1" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "Redis") {
    return (
      <svg viewBox="0 0 64 64" className="h-10 w-10 text-[#dc382d]" aria-hidden="true">
        <path d="M12 20 32 10l20 10-20 10-20-10Z" fill="currentColor" />
        <path d="M12 30 32 20l20 10-20 10-20-10Z" fill="currentColor" opacity="0.78" />
        <path d="M12 40 32 30l20 10-20 10-20-10Z" fill="currentColor" opacity="0.58" />
        <path d="M25 19h14M23 29h18M24 39h16" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
      </svg>
    );
  }

  if (name === "Docker") {
    return (
      <svg viewBox="0 0 64 64" className="h-10 w-10 text-[#0db7ed]" aria-hidden="true">
        <path d="M18 28h7v7h-7v-7Zm9 0h7v7h-7v-7Zm9 0h7v7h-7v-7ZM27 19h7v7h-7v-7Zm9 0h7v7h-7v-7Z" fill="currentColor" />
        <path d="M10 36h36c2.8 0 5.5-1 7.6-2.9.6 4-1 8-4.4 10.6C45.8 46.3 40.5 48 32 48H20.5C15 48 10.6 43.8 10 36Z" fill="currentColor" />
        <path d="M50 31c1.8-.2 3.5.5 4.8 1.8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  return <div className="text-5xl font-black leading-none text-[#635bff]" aria-hidden="true">S</div>;
}

const challengeCards = [
  {
    title: "Fragmented Systems",
    desc: "Data scattered across multiple disconnected platforms leading to inconsistencies.",
    icon: "layers" as const,
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
  },
  {
    title: "Manual Processes",
    desc: "High dependency on manual work and spreadsheets causing human error and delays.",
    icon: "workflow" as const,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
  {
    title: "Limited Visibility",
    desc: "Lack of real-time insights into operations and overall business performance.",
    icon: "eye" as const,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
  },
  {
    title: "Complex Pricing",
    desc: "Difficulty managing dynamic pricing rules and discounts across regions.",
    icon: "tags" as const,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
];

const sources = [
  { label: "Vendors", icon: "users" as const, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { label: "Products", icon: "container" as const, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
  { label: "Inventory", icon: "database" as const, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
  { label: "Pricing Rules", icon: "workflow" as const, color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
];
const outcomes = [
  { label: "Order Management", icon: "shopping-cart" as const, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  { label: "Payments", icon: "credit-card" as const, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
  { label: "Analytics", icon: "zap" as const, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
  { label: "Reports", icon: "database" as const, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
  { label: "Shipping & Delivery", icon: "truck" as const, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
];
const capabilityPills = ["Automation", "Real time sync", "Data integrity", "Security"];

const initiatives = [
  {
    n: "01",
    title: "Vendor Management",
    desc: "Unified onboarding and performance tracking.",
  },
  {
    n: "02",
    title: "Order Management",
    desc: "Streamlined order lifecycle from placement to delivery.",
  },
  {
    n: "03",
    title: "Pricing & Discounts Engine",
    desc: "Advanced rules and dynamic pricing automation.",
  },
  {
    n: "04",
    title: "Analytics & Reporting",
    desc: "Real-time dashboards and actionable insights.",
  },
];

const metrics = [
  { v: "45%", l: "Faster Time-to-Market", sub: "New features deployed in half the time" },
  { v: "30%", l: "Order Volume Increase", sub: "Following UI/UX enhancements and platform optimization" },
  { v: "5+", l: "Departments Supported", sub: "E-Commerce, HR, Sales, Marketing, Operations" },
  { v: "200+", l: "Employees Trained", sub: "Internal staff upskilled through the custom LMS" },
];

const chartData = [
  { label: "Feature Delivery Speed", before: 50, after: 80 },
  { label: "Platform Uptime", before: 65, after: 98 },
  { label: "Customer Satisfaction", before: 72, after: 88 },
];

const techStack = [
  {
    name: "React",
    category: "Frontend Framework",
    desc: "Building fast, interactive, and responsive user experiences.",
    icon: "sparkles" as const,
  },
  {
    name: "Node.js",
    category: "Backend Runtime",
    desc: "Powering business logic, APIs, and platform operations.",
    icon: "server" as const,
  },
  {
    name: "PostgreSQL",
    category: "Database",
    desc: "Secure and reliable data storage for business information.",
    icon: "database" as const,
  },
  {
    name: "AWS",
    category: "Cloud Infrastructure",
    desc: "Providing scalability, performance, and high availability.",
    icon: "cloud" as const,
  },
  {
    name: "Redis",
    category: "Caching Layer",
    desc: "Improving speed and performance across the platform.",
    icon: "zap" as const,
  },
  {
    name: "Docker",
    category: "Containerization",
    desc: "Ensuring consistent deployments and streamlined workflows.",
    icon: "container" as const,
  },
  {
    name: "Stripe",
    category: "Payment Processing",
    desc: "Enabling secure online payments and financial transactions.",
    icon: "credit-card" as const,
  },
];

function SectionHeader({
  label,
  title,
  desc,
  className = "",
}: {
  label: string;
  title: string;
  desc: string;
  className?: string;
}) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0)} className={`mb-8 lg:mb-12 ${className}`}>
      <div className="mb-2.5 inline-flex items-center gap-2 text-[var(--color-text-brand)]">
        <span className="inline-flex h-3 w-3 rounded-[2px] bg-[var(--color-brand-blue)]" />
        <span className="text-[11px] font-bold uppercase tracking-[0.2em]">{label}</span>
      </div>
      <h2 className="text-3xl font-black leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-[42px]">
        {title}
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--color-text-secondary)] opacity-85 sm:text-base">
        {desc}
      </p>
    </motion.div>
  );
}

function OrdersLogo({ className = "h-12 w-auto" }: { className?: string }) {
  const { theme } = useTheme();
  const mounted = useMounted();
  const src = mounted && theme === "dark" ? "/clients/o-and-m-dark.svg" : "/clients/o-and-m-light.svg";

  return (
    <Image
      src={src}
      alt="Orders & More logo"
      width={168}
      height={64}
      className={`${className} object-contain`}
      style={{ width: "auto" }}
    />
  );
}

function HeroMockup() {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeUp(0.12)} className="relative mx-auto w-full max-w-[640px]">
      <div className="absolute -inset-8 rounded-full bg-[var(--color-brand-blue-glow)] blur-3xl" />
      <div className="relative">
        <Image
          src="/clients/O&M.png"
          alt="Orders & More platform dashboard and storefront mockup"
          width={1800}
          height={1500}
          className="h-auto w-full object-contain drop-shadow-2xl"
          priority
        />
      </div>
    </motion.div>
  );
}

function SolutionFlow() {
  const reduce = useReducedMotion();
  const topPaths = [
    "M 330 54 C 330 110 500 136 570 170",
    "M 500 54 C 500 112 565 138 605 170",
    "M 680 54 C 680 112 635 138 625 170",
    "M 850 54 C 850 110 710 136 640 170",
  ];
  const topAnchors = [
    [330, 54],
    [500, 54],
    [680, 54],
    [850, 54],
  ];
  const leftPaths = [
    "M 280 218 H 310 L 430 250",
    "M 280 272 H 310 L 430 270",
    "M 280 326 H 310 L 430 290",
    "M 280 380 H 310 L 430 310",
  ];
  const rightPaths = [
    "M 850 250 L 950 205 H 970",
    "M 850 268 L 950 269 H 970",
    "M 850 286 L 950 333 H 970",
    "M 850 304 L 950 397 H 970",
    "M 850 322 L 950 461 H 970",
  ];
  const flowPaths = [...topPaths, ...leftPaths, ...rightPaths];
  const pathProps = reduce
    ? { opacity: 0.72, strokeDashoffset: 0 }
    : { opacity: [0.28, 0.72, 0.48], strokeDashoffset: [28, 0, -28] };
  const mobileConnector = (delay = 0, dotCount = 1) => (
    <div className="relative mx-auto h-14 w-8 lg:hidden" aria-hidden="true">
      <div className="absolute left-1/2 top-0 h-full -translate-x-1/2 border-l border-dashed border-[var(--color-border-brand)]" />
      {!reduce &&
        Array.from({ length: dotCount }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[var(--color-brand-cyan)] shadow-[0_0_14px_var(--color-brand-cyan)]"
            animate={{ y: [0, 46], opacity: [0, 1, 0] }}
            transition={{
              duration: 1.6,
              delay: delay + index * 0.28,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
    </div>
  );

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp(0.06)}>
      <div className="mb-8 flex flex-wrap justify-center gap-3 lg:hidden">
        {capabilityPills.map((pill, i) => (
          <motion.span
            key={pill}
            variants={fadeUp(i * 0.04)}
            className="rounded-full border border-[var(--color-border-brand)] bg-[var(--color-brand-blue-glow)] px-4 py-2 text-xs font-bold text-[var(--color-text-brand)]"
          >
            {pill}
          </motion.span>
        ))}
      </div>
      {mobileConnector(0)}

      <div className="relative mx-auto hidden h-[520px] max-w-7xl overflow-visible lg:block">
        <div className="absolute inset-x-0 top-0 z-20 h-12">
          {capabilityPills.map((pill, i) => (
            <motion.span
              key={pill}
              variants={fadeUp(i * 0.04)}
              className="absolute -translate-x-1/2 rounded-full border border-[var(--color-border-brand)] bg-[var(--color-bg-card)]/80 px-5 py-2.5 text-sm font-bold text-[var(--color-text-primary)] shadow-[0_10px_30px_var(--color-brand-blue-glow)] backdrop-blur-md"
              style={{ left: `${(topAnchors[i][0] / 1280) * 100}%` }}
            >
              {pill}
            </motion.span>
          ))}
        </div>

        <div className="absolute left-0 top-[165px] z-20 w-[245px]">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">Sources</p>
          <div className="space-y-4">
            {sources.map((item) => (
              <div key={item.label} className="flex h-12 items-center gap-4 text-lg font-medium text-[var(--color-text-primary)]">
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border ${item.border} ${item.bg} ${item.color}`}>
                  <AppIcon name={item.icon} className="h-5 w-5" />
                </span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <svg className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible" viewBox="0 0 1280 520" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <filter id="solution-flow-glow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <motion.path
            d="M 310 218 V 380"
            fill="none"
            stroke="var(--color-brand-blue)"
            strokeWidth="1.15"
            strokeLinecap="round"
            strokeDasharray="2.5 7"
            initial={reduce ? false : { opacity: 0.2, strokeDashoffset: 24 }}
            whileInView={reduce ? { opacity: 0.55, strokeDashoffset: 0 } : { opacity: [0.2, 0.55, 0.36], strokeDashoffset: [24, 0, -24] }}
            viewport={{ once: false, amount: 0.4 }}
            transition={reduce ? undefined : { duration: 4.2, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 950 205 V 461"
            fill="none"
            stroke="var(--color-brand-blue)"
            strokeWidth="1.15"
            strokeLinecap="round"
            strokeDasharray="2.5 7"
            initial={reduce ? false : { opacity: 0.2, strokeDashoffset: 24 }}
            whileInView={reduce ? { opacity: 0.55, strokeDashoffset: 0 } : { opacity: [0.2, 0.55, 0.36], strokeDashoffset: [24, 0, -24] }}
            viewport={{ once: false, amount: 0.4 }}
            transition={reduce ? undefined : { duration: 4.2, repeat: Infinity, ease: "linear", delay: 0.2 }}
          />
          {flowPaths.map((d, i) => (
            <motion.path
              key={d}
              d={d}
              fill="none"
              stroke="var(--color-brand-blue)"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeDasharray="2.5 7"
              initial={reduce ? false : { opacity: 0.18, strokeDashoffset: 28 }}
              whileInView={pathProps}
              viewport={{ once: false, amount: 0.4 }}
              transition={reduce ? undefined : { duration: 4.6, delay: i * 0.12, repeat: Infinity, ease: "linear" }}
            />
          ))}
          {topAnchors.map(([cx, cy]) => (
            <circle key={`${cx}-${cy}-anchor`} cx={cx} cy={cy} r="3.5" fill="var(--color-brand-cyan)" opacity="0.9" filter="url(#solution-flow-glow)" />
          ))}
          {!reduce &&
            flowPaths.map((d, i) => (
              <motion.circle key={`${d}-dot`} r="3.2" fill="var(--color-brand-cyan)" filter="url(#solution-flow-glow)" opacity="0.92">
                <animateMotion dur="2.6s" begin={`${i * 0.12}s`} repeatCount="indefinite" path={d} />
              </motion.circle>
            ))}
        </svg>

        <div className="absolute left-1/2 top-[170px] z-20 flex w-[420px] -translate-x-1/2 justify-center">
          <div className="w-full rounded-[24px] border border-[var(--color-border-brand)] bg-[var(--color-bg-card)]/95 px-8 py-7 text-center shadow-2xl backdrop-blur-md">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl border border-[var(--color-border-brand)] bg-[var(--color-brand-blue-glow)] shadow-[0_12px_36px_var(--color-brand-blue-glow)]">
              <OrdersLogo className="h-10 w-auto" />
            </div>
            <h3 className="text-xl font-black text-[var(--color-text-primary)]">Orders & more</h3>
            <p className="mt-2 text-sm font-semibold text-[var(--color-text-secondary)]">Unified. Automated. Intelligent.</p>
          </div>
        </div>

        <div className="absolute right-0 top-[142px] z-20 w-[300px]">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">Outcomes</p>
          <div className="space-y-4">
            {outcomes.map((item) => (
              <div key={item.label} className="flex h-12 items-center gap-4 text-lg font-medium text-[var(--color-text-primary)]">
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border ${item.border} ${item.bg} ${item.color}`}>
                  <AppIcon name={item.icon} className="h-5 w-5" />
                </span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-0 lg:hidden">
        <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-5">
          <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[var(--color-brand-blue-glow)] blur-3xl" />
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">Sources</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {sources.map((item) => (
              <div key={item.label} className="flex items-center gap-3 rounded-xl border border-[var(--color-border-light)] bg-[var(--color-bg-glass)] px-4 py-3 text-sm font-bold">
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${item.border} ${item.bg} ${item.color}`}>
                  <AppIcon name={item.icon} className="h-4 w-4" />
                </span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        {mobileConnector(0.25)}
        <div className="relative overflow-hidden rounded-[24px] border border-[var(--color-border-brand)] bg-[var(--color-bg-card)] p-6 text-center shadow-[0_14px_38px_var(--color-brand-blue-glow)]">
          <div className="pointer-events-none absolute inset-x-8 -top-20 h-32 rounded-full bg-[var(--color-brand-blue-glow)] blur-3xl" />
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--color-border-brand)] bg-[var(--color-brand-blue-glow)]">
            <OrdersLogo className="h-9 w-auto" />
          </div>
          <h3 className="text-2xl font-black">Orders & more</h3>
          <p className="mt-2 text-sm font-semibold text-[var(--color-text-secondary)]">Unified. Automated. Intelligent.</p>
        </div>
        {mobileConnector(0.5, 4)}
        <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-5">
          <div className="pointer-events-none absolute -left-12 bottom-0 h-32 w-32 rounded-full bg-[var(--color-brand-cyan-glow)] blur-3xl" />
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">Outcomes</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {outcomes.map((item) => (
              <div key={item.label} className="flex items-center gap-3 rounded-xl border border-[var(--color-border-light)] bg-[var(--color-bg-glass)] px-4 py-3 text-sm font-bold">
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${item.border} ${item.bg} ${item.color}`}>
                  <AppIcon name={item.icon} className="h-4 w-4" />
                </span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function LaptopPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-[620px]"
    >
      <div className="absolute -inset-10 rounded-full bg-[var(--color-brand-blue-glow)] blur-3xl" />
      <div className="relative rounded-t-[28px] border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-3 shadow-2xl">
        <div className="rounded-t-[20px] border border-[var(--color-border-light)] bg-[var(--color-bg-main)]/70 p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />
            </div>
            <OrdersLogo className="h-7 w-auto" />
          </div>
          <div className="grid gap-4 md:grid-cols-[0.7fr_1fr]">
            <div className="space-y-3">
              {["Orders", "Vendors", "Products", "Reports"].map((item, i) => (
                <div key={item} className={`rounded-xl border border-[var(--color-border-light)] px-3 py-3 text-xs font-bold ${i === 0 ? "bg-[var(--color-brand-blue-glow)] text-[var(--color-text-brand)]" : "bg-[var(--color-bg-glass)] text-[var(--color-text-secondary)]"}`}>
                  {item}
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-glass)] p-4">
              <div className="mb-4 grid gap-3 sm:grid-cols-3">
                {[
                  ["Revenue", "EGP 1.2M"],
                  ["Orders", "4,820"],
                  ["Vendors", "120"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">{label}</p>
                    <p className="mt-2 text-sm font-black text-[var(--color-text-primary)]">{value}</p>
                  </div>
                ))}
              </div>
              <div className="flex h-40 items-end gap-2 rounded-xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-4">
                {[34, 56, 45, 72, 62, 88, 74, 95].map((height) => (
                  <span key={height} style={{ height: `${height}%` }} className="flex-1 rounded-t bg-gradient-to-t from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)]" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto h-4 w-[78%] rounded-b-[28px] border-x border-b border-[var(--color-border-light)] bg-[var(--color-bg-glass-strong)]" />
    </motion.div>
  );
}

function ResultsSection() {
  return (
    <section id="results" className="scroll-section relative overflow-hidden border-b border-[var(--color-border-light)] py-12 lg:py-20">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute right-[5%] bottom-[10%] h-[450px] w-[450px] rounded-full bg-[var(--color-brand-cyan-glow)] opacity-[0.35] blur-[120px]" />
      </div>

      <div className="site-container relative z-10">
        <SectionHeader
          label="Outcomes"
          title="Impact & Results"
          desc="Measurable business outcomes across multiple dimensions, demonstrating the tangible value of the TAAS model in accelerating digital transformation."
          className="max-w-3xl"
        />

        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          <div className="w-full lg:col-span-6 xl:col-span-5">
            <div className="grid h-full grid-cols-2 gap-4 sm:gap-5">
              {metrics.map((item, i) => (
                <motion.div
                  key={item.l}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp(i * 0.05)}
                  className="group flex min-h-[150px] flex-col items-center justify-center rounded-[20px] border border-[var(--color-border-light)]/60 bg-[var(--color-bg-card)]/50 p-4 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-brand-blue)]/30 hover:bg-[var(--color-bg-glass-strong)]/60 hover:shadow-[0_10px_30px_rgba(59,130,246,0.06)] sm:min-h-[170px] sm:p-5"
                >
                  <span className="select-none bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-3xl font-black text-transparent transition-transform duration-300 group-hover:scale-105 sm:text-4xl">
                    {item.v}
                  </span>
                  <span className="mt-2 text-xs font-bold text-[var(--color-text-primary)] transition-colors duration-300 sm:text-sm">
                    {item.l}
                  </span>
                  <span className="mt-1.5 max-w-[180px] text-[10px] leading-relaxed text-[var(--color-text-muted)] sm:text-xs">
                    {item.sub}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex w-full lg:col-span-6 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex w-full flex-col justify-between overflow-hidden rounded-[24px] border border-[var(--color-border-light)]/60 bg-[var(--color-bg-card)]/40 p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-[var(--color-border-brand)]/40 sm:p-6 md:p-7"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-tr from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] opacity-[0.05] blur-3xl transition-transform duration-700 group-hover:scale-125" />

              <div className="relative z-10 flex h-full w-full flex-col">
                <div className="mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-text-brand)] sm:text-xs">
                    Before vs. After Partnership
                  </span>
                </div>

                <div className="relative mt-2 min-h-[220px] w-full flex-1 pl-8 pr-2 sm:min-h-[240px]">
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0 pl-8">
                    {[100, 80, 60, 40, 20].map((val) => (
                      <div key={val} className="absolute left-8 right-0 flex items-center border-t border-[var(--color-border-light)]/40" style={{ bottom: `${val}%` }}>
                        <span className="absolute -left-8 w-6 -translate-y-1/2 select-none pr-1 text-right text-[10px] font-bold tabular-nums text-[var(--color-text-muted)] sm:text-[11px]">
                          {val}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="absolute bottom-0 left-8 right-0 top-0 flex items-end justify-around">
                    {chartData.map((data) => (
                      <div key={data.label} className="group/bar relative flex h-full w-1/3 flex-col items-center justify-end">
                        <div className="flex h-full w-full items-end justify-center gap-1.5 pb-[2px] sm:gap-2.5">
                          <motion.div
                            initial={{ height: "0%" }}
                            whileInView={{ height: `${data.before}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                            className="w-3.5 rounded-t-[4px] bg-slate-400/20 transition-all duration-300 group-hover/bar:bg-slate-400/30 dark:bg-slate-700/35 dark:group-hover/bar:bg-slate-700/50 sm:w-5 md:w-6"
                          />
                          <motion.div
                            initial={{ height: "0%" }}
                            whileInView={{ height: `${data.after}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            className="w-3.5 rounded-t-[4px] bg-gradient-to-t from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] shadow-[0_0_15px_rgba(14,165,233,0.1)] transition-all duration-300 group-hover/bar:brightness-110 group-hover/bar:shadow-[0_0_20px_rgba(14,165,233,0.2)] sm:w-5 md:w-6"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-3 flex justify-around pl-8">
                  {chartData.map((data) => (
                    <div key={data.label} className="w-1/3 px-1 text-center">
                      <span className="line-clamp-2 text-[10px] font-semibold leading-snug text-[var(--color-text-muted)] sm:line-clamp-none sm:text-xs">
                        {data.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="relative z-10 mt-6 flex gap-5 pl-8 text-xs">
                  <span className="flex select-none items-center gap-2 text-[var(--color-text-muted)]">
                    <span className="h-2.5 w-2.5 rounded-full border border-[var(--color-border-light)]/40 bg-slate-400/30 dark:bg-slate-700/50" />
                    Before
                  </span>
                  <span className="flex select-none items-center gap-2 font-semibold text-[var(--color-text-brand)]">
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
  );
}

export default function OrdersAndMoreCaseStudy() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-main)] text-[var(--color-text-primary)]">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-[var(--color-brand-blue-glow)] opacity-[0.5] blur-[140px]" />
        <div className="absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[var(--color-brand-cyan-glow)] opacity-[0.4] blur-[140px]" />
      </div>

      <Header />

      <main className="relative z-10">
        <section id="hero" className="relative overflow-hidden border-b border-[var(--color-border-light)] pb-12 pt-6 sm:pb-16 sm:pt-8 lg:pb-28 lg:pt-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,var(--color-brand-blue-glow),transparent)]" />
          <div className="site-container">
            <nav className="mb-8 flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]" aria-label="Breadcrumb">
              <Link href="/" className="transition hover:text-[var(--color-text-brand)]">Home</Link>
              <span className="opacity-30">/</span>
              <Link href="/#work" className="transition hover:text-[var(--color-text-brand)]">Projects</Link>
              <span className="opacity-30">/</span>
              <span className="font-bold text-[var(--color-text-primary)]">Orders And More</span>
            </nav>

            <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
              <motion.div initial="hidden" animate="visible" variants={fadeUp(0)} className="min-w-0">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-border-brand)] bg-[var(--color-brand-blue-glow)] px-3.5 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-blue)]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-brand)]">Case Study · TAAS</span>
                </div>
                <h1 className="mb-4 text-4xl font-black leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl">
                  Orders and More
                </h1>
                <p className="mb-5 text-xl font-semibold leading-snug text-[var(--color-text-secondary)] sm:text-2xl lg:mb-6">
                  Your All-in-One B2B E-Commerce Platform
                </p>
                <p className="mb-6 max-w-lg text-base leading-relaxed text-[var(--color-text-secondary)] opacity-80 lg:mb-8">
                  A unified e-commerce operations platform empowering businesses to manage vendors, orders, pricing, and fulfillment from one place.
                </p>

                <div className="mb-6 grid gap-4 border-l-2 border-[var(--color-brand-blue)] pl-4 min-[380px]:grid-cols-3 lg:mb-8">
                  {[
                    { label: "E-Commerce", value: "Platform" },
                    { label: "TAAS", value: "Model" },
                    { label: "Full-Stack", value: "Delivery" },
                  ].map((item) => (
                    <div key={item.label} className="flex min-w-0 flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-brand)]">{item.label}</span>
                      <span className="mt-1 text-sm font-bold text-[var(--color-text-primary)]">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="rounded-full bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-px hover:shadow-xl">
                    Start a Partnership
                  </Link>
                  <a href="#results" className="rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg-glass)] px-6 py-2.5 text-sm font-bold text-[var(--color-text-primary)] transition-all hover:border-[var(--color-border-brand)] hover:bg-[var(--color-bg-glass-strong)]">
                    See Results ↓
                  </a>
                </div>
              </motion.div>

              <HeroMockup />
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--color-border-light)] py-12 lg:py-20">
          <div className="site-container">
            <SectionHeader
              label="The Challenge"
              title="The Challenge"
              desc="Orders & More faced operational inefficiencies, fragmented systems, and slow processes that limited their growth in a competitive market."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {challengeCards.map((item, i) => (
                  <motion.article
                    key={item.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp(i * 0.06)}
                    className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-6 transition-all hover:-translate-y-1 hover:border-[var(--color-border-brand)] hover:bg-[var(--color-bg-glass-strong)]"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${item.border} ${item.bg} ${item.color}`}>
                        <AppIcon name={item.icon} className="h-5 w-5" />
                      </div>
                      <h3 className="text-base font-bold leading-snug text-[var(--color-text-primary)]">{item.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{item.desc}</p>
                  </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-b border-[var(--color-border-light)] py-12 lg:py-20">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-brand-blue-glow)] opacity-60 blur-[140px]" />
          <div className="site-container relative z-10">
            <SectionHeader
              label="Our Solution"
              title="HOW WE SOLVED IT"
              desc="We designed and built a unified platform that connects all core operations, automates workflows, and provides real-time intelligence."
              className="text-center [&>p]:mx-auto"
            />
            <SolutionFlow />
          </div>
        </section>

        <section className="relative overflow-hidden border-b border-[var(--color-border-light)] py-12 lg:py-20">
          <div className="pointer-events-none absolute right-[10%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[var(--color-brand-blue-glow)] opacity-[0.4] blur-[130px]" />
          <div className="site-container relative z-10">
            <SectionHeader
              label="Key Initiatives"
              title="What We Focused On"
              desc="We designed a robust platform that centralizes operations and drives efficiency at scale."
            />
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16 xl:gap-20">
              <div className="order-1 flex w-full flex-col justify-center lg:col-span-6">
                <div className="w-full max-w-[580px] space-y-4 md:space-y-5">
                  {initiatives.map((item, i) => (
                    <motion.div
                      key={item.n}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp(i * 0.05)}
                      className="group flex gap-4 rounded-[20px] border border-[var(--color-border-light)]/60 bg-[var(--color-bg-card)]/50 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-brand-blue)]/30 hover:bg-[var(--color-bg-glass-strong)]/60 hover:shadow-[0_10px_30px_rgba(59,130,246,0.08)] sm:gap-5 sm:p-5"
                    >
                      <span className="mt-0.5 shrink-0 select-none text-3xl font-black tabular-nums tracking-tight text-[var(--color-brand-blue)]/20 transition-colors duration-300 group-hover:text-[var(--color-brand-blue)]/40 sm:text-4xl">
                        {item.n}
                      </span>
                      <div>
                        <h3 className="mb-1 text-base font-bold text-[var(--color-text-primary)] sm:text-[17px]">{item.title}</h3>
                        <p className="max-w-[480px] text-sm leading-relaxed text-[var(--color-text-secondary)] opacity-85">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="order-2 flex w-full items-center justify-center lg:col-span-6">
                <LaptopPreview />
              </div>
            </div>
          </div>
        </section>

        <ResultsSection />

        <section className="border-b border-[var(--color-border-light)] py-12 lg:py-20">
          <div className="site-container">
            <SectionHeader
              label="Technology"
              title="Technology Stack"
              desc="Our dedicated team operates with the same priorities and urgency as internal staff — enabling flexible scaling based on project demands and business cycles."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {techStack.map((item, i) => (
                  <motion.article
                    key={item.name}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp(i * 0.05)}
                    className={`group rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-border-brand)] hover:bg-[var(--color-bg-glass-strong)] ${
                      i === techStack.length - 1 ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.5rem)] lg:col-span-1 lg:col-start-2 lg:w-full" : ""
                    }`}
                  >
                    <div className="mb-4 flex items-center gap-4">
                      <TechBrandIcon name={item.name} />
                      <div>
                        <p className="text-base font-bold text-[var(--color-text-brand)]">{item.name}</p>
                        <p className="mt-1 text-xs font-semibold text-[var(--color-text-primary)]">{item.category}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">{item.desc}</p>
                  </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--color-border-light)] py-12 lg:py-20">
          <div className="site-container">
            <SectionHeader
              label="Partnership"
              title="What Our Client Says"
              desc="Trusted by leading companies across multiple industries."
              className="max-w-3xl"
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp(0.08)}
              className="relative overflow-hidden rounded-[28px] border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-5 shadow-2xl backdrop-blur-md sm:p-6 lg:p-8"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[var(--color-brand-blue-glow)] blur-3xl" />
              <div className="relative z-10 grid gap-6 md:grid-cols-[0.85fr_1.25fr] md:items-center lg:gap-10">
                <div className="overflow-hidden rounded-[24px] border border-[var(--color-border-light)] bg-[var(--color-bg-main)]/70">
                  <Image
                    src="/testimonials/mohammed-assem.png"
                    alt="Mohammed Assem"
                    width={520}
                    height={620}
                    className="h-full max-h-[420px] w-full object-cover object-top"
                  />
                </div>
                <div>
                  <div className="mb-5 text-7xl font-black leading-none text-[var(--color-brand-blue)]/20">“</div>
                  <blockquote className="text-xl font-semibold leading-relaxed text-[var(--color-text-primary)] sm:text-2xl">
                    “IKEN Technology has truly exceeded our expectations. Their customized software solutions have streamlined our operations and provided a significant boost in productivity.”
                  </blockquote>
                  <div className="mt-8 flex flex-wrap items-end justify-between gap-5">
                    <div>
                      <p className="text-base font-bold text-[var(--color-text-primary)]">Mohammed Assem</p>
                      <p className="mt-1 text-sm text-[var(--color-text-muted)]">CTO & Co-founder, Balad</p>
                    </div>
                    <div className="rounded-2xl border border-[var(--color-border-brand)] bg-[var(--color-brand-blue-glow)] px-4 py-3">
                      <OrdersLogo className="h-9 w-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <ContactSection />
    </div>
  );
}
