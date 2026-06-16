import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

const points = [
  {
    title: "Fulfilled by Amazon",
    detail:
      "Every order will ship through Amazon's global logistics network — the same reliability you already trust.",
    icon: <path d="M3 6h18l-1.5 12.5a2 2 0 0 1-2 1.75H6.5a2 2 0 0 1-2-1.75L3 6Zm5 0V5a4 4 0 0 1 8 0v1" />,
  },
  {
    title: "Easy returns",
    detail:
      "Backed by Amazon's straightforward return policy and buyer protection on every purchase, once live.",
    icon: <path d="M3 7v6h6M21 17v-6h-6M21 7a9 9 0 0 0-15-3M3 17a9 9 0 0 0 15 3" />,
  },
];

/**
 * Dedicated explainer: why Amazon is our fulfillment partner (trust transfer),
 * positioned as a partner — not the brand itself.
 */
export function AmazonTrustSection() {
  return (
    <section className="bg-charcoal-950 py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-gold-light">Why Amazon</span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Premium, and accessible — launching via {siteConfig.amazonStoreName}.
          </h2>
          <p className="mt-4 text-balance leading-relaxed text-charcoal-300">
            Most premium brands are hard to reach. We will use Amazon&rsquo;s
            world-class fulfillment so you get premium design with the speed,
            protection, and ease you already rely on. Amazon is our partner —
            not the brand.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-charcoal-800 bg-charcoal-800 sm:grid-cols-2">
          {points.map((point) => (
            <div key={point.title} className="bg-charcoal-950 p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-gold">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {point.icon}
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-300">
                {point.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button type="button" disabled aria-disabled="true" className="btn cursor-not-allowed opacity-60 bg-charcoal-700 text-charcoal-400">
            Coming Soon on Amazon
          </button>
          <p className="mt-2 text-sm text-charcoal-400">Available Q3 2026</p>
        </div>
      </Container>
    </section>
  );
}
