"use client";
import { motion } from "framer-motion";

export function NotFoundHero() {
  return (
    <div className="relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative"
      >
        <motion.h1
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-[10rem] font-black leading-none tracking-tighter sm:text-[15rem] md:text-[20rem]"
        >
          <span className="bg-gradient-to-b from-[var(--color-brand-blue)] via-[var(--color-brand-cyan)] to-transparent bg-clip-text text-transparent opacity-20">
            404
          </span>
          <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent blur-[60px] opacity-30 select-none">
            404
          </span>
        </motion.h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-[-2rem] sm:mt-[-4rem]"
      >
        <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-5xl">
          Lost in Scope
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-[var(--color-text-secondary)]">
          The page you’re looking for doesn’t exist or has moved.
          Let’s get you back on track.
        </p>
      </motion.div>
    </div>
  );
}
