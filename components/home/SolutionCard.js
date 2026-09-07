import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

function LearnMore({ href, title, dark = false }) {
  return (
    <Link
      href={href}
      className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
        dark ? "text-sky-400 hover:text-sky-300" : "text-primary hover:text-primary-dark"
      }`}
    >
      Learn more
      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      <span className="sr-only">about {title}</span>
    </Link>
  );
}

function CardShell({ children, dark = false, className = "" }) {
  return (
    <article
      className={`group h-full overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-0.5 ${
        dark
          ? "bg-[#0b1220] shadow-lg shadow-black/25 ring-1 ring-white/10"
          : "bg-[#ffffff] shadow-sm shadow-black/5 ring-1 ring-black/5 hover:shadow-md hover:shadow-black/8"
      } ${className}`}
    >
      {children}
    </article>
  );
}

export default function SolutionCard({ item }) {
  const { title, description, image, href = "/get-started", variant = "standard", theme = "light" } =
    item;
  const dark = theme === "dark";

  if (variant === "horizontal" || variant === "horizontal-reverse") {
    const reverse = variant === "horizontal-reverse";

    return (
      <CardShell dark={dark} className="min-h-[200px]">
        <div
          className={`flex h-full flex-col gap-4 p-4 sm:flex-row sm:items-center sm:gap-5 sm:p-5 ${
            reverse ? "sm:flex-row-reverse" : ""
          }`}
        >
          <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden rounded-lg sm:aspect-auto sm:h-[168px] sm:w-[38%] sm:max-w-[200px]">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(min-width: 1024px) 18vw, 90vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className={`flex min-w-0 flex-1 flex-col justify-center ${dark ? "text-white" : ""}`}>
            <h3
              className={`font-heading text-lg font-bold tracking-tight sm:text-xl ${
                dark ? "text-white" : "text-foreground"
              }`}
            >
              {title}
            </h3>
            <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-white/70" : "text-body"}`}>
              {description}
            </p>
            <LearnMore href={href} title={title} dark={dark} />
          </div>
        </div>
      </CardShell>
    );
  }

  if (variant === "featured") {
    return (
      <CardShell dark={dark} className="flex flex-col">
        <div className="relative m-4 mb-0 aspect-[16/11] overflow-hidden rounded-lg sm:m-5 sm:mb-0 sm:aspect-auto sm:min-h-[280px] lg:min-h-[320px] lg:flex-1">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
        </div>
        <div className={`px-5 pb-5 pt-5 sm:px-6 sm:pb-6 ${dark ? "text-white" : ""}`}>
          <h3
            className={`font-heading text-xl font-bold tracking-tight sm:text-2xl ${
              dark ? "text-white" : "text-foreground"
            }`}
          >
            {title}
          </h3>
          <p className={`mt-2 max-w-md text-sm leading-relaxed sm:text-[0.95rem] ${dark ? "text-white/70" : "text-body"}`}>
            {description}
          </p>
          <LearnMore href={href} title={title} dark={dark} />
        </div>
      </CardShell>
    );
  }

  // standard / bottom cards
  return (
    <CardShell dark={dark} className="flex flex-col">
      <div className="relative m-4 mb-0 aspect-[16/11] overflow-hidden rounded-lg sm:m-5 sm:mb-0">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className={`flex flex-1 flex-col px-5 pb-5 pt-5 sm:px-6 sm:pb-6 ${dark ? "text-white" : ""}`}>
        <h3
          className={`font-heading text-lg font-bold tracking-tight sm:text-xl ${
            dark ? "text-white" : "text-foreground"
          }`}
        >
          {title}
        </h3>
        <p className={`mt-2 flex-1 text-sm leading-relaxed ${dark ? "text-white/70" : "text-body"}`}>
          {description}
        </p>
        <LearnMore href={href} title={title} dark={dark} />
      </div>
    </CardShell>
  );
}
