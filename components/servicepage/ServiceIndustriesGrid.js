"use client";

import { motion } from "framer-motion";
import ServiceSectionHeader from "./ServiceSectionHeader";
import CTAButton from "../CTAButton";
import { containerVariants, itemVariants } from "./animations";

export default function ServiceIndustriesGrid({
  badge,
  title,
  description,
  items = [],
  footer,
  ctaLabel,
  ctaHref = "/contact-us",
  titleId,
}) {
  if (items.length === 0) return null;

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white via-hero-mid to-hero-end py-12 sm:py-16 lg:py-20"
      aria-labelledby={titleId}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServiceSectionHeader badge={badge} title={title} description={description} titleId={titleId} />

        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item) => {
            const Icon = item.icon;
            const isCompact = !item.description;

            return (
              <motion.li
                key={item.title}
                variants={itemVariants}
                className={`group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/10 ${
                  isCompact ? "flex flex-col items-center text-center" : ""
                }`}
              >
                {Icon && (
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/15 text-primary transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                )}
                <h3
                  className={`font-heading text-lg font-semibold text-foreground ${
                    Icon ? (isCompact ? "mt-3" : "mt-4") : ""
                  }`}
                >
                  {item.title}
                </h3>
                {item.description && (
                  <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">{item.description}</p>
                )}
              </motion.li>
            );
          })}
        </motion.ul>

        {footer && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-10 max-w-4xl text-center text-base leading-relaxed text-body sm:mt-12 sm:text-lg"
          >
            {footer}
          </motion.p>
        )}

        {ctaLabel && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-10 flex justify-center sm:mt-12"
          >
            <CTAButton href={ctaHref} size="lg">
              {ctaLabel}
            </CTAButton>
          </motion.div>
        )}
      </div>
    </section>
  );
}
