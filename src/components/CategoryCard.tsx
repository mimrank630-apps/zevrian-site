import type { ReactNode } from "react";
import type { Category, CategorySlug } from "@/lib/types";

const categoryAccent: Record<CategorySlug, string> = {
  "sports-outdoors": "from-sky-50 via-white to-slate-100",
  "arts-crafts": "from-amber-50 via-white to-stone-100",
  "home-kitchen": "from-stone-50 via-white to-neutral-100",
  "home-improvement": "from-zinc-50 via-white to-stone-100",
  "office-products": "from-slate-50 via-white to-sky-50",
  "pet-supplies": "from-emerald-50 via-white to-stone-100",
};

/** Original line illustrations, one per category (no third-party artwork). */
const categoryArt: Record<CategorySlug, ReactNode> = {
  "sports-outdoors": (
    <>
      <path d="M8 52 26 22l10 16 6-8 14 22Z" />
      <path d="m21 30 5-8 5 8" />
      <circle cx="46" cy="16" r="5" />
      <path d="M4 52h56" />
    </>
  ),
  "arts-crafts": (
    <>
      <path d="M40 8 52 20 26 46l-14 4 4-14Z" />
      <path d="m36 12 12 12" />
      <circle cx="16" cy="18" r="6" />
      <circle cx="14" cy="16" r="1.2" />
      <circle cx="19" cy="17" r="1.2" />
      <path d="M44 48c4 0 6-2 8-6" />
    </>
  ),
  "home-kitchen": (
    <>
      <path d="M12 30h40v6a14 14 0 0 1-14 14H26a14 14 0 0 1-14-14Z" />
      <path d="M52 34h6" />
      <path d="M8 30h48" />
      <path d="M24 22c0-4 4-4 4-8M34 22c0-4 4-4 4-8" />
    </>
  ),
  "home-improvement": (
    <>
      <path d="M38 10a10 10 0 0 0-10 13L10 41a4 4 0 0 0 6 6l18-18a10 10 0 0 0 13-10l-6 4-5-1-1-5Z" />
      <path d="M40 40l12 12M46 46l-4 4M50 42l-4 4" />
    </>
  ),
  "office-products": (
    <>
      <rect x="10" y="12" width="30" height="40" rx="2" />
      <path d="M16 22h18M16 30h18M16 38h12" />
      <path d="m44 46 10-28 4 1.5-10 28-5 3Z" />
    </>
  ),
  "pet-supplies": (
    <>
      <ellipse cx="32" cy="40" rx="11" ry="9" />
      <circle cx="18" cy="26" r="5" />
      <circle cx="27" cy="18" r="5" />
      <circle cx="37" cy="18" r="5" />
      <circle cx="46" cy="26" r="5" />
    </>
  ),
};

export function CategoryCard({ category, id }: { category: Category; id?: string }) {
  return (
    <div
      id={id}
      className="group relative flex aspect-[4/5] scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-charcoal-100 bg-white transition-shadow duration-300 hover:shadow-lg"
    >
      <div
        className={`relative flex flex-1 items-center justify-center bg-gradient-to-br ${
          categoryAccent[category.slug] ?? "from-stone-50 to-stone-100"
        }`}
      >
        <svg
          viewBox="0 0 64 64"
          className="h-28 w-28 text-gold-600 transition-transform duration-500 group-hover:scale-105 sm:h-32 sm:w-32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {categoryArt[category.slug]}
        </svg>
      </div>
      <div className="border-t border-charcoal-100 p-6">
        <h3 className="text-xl font-semibold text-charcoal-900">{category.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-charcoal-500">{category.description}</p>
      </div>
    </div>
  );
}
