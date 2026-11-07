"use client";

import {
  BellIcon,
  CalendarCheck2Icon,
  Clock3Icon,
  DatabaseIcon,
  FileTextIcon,
  LayoutDashboardIcon,
  MailIcon,
  SparklesIcon,
  UserPlusIcon,
  UserRoundCheckIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLoopingSequence } from "@/hooks/use-motion";
import { Badge } from "@/components/ui/badge";

// Illustrative background automations for one business, in the order
// they would plausibly happen after a single enquiry.
const EVENTS = [
  { icon: SparklesIcon, text: "New enquiry classified as a viewing request", tag: "AI" },
  { icon: UserPlusIcon, text: "Lead created for Hana Bekele", tag: "CRM" },
  { icon: CalendarCheck2Icon, text: "Viewing booked for Saturday 10:00", tag: "Calendar" },
  { icon: BellIcon, text: "Leasing team notified with the conversation summary", tag: "Team" },
  { icon: MailIcon, text: "Confirmation sent to the customer", tag: "Email" },
  { icon: Clock3Icon, text: "Reminder scheduled for Friday 18:00", tag: "Follow-up" },
  { icon: FileTextIcon, text: "Quotation draft prepared for review", tag: "Documents" },
  { icon: UserRoundCheckIcon, text: "Lease question handed to Daniel with context", tag: "Handoff" },
  { icon: DatabaseIcon, text: "Availability list synced from the property sheet", tag: "Data" },
  { icon: LayoutDashboardIcon, text: "Enquiries dashboard refreshed", tag: "Dashboard" },
] as const;

const VISIBLE = 6;
const TICK_MS = 1900;
const tick = () => TICK_MS;

export function ActivityFeed({ className }: { className?: string }) {
  // An ever-increasing counter; each tick adds the next event on top.
  const [ref, count] = useLoopingSequence<HTMLDivElement>(1_000_000, tick);
  const newest = count + VISIBLE - 1;
  const items = Array.from({ length: VISIBLE }, (_, i) => newest - i);

  return (
    <figure className={cn("flex flex-col gap-3", className)}>
      <div ref={ref} className="overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10">
        <div className="flex h-11 items-center justify-between border-b px-4 text-sm">
          <span className="flex items-center gap-2.5 font-medium">
            <span aria-hidden="true" className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-gold" />
            </span>
            Automation activity
          </span>
          <span className="text-xs text-muted-foreground">Lakeside Residences</span>
        </div>
        <ul aria-hidden="true" className="flex h-[23rem] flex-col overflow-hidden [mask-image:linear-gradient(to_bottom,black_70%,transparent)]">
          {items.map((n, position) => {
            const event = EVENTS[n % EVENTS.length];
            return (
              <li
                key={n}
                className={cn(
                  "flex items-center gap-3.5 border-b px-4 py-3.5 text-sm",
                  position === 0 && "animate-in fade-in-0 slide-in-from-top-3 duration-500 bg-gold/10",
                )}
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-secondary">
                  <event.icon className="size-4 text-gold-ink" />
                </span>
                <span className="min-w-0 flex-1 truncate">{event.text}</span>
                <Badge variant="outline" className="hidden sm:inline-flex">
                  {event.tag}
                </Badge>
                <span className="w-12 shrink-0 text-right text-xs text-muted-foreground tabular-nums">
                  {position === 0 ? "now" : `${position * 2}s ago`}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <figcaption className="text-xs text-muted-foreground">
        Illustrative activity. Which systems connect is agreed with each business.
      </figcaption>
    </figure>
  );
}
