import type { Metadata } from "next";
import { Header } from "./sections/Header";
import { BackgroundGlow } from "./components/404/BackgroundGlow";
import { NotFoundHero } from "./components/404/NotFoundHero";
import { ErrorActions } from "./components/404/ErrorActions";

export const metadata: Metadata = {
  title: "404 - Page Not Found | IKEN Technology",
  description: "The page you are looking for does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--color-bg-main)] overflow-hidden">
      <Header />
      
      <main className="flex-grow flex items-center justify-center px-6 relative">
        <BackgroundGlow />
        
        <div className="relative z-10 flex flex-col items-center">
          <NotFoundHero />
          <ErrorActions />
        </div>
      </main>

      <footer className="relative z-10 border-t border-[var(--color-border-light)] py-4 text-center text-xs text-[var(--color-text-muted)] bg-[var(--color-bg-glass)] backdrop-blur-md">
        © {new Date().getFullYear()} IKEN Technology. All rights reserved.
      </footer>
    </div>
  );
}
