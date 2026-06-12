import { Container } from "@/components/ui/Container";

/**
 * A slim "We believe..." statement strip — the brand's stance, stated plainly.
 * Calm authority, no hype (v6 voice guard).
 */
export function BrandPhilosophyStrip() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="eyebrow">We believe</span>
          <p className="mt-5 text-balance text-2xl font-semibold leading-snug tracking-tight text-charcoal-900 sm:text-3xl">
            The objects you use every day should be beautiful, functional, and
            built with intention. Most brands chase volume.{" "}
            <span className="text-gold-600">Zevrian chases legacy.</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
