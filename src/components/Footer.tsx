import Link from "next/link";
import { Logo } from "@/components/Logo";
import { footerLinks, fullAddress, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal-800 bg-charcoal-950 text-charcoal-200">
      <div className="container-px py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-charcoal-300">
              {siteConfig.tagline} Genuine branded products sold on Amazon
              under {siteConfig.amazonStoreName}.
            </p>
            <Link
              href="/contact"
              className="btn btn-gold mt-6 !px-5 !py-2.5 text-xs"
            >
              Brand Partnerships
            </Link>
          </div>

          <FooterColumn title="Categories" links={footerLinks.shop} />
          <FooterColumn title="Company" links={footerLinks.company} />

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-luxe text-gold">
              Contact
            </h3>
            <address className="mt-5 space-y-2 text-sm not-italic leading-relaxed text-charcoal-300">
              <p className="font-medium text-charcoal-100">
                {siteConfig.legalName}
              </p>
              <p>{siteConfig.address.line1}</p>
              <p>
                {siteConfig.address.city}, {siteConfig.address.state}{" "}
                {siteConfig.address.zip}
              </p>
              <p className="mt-2 text-xs text-charcoal-300">
                Wyoming LLC — Filing ID: 2026-001998631
              </p>
              <p className="text-xs text-charcoal-300">
                Incorporated: June 5, 2026
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="block pt-1 text-gold transition-colors hover:text-gold-light"
              >
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="block text-gold transition-colors hover:text-gold-light"
              >
                {siteConfig.phone}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-charcoal-800 pt-8 text-sm text-charcoal-400 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} {siteConfig.legalName}. All rights reserved. Registered
            in {siteConfig.address.stateLong}, {siteConfig.address.country}.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-charcoal-300">
          {siteConfig.legalName} is an Amazon FBA wholesale retailer of
          authentic branded products, sold through our{" "}
          {siteConfig.amazonStoreName} storefront on Amazon. Address shown is
          our registered office and mailing address: {fullAddress}.
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-luxe text-gold">
        {title}
      </h3>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-charcoal-300 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
