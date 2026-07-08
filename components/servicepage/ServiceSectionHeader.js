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
}) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`${isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {badge && <Badge className={isCenter ? "mb-4" : "mb-3"}>{badge}</Badge>}
      {title && (
        <h2
          id={titleId}
          className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          {title}
        </h2>
      )}
      {description && (
        <p className={`mt-4 text-lg leading-relaxed text-body ${isCenter ? "" : "max-w-2xl"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
