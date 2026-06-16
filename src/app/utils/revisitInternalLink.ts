"use client";

export function revisitInternalLink(href: string) {
  if (typeof window === "undefined") return false;

  const target = new URL(href.startsWith("#") ? `/${href}` : href, window.location.origin);
  if (target.origin !== window.location.origin) return false;
  if (target.pathname !== window.location.pathname) return false;

  const hash = target.hash.slice(1);
  if (hash) {
    const section = document.getElementById(hash);
    if (!section) return false;

    section.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth",
    });
    window.history.pushState(null, "", `${target.pathname}${target.hash}`);
    return true;
  }

  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  window.history.pushState(null, "", target.pathname);
  return true;
}
