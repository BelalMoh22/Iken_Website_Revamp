"use client";
import { motion } from "framer-motion";

export function BackgroundGlow() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Primary Glows */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-[10%] top-[10%] h-[500px] w-[500px] rounded-full bg-[var(--color-brand-blue-glow)] blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-[5%] bottom-[10%] h-[600px] w-[600px] rounded-full bg-[var(--color-brand-cyan-glow)] blur-[140px]"
      />

      {/* Subtle Floating Orbs */}
      <FloatingOrb color="var(--color-brand-blue)" delay={0} size={150} top="25%" left="20%" />
      <FloatingOrb color="var(--color-brand-cyan)" delay={5} size={120} top="65%" left="75%" />
    </div>
  );
}

function FloatingOrb({ color, delay, size, top, left }: { color: string; delay: number; size: number; top: string; left: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.05, 0.15, 0.05],
        y: [0, -40, 0],
        x: [0, 20, 0],
      }}
      transition={{
        duration: 12,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        width: size,
        height: size,
        top,
        left,
        backgroundColor: color,
        filter: "blur(60px)",
      }}
      className="absolute rounded-full"
    />
  );
}
