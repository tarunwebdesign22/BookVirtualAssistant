import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function SolutionCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/60 bg-white shadow-lg shadow-primary/8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/15">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 28vw, (min-width: 768px) 40vw, 85vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <span
          className={`absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br shadow-md backdrop-blur-sm ${item.accent}`}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-heading text-lg font-semibold text-foreground sm:text-xl">{item.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-body line-clamp-3">{item.description}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all group-hover:gap-2.5">
          Learn more
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </article>
  );
}
