import type { Product } from "@/lib/types";

/**
 * Buy Direct button — disabled pre-launch. The direct checkout flow will be
 * enabled once a real payment provider is integrated post-launch.
 */
export function BuyDirectButton({ product }: { product: Product }) {
  return (
    <button
      type="button"
      disabled
      aria-disabled="true"
      className="btn btn-secondary w-full cursor-not-allowed opacity-60"
    >
      Buy Direct — Coming Soon
    </button>
  );
}
