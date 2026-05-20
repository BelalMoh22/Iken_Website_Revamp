"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const featuredClients = [
  { name: "Jamjoom Pharma", logo: "/clients/br-jamjoom.jpg", alt: "Jamjoom Pharma logo" },
  { name: "EFG Hermes", logo: "/clients/br-efg.jpg", alt: "EFG Hermes logo" },
  { name: "Valu", logo: "/clients/br-valu.jpg", alt: "Valu logo" },
  { name: "Balad", logo: "/clients/br-balad.jpg", alt: "Balad logo" },
  { name: "ELAbd Patisserie", logo: "/clients/br-elabd.png", alt: "ELAbd Patisserie logo" },
  { name: "Contact Cars", logo: "/clients/br-contactcars.jpg", alt: "Contact Cars logo" },
  { name: "Moqawalat", logo: "/clients/br-moqawalat.jpg", alt: "Moqawalat logo" },
  { name: "Joint Scope", logo: "/clients/br-jointscope.jpg", alt: "Joint Scope logo" },
  { name: "Furn", logo: "/clients/br-furn.jpg", alt: "Furn logo" },
  { name: "ALAAQAR", logo: "/clients/br-alaqaar.jpg", alt: "ALAAQAR logo" },
];

export function ClientsSection() {
  return (
    <section
      id="clients"
      className="scroll-section home-section-y relative overflow-hidden bg-[var(--color-bg-main)]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[min(480px,70vw)] w-[min(640px,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-brand-blue-glow)] opacity-80 blur-[110px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-light)] to-transparent" />
      </div>

      <div className="site-container relative z-10">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-brand)]">
            PARTNERSHIP
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mt-4 text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-5xl"
          >
            Our Trusted{" "}
            <span className="bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">
              Clients
            </span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-6xl"
        >
          <div className="grid grid-cols-3 gap-x-4 gap-y-7 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-5 lg:gap-x-8 lg:gap-y-10">
            {featuredClients.map((client) => (
              <div
                key={client.name}
                className="flex min-h-[2.5rem] items-center justify-center sm:min-h-[2.75rem] lg:min-h-[3rem]"
              >
                <span className="relative mx-auto block aspect-[2.1/1] w-full max-w-[5.5rem] sm:max-w-[6.75rem] lg:max-w-[7.5rem]">
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    fill
                    sizes="(max-width: 640px) 26vw, (max-width: 1024px) 20vw, 120px"
                    className="object-contain opacity-[0.9] dark:opacity-[0.94] dark:brightness-[1.04]"
                  />
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
