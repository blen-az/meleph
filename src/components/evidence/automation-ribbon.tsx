import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// "When this happens, then that happens" — automations a system can run
// without anyone touching them. Illustrative pairs, not a feature list.
const RULES = [
  ["Enquiry received", "Classified and routed"],
  ["Viewing requested", "Calendar slot booked"],
  ["Quote requested", "Draft prepared for review"],
  ["Contact details shared", "Lead record created"],
  ["Appointment tomorrow", "Reminder sent"],
  ["Needs a person", "Handed over with context"],
  ["Policy document changed", "Sent for knowledge approval"],
  ["End of day", "Dashboard summarised"],
] as const;

function Rules({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-4 pr-4">
      {RULES.map(([when, then]) => (
        <li
          key={when}
          className="flex shrink-0 items-center gap-3 rounded-full border bg-card/5 py-2 pr-4 pl-2 text-sm whitespace-nowrap"
        >
          <span className="rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground">When</span>
          {when}
          <ArrowRightIcon aria-hidden="true" className="size-3.5 text-gold" />
          <span className="text-gold">{then}</span>
        </li>
      ))}
    </ul>
  );
}

export function AutomationRibbon({ className }: { className?: string }) {
  return (
    <div className={cn("surface-ink overflow-hidden py-6", className)}>
      <div className="marquee flex w-max hover:[animation-play-state:paused]">
        <Rules />
        <Rules hidden />
      </div>
    </div>
  );
}
