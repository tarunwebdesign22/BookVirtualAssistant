"use client";

import { motion } from "framer-motion";
import ServiceIntro from "./ServiceIntro";
import CTAButton from "../CTAButton";

export default function ServiceClosing({
  title,
  paragraphs = [],
  ctaLabel,
  ctaHref = "/contact-us",
}) {
  if (!title && paragraphs.length === 0) return null;

  return (
    <section className="relative pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServiceIntro title={title} paragraphs={paragraphs} />
        {ctaLabel && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8 flex justify-center"
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
