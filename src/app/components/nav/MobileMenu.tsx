"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { NavLink } from "./NavLink";
import { CTAButton } from "./CTAButton";
import { ThemeToggle } from "../ThemeToggle";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { theme } = useTheme();

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const gridLinks = [
    { label: "About", href: "#about" },
    { label: "Why IKEN", href: "#why-iken" },
    { label: "Models", href: "#models" },
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Clients", href: "#clients" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md lg:hidden"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-x-0 top-0 z-[70] h-auto max-h-[90vh] overflow-y-auto bg-[var(--color-bg-main)] p-4 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-2">
                <Image
                  src="/iken-logo-new.png"
                  alt="IKEN Technology"
                  width={100}
                  height={32}
                  priority
                  className={`h-8 w-auto object-contain ${
                    theme === "dark" ? "brightness-0 invert" : ""
                  }`}
                />
                <div className="flex items-center gap-3">
                  <ThemeToggle />
                  <button
                    onClick={onClose}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-bg-glass-strong)] text-[var(--color-text-secondary)] border border-[var(--color-border-light)]"
                    aria-label="Close menu"
                  >
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Start a Project CTA */}
              <CTAButton onClick={onClose} className="w-full !h-12 !text-lg" />

              {/* Navigation Grid */}
              <nav className="grid grid-cols-2 gap-3">
                {gridLinks.map((item) => (
                  <NavLink
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className="!after:hidden flex h-14 items-center justify-center rounded-xl bg-[var(--color-bg-glass-strong)] border border-[var(--color-border-light)] px-4 text-center text-[15px] font-semibold text-[var(--color-text-secondary)] transition-all hover:bg-[var(--color-brand-blue-glow)] hover:text-[var(--color-text-brand)] hover:border-[var(--color-border-brand)]"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
