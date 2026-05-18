"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Breadcrumbs() {
  const pathname = usePathname();

  // If we are on the homepage, do not render breadcrumbs
  if (pathname === "/") return null;

  // Split pathname into segments
  const segments = pathname.split("/").filter((item) => item !== "");

  // Helper to format segment names nicely
  const getSegmentName = (segment: string) => {
    switch (segment.toLowerCase()) {
      case "projects":
        return "Projects";
      case "elabd":
        return "ELAbd Patisserie";
      case "contact":
        return "Contact Us";
      default:
        return decodeURIComponent(segment)
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());
    }
  };

  // Helper to generate correct URLs for navigation
  const getSegmentUrl = (index: number) => {
    const path = "/" + segments.slice(0, index + 1).join("/");
    // If navigating to /projects, link back to the homepage section
    if (path === "/projects") {
      return "/#projects";
    }
    return path;
  };

  return (
    <nav className="mb-8 flex items-center gap-2 text-[10px] font-semibold tracking-[0.18em] uppercase text-[var(--color-text-muted)] select-none">
      <Link
        href="/"
        className="transition-colors hover:text-[var(--color-brand-blue)] hover:underline"
      >
        Home
      </Link>
      
      {segments.map((segment, index) => {
        const isLast = index === segments.length - 1;
        const name = getSegmentName(segment);
        const url = getSegmentUrl(index);

        return (
          <div key={segment} className="flex items-center gap-2">
            <span className="opacity-30 text-[10px] font-normal">/</span>
            {isLast ? (
              <span className="text-[var(--color-text-primary)] font-bold">
                {name}
              </span>
            ) : (
              <Link
                href={url}
                className="transition-colors hover:text-[var(--color-brand-blue)] hover:underline"
              >
                {name}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
