import Link from "next/link";

interface LogoProps {
  className?: string;
  /** Color for the wordmark text. The mark gold accent stays constant. */
  variant?: "dark" | "light";
}

/**
 * Zevrian brand mark — an inline SVG monogram (a faceted "Z" inside a
 * diamond) paired with a spaced wordmark. Fully vector, no image assets.
 */
export function Logo({ className = "", variant = "dark" }: LogoProps) {
  const wordmarkColor = variant === "light" ? "text-white" : "text-charcoal-900";

  return (
    <Link
      href="/"
      aria-label="Zevrian home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:rotate-[8deg]"
        aria-hidden="true"
      >
        <rect
          x="20"
          y="2"
          width="25.46"
          height="25.46"
          rx="4"
          transform="rotate(45 20 2)"
          stroke="#C6A43F"
          strokeWidth="1.75"
        />
        <path
          d="M13.5 13.5H26.5L13.5 26.5H26.5"
          stroke="#C6A43F"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className={`text-lg font-semibold tracking-[0.25em] ${wordmarkColor}`}
      >
        ZEVRIAN
      </span>
    </Link>
  );
}
