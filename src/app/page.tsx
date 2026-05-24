import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { DifferentiationSection } from "./sections/DifferentiationSection";
import { Header } from "./sections/Header";
import { HeroSection } from "./sections/HeroSection";
import { ModelsSection } from "./sections/ModelsSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TrustedCompaniesSection } from "./sections/TrustedCompaniesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-main)] text-[var(--color-text-primary)]">
      <Header />

      <main id="home" className="bg-[var(--color-bg-main)]">
        <HeroSection />

        <AboutSection />

        <DifferentiationSection />

        <ServicesSection />

        <ModelsSection />

        <ProjectsSection />

        <TrustedCompaniesSection />

        <ContactSection />
      </main>
    </div>
  );
}
