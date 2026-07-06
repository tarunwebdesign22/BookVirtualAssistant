"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ServiceSectionHeader from "./ServiceSectionHeader";

export default function ServiceImagePerksGrid({ badge, title, description, items = [], titleId }) {
  const [activeTab, setActiveTab] = useState(0);

  if (items.length === 0) return null;

  const activeItem = items[activeTab];

  return (
    <section
      className="relative overflow-hidden py-12 sm:py-16 lg:py-20"
      aria-labelledby={titleId}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-hero-end via-hero-mid to-white" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-primary/6 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-64 w-64 rounded-full bg-accent/8 blur-[90px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServiceSectionHeader badge={badge} title={title} description={description} titleId={titleId} />

        <div className="mt-10 sm:mt-12">
          <div
            className="flex justify-center"
            role="tablist"
            aria-label="Perks"
          >
            <div className="inline-flex max-w-full gap-2 overflow-x-auto rounded-2xl border border-white/40 bg-white/70 p-2 shadow-sm backdrop-blur-md [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {items.map((item, index) => {
                const isActive = activeTab === index;

                return (
                  <button
                    key={item.title}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`perk-panel-${index}`}
                    id={`perk-tab-${index}`}
                    onClick={() => setActiveTab(index)}
                    className={`whitespace-nowrap rounded-xl px-4 py-2.5 font-heading text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:px-5 sm:py-3 ${
                      isActive
                        ? "bg-gradient-to-r from-primary-dark to-primary text-white shadow-lg shadow-primary/25"
                        : "text-body hover:bg-primary/5 hover:text-foreground"
                    }`}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className="mt-8 sm:mt-10"
            role="tabpanel"
            id={`perk-panel-${activeTab}`}
            aria-labelledby={`perk-tab-${activeTab}`}
          >
            <AnimatePresence mode="wait">
              <motion.article
                key={activeItem.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-lg shadow-primary/5"
              >
                <div className="flex flex-col items-center gap-6 p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-8 lg:p-10">
                  {activeItem.image && (
                    <div className="flex-shrink-0">
                      <div className="relative flex h-52 w-52 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/8 via-white to-accent/10 ring-1 ring-primary/10 sm:h-60 sm:w-60">
                        <div className="relative h-40 w-40 sm:h-44 sm:w-44">
                          <Image
                            src={activeItem.image}
                            alt={activeItem.imageAlt || activeItem.title}
                            fill
                            className="object-contain"
                            sizes="(max-width: 1024px) 50vw, 240px"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="min-w-0 flex-1 text-center sm:text-left">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      Perk {String(activeTab + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 font-heading text-2xl font-bold text-foreground sm:text-3xl">
                      {activeItem.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">
                      {activeItem.description}
                    </p>
                    <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-primary-dark via-primary to-accent sm:mx-0" />
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
