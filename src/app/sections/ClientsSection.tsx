import { motion } from "framer-motion";
import { GlowingOrbDashedClients } from "../GlowingOrbDashedClients";

export function ClientsSection() {
  return (
    <section 
      id="clients" 
      className="relative overflow-hidden bg-[var(--color-bg-main)] py-18 sm:py-24"
    >
      {/* Dark Ambient Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-brand-cyan-glow),transparent_80%)]" />
      </div>

      <div className="relative z-10 mx-auto mb-12 w-full max-w-[90rem] px-6 text-center sm:mb-20 sm:px-10 lg:px-12">
        <div className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-text-brand)]">
            Partnership
          </p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-semibold tracking-tight sm:text-5xl text-[var(--color-text-primary)]"
          >
            Our Trusted <span className="bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">Clients</span>
          </motion.h2>
        </div>
      </div>

      {/* Finalized Constellation Display (Dark ONLY) */}
      <div className="relative z-10 w-full min-h-[460px] sm:min-h-[600px] md:min-h-[700px]">
        <div className="animate-in fade-in zoom-in-95 duration-1000">
          <GlowingOrbDashedClients />
        </div>
      </div>
    </section>
  );
}
