"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import ServiceSectionHeader from "./ServiceSectionHeader";
import TestimonialCard from "../TestimonialCard";
import "swiper/css";
import "swiper/css/pagination";

export default function ServiceTestimonials({ badge, title, description, items = [], titleId }) {
  if (items.length === 0) return null;

  return (
    <section
      className="relative overflow-hidden py-12 sm:py-16 lg:py-20"
      aria-labelledby={titleId}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-hero-end via-hero-mid to-white" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-primary/6 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-accent/8 blur-[90px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServiceSectionHeader badge={badge} title={title} description={description} titleId={titleId} />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="testimonials-swiper mt-10 sm:mt-12"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
            className="!pb-14"
          >
            {items.map((testimonial) => (
              <SwiperSlide key={testimonial.name} className="!h-auto">
                <TestimonialCard testimonial={testimonial} bordered />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
