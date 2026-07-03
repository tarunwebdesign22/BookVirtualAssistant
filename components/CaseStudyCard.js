import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CaseStudyCard({ study }) {
  const content = (
    <>
      <div className="absolute inset-0">
        <Image
          src={study.image}
          alt={study.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-cyan-200/35 via-slate-700/25 to-black/80" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <h3 className="font-heading text-xl font-semibold leading-tight text-white drop-shadow-[0_1px_10px_rgba(0,0,0,0.45)] sm:text-2xl">
          {study.title}
        </h3>
        <p className="mt-3 max-h-[5.5rem] overflow-hidden text-sm leading-relaxed text-white/90 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4] sm:text-base">
          {study.description}
        </p>

        <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/95 transition-all duration-300 group-hover:gap-3 group-hover:text-white sm:mt-5 sm:text-base">
          Read more
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </>
  );

  const className =
    "group relative block h-[400px] overflow-hidden rounded-2xl border border-white/60 bg-slate-900 shadow-lg shadow-primary/10 transition-all duration-400 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20 sm:h-[430px]";

  if (study.pdf) {
    return (
      <article>
        <Link
          href={study.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          aria-label={`Open ${study.title} case study`}
        >
          {content}
        </Link>
      </article>
    );
  }

  return <article className={className}>{content}</article>;
}
