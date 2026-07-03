"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "./PageHeader";
import CaseStudyCard from "./CaseStudyCard";
import { caseStudyCategories } from "./caseStudiesData";

export default function CaseStudiesPage() {
  const [activeTab, setActiveTab] = useState("graphic-designing");

  const activeCategory = caseStudyCategories.find((category) => category.id === activeTab);

  return (
    <>
      <PageHeader
        badge="Case Studies"
        title="Success Stories from Real Client Campaigns"
        description="Explore how our remote teams help businesses scale execution, improve quality, and deliver reliable outcomes across marketing and operations."
      />

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="flex justify-center">
          <div
            className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-2xl border border-white/40 bg-white/70 p-2 shadow-sm backdrop-blur-md sm:gap-2.5"
            role="tablist"
            aria-label="Case study categories"
          >
            {caseStudyCategories.map((category) => {
              const isActive = activeTab === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(category.id)}
                  className={`rounded-xl px-4 py-2.5 font-heading text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:px-5 sm:py-3 sm:text-base ${
                    isActive
                      ? "bg-gradient-to-r from-primary-dark to-primary text-white shadow-lg shadow-primary/25"
                      : "text-body hover:bg-primary/5 hover:text-foreground"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10" role="tabpanel">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
            >
              {activeCategory?.studies.map((study) => (
                <CaseStudyCard
                  key={`${activeTab}-${study.title}-${study.pdf}`}
                  study={study}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
