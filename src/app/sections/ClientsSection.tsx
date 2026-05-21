"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const featuredClients = [
  { name: "EFG Hermes", logo: "/clients/efg-dark.png", lightLogo: "/clients/efg-light.png", alt: "EFG Hermes logo" },
  { name: "Valu", logo: "/clients/valu-dark.svg", lightLogo: "/clients/valu-light.svg", alt: "Valu logo", customSize: "w-[75%] h-[75%]" },
  { name: "Balad", logo: "/clients/balad-dark.svg", lightLogo: "/clients/balad-light.svg", alt: "Balad logo", customSize: "w-[80%] h-[80%]" },
  { name: "ELAbd Patisserie", logo: "/clients/alabd-dark.svg", lightLogo: "/clients/alabd-light.svg", alt: "ELAbd Patisserie logo" },
  { name: "Orders&More", logo: "/clients/o-and-m-dark.svg", lightLogo: "/clients/o-and-m-light.svg", alt: "Orders&More logo" },
  { name: "Contact Cars", logo: "/clients/contactcars-dark.svg", lightLogo: "/clients/contactcars-light.svg", alt: "Contact Cars logo" },
  { name: "Moqawalat", logo: "/clients/moqawlat-dark.png", lightLogo: "/clients/moqawlat-light2.png", alt: "Moqawalat logo" },
  { name: "Jamjoom Pharma", logo: "/clients/Jamjoom-dark.svg", lightLogo: "/clients/Jamjoom-light.svg", alt: "Jamjoom Pharma logo" },
  // { name: "Joint Scope", logo: "/clients/br-jointscope.png", alt: "Joint Scope logo" },
  { name: "Furn", logo: "/clients/furn-dark.svg", lightLogo: "/clients/furn-light.svg", alt: "Furn logo" },
  { name: "Alaaqar", logo: "/clients/alaaqar-dark.svg", lightLogo: "/clients/alaaqar-light1.png", alt: "Alaaqar logo" },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 14,
    },
  },
};

export function ClientsSection() {
  return (
    <section
      id="clients"
      className="scroll-section relative overflow-hidden bg-[var(--color-bg-main)] py-20 sm:py-24 lg:py-28"
    >
      {/* Premium Background Ornaments & Accent Glows */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Subtle Ambient Section Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-main)] via-[var(--color-brand-blue-glow)]/20 to-[var(--color-bg-main)] opacity-70" />

        {/* Central Core Glowing Accent */}
        <div className="absolute left-1/2 top-1/2 h-[min(480px,80vw)] w-[min(700px,100vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-brand-blue-glow)] opacity-55 blur-[120px]" />

        {/* Left Side Concentric Circles & Side Glow */}
        <div className="absolute -left-48 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[var(--color-brand-blue-glow)]/30 opacity-60 blur-[100px]" />
        <div className="absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border border-[var(--color-border-light)] opacity-15 dark:opacity-8" />
        <div className="absolute -left-48 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full border border-[var(--color-border-light)] opacity-10 dark:opacity-5" />
        <div className="absolute -left-64 top-1/2 h-[640px] w-[640px] -translate-y-1/2 rounded-full border border-[var(--color-border-light)] opacity-6 dark:opacity-3" />

        {/* Right Side Concentric Circles & Side Glow */}
        <div className="absolute -right-48 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[var(--color-brand-blue-glow)]/30 opacity-60 blur-[100px]" />
        <div className="absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border border-[var(--color-border-light)] opacity-15 dark:opacity-8" />
        <div className="absolute -right-48 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full border border-[var(--color-border-light)] opacity-10 dark:opacity-5" />
        <div className="absolute -right-64 top-1/2 h-[640px] w-[640px] -translate-y-1/2 rounded-full border border-[var(--color-border-light)] opacity-6 dark:opacity-3" />

        {/* Subtle Radial Glows in Corners */}
        <div className="absolute left-[8%] top-[10%] h-36 w-36 rounded-full bg-[var(--color-brand-cyan-glow)] opacity-35 blur-[55px]" />
        <div className="absolute right-[8%] bottom-[10%] h-36 w-36 rounded-full bg-[var(--color-brand-blue-glow)] opacity-40 blur-[60px]" />

        {/* Dynamic Horizontal Borders */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-light)] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-light)] to-transparent" />
      </div>

      <div className="site-container relative z-10">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-14 lg:mb-16"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--color-text-brand)]">
            PARTNERSHIP
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl md:text-5xl">
            Our Trusted{" "}
            <span className="bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">
              Clients
            </span>
          </h2>
          <p className="mt-3.5 text-[15px] font-medium leading-relaxed text-[var(--color-text-secondary)] opacity-85">
            Trusted by leading companies across multiple industries.
          </p>
        </motion.div>

        {/* Responsive Logo Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto w-full max-w-6xl"
        >
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 sm:gap-10 lg:gap-12 place-items-center">
            {featuredClients.map((client, index) => {
              const isLowerRow = index >= 5;
              return (
                <motion.div
                  key={client.name}
                  variants={cardVariants}
                  whileHover={{ y: -4 }}
                  className="group relative flex aspect-[2/1] w-full max-w-[160px] items-center justify-center transition-all duration-300"
                >
                  {/* Floating Premium Tooltip */}
                  {isLowerRow ? (
                    /* Lower row tooltip - floats BELOW card */
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 pointer-events-none z-30 flex flex-col items-center">
                      <div className="w-1.5 h-1.5 bg-white dark:bg-[#0d1625] border-l border-t border-[var(--color-border-light)] dark:border-white/[0.08] rotate-45 -mb-[4px] relative z-40" />
                      <div className="px-3.5 py-1.5 rounded-lg bg-white/95 dark:bg-[#0d1625]/95 border border-[var(--color-border-light)] dark:border-white/[0.08] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-primary)] shadow-md backdrop-blur-md whitespace-nowrap">
                        {client.name}
                      </div>
                    </div>
                  ) : (
                    /* Upper row tooltip - floats ABOVE card */
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 pointer-events-none z-30 flex flex-col items-center">
                      <div className="px-3.5 py-1.5 rounded-lg bg-white/95 dark:bg-[#0d1625]/95 border border-[var(--color-border-light)] dark:border-white/[0.08] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-primary)] shadow-md backdrop-blur-md whitespace-nowrap">
                        {client.name}
                      </div>
                      <div className="w-1.5 h-1.5 bg-white dark:bg-[#0d1625] border-r border-b border-[var(--color-border-light)] dark:border-white/[0.08] rotate-45 -mt-[4px] relative z-40" />
                    </div>
                  )}

                  {/* Logo Image Wrapper */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className={`relative transition-transform duration-500 ease-out group-hover:scale-110 ${client.customSize || "w-full h-full"}`}>
                      {/* Dark Mode Logo */}
                      <Image
                        src={client.logo}
                        alt={client.alt}
                        fill
                        sizes="(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 160px"
                        className="hidden dark:block object-contain opacity-90 transition-all duration-300 group-hover:opacity-100"
                      />
                      {/* Light Mode Logo */}
                      <Image
                        src={client.lightLogo || client.logo}
                        alt={client.alt}
                        fill
                        sizes="(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 160px"
                        className="block dark:hidden object-contain opacity-80 transition-all duration-300 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Regional Trust Indicator */}
        {/* <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-14 sm:mt-16 flex items-center justify-center gap-4 text-xs sm:text-sm text-[var(--color-text-muted)] font-medium"
        >
          <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-transparent via-[var(--color-border-light)] to-transparent relative">
            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--color-brand-blue)] opacity-55" />
          </div>

          <div className="flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white/30 dark:bg-[var(--color-bg-glass)] border border-[var(--color-border-light)] shadow-sm backdrop-blur-sm">
            <svg
              className="w-4 h-4 text-[var(--color-brand-cyan)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span className="tracking-wide text-[var(--color-text-secondary)] opacity-95">
              +50 successful partnerships across MENA region
            </span>
          </div>

          <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-transparent via-[var(--color-border-light)] to-transparent relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--color-brand-blue)] opacity-55" />
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}

