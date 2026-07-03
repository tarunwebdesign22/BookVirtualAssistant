"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Building2,
  CheckCircle2,
  User,
  ChevronDown,
  FileText,
  Shield,
} from "lucide-react";
import CTAButton from "./CTAButton";
import PageHeader from "./PageHeader";

const countries = [
  { label: "USA", code: "+1" },
  { label: "UK", code: "+44" },
  { label: "Canada", code: "+1" },
  { label: "Australia", code: "+61" },
  { label: "Germany", code: "+49" },
  { label: "France", code: "+33" },
  { label: "Singapore", code: "+65" },
  { label: "UAE", code: "+971" },
  { label: "New Zealand", code: "+64" },
  { label: "Saudi Arabia", code: "+966" },
  { label: "India", code: "+91" },
  { label: "Japan", code: "+81" },
  { label: "South Africa", code: "+27" },
  { label: "Brazil", code: "+55" },
  { label: "Mexico", code: "+52" },
  { label: "Philippines", code: "+63" },
  { label: "Netherlands", code: "+31" },
  { label: "Switzerland", code: "+41" },
  { label: "Ireland", code: "+353" },
  { label: "Italy", code: "+39" },
  { label: "Spain", code: "+34" },
  { label: "Sweden", code: "+46" },
  { label: "Norway", code: "+47" },
  { label: "Denmark", code: "+45" },
  { label: "Belgium", code: "+32" },
  { label: "Poland", code: "+48" },
  { label: "Turkey", code: "+90" },
  { label: "Israel", code: "+972" },
  { label: "Malaysia", code: "+60" },
  { label: "Hong Kong", code: "+852" },
];

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

function FormField({ label, id, icon: Icon, type = "text", required, className = "", ...props }) {
  return (
    <div className={`group relative ${className}`}>
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/90 shadow-sm transition-all duration-300 focus-within:border-primary/40 focus-within:shadow-md focus-within:shadow-primary/10">
        <div className="flex items-stretch">
          {Icon && (
            <span className="flex w-12 flex-shrink-0 items-center justify-center border-r border-slate-100 text-body/35 transition-colors group-focus-within:text-primary">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>
          )}
          <div className="relative min-w-0 flex-1">
            <input
              id={id}
              type={type}
              required={required}
              placeholder=" "
              className="peer w-full bg-transparent px-4 pb-3 pt-6 text-sm text-foreground outline-none"
              {...props}
            />
            <label
              htmlFor={id}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-body/55 transition-all duration-200 peer-focus:top-3.5 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-3.5 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:text-body/70"
            >
              {label}
              {required && <span className="text-primary"> *</span>}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormTextarea({ label, id, required, rows = 5, ...props }) {
  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/90 shadow-sm transition-all duration-300 focus-within:border-primary/40 focus-within:shadow-md focus-within:shadow-primary/10">
        <div className="flex items-stretch">
          <span className="flex w-12 flex-shrink-0 items-start justify-center border-r border-slate-100 pt-6 text-body/35 transition-colors group-focus-within:text-primary">
            <FileText className="h-4 w-4" aria-hidden="true" />
          </span>
          <div className="relative min-w-0 flex-1">
            <textarea
              id={id}
              rows={rows}
              required={required}
              placeholder=" "
              className="peer w-full resize-none bg-transparent px-4 pb-4 pt-7 text-sm leading-relaxed text-foreground outline-none"
              {...props}
            />
            <label
              htmlFor={id}
              className="pointer-events-none absolute left-4 top-5 text-sm text-body/55 transition-all duration-200 peer-focus:top-3 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:text-body/70"
            >
              {label}
              {required && <span className="text-primary"> *</span>}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneField({ countryCode, onCountryChange, countries }) {
  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/90 shadow-sm transition-all duration-300 focus-within:border-primary/40 focus-within:shadow-md focus-within:shadow-primary/10">
        <div className="flex items-stretch">
          <span className="flex w-12 flex-shrink-0 items-center justify-center border-r border-slate-100 text-body/35 transition-colors group-focus-within:text-primary">
            <Phone className="h-4 w-4" aria-hidden="true" />
          </span>

          <div className="relative flex min-w-0 flex-1 items-stretch">
            <div className="relative flex-shrink-0 border-r border-slate-100">
              <select
                id="country"
                name="country"
                value={countryCode}
                onChange={onCountryChange}
                className="h-full cursor-pointer appearance-none bg-transparent py-4 pl-4 pr-8 text-sm font-medium text-foreground outline-none"
                aria-label="Country code"
              >
                {countries.map((c) => (
                  <option key={`${c.label}-${c.code}`} value={c.code}>
                    {c.label} ({c.code})
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-body/40"
                aria-hidden="true"
              />
            </div>

            <div className="relative min-w-0 flex-1">
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder=" "
                className="peer w-full bg-transparent px-4 pb-3 pt-6 text-sm text-foreground outline-none"
              />
              <label
                htmlFor="phone"
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-body/55 transition-all duration-200 peer-focus:top-3.5 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-3.5 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:text-body/70"
              >
                Phone number <span className="text-primary">*</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("+1");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
  };

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
                <div className="overflow-hidden rounded-[calc(1.5rem-1px)] bg-white">
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
                    {submitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center py-12 text-center"
                      >
                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/15 to-accent/20 text-primary">
                          <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                        </span>
                        <h3 className="mt-6 font-heading text-2xl font-semibold text-foreground">
                          Message Sent!
                        </h3>
                        <p className="mt-3 max-w-sm text-body">
                          Thank you for reaching out. Our team will review your requirements and respond within 1 business day.
                        </p>
                        <CTAButton href="/" variant="secondary" size="md" className="mt-8">
                          Back to Home
                        </CTAButton>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <div className="space-y-6">
                          <div>
                            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-body/50">
                              Your details
                            </p>
                            <div className="grid gap-4 sm:grid-cols-2">
                              <FormField
                                label="Full name"
                                id="name"
                                name="name"
                                icon={User}
                                required
                                autoComplete="name"
                              />
                              <FormField
                                label="Work email"
                                id="email"
                                name="email"
                                type="email"
                                icon={Mail}
                                required
                                autoComplete="email"
                              />
                            </div>
                          </div>

                          <div>
                            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-body/50">
                              How to reach you
                            </p>
                            <PhoneField
                              countryCode={countryCode}
                              onCountryChange={(e) => setCountryCode(e.target.value)}
                              countries={countries}
                            />
                          </div>

                          <div>
                            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-body/50">
                              Project details
                            </p>
                            <FormTextarea
                              label="Describe your requirements"
                              id="message"
                              name="message"
                              required
                            />
                          </div>
                        </div>

                        <div className="mt-8 border-t border-slate-100 pt-8">
                          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                            <p className="flex items-start gap-2 text-xs leading-relaxed text-body/70 sm:max-w-xs">
                              <Shield className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary/70" aria-hidden="true" />
                              Your information is secure and will never be shared with third parties.
                            </p>

                            <motion.button
                              type="submit"
                              disabled={loading}
                              whileHover={{ scale: loading ? 1 : 1.02 }}
                              whileTap={{ scale: loading ? 1 : 0.98 }}
                              className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-gradient-to-r from-primary-dark via-primary to-accent px-8 py-4 font-heading text-base font-semibold text-white shadow-xl shadow-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:min-w-[200px]"
                            >
                              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/25 to-white/0 transition-transform duration-700 group-hover:translate-x-full" />
                              {loading ? (
                                <>
                                  <span className="relative h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                  <span className="relative">Sending...</span>
                                </>
                              ) : (
                                <>
                                  <span className="relative">Send Message</span>
                                  <Send className="relative h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                                </>
                              )}
                            </motion.button>
                          </div>
                        </div>
                      </form>
                    )}
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
