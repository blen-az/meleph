"use client";

import { CalendarCheck2Icon, ClipboardListIcon, DatabaseIcon, UsersRoundIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLoopingSequence } from "@/hooks/use-motion";

// Conversation → action → business system → team, lit in sequence with a
// pulse travelling between stages.
const FLOW = [
  { icon: CalendarCheck2Icon, title: "Conversation", text: "Customer confirms Saturday 10:00." },
  { icon: ClipboardListIcon, title: "Action", text: "Viewing booked and lead created." },
  { icon: DatabaseIcon, title: "Business system", text: "Calendar and customer record updated." },
  { icon: UsersRoundIcon, title: "Your team", text: "Leasing notified with the full context." },
] as const;

const durationOf = (beat: number) => (beat === FLOW.length - 1 ? 2600 : 1400);

export function ActionFlow({ className }: { className?: string }) {
  const [ref, active] = useLoopingSequence<HTMLOListElement>(FLOW.length, durationOf);

  return (
    <ol ref={ref} className={cn("grid gap-3 md:grid-cols-4 md:gap-0", className)}>
      {FLOW.map((step, index) => {
        const lit = index <= active;
        return (
          <li key={step.title} className="relative flex md:items-stretch">
            <div
              className={cn(
                "flex w-full flex-col gap-4 rounded-xl p-6 ring-1 transition-all duration-500",
                lit ? "bg-card ring-gold/60 shadow-[0_24px_50px_-34px_rgb(0_0_0/0.5)]" : "bg-card/60 ring-foreground/10",
                index === active && "md:-translate-y-1",
              )}
            >
              <span
                className={cn(
                  "grid size-10 place-items-center rounded-full transition-colors duration-500",
                  lit ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground",
                )}
              >
                <step.icon aria-hidden="true" className="size-4.5" />
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground">{step.title}</span>
                <span className={cn("font-medium transition-colors", !lit && "text-muted-foreground")}>{step.text}</span>
              </div>
            </div>
            {index < FLOW.length - 1 ? (
              <span aria-hidden="true" className="relative hidden w-8 shrink-0 items-center md:flex">
                <span className="h-px w-full bg-border" />
                <span
                  className={cn(
                    "absolute left-0 h-px bg-gold transition-[width] duration-700 ease-out",
                    index < active ? "w-full" : "w-0",
                  )}
                />
                {index === active - 1 ? (
                  <span key={active} className="flow-travel absolute top-1/2 size-2 -translate-y-1/2 rounded-full bg-gold" />
                ) : null}
              </span>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
