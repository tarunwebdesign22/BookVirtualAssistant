"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Badge from "../Badge";
import PageHeader from "../PageHeader";
import CTAButton from "../CTAButton";
import ServiceFormModal from "./ServiceFormModal";

export default function ServiceHero({
  badge,
  title,
  description,
  ctaLabel,
  form,
  image,
  imageAlt,
}) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  if (image) {
    return (
      <>
        <section className="relative mb-16 overflow-hidden pb-12 pt-28 sm:pt-32 lg:pt-36">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-hero-mid via-background to-hero-end" />
          <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="pointer-events-none absolute -right-32 top-1/3 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {badge && <Badge>{badge}</Badge>}
                <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  {title}
                </h1>
                {description && (
                  <p className="mt-5 text-lg leading-relaxed text-body sm:text-xl">{description}</p>
                )}
                {ctaLabel && form && (
                  <div className="mt-8">
                    <CTAButton size="lg" onClick={() => setIsFormOpen(true)}>
                      {ctaLabel}
                    </CTAButton>
                  </div>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto aspect-[4/3] w-full max-w-lg"
              >
                <Image
                  src={image}
                  alt={imageAlt || title}
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {form && (
          <ServiceFormModal
            isOpen={isFormOpen}
            onClose={() => setIsFormOpen(false)}
            title={form.title}
            subtitle={form.subtitle}
            idPrefix={form.idPrefix}
          />
        )}
      </>
    );
  }

  return (
    <>
      <PageHeader badge={badge} title={title} description={description}>
        {ctaLabel && form && (
          <div className="mt-8">
            <CTAButton size="lg" onClick={() => setIsFormOpen(true)}>
              {ctaLabel}
            </CTAButton>
          </div>
        )}
      </PageHeader>

      {form && (
        <ServiceFormModal
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          title={form.title}
          subtitle={form.subtitle}
          idPrefix={form.idPrefix}
        />
      )}
    </>
  );
}
