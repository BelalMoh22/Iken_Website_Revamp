"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { useMounted } from "./hooks/useMounted";

export function Providers({ children }: { children: ReactNode }) {
  const mounted = useMounted();

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}
