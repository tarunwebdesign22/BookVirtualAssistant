"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Megaphone,
  Palette,
  Keyboard,
  HeartPulse,
  FileText,
  GraduationCap,
  BookOpen,
  Languages,
  Globe2,
  TrendingUp,
  UserCheck,
  Clock,
  Users,
  Headphones,
  Zap,
  PiggyBank,
  ShieldCheck,
  Award,
  MessageSquare,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import PageHeader from "./PageHeader";
import ContactForm from "./ContactForm";
import CTAButton from "./CTAButton";

const domains = [
  {
    icon: Code2,
    title: "IT Outsourcing",
    description:
      "We provide a wide range of IT solutions, including website building and custom software development.",
    accent: "from-primary/15 to-primary/5",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps Development",
    description:
      "Obtain personalized programs for all operating systems, including iOS, Android, and Windows. Our developers have years of expertise in creating games and applications.",
    accent: "from-accent/15 to-accent/5",
  },
  {
    icon: Megaphone,
    title: "Sales and Digital Marketing",
    description:
      "Our Google AdWords-certified digital marketing specialists have a track record of increasing your return on investment.",
    accent: "from-secondary/15 to-secondary/5",
  },
  {
    icon: Palette,
    title: "Graphics and Web Designing",
    description:
      "Our graphic designers are knowledgeable about the newest technology, and they can create everything from eye-catching logos to unique site designs.",
    accent: "from-violet-500/15 to-primary/5",
  },
  {
    icon: Keyboard,
    title: "Data Entry",
    description:
      "Our team of data entry professionals will take this time-consuming chore off your hands and help you make sense of large volumes of data.",
    accent: "from-primary/15 to-accent/5",
  },
  {
    icon: HeartPulse,
    title: "Medical Processes",
    description:
      "We offer dependable assistance for medical procedures, which includes precise data management, billing, and documentation, in order to guarantee efficiency and compliance with industry standards.",
    accent: "from-rose-500/15 to-primary/5",
  },
  {
    icon: FileText,
    title: "Content Writing",
    description:
      "Our staff of writers is highly skilled and experienced, and they can produce captivating material in any genre.",
    accent: "from-accent/15 to-secondary/5",
  },
];

const indiaAdvantages = [
  {
    icon: GraduationCap,
    title: "A highly educated workforce",
    description:
      "India boasts the largest pool of skilled, employable professionals, particularly in the age group of 25–35.",
  },
  {
    icon: BookOpen,
    title: "Diverse academic expertise",
    description:
      "With over 700 universities, India produces more than 5 million graduates every year across various fields, including IT, engineering, law, finance, creative arts, and architecture.",
  },
  {
    icon: Languages,
    title: "A strong English-speaking population",
    description:
      "India is home to the world's second-largest group of English speakers, ensuring easy communication.",
  },
  {
    icon: Globe2,
    title: "Time zone advantage",
    description:
      "India's time zone enables round-the-clock operations and ensures quicker project turnarounds for global clients.",
  },
];

const whyBvaBenefits = [
  { icon: TrendingUp, label: "Enhance Productivity, Achieve More" },
  { icon: UserCheck, label: "No Hiring Hassles" },
  { icon: Clock, label: "Flexible Support" },
  { icon: Users, label: "Dedicated Assistance" },
  { icon: Headphones, label: "Available Around the Clock" },
  { icon: Zap, label: "Instant Access to Skills" },
  { icon: PiggyBank, label: "Cost-Effective Solutions" },
  { icon: ShieldCheck, label: "ISO 27001:2013 Certified" },
  { icon: Award, label: "Trusted by Businesses Worldwide" },
];

function DomainCard({ domain, index }) {
  const Icon = domain.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/10 sm:p-7"
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${domain.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />
      <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/25">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="relative mt-5 font-heading text-lg font-semibold text-foreground">{domain.title}</h3>
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-body sm:text-base">{domain.description}</p>
    </motion.div>
  );
}

function AdvantageCard({ advantage, index }) {
  const Icon = advantage.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="flex gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 sm:p-6"
    >
      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/15 text-primary">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <h3 className="font-heading text-base font-semibold text-foreground sm:text-lg">{advantage.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">{advantage.description}</p>
      </div>
    </motion.div>
  );
}

export default function OutsourceToIndia() {
  return (
    <>
      <PageHeader
        badge="Outsourcing to India"
        title="Maximize Your Business Potential with Outsourcing"
        description="Discover the benefits of outsourcing to India and save significantly on hiring costs. Get access to a wide range of skilled professionals across various industries, serving clients globally."
      />

      {/* Hero form */}
      <section className="relative -mt-8 pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/25 via-accent/15 to-secondary/20 p-px shadow-2xl shadow-primary/10"
          >
            <div className="overflow-hidden rounded-lg bg-white">
              <div className="border-b border-slate-100 bg-gradient-to-r from-hero-mid/80 via-white to-hero-end/60 px-6 py-6 sm:px-8 sm:py-7">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/30">
                    <MessageSquare className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
                      Share Your Requirement
                    </h2>
                    <p className="mt-0.5 text-sm text-body">Free consultation — no commitment required</p>
                  </div>
                </div>
              </div>
              <div className="px-6 py-8 sm:px-8 sm:py-10">
                <ContactForm idPrefix="outsource" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <article className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        {/* Domains */}
        <section id="outsourcing" aria-labelledby="domains-heading">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="domains-heading"
              className="font-heading text-2xl font-semibold text-foreground sm:text-3xl lg:text-4xl"
            >
              Hire Employees Across All Domains
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {domains.map((domain, index) => (
              <DomainCard key={domain.title} domain={domain} index={index} />
            ))}
          </div>
        </section>

        {/* India advantages */}
        <section className="mt-16 sm:mt-24" aria-labelledby="india-heading">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-hero-mid via-white to-hero-end p-6 sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/15 text-primary">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2
                  id="india-heading"
                  className="font-heading text-2xl font-semibold text-foreground sm:text-3xl"
                >
                  India – The Preferred Destination for Outsourcing
                </h2>
              </div>
              <p className="mt-5 max-w-4xl leading-relaxed text-body sm:text-lg">
                India has been a top choice for outsourcing for more than twenty years despite growing competition
                from other nations. Companies all around depend on India for its superior skill set and reasonably
                priced solutions. Interestingly, about half of the Fortune 500 corporations outsource their IT and
                software development to India.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
                {indiaAdvantages.map((advantage, index) => (
                  <AdvantageCard key={advantage.title} advantage={advantage} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why BVA */}
        <section className="mt-16 sm:mt-24" aria-labelledby="why-bva-heading">
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <h2
                id="why-bva-heading"
                className="font-heading text-2xl font-semibold text-foreground sm:text-3xl"
              >
                Why Book a Virtual Assistant?
              </h2>
              <p className="mt-3 max-w-xl text-body">
                Enhance productivity, cut hiring overhead, and get dedicated support from certified professionals.
              </p>
              <div className="mt-6 grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
                {whyBvaBenefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={benefit.label}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.03 * index }}
                      className="flex items-center gap-2.5 rounded-xl bg-hero-mid/60 px-3 py-2.5 transition-colors hover:bg-hero-mid"
                    >
                      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-accent/15 text-primary">
                        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      <p className="text-xs font-medium leading-snug text-foreground sm:text-sm">
                        {benefit.label}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 lg:pt-2"
            >
              <div className="relative aspect-[16/11] overflow-hidden rounded-2xl">
                <Image
                  src="/images/a-sleek-ai-powered-virtual-assistant-hologram-proj (1)-min.png"
                  alt="Virtual assistant technology supporting global businesses"
                  fill
                  sizes="(min-width: 1024px) 38vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 sm:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-dark via-primary to-secondary px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-16"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_50%)]" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Outsource to Experts in India
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
                Partner with us and become part of a growing network of businesses that have transformed their
                operations through our reliable outsourcing services.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <CTAButton href="/contact-us" variant="secondary" size="lg">
                  Get Started Today
                </CTAButton>
                <CTAButton
                  href="/how-to-work-with-us"
                  variant="secondary"
                  size="lg"
                  className="!border-white/30 !bg-white/10 !text-white hover:!bg-white/20"
                >
                  How to Work With Us
                </CTAButton>
              </div>
              <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/75" role="list">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-white/90" aria-hidden="true" />
                  ISO 27001:2013 Certified
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-white/90" aria-hidden="true" />
                  300+ Businesses Worldwide
                </li>
              </ul>
            </div>
          </motion.div>
        </section>
      </article>
    </>
  );
}
