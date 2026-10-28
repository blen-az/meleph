import {
  BookOpenCheckIcon,
  CalendarCheck2Icon,
  ClipboardListIcon,
  FileTextIcon,
  UserRoundCheckIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AGENT_WORKFLOW } from "@/lib/site";

// Customer messages flow into the AI Customer Agent and leave as
// business actions. Positions are shared by the HTML nodes and the
// SVG connectors through one coordinate space (VIEW_W × VIEW_H).
const VIEW_W = 1200;
const VIEW_H = 520;
const HUB = { x0: 480, x1: 720, y: 260 };
const IN_EDGE = 330;
const OUT_EDGE = 870;

const MESSAGES = [
  { y: 120, initials: "HB", text: "Is a two-bedroom available from March?", from: "Property enquiry" },
  { y: 260, initials: "SK", text: "Can I book a check-up for Thursday?", from: "Clinic appointment" },
  { y: 400, initials: "AT", text: "What would a two-week excavator rental cost?", from: "Rental quotation" },
] as const;

const ACTIONS = [
  { y: 70, icon: BookOpenCheckIcon, text: "Answers from approved knowledge" },
  { y: 165, icon: ClipboardListIcon, text: "Captures contact and requirements" },
  { y: 260, icon: CalendarCheck2Icon, text: "Books the appointment" },
  { y: 355, icon: FileTextIcon, text: "Prepares the quotation request" },
  { y: 450, icon: UserRoundCheckIcon, text: "Hands over to your team with context" },
] as const;

const pct = (y: number) => `${(y / VIEW_H) * 100}%`;
const inPath = (y: number) =>
  `M${IN_EDGE} ${y} C${IN_EDGE + 90} ${y} ${HUB.x0 - 90} ${HUB.y} ${HUB.x0} ${HUB.y}`;
const outPath = (y: number) =>
  `M${HUB.x1} ${HUB.y} C${HUB.x1 + 90} ${HUB.y} ${OUT_EDGE - 90} ${y} ${OUT_EDGE} ${y}`;

function MessageNode({ initials, text, from }: { initials: string; text: string; from: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-card p-3.5 shadow-[0_12px_30px_-22px_rgb(0_0_0/0.5)] ring-1 ring-foreground/10">
      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-secondary text-xs font-medium">
        {initials}
      </span>
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className="text-xs text-muted-foreground">{from}</span>
        <span className="text-sm leading-snug">{text}</span>
      </div>
    </div>
  );
}

function ActionNode({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl bg-card py-2 pr-4 pl-2 text-sm leading-snug ring-1 ring-foreground/10">
      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-secondary">
        <Icon aria-hidden="true" className="size-3.5 text-gold-ink" />
      </span>
      {text}
    </div>
  );
}

function Hub({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "surface-ink hub-pulse flex flex-col items-center gap-3 rounded-2xl px-6 py-5 text-center shadow-[0_24px_50px_-24px_rgb(0_0_0/0.7)] ring-1 ring-gold/40",
        className,
      )}
    >
      <span className="font-serif text-3xl leading-none">Meleph</span>
      <span className="text-xs text-muted-foreground">AI Customer Agent</span>
      <span className="flex flex-wrap justify-center gap-x-2 gap-y-1 border-t pt-3 text-[0.6875rem] text-muted-foreground">
        {AGENT_WORKFLOW.slice(0, 5).map((step) => (
          <span key={step.key}>{step.name}</span>
        ))}
      </span>
    </div>
  );
}

export function SystemMap({ className }: { className?: string }) {
  return (
    <figure className={cn("flex flex-col gap-3", className)}>
      {/* Wide screens: positioned diagram with drawn connectors. */}
      <div
        className="relative hidden w-full lg:block"
        style={{ aspectRatio: `${VIEW_W} / ${VIEW_H}` }}
      >
        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          preserveAspectRatio="none"
          className="absolute inset-0 size-full"
          aria-hidden="true"
          focusable="false"
        >
          {MESSAGES.map((m, i) => (
            <path
              key={`in-${m.y}`}
              d={inPath(m.y)}
              pathLength={1}
              className="draw-line fill-none stroke-foreground/25"
              strokeWidth={1.25}
              vectorEffect="non-scaling-stroke"
              style={{ animationDelay: `${300 + i * 120}ms` }}
            />
          ))}
          {ACTIONS.map((a, i) => (
            <path
              key={`out-${a.y}`}
              d={outPath(a.y)}
              pathLength={1}
              className="draw-line fill-none stroke-gold"
              strokeWidth={1.25}
              vectorEffect="non-scaling-stroke"
              style={{ animationDelay: `${900 + i * 100}ms` }}
            />
          ))}
          {/* Pulses travel each connector in turn: messages in, actions out. */}
          {MESSAGES.map((m, i) => (
            <circle key={`in-dot-${m.y}`} r={4} className="flow-dot fill-foreground" opacity={0}>
              <animateMotion dur="1.6s" begin={`${2 + i * 1.6}s;in${i}.end+3.2s`} id={`in${i}`} path={inPath(m.y)} fill="freeze" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="1.6s" begin={`in${i}.begin`} />
            </circle>
          ))}
          {ACTIONS.map((a, i) => (
            <circle key={`out-dot-${a.y}`} r={4} className="flow-dot fill-gold" opacity={0}>
              <animateMotion dur="1.4s" begin={`${3.4 + i * 0.9}s;out${i}.end+3.1s`} id={`out${i}`} path={outPath(a.y)} fill="freeze" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="1.4s" begin={`out${i}.begin`} />
            </circle>
          ))}
        </svg>

        {MESSAGES.map((m) => (
          <div
            key={m.y}
            className="absolute left-0 -translate-y-1/2"
            style={{ top: pct(m.y), width: `${(IN_EDGE / VIEW_W) * 100}%` }}
          >
            <MessageNode initials={m.initials} text={m.text} from={m.from} />
          </div>
        ))}

        <div
          className="absolute -translate-y-1/2"
          style={{
            top: pct(HUB.y),
            left: `${(HUB.x0 / VIEW_W) * 100}%`,
            width: `${((HUB.x1 - HUB.x0) / VIEW_W) * 100}%`,
          }}
        >
          <Hub />
        </div>

        {ACTIONS.map((a) => (
          <div
            key={a.y}
            className="absolute right-0 -translate-y-1/2"
            style={{ top: pct(a.y), width: `${((VIEW_W - OUT_EDGE) / VIEW_W) * 100}%` }}
          >
            <ActionNode icon={a.icon} text={a.text} />
          </div>
        ))}
      </div>

      {/* Narrow screens: the same story as a vertical sequence. */}
      <div className="flex flex-col items-stretch gap-4 lg:hidden">
        <ul className="flex flex-col gap-2.5">
          {MESSAGES.map((m) => (
            <li key={m.y}>
              <MessageNode initials={m.initials} text={m.text} from={m.from} />
            </li>
          ))}
        </ul>
        <span aria-hidden="true" className="mx-auto h-8 w-px bg-foreground/25" />
        <Hub className="mx-auto w-full max-w-xs" />
        <span aria-hidden="true" className="mx-auto h-8 w-px bg-gold" />
        <ul className="flex flex-wrap justify-center gap-2">
          {ACTIONS.map((a) => (
            <li key={a.y}>
              <ActionNode icon={a.icon} text={a.text} />
            </li>
          ))}
        </ul>
      </div>

      <figcaption className="text-xs text-muted-foreground">
        Illustrative examples. Each AI Customer Agent is configured around one business.
      </figcaption>
    </figure>
  );
}

// ─── Extend, don't rebuild ───────────────────────────────────

const EXISTING = ["Business documents and policies", "Availability and pricing lists", "Calendar", "CRM or customer records", "Email and team notifications", "Spreadsheets and databases"] as const;
const DELIVERY = ["Customers get accurate answers", "Your team gets complete leads", "Records stay up to date"] as const;

export function ExtendDiagram({ className }: { className?: string }) {
  return (
    <figure className={cn("flex flex-col gap-3", className)}>
      <div className="grid items-center gap-4 lg:grid-cols-[1fr_auto_auto_auto_1fr] lg:gap-6">
        <div className="flex flex-col gap-3 rounded-xl bg-card p-5 ring-1 ring-foreground/10">
          <span className="text-sm font-medium">What you already have</span>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            {EXISTING.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span aria-hidden="true" className="size-1 rounded-full bg-foreground/40" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <span aria-hidden="true" className="mx-auto h-8 w-px bg-foreground/25 lg:h-px lg:w-12" />
        <Hub className="mx-auto w-full max-w-xs lg:w-60" />
        <span aria-hidden="true" className="mx-auto h-8 w-px bg-gold lg:h-px lg:w-12" />
        <div className="flex flex-col gap-3 rounded-xl bg-card p-5 ring-1 ring-foreground/10">
          <span className="text-sm font-medium">What changes</span>
          <ul className="flex flex-col gap-2 text-sm">
            {DELIVERY.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <figcaption className="text-xs text-muted-foreground">
        Connections are scoped and built for each business. We confirm what is connected before launch.
      </figcaption>
    </figure>
  );
}
