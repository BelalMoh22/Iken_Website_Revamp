"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "../ThemeToggle";
import { CTAButton } from "./CTAButton";
import { useMounted } from "../../hooks/useMounted";

export function Navbar() {
  const { theme } = useTheme();
  const mounted = useMounted();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const updateScrollState = () => {
      rafRef.current = null;
      setIsScrolled((current) => {
        const next = window.scrollY > 20;
        return current === next ? current : next;
      });
    };

    const handleScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = window.requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const useDarkLogo = mounted && theme === "dark";

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? "border-b border-[var(--color-border-light)] bg-[var(--color-bg-glass)] backdrop-blur-xl" 
            : "bg-transparent"
        }`}
      >
        <div className="site-container flex items-center justify-between py-3 sm:py-4 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:py-5">
          
          {/* Logo */}
          <div className="flex shrink-0 justify-start">
            <Link 
              href="/" 
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  // Also update the URL hash if needed, or remove it
                  window.history.pushState(null, "", "/");
                }
              }}
              className="group flex items-center outline-none"
            >
              <span className="relative block h-[34px] w-[90px] transition-all group-hover:opacity-80 min-[360px]:h-[40px] min-[360px]:w-[105px] sm:h-[43px] sm:w-[112px] lg:h-[46px] lg:w-[120px]">
                <Image
                  src="/iken-logo-new.png"
                  alt="IKEN Technology"
                  fill
                  priority
                  sizes="(max-width: 359px) 90px, (max-width: 639px) 105px, (max-width: 1023px) 112px, 120px"
                  className={`object-contain ${useDarkLogo ? "brightness-0 invert" : ""}`}
                />
              </span>
            </Link>
          </div>

          {/* Desktop Navigation (Mathematically Centered) */}
          <div className="hidden justify-center lg:flex">
            <DesktopNav />
          </div>

          {/* Utilities & Mobile Toggle */}
          <div className="ml-auto flex shrink-0 items-center justify-end gap-1.5 min-[360px]:gap-2 sm:gap-4 lg:ml-0 lg:gap-5">
            <div className="hidden lg:block">
              <ThemeToggle />
            </div>
            
            <div className="flex">
              <CTAButton className="max-[359px]:h-8 max-[359px]:px-2.5 max-[359px]:text-[10px]" />
            </div>

            <div className="flex lg:hidden">
              <ThemeToggle compact />
            </div>

            {/* Mobile Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--color-border-light)] bg-[var(--color-bg-glass)] text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)] sm:h-11 sm:w-11 sm:rounded-xl lg:hidden"
              aria-label="Open navigation menu"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
    </>
  );
}
