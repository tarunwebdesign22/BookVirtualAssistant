"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ServiceSectionHeader from "./ServiceSectionHeader";

const AUTO_INTERVAL_MS = 5000;

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

function ProcessTabs({ steps, badge, title, description, titleId }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    if (isPaused || steps.length <= 1) return undefined;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % steps.length);
      setProgressKey((key) => key + 1);
    }, AUTO_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [isPaused, steps.length, activeIndex]);

  const activeStep = steps[activeIndex];
  const activeNumber = String(activeIndex + 1).padStart(2, "0");

  const selectStep = (index) => {
    setActiveIndex(index);
    setProgressKey((key) => key + 1);
  };

  return (
    <section
      className="relative overflow-hidden py-12 sm:py-16 lg:py-20"
      aria-labelledby={titleId}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-footer-mid via-footer-mid/98 to-footer-end" />
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-primary/25 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-accent/20 blur-[90px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ServiceSectionHeader
          badge={badge}
          title={title}
          description={description}
          titleId={titleId}
          theme="dark"
        />

        <div className="mt-10 sm:mt-12">
          <div
            className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Process steps"
          >
            {steps.map((step, index) => {
              const isActive = index === activeIndex;
              const number = String(index + 1).padStart(2, "0");

              return (
                <button
                  key={step.title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="process-tab-panel"
                  id={`process-tab-${index}`}
                  onClick={() => selectStep(index)}
                  className={`group relative min-w-[9.5rem] flex-1 overflow-hidden rounded-2xl border px-4 py-3.5 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-footer-mid sm:min-w-0 ${
                    isActive
                      ? "border-accent/40 bg-white/12 shadow-lg shadow-black/20"
                      : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8"
                  }`}
                >
                  <span
                    className={`font-heading text-xs font-semibold uppercase tracking-[0.18em] ${
                      isActive ? "text-accent" : "text-white/45"
                    }`}
                  >
                    Step {number}
                  </span>
                  <span
                    className={`mt-1.5 block font-heading text-sm font-semibold sm:text-base ${
                      isActive ? "text-white" : "text-white/70"
                    }`}
                  >
                    {step.title}
                  </span>

                  {isActive && (
                    <span className="absolute inset-x-0 bottom-0 h-0.5 overflow-hidden bg-white/10">
                      <motion.span
                        key={progressKey}
                        className="block h-full bg-gradient-to-r from-primary via-accent to-secondary"
                        initial={{ width: "0%" }}
                        animate={{ width: isPaused ? undefined : "100%" }}
                        transition={{
                          duration: isPaused ? 0 : AUTO_INTERVAL_MS / 1000,
                          ease: "linear",
                        }}
                      />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div
            className="relative mt-5 overflow-hidden rounded-3xl border border-white/12 bg-white/8 p-6 shadow-2xl shadow-black/25 backdrop-blur-md sm:mt-6 sm:p-8 lg:p-10"
            role="tabpanel"
            id="process-tab-panel"
            aria-labelledby={`process-tab-${activeIndex}`}
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />

            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30 sm:h-24 sm:w-24">
                <span className="font-heading text-3xl font-bold text-white sm:text-4xl">{activeNumber}</span>
              </div>

              <div className="min-w-0 flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep.title}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                      Step {activeNumber} of {String(steps.length).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-heading text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                      {activeStep.title}
                    </h3>
                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
                      {activeStep.description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 flex items-center gap-2" aria-hidden="true">
                    {steps.map((step, index) => (
                      <button
                        key={step.title}
                        type="button"
                        onClick={() => selectStep(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          index === activeIndex ? "w-8 bg-accent" : "w-2.5 bg-white/30 hover:bg-white/50"
                        }`}
                        aria-label={`Go to step ${index + 1}`}
                      />
                    ))}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
  variant = "tabs",
}) {
  if (steps.length === 0) return null;

  if (variant === "tabs") {
    return (
      <ProcessTabs
        steps={steps}
        badge={badge}
        title={title}
        description={description}
        titleId={titleId}
      />
    );
  }

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
