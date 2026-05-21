"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import type { MouseEvent, TouchEvent } from "react";
import Slider, { type Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import styles from "./ProjectsSection.module.css";

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

interface Product {
  title: string;
  image: string;
  logo?: string;
  href?: string;
}

const products: Product[] = [
  {
    title: "ELAbd Patisserie",
    image: "/products/Elabd.svg",
    href: "/projects/elabd",
  },
  {
    title: "Contact Cars",
    image: "/products/contactcars.svg",
  },
  {
    title: "Orders & More",
    image: "/products/O&M.svg",
  },
  {
    title: "Moqawalat",
    image: "/products/moqawalat.svg",
  },
];

export function ProjectsSection() {
  const router = useRouter();
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleCaseStudyNavigate = (
    e: MouseEvent<HTMLAnchorElement> | TouchEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(href);
  };

  const settings: Settings = {
    infinite: true,
    speed: 520,
    cssEase: "cubic-bezier(0.22, 1, 0.36, 1)",
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px",
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          centerPadding: "0px",
          variableWidth: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "0px",
          variableWidth: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          variableWidth: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <motion.section
      id="work"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fade}
      transition={{ duration: 0.45 }}
      className="scroll-section relative overflow-hidden bg-[var(--color-bg-main)] home-section-y"
    >
      {/* Background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[var(--color-brand-blue)] opacity-[0.1] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto mb-8 flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:mb-10 sm:px-6 md:flex-row md:items-end lg:px-8">
          <div className="space-y-3 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-text-brand)]">
              Selected Projects
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-5xl">
              Results We{" "}
              <span className="bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">
                Delivered
              </span>
            </h2>
          </div>
        </div>

        <div className={`${styles.carousel} mx-auto w-full max-w-7xl px-0 sm:px-2`}>
          <Slider ref={sliderRef} {...settings}>
            {products.map((project) => (
              <div
                key={project.title}
                className="px-3 py-2"
                style={{ width: 420 }}
              >
                <article className={`${styles.card} relative mx-auto w-full max-w-[360px] overflow-hidden rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] shadow-[0_6px_22px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:shadow-[0_8px_28px_rgba(0,0,0,0.28)]`}>
                  <div className="relative h-64 overflow-hidden">
                    {project.logo ? (
                      <div className="relative h-full w-full bg-white">
                        <Image
                          src={project.logo}
                          alt={project.title}
                          fill
                          className="object-contain p-8"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(248,250,252,0.08)_100%)]" />
                      </div>
                    ) : (
                      <>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover scale-[1.08] origin-center"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(6,12,24,0.18)_100%)]" />
                      </>
                    )}
                  </div>
                  <div className="flex items-center justify-between p-5">
                    <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text-primary)]">
                      {project.title}
                    </h3>
                    {project.href && (
                      <Link
                        href={project.href}
                        onClick={(e) =>
                          handleCaseStudyNavigate(e, project.href!)
                        }
                        onTouchEnd={(e) =>
                          handleCaseStudyNavigate(e, project.href!)
                        }
                        className="relative z-20 inline-flex h-9 shrink-0 touch-manipulation items-center justify-center whitespace-nowrap rounded-full border border-[var(--color-border-brand)] bg-[var(--color-brand-blue-glow)] px-4 text-xs font-semibold leading-none text-[var(--color-text-brand)] transition-all hover:bg-[var(--color-brand-blue-glow)]/20"
                      >
                        View Case Study
                      </Link>
                    )}
                  </div>
                </article>
              </div>
            ))}
          </Slider>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-9" role="group" aria-label="Project slider navigation">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-border-brand)] hover:text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]/50"
            aria-label="Previous project"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="flex min-w-[64px] select-none items-baseline justify-center gap-1 font-mono text-sm tracking-wider text-[var(--color-text-primary)]" aria-live="polite">
            <span className="font-bold">
              {String(currentSlide + 1).padStart(2, "0")}
            </span>
            <span className="mx-0.5 text-[var(--color-text-muted)]">/</span>
            <span className="font-medium text-[var(--color-text-muted)]">
              {String(products.length).padStart(2, "0")}
            </span>
          </div>

          <div className="flex items-center justify-center gap-2.5" aria-label="Project slides">
            {products.map((project, idx) => (
              <button
                key={project.title}
                type="button"
                onClick={() => sliderRef.current?.slickGoTo(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? "w-8 bg-[var(--color-brand-blue)]"
                    : "w-3 bg-[var(--color-bg-glass-strong)] hover:bg-[var(--color-text-muted)]"
                }`}
                aria-label={`Go to project slide ${idx + 1}`}
                aria-current={idx === currentSlide ? "true" : undefined}
              />
            ))}
          </div>

          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="group flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-brand-blue)] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-blue)]/80 hover:shadow-[0_2px_14px_var(--color-brand-blue-glow)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]/50"
            aria-label="Next project"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        <p className="mx-auto mt-12 max-w-4xl px-4 text-center text-lg font-medium leading-relaxed text-[var(--color-text-secondary)] sm:mt-14 sm:px-6 sm:text-xl lg:mt-16 lg:px-8">
          We engineer high-performance digital products and scalable platforms
          that deliver measurable business impact—from rapid-growth startups to
          global enterprises.
        </p>
      </div>
    </motion.section>
  );
}
