import { Container } from "@/components/ui/Container";

const signals = [
  {
    label: "Fulfilled by Amazon",
    detail: "Fast shipping, easy returns",
    icon: (
      <path d="M3 6h18l-1.5 12.5a2 2 0 0 1-2 1.75H6.5a2 2 0 0 1-2-1.75L3 6Zm5 0V5a4 4 0 0 1 8 0v1" />
    ),
  },
  {
    label: "US-Registered LLC",
    detail: "Sheridan, Wyoming, USA",
    icon: <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" />,
  },
  {
    label: "Premium Materials",
    detail: "Engineered to last",
    icon: <path d="m12 2 2.4 7.4H22l-6 4.6 2.3 7.4-6.3-4.6L5.7 21 8 14 2 9.4h7.6L12 2Z" />,
  },
];

export function TrustBar() {
  return (
    <section className="border-y border-charcoal-100 bg-white">
      <Container>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-8 py-10 lg:grid-cols-3">
          {signals.map((signal) => (
            <li key={signal.label} className="flex items-center gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-charcoal-50 text-gold-600">
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
                  {signal.icon}
                </svg>
              </span>
              <div>
                <p className="text-sm font-semibold text-charcoal-900">{signal.label}</p>
                <p className="text-xs text-charcoal-400">{signal.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
