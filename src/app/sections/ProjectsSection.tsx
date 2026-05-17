"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { CSSProperties, MouseEventHandler, MouseEvent, TouchEvent } from "react";
import Slider, { type Settings } from "react-slick";

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const products = [
  {
    title: "ELAbd Patisserie",
    image: "/clients/elabd-logo-square.svg",
    logo: "/clients/elabd-logo-square.svg",
    href: "/projects/elabd",
  },
  {
    title: "Contact Cars",
    image: "/products/p-contactcars.jpg",
  },
  {
    title: "Furn",
    image: "/products/p-furn.jpg",
  },
  {
    title: "Home Care",
    image: "/products/p-homecare.jpg",
  },
  {
    title: "Moqawalat",
    image: "/products/p-moqawalat.jpg",
  },
];

function CarouselArrow({
  className,
  style,
  onClick,
  direction,
}: {
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  direction: "prev" | "next";
  currentSlide?: number;
  slideCount?: number;
}) {
  return (
    <button type="button" className={`${className ?? ""} project-arrow`} style={style} onClick={onClick}>
      {direction === "prev" ? (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="m15 5-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="m9 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}

export function ProjectsSection() {
  const router = useRouter();

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
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px",
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: () => <span className="project-dot" />,
    prevArrow: <CarouselArrow direction="prev" />,
    nextArrow: <CarouselArrow direction="next" />,
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
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fade}
      transition={{ duration: 0.45 }}
      className="relative overflow-hidden bg-[var(--color-bg-main)] pb-24 pt-14 sm:pt-16"
    >
      {/* Background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[var(--color-brand-blue)] opacity-[0.1] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <div className="mb-12 space-y-3 px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-text-brand)]">Selected Projects</p>
          <h2 className="text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-5xl">
            Results We <span className="bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">Delivered</span>
          </h2>
        </div>

        <div className="projects-carousel mx-auto w-full max-w-7xl px-0 sm:px-2">
          <Slider {...settings}>
            {products.map((project) => (
              <div key={project.title} className="px-3 py-2" style={{ width: 420 }}>
                <article className="project-card relative mx-auto w-full max-w-[360px] overflow-hidden rounded-[20px] border border-[var(--color-border-light)] bg-[var(--color-bg-card)] shadow-[0_18px_38px_rgba(0,0,0,0.24)] backdrop-blur-sm">
                  <div className="relative h-64">
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
                        <Image src={project.image} alt={project.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(6,12,24,0.18)_100%)]" />
                      </>
                    )}

                  </div>
                  <div className="flex items-center justify-between p-5">
                    <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text-primary)]">{project.title}</h3>
                    {project.href && (
                      <Link
                        href={project.href}
                        onClick={(e) => handleCaseStudyNavigate(e, project.href)}
                        onTouchEnd={(e) => handleCaseStudyNavigate(e, project.href)}
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

        <p className="mx-auto mt-20 max-w-4xl px-4 text-center text-2xl font-medium leading-relaxed text-[var(--color-text-secondary)] sm:px-6 lg:px-8">
          We engineer high-performance digital products and scalable platforms that deliver measurable business impact—from rapid-growth startups to global enterprises.
        </p>
      </div>
    </motion.section>
  );
}
