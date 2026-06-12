interface AmazonButtonProps {
  href: string;
  className?: string;
  /** Visual style: gold (primary CTA) or outline (compact card use). */
  tone?: "gold" | "dark" | "outline";
  label?: string;
  fullWidth?: boolean;
}

export function AmazonButton({
  href,
  className = "",
  tone = "gold",
  label = "Buy on Amazon",
  fullWidth = false,
}: AmazonButtonProps) {
  const toneClass =
    tone === "gold"
      ? "btn-gold"
      : tone === "dark"
        ? "btn-primary"
        : "btn-secondary";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${toneClass} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 6h18l-1.5 12.5a2 2 0 0 1-2 1.75H6.5a2 2 0 0 1-2-1.75L3 6z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M8 6V5a4 4 0 0 1 8 0v1" stroke="currentColor" strokeWidth="1.6" />
      </svg>
      {label}
    </a>
  );
}
