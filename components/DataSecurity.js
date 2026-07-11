"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Shield,
  ShieldCheck,
  Lock,
  Usb,
  KeyRound,
  Bell,
  BookOpen,
  Award,
  Zap,
  Layers,
  Network,
  MonitorSmartphone,
  Bug,
  Flame,
  GraduationCap,
  TrendingUp,
  Headphones,
  Quote,
  ArrowRight,
  CheckCircle2,
  Server,
} from "lucide-react";
import PageHeader from "./PageHeader";
import CTAButton from "./CTAButton";

const securityPillars = [
  {
    icon: Usb,
    title: "No External Storage Devices",
    description:
      "Your data stays where it belongs—secure within our systems. We ensure no unauthorized USBs or drives compromise your valuable information.",
    accent: "from-violet-500/20 to-primary/10",
  },
  {
    icon: KeyRound,
    title: "Strict Access Controls",
    description:
      "Only the right people have access to the right data. Our multi-layered security measures keep unauthorized users at bay.",
    accent: "from-primary/20 to-accent/10",
  },
  {
    icon: Bell,
    title: "Continuous Monitoring & Alerts",
    description:
      "Stay informed with real-time updates. We monitor your data 24/7 to detect and prevent potential risks before they become threats.",
    accent: "from-accent/20 to-secondary/10",
  },
  {
    icon: BookOpen,
    title: "User-Friendly Security Measures",
    description:
      "We make security simple. Our easy-to-follow guidelines empower you to stay compliant without the hassle.",
    accent: "from-secondary/20 to-primary/10",
  },
];

const commitments = [
  {
    icon: Award,
    title: "Emphasizing Compliance and Certification",
    description:
      "Data security is our top priority. As an Indian Software Industry member, we adhere to the highest regulatory standards. Our ISO 27001:2013 certification ensures robust data security measures—including implementation, maintenance, and continuous improvement.",
    highlight: "ISO 27001:2013 Certified",
  },
  {
    icon: Zap,
    title: "Proactive Measures & Quick Response",
    description:
      "Your data is safe with us. We have implemented stringent security measures to protect your information. Even in the unlikely event of a breach, we are equipped to handle it swiftly and effectively, in accordance with the latest CERT-in guidelines—ensuring minimal damage and rapid resolution.",
    highlight: "CERT-in Compliant",
  },
  {
    icon: Layers,
    title: "Combining Both Approaches",
    description:
      "We take data security seriously. As a responsible member of the Indian Software Industry, we are committed to protecting your data. Our ISO 27001:2013 certification demonstrates our commitment, and in the event of a breach, we have the expertise and resources to respond quickly and effectively.",
    highlight: "Defense in Depth",
  },
];

const classicSecurity = [
  {
    icon: Server,
    title: "Certified Expert Team",
    description: "A team of experts certified in Cisco, Linux, and Microsoft for support.",
  },
  {
    icon: MonitorSmartphone,
    title: "Easy Remote Access",
    description: "Easy remote access to employee systems whenever you need it.",
  },
  {
    icon: Bug,
    title: "Antivirus & Anti-Spam",
    description: "All systems are protected with up-to-date antivirus and anti-spam software.",
  },
  {
    icon: Flame,
    title: "Firewall Protection",
    description: "All systems secured by firewall network security for robust protection.",
  },
];

const internalFortification = [
  {
    icon: GraduationCap,
    title: "Informed Employees",
    description:
      "We empower our team with ongoing training and awareness programs to foster a strong security culture. Regular refreshers and simulated scenarios ensure everyone understands their role in safeguarding our data.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description:
      "We actively seek out and address potential vulnerabilities through rigorous security assessments and penetration testing. This proactive approach allows us to strengthen our defenses and stay ahead of evolving threats.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Our expert IT team provides round-the-clock support to address any security concerns promptly and effectively. We are committed to minimizing downtime and ensuring business continuity in the face of any security challenges.",
  },
];

function PillarCard({ pillar, index }) {
  const Icon = pillar.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/10 sm:p-7"
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${pillar.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />
      <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/25">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="relative mt-5 font-heading text-lg font-semibold text-foreground">{pillar.title}</h3>
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-body sm:text-base">{pillar.description}</p>
    </motion.div>
  );
}

function CommitmentCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 sm:p-8"
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/20" />
      <div className="relative flex flex-wrap items-start justify-between gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-white ring-1 ring-white/10">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
          {item.highlight}
        </span>
      </div>
      <h3 className="relative mt-5 font-heading text-xl font-semibold text-white">{item.title}</h3>
      <p className="relative mt-3 leading-relaxed text-white/70">{item.description}</p>
    </motion.div>
  );
}

function ClassicCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group flex items-start gap-4 rounded-2xl border border-slate-200/70 bg-slate-50/80 p-5 transition-all duration-300 hover:border-primary/20 hover:bg-white hover:shadow-md hover:shadow-primary/5 sm:p-6"
    >
      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm ring-1 ring-slate-200/80 transition-all group-hover:bg-primary group-hover:text-white group-hover:ring-primary/20">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <h3 className="font-heading text-base font-semibold text-foreground sm:text-lg">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-body">{item.description}</p>
      </div>
    </motion.div>
  );
}

function FortifyCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-primary/5 sm:p-8"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/15 text-primary">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">{item.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-body sm:text-base">{item.description}</p>
    </motion.div>
  );
}

export default function DataSecurity() {
  return (
    <>
      <PageHeader
        badge="Data Security"
        title="Unbreakable Data Protection"
        subtitle="For when privacy is your top priority"
        description="That's why our trusted policies are designed to keep your information safe and your mind at ease."
      >
        <div className="mt-8">
          <CTAButton href="/contact-us" variant="primary" size="lg">
            Start Your Secure Journey
            <ArrowRight className="ml-1 inline h-4 w-4" aria-hidden="true" />
          </CTAButton>
        </div>
      </PageHeader>

      <article className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        {/* Trust banner */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[0.04] via-white to-accent/[0.04] p-6 sm:p-10"
        >
          <div className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
            <span className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-xl shadow-primary/30">
              <ShieldCheck className="h-10 w-10" aria-hidden="true" />
            </span>
            <div className="flex-1">
              <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                We understand—data security is more important than ever!
              </h2>
              <p className="mt-3 max-w-3xl text-body lg:mx-0">
                In a world of evolving cyber threats, protecting your business information isn&apos;t optional—it&apos;s
                essential. We&apos;ve built a multi-layered security framework so you can focus on growth with complete
                peace of mind.
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-col items-center gap-2 rounded-2xl border border-primary/20 bg-white px-6 py-4 shadow-sm">
              <Lock className="h-8 w-8 text-primary" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">ISO 27001:2013</span>
              <span className="text-xs text-body">Certified</span>
            </div>
          </div>
        </motion.section>

        {/* Security pillars — bento grid */}
        <section className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Shield className="h-3.5 w-3.5" aria-hidden="true" />
              Core Protections
            </span>
            <h2 className="mt-4 font-heading text-2xl font-semibold text-foreground sm:text-3xl">
              Security Built Into Every Layer
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
            {securityPillars.map((pillar, index) => (
              <PillarCard key={pillar.title} pillar={pillar} index={index} />
            ))}
          </div>
        </section>

        {/* Commitment — dark section */}
        <section className="relative mt-16 overflow-hidden rounded-3xl sm:mt-24">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(99,102,241,0.15),transparent_50%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.1),transparent_40%)]" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="relative px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
                Data Security: Our Commitment to Your Information
              </h2>
              <p className="mt-4 text-white/60">
                Compliance, certification, and rapid response—all working together to keep your data fortress-strong.
              </p>
            </div>

            <div className="mt-10 space-y-5">
              {commitments.map((item, index) => (
                <CommitmentCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Old-school approach */}
        <section className="mt-16 sm:mt-24">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/15 text-primary">
                  <Network className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                  The Old-School Approach to Security
                </h2>
              </div>
              <p className="mt-4 max-w-3xl leading-relaxed text-body">
                While technology advances, sometimes the best solutions are tried and true. Especially with our new,
                state-of-the-art office, Book Virtual Assistant&apos;s data security combines modern virtual monitoring
                with a classic, hands-on approach.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {classicSecurity.map((item, index) => (
              <ClassicCard key={item.title} item={item} index={index} />
            ))}
          </div>

          <ul className="mt-6 flex flex-wrap gap-3" role="list">
            {["Cisco", "Linux", "Microsoft", "Firewall", "Anti-Virus"].map((tag) => (
              <li
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white px-3.5 py-1.5 text-xs font-medium text-foreground shadow-sm"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                {tag}
              </li>
            ))}
          </ul>
        </section>

        {/* Internal fortification */}
        <section className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
              Fortifying Data Security from Within
            </h2>
            <p className="mt-3 text-body">
              True security starts with people, processes, and relentless improvement.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
            {internalFortification.map((item, index) => (
              <FortifyCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="mt-16 sm:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-slate-50 via-white to-primary/[0.03] p-8 sm:p-12"
          >
            <Quote className="absolute right-8 top-8 h-16 w-16 text-primary/10" aria-hidden="true" />
            <blockquote className="relative mx-auto max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-foreground sm:text-xl">
                We&apos;re so excited about the level of security we&apos;ve built for your data. It&apos;s like having a
                secret vault where only you have the key. We&apos;ve put in place the strongest measures to keep your
                information safe and sound. You can rest easy knowing your data is in the best possible hands.
              </p>
              <footer className="mt-8">
                <cite className="not-italic">
                  <span className="block font-heading text-base font-semibold text-foreground">David</span>
                  <span className="mt-1 block text-sm text-body">Director of Partner Management</span>
                </cite>
              </footer>
            </blockquote>
          </motion.div>
        </section>

        {/* CTA */}
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
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/20">
                <Shield className="h-7 w-7" aria-hidden="true" />
              </span>
              <h2 className="mt-6 font-heading text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Step into a Fortress of Trust
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
                Experience the unmatched strength of data security. Partner with a team that treats your information
                like the valuable asset it is.
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
                  View Our Infrastructure
                </CTAButton>
              </div>
            </div>
          </motion.div>
        </section>
      </article>
    </>
  );
}
