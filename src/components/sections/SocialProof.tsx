import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Honest trust section for a newly launched brand — no reviews or ratings yet.
 * We earn trust with verifiable guarantees and standards, not fabricated proof
 * (v6 radical-honesty guard).
 */
const promises = [
  {
    title: "No hype, ever",
    detail:
      "No fake reviews, no countdown timers, no false urgency. Just honest products and honest information.",
    icon: <path d="M9 12l2 2 4-4M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4Z" />,
  },
  {
    title: "Amazon A-to-z Guarantee",
    detail:
      "Every order is protected by Amazon's purchase guarantee, with straightforward returns and refunds.",
    icon: <path d="M3 7v6h6M21 17v-6h-6M21 7a9 9 0 0 0-15-3M3 17a9 9 0 0 0 15 3" />,
  },
  {
    title: "Responsive support",
    detail:
      "Real people, not bots. Reach us by email or contact form and we reply within one business day.",
    icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" />,
  },
  {
    title: "Secure checkout",
    detail:
      "Payments and personal data are handled entirely by Amazon's secure, trusted checkout.",
    icon: <path d="M5 11V7a7 7 0 0 1 14 0v4M5 11h14v10H5V11Zm7 4v3" />,
  },
];

export function SocialProof() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="The Zevrian promise"
          title="Built on trust, not hype"
          description="We're a new brand — so instead of borrowed credibility, we lead with the things you can actually verify."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-charcoal-100 bg-charcoal-100 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((promise) => (
            <div key={promise.title} className="bg-white p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-charcoal-50 text-gold-600">
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
                  {promise.icon}
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-semibold text-charcoal-900">
                {promise.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
                {promise.detail}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
