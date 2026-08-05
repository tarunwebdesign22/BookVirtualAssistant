"use client";

import { motion } from "framer-motion";
import Badge from "../Badge";
import SolutionCard from "./SolutionCard";
import { solutions } from "./solutionsData";

export default function Solutions() {
  const [featured, horizontal, horizontalReverse, ...bottomCards] = solutions;

  return (
    <section
      id="services"
      className="relative overflow-hidden py-12 sm:py-16 lg:py-20"
      aria-labelledby="solutions-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-[#f7f8fa] to-white" />

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

        <div className="mt-10 space-y-4 sm:mt-12 sm:space-y-5">
          {/* Top bento: large featured + two stacked horizontals */}
          <div className="grid gap-4 sm:gap-5 lg:grid-cols-2 lg:items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="h-full"
            >
              <SolutionCard item={featured} />
            </motion.div>

            <div className="flex flex-col gap-4 sm:gap-5">
              {[horizontal, horizontalReverse].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.08 * (index + 1) }}
                  className="flex-1"
                >
                  <SolutionCard item={item} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom row: three equal cards */}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {bottomCards.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.06 * index }}
                className="h-full"
              >
                <SolutionCard item={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
