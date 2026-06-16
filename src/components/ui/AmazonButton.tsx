interface AmazonButtonProps {
  /** @deprecated Pre-launch: href is intentionally ignored. All buttons are disabled until Q3 2026 launch. */
  href?: string;
  className?: string;
  tone?: "gold" | "dark" | "outline";
  label?: string;
  fullWidth?: boolean;
}

export function AmazonButton({
  className = "",
  tone = "gold",
  label = "Coming Soon on Amazon",
  fullWidth = false,
}: AmazonButtonProps) {
  return (
    <div className={`${fullWidth ? "w-full" : ""}`}>
      <button
        type="button"
        disabled
        aria-disabled="true"
        className={`btn ${fullWidth ? "w-full" : ""} cursor-not-allowed opacity-60 bg-charcoal-200 text-charcoal-500 border-charcoal-200 ${className}`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 6h18l-1.5 12.5a2 2 0 0 1-2 1.75H6.5a2 2 0 0 1-2-1.75L3 6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M8 6V5a4 4 0 0 1 8 0v1" stroke="currentColor" strokeWidth="1.6" />
        </svg>
        {label}
      </button>
      <p className="mt-1.5 text-center text-xs text-charcoal-400">Available Q3 2026</p>
    </div>
  );
}
