"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import CTAButton from "./CTAButton";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact-us" },
];

const serviceMenu = [
  {
    label: "Hire Digital Marketer",
    children: [
      { label: "Hire SEO Expert", href: "/hire-seo-expert" },
      { label: "Hire Google Ads Expert", href: "/hire-google-ads-expert" },
      { label: "Hire Meta Ads Expert", href: "/hire-meta-ads-expert" },
      { label: "Hire Social Media Expert", href: "/hire-social-media-expert" },
      { label: "Hire Email Marketing Expert", href: "/hire-email-marketing-expert" },
      { label: "Hire PR Expert", href: "/hire-pr-expert" },
    ],
  },
  {
    label: "Hire Web Developers",
    children: [
      { label: "Hire Shopify Developer", href: "/hire-shopify-developer" },
      { label: "Hire WordPress Developer", href: "/hire-wordpress-developer" },
      { label: "Hire Full Stack Developer", href: "/hire-full-stack-developer" },
      { label: "Hire PHP Developer", href: "/hire-php-developer" },
      { label: "Hire ROR Developer", href: "/hire-ror-developer" },
      { label: "Hire Dot Net Developer", href: "/hire-dot-net-developer" },
    ],
  },
  {
    label: "Hire Ecommerce Specialist",
    children: [
      { label: "Hire Amazon VA", href: "/hire-amazon-va" },
      { label: "Hire Walmart Expert", href: "/hire-walmart-expert" },
      { label: "Hire eBay Expert", href: "/hire-ebay-expert" },
      { label: "Hire ETSY Expert", href: "/hire-etsy-expert" },
    ],
  },
  {
    label: "Hire Data Experts",
    children: [
      { label: "Hire Data Analytics Experts", href: "/hire-data-analytics-experts" },
      { label: "Hire Medical Billing Experts", href: "/hire-medical-billing-experts" },
      { label: "Hire Data Entry Specialist", href: "/hire-data-entry-specialist" },
      { label: "Hire Real Estate VA", href: "/hire-real-estate-va" },
      { label: "Hire Power BI Expert", href: "/hire-power-bi-expert" },
    ],
  },
  {
    label: "Hire Mobile App Developers",
    children: [
      { label: "Hire React Native Developer", href: "/hire-react-native-developer" },
      { label: "Hire Flutter Developer", href: "/hire-flutter-developer" },
      { label: "Hire Swift Developer", href: "/hire-swift-developer" },
      { label: "Hire Hybrid Developer", href: "/hire-hybrid-developer" },
    ],
  },
  { label: "Hire Lead Generation Specialist", href: "/hire-lead-generation-specialist" },
  { label: "Call Center Services", href: "/call-center-services" },
];

const resourceLinks = [
  { label: "Testimonial", href: "/testimonial" },
  { label: "FAQ's", href: "/faq" },
  { label: "Awards & Recognition", href: "/award-recognition" },
  { label: "Infrastructure", href: "/infrastructure" },
];

function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      aria-label="Book Virtual Assistant — Home"
    >
      <Image
        src="/images/bva-logo.png"
        alt="Book Virtual Assistant"
        width={216}
        height={58}
        priority
        className="h-11 w-auto transition-transform duration-300 group-hover:scale-[1.02] sm:h-12"
      />
    </Link>
  );
}

function NavLink({ href, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative block rounded-lg px-3.5 py-2 text-sm font-medium text-body transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute inset-0 rounded-lg bg-primary/5"
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      />
    </Link>
  );
}

function DropdownLink({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`block px-4 py-2.5 text-sm text-body transition-colors hover:bg-primary/5 hover:text-foreground focus-visible:outline-none focus-visible:bg-primary/5 focus-visible:text-foreground ${className}`}
    >
      {children}
    </Link>
  );
}

function ServicesDropdown() {
  return (
    <li className="group relative">
      <button
        type="button"
        className="relative flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-body transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span className="relative z-10">Services</span>
        <ChevronDown
          className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
          aria-hidden="true"
        />
        <motion.span
          className="absolute inset-0 rounded-lg bg-primary/5"
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        />
      </button>

      <ul
        className="invisible absolute left-0 top-full z-50 mt-2 min-w-[260px] translate-y-1 rounded-xl border border-white/40 bg-white/95 py-2 opacity-0 shadow-xl shadow-primary/10 backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
        role="list"
      >
        {serviceMenu.map((item) =>
          item.children ? (
            <li key={item.label} className="group/sub relative">
              <span className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary/5">
                {item.label}
                <ChevronRight className="h-4 w-4 text-body/50" aria-hidden="true" />
              </span>
              <ul
                className="invisible absolute left-full top-0 z-50 ml-1 min-w-[260px] rounded-xl border border-white/40 bg-white/95 py-2 opacity-0 shadow-xl shadow-primary/10 backdrop-blur-xl transition-all duration-200 group-hover/sub:visible group-hover/sub:opacity-100 group-focus-within/sub:visible group-focus-within/sub:opacity-100"
                role="list"
              >
                {item.children.map((child) => (
                  <li key={child.href}>
                    <DropdownLink href={child.href}>{child.label}</DropdownLink>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={item.href}>
              <DropdownLink href={item.href}>{item.label}</DropdownLink>
            </li>
          )
        )}
      </ul>
    </li>
  );
}

function ResourcesDropdown() {
  return (
    <li className="group relative">
      <button
        type="button"
        className="relative flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-body transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span className="relative z-10">Resources</span>
        <ChevronDown
          className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
          aria-hidden="true"
        />
        <motion.span
          className="absolute inset-0 rounded-lg bg-primary/5"
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        />
      </button>

      <ul
        className="invisible absolute left-0 top-full z-50 mt-2 min-w-[220px] translate-y-1 rounded-xl border border-white/40 bg-white/95 py-2 opacity-0 shadow-xl shadow-primary/10 backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
        role="list"
      >
        {resourceLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block px-4 py-2.5 text-sm text-body transition-colors hover:bg-primary/5 hover:text-foreground focus-visible:outline-none focus-visible:bg-primary/5 focus-visible:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileServiceCategory, setMobileServiceCategory] = useState(null);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileResourcesOpen(false);
    setMobileServicesOpen(false);
    setMobileServiceCategory(null);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8" role="banner">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Main navigation"
          className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl border px-4 py-2.5 transition-all duration-500 sm:px-6 ${
            scrolled
              ? "border-white/40 bg-white/75 shadow-xl shadow-primary/8 backdrop-blur-xl"
              : "border-white/20 bg-white/30 shadow-sm backdrop-blur-md"
          }`}
        >
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <ul className="hidden items-center gap-1 lg:flex" role="list">
            {navLinks.slice(0, 2).map((link) => (
              <li key={link.href}>
                <NavLink href={link.href}>{link.label}</NavLink>
              </li>
            ))}
            <ServicesDropdown />
            <ResourcesDropdown />
            {navLinks.slice(2).map((link) => (
              <li key={link.href}>
                <NavLink href={link.href}>{link.label}</NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2.5 lg:flex">
            <CTAButton href="/get-started" variant="primary" size="sm">
              Hire Dedicated Team
            </CTAButton>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-white/50 text-foreground backdrop-blur-md transition-colors hover:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </motion.nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
              onClick={closeMobile}
              aria-hidden="true"
            />

            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 35 }}
              className="absolute inset-x-4 top-4 overflow-hidden rounded-2xl border border-white/25 bg-white/80 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-center justify-between border-b border-white/20 px-6 py-4">
                <Logo />
                <button
                  type="button"
                  onClick={closeMobile}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/60 text-foreground transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label="Close navigation menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="max-h-[calc(100vh-8rem)] overflow-y-auto px-6 py-6" aria-label="Mobile navigation links">
                <ul className="flex flex-col gap-1" role="list">
                  {navLinks.slice(0, 2).map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMobile}
                        className="block rounded-lg px-4 py-3.5 text-lg font-medium text-foreground transition-colors hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}

                  <motion.li
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setMobileServicesOpen((open) => !open);
                        setMobileServiceCategory(null);
                      }}
                      className="flex w-full items-center justify-between rounded-lg px-4 py-3.5 text-lg font-medium text-foreground transition-colors hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      aria-expanded={mobileServicesOpen}
                    >
                      Services
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>

                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden pl-2"
                          role="list"
                        >
                          {serviceMenu.map((item) =>
                            item.children ? (
                              <li key={item.label}>
                                <button
                                  type="button"
                                  onClick={() =>
                                    setMobileServiceCategory((current) =>
                                      current === item.label ? null : item.label
                                    )
                                  }
                                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                  aria-expanded={mobileServiceCategory === item.label}
                                >
                                  {item.label}
                                  <ChevronDown
                                    className={`h-4 w-4 transition-transform duration-200 ${mobileServiceCategory === item.label ? "rotate-180" : ""}`}
                                    aria-hidden="true"
                                  />
                                </button>
                                <AnimatePresence>
                                  {mobileServiceCategory === item.label && (
                                    <motion.ul
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="overflow-hidden pl-4"
                                      role="list"
                                    >
                                      {item.children.map((child) => (
                                        <li key={child.href}>
                                          <Link
                                            href={child.href}
                                            onClick={closeMobile}
                                            className="block rounded-lg px-4 py-2.5 text-sm text-body transition-colors hover:bg-primary/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                          >
                                            {child.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </motion.ul>
                                  )}
                                </AnimatePresence>
                              </li>
                            ) : (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  onClick={closeMobile}
                                  className="block rounded-lg px-4 py-3 text-base text-body transition-colors hover:bg-primary/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            )
                          )}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    <button
                      type="button"
                      onClick={() => setMobileResourcesOpen((open) => !open)}
                      className="flex w-full items-center justify-between rounded-lg px-4 py-3.5 text-lg font-medium text-foreground transition-colors hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      aria-expanded={mobileResourcesOpen}
                    >
                      Resources
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-200 ${mobileResourcesOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>

                    <AnimatePresence>
                      {mobileResourcesOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden pl-4"
                          role="list"
                        >
                          {resourceLinks.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                onClick={closeMobile}
                                className="block rounded-lg px-4 py-3 text-base text-body transition-colors hover:bg-primary/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.li>

                  {navLinks.slice(2).map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * (i + 4), duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMobile}
                        className="block rounded-lg px-4 py-3.5 text-lg font-medium text-foreground transition-colors hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.4 }}
                  className="mt-8 flex flex-col gap-3"
                >
                  <CTAButton href="/get-started" variant="primary" size="lg" className="w-full text-center">
                    Hire Dedicated Team
                  </CTAButton>
                  <CTAButton href="/contact-us" variant="secondary" size="lg" className="w-full text-center">
                    Book Consultation
                  </CTAButton>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
