import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-24">
      <Container>
        <div className="mx-auto max-w-lg text-center">
          <span className="font-display text-7xl font-medium text-gold">404</span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-charcoal-900">
            This page wandered off.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-charcoal-500">
            The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
            Let&rsquo;s get you back to something beautiful.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="btn btn-primary">
              Back to home
            </Link>
            <Link href="/products" className="btn btn-secondary">
              Browse products
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
