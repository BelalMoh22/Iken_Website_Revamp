"use client";
import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function NavLink({ href, children, className = "", onClick }: NavLinkProps) {
  const isExternal = href.startsWith("http");
  const isAnchor = href.startsWith("#");

  const baseStyles = "relative text-base font-semibold text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)] after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-[var(--color-brand-blue)] after:transition-all after:duration-300 hover:after:w-full";

  // If it's an anchor link, ensure it points to the homepage section
  const finalHref = isAnchor ? `/${href}` : href;

  return (
    <Link
      href={finalHref}
      onClick={onClick}
      className={`${baseStyles} ${className}`}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}
