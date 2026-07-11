"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const trustedPlatforms = [
  {
    name: "Clutch",
    src: "/images/stats-clutch.webp",
    rating: 5,
    reviews: "45+ Reviews",
    starClass: "fill-[#E11D2E] text-[#E11D2E]",
  },
  {
    name: "Google",
    src: "/images/stats-google.webp",
    rating: 4,
    maxStars: 5,
    reviews: "395+ Reviews",
    starClass: "fill-[#FBBC04] text-[#FBBC04]",
  },
  {
    name: "Trustpilot",
    src: "/images/stats-trustpilot.webp",
    rating: 4.2,
    reviews: "5+ Reviews",
    variant: "trustpilot",
    starClass: "fill-[#00B67A] text-[#00B67A]",
  },
  {
    name: "DesignRush",
    src: "/images/stats-designrush.webp",
    rating: 4.9,
    reviews: "20+ Reviews",
    starClass: "fill-[#00C2CB] text-[#00C2CB]",
  },
  {
    name: "GoodFirms",
    src: "/images/stats-goodfirm.webp",
    rating: 5,
    reviews: "30+ Reviews",
    starClass: "fill-[#3B82F6] text-[#3B82F6]",
  },
];

function RatingStars({ rating, maxStars = 5, starClass, variant }) {
  if (variant === "trustpilot") {
    return (
      <div className="flex items-center gap-0.5" aria-hidden="true">
        {Array.from({ length: maxStars }, (_, i) => {
          const fill = Math.min(1, Math.max(0, rating - i));
          return (
            <span
              key={i}
              className="relative inline-flex h-3.5 w-3.5 items-center justify-center overflow-hidden rounded-[2px] bg-[#DCDCE6] sm:h-4 sm:w-4"
            >
              <span
                className="absolute inset-y-0 left-0 bg-[#00B67A]"
                style={{ width: `${fill * 100}%` }}
              />
              <Star className="relative z-10 h-2.5 w-2.5 fill-white text-white sm:h-3 sm:w-3" />
            </span>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: maxStars }, (_, i) => {
        const filled = i < Math.floor(rating);
        const partial = !filled && i < rating;
        return (
          <Star
            key={i}
            className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${
              filled || partial ? starClass : "fill-transparent text-slate-300"
            }`}
            strokeWidth={1.5}
          />
        );
      })}
    </div>
  );
}

export default function TrustedBy() {
  return (
    <section
      className="relative overflow-hidden pb-4 pt-10 sm:pb-6 sm:pt-12"
      aria-label="Trusted by review platforms"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-hero-mid/40 to-white" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-lg border border-slate-200/90 bg-[#f2f2f2] px-4 py-7 sm:px-6 sm:py-8 lg:px-8"
        >
          <ul
            className="grid grid-cols-2 items-stretch gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6"
            role="list"
          >
            {trustedPlatforms.map((platform, index) => (
              <motion.li
                key={platform.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="flex h-10 items-center justify-center sm:h-11">
                  <Image
                    src={platform.src}
                    alt={platform.name}
                    width={160}
                    height={40}
                    className="h-7 w-auto max-w-[140px] object-contain sm:h-8"
                  />
                </div>

                <div
                  className="mt-2.5 flex items-center gap-1.5"
                  aria-label={`${platform.rating} out of 5 rating`}
                >
                  <span className="text-sm font-semibold tabular-nums text-foreground sm:text-base">
                    {platform.rating}
                  </span>
                  <RatingStars
                    rating={platform.rating}
                    maxStars={platform.maxStars ?? 5}
                    starClass={platform.starClass}
                    variant={platform.variant}
                  />
                </div>

                <p className="mt-1.5 text-xs font-bold text-foreground sm:text-sm">
                  {platform.reviews}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
