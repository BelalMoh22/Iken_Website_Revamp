"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "../ThemeToggle";
import { CTAButton } from "./CTAButton";

export function Navbar() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "border-b border-[var(--color-border-light)] bg-[var(--color-bg-glass)] backdrop-blur-xl" 
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-4 sm:px-6 lg:py-5">
        
        {/* Logo */}
        <Link href="/" className="group flex items-center outline-none">
          <Image
            src="/iken-logo-new.png"
            alt="IKEN Technology"
            width={120}
            height={40}
            priority
            className={`h-10 w-auto object-contain transition-all group-hover:opacity-80 ${
              theme === "dark" ? "brightness-0 invert" : ""
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Utilities & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-5">
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>
          
          <CTAButton className="hidden sm:inline-flex" />

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-border-light)] bg-[var(--color-bg-glass)] text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)] lg:hidden"
            aria-label="Open navigation menu"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
    </header>
  );
}
