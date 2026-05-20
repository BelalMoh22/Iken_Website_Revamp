"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useMounted } from "../hooks/useMounted";

interface ThemeToggleProps {
  className?: string;
  compact?: boolean;
}

export function ThemeToggle({ className = "", compact = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`relative flex items-center rounded-full bg-[var(--color-bg-glass-strong)] p-1 transition-colors hover:bg-[var(--color-border-brand)] ${
        compact ? "h-8 w-12" : "h-9 w-14"
      } ${className}`}
      aria-label="Toggle Theme"
    >
      <motion.div
        animate={{ x: theme === "dark" ? (compact ? 16 : 20) : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`flex items-center justify-center rounded-full bg-[var(--color-brand-blue)] text-white shadow-lg ${
          compact ? "h-6 w-6" : "h-7 w-7"
        }`}
      >
        {theme === "dark" ? (
          <svg className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        ) : (
          <svg className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
          </svg>
        )}
      </motion.div>
    </button>
  );
}
