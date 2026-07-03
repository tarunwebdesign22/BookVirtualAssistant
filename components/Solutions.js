"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeDollarSign,
  ChartNoAxesCombined,
  ClipboardCheck,
  Mail,
  Megaphone,
  MonitorSmartphone,
  NotebookPen,
  Pill,
  ShoppingBag,
  Store,
  Users,
  Database,
} from "lucide-react";
import Badge from "./Badge";

const solutions = [
  { title: "Google Ads", icon: Megaphone, tone: "from-amber-100 to-orange-100 text-amber-700" },
  { title: "Meta Ads", icon: BadgeDollarSign, tone: "from-lime-100 to-yellow-100 text-lime-700" },
  {
    title: "Digital Marketing",
    icon: ChartNoAxesCombined,
    tone: "from-emerald-100 to-teal-100 text-emerald-700",
  },
  { title: "Email Marketing", icon: Mail, tone: "from-violet-100 to-purple-100 text-violet-700" },
  { title: "Social Media", icon: Users, tone: "from-rose-100 to-pink-100 text-rose-700" },
  { title: "Lead Generation", icon: ClipboardCheck, tone: "from-yellow-100 to-amber-100 text-yellow-700" },
  { title: "Amazon Experts", icon: ShoppingBag, tone: "from-orange-100 to-amber-100 text-orange-700" },
  { title: "Walmart Experts", icon: Store, tone: "from-zinc-100 to-stone-100 text-zinc-700" },
  { title: "Shopify Developers", icon: Store, tone: "from-amber-100 to-yellow-100 text-amber-700" },
  { title: "WordPress Developers", icon: NotebookPen, tone: "from-slate-100 to-zinc-100 text-slate-700" },
  {
    title: "Mobile App Development",
    icon: MonitorSmartphone,
    tone: "from-sky-100 to-blue-100 text-sky-700",
  },
  { title: "Data Entry", icon: Database, tone: "from-green-100 to-lime-100 text-green-700" },
  { title: "Medical Processes", icon: Pill, tone: "from-amber-100 to-orange-100 text-amber-700" },
  { title: "Public Relations", icon: Users, tone: "from-purple-100 to-violet-100 text-purple-700" },
  { title: "Real Estate", icon: Users, tone: "from-blue-100 to-sky-100 text-blue-700" },
  { title: "Power BI", icon: ChartNoAxesCombined, tone: "from-rose-100 to-pink-100 text-rose-700" },
];

function SolutionCard({ item, index }) {
  const Icon = item.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.35, delay: 0.025 * index }}
      className={`group rounded-2xl border border-white/70 bg-gradient-to-br p-5 shadow-md shadow-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${item.tone}`}
    >
      <Icon className="h-7 w-7" aria-hidden="true" />
      <h3 className="font-heading mt-5 text-lg font-semibold text-foreground">{item.title}</h3>
    </motion.article>
  );
}

export default function Solutions() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-12 sm:py-16 lg:py-20"
      aria-labelledby="solutions-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-hero-mid/50 to-white" />
      <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-primary/7 blur-[95px]" />
      <div className="pointer-events-none absolute -right-16 bottom-1/4 h-64 w-64 rounded-full bg-accent/10 blur-[90px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge className="mb-4">Solutions</Badge>
          <h2
            id="solutions-heading"
            className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]"
          >
            Your All-in-One{" "}
            <span className="bg-gradient-to-r from-primary-dark via-primary to-accent bg-clip-text text-transparent">
              Virtual Staffing Solution
            </span>
          </h2>
          <p className="mt-4 text-lg text-body">
            Easily hire top remote talent across any industry with confidence.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white shadow-lg shadow-primary/10 sm:col-span-2"
          >
            <div className="relative h-full min-h-44">
              <Image
                src="/images/a-sleek-ai-powered-virtual-assistant-hologram-proj (1)-min.png"
                alt="Virtual staffing solutions"
                fill
                sizes="(min-width: 1024px) 48vw, 95vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="font-heading text-xl font-semibold text-white sm:text-2xl">
                  Built for Growth Teams
                </p>
                <p className="mt-2 text-sm text-white/90 sm:text-base">
                  One trusted partner for marketing, operations, development, and support.
                </p>
              </div>
            </div>
          </motion.article>

          {solutions.map((item, index) => (
            <SolutionCard key={item.title} item={item} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
