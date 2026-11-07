import {
  CableIcon,
  CalendarClockIcon,
  ClipboardListIcon,
  HandshakeIcon,
  InboxIcon,
  LayoutDashboardIcon,
  LibraryIcon,
  MessageSquareTextIcon,
  MessagesSquareIcon,
  PanelsTopLeftIcon,
  SendIcon,
  WaypointsIcon,
  WorkflowIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  AGENT_WORKFLOW,
  CAPABILITIES,
  CUSTOM_SYSTEMS,
  type CapabilityKey,
  type CustomSystemKey,
} from "@/lib/site";
import { WORKFLOW_ICONS } from "@/components/evidence/agent";

const CAPABILITY_ICONS: Record<CapabilityKey, React.ElementType> = {
  conversations: MessagesSquareIcon,
  capture: ClipboardListIcon,
  inbox: InboxIcon,
  channels: WaypointsIcon,
  bookings: CalendarClockIcon,
  proactive: SendIcon,
  handoff: HandshakeIcon,
  integrations: WorkflowIcon,
};

const CUSTOM_ICONS: Record<CustomSystemKey, React.ElementType> = {
  assistants: MessageSquareTextIcon,
  automation: WorkflowIcon,
  dashboards: LayoutDashboardIcon,
  knowledge: LibraryIcon,
  portals: PanelsTopLeftIcon,
  integrations: CableIcon,
};

/** Understand → Answer → Capture → Act → Connect (→ Follow up). */
export function AgentWorkflow({
  includeFollowUp = false,
  className,
}: {
  includeFollowUp?: boolean;
  className?: string;
}) {
  const steps = includeFollowUp ? AGENT_WORKFLOW : AGENT_WORKFLOW.slice(0, 5);
  return (
    <ol
      className={cn(
        "-mx-5 flex snap-x snap-mandatory gap-0 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:overflow-visible md:px-0",
        includeFollowUp ? "md:grid-cols-3 xl:grid-cols-6" : "md:grid-cols-5",
        className,
      )}
    >
      {steps.map((step, index) => {
        const Icon = WORKFLOW_ICONS[step.key];
        return (
          <li
            key={step.key}
            className="reveal relative flex w-[72%] shrink-0 snap-start flex-col gap-4 border-t border-foreground/15 pt-6 pr-6 sm:w-[40%] md:w-auto"
          >
            <span aria-hidden="true" className="reveal-bar absolute -top-[3px] left-0 h-[5px] w-10 bg-gold" />
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Icon aria-hidden="true" className="size-5" />
            </div>
            <h3 className="display-item">{step.name}</h3>
            <p className="text-muted-foreground">{step.text}</p>
          </li>
        );
      })}
    </ol>
  );
}

export function CapabilityList({ className }: { className?: string }) {
  return (
    <ul className={cn("grid gap-x-16 md:grid-cols-2", className)}>
      {CAPABILITIES.map((capability) => {
        const Icon = CAPABILITY_ICONS[capability.key];
        return (
          <li key={capability.key} className="reveal flex gap-5 border-t py-7">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary">
              <Icon aria-hidden="true" className="size-5" />
            </span>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-lg font-medium">{capability.title}</h3>
              <p className="max-w-[46ch] text-muted-foreground">{capability.text}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function CustomSystemList({ className }: { className?: string }) {
  return (
    <ul className={cn("grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {CUSTOM_SYSTEMS.map((system) => {
        const Icon = CUSTOM_ICONS[system.key];
        return (
          <li key={system.key} className="reveal flex flex-col gap-4 border-t py-8">
            <Icon aria-hidden="true" className="size-6 text-gold-ink" />
            <h3 className="display-item">{system.title}</h3>
            <p className="max-w-[36ch] text-muted-foreground">{system.text}</p>
          </li>
        );
      })}
    </ul>
  );
}

/** Numbered delivery process. `steps` comes from PROCESS or PROCESS_PREVIEW. */
export function ProcessSteps({
  steps,
  className,
}: {
  steps: readonly { name: string; text: string }[];
  className?: string;
}) {
  return (
    <ol className={cn("grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {steps.map((step, index) => (
        <li key={step.name} className="reveal flex flex-col gap-3 border-t py-8">
          <span className="font-serif text-5xl leading-none text-gold-ink tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="pt-3 text-xl font-medium">{step.name}</h3>
          <p className="max-w-[36ch] text-muted-foreground">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
