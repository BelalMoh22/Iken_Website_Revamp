"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "./NavLink";

interface NavDropdownProps {
  label: string;
  items: { label: string; href: string }[];
}

export function NavDropdown({ label, items }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className={`flex items-center gap-1 text-base font-semibold transition-colors focus:outline-none ${isOpen ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
          }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <svg
          viewBox="0 0 24 24"
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-1/2 top-full mt-2 w-64 -translate-x-1/2 overflow-hidden rounded-xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] dark:bg-[#0d1525] p-2 shadow-xl backdrop-blur-xl dark:backdrop-blur-none"
          >
            <div className="grid gap-1">
              {items.map((item) => (
                <NavLink
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-[var(--color-bg-glass)] hover:text-[var(--color-text-primary)]"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
