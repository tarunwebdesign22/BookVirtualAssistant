import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function SolutionCard({ item }) {
  return (
    <article className="group h-full overflow-hidden rounded-lg bg-white shadow-md shadow-black/8 ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/12">
      <Link
        href="/get-started"
        className="relative block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 28vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

          <span className="absolute right-2.5 top-2.5 inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/95 text-foreground shadow-md transition-all duration-300 group-hover:bg-black group-hover:text-white">
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            <span className="sr-only">Learn more about {item.title}</span>
          </span>

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/90 to-transparent px-3 pb-3 pt-10 sm:px-3.5 sm:pb-3.5 sm:pt-12">
            <h3 className="font-heading text-sm font-bold tracking-tight text-white sm:text-lg lg:text-xl">
              {item.title}
            </h3>
          </div>
        </div>
      </Link>
    </article>
  );
}
