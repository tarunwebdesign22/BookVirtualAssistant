"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Badge from "./Badge";
import TestimonialCard from "./TestimonialCard";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "John Smith",
    role: "IT Manager",
    company: "Tech Solutions Inc.",
    quote:
      "Book Virtual Assistant transformed how we scale our operations. Their team integrated seamlessly and delivered results from week one. Truly exceptional service.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "CEO",
    company: "GrowthLab Digital",
    quote:
      "We hired three virtual professionals through BVA and saw a 40% boost in productivity. The vetting process is thorough and the support is outstanding.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Operations Director",
    company: "Meridian Healthcare",
    quote:
      "Reliable, skilled, and professional — exactly what we needed. Our virtual assistants handle admin, scheduling, and client follow-ups flawlessly every day.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Founder",
    company: "BrightPath Consulting",
    quote:
      "The best decision we made for our startup. BVA helped us build a remote team without the overhead of traditional hiring. Highly recommend to any business.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-12 sm:py-16 lg:py-20"
      aria-labelledby="testimonials-heading"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-hero-end via-hero-mid to-white" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-primary/6 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-accent/8 blur-[90px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <Badge className="mb-4">Client Testimonials</Badge>
          <h2
            id="testimonials-heading"
            className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]"
          >
            Real Feedback,{" "}
            <span className="bg-gradient-to-r from-primary-dark via-primary to-accent bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          <p className="mt-4 text-lg text-body">
            Our clients&apos; success stories speak for our dedication and expertise.
          </p>
        </motion.div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="testimonials-swiper mt-10 sm:mt-12"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 24 },
              768: { slidesPerView: 2, spaceBetween: 28 },
              1024: { slidesPerView: 2, spaceBetween: 32 },
            }}
            className="!pb-14"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.name} className="!h-auto">
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
