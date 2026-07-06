"use client";

import { motion } from "framer-motion";
import ServiceSectionHeader from "./ServiceSectionHeader";
import ServiceFeatureCard from "./ServiceFeatureCard";
import { containerVariants } from "./animations";

export default function ServiceFeaturesGrid({
  badge,
  title,
  description,
  items = [],
  columns = 3,
  variant = "default",
  background = "light",
  titleId,
}) {
  if (items.length === 0) return null;

  const columnClasses = {
    2: "md:grid-cols-2",
    3: "lg:grid-cols-3 md:grid-cols-2",
    4: "lg:grid-cols-4 md:grid-cols-2",
  };

  const bgClasses = {
    light: "bg-gradient-to-b from-white via-hero-mid to-hero-end",
    white: "bg-white",
    subtle: "bg-gradient-to-b from-hero-end via-hero-mid to-white",
  };

  return (
    <section className={`relative overflow-hidden py-12 sm:py-16 lg:py-20 ${bgClasses[background] || bgClasses.light}`} aria-labelledby={titleId}>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServiceSectionHeader badge={badge} title={title} description={description} titleId={titleId} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className={`mt-10 grid gap-5 sm:mt-12 sm:gap-6 ${columnClasses[columns] || columnClasses[3]}`}
        >
          {items.map((item, index) => (
            <ServiceFeatureCard key={item.title} {...item} index={index} variant={variant} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
