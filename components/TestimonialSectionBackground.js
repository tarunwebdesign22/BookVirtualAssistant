import Image from "next/image";

export default function TestimonialSectionBackground({ overlayOpacity = 75 }) {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Image
        src="/images/testimonial-bg.webp"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        priority={false}
      />
      <div
        className="absolute inset-0 bg-white"
        style={{ opacity: overlayOpacity / 100 }}
        aria-hidden="true"
      />
    </div>
  );
}
