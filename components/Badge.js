"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Badge({ children, className = "", tone = "light" }) {
  const toneClasses =
    tone === "dark"
      ? "border border-white/20 bg-white/10 text-white shadow-none"
      : "border border-white/25 bg-white/60 text-body shadow-sm";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`inline-flex items-center gap-2 rounded-lg px-4 py-1.5 text-sm font-medium backdrop-blur-md ${toneClasses} ${className}`}
    >
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/25 ring-1 ring-primary/20">
        <Image
          src="/images/favicon-logo.png"
          alt=""
          width={12}
          height={12}
          className="h-3 w-3 object-contain"
          aria-hidden="true"
        />
      </span>
      <span>{children}</span>
    </motion.div>
  );
}
