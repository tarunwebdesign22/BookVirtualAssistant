"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ServiceSectionHeader from "./ServiceSectionHeader";

function ProcessStep({ step, number, index, isLast }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <article className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/10">
        <div className="flex flex-col sm:flex-row">
          <div className="relative flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark px-8 py-8 sm:w-36 sm:flex-shrink-0 sm:py-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]" />
            <span className="relative font-heading text-4xl font-bold text-white sm:text-5xl">{number}</span>
          </div>

          <div className="relative flex flex-1 flex-col justify-center px-6 py-6 sm:px-8 sm:py-8">
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
              Step {number}
            </span>
            <h3 className="mt-2 font-heading text-xl font-semibold text-foreground sm:text-2xl">{step.title}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-body sm:text-base">{step.description}</p>
            <div className="mt-5 h-0.5 w-0 rounded-full bg-gradient-to-r from-primary-dark via-primary to-accent transition-all duration-500 group-hover:w-24" />
          </div>
        </div>
      </article>

      {!isLast && (
        <div className="flex justify-center py-4" aria-hidden="true">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/15 bg-white text-primary shadow-sm">
            <ArrowDown className="h-4 w-4" />
          </span>
        </div>
      )}
    </motion.li>
  );
}

export default function ServiceProcessSteps({
  badge,
  title,
  description,
  steps = [],
  image,
  imageAlt,
  titleId,
}) {
  if (steps.length === 0) return null;

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white via-hero-mid to-hero-end py-12 sm:py-16 lg:py-20"
      aria-labelledby={titleId}
    >
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-primary/6 blur-[90px]" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-56 w-56 rounded-full bg-accent/8 blur-[80px]" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ServiceSectionHeader badge={badge} title={title} description={description} titleId={titleId} />

        <ol className="mt-12 space-y-0 sm:mt-14">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.title}
              step={step}
              number={String(index + 1).padStart(2, "0")}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </ol>

        {image && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="relative mt-12 aspect-[21/9] w-full overflow-hidden rounded-2xl sm:mt-14"
          >
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              className="object-contain"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
