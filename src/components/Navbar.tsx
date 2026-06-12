"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { navLinks, siteConfig } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent background scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-charcoal-100 bg-white/90 backdrop-blur-md"
          : "border-transparent bg-white"
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between lg:h-20">
        <Logo />

        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-gold after:transition-all after:duration-300 ${
                isActive(link.href)
                  ? "text-charcoal after:w-full"
                  : "text-charcoal-400 after:w-0 hover:text-charcoal hover:after:w-full"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href={siteConfig.amazonStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold !px-5 !py-2.5 text-xs"
          >
            Shop on Amazon
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-charcoal transition-all duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-charcoal transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-charcoal transition-all duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-charcoal-100 bg-white transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-screen" : "max-h-0 border-t-0"
        }`}
      >
        <div className="container-px flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-charcoal-50 text-charcoal"
                  : "text-charcoal-500 hover:bg-charcoal-50 hover:text-charcoal"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={siteConfig.amazonStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold mt-2"
          >
            Shop on Amazon
          </a>
        </div>
      </div>
    </header>
  );
}
