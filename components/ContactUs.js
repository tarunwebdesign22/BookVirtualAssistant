"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Building2,
} from "lucide-react";
import PageHeader from "./PageHeader";
import ContactForm from "./ContactForm";

const contactMethods = [
  {
    icon: Mail,
    label: "Email us",
    value: "info@bookvirtualassistant.com",
    href: "mailto:info@bookvirtualassistant.com",
    description: "We reply within 1 business day",
  },
  {
    icon: Phone,
    label: "Call us",
    value: "+1-516-858-5840",
    href: "tel:+15168585840",
    description: "USA line — Mon–Fri, 9am–6pm EST",
  },
  {
    icon: Phone,
    label: "India office",
    value: "+91-9899675039",
    href: "tel:+919899675039",
    description: "IST business hours",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ContactUs() {
  return (
    <>
      <PageHeader
        badge="Get in Touch"
        title="Contact Us"
        description={
          <>
            Drop us your requirements. Our team will get back to you within{" "}
            <span className="font-semibold text-primary">1 business day</span>.
          </>
        }
      />

      <section className="relative pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-5 lg:gap-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="lg:col-span-3"
            >
              <motion.div
                variants={itemVariants}
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/25 via-accent/15 to-secondary/20 p-px shadow-2xl shadow-primary/10"
              >
                <div className="overflow-hidden rounded-lg bg-white">
                  <div className="border-b border-slate-100 bg-gradient-to-r from-hero-mid/80 via-white to-hero-end/60 px-6 py-6 sm:px-8 sm:py-7">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/30">
                          <MessageSquare className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <div>
                          <h2 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
                            Share Your Requirement
                          </h2>
                          <p className="mt-0.5 text-sm text-body">
                            Free consultation — no commitment required
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-medium text-primary">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        Reply within 24 hours
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-8 sm:px-8 sm:py-10">
                    <ContactForm idPrefix="contact" />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col gap-6 lg:col-span-2"
            >
              <motion.div
                variants={itemVariants}
                className="rounded-2xl border border-white/30 bg-white/50 p-6 shadow-lg shadow-primary/5 backdrop-blur-xl"
              >
                <h3 className="font-heading text-lg font-semibold text-foreground">Ask Your Query</h3>
                <ul className="mt-5 space-y-4" role="list">
                  {contactMethods.map((method) => (
                    <li key={method.href}>
                      <a
                        href={method.href}
                        className="group flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/15 text-primary transition-transform group-hover:scale-105">
                          <method.icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block text-xs font-medium uppercase tracking-wider text-body/70">
                            {method.label}
                          </span>
                          <span className="mt-0.5 block text-sm font-medium text-foreground group-hover:text-primary">
                            {method.value}
                          </span>
                          <span className="mt-0.5 block text-xs text-body">{method.description}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="rounded-2xl border border-white/30 bg-white/50 p-6 shadow-lg shadow-primary/5 backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/15 text-primary">
                    <Building2 className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-foreground">Our Office</h3>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                    <address className="not-italic text-sm leading-relaxed text-body">
                      <span className="font-medium text-foreground">Book Virtual Assistant</span>
                      <br />
                      Office no. 41, First Floor,
                      <br />
                      Shri Jagdamba Market,
                      <br />
                      Rithala, North West Delhi — 110085
                    </address>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-body">
                    <Clock className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span>Response within 1 business day</span>
                  </div>
                </div>

                <div className="mt-5 overflow-hidden rounded-xl border border-white/30">
                  <iframe
                    title="Book Virtual Assistant office location"
                    src="https://maps.google.com/maps?q=Rithala+North+West+Delhi+110085&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    className="h-40 w-full border-0 grayscale-[30%] transition-all hover:grayscale-0 sm:h-44"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/5 to-accent/5 p-5 backdrop-blur-md"
              >
                <p className="text-center text-sm leading-relaxed text-body">
                  Trusted by{" "}
                  <span className="font-semibold text-primary">300+ businesses</span> worldwide with{" "}
                  <span className="font-semibold text-primary">98% client satisfaction</span>.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
