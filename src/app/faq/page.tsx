import Link from "next/link";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ContactSection } from "../sections/ContactSection";
import { FaqSection } from "../sections/FaqSection";
import { Header } from "../sections/Header";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-main)] text-[var(--color-text-primary)]">
      <Header />
      <main>
        <section className="section-hero-y relative overflow-hidden bg-[var(--color-bg-main)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,var(--color-brand-blue-glow),transparent_35%),radial-gradient(circle_at_85%_0%,var(--color-brand-cyan-glow),transparent_28%)]" />
          <div className="site-container relative">
            <Breadcrumbs />
            <div className="max-w-3xl">
              <div className="section-eyebrow">
                <span className="inline-flex h-3.5 w-3.5 rounded-[3px] bg-[var(--color-brand-blue)]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">FAQ</span>
              </div>
              <h1 className="text-4xl font-semibold leading-[1.2] tracking-tight text-[var(--color-text-primary)] sm:text-5xl">
                Clear answers before{" "}
                <span className="bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">
                  we build
                </span>
              </h1>
              <p className="section-subtitle">
                Practical answers about timelines, dedicated teams, existing products, post-launch support, and scaling with IKEN Technology.
              </p>
              <div className="mt-6 md:mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-px"
                >
                  Ask a project question
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FaqSection showHeader={false} />
        <ContactSection />
      </main>
    </div>
  );
}
