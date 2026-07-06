"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Building2,
  Cpu,
  Users,
  Leaf,
  Car,
  ArrowUpDown,
  Zap,
  Calendar,
  TrendingUp,
  Globe,
  HeartHandshake,
} from "lucide-react";
import PageHeader from "./PageHeader";
import CTAButton from "./CTAButton";

const noidaStats = [
  { value: "1976", label: "Established as industrial township", icon: Calendar },
  { value: "10,000+", label: "Registered companies (2023)", icon: Building2 },
  { value: "Global", label: "Hub for HCL, Adobe & Infosys", icon: Globe },
];

const workspaceProductivity = [
  {
    icon: Cpu,
    title: "Advanced Technology Solutions",
    description:
      "Our office is equipped with state-of-the-art IT systems, ensuring smooth and efficient operations for all your business needs.",
  },
  {
    icon: Users,
    title: "Open and Collaborative Spaces",
    description:
      "Designed to encourage teamwork, creativity, and productivity, our spacious layouts provide a flexible and inspiring work environment.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Infrastructure",
    description:
      "We prioritize sustainability by incorporating environmentally friendly elements, reflecting our commitment to a greener and more responsible future.",
  },
];

const workspaceComfort = [
  {
    icon: Car,
    title: "Spacious Parking Facilities",
    description:
      "Enjoy easy accessibility with well-planned, spacious parking areas designed to accommodate employees and visitors comfortably.",
  },
  {
    icon: ArrowUpDown,
    title: "Swift and Efficient Elevators",
    description:
      "Move seamlessly and without delays between floors using reliable, high-speed elevators for enhanced convenience.",
  },
  {
    icon: Zap,
    title: "Uninterrupted Power Supply",
    description:
      "Ensure smooth operations and avoid disruptions with a powerful, dependable, and efficient backup energy system in place.",
  },
];

function FeatureCard({ feature, index }) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/10 sm:p-7"
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10" />
      <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/25">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="relative mt-5 font-heading text-lg font-semibold text-foreground">{feature.title}</h3>
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-body sm:text-base">{feature.description}</p>
    </motion.div>
  );
}

function StatCard({ stat, index }) {
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-2xl border border-white/40 bg-white/70 p-6 shadow-lg shadow-primary/5 backdrop-blur-xl sm:p-7"
    >
      <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent/10 blur-2xl" />
      <span className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-accent/15 text-primary">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <p className="relative mt-4 font-heading text-3xl font-bold tracking-tight text-foreground">{stat.value}</p>
      <p className="relative mt-1 text-sm text-body">{stat.label}</p>
    </motion.div>
  );
}

export default function AboutUs() {
  return (
    <>
      <PageHeader
        badge="About Us"
        title="NCR (Noida) — Headquarters"
        subtitle="Logix Cyber Park, Sector 62, Noida"
        description="Situated in the vibrant heart of Noida, we offer the perfect blend of connectivity and opportunity — excellent infrastructure, a thriving business environment, and easy accessibility for collaboration and long-term success."
      />

      <article className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        {/* HQ showcase */}
        <section className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-hero-mid via-white to-hero-end shadow-xl shadow-primary/5">
          <div className="grid lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px]"
            >
              <Image
                src="/images/about-2.webp"
                alt="Book Virtual Assistant headquarters at Logix Cyber Park, Noida"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-hero-mid/80" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-center p-8 sm:p-10 lg:p-12"
            >
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Sector 62, Noida, India
              </div>
              <h2 className="mt-5 font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                Where Excellence Meets Innovation
              </h2>
              <p className="mt-4 leading-relaxed text-body">
                Our headquarters at Logix Cyber Park places us at the center of one of India&apos;s fastest-growing
                business corridors — giving our team and clients access to world-class facilities, talent, and
                connectivity.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <CTAButton href="/contact-us" variant="primary" size="md">
                  Visit Noida HQ
                </CTAButton>
                <CTAButton href="/infrastructure" variant="secondary" size="md">
                  Explore Infrastructure
                </CTAButton>
              </div>
            </motion.div>
          </div>
        </section>

        {/* History of Noida */}
        <section className="mt-16 sm:mt-20">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/15 text-primary">
              <TrendingUp className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">The History of Noida</h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-none leading-relaxed text-body"
          >
            Established in 1976 as an industrial township, Noida was created to ease congestion in Delhi by
            offering a dedicated space for industries. Over the years, it has grown into a major business and
            technology hub, attracting global companies like HCL, Adobe, and Infosys. Today, Noida boasts thriving
            commercial spaces such as DLF IT Park and Logix Cyber Park, alongside premier educational institutions
            like Amity University and Jaypee Institute. With excellent metro and expressway connectivity, Noida
            provides the perfect environment for businesses and professionals.
          </motion.p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {noidaStats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </section>

        {/* Learn More About Us */}
        <section className="mt-16 sm:mt-20">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-100 p-8 sm:p-10 lg:p-14">
            <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-primary/8 blur-[80px]" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-accent/8 blur-[80px]" />

            <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-1.5 text-sm font-medium text-primary">
                  <HeartHandshake className="h-4 w-4" aria-hidden="true" />
                  Our Story
                </div>
                <h2 className="mt-5 font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                  Learn More About Us
                </h2>
                <p className="mt-4 leading-relaxed text-body">
                  At our core, we believe in delivering exceptional remote services that blend expertise with
                  real-world experience. Whether you&apos;re looking to streamline your operations or expand your reach,
                  our dedicated team is here to support your journey.
                </p>
                <p className="mt-4 leading-relaxed text-body">
                  With a focus on reliability and personalized solutions, we ensure that every collaboration is
                  meaningful and results-driven. Over the years, we&apos;ve worked with diverse industries, helping
                  businesses overcome challenges and achieve their goals. Our approach is simple — we listen, adapt,
                  and deliver solutions that truly make a difference.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/50 shadow-xl shadow-primary/10"
              >
                <Image
                  src="/images/a-sleek-ai-powered-virtual-assistant-hologram-proj (1)-min.png"
                  alt="Book Virtual Assistant team delivering remote services worldwide"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Workspace at a Glance */}
        <section className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
              Our Workspace at a Glance
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              Explore our modern workspace, featuring top-notch facilities, innovative technology, and thoughtfully
              designed collaborative areas to boost efficiency and inspire creativity.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
              A Smart and Productive Work Environment
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {workspaceProductivity.map((feature, index) => (
                <FeatureCard key={feature.title} feature={feature} index={index} />
              ))}
            </div>
          </div>

          <div className="mt-14 sm:mt-16">
            <h3 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
              Enhancing Comfort and Accessibility
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {workspaceComfort.map((feature, index) => (
                <FeatureCard key={feature.title} feature={feature} index={index} />
              ))}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-12 max-w-3xl text-center leading-relaxed text-body"
          >
            Explore our state-of-the-art facilities, designed to inspire innovation and support seamless operations.
            From advanced infrastructure to a focus on employee and visitor comfort, we ensure an unmatched
            experience. Visit our headquarters to witness how we drive excellence every day.
          </motion.p>
        </section>

        {/* CTA banner */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-primary-dark via-primary to-secondary p-8 text-center sm:mt-20 sm:p-12"
        >
          <div className="pointer-events-none absolute -left-16 top-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative">
            <Building2 className="mx-auto h-10 w-10 text-white/80" aria-hidden="true" />
            <h2 className="mt-4 font-heading text-2xl font-semibold text-white sm:text-3xl">
              Ready to See Our HQ in Action?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/80">
              Let&apos;s work together to turn ideas into reality. Schedule a visit or connect with our team to learn
              how we can support your business.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <CTAButton href="/contact-us" variant="secondary" size="lg">
                Visit Noida HQ
              </CTAButton>
              <CTAButton
                href="/contact-us"
                variant="primary"
                size="lg"
              >
                Hire Dedicated Team
              </CTAButton>
            </div>
          </div>
        </motion.section>
      </article>
    </>
  );
}
