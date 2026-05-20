import { AboutSection } from "./sections/AboutSection";
import { ClientsSection } from "./sections/ClientsSection";
import { ContactSection } from "./sections/ContactSection";
import { DifferentiationSection } from "./sections/DifferentiationSection";
import { Header } from "./sections/Header";
import { HeroSection } from "./sections/HeroSection";
import { ModelsSection } from "./sections/ModelsSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-main)] text-[var(--color-text-primary)]">
      <Header />

      <main id="home" className="bg-[var(--color-bg-main)]">
        <HeroSection />

        <ClientsSection />

        <AboutSection />

        <DifferentiationSection />

        <ServicesSection />

        <ModelsSection />

        <ProjectsSection />

        <TestimonialsSection />

        <ContactSection />
      </main>
    </div>
  );
}
