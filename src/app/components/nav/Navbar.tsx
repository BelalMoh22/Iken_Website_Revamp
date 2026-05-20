"use client";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
              <Image
                src="/iken-logo-new.png"
                alt="IKEN Technology"
                width={120}
                height={40}
                priority
                className={`h-auto w-[90px] min-[360px]:w-[105px] sm:w-[112px] lg:w-[120px] object-contain transition-all group-hover:opacity-80 ${
                  useDarkLogo ? "brightness-0 invert" : ""
                }`}
                style={{ height: "auto" }}
              />
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
