"use client";

import { motion } from "framer-motion";
import ServiceSectionHeader from "./ServiceSectionHeader";
import CTAButton from "../CTAButton";
import { containerVariants, itemVariants } from "./animations";

export default function ServiceHowToHire({
  badge,
  title,
  description,
  steps = [],
  ctaLabel = "Get Started",
  ctaHref = "/contact-us",
  titleId,
}) {
  if (steps.length === 0) return null;

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20" aria-labelledby={titleId}>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-hero-mid to-hero-end" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServiceSectionHeader badge={badge} title={title} description={description} titleId={titleId} />

        <motion.ol
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-3"
        >
          {steps.map((step, index) => (
            <motion.li
              key={step.title}
              variants={itemVariants}
              className="relative flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8"
            >
              <span className="font-heading text-4xl font-bold text-primary/15">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-heading text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-body sm:text-base">{step.description}</p>
            </motion.li>
          ))}
        </motion.ol>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex justify-center sm:mt-12"
        >
          <CTAButton href={ctaHref} size="lg">
            {ctaLabel}
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
