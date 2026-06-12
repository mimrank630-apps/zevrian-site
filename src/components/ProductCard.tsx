import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/products";
import { ProductImage } from "@/components/ui/ProductImage";
import { RatingStars } from "@/components/ui/RatingStars";
import { AmazonButton } from "@/components/ui/AmazonButton";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card group flex flex-col overflow-hidden hover:-translate-y-1 hover:border-charcoal-200 hover:shadow-xl hover:shadow-charcoal-900/5">
      <Link
        href={`/products/${product.slug}`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        aria-label={`View ${product.name}`}
      >
        <ProductImage
          product={product}
          className="aspect-square transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <RatingStars rating={product.rating} reviewCount={product.reviewCount} />

        <h3 className="mt-3 text-base font-semibold leading-snug text-charcoal-900">
          <Link
            href={`/products/${product.slug}`}
            className="transition-colors hover:text-gold-600 focus:outline-none focus-visible:underline"
          >
            {product.name}
          </Link>
        </h3>

        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-charcoal-400">
          {product.shortDescription}
        </p>

        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-lg font-semibold text-charcoal-900">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice && (
            <span className="text-sm text-charcoal-300 line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>

        <div className="mt-5 flex flex-col gap-2.5 pt-1">
          <AmazonButton href={product.amazonUrl} fullWidth className="!py-3 text-xs" />
          <Link
            href={`/products/${product.slug}`}
            className="btn btn-secondary w-full !py-3 text-xs"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
