"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  User,
  ChevronDown,
  FileText,
  Shield,
} from "lucide-react";
import { countries } from "./contactFormData";

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

function PhoneField({ countryCode, onCountryChange, countryId, phoneId }) {
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
                id={countryId}
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
                id={phoneId}
                name="phone"
                type="tel"
                required
                placeholder=" "
                className="peer w-full bg-transparent px-4 pb-3 pt-6 text-sm text-foreground outline-none"
              />
              <label
                htmlFor={phoneId}
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

export default function ContactForm({ idPrefix = "contact" }) {
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

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center py-10 text-center sm:py-12"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/15 to-accent/20 text-primary">
          <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
        </span>
        <h3 className="mt-6 font-heading text-2xl font-semibold text-foreground">Message Sent!</h3>
        <p className="mt-3 max-w-sm text-body">
          Thank you for reaching out. Our team will review your requirements and respond within 1
          business day.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-body/50">
            Your details
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField
              label="Full name"
              id={`${idPrefix}-name`}
              name="name"
              icon={User}
              required
              autoComplete="name"
            />
            <FormField
              label="Work email"
              id={`${idPrefix}-email`}
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
            countryId={`${idPrefix}-country`}
            phoneId={`${idPrefix}-phone`}
          />
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-body/50">
            Project details
          </p>
          <FormTextarea
            label="Describe your requirements"
            id={`${idPrefix}-message`}
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
  );
}
