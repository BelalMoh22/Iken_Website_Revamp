"use client";

import { motion } from "framer-motion";
import { GlowingOrbDashedClients } from "../GlowingOrbDashedClients";

export function ClientsSection() {
  return (
    <section 
      id="clients" 
      className="scroll-section relative overflow-hidden bg-[var(--color-bg-main)] py-16 sm:py-24"
    >
      {/* Atmospheric Background Layers */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Primary Ambient Glow (Large & Soft) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--color-brand-cyan-glow),transparent_70%)] opacity-60" />
        
        {/* Secondary Soft Depth Layer */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--color-brand-blue-glow),transparent_100%)] opacity-40" />

        {/* Cinematic Center Glow (Subtle highlight behind constellation) */}
        <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[var(--color-brand-blue)] opacity-[0.06] blur-[140px] rounded-full" />

        {/* Top & Bottom Seamless Fades */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[var(--color-bg-main)] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[var(--color-bg-main)] to-transparent" />
        
        {/* Subtle separator lines (atmospheric only) */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-light)] to-transparent opacity-30" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-light)] to-transparent opacity-30" />
      </div>

      <div className="site-container relative z-10 mb-12 text-center sm:mb-20">
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
      <div className="relative z-10 w-full min-h-[380px] min-[390px]:min-h-[420px] sm:min-h-[580px] md:min-h-[640px]">
        <div className="animate-in fade-in zoom-in-95 duration-1000">
          <GlowingOrbDashedClients />
        </div>
      </div>
    </section>
  );
}
