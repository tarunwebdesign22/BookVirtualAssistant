"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const variants = {
  primary: {
    base: "bg-gradient-to-r from-primary-dark to-primary text-white shadow-lg shadow-primary/25",
    hover: "hover:shadow-xl hover:shadow-primary/35",
    shine: "from-white/0 via-white/20 to-white/0",
  },
  secondary: {
    base: "border border-white/40 bg-white/70 text-foreground shadow-sm backdrop-blur-md",
    hover: "hover:border-primary/30 hover:bg-white/90 hover:shadow-md",
    shine: "from-transparent via-primary/10 to-transparent",
  },
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  ariaLabel,
}) {
  const styles = variants[variant] || variants.primary;

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const Component = href ? Link : "button";
  const linkProps = href ? { href } : { type: "button", onClick };

  const isFullWidth = className.includes("w-full");

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={isFullWidth ? "block w-full" : "inline-block"}
    >
      <Component
        {...linkProps}
        aria-label={ariaLabel || (typeof children === "string" ? children : undefined)}
        className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl font-heading font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${isFullWidth ? "w-full" : ""} ${styles.base} ${styles.hover} ${sizeClasses[size]} ${className}`}
      >
        <span
          className={`pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r ${styles.shine} transition-transform duration-700 group-hover:translate-x-full`}
          aria-hidden="true"
        />
        <span className="relative z-10">{children}</span>
      </Component>
    </motion.div>
  );
}
