"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Badge from "./Badge";
import CaseStudyCard from "./CaseStudyCard";
import { homepageCaseStudies } from "./caseStudiesData";
import "swiper/css";

export default function CaseStudies() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <section
      id="case-studies"
      className="relative overflow-hidden py-12 sm:py-16 lg:py-20"
      aria-labelledby="case-studies-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-hero-mid to-white" />
      <div className="pointer-events-none absolute -left-28 top-1/3 h-72 w-72 rounded-full bg-primary/5 blur-[90px]" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-64 w-64 rounded-full bg-accent/8 blur-[85px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl lg:col-span-5"
          >
            <Badge className="mb-4">Case Studies</Badge>
            <h2
              id="case-studies-heading"
              className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]"
            >
              Success Stories from{" "}
              <span className="bg-gradient-to-r from-primary-dark via-primary to-accent bg-clip-text text-transparent">
                Real Client Campaigns
              </span>
            </h2>
            <p className="mt-4 max-w-lg text-lg text-body">
              Explore how our remote teams help businesses scale execution, improve quality, and
              deliver reliable outcomes across marketing and operations.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={() => swiperInstance?.slidePrev()}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-white text-primary transition-all hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label="Previous case study"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => swiperInstance?.slideNext()}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-white text-primary transition-all hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label="Next case study"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden lg:col-span-7"
          >
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              onSwiper={setSwiperInstance}
              breakpoints={{
                768: { slidesPerView: 2, spaceBetween: 22 },
                1024: { slidesPerView: 2, spaceBetween: 24 },
              }}
              className="!pb-2 overflow-hidden"
            >
              {homepageCaseStudies.map((study) => (
                <SwiperSlide key={`${study.title}-${study.pdf || study.image}`} className="!h-auto">
                  <CaseStudyCard study={study} />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
