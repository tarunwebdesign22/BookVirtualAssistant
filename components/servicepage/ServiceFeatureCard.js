"use client";

import { motion } from "framer-motion";

export default function ServiceFeatureCard({ icon: Icon, title, description, index = 0, variant = "default" }) {
  const isCompact = variant === "compact";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/10 ${
        isCompact ? "p-5 sm:p-6" : "p-6 sm:p-7"
      }`}
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10" />
      <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/25">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="relative mt-5 font-heading text-lg font-semibold text-foreground">{title}</h3>
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-body sm:text-base">{description}</p>
      <div className="relative mt-5 h-0.5 w-0 rounded-full bg-gradient-to-r from-primary-dark via-primary to-accent transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
}
