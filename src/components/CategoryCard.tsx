import Link from "next/link";
import type { Category } from "@/lib/types";

const categoryAccent: Record<string, string> = {
  "kitchen-dining": "from-amber-100 via-stone-100 to-stone-300",
  "home-organization": "from-stone-100 via-neutral-100 to-zinc-300",
  "travel-outdoor": "from-teal-50 via-slate-100 to-slate-300",
  "everyday-essentials": "from-rose-50 via-stone-100 to-neutral-300",
  "office-products": "from-sky-50 via-slate-100 to-zinc-300",
};

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/products?category=${category.slug}`}
      className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl border border-charcoal-100 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal-900/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          categoryAccent[category.slug] ?? "from-stone-100 to-stone-300"
        } transition-transform duration-500 group-hover:scale-105`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/55 via-charcoal-900/5 to-transparent" />

      <div className="relative">
        <span className="text-xs font-semibold uppercase tracking-luxe text-gold-light">
          {category.tagline}
        </span>
        <h3 className="mt-2 text-2xl font-semibold text-white">{category.name}</h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/80">
          {category.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
          Explore collection
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            className="transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          >
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
