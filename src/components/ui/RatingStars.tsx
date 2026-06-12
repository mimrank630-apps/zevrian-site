interface RatingStarsProps {
  rating: number;
  reviewCount?: number;
  className?: string;
}

const STAR_PATH =
  "M12 2l2.95 5.98 6.6.96-4.78 4.66 1.13 6.57L12 17.98l-5.9 3.1 1.13-6.57L2.45 8.94l6.6-.96L12 2z";

/**
 * Renders a 5-star rating using two stacked rows (gray base + gold overlay
 * clipped to the rating percentage). This avoids per-element SVG gradient ids,
 * keeping server and client output identical (no hydration mismatch).
 */
export function RatingStars({ rating, reviewCount, className = "" }: RatingStarsProps) {
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100));

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative inline-flex" aria-hidden="true">
        <StarRow color="#e6e6e6" />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${pct}%` }}
        >
          <StarRow color="#C6A43F" />
        </div>
      </div>
      <span className="whitespace-nowrap text-xs font-medium text-charcoal-500">
        {rating.toFixed(1)}
        {typeof reviewCount === "number" && (
          <span className="text-charcoal-300"> ({reviewCount})</span>
        )}
      </span>
      <span className="sr-only">
        Rated {rating.toFixed(1)} out of 5
        {typeof reviewCount === "number" ? ` from ${reviewCount} reviews` : ""}
      </span>
    </div>
  );
}

function StarRow({ color }: { color: string }) {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="15"
          height="15"
          viewBox="0 0 24 24"
          className="-ml-px shrink-0"
          fill={color}
        >
          <path d={STAR_PATH} />
        </svg>
      ))}
    </div>
  );
}
