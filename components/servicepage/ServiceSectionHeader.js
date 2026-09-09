"use client";

import { motion } from "framer-motion";
import Badge from "../Badge";

export default function ServiceSectionHeader({
  badge,
  title,
  description,
  align = "center",
  className = "",
  titleId,
  theme = "light",
}) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`${isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {badge && (
        <Badge tone={isDark ? "dark" : "light"} className={isCenter ? "mb-4" : "mb-3"}>
          {badge}
        </Badge>
      )}
      {title && (
        <h2
          id={titleId}
          className={`font-heading text-3xl font-bold tracking-tight sm:text-4xl ${
            isDark ? "text-white" : "text-foreground"
          }`}
        >
          {title}
        </h2>
      )}
      {description && (
        <div
          className={`mt-4 text-lg leading-relaxed ${
            isDark ? "text-white/75" : "text-body"
          } ${isCenter ? "" : "max-w-2xl"}`}
        >
          {description}
        </div>
      )}
    </motion.div>
  );
}
