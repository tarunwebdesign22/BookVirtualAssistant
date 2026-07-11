"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  Clock,
  PiggyBank,
  UserCheck,
  Users,
  Laptop,
  Phone,
  AppWindow,
  Building2,
  FileCheck,
  Eye,
  Headphones,
  Shield,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
} from "lucide-react";
import PageHeader from "./PageHeader";
import CTAButton from "./CTAButton";

const pillars = [
  {
    icon: Award,
    title: "Skilled Professionals",
    description:
      "Our virtual assistants are highly trained and experienced in handling a variety of tasks, from administrative support to specialized services, helping businesses run smoothly.",
    accent: "from-primary/15 to-primary/5",
  },
  {
    icon: Clock,
    title: "Flexible Support",
    description:
      "We provide tailored support based on your needs — whether you require a part-time assistant or a full-time team, our services are designed to fit your schedule and goals.",
    accent: "from-accent/15 to-accent/5",
  },
  {
    icon: PiggyBank,
    title: "Cost-Effective Solutions",
    description:
      "Hiring a virtual assistant saves you time and money by reducing overhead costs while ensuring top-quality work and efficient task management.",
    accent: "from-secondary/15 to-secondary/5",
  },
];

const dedicatedEmployeePoints = [
  "Assign tasks directly, and they will be completed as per your guidelines.",
  "Monitor progress and provide training remotely as needed.",
  "Stay connected through our advanced communication tools.",
  "Receive regular updates and ask questions anytime.",
];

const teamModelPoints = [
  { label: "Full Control", text: "Unlike traditional outsourcing, you stay in charge of project management and receive regular updates." },
  { label: "Direct Access", text: "Connect with your team and the Technical Team Leader anytime for effortless communication." },
];

const vaRoles = [
  {
    icon: Laptop,
    title: "Hardware and Tools",
    description:
      "Your assistant will have access to a modern laptop or PC, as well as essential peripherals like a printer, scanner, and high-speed internet to ensure smooth operations.",
  },
  {
    icon: Phone,
    title: "Local Communication",
    description:
      "We provide your assistant with a local phone number to handle calls seamlessly, allowing them to connect with your clients or customers as needed.",
  },
  {
    icon: AppWindow,
    title: "Software Proficiency",
    description:
      "Our assistants are skilled in using the most commonly required software, ensuring they meet your specific needs.",
  },
  {
    icon: Building2,
    title: "Dedicated Workspace",
    description:
      "We ensure your assistant has a dedicated and professional workspace, equipped to deliver quality results efficiently.",
  },
  {
    icon: FileCheck,
    title: "Employment and Compliance",
    description:
      "While your assistant follows your instructions as if they were your employee, we handle all employment-related taxes, insurance, and compliance matters.",
  },
  {
    icon: Eye,
    title: "Supervised Environment",
    description:
      "Our management team supervises each assistant, ensuring they work efficiently and professionally to meet your expectations.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description:
      "Our customer support team is available round the clock to address any concerns or assist with queries related to your virtual assistant.",
  },
  {
    icon: Shield,
    title: "NDA and Work Ownership",
    description:
      "Your confidentiality matters to us. All work completed by your assistant is 100% yours, with strict adherence to non-disclosure agreements.",
  },
];

function PillarCard({ pillar, index }) {
  const Icon = pillar.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/10 sm:p-8"
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${pillar.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />
      <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/25">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="relative mt-5 font-heading text-xl font-semibold text-foreground">{pillar.title}</h3>
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-body sm:text-base">{pillar.description}</p>
    </motion.div>
  );
}

function ModelCard({ model, index }) {
  const Icon = model.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 sm:p-8 lg:p-10 ${
        model.featured
          ? "border-primary/20 bg-gradient-to-br from-primary/[0.06] via-white to-accent/[0.04] shadow-xl shadow-primary/10"
          : "border-slate-200/80 bg-white shadow-lg shadow-slate-200/50"
      }`}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/5 blur-3xl transition-all group-hover:bg-primary/10" />

      <div className="relative flex items-start justify-between gap-4">
        <span
          className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg ${
            model.featured
              ? "bg-gradient-to-br from-primary to-primary-dark text-white shadow-primary/30"
              : "bg-gradient-to-br from-secondary/15 to-accent/15 text-primary"
          }`}
        >
          <Icon className="h-7 w-7" aria-hidden="true" />
        </span>
        {model.featured && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Popular
          </span>
        )}
      </div>

      <h3 className="relative mt-6 font-heading text-2xl font-bold text-foreground sm:text-3xl">{model.title}</h3>
      <p className="relative mt-4 leading-relaxed text-body">{model.description}</p>

      {model.subtitle && (
        <p className="relative mt-4 text-sm font-medium text-foreground">{model.subtitle}</p>
      )}

      <ul className="relative mt-6 flex-1 space-y-3" role="list">
        {model.points.map((point) => (
          <li key={typeof point === "string" ? point : point.label} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
            {typeof point === "string" ? (
              <span className="text-sm leading-relaxed text-body sm:text-base">{point}</span>
            ) : (
              <span className="text-sm leading-relaxed text-body sm:text-base">
                <strong className="font-semibold text-foreground">{point.label}:</strong> {point.text}
              </span>
            )}
          </li>
        ))}
      </ul>

      <div className="relative mt-4 rounded-xl border border-primary/10 bg-primary/[0.03] p-4">
        <p className="text-sm font-medium text-foreground">
          <span className="text-primary">Why it&apos;s great:</span> {model.whyGreat}
        </p>
      </div>

      <div className="relative mt-8">
        <CTAButton href="/contact-us" variant="primary" size="lg" className="w-full">
          {model.cta}
          <ArrowRight className="ml-1 inline h-4 w-4" aria-hidden="true" />
        </CTAButton>
      </div>
    </motion.div>
  );
}

function RoleCard({ role, index }) {
  const Icon = role.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-50/80 p-5 transition-all duration-300 hover:border-primary/20 hover:bg-white hover:shadow-md hover:shadow-primary/5 sm:p-6"
    >
      <div className="flex items-start gap-4">
        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm ring-1 ring-slate-200/80 transition-all group-hover:bg-primary group-hover:text-white group-hover:ring-primary/20">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-heading text-base font-semibold text-foreground sm:text-lg">{role.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-body">{role.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

const models = [
  {
    icon: UserCheck,
    title: "The Dedicated Employee Model",
    description:
      "With BVA, you can hire a dedicated virtual assistant in India, just like having an in-house employee — without the extra costs.",
    subtitle:
      "Our Dedicated Employee Model offers direct communication and collaboration, ensuring your assistant follows your instructions and meets your deadlines. Here's how it works:",
    points: dedicatedEmployeePoints,
    whyGreat:
      "Communication is smooth, collaboration is easy, and scaling up is quick. You get all the perks of a full-time employee without the hassle of local regulations, infrastructure, or hiring processes.",
    cta: "Hire a Dedicated Employee",
    featured: true,
  },
  {
    icon: Users,
    title: "The Team Model",
    description:
      "BVA's Team Model is ideal for businesses looking to outsource IT and software development, including PHP, .NET, and web design.",
    subtitle:
      "This model offers a structured team with a Technical Team Leader (TTL) overseeing the work, supported by skilled professionals. You can scale your team as needed, simply by increasing the hours of service.",
    points: teamModelPoints,
    whyGreat:
      "Enjoy the flexibility of having a dedicated team without worrying about resource availability or project delays. Whether you need a single developer or an entire team, we've got you covered.",
    cta: "Hire Team Model",
    featured: false,
  },
];

export default function HowToWorkWithUs() {
  return (
    <>
      <PageHeader
        badge="Our Process"
        title="How to Work With Us"
        subtitle="Why Choose Our Unique Outsourcing Model?"
        description="Outsource any office task in any field or profession — with full-time, dedicated virtual assistants working exclusively for you from our well-equipped office in India."
      />

      <article className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        {/* Intro */}
        <section className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-hero-mid via-white to-hero-end p-6 sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative mx-auto max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/15 text-primary">
                <Layers className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                Outsource Any Office Task in Any Field
              </h2>
            </div>
            <p className="mt-5 leading-relaxed text-body sm:text-lg">
              Book Virtual Assistant helps businesses, especially small and medium-sized ones, outsource a wide
              range of office tasks, no matter the field or profession. We connect you with full-time, dedicated
              virtual assistants who work exclusively for you from our well-equipped office in India.
            </p>
            <p className="mt-4 leading-relaxed text-body">
              Our system enables business owners to easily delegate hard-to-outsource work. You can now hire a
              remote team to handle all typical workplace responsibilities and specialized technical projects —
              from software development and accounting to SEO, data entry, content creation, and recruitment.
            </p>
          </div>
        </section>

        {/* Pillars */}
        <section className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
              Smart Solutions for Your Business Growth
            </h2>
            <p className="mt-3 text-body">
              Outsource tasks to virtual assistants with the flexibility, skill, and value your business deserves.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
            {pillars.map((pillar, index) => (
              <PillarCard key={pillar.title} pillar={pillar} index={index} />
            ))}
          </div>
        </section>

        {/* Models */}
        <section className="mt-16 sm:mt-24">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              What We Offer You
            </span>
            <h2 className="mt-4 font-heading text-2xl font-semibold text-foreground sm:text-3xl lg:text-4xl">
              Choose the Model That Fits Your Needs
            </h2>
            <p className="mt-3 max-w-2xl text-body">
              Whether you need a single dedicated assistant or a full development team, we have a model built for you.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {models.map((model, index) => (
              <ModelCard key={model.title} model={model} index={index} />
            ))}
          </div>
        </section>

        {/* VA Roles */}
        <section className="mt-16 sm:mt-24">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/15 text-primary">
              <Shield className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                Role of Your Virtual Assistant
              </h2>
              <p className="mt-1 text-body">
                Everything set up so your assistant can simplify your work and boost productivity.
              </p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {vaRoles.map((role, index) => (
              <RoleCard key={role.title} role={role} index={index} />
            ))}
          </div>
        </section>

        {/* Summary CTA */}
        <section className="mt-16 sm:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-16"
          >
            <Image
              src="/images/bgcta.webp"
              alt=""
              fill
              sizes="(min-width: 1280px) 80vw, 100vw"
              className="object-cover"
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute inset-0 bg-black/65" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                We Handle the Behind-the-Scenes
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
                We take care of all the behind-the-scenes stuff that comes with outsourcing and hiring, so you
                and your employee can stay focused on what really matters — getting the job done.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <CTAButton href="/contact-us" variant="secondary" size="lg">
                  Get Started Today
                </CTAButton>
                <CTAButton
                  href="/infrastructure"
                  variant="secondary"
                  size="lg"
                  className="!border-white/30 !bg-white/10 !text-white hover:!bg-white/20"
                >
                  Explore Our Infrastructure
                </CTAButton>
              </div>
            </div>
          </motion.div>
        </section>
      </article>
    </>
  );
}
