"use client";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "./NavLink";

interface NavDropdownProps {
  label: string;
  items: { label: string; href: string }[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export function NavDropdown({ label, items, isOpen, onOpen, onClose }: NavDropdownProps) {
  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          onClose();
        }
      }}
    >
      <button
        type="button"
        onClick={isOpen ? onClose : onOpen}
        className={`flex items-center gap-1 rounded-md text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-blue)] ${isOpen ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
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
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.14, ease: "easeOut" }}
            className="absolute left-1/2 top-full mt-2 w-64 -translate-x-1/2 overflow-hidden rounded-xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] dark:bg-[#0d1525] p-2 shadow-xl backdrop-blur-xl dark:backdrop-blur-none"
          >
            <div className="grid gap-1">
              {items.map((item) => (
                <NavLink
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
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
