"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Clock3,
  Globe2,
  Users,
  Handshake,
  Sparkles,
  BadgeDollarSign,
} from "lucide-react";
import Badge from "../Badge";

const highlights = [
  { label: "Get Support When You Need It", icon: Clock3 },
  { label: "Work Across Time Zones with Ease", icon: Globe2 },
  { label: "Hassle-Free Teamwork, Anytime", icon: Users },
  { label: "Collaboration That Feels Close", icon: Handshake },
  { label: "Solutions Designed Just for You", icon: Sparkles },
  { label: "Quality Support Without the High Costs", icon: BadgeDollarSign },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden py-14 sm:py-18 lg:py-24"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-[#f4f8ff] to-white" />
      <div className="pointer-events-none absolute left-10 top-10 h-60 w-60 rounded-full bg-primary/10 blur-[105px]" />
      <div className="pointer-events-none absolute -right-6 bottom-8 h-72 w-72 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-8 max-w-3xl text-center sm:mb-12"
        >
          <Badge className="mb-4">Why Choose Us</Badge>
          <h2
            id="why-choose-us-heading"
            className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]"
          >
            Outsourced Expertise,{" "}
            <span className="bg-gradient-to-r from-primary-dark via-primary to-accent bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
        </motion.div>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-lg border border-white/80 bg-white p-2.5 shadow-2xl shadow-primary/12"
            >
              <div className="relative aspect-[16/11] overflow-hidden rounded-lg">
                <Image
                  src="/images/a-sleek-ai-powered-virtual-assistant-hologram-proj (1)-min.png"
                  alt="AI-powered virtual assistant setup"
                  fill
                  sizes="(min-width: 1024px) 43vw, 92vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/35 via-transparent to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2 }}
              animate={{ y: [0, 7, 0] }}
              className="absolute -bottom-8 -right-3 w-[44%] overflow-hidden rounded-lg border-4 border-white bg-white shadow-xl shadow-primary/15"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/about-2.webp"
                  alt="Team member collaborating remotely"
                  fill
                  sizes="(min-width: 1024px) 19vw, 38vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.05]"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-lg leading-relaxed text-body">
              The skilled professionals you hire through Book Virtual Assistant are just a click
              away. We bridge distance and time zones so collaboration feels as efficient as having
              a team member right next to you.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.05 * index }}
                    className="group flex items-center gap-2.5"
                  >
                    <Icon
                      className="h-4 w-4 shrink-0 text-primary transition-transform duration-300 group-hover:scale-110"
                      aria-hidden="true"
                    />
                    <p className="text-sm font-medium leading-snug text-foreground sm:text-[0.95rem]">
                      {item.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
