"use client";
import Link from "next/link";

interface CTAButtonProps {
  className?: string;
  onClick?: () => void;
}

export function CTAButton({ className = "", onClick }: CTAButtonProps) {
  return (
    <Link
      href="/contact"
      onClick={onClick}
      className={`inline-flex h-10 items-center justify-center whitespace-nowrap rounded-full bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] px-4 text-sm font-semibold tracking-wide text-white shadow-[0_0_14px_rgba(59,130,246,0.3)] transition-all hover:-translate-y-px hover:shadow-[0_0_22px_rgba(59,130,246,0.5)] sm:px-6 sm:text-base ${className}`}
    >
      Start a Project
    </Link>
  );
}
