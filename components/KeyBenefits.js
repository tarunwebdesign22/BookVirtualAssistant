"use client";

import { motion } from "framer-motion";
import { Trophy, MousePointerClick, Headset } from "lucide-react";
import Badge from "./Badge";

const benefits = [
  {
    icon: Trophy,
    title: "On-Demand Talent, Anytime You Need",
    description:
      "Quickly hire a dedicated and highly skilled remote professional within just 8 hours, ensuring your business stays agile and ahead of the curve.",
  },
  {
    icon: MousePointerClick,
    title: "No Overhead Costs, More Savings",
    description:
      "Eliminate unnecessary expenses such as office rent, taxes, and costly equipment. Enjoy a cost-effective solution that helps maximize your profits.",
  },
  {
    icon: Headset,
    title: "Round-the-Clock Support",
    description:
      "With 24/7 availability, you'll never experience downtime or project delays. Our team is always here to support you whenever you need it.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function BenefitCard({ benefit, index }) {
  const Icon = benefit.icon;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/70 bg-white p-6 shadow-lg shadow-primary/5 transition-shadow duration-300 hover:border-primary/15 hover:shadow-xl hover:shadow-primary/10 sm:p-8"
    >
      {/* Hover gradient wash */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start gap-4">
        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/15 ring-1 ring-primary/10 transition-all duration-300 group-hover:from-primary/15 group-hover:to-accent/20 group-hover:ring-primary/20">
          <Icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1 pt-0.5">
          <span className="font-heading text-xs font-semibold uppercase tracking-wider text-primary/70">
            0{index + 1}
          </span>
          <h3 className="font-heading mt-1 text-lg font-bold leading-snug text-foreground sm:text-xl">
            {benefit.title}
          </h3>
        </div>
      </div>

      <p className="relative mt-5 text-sm leading-relaxed text-body sm:text-base">
        {benefit.description}
      </p>

      {/* Bottom accent line */}
      <div className="relative mt-6 h-0.5 w-0 rounded-full bg-gradient-to-r from-primary-dark via-primary to-accent transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
}

export default function KeyBenefits() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden py-12 sm:py-16 lg:py-20"
      aria-labelledby="benefits-heading"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-hero-mid to-hero-end" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <Badge className="mb-4">Key Benefits</Badge>
          <h2
            id="benefits-heading"
            className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]"
          >
            What Are the{" "}
            <span className="bg-gradient-to-r from-primary-dark via-primary to-accent bg-clip-text text-transparent">
              Key Benefits?
            </span>
          </h2>
          <p className="mt-4 text-lg text-body">
            Three major benefits of having a remote workforce.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
