"use client";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Why IKEN", href: "#why-iken" },
  { label: "Models", href: "#models" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

import { ThemeToggle } from "../components/ThemeToggle";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Header() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border-light)] bg-[var(--color-bg-glass)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">

        {/* Logo */}
        <a href="#home" className="group flex items-center">
          <Image
            src="/iken-logo-new.png"
            alt="IKEN Technology"
            width={120}
            height={40}
            className={`h-10 w-auto object-contain transition-all group-hover:opacity-80 ${
              mounted && theme === "dark" ? "brightness-0 invert" : ""
            }`}
          />
        </a>

        {/* Nav */}
        <nav className="hidden items-center gap-4 md:flex xl:gap-6">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="relative text-base font-semibold text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)] after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-[var(--color-brand-blue)] after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Utilities + CTA */}
        <div className="flex items-center gap-2 sm:gap-4">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border-light)] bg-[var(--color-bg-glass)] text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)] md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9">
              {mobileMenuOpen ? (
                <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
          <Link
            href="/contact"
            className="hidden whitespace-nowrap rounded-full bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] px-4 py-2 text-sm font-semibold tracking-wide text-white shadow-[0_0_14px_rgba(59,130,246,0.3)] transition-all hover:-translate-y-px hover:shadow-[0_0_22px_rgba(59,130,246,0.5)] sm:px-6 sm:text-base md:inline-flex"
          >
            Start a Project
          </Link>
        </div>

      </div>

      {mobileMenuOpen && (
        <div className="border-t border-[var(--color-border-light)] bg-[var(--color-bg-card)] px-4 py-4 md:hidden">
          <div className="mb-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] px-3 py-2.5 text-sm font-semibold text-white"
            >
              Start a Project
            </Link>
          </div>

          <nav className="grid grid-cols-2 gap-2">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg border border-[var(--color-border-light)] bg-[var(--color-bg-glass)] px-3 py-2 text-center text-sm font-semibold text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-border-brand)] hover:text-[var(--color-text-primary)]"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
