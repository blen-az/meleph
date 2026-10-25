"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-motion";

/**
 * Marks its element with data-inview once it scrolls into view. Pair with
 * the `stagger` class so children fill in one after another.
 */
export function InView({
  as: Tag = "div",
  className,
  children,
}: {
  as?: "div" | "dl" | "ul" | "ol";
  className?: string;
  children: React.ReactNode;
}) {
  const [ref, inView] = useInView<HTMLElement>({ once: true, threshold: 0.2 });
  return (
    <Tag
      // The union of element refs is safe here; every tag is an HTMLElement.
      ref={ref as React.Ref<never>}
      data-inview={inView}
      className={cn("stagger", className)}
    >
      {children}
    </Tag>
  );
}
