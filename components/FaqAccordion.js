"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What types of virtual assistant can I hire?",
    answer:
      "You can hire professionals across various fields, including IT outsourcing, digital marketing, content writing, web development, ecommerce support, and more.",
  },
  {
    question: "How quickly can I onboard a virtual assistant?",
    answer:
      "Our hiring process is designed to be quick and efficient—you can onboard a skilled virtual professional within just 8 hours.",
  },
  {
    question: "What are the cost benefits of hiring virtual assistant?",
    answer:
      "By hiring virtual staff, you eliminate expenses like office rent, taxes, and equipment costs, helping you save more while maintaining productivity.",
  },
  {
    question: "Do your virtual assistant work across different time zones?",
    answer:
      "Yes, our team is available 24/7, ensuring seamless collaboration and support, no matter where you are.",
  },
  {
    question: "What industries do you cater to?",
    answer:
      "We provide virtual staffing solutions for industries such as IT, real estate, healthcare, retail, and more.",
  },
  {
    question: "How do I get started with hiring a virtual assistant?",
    answer:
      "Simply send us your requirements, and we'll provide a quick response within 1 business day to match you with the right talent.",
  },
];

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

        <span className="min-w-0 flex-1">
          <span className="block font-heading text-base font-semibold text-foreground sm:text-lg">
            {faq.question}
          </span>
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
            <div className="border-t border-slate-100 px-5 pb-5 pt-0 sm:px-6 sm:pb-6">
              <p className="pl-12 leading-relaxed text-body sm:pl-12">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <article className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
      <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
        Frequently Asked Questions
      </h2>

      <div className="mt-8 space-y-3">
        {faqs.map((faq, index) => (
          <FaqItem
            key={faq.question}
            faq={faq}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>
    </article>
  );
}
