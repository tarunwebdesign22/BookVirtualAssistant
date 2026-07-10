"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, CalendarDays, Clock, Check, ArrowRight, Star } from "lucide-react";
import ServiceSectionHeader from "./ServiceSectionHeader";
import { containerVariants, itemVariants } from "./animations";

const planIcons = {
  "Full-time": Briefcase,
  "Part-time": CalendarDays,
  Hourly: Clock,
};

function PlanCard({ plan, index }) {
  const Icon = planIcons[plan.name] || Briefcase;
  const isPopular = plan.popular;

  return (
    <motion.article
      variants={itemVariants}
      className={`group relative flex h-full flex-col ${
        isPopular ? "lg:col-span-1 lg:row-span-1" : ""
      }`}
    >
      {isPopular ? (
        <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-primary-dark via-primary to-accent p-[1px] shadow-2xl shadow-primary/25 lg:scale-[1.06]">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative flex h-full flex-col rounded-lg bg-gradient-to-br from-primary-dark/95 via-primary/95 to-primary p-7 sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                <Star className="h-3 w-3 fill-amber-300 text-amber-300" aria-hidden="true" />
                Most Popular
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/20 backdrop-blur-sm">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-white/70">Engagement</p>
                <h3 className="font-heading text-2xl font-bold text-white">{plan.name}</h3>
              </div>
            </div>

            <div className="my-6 h-px bg-white/15" />

            <p className="text-sm font-semibold text-white/90">Features Include :</p>
            <ul className="mt-4 flex-1 space-y-3.5">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-white/90">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                    <Check className="h-3 w-3 text-white" aria-hidden="true" />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href={plan.href || "/contact-us"}
              className="group/btn mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-lg transition-all hover:bg-white/95 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              View Price
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      ) : (
        <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10 sm:p-8">
          <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 blur-3xl transition-all group-hover:bg-primary/10" />

          <div className="relative flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary ring-1 ring-primary/10 transition-all group-hover:from-primary/15 group-hover:to-accent/15">
              <Icon className="h-7 w-7" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-primary/60">Engagement</p>
              <h3 className="font-heading text-2xl font-bold text-foreground">{plan.name}</h3>
            </div>
          </div>

          <div className="relative my-6 h-px bg-slate-100" />

          <p className="relative text-sm font-semibold text-foreground">Features Include :</p>
          <ul className="relative mt-4 flex-1 space-y-3.5">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-body">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-3 w-3 text-primary" aria-hidden="true" />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Link
            href={plan.href || "/contact-us"}
            className="group/btn relative mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-6 py-3.5 text-sm font-semibold text-primary transition-all hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            View Price
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      )}
    </motion.article>
  );
}

export default function ServicePricingPlans({ badge, title, plans = [], titleId }) {
  if (plans.length === 0) return null;

  const popularIndex = plans.findIndex((p) => p.popular);
  const orderedPlans =
    popularIndex > -1
      ? [
          ...plans.filter((_, i) => i !== popularIndex).slice(0, 1),
          plans[popularIndex],
          ...plans.filter((_, i) => i !== popularIndex).slice(1),
        ]
      : plans;

  return (
    <section
      className="relative overflow-hidden py-12 sm:py-16 lg:py-24"
      aria-labelledby={titleId}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-hero-end via-white to-hero-mid" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServiceSectionHeader badge={badge} title={title} titleId={titleId} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid items-center gap-6 sm:mt-14 lg:grid-cols-3 lg:gap-5 xl:gap-8"
        >
          {orderedPlans.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
