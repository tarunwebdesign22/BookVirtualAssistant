"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function ServiceIntro({
  title,
  paragraphs = [],
  image,
  imageAlt = "",
  highlights = [],
  badge = "Why It Matters",
}) {
  if (!title && paragraphs.length === 0) return null;

  if (image) {
    return (
      <section className="relative py-10 sm:py-12 lg:py-12">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f4f7fc_45%,#ffffff_100%)]" />
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(38,70,171,0.12) 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-10 overflow-hidden rounded-lg sm:mb-12"
          >
            <div className="relative h-[400px] w-full">
              <Image
                src={image}
                alt={imageAlt || title || "Service overview"}
                fill
                sizes="(min-width: 1280px) 1280px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-footer-mid/40 via-transparent to-transparent" />
            </div>
          </motion.div>

          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="lg:sticky lg:top-[calc(5.5rem+1rem)]"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {badge}
              </p>
              {title && (
                <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
                  {title}
                </h2>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="space-y-4">
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-base leading-relaxed text-body sm:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              {highlights.length > 0 && (
                <ul className="mt-7 grid gap-3 sm:grid-cols-2" role="list">
                  {highlights.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.08 * index }}
                      className="group flex items-center gap-3 rounded-lg bg-white/70 px-3.5 py-3 ring-1 ring-slate-200/80 transition-colors hover:ring-primary/30"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-white shadow-md shadow-primary/25 transition-transform group-hover:scale-105">
                        <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
                      </span>
                      <span className="text-sm font-semibold text-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

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
