"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ServiceSectionHeader from "./ServiceSectionHeader";
import { containerVariants, itemVariants } from "./animations";

export default function ServiceStatsGrid({ badge, title, items = [], titleId }) {
  if (items.length === 0) return null;

  return (
    <section className="relative py-12 sm:py-16" aria-labelledby={titleId}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServiceSectionHeader badge={badge} title={title} titleId={titleId} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((item) => (
            <motion.article
              key={item.label}
              variants={itemVariants}
              className="group flex flex-col items-center rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/10"
            >
              {item.image && (
                <div className="relative mb-4 h-16 w-16">
                  <Image
                    src={item.image}
                    alt={item.imageAlt || item.label}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <p className="font-heading text-3xl font-bold text-primary sm:text-4xl">{item.value}</p>
              <p className="mt-2 text-sm font-medium text-body sm:text-base">{item.label}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
