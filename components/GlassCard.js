"use client";

import { motion } from "framer-motion";

export default function GlassCard({
  children,
  className = "",
  delay = 0,
  float = false,
  floatDuration = 5,
  floatY = 8,
  style,
  ariaLabel,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{
        opacity: 1,
        y: float ? [0, -floatY, 0] : 0,
        scale: 1,
      }}
      transition={{
        opacity: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
        y: float
          ? { duration: floatDuration, repeat: Infinity, ease: "easeInOut", delay }
          : { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
        scale: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
      }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className={`rounded-xl border border-white/25 bg-white/50 shadow-lg shadow-primary/5 backdrop-blur-xl ${className}`}
      style={style}
      role={ariaLabel ? "region" : undefined}
      aria-label={ariaLabel}
    >
      {children}
    </motion.div>
  );
}
