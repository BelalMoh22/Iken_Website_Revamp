"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function NavLink({ href, children, className = "", onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isExternal = href.startsWith("http");
  const isAnchor = href.startsWith("#");
  
  // Logic for homepage "Home" link
  const isHome = href === "/";
  const isCurrentPage = pathname === "/" && isHome;

  const baseStyles = "relative text-base font-semibold transition-colors duration-200";
  const activeStyles = isCurrentPage 
    ? "text-[var(--color-text-primary)] cursor-default" 
    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]";

  // If it's an anchor link, ensure it points to the homepage section
  const finalHref = isAnchor ? `/${href}` : href;

  if (isCurrentPage) {
    return (
      <span className={`${baseStyles} ${activeStyles} ${className}`}>
        {children}
      </span>
    );
  }

  return (
    <Link
      href={finalHref}
      onClick={onClick}
      className={`${baseStyles} ${activeStyles} ${className}`}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}
