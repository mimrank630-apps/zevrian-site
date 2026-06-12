import type { Product } from "@/lib/types";

interface ProductImageProps {
  product: Product;
  className?: string;
  /** Show the product initial monogram; off for very small thumbnails. */
  showMonogram?: boolean;
}

/**
 * Premium gradient placeholder used in place of real product photography.
 * Each product carries its own `accent` gradient for visual variety.
 */
export function ProductImage({
  product,
  className = "",
  showMonogram = true,
}: ProductImageProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${product.accent} ${className}`}
    >
      {/* Subtle brand watermark */}
      <svg
        className="absolute -right-6 -top-6 h-28 w-28 opacity-[0.06]"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M13.5 13.5H26.5L13.5 26.5H26.5"
          stroke="#111111"
          strokeWidth="2"
        />
      </svg>
      {showMonogram && (
        <span className="select-none font-display text-5xl font-medium text-charcoal-900/15">
          {product.name.charAt(0)}
        </span>
      )}
      {product.badge && (
        <span className="absolute left-4 top-4 rounded-full bg-charcoal-900/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
          {product.badge}
        </span>
      )}
    </div>
  );
}
