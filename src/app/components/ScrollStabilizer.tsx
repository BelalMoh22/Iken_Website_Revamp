"use client";

import { useEffect } from "react";

function refreshScrollPosition() {
  const hash = window.location.hash;
  const target = hash ? document.getElementById(hash.slice(1)) : null;

  if (target) {
    target.scrollIntoView({ block: "start", inline: "nearest", behavior: "auto" });
    return;
  }

  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

export function ScrollStabilizer() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    refreshScrollPosition();

    const settleLayout = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(refreshScrollPosition);
      });
    };

    if (document.readyState === "complete") {
      settleLayout();
    } else {
      window.addEventListener("load", settleLayout, { once: true });
    }

    document.fonts?.ready.then(settleLayout).catch(() => undefined);
    window.addEventListener("pageshow", settleLayout);

    return () => {
      window.removeEventListener("load", settleLayout);
      window.removeEventListener("pageshow", settleLayout);
    };
  }, []);

  return null;
}
