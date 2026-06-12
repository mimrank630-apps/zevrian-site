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
              {siteConfig.tagline} Premium private-label essentials, available
              on Amazon under {siteConfig.amazonStoreName}.
            </p>
            <a
              href={siteConfig.amazonStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold mt-6 !px-5 !py-2.5 text-xs"
            >
              Explore on Amazon
            </a>
          </div>

          <FooterColumn title="Shop" links={footerLinks.shop} />
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
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-block pt-1 text-gold transition-colors hover:text-gold-light"
              >
                {siteConfig.email}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-charcoal-800 pt-8 text-sm text-charcoal-400 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} {siteConfig.legalName}. All rights reserved. Located
            in {siteConfig.address.city}, {siteConfig.address.stateLong}, {siteConfig.address.country}.
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

        <p className="mt-6 text-xs leading-relaxed text-charcoal-500">
          {siteConfig.legalName} operates a private-label and Amazon FBA
          business. Product availability and pricing are managed through our
          {" "}
          {siteConfig.amazonStoreName} storefront on Amazon. Address shown is
          the registered principal address: {fullAddress}.
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
          <li key={link.href}>
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
