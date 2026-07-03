"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wifi,
  Zap,
  Building2,
  Snowflake,
  Armchair,
  Phone,
  AppWindow,
  Monitor,
  Printer,
  Headphones,
  Globe,
  Laptop,
  Video,
  Clapperboard,
  ChevronDown,
  HelpCircle,
  Server,
} from "lucide-react";
import PageHeader from "./PageHeader";

const infrastructureFeatures = [
  {
    icon: Wifi,
    title: "Internet Connection",
    description:
      "We provide high-speed and reliable internet connections. Clients can choose between two bandwidth options: 5 Mbps and 2 Mbps. Additionally, for clients with higher data demands, we offer separate broadband connections of 8 Mbps, ensuring uninterrupted performance.",
  },
  {
    icon: Zap,
    title: "Back-Up Systems",
    description:
      "Multiple backup generators ensure operations continue without disruptions, even during power outages.",
  },
  {
    icon: Building2,
    title: "Office Environment",
    description: "A comfortable, professional workspace designed for productivity.",
    points: [
      "Air Conditioning for a comfortable work environment",
      "Modern desks and ergonomic seating",
      "Local phone number — your virtual employee is reachable from your region",
    ],
    pointIcons: [Snowflake, Armchair, Phone],
  },
  {
    icon: AppWindow,
    title: "Software",
    description:
      "We provide all standard office software, including Windows XP or newer. Depending on client needs, we offer 32-bit or 64-bit Windows machines. For specialised software such as Microsoft Office, SQL Server, or Dot Net Server, we install and license them at a nominal cost. Essential software like Windows XP or 7 comes at no extra charge.",
  },
  {
    icon: Monitor,
    title: "Hardware",
    description:
      "Our robust hardware includes powerful PCs and laptops with a minimum configuration of 2 GB RAM, powered by Core i3 or Core2Duo processors. Clients managing large teams can rely on our dual-screen systems for optimal multitasking.",
    points: ["TFT Monitors", "Fax machines, printers, and scanners", "Skype webcams", "Headphones"],
    pointIcons: [Monitor, Printer, Video, Headphones],
  },
];

const benefits = [
  {
    icon: Globe,
    title: "SEZ Operations",
    description:
      "Book Virtual Assistant operates from India's Special Economic Zone (SEZ), offering an unmatched global standard of service with central air conditioning, cafeteria facilities, ATMs, banks, and postal offices.",
  },
  {
    icon: Laptop,
    title: "Virtual Workplace",
    description:
      "We've created a unique virtual workplace that ensures seamless communication. Employee PCs and keyboards are directly linked to your local system in the UK or USA, offering complete control and transparency.",
  },
  {
    icon: Video,
    title: "Video Conferencing",
    description:
      "Cutting-edge video conferencing for real-time face-to-face conversations across time zones — ideal for business meetings, training sessions, and team collaboration.",
  },
  {
    icon: Clapperboard,
    title: "Video Recording Studio",
    description:
      "Our state-of-the-art video recording studio lets you create high-quality videos for websites or business needs — training, marketing, or promotions — free of cost with virtual employee assistance.",
  },
];

const infrastructureFaqs = [
  {
    question: "Can I choose the working hours for my virtual employee?",
    answer:
      "Yes, you can set the working hours that best align with your business needs. Our flexible scheduling options allow you to select shifts that cover different time zones, ensuring seamless collaboration and productivity.",
  },
  {
    question: "What security measures are in place to protect my data?",
    answer:
      "We take data security seriously and implement strict measures, including firewalls, encryption, and access controls. Our offices follow industry-standard security protocols to safeguard your confidential information at all times.",
  },
  {
    question: "Can I interview potential virtual employees before hiring?",
    answer:
      "Absolutely! You can conduct interviews with shortlisted candidates to ensure they meet your requirements and are the right fit for your business. We facilitate the process to make it as smooth as possible.",
  },
  {
    question: "Do you offer training for virtual employees?",
    answer:
      "While our virtual employees come with the necessary skills and experience, we also provide onboarding support to help them understand your specific processes. Custom training can be arranged based on your business needs.",
  },
  {
    question: "Is there a minimum contract period for hiring a virtual employee?",
    answer:
      "We offer flexible hiring options to suit your needs. Whether you require short-term assistance or a long-term commitment, we can tailor our services accordingly without rigid contract terms.",
  },
];

function FeatureCard({ feature, index }) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-slate-100 p-6 shadow-sm transition-all duration-300 hover:border-primary/25 hover:shadow-md hover:shadow-primary/5 sm:p-7"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/25">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">{feature.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-body sm:text-base">{feature.description}</p>
      {feature.points && (
        <ul className="mt-4 space-y-2.5" role="list">
          {feature.points.map((point, i) => {
            const PointIcon = feature.pointIcons?.[i];
            return (
              <li key={point} className="flex items-start gap-2.5 text-sm text-body">
                {PointIcon && (
                  <PointIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                )}
                <span>{point}</span>
              </li>
            );
          })}
        </ul>
      )}
    </motion.div>
  );
}

function BenefitCard({ benefit, index }) {
  const Icon = benefit.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-white/30 bg-white p-6 shadow-lg shadow-primary/5 sm:p-7"
    >
      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10" />
      <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/15 text-primary">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="relative mt-4 font-heading text-lg font-semibold text-foreground">{benefit.title}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-body sm:text-base">{benefit.description}</p>
    </motion.div>
  );
}

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

export default function Infrastructure() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <PageHeader
        badge="Infrastructure"
        title="VA Infrastructure"
        subtitle="Simple Online Collaboration, Video Calls, and a Modern Office Setup"
        description="What makes Book Virtual Assistant different is how everything is set up to help virtual employees work better — workspace, tools, and support — all kept to high international standards."
      />

      <article className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <section className="mx-auto max-w-3xl text-center">
          <p className="leading-relaxed text-body">
            At Book Virtual Assistant, we ensure that the virtual employee is equipped with the latest hardware
            and infrastructure to meet your unique business requirements. From dual screens to custom software
            installations, our expert IT support team tailors everything to fit your specific needs.
          </p>
        </section>

        <section className="mt-14 sm:mt-16">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/15 text-primary">
              <Server className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
              Hardware and Infrastructure
            </h2>
          </div>
          <p className="mt-4 max-w-3xl text-body">
            To foster seamless collaboration between clients and virtual employees, our office infrastructure
            includes:
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {infrastructureFeatures.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </section>

        <section className="mt-16 sm:mt-20">
          <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
            Book Virtual Assistants and Enjoy These Benefits
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <BenefitCard key={benefit.title} benefit={benefit} index={index} />
            ))}
          </div>
          <p className="mt-10 max-w-4xl leading-relaxed text-body">
            With our strong focus on top-quality equipment and office setup, working with your virtual employee
            in India becomes smooth and hassle-free — something that a freelancer simply can&apos;t offer. These
            key elements improve the outsourcing experience and create a supportive environment, encouraging
            clients to invest more for future growth.
          </p>
        </section>

        <section className="mt-16 sm:mt-20">
          <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-3">
            {infrastructureFaqs.map((faq, index) => (
              <FaqItem
                key={faq.question}
                faq={faq}
                isOpen={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
              />
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
