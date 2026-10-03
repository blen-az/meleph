interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`${align === "center" ? "text-center mx-auto" : ""} max-w-2xl mb-12 md:mb-16 ${className}`}
    >
      {label && (
        <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-amber-600 mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 leading-tight tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-stone-500 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
