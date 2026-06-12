import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RatingStars } from "@/components/ui/RatingStars";
import { getCatalogStats } from "@/lib/products";

/**
 * Social proof via honest, aggregate numbers computed from the catalog.
 * No fabricated quotes or named testimonials (v6 radical-honesty guard).
 */
export function SocialProof() {
  const { avgRating, totalReviews, productCount, categoryCount } = getCatalogStats();

  const stats = [
    { value: avgRating.toFixed(1), label: "Average rating" },
    { value: `${totalReviews.toLocaleString()}+`, label: "Verified Amazon reviews" },
    { value: String(productCount), label: "Curated products" },
    { value: `${categoryCount}`, label: "Focused collections" },
  ];

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            eyebrow="Trusted globally"
            title="Validated by verified reviews"
            description="We don't publish testimonials we can't verify. These are aggregate ratings from real Amazon customers across the Zevrian catalog."
          />
          <div className="mt-6">
            <RatingStars rating={avgRating} />
          </div>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-charcoal-100 bg-charcoal-100 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-8 text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-4xl font-bold tracking-tight text-charcoal-900">
                {stat.value}
              </dd>
              <p className="mt-2 text-sm text-charcoal-400">{stat.label}</p>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
