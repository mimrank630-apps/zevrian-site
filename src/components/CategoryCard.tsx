import type { Category } from "@/lib/types";

const categoryAccent: Record<string, string> = {
  "sports-outdoors": "from-sky-100 via-slate-100 to-zinc-300",
  "arts-crafts": "from-amber-100 via-stone-100 to-stone-300",
  "home-kitchen": "from-stone-100 via-neutral-100 to-zinc-300",
  "home-improvement": "from-zinc-100 via-stone-200 to-zinc-400",
  "office-products": "from-sky-50 via-slate-100 to-zinc-300",
  "pet-supplies": "from-emerald-50 via-stone-100 to-stone-300",
};

export function CategoryCard({ category }: { category: Category }) {
  return (
    <div className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl border border-charcoal-100 p-7">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          categoryAccent[category.slug] ?? "from-stone-100 to-stone-300"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/55 via-charcoal-900/5 to-transparent" />

      <div className="relative">
        <h3 className=" text-2xl font-semibold text-white">{category.name}</h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/80">
          {category.description}
        </p>
      </div>
    </div>
  );
}
