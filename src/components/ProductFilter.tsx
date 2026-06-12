"use client";

import Link from "next/link";
import { categories } from "@/lib/products";
import type { CategorySlug } from "@/lib/types";

const tabs: { label: string; value: CategorySlug | "all" }[] = [
  { label: "All", value: "all" },
  ...categories.map((c) => ({ label: c.name, value: c.slug })),
];

export function ProductFilter({ active }: { active: CategorySlug | "all" }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {tabs.map((tab) => {
        const href = tab.value === "all" ? "/products" : `/products?category=${tab.value}`;
        const isActive = tab.value === active;
        return (
          <Link
            key={tab.value}
            href={href}
            scroll={false}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
              isActive
                ? "bg-charcoal-900 text-white"
                : "border border-charcoal-200 bg-white text-charcoal-500 hover:border-charcoal-900 hover:text-charcoal-900"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
