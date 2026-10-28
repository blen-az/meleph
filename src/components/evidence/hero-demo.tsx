"use client";

import { useLoopingSequence } from "@/hooks/use-motion";
import { CalendarCheck2Icon, CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { AGENT_WORKFLOW } from "@/lib/site";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import { Message, MessageContent, MessageHeader } from "@/components/ui/message";

// A scripted conversation that plays like the real product: a customer
// asks, the agent answers, captures details, books, and hands over.
type Beat =
  | { kind: "customer"; text: string; step: number; ms: number }
  | { kind: "agent"; text: string; step: number; ms: number; chips?: readonly string[] }
  | { kind: "typing"; ms: number }
  | { kind: "result"; step: number; ms: number };

const SCRIPT: readonly Beat[] = [
  { kind: "customer", text: "Hi, is a two-bedroom available from March?", step: 0, ms: 1300 },
  { kind: "typing", ms: 1100 },
  {
    kind: "agent",
    text: "Yes. 4B and 7A are both free from 1 March, with parking. Would you like to compare them or book a viewing?",
    chips: ["Compare 4B and 7A", "Book a viewing"],
    step: 1,
    ms: 2400,
  },
  { kind: "customer", text: "Can I see 4B on Saturday morning?", step: 2, ms: 1300 },
  { kind: "typing", ms: 1000 },
  {
    kind: "agent",
    text: "Saturday at 10:00 is free with Daniel from our leasing team. What name and number should I book it under?",
    step: 2,
    ms: 2400,
  },
  { kind: "customer", text: "Hana Bekele, +251 •• ••• 4821", step: 2, ms: 1200 },
  { kind: "typing", ms: 1000 },
  { kind: "agent", text: "You're booked for Saturday at 10:00. Daniel has your details.", step: 3, ms: 1600 },
  { kind: "result", step: 4, ms: 4500 },
];

const STEPS = AGENT_WORKFLOW.slice(0, 5);
const durationOf = (beat: number) => SCRIPT[beat].ms;

export function HeroDemo({ className }: { className?: string }) {
  // Plays only while on screen; reduced motion shows the finished conversation.
  const [rootRef, beat] = useLoopingSequence<HTMLDivElement>(SCRIPT.length, durationOf);

  const shown = SCRIPT.slice(0, beat + 1).filter((b, i) => b.kind !== "typing" || i === beat);
  const activeStep = Math.max(
    0,
    ...SCRIPT.slice(0, beat + 1).map((b) => ("step" in b ? b.step : 0)),
  );

  return (
    <div
      ref={rootRef}
      className={cn(
        "overflow-hidden rounded-2xl bg-card text-sm shadow-[0_40px_80px_-40px_rgb(0_0_0/0.45)] ring-1 ring-foreground/10",
        className,
      )}
      aria-label="Example conversation with an AI Customer Agent"
      role="img"
    >
      <div className="flex h-12 items-center justify-between border-b bg-muted/60 px-4">
        <span className="flex items-center gap-2.5 font-medium">
          <span aria-hidden="true" className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-gold" />
          </span>
          Lakeside Residences
        </span>
        <span className="text-xs text-muted-foreground">Website conversation</span>
      </div>

      <div
        aria-hidden="true"
        className="flex h-[26rem] flex-col justify-end gap-3.5 overflow-hidden p-5 [mask-image:linear-gradient(to_bottom,transparent,black_18%)]"
      >
        {shown.map((b) => {
          const key = SCRIPT.indexOf(b);
          if (b.kind === "typing") {
            return (
              <Message key={key} align="end" className="animate-in fade-in-0 duration-300">
                <MessageContent>
                  <Bubble align="end">
                    <BubbleContent className="flex gap-1 px-3.5 py-3">
                      {[0, 1, 2].map((d) => (
                        <span
                          key={d}
                          className="size-1.5 animate-bounce rounded-full bg-primary-foreground/70"
                          style={{ animationDelay: `${d * 140}ms` }}
                        />
                      ))}
                    </BubbleContent>
                  </Bubble>
                </MessageContent>
              </Message>
            );
          }
          if (b.kind === "result") {
            return (
              <div
                key={key}
                className="flex items-center gap-3 rounded-xl border border-gold/50 bg-gold/10 p-3.5 animate-in fade-in-0 slide-in-from-bottom-3 duration-500"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <CalendarCheck2Icon className="size-4" />
                </span>
                <div className="flex min-w-0 flex-col">
                  <span className="font-medium">Viewing booked, Sat 10:00</span>
                  <span className="truncate text-xs text-muted-foreground">
                    Lead and conversation sent to the leasing team
                  </span>
                </div>
                <CheckIcon className="ml-auto size-4 shrink-0 text-gold-ink" />
              </div>
            );
          }
          const isAgent = b.kind === "agent";
          return (
            <Message
              key={key}
              align={isAgent ? "end" : "start"}
              className="animate-in fade-in-0 slide-in-from-bottom-2 duration-500"
            >
              <MessageContent>
                {isAgent ? <MessageHeader>Mel, AI Customer Agent</MessageHeader> : null}
                <Bubble variant={isAgent ? "default" : "outline"} align={isAgent ? "end" : "start"} className="max-w-[85%]">
                  <BubbleContent className="px-3.5 py-2.5">{b.text}</BubbleContent>
                </Bubble>
                {isAgent && b.chips ? (
                  <div className="flex flex-wrap justify-end gap-2">
                    {b.chips.map((chip) => (
                      <span
                        key={chip}
                        className="inline-flex h-7 items-center rounded-full border border-foreground/20 bg-background px-3 text-xs font-medium"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                ) : null}
              </MessageContent>
            </Message>
          );
        })}
      </div>

      <ol className="grid grid-cols-5 border-t" aria-hidden="true">
        {STEPS.map((step, index) => (
          <li
            key={step.key}
            className={cn(
              "relative px-1 py-3 text-center text-xs transition-colors duration-500",
              index <= activeStep ? "text-foreground" : "text-muted-foreground/60",
            )}
          >
            <span
              className={cn(
                "absolute inset-x-0 top-0 h-0.5 origin-left bg-gold transition-transform duration-700",
                index <= activeStep ? "scale-x-100" : "scale-x-0",
              )}
            />
            {step.name}
          </li>
        ))}
      </ol>
    </div>
  );
}
