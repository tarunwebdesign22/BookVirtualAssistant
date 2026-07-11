"use client";

import { motion } from "framer-motion";
import Badge from "../Badge";
import SolutionCard from "./SolutionCard";
import { solutions } from "./solutionsData";

export default function Solutions() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-12 sm:py-16 lg:py-20"
      aria-labelledby="solutions-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-hero-mid/40 to-white" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge className="mb-4">Solutions</Badge>
          <h2
            id="solutions-heading"
            className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]"
          >
            Your All-in-One{" "}
            <span className="bg-gradient-to-r from-primary-dark via-primary to-accent bg-clip-text text-transparent">
              Virtual Staffing Solution
            </span>
          </h2>
          <p className="mt-4 text-lg text-body">
            Easily hire top remote talent across any industry with confidence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4"
        >
          {solutions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3) }}
              className="h-full"
            >
              <SolutionCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
