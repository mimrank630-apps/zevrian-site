interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto text-center items-center" : "text-left items-start";

  return (
    <div className={`flex max-w-2xl flex-col ${alignment} ${className}`}>
      {eyebrow && <span className="eyebrow mb-3">{eyebrow}</span>}
      <h2 className="text-3xl font-semibold tracking-tight text-charcoal-900 text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-charcoal-400 text-balance sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
