"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

import { ChallengeSolutionSection } from "../../components/ChallengeSolutionSection";
import { Header } from "../../sections/Header";
import { ContactSection } from "../../sections/ContactSection";
import { useMounted } from "../../hooks/useMounted";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 1, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" as const, delay: Math.min(delay, 0.04) },
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
  const logoMap: Record<string, { src: string; whiteBg?: boolean }> = {
    "React": { src: "/clients/react-logo.svg" },
    ".NET": { src: "/clients/net-logo.svg" },
    "Microsoft SQL Server": { src: "/clients/sql-logo.svg" },
    "Azure DevOps": { src: "/clients/azure-logo.svg" },
    "Docker": { src: "/clients/docker-logo.svg" },
    "MyFatoorah": { src: "/clients/myFatoorah-logo.jpeg", whiteBg: true },
  };

  const entry = logoMap[name];
  if (!entry) return <div className="text-5xl font-black leading-none text-[#635bff]" aria-hidden="true">?</div>;

  return (
    <div className={`flex h-10 w-10 items-center justify-center${entry.whiteBg ? " rounded-md bg-white p-0.5" : ""}`}>
      <Image
        src={entry.src}
        alt={`${name} logo`}
        width={40}
        height={40}
        className="h-10 w-10 object-contain select-none"
        aria-hidden="true"
      />
    </div>
  );
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

const challengeSolutionPairs = [
  {
    beforeLead: "Fragmented Systems",
    beforeRest: "created operational silos across multiple disconnected tools and systems.",
    afterLead: "Unified Platform",
    afterRest: "centralized all core operations into a single ecosystem.",
  },
  {
    beforeLead: "Manual Processes",
    beforeRest: "relied heavily on repetitive tasks that slowed operations and increased errors.",
    afterLead: "Workflow Automation",
    afterRest: "streamlined repetitive tasks, reduced errors, and improved operational efficiency.",
  },
  {
    beforeLead: "Limited Visibility",
    beforeRest: "made it difficult to monitor performance and access real-time business insights.",
    afterLead: "Real-Time Analytics",
    afterRest: "provided instant visibility into key metrics and business performance.",
  },
  {
    beforeLead: "Complex Pricing",
    beforeRest: "required significant manual effort to manage discounts, promotions, and pricing rules.",
    afterLead: "Dynamic Pricing Engine",
    afterRest: "enabled flexible pricing, promotions, and discount management at scale.",
  },
];

function ChallengeCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const viewportRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);

  const getStep = useCallback(() => {
    const first = slideRefs.current[0];
    const second = slideRefs.current[1];
    if (!first) return 0;
    return second ? second.offsetLeft - first.offsetLeft : first.offsetWidth;
  }, []);

  const totalSlides = challengeCards.length;
  const maxIndex = Math.max(0, totalSlides - slidesPerView);
  const safeIndex = Math.min(activeIndex, maxIndex);

  const scrollToIndex = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const viewport = viewportRef.current;
      const step = getStep();
      if (!viewport || !step) return;
      viewport.scrollTo({ left: index * step, behavior });
    },
    [getStep],
  );

  useEffect(() => {
    const update = () => {
      const nextSlidesPerView = window.innerWidth >= 640 ? 2 : 1;
      setSlidesPerView(nextSlidesPerView);
      setActiveIndex((current) => {
        const nextMaxIndex = Math.max(0, challengeCards.length - nextSlidesPerView);
        const next = Math.min(current, nextMaxIndex);
        if (next !== current) {
          window.requestAnimationFrame(() => scrollToIndex(next, "auto"));
        }
        return next;
      });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [scrollToIndex]);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const navigate = useCallback(
    (dir: -1 | 1) => {
      setActiveIndex((index) => {
        const next = Math.min(maxIndex, Math.max(0, index + dir));
        scrollToIndex(next);
        return next;
      });
    },
    [maxIndex, scrollToIndex],
  );

  const handleScroll = useCallback(() => {
    if (rafRef.current !== null) {
      window.cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = window.requestAnimationFrame(() => {
      const viewport = viewportRef.current;
      const step = getStep();
      if (!viewport || !step) return;

      const nextIndex = Math.min(maxIndex, Math.max(0, Math.round(viewport.scrollLeft / step)));
      setActiveIndex(nextIndex);
    });
  }, [getStep, maxIndex]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        navigate(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        navigate(1);
      }
    },
    [navigate],
  );

  return (
    <>
      <div
        ref={viewportRef}
        className="-mx-4 min-w-0 touch-pan-x overflow-x-auto overscroll-x-contain px-4 pb-2 outline-none [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:px-6 lg:mx-0 lg:overflow-visible lg:px-0 lg:pb-0"
        role="region"
        aria-label="Challenge cards carousel"
        aria-roledescription="carousel"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onScroll={handleScroll}
      >
        <div className="flex snap-x snap-proximity gap-4 lg:grid lg:grid-cols-4 lg:snap-none">
          {challengeCards.map((item, i) => (
            <motion.article
              ref={(node) => {
                slideRefs.current[i] = node;
              }}
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp(i * 0.06)}
              className="min-w-0 shrink-0 basis-[82%] snap-start rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-6 transition-all hover:-translate-y-1 hover:border-[var(--color-border-brand)] hover:bg-[var(--color-bg-glass-strong)] sm:basis-[calc((100%-1rem)/2)] lg:basis-auto"
              role="group"
              aria-roledescription="slide"
              aria-label={`Challenge ${i + 1} of ${totalSlides}: ${item.title}`}
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

      <div className="mt-6 flex items-center justify-center gap-4 lg:hidden" role="group" aria-label="Challenge slider navigation">
        <SliderArrow direction="prev" disabled={safeIndex === 0} onClick={() => navigate(-1)} label="Previous challenge" />

        <div className="flex items-center justify-center gap-2.5" aria-label="Challenge slides">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setActiveIndex(idx);
                scrollToIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === safeIndex
                  ? "w-8 bg-[var(--color-brand-blue)]"
                  : "w-3 bg-[var(--color-bg-glass-strong)] hover:bg-[var(--color-text-muted)]"
                }`}
              aria-label={`Go to challenge slide ${idx + 1}`}
              aria-current={idx === safeIndex ? "true" : undefined}
            />
          ))}
        </div>

        <SliderArrow direction="next" disabled={safeIndex === maxIndex} onClick={() => navigate(1)} label="Next challenge" />
      </div>
    </>
  );
}

function SliderArrow({
  direction,
  disabled,
  onClick,
  label,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
  label: string;
}) {
  const isPrev = direction === "prev";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-main)] ${isPrev
          ? "border-[var(--color-border-light)] bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] hover:enabled:-translate-y-0.5 hover:enabled:border-[var(--color-border-brand)] hover:enabled:text-[var(--color-text-primary)] disabled:cursor-not-allowed disabled:opacity-35"
          : "border-transparent bg-[var(--color-brand-blue)] text-white shadow-md shadow-[var(--color-brand-blue-glow)] hover:enabled:-translate-y-0.5 hover:enabled:shadow-lg hover:enabled:shadow-[var(--color-brand-blue-glow)] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
        }`}
      aria-label={label}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="transition-transform duration-300"
      >
        {isPrev ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
      </svg>
    </button>
  );
}

const initiatives = [
  {
    n: "01",
    title: "Vendor Management",
    desc: "Unified onboarding and performance tracking.",
    image: "/clients/vendorManagement.svg",
  },
  {
    n: "02",
    title: "Order Management",
    desc: "Streamlined order lifecycle from placement to delivery.",
    image: "/clients/orderManagement.svg",
  },
  {
    n: "03",
    title: "Pricing & Discounts Engine",
    desc: "Advanced rules and dynamic pricing automation.",
    image: "/clients/pricingAndDiscounts.svg",
  },
  {
    n: "04",
    title: "Analytics & Reporting",
    desc: "Real-time dashboards and actionable insights.",
    image: "/clients/pricingAndDiscounts.svg",
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
    glowColor: "rgba(97,218,251,0.18)",
    accentColor: "rgba(97,218,251,0.7)",
  },
  {
    name: ".NET",
    category: "Backend Framework",
    desc: "Powering enterprise-grade business logic, APIs, integrations, and platform operations with high performance and scalability.",
    glowColor: "rgba(95,90,220,0.18)",
    accentColor: "rgba(95,90,220,0.7)",
  },
  {
    name: "Microsoft SQL Server",
    category: "Relational Database",
    desc: "Providing secure, reliable, and highly optimized data storage for transactional and business-critical workloads.",
    glowColor: "rgba(204,52,52,0.18)",
    accentColor: "rgba(204,52,52,0.7)",
  },
  {
    name: "Azure DevOps",
    category: "CI/CD & DevOps Platform",
    desc: "Automating deployments, release pipelines, source control, and development workflows for faster delivery.",
    glowColor: "rgba(0,120,212,0.18)",
    accentColor: "rgba(0,120,212,0.7)",
  },
  {
    name: "Docker",
    category: "Containerization",
    desc: "Ensuring consistent deployments and streamlined workflows across all environments.",
    glowColor: "rgba(13,183,237,0.18)",
    accentColor: "rgba(13,183,237,0.7)",
  },
  {
    name: "MyFatoorah",
    category: "Payment Gateway",
    desc: "Enabling secure online payments, local payment methods, and seamless checkout experiences across the platform.",
    glowColor: "rgba(0,168,107,0.18)",
    accentColor: "rgba(0,168,107,0.7)",
  },
];

function TechStackCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const viewportRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);

  const getStep = useCallback(() => {
    const first = slideRefs.current[0];
    const second = slideRefs.current[1];
    if (!first) return 0;
    return second ? second.offsetLeft - first.offsetLeft : first.offsetWidth;
  }, []);

  const totalSlides = techStack.length;
  const maxIndex = Math.max(0, totalSlides - slidesPerView);
  const safeIndex = Math.min(activeIndex, maxIndex);

  const scrollToIndex = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const viewport = viewportRef.current;
      const step = getStep();
      if (!viewport || !step) return;
      viewport.scrollTo({ left: index * step, behavior });
    },
    [getStep],
  );

  useEffect(() => {
    const update = () => {
      const nextSlidesPerView = window.innerWidth >= 640 ? 2 : 1;
      setSlidesPerView(nextSlidesPerView);
      setActiveIndex((current) => {
        const nextMaxIndex = Math.max(0, techStack.length - nextSlidesPerView);
        const next = Math.min(current, nextMaxIndex);
        if (next !== current) {
          window.requestAnimationFrame(() => scrollToIndex(next, "auto"));
        }
        return next;
      });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [scrollToIndex]);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const navigate = useCallback(
    (dir: -1 | 1) => {
      setActiveIndex((index) => {
        const next = Math.min(maxIndex, Math.max(0, index + dir));
        scrollToIndex(next);
        return next;
      });
    },
    [maxIndex, scrollToIndex],
  );

  const handleScroll = useCallback(() => {
    if (rafRef.current !== null) {
      window.cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = window.requestAnimationFrame(() => {
      const viewport = viewportRef.current;
      const step = getStep();
      if (!viewport || !step) return;

      const nextIndex = Math.min(maxIndex, Math.max(0, Math.round(viewport.scrollLeft / step)));
      setActiveIndex(nextIndex);
    });
  }, [getStep, maxIndex]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        navigate(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        navigate(1);
      }
    },
    [navigate],
  );

  return (
    <>
      <div
        ref={viewportRef}
        className="-mx-4 min-w-0 touch-pan-x overflow-x-auto overscroll-x-contain px-4 pb-2 outline-none [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:px-6 lg:mx-0 lg:overflow-visible lg:px-0 lg:pb-0"
        role="region"
        aria-label="Technology stack carousel"
        aria-roledescription="carousel"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onScroll={handleScroll}
      >
        <div className="flex snap-x snap-proximity gap-4 lg:grid lg:grid-cols-3 lg:snap-none">
          {techStack.map((item, i) => (
            <motion.article
              ref={(node) => {
                slideRefs.current[i] = node;
              }}
              key={item.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp(i * 0.05)}
              className="group relative min-w-0 shrink-0 basis-[82%] snap-start rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-border-brand)] hover:bg-[var(--color-bg-glass-strong)] sm:basis-[calc((100%-1rem)/2)] lg:basis-auto"
              role="group"
              aria-roledescription="slide"
              aria-label={`Technology ${i + 1} of ${totalSlides}: ${item.name}`}
            >
              {/* Brand-coloured hover glow */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ boxShadow: `0 0 28px ${item.glowColor}, inset 0 0 16px ${item.glowColor}` }}
              />
              <div className="relative z-10">
                <div
                  className="mb-4 flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border-light)] bg-[var(--color-bg-glass-strong)] transition-all duration-300"
                  style={{ boxShadow: `0 2px 14px ${item.glowColor}` }}
                >
                  <TechBrandIcon name={item.name} />
                </div>
                <p className="text-base font-bold leading-tight text-[var(--color-text-primary)]">{item.name}</p>
                <p className="mt-0.5 mb-3 text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: item.accentColor }}>{item.category}</p>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4 lg:hidden" role="group" aria-label="Technology slider navigation">
        <SliderArrow direction="prev" disabled={safeIndex === 0} onClick={() => navigate(-1)} label="Previous technology" />

        <div className="flex items-center justify-center gap-2.5" aria-label="Technology slides">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setActiveIndex(idx);
                scrollToIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === safeIndex
                  ? "w-8 bg-[var(--color-brand-blue)]"
                  : "w-3 bg-[var(--color-bg-glass-strong)] hover:bg-[var(--color-text-muted)]"
                }`}
              aria-label={`Go to technology slide ${idx + 1}`}
              aria-current={idx === safeIndex ? "true" : undefined}
            />
          ))}
        </div>

        <SliderArrow direction="next" disabled={safeIndex === maxIndex} onClick={() => navigate(1)} label="Next technology" />
      </div>
    </>
  );
}

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
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="select-none"
        >
          <Image
            src="/clients/O&M.png"
            alt="Orders & More platform dashboard and storefront mockup"
            width={1800}
            height={1500}
            className="h-auto w-full object-contain drop-shadow-2xl"
            priority
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function DemoCtaSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0)}>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-blue)]">Ready?</p>
          <h2 className="mb-5 text-3xl font-black tracking-tight text-[var(--color-text-primary)] sm:text-5xl">
            Transform Your{" "}
            <span className="bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">
              E-Commerce Operations
            </span>
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-[var(--color-text-secondary)]">
            The best way to understand the power of Orders and More is to see it in action. Book a personalized demo and discover how the platform can address your specific business challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-px hover:shadow-xl"
            >
              Schedule Demo
            </Link>
            <a
              href="/docs/Orders-and-More-2026%201.pdf"
              className="rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg-glass)] px-8 py-3.5 text-sm font-bold text-[var(--color-text-primary)] transition-all hover:border-[var(--color-border-brand)] hover:bg-[var(--color-bg-glass-strong)]"
            >
              Learn More
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-[var(--color-text-secondary)]">
            <a href="mailto:mustafa@iken.tech" className="transition hover:text-[var(--color-text-primary)]">mustafa@iken.tech</a>
            <a href="https://wa.me/201050549994" className="transition hover:text-[var(--color-text-primary)]">(+20) 10 5054 9994</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InitiativeShowcase({
  activeIndex,
  onMouseEnter,
  onMouseLeave,
}: {
  activeIndex: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const activeInitiative = initiatives[activeIndex];
  const activeImage = activeInitiative.image || "/clients/pricingAndDiscounts.svg";

  return (
    <motion.div
      initial={{ opacity: 1, y: 0, scale: 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-[760px] lg:-my-10"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="pointer-events-none absolute h-px w-px opacity-0">
        {initiatives
          .filter((initiative) => Boolean(initiative.image))
          .map((initiative) => (
            <Image
              key={initiative.title}
              src={initiative.image || "/clients/pricingAndDiscounts.svg"}
              alt=""
              width={1}
              height={1}
              priority
              aria-hidden="true"
            />
          ))}
      </div>

      <div className="relative flex h-[24rem] items-center justify-center overflow-hidden sm:h-[30rem] lg:h-[42rem] xl:h-[45rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0 flex h-full w-full items-center justify-center"
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
              className="flex h-full w-full items-center justify-center"
            >
              <Image
                src={activeImage}
                alt={`${activeInitiative.title} visual`}
                width={1000}
                height={770}
                className="pointer-events-none h-auto w-full max-w-[760px] select-none object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
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
              initial={{ opacity: 1, y: 0, scale: 1 }}
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
  const [activeInitiativeIndex, setActiveInitiativeIndex] = useState(0);
  const [isInitiativePaused, setIsInitiativePaused] = useState(false);

  useEffect(() => {
    if (isInitiativePaused) return;

    const timer = window.setInterval(() => {
      setActiveInitiativeIndex((current) => (current + 1) % initiatives.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [isInitiativePaused, activeInitiativeIndex]);

  const handleInitiativeClick = (index: number) => {
    setActiveInitiativeIndex(index);
  };

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

            <motion.div initial="hidden" animate="visible" variants={fadeUp(0)} className="mb-6 lg:hidden">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-border-brand)] bg-[var(--color-brand-blue-glow)] px-3.5 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-blue)]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-brand)]">Case Study · TAAS</span>
              </div>
              <h1 className="text-4xl font-black leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-5xl">
                Orders and More
              </h1>
              <p className="mt-4 text-xl font-semibold leading-snug text-[var(--color-text-secondary)] sm:text-2xl">
                Your All-in-One B2B E-Commerce Platform
              </p>
            </motion.div>

            <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
              <motion.div initial="hidden" animate="visible" variants={fadeUp(0)} className="order-2 min-w-0 lg:order-1">
                <div className="mb-4 hidden items-center gap-2 rounded-full border border-[var(--color-border-brand)] bg-[var(--color-brand-blue-glow)] px-3.5 py-1.5 lg:inline-flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-blue)]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-brand)]">Case Study · TAAS</span>
                </div>
                <h1 className="mb-4 hidden text-4xl font-black leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:block lg:text-6xl">
                  Orders and More
                </h1>
                <p className="mb-5 hidden text-xl font-semibold leading-snug text-[var(--color-text-secondary)] sm:text-2xl lg:mb-6 lg:block">
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

              <div className="order-1 lg:order-2">
                <HeroMockup />
              </div>
            </div>
          </div>
        </section>

        <ChallengeSolutionSection
          pairs={challengeSolutionPairs}
          mobile={
            <>
              <SectionHeader
                label="The Challenge"
                title="The Challenge"
                desc="Orders & More faced operational inefficiencies, fragmented systems, and slow processes that limited their growth in a competitive market."
              />
              <ChallengeCarousel />
            </>
          }
        />

        <section className="relative overflow-hidden border-b border-[var(--color-border-light)] py-12 lg:py-20">
          <div className="pointer-events-none absolute right-[10%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[var(--color-brand-blue-glow)] opacity-[0.4] blur-[130px]" />
          <div className="site-container relative z-10">
            <SectionHeader
              label="Key Initiatives"
              title="What We Focused On"
              desc="We designed a robust platform that centralizes operations and drives efficiency at scale."
            />
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.3fr] lg:gap-12 xl:gap-16">
              <div className="order-2 flex w-full flex-col justify-center lg:order-1">
                <div className="w-full max-w-[560px] space-y-4 md:space-y-5">
                  {initiatives.map((item, i) => {
                    const isActive = i === activeInitiativeIndex;

                    return (
                      <motion.button
                        key={item.n}
                        type="button"
                        onClick={() => handleInitiativeClick(i)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp(i * 0.05)}
                        className={`group flex w-full gap-4 rounded-[20px] border p-4 text-left backdrop-blur-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-main)] sm:gap-5 sm:p-5 ${isActive
                            ? "border-[var(--color-brand-blue)]/35 bg-[var(--color-bg-glass-strong)]/70 shadow-[0_10px_30px_rgba(59,130,246,0.08)]"
                            : "border-[var(--color-border-light)]/60 bg-[var(--color-bg-card)]/50 hover:-translate-y-0.5 hover:border-[var(--color-brand-blue)]/30 hover:bg-[var(--color-bg-glass-strong)]/60 hover:shadow-[0_10px_30px_rgba(59,130,246,0.08)]"
                          }`}
                        aria-pressed={isActive}
                      >
                        <span className={`mt-0.5 shrink-0 select-none text-3xl font-black tabular-nums tracking-tight transition-colors duration-300 sm:text-4xl ${isActive ? "text-[var(--color-brand-blue)]/55" : "text-[var(--color-brand-blue)]/20 group-hover:text-[var(--color-brand-blue)]/40"
                          }`}>
                          {item.n}
                        </span>
                        <div>
                          <h3 className={`mb-1 text-base font-bold transition-colors duration-300 sm:text-[17px] ${isActive ? "text-[var(--color-text-brand)]" : "text-[var(--color-text-primary)]"
                            }`}>{item.title}</h3>
                          <p className="max-w-[480px] text-sm leading-relaxed text-[var(--color-text-secondary)] opacity-85">{item.desc}</p>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
              <div className="order-1 flex w-full items-center justify-center lg:order-2 lg:justify-end">
                <InitiativeShowcase
                  activeIndex={activeInitiativeIndex}
                  onMouseEnter={() => setIsInitiativePaused(true)}
                  onMouseLeave={() => setIsInitiativePaused(false)}
                />
              </div>
            </div>
          </div>
        </section>

        <ResultsSection />

        <section className="border-b border-[var(--color-border-light)] py-12 lg:py-20">
          <div className="site-container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp(0)} className="mb-8 lg:mb-12">
              <div className="mb-2.5 inline-flex items-center gap-2 text-[var(--color-text-brand)]">
                <span className="inline-flex h-3 w-3 rounded-[2px] bg-[var(--color-brand-blue)]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Technology</span>
              </div>
              <h2 className="text-3xl font-black leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-[42px]">Technology Stack</h2>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text-muted)]">Our dedicated team operates with the same priorities and urgency as internal staff — enabling flexible scaling based on project demands and business cycles.</p>
            </motion.div>
            <TechStackCarousel />
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

        <DemoCtaSection />
      </main>

      <ContactSection />
    </div>
  );
}
