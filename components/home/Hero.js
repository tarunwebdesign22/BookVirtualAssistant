"use client";

import { motion } from "framer-motion";
import { Star, Building2, TrendingUp } from "lucide-react";
import Badge from "../Badge";
import CTAButton from "../CTAButton";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[min(100svh,920px)] items-center overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32"
      aria-labelledby="hero-heading"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src="/images/bannervideo.webm" type="video/webm" />
      </video>

      <div className="pointer-events-none absolute inset-0 bg-black/65" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Badge className="border-white/20 bg-white/10 text-white/90 shadow-lg shadow-black/10 backdrop-blur-md">
              Trusted by 300+ Businesses Worldwide
            </Badge>
          </motion.div>

          <motion.h1
            id="hero-heading"
            variants={itemVariants}
            className="font-heading mt-6 text-[2.1rem] font-bold leading-[1.1] tracking-tight text-white sm:text-[2.6rem] lg:text-[2.95rem] xl:text-[3.2rem]"
          >
            Hire{" "}
            <span className="bg-gradient-to-r from-white via-accent to-secondary bg-clip-text text-transparent">
              Elite Virtual Professionals
            </span>{" "}
            That Scale Your Business
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl"
          >
            Build a world-class remote team without the hiring headaches. We connect
            you with pre-vetted virtual experts who integrate seamlessly and deliver
            from day one.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <CTAButton href="#hire" variant="primary" size="lg">
              Hire Virtual Employee
            </CTAButton>
            <CTAButton
              href="#services"
              variant="secondary"
              size="lg"
              className="!border-white !bg-transparent !text-white hover:!border-white hover:!bg-white/10"
            >
              Explore Services
            </CTAButton>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 space-y-4">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-1.5" aria-label="4.9 out of 5 star rating">
                <div className="flex">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-white">4.9 Rating</span>
              </div>

              <div className="flex items-center gap-1.5 text-sm text-white/75">
                <Building2 className="h-4 w-4 text-accent" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-white">300+</strong> Companies
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-sm text-white/75">
                <TrendingUp className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-white">98%</strong> Client Satisfaction
                </span>
              </div>
            </div>

            <p className="text-sm text-white/60">
              Trusted by startups and enterprises worldwide.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
