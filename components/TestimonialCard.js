import { Star, Quote, User } from "lucide-react";

export default function TestimonialCard({ testimonial, bordered = false }) {
  const subtitle =
    testimonial.subtitle ||
    [testimonial.role, testimonial.company, testimonial.location].filter(Boolean).join(", ");
  const rating = testimonial.rating ?? 5;

  return (
    <article
      className={`group relative flex h-full flex-col rounded-2xl bg-white p-6 transition-all duration-300 sm:p-8 ${
        bordered
          ? "border border-primary/25 shadow-md shadow-primary/5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
          : "border border-white/60 shadow-lg shadow-primary/5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10"
      }`}
    >
      <div className="absolute right-0 top-0 h-24 w-24 overflow-hidden rounded-tr-2xl">
        <div className="absolute -right-8 -top-8 h-16 w-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10" />
      </div>

      <div className="relative flex items-start gap-4">
        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/15 to-accent/20 ring-2 ring-primary/10">
          <User className="h-7 w-7 text-primary" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-heading text-lg font-semibold text-foreground">— {testimonial.name}</p>
          {subtitle && <p className="mt-0.5 text-sm text-body">{subtitle}</p>}
          <div className="mt-2 flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: rating }, (_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
            ))}
          </div>
        </div>
      </div>

      <blockquote className="relative mt-6 flex-1">
        <Quote className="absolute -left-1 -top-2 h-8 w-8 text-primary/20" aria-hidden="true" />
        <p className="relative pl-6 text-base italic leading-relaxed text-body">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>
    </article>
  );
}
