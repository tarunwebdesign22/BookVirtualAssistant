"use client";

import { Clock, MessageSquare } from "lucide-react";
import ContactForm from "../ContactForm";

export default function ServiceContactForm({
  title = "Share Your Requirement",
  subtitle = "Free consultation — no commitment required",
  idPrefix = "service",
}) {
  return (
    <div className="overflow-hidden rounded-[calc(1.5rem-1px)] bg-white">
      <div className="border-b border-slate-100 bg-gradient-to-r from-hero-mid/80 via-white to-hero-end/60 px-6 py-6 sm:px-8 sm:py-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/30">
              <MessageSquare className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h2
                id="service-contact-form-heading"
                className="font-heading text-xl font-semibold text-foreground sm:text-2xl"
              >
                {title}
              </h2>
              <p className="mt-0.5 text-sm text-body">{subtitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-medium text-primary">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            Reply within 24 hours
          </div>
        </div>
      </div>

      <div className="px-6 py-8 sm:px-8 sm:py-10">
        <ContactForm idPrefix={idPrefix} />
      </div>
    </div>
  );
}
