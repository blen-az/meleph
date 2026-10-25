"use client";

import { ChevronRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { openChat } from "@/components/site/meleph-chat";

/** True statement only: Mel is a Meleph AI Customer Agent running on this site. */
export function Announcement({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={openChat}
      className={cn(
        "group inline-flex w-fit items-center gap-2.5 rounded-full border bg-card/80 py-1.5 pr-3 pl-1.5 text-sm backdrop-blur-sm transition-colors hover:border-foreground/30",
        className,
      )}
    >
      <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground">Live</span>
      <span>Mel, our AI Customer Agent, is answering on this site</span>
      <ChevronRightIcon aria-hidden="true" className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
    </button>
  );
}
