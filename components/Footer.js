import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Awards & recognition", href: "/awards-and-recognition" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact-us" },
  { label: "FAQ's", href: "/faq" },

];

const whyWeLinks = [
  { label: "Outsourcing to India", href: "/outsource-to-india" },
  { label: "How to work with us?", href: "/how-to-work-with-us" },
  { label: "Data Security", href: "/data-security" },
];

const policyLinks = [
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-sm text-[#a0a0a0] transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
    >
      {children}
    </Link>
  );
}

function FooterHeading({ children }) {
  return (
    <h3 className="font-heading text-sm font-medium tracking-wide text-white mb-6">
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

        <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-20 sm:px-6 lg:px-8">

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-8">

            {/* Left Section (CTA) */}
            <div className="w-full lg:w-[45%] flex flex-col items-start pr-0 lg:pr-12">
              {/* <div className="flex items-center gap-2 text-white text-xs mb-6">
                <span className="h-2 w-2 rounded-full bg-white"></span>
                Curious?
              </div> */}
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-heading font-medium text-white mb-6 leading-[1.1] tracking-tight">
                Setup A <br />
                Discovery Call
              </h2>
              <p className="text-[#a0a0a0] text-[15px] leading-relaxed mb-10 max-w-md">
                We're a team of passionate designers and strategists dedicated to unlocking your brand's potential. Partner with us.
              </p>

              <div className="flex flex-wrap items-center gap-8">
                <a
                  href="tel:+919899675039"
                  className="bg-white text-black px-8 py-3.5 rounded-full text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
                >
                  Let's Talk
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <Link
                  href="/contact-us"
                  className="text-white text-sm font-medium flex items-center justify-center gap-2 hover:text-gray-300 transition-colors"
                >
                  Get in Touch
                  <ArrowUpRight className="h-4 w-4 text-white" />
                </Link>
              </div>
            </div>

            {/* Right Section (Links Grid) */}
            <div className="w-full lg:w-[55%] grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-4 mt-8 lg:mt-0">
              {/* Quick Links */}
              <div>
                <FooterHeading>Quick Links</FooterHeading>
                <ul className="space-y-4" role="list">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <FooterLink href={link.href}>{link.label}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why We? */}
              <div>
                <FooterHeading>Why We?</FooterHeading>
                <ul className="space-y-4" role="list">
                  {whyWeLinks.map((link) => (
                    <li key={link.href}>
                      <FooterLink href={link.href}>{link.label}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Policy */}
              <div>
                <FooterHeading>Policy</FooterHeading>
                <ul className="space-y-4" role="list">
                  {policyLinks.map((link) => (
                    <li key={link.href}>
                      <FooterLink href={link.href}>{link.label}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row text-[13px] text-[#a0a0a0]">
            <p>
              © Copyright {year} by Book Virtual Assistant All Rights Reserved
            </p>
            <p>
              Developed by <a href="https://tech2globe.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline transition-colors">Tech2Globe</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
