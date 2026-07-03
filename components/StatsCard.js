"use client";

import { motion } from "framer-motion";

export default function StatsCard({
  value,
  label,
  className = "",
  delay = 0,
  floatDuration = 6,
  floatY = 6,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -floatY, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
        scale: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
        y: {
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.5,
        },
      }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className={`rounded-xl border border-white/30 bg-white/60 px-4 py-3 shadow-lg shadow-primary/8 backdrop-blur-xl sm:px-5 sm:py-4 ${className}`}
    >
      <p className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {value}
      </p>
      <p className="mt-0.5 text-xs font-medium text-body sm:text-sm">{label}</p>
    </motion.div>
  );
}
