import Link from "next/link";

interface LogoProps {
  className?: string;
  /** Wordmark color context. The gold mark stays constant. */
  variant?: "dark" | "light";
  /** Show the diamond Z monogram beside the wordmark. */
  showMark?: boolean;
  /** Render as a plain element (no link) — e.g. inside the brand showcase. */
  asLink?: boolean;
}

const GOLD = "#C6A43F";

/**
 * ZEVRIAN brand mark — a gold diamond "Z" monogram paired with a spaced,
 * uppercase wordmark. Fully vector (inline SVG + CSS), scales perfectly from
 * favicon to billboard.
 */
export function Logo({
  className = "",
  variant = "dark",
  showMark = true,
  asLink = true,
}: LogoProps) {
  const wordmarkColor = variant === "light" ? "text-white" : "text-charcoal-900";

  const inner = (
    <span className="inline-flex items-center gap-2.5">
      {showMark && <DiamondMark className="h-9 w-9 shrink-0" />}
      <span
        className={`text-lg font-semibold uppercase tracking-[0.25em] ${wordmarkColor}`}
      >
        Zevrian
      </span>
    </span>
  );

  if (!asLink) return <span className={className}>{inner}</span>;

  return (
    <Link
      href="/"
      aria-label="Zevrian — home"
      className={`group inline-flex items-center transition-opacity duration-200 hover:opacity-80 ${className}`}
    >
      {inner}
    </Link>
  );
}

function DiamondMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="20"
        y="2"
        width="25.46"
        height="25.46"
        rx="4"
        transform="rotate(45 20 2)"
        stroke={GOLD}
        strokeWidth="2"
      />
      <path
        d="M13.5 13.5H26.5L13.5 26.5H26.5"
        stroke={GOLD}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Icon-only mark for tight spaces (avatars, favicons, inline badges).
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return <DiamondMark className={className} />;
}
