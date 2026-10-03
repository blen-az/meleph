import Link from "next/link";

interface CardProps {
  icon?: string;
  title: string;
  description: string;
  href?: string;
  features?: string[];
  className?: string;
}

export function Card({
  icon,
  title,
  description,
  href,
  features,
  className = "",
}: CardProps) {
  const content = (
    <div
      className={`group relative bg-white border border-stone-200 rounded-2xl p-6 md:p-8 card-hover ${className}`}
    >
      {icon && (
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-amber-50 text-xl mb-5 transition-colors duration-250 group-hover:bg-amber-100">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-stone-900 mb-2">{title}</h3>
      <p className="text-stone-500 text-sm leading-relaxed mb-4">
        {description}
      </p>
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm text-stone-600"
            >
              <span className="text-amber-500 mt-0.5 shrink-0">•</span>
              {feature}
            </li>
          ))}
        </ul>
      )}
      {href && (
        <div className="mt-5 flex items-center gap-1 text-sm font-medium text-stone-900 group-hover:text-amber-700 transition-colors duration-250">
          Learn more
          <svg
            className="w-4 h-4 transition-transform duration-250 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link href={href} className="block">{content}</Link>;
  }

  return content;
}
