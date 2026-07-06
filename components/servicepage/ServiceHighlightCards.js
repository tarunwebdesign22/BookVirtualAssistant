"use client";

import { motion } from "framer-motion";
import ServiceSectionHeader from "./ServiceSectionHeader";
import { containerVariants, itemVariants } from "./animations";

export default function ServiceHighlightCards({
  badge,
  title,
  description,
  items = [],
  titleId,
}) {
  if (items.length === 0) return null;

  return (
    <section className="relative overflow-hidden py-12 sm:py-16" aria-labelledby={titleId}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServiceSectionHeader badge={badge} title={title} description={description} titleId={titleId} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-3"
        >
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl border border-white/40 bg-white/70 p-6 shadow-lg shadow-primary/5 backdrop-blur-xl sm:p-8"
              >
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/10 blur-2xl transition-all group-hover:bg-accent/20" />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/15 text-primary ring-1 ring-primary/10">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="relative mt-5 font-heading text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-body sm:text-base">{item.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
