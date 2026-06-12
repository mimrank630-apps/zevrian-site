import Link from "next/link";

interface LogoProps {
  className?: string;
  /** Wordmark color context. The gold accent stays constant. */
  variant?: "dark" | "light";
  /** Show the geometric Z mark beside the wordmark. */
  showMark?: boolean;
  /** Render as a plain element (no link) — e.g. inside the brand showcase. */
  asLink?: boolean;
}

/**
 * ZEVRIAN — premium geometric wordmark.
 *
 * Design language (v6): capital sans-serif wordmark, tight -0.05em kerning,
 * weight 700, charcoal with a single gold accent. Paired with an engineered
 * monoline "Z" mark (square terminals, no curves) that reads as precision.
 * Fully vector / CSS — scales perfectly from favicon to billboard.
 */
export function Logo({
  className = "",
  variant = "dark",
  showMark = true,
  asLink = true,
}: LogoProps) {
  const wordmarkColor = variant === "light" ? "text-white" : "text-charcoal-900";
  const markStroke = variant === "light" ? "#FFFFFF" : "#0F0F0F";

  const inner = (
    <span className="inline-flex items-center gap-2.5">
      {showMark && (
        <svg
          width="26"
          height="26"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
          aria-hidden="true"
        >
          {/* Engineered Z — square terminals, geometric, no curves */}
          <path
            d="M8 8H24L8 24H24"
            stroke={markStroke}
            strokeWidth="3"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
          {/* Single gold accent — precision detail */}
          <rect x="24" y="6.5" width="3" height="3" fill="#C6A43F" />
        </svg>
      )}
      <span
        className={`text-xl font-bold uppercase leading-none tracking-wordmark ${wordmarkColor}`}
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

/**
 * Icon-only mark for tight spaces (avatars, inline trust badges).
 */
export function LogoMark({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const stroke = variant === "light" ? "#FFFFFF" : "#0F0F0F";
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 8H24L8 24H24"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <rect x="24" y="6.5" width="3" height="3" fill="#C6A43F" />
    </svg>
  );
}
