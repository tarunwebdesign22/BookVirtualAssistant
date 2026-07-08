import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  CalendarClock,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Affordable Virtual Assistant Services - Hire Expert Help Today",
  description:
    "Reduce your expenses significantly with Book Virtual Assistant. Share your requirement and get started within 24 hours with expert, cost-effective virtual assistant services.",
};

const exclusiveBenefits = [
  "Get started within 24 hours.",
  "Expert guidance and strategic planning.",
  "Comprehensive analysis and technical consultation.",
  "Clear project documentation and transparent communication.",
];

const trustStats = [
  { label: "Established", value: "2014" },
  { label: "Professionals", value: "300+" },
  { label: "Successful Projects", value: "7000+" },
  { label: "Customer Satisfaction", value: "98%" },
];

const recognizedExpertiseLogos = [
  { title: "Certified Amazon SPN Service Provider", image: "/images/awards/amazonspn.jpg" },
  { title: "Certified Shopify Service Provider", image: "/images/awards/shopify.jpg" },
  { title: "Certified Ebay Service Provider", image: "/images/awards/ebay.jpg" },
  { title: "Certified Clutch Service Provider", image: "/images/awards/clutch.jpg" },
  { title: "Certified India 5000 Best Msme Awards", image: "/images/awards/msme.jpg" },
];

const footerQuickLinks = {
  whyWe: [
    { label: "Outsourcing to India", href: "/outsource-to-india" },
    { label: "How to work with us?", href: "/how-to-work-with-us" },
    { label: "Data Security", href: "/data-security" },
  ],
  policy: [
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Cookie Policy", href: "/cookies-policy" },
  ],
};

function QuickLinksColumn({ title, links }) {
  return (
    <div className="rounded-2xl border border-primary/10 bg-white/70 p-6 shadow-lg shadow-primary/5 backdrop-blur-sm">
      <h3 className="font-heading text-lg font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm text-body" role="list">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function GetStartedPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden pb-16 pt-32 sm:pt-36 lg:pt-40">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-hero-mid via-background to-hero-end" />
          <div className="pointer-events-none absolute -left-40 top-16 h-[460px] w-[460px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="pointer-events-none absolute -right-24 top-1/3 h-[340px] w-[340px] rounded-full bg-accent/10 blur-[100px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Hire VA
              </span>
              <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Reduce your expenses significantly
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-body">
                Share your requirements and get matched with expert virtual assistants who align with
                your business goals.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-5 lg:gap-8">
              <div className="lg:col-span-3">
                <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary/25 via-accent/15 to-secondary/20 p-px shadow-2xl shadow-primary/10">
                  <div className="rounded-[calc(1.5rem-1px)] bg-white">
                    <div className="border-b border-slate-100 bg-gradient-to-r from-hero-mid/80 via-white to-hero-end/60 px-6 py-6 sm:px-8">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h2 className="font-heading text-2xl font-semibold text-foreground">
                            Share Your Requirement
                          </h2>
                          <p className="mt-1 text-sm text-body">
                            Free consultation and quick onboarding support.
                          </p>
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-medium text-primary">
                          <CalendarClock className="h-3.5 w-3.5" aria-hidden="true" />
                          Response within 24 hours
                        </div>
                      </div>
                    </div>
                    <div className="px-6 py-8 sm:px-8 sm:py-10">
                      <ContactForm idPrefix="get-started" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 lg:col-span-2">
                <div className="rounded-2xl border border-primary/15 bg-white/75 p-6 shadow-lg shadow-primary/5 backdrop-blur-sm">
                  <h2 className="font-heading text-lg font-semibold text-foreground">
                    Avail Exclusive Benefits
                  </h2>
                  <ul className="mt-5 space-y-3" role="list">
                    {exclusiveBenefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 text-sm text-body">
                        <BadgeCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/5 to-accent/5 p-6 shadow-lg shadow-primary/5">
                  <h2 className="font-heading text-lg font-semibold text-foreground">
                    We have earned the trust of thousands
                  </h2>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {trustStats.map((item) => (
                      <div key={item.label} className="rounded-xl border border-white/60 bg-white/70 p-4">
                        <p className="font-heading text-2xl font-bold text-primary">{item.value}</p>
                        <p className="mt-1 text-xs uppercase tracking-wider text-body/80">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-primary/10 bg-white/80 p-6 shadow-lg shadow-primary/5 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-primary">
                    <Users className="h-4 w-4" aria-hidden="true" />
                    <p className="text-xs font-semibold uppercase tracking-wider">Client Words</p>
                  </div>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-foreground">Tom Voeten</h3>
                  <p className="text-sm text-body">General Manager at RE&UP Recycling Technologies</p>
                  <p className="mt-3 text-sm leading-relaxed text-body">
                    &quot;Don&apos;t think too much and trust Book Virtual Assistant. Their team is
                    skilled, friendly, and efficient. They handled my tasks seamlessly, helping me
                    achieve my business goals on time.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-20 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-center font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                Recognized Expertise
              </h2>
              <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5" role="list">
                {recognizedExpertiseLogos.map((award) => (
                  <li
                    key={award.title}
                    className="group overflow-hidden rounded-lg border border-slate-300/70 bg-slate-100 p-3"
                  >
                    <div className="flex h-36 items-center justify-center rounded-md bg-white px-3">
                      <Image
                        src={award.image}
                        alt={award.title}
                        width={180}
                        height={110}
                        className="max-h-24 w-auto max-w-full object-contain"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>


          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
