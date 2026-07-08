"use client";

import { motion } from "framer-motion";
import Badge from "./Badge";

export default function PageHeader({ badge, title, subtitle, description, children }) {
  return (
    <section className="relative mb-16 overflow-hidden pb-12 pt-32 sm:pt-36 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-hero-mid via-background to-hero-end" />
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          {badge && <Badge>{badge}</Badge>}
          <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg font-medium text-foreground sm:text-xl">{subtitle}</p>
          )}
          {description && (
            <p className="mt-4 text-base leading-relaxed text-body">{description}</p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
