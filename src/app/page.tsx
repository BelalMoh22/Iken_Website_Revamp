import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { Header } from "./sections/Header";
import { HeroSection } from "./sections/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TrustedCompaniesSection } from "./sections/TrustedCompaniesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-main)] text-[var(--color-text-primary)]">
      <Header />

      <main className="bg-[var(--color-bg-main)]">
        <HeroSection />

        <AboutSection />

        <ServicesSection />

        {/* <ModelsSection /> */}

        <ProjectsSection />

        <TrustedCompaniesSection />

        <ContactSection />
      </main>
    </div>
  );
}
