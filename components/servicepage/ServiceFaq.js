"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import ServiceSectionHeader from "./ServiceSectionHeader";

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-white transition-colors duration-300 ${
        isOpen ? "border-primary/30 shadow-md shadow-primary/5" : "border-slate-200/70 shadow-sm"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start gap-4 px-5 py-5 text-left transition-colors hover:bg-primary/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset sm:px-6 sm:py-6"
        aria-expanded={isOpen}
      >
        <span
          className={`mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg transition-colors ${
            isOpen ? "bg-primary/10 text-primary" : "bg-slate-100 text-body/50"
          }`}
        >
          <HelpCircle className="h-4 w-4" aria-hidden="true" />
        </span>
        <span className="min-w-0 flex-1 font-heading text-base font-semibold text-foreground sm:text-lg">
          {faq.question}
        </span>
        <ChevronDown
          className={`mt-1 h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="border-t border-slate-100 px-5 pb-5 sm:px-6 sm:pb-6">
              <p className="pl-12 leading-relaxed text-body">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServiceFaq({ badge, title, items = [], titleId }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (items.length === 0) return null;

  return (
    <section className="relative pb-20 sm:pb-28" aria-labelledby={titleId}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServiceSectionHeader badge={badge} title={title} titleId={titleId} />

        <div className="mx-auto mt-10 max-w-3xl space-y-3 sm:mt-12">
          {items.map((faq, index) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
