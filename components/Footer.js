import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, ArrowUpRight } from "lucide-react";

const whyWeLinks = [
  { label: "Outsourcing to India", href: "/outsource-to-india" },
  { label: "How to Work With Us", href: "/how-to-work-with-us" },
  { label: "Data Security", href: "/data-security" },
];

const policyLinks = [
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookies-policy" },
];

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-footer"
    >
      <span>{children}</span>
      <ArrowUpRight
        className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
        aria-hidden="true"
      />
    </Link>
  );
}

function FooterHeading({ children }) {
  return (
    <h3 className="font-heading text-sm font-semibold tracking-wide text-white">
      {children}
    </h3>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden" role="contentinfo">
      {/* Top accent — mirrors hero gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="footer-pattern relative bg-black">
        {/* Vertical gradient — hero-style, inverted for dark */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-footer-mid to-footer-end" />

        {/* Blurred brand orbs — same language as hero */}
        <div className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-primary/15 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 top-1/4 h-[380px] w-[380px] rounded-full bg-secondary/12 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-accent/15 blur-[80px]" />

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-4">
              <Link
                href="/"
                className="inline-block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-footer"
                aria-label="Book Virtual Assistant — Home"
              >
                <Image
                  src="/images/mainlogolight.png"
                  alt="Book Virtual Assistant"
                  width={216}
                  height={58}
                  className="h-14 w-auto sm:h-16"
                />
              </Link>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
                Elite virtual professionals for startups and enterprises. Scale your
                team without the hiring headaches.
              </p>
            </div>

            {/* Why We */}
            <div className="lg:col-span-2 lg:col-start-6">
              <FooterHeading>Why We?</FooterHeading>
              <ul className="mt-5 space-y-3.5" role="list">
                {whyWeLinks.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policy */}
            <div className="lg:col-span-2">
              <FooterHeading>Policy</FooterHeading>
              <ul className="mt-5 space-y-3.5" role="list">
                {policyLinks.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <FooterHeading>Connect With Us</FooterHeading>
              <ul className="mt-5 space-y-4" role="list">
                <li>
                  <a
                    href="tel:+15168585840"
                    className="group flex items-start gap-3 rounded-lg text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 text-accent transition-colors group-hover:bg-white/10">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-medium uppercase tracking-wider text-white/40">
                        Phone
                      </span>
                      <span className="mt-0.5 block">+1-516-858-5840</span>
                      <span className="block">+91-9899675039</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@bookvirtualassistant.com"
                    className="group flex items-start gap-3 rounded-lg text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/5 text-accent transition-colors group-hover:bg-white/10">
                      <Mail className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-medium uppercase tracking-wider text-white/40">
                        Email
                      </span>
                      <span className="mt-0.5 block break-all">
                        info@bookvirtualassistant.com
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 sm:flex-row">
            <p className="text-center text-sm text-white/50 sm:text-left">
              © {year}{" "}
              <span className="font-medium text-white/70">Book Virtual Assistant</span>
              . All rights reserved.
            </p>
            <p className="text-center text-xs text-white/40 sm:text-right">
              Trusted by 300+ businesses worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
