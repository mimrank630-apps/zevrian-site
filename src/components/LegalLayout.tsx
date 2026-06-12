import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

interface LegalLayoutProps {
  title: string;
  updated: string;
  children: ReactNode;
}

export function LegalLayout({ title, updated, children }: LegalLayoutProps) {
  return (
    <>
      <section className="border-b border-charcoal-100 bg-charcoal-50 py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <span className="eyebrow">Legal</span>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-charcoal-900 sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-sm text-charcoal-400">Last updated: {updated}</p>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="legal-prose max-w-3xl space-y-8 text-charcoal-600">
            {children}
          </div>
        </Container>
      </section>
    </>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-charcoal-900">{heading}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
