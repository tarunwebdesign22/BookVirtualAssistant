"use client";

import { motion } from "framer-motion";

export default function ServiceIntro({ title, paragraphs = [] }) {
  if (!title && paragraphs.length === 0) return null;

  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl"
        >
          {title && (
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">{title}</h2>
          )}
          <div className="mt-6 space-y-4">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-body sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
