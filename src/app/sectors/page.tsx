
import Link from "next/link";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ContactSection } from "../sections/ContactSection";
import { Header } from "../sections/Header";
import { IndustriesSection } from "../sections/IndustriesSection";

export default function SectorsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-main)] text-[var(--color-text-primary)]">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-[var(--color-bg-main)] py-10 sm:py-14 lg:py-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,var(--color-brand-blue-glow),transparent_35%),radial-gradient(circle_at_90%_10%,var(--color-brand-cyan-glow),transparent_30%)]" />
          <div className="site-container relative">
            <Breadcrumbs />
            <div className="max-w-3xl">
              <div className="mb-3 inline-flex items-center gap-2 text-[var(--color-text-brand)]">
                <span className="inline-flex h-3.5 w-3.5 rounded-[3px] bg-[var(--color-brand-blue)]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">Sectors</span>
              </div>
              <h1 className="text-4xl font-semibold leading-[1.2] tracking-tight text-[var(--color-text-primary)] sm:text-5xl">
                Digital products built for{" "}
                <span className="bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">
                  sector realities
                </span>
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)] sm:mt-5">
                IKEN supports teams across finance, automotive, commerce, events, logistics, and healthcare with product engineering shaped around each operating environment.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-px"
                >
                  Book a discovery call
                </Link>
                <Link
                  href="/#services"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg-glass)] px-5 py-3 text-sm font-semibold text-[var(--color-text-secondary)] transition hover:border-[var(--color-border-brand)] hover:text-[var(--color-text-primary)]"
                >
                  View services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <IndustriesSection showHeader={false} />
        <ContactSection />
      </main>
    </div>
  );
}
