import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Brand",
  description:
    "The Zevrian brand identity — logo, color system, typography, and the philosophy behind our luxury minimalist design.",
  keywords: [
    "Zevrian brand",
    "brand identity",
    "logo design",
    "color system",
    "typography",
    "luxury minimalist design",
  ],
  alternates: { canonical: "/brand" },
  openGraph: {
    title: "Brand — Zevrian",
    description:
      "The Zevrian brand identity — logo, color system, typography, and design philosophy.",
    url: `${siteConfig.url}/brand`,
    type: "website",
  },
};

const palette = [
  { name: "Charcoal", hex: "#0F0F0F", className: "bg-charcoal-900", text: "text-white" },
  { name: "Gold", hex: "#C6A43F", className: "bg-gold", text: "text-charcoal-900" },
  { name: "Pure White", hex: "#FFFFFF", className: "bg-white border border-charcoal-200", text: "text-charcoal-900" },
  { name: "Stone", hex: "#FAFAFA", className: "bg-charcoal-50", text: "text-charcoal-900" },
];

export default function BrandPage() {
  return (
    <>
      <section className="bg-charcoal-950 py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl">
            <span className="eyebrow text-gold-light">Brand identity</span>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              A quiet confidence, expressed in every detail.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-charcoal-300">
              The Zevrian identity is built on luxury minimalism — generous
              space, restrained color, and typography that lets the products
              speak. Here&rsquo;s the system behind the brand.
            </p>
          </div>
        </Container>
      </section>

      {/* Logo */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="The mark"
            title="The Zevrian logo"
            description="A gold diamond monogram framing a clean Z, paired with a spaced, uppercase wordmark — a balance of precision and prestige. Rendered as inline SVG for perfect clarity at any size, from favicon to billboard."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="flex items-center justify-center rounded-2xl border border-charcoal-100 bg-white p-16">
              <Logo />
            </div>
            <div className="flex items-center justify-center rounded-2xl bg-charcoal-950 p-16">
              <Logo variant="light" />
            </div>
          </div>
        </Container>
      </section>

      {/* Color */}
      <section className="bg-charcoal-50 py-20 sm:py-28">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Color system"
            title="Charcoal, gold, and space"
            description="A disciplined palette: deep charcoal for authority, a single warm gold for moments of luxury, and abundant neutral space to let everything breathe."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {palette.map((color) => (
              <div key={color.name} className="overflow-hidden rounded-2xl border border-charcoal-100 bg-white">
                <div className={`flex h-32 items-end p-4 ${color.className}`}>
                  <span className={`text-sm font-medium ${color.text}`}>
                    {color.name}
                  </span>
                </div>
                <div className="p-4">
                  <p className="font-mono text-sm text-charcoal-700">{color.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Typography */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Typography"
            title="System sans-serif, by design"
            description="Zevrian uses the native system font stack — no web fonts. It loads instantly, renders crisply on every device, and keeps the interface fast. Serif is intentionally avoided: premium minimalism is sans-serif."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="card p-9">
              <span className="eyebrow">Display · System Sans (700)</span>
              <p className="mt-4 font-sans text-5xl font-bold tracking-tight text-charcoal-900">
                Aa
              </p>
              <p className="mt-4 font-sans text-base leading-relaxed text-charcoal-500">
                Headlines use tight tracking and bold weight for confident,
                engineered hierarchy. Rendered with the platform&rsquo;s native
                UI font for zero load cost.
              </p>
            </div>
            <div className="card p-9">
              <span className="eyebrow">Body · System Sans (400)</span>
              <p className="mt-4 font-sans text-5xl font-normal text-charcoal-900">
                Aa
              </p>
              <p className="mt-4 font-sans text-base leading-relaxed text-charcoal-500">
                Body copy stays at 16px or larger with generous line-height for
                comfortable, accessible reading across long-form content.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="bg-charcoal-950 py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow text-gold-light">Philosophy</span>
            <p className="mt-6 font-display text-3xl leading-snug text-white sm:text-4xl">
              &ldquo;Luxury is not excess. It is the quiet certainty that
              everything has been considered.&rdquo;
            </p>
            <p className="mt-6 text-sm uppercase tracking-luxe text-charcoal-400">
              The {siteConfig.name} design philosophy
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
