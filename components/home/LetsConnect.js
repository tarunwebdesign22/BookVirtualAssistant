"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import ContactForm from "../ContactForm";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone Number",
    lines: ["+1-516-858-5840", "+91-9899675039"],
    href: "tel:+15168585840",
  },
  {
    icon: Mail,
    label: "Email Address",
    lines: ["info@bookvirtualassistant.com"],
    href: "mailto:info@bookvirtualassistant.com",
  },
];

export default function LetsConnect() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      aria-labelledby="lets-connect-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-hero-mid to-hero-end" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-primary/8 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-accent/8 blur-[90px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2
            id="lets-connect-heading"
            className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Let&apos;s Connect
          </h2>
          <p className="mt-4 text-lg text-body sm:text-xl">
            Send Us Your Requirements – Expect a Quick Response Within{" "}
            <span className="font-semibold text-primary">1 Business Day</span>!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 overflow-hidden rounded-3xl bg-white shadow-2xl shadow-primary/10 lg:mt-12"
        >
          <div className="grid lg:grid-cols-5">
            <div className="relative bg-gradient-to-br from-primary-dark via-primary to-primary/90 p-8 text-white sm:p-10 lg:col-span-2 lg:p-12">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />

              <div className="relative">
                <h3 className="font-heading text-2xl font-bold sm:text-3xl">Contact Info</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                  Reach out to us with your query or concern
                </p>

                <ul className="mt-10 space-y-8" role="list">
                  {contactInfo.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="group flex items-start gap-4 rounded-xl transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                      >
                        <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20 transition-transform group-hover:scale-105">
                          <item.icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-white/90">{item.label}</span>
                          {item.lines.map((line) => (
                            <span key={line} className="mt-1 block text-sm text-white/75 sm:text-base">
                              {line}
                            </span>
                          ))}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 sm:p-10 lg:col-span-3 lg:p-12">
              <h3 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">Get In Touch</h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-body sm:text-base">
                Fill out the form below and our team will get back to you with the right virtual
                assistant solution for your business needs.
              </p>
              <div className="mt-8">
                <ContactForm idPrefix="home" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
