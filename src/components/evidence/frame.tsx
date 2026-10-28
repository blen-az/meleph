import { cn } from "@/lib/utils";

/**
 * Wraps a product UI illustration. Every example on the site uses
 * illustrative data, so the caption says so once, in plain words.
 */
export function EvidenceFrame({
  title,
  meta,
  caption = "Illustrative interface with example data.",
  className,
  bodyClassName,
  children,
}: {
  title: string;
  meta?: React.ReactNode;
  caption?: string | null;
  className?: string;
  bodyClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <figure className={cn("reveal flex min-w-0 flex-col gap-3", className)}>
      <div className="overflow-hidden rounded-xl bg-card text-card-foreground shadow-[0_1px_0_rgb(0_0_0/0.04),0_30px_60px_-36px_rgb(0_0_0/0.35)] ring-1 ring-foreground/10">
        <div className="flex h-11 items-center justify-between gap-4 border-b bg-muted/60 px-4">
          <span className="flex min-w-0 items-center gap-2.5 text-sm font-medium">
            <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-gold" />
            <span className="truncate">{title}</span>
          </span>
          {meta ? <span className="truncate text-xs text-muted-foreground">{meta}</span> : null}
        </div>
        <div className={cn("text-sm", bodyClassName)}>{children}</div>
      </div>
      {caption ? <figcaption className="text-xs text-muted-foreground">{caption}</figcaption> : null}
    </figure>
  );
}

/** A labelled value inside product UI (customer fields, captured details). */
export function DataField({
  label,
  value,
  className,
}: {
  label: string;
  value: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex min-w-0 flex-col gap-0.5", className)}>
      <dt className="text-xs text-muted-foreground">{label}</dt>
      <dd className="truncate font-medium">{value}</dd>
    </div>
  );
}
