"use client";

import {
  BellRingIcon,
  CheckIcon,
  DatabaseIcon,
  InboxIcon,
  LayoutDashboardIcon,
  ListChecksIcon,
  SparklesIcon,
  UserRoundCheckIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLoopingSequence } from "@/hooks/use-motion";
import { Spinner } from "@/components/ui/spinner";

// Custom AI Systems §9 example workflow, played as a live run.
const STEPS = [
  { icon: InboxIcon, title: "Enquiry arrives", output: "Email from a property buyer" },
  { icon: SparklesIcon, title: "AI classifies the request", output: "Viewing request, high priority" },
  { icon: DatabaseIcon, title: "Relevant data is saved", output: "Contact, unit 4B, Saturday morning" },
  { icon: ListChecksIcon, title: "A task is created", output: "Confirm viewing with the buyer" },
  { icon: UserRoundCheckIcon, title: "Responsible staff member is notified", output: "Assigned to leasing" },
  { icon: BellRingIcon, title: "Customer is updated", output: "Confirmation sent with next steps" },
  { icon: LayoutDashboardIcon, title: "Dashboard is updated", output: "Pipeline and workload refreshed" },
] as const;

const STEP_MS = 1100;
const HOLD_MS = 3200;
// Beat i < STEPS.length: step i is running. Final beat: everything done.
const durationOf = (beat: number) => (beat === STEPS.length ? HOLD_MS : STEP_MS);

export function AutomationRun({ className }: { className?: string }) {
  const [ref, beat] = useLoopingSequence<HTMLDivElement>(STEPS.length + 1, durationOf);
  const done = beat === STEPS.length;

  return (
    <figure className={cn("reveal flex flex-col gap-3", className)}>
      <div
        ref={ref}
        className="overflow-hidden rounded-xl bg-card text-card-foreground ring-1 ring-foreground/10 shadow-[0_30px_60px_-36px_rgb(0_0_0/0.45)]"
      >
        <div className="flex h-11 items-center justify-between gap-4 border-b bg-muted/60 px-4 text-sm">
          <span className="flex items-center gap-2.5 font-medium">
            <span aria-hidden="true" className="relative flex size-2">
              {!done ? (
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-70" />
              ) : null}
              <span className="relative inline-flex size-2 rounded-full bg-gold" />
            </span>
            Enquiry workflow
          </span>
          <span className="text-xs text-muted-foreground" aria-live="polite">
            {done ? "Run complete" : `Running step ${beat + 1} of ${STEPS.length}`}
          </span>
        </div>

        <div className="h-0.5 bg-muted" aria-hidden="true">
          <div
            className="h-full origin-left bg-gold transition-transform duration-700 ease-out"
            style={{ transform: `scaleX(${Math.min(beat, STEPS.length) / STEPS.length})` }}
          />
        </div>

        <ol className="flex flex-col p-2">
          {STEPS.map((step, index) => {
            const state = index < beat || done ? "done" : index === beat ? "running" : "queued";
            return (
              <li
                key={step.title}
                data-state={state}
                className="relative flex items-center gap-4 rounded-lg px-4 py-3 transition-colors duration-500 data-[state=running]:bg-gold/10"
              >
                {index < STEPS.length - 1 ? (
                  <span aria-hidden="true" className="absolute top-12 left-[2.125rem] h-[calc(100%-1.75rem)] w-px bg-border">
                    <span
                      className="block w-full origin-top bg-gold transition-transform duration-700"
                      style={{ height: "100%", transform: `scaleY(${state === "done" ? 1 : 0})` }}
                    />
                  </span>
                ) : null}
                <span
                  className={cn(
                    "relative grid size-9 shrink-0 place-items-center rounded-full transition-colors duration-500",
                    state === "done" && "bg-primary text-primary-foreground",
                    state === "running" && "bg-card ring-2 ring-gold",
                    state === "queued" && "bg-secondary text-muted-foreground",
                  )}
                >
                  {state === "done" ? (
                    <CheckIcon aria-hidden="true" className="size-4" />
                  ) : state === "running" ? (
                    <Spinner className="size-4 text-gold-ink" />
                  ) : (
                    <step.icon aria-hidden="true" className="size-4" />
                  )}
                </span>
                <div className="flex min-w-0 flex-1 flex-col">
                  <span className={cn("font-medium transition-colors", state === "queued" && "text-muted-foreground")}>
                    {step.title}
                  </span>
                  <span
                    className={cn(
                      "grid text-sm text-muted-foreground transition-[grid-template-rows,opacity] duration-500",
                      state === "done" ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <span className="overflow-hidden">{step.output}</span>
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      <figcaption className="text-xs text-muted-foreground">
        Illustrative workflow. Each system is designed around the business it serves.
      </figcaption>
    </figure>
  );
}
