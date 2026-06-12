import Link from "next/link";

interface LogoProps {
  className?: string;
  /** Wordmark color context. The gold tile mark stays constant. */
  variant?: "dark" | "light";
  /** Show the gold Z tile beside the wordmark. */
  showMark?: boolean;
  /** Render as a plain element (no link) — e.g. inside the brand showcase. */
  asLink?: boolean;
}

const GOLD = "#C6A43F";
const CHARCOAL = "#0F0F0F";

/**
 * ZEVRIAN brand mark — a solid gold "tile" monogram holding a clean geometric
 * Z, paired with an uppercase wordmark. The tile reads clearly on both light
 * and dark backgrounds (premium app-icon language). Fully vector / CSS.
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
      {showMark && <TileMark className="h-9 w-9 shrink-0" />}
      <span
        className={`text-lg font-semibold uppercase tracking-[0.18em] ${wordmarkColor}`}
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

function TileMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="11" fill={GOLD} />
      <path
        d="M13 14H27L13 26H27"
        stroke={CHARCOAL}
        strokeWidth="2.8"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

/**
 * Icon-only mark for tight spaces (avatars, favicons, inline badges).
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return <TileMark className={className} />;
}
