import {
  BellIcon,
  BookOpenCheckIcon,
  CalendarCheck2Icon,
  CheckIcon,
  ClipboardListIcon,
  FileTextIcon,
  ScanSearchIcon,
  StickyNoteIcon,
  UserRoundCheckIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { LAUNCH_CHANNELS } from "@/lib/site";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import { Message, MessageContent, MessageFooter, MessageHeader } from "@/components/ui/message";
import { Separator } from "@/components/ui/separator";
import { DataField, EvidenceFrame } from "@/components/evidence/frame";
import { InView } from "@/components/site/in-view";

// One illustrative scenario runs through every product view:
// a residential development answering a rental enquiry.
const BUSINESS = "Lakeside Residences";
const CUSTOMER = { name: "Hana Bekele", initials: "HB" };
const STAFF = { name: "Daniel Mekonnen", role: "Leasing", initials: "DM" };

function CustomerLine({ children, time }: { children: React.ReactNode; time?: string }) {
  return (
    <Message align="start">
      <MessageContent>
        <Bubble variant="outline">
          <BubbleContent className="px-3.5 py-2.5">{children}</BubbleContent>
        </Bubble>
        {time ? <MessageFooter>{time}</MessageFooter> : null}
      </MessageContent>
    </Message>
  );
}

function AgentLine({
  children,
  actions,
  label = "AI Customer Agent",
}: {
  children: React.ReactNode;
  actions?: readonly string[];
  label?: string;
}) {
  return (
    <Message align="end">
      <MessageContent>
        <MessageHeader>{label}</MessageHeader>
        <Bubble variant="default" align="end">
          <BubbleContent className="px-3.5 py-2.5">{children}</BubbleContent>
        </Bubble>
        {actions ? (
          <div className="flex flex-wrap justify-end gap-2">
            {actions.map((action) => (
              <span
                key={action}
                className="inline-flex h-8 items-center rounded-full border border-foreground/20 bg-background px-3 text-[0.8125rem] font-medium"
              >
                {action}
              </span>
            ))}
          </div>
        ) : null}
      </MessageContent>
    </Message>
  );
}

function SystemNote({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-xs text-muted-foreground">
      <Separator className="flex-1" />
      <span className="flex items-center gap-1.5">
        <Icon aria-hidden="true" className="size-3.5 text-gold-ink" />
        {children}
      </span>
      <Separator className="flex-1" />
    </div>
  );
}

// ─── A conversation that actually goes somewhere ─────────────

export function ConversationExample({ className }: { className?: string }) {
  return (
    <EvidenceFrame title={BUSINESS} meta="Website conversation" className={className}>
      <div className="flex flex-col gap-5 p-5 sm:p-7">
        <CustomerLine time="09:14">
          Do you have a two-bedroom apartment available from March? We need parking, and a balcony
          would be great.
        </CustomerLine>
        <AgentLine actions={["Compare 4B and 7A", "Schedule a viewing"]}>
          Yes. Two two-bedroom apartments are available from 1 March, both with a parking space. 4B
          has a south-facing balcony; 7A is slightly larger with a city view but no balcony.
        </AgentLine>
        <CustomerLine>Can we see 4B on Saturday morning?</CustomerLine>
        <AgentLine>
          Saturday at 10:00 or 11:30 is open with {STAFF.name} from our leasing team. Which time suits
          you, and what is the best number to confirm on?
        </AgentLine>
      </div>
    </EvidenceFrame>
  );
}

// ─── It understands more than keywords ───────────────────────

const INTENT = [
  { label: "Service interest", value: "Two-bedroom rental" },
  { label: "Location", value: "Block B, lake side" },
  { label: "Budget", value: "Within listed rent" },
  { label: "Urgency", value: "Moving in March" },
  { label: "Time preference", value: "Saturday morning" },
  { label: "Must-haves", value: "Parking, balcony" },
] as const;

export function IntentPanel({ className }: { className?: string }) {
  return (
    <EvidenceFrame title="Conversation context" meta="Updated as the customer talks" className={className}>
      <div className="flex flex-col gap-5 p-5 sm:p-6">
        <div className="rounded-lg bg-muted/70 p-4 text-[0.9375rem] leading-relaxed">
          &ldquo;We&apos;re moving from Hawassa in March and need somewhere with parking. A balcony would be
          great. Weekends are easiest for us to visit.&rdquo;
        </div>
        <InView as="dl" className="grid grid-cols-2 gap-x-6 gap-y-4">
          {INTENT.map((field) => (
            <DataField key={field.label} label={field.label} value={field.value} />
          ))}
        </InView>
        <div className="flex items-center gap-2 border-t pt-4 text-sm">
          <span className="text-muted-foreground">Identified goal</span>
          <Badge variant="outline">Book a viewing</Badge>
        </div>
      </div>
    </EvidenceFrame>
  );
}

// ─── Built around what your business knows ───────────────────

const SOURCES = [
  { name: "Apartment availability", kind: "Live list", state: "Approved" },
  { name: "Lease terms & policies", kind: "Document", state: "Approved" },
  { name: "Building amenities", kind: "Page", state: "Approved" },
  { name: "Frequently asked questions", kind: "Q&A list", state: "Approved" },
  { name: "Pet policy update", kind: "Document", state: "Awaiting review" },
] as const;

export function KnowledgePanel({ className }: { className?: string }) {
  return (
    <EvidenceFrame title="Approved knowledge" meta={BUSINESS} className={className}>
      <InView as="ul" className="divide-y">
        {SOURCES.map((source) => (
          <li key={source.name} className="flex items-center gap-4 px-5 py-3.5">
            <FileTextIcon aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="truncate font-medium">{source.name}</span>
              <span className="text-xs text-muted-foreground">{source.kind}</span>
            </div>
            <Badge variant={source.state === "Approved" ? "secondary" : "outline"}>
              {source.state === "Approved" ? <CheckIcon data-icon="inline-start" /> : null}
              {source.state}
            </Badge>
          </li>
        ))}
      </InView>
      <p className="border-t bg-muted/50 px-5 py-3 text-xs text-muted-foreground">
        The agent answers only from approved sources. Anything awaiting review is not used.
      </p>
    </EvidenceFrame>
  );
}

// ─── Capture the opportunity ─────────────────────────────────

const CAPTURED = [
  { label: "Name", value: CUSTOMER.name },
  { label: "Phone", value: "+251 •• ••• 4821" },
  { label: "Email", value: "hana.bekele@example.com" },
  { label: "Interest", value: "Apartment 4B" },
  { label: "Requirement", value: "Two bedrooms, parking" },
  { label: "Location", value: "Relocating from Hawassa" },
  { label: "Preferred time", value: "Sat 10:00" },
  { label: "Notes", value: "Balcony preferred" },
] as const;

export function CapturePanel({ className }: { className?: string }) {
  return (
    <EvidenceFrame title="Captured during the conversation" meta="No form required" className={className}>
      <InView as="dl" className="grid grid-cols-2 gap-x-6 gap-y-5 p-5 sm:p-6">
        {CAPTURED.map((field) => (
          <DataField key={field.label} label={field.label} value={field.value} />
        ))}
      </InView>
      <div className="flex items-center justify-between gap-3 border-t px-5 py-3.5">
        <span className="flex items-center gap-2 text-sm">
          <ClipboardListIcon aria-hidden="true" className="size-4 text-gold-ink" />
          Lead created for the leasing team
        </span>
        <Badge variant="secondary">Viewing requested</Badge>
      </div>
    </EvidenceFrame>
  );
}

// ─── Every conversation in one place ─────────────────────────

const THREADS = [
  { name: CUSTOMER.name, initials: CUSTOMER.initials, preview: "Can we see 4B on Saturday?", status: "Viewing requested", time: "09:16", active: true },
  { name: "Yonas Girma", initials: "YG", preview: "Is the gym open to residents…", status: "Answered", time: "08:52" },
  { name: "Meron Tadesse", initials: "MT", preview: "I'd like to discuss the lease…", status: "Needs team", time: "08:30" },
  { name: "Samuel Haile", initials: "SH", preview: "Thanks, see you Thursday.", status: "Booked", time: "Yesterday" },
] as const;

export function InboxWorkspace({ className }: { className?: string }) {
  return (
    <EvidenceFrame title="Conversation inbox" meta={BUSINESS} className={className} bodyClassName="grid md:grid-cols-[15rem_minmax(0,1fr)] xl:grid-cols-[15rem_minmax(0,1fr)_16rem]">
      <ul className="hidden flex-col border-r md:flex">
        {THREADS.map((thread) => (
          <li
            key={thread.name}
            className={cn(
              "flex gap-3 border-b border-l-2 border-l-transparent px-4 py-3.5",
              "active" in thread && "border-l-gold bg-muted/70",
            )}
          >
            <Avatar size="sm" className="mt-0.5">
              <AvatarFallback className="text-[0.625rem]">{thread.initials}</AvatarFallback>
            </Avatar>
            <div className="flex min-w-0 flex-1 flex-col gap-0.5">
              <div className="flex items-baseline justify-between gap-2">
                <span className="truncate font-medium">{thread.name}</span>
                <span className="shrink-0 text-xs text-muted-foreground">{thread.time}</span>
              </div>
              <span className="truncate text-xs text-muted-foreground">{thread.preview}</span>
              <span className="pt-1 text-xs text-gold-ink">{thread.status}</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex min-w-0 flex-col">
        <div className="flex items-center justify-between gap-3 border-b px-5 py-3">
          <div className="flex flex-col">
            <span className="font-medium">{CUSTOMER.name}</span>
            <span className="text-xs text-muted-foreground">Website · started 09:14</span>
          </div>
          <Badge variant="outline">
            <UserRoundCheckIcon data-icon="inline-start" />
            {STAFF.name}
          </Badge>
        </div>
        <div className="flex flex-col gap-4 p-5">
          <CustomerLine>Can we see 4B on Saturday morning?</CustomerLine>
          <AgentLine>Saturday at 10:00 or 11:30 is open. Which time suits you?</AgentLine>
          <CustomerLine>10:00 please.</CustomerLine>
          <SystemNote icon={CalendarCheck2Icon}>Viewing booked, Sat 10:00</SystemNote>
          <div className="flex gap-3 rounded-lg border border-dashed border-gold/60 bg-gold/10 p-3.5">
            <StickyNoteIcon aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold-ink" />
            <p className="text-[0.8125rem]">
              <span className="font-medium">Internal note:</span> Relocating for work. Ask about the
              second parking space at the viewing.
            </p>
          </div>
        </div>
      </div>

      <aside className="hidden flex-col gap-5 border-l bg-muted/40 p-5 xl:flex">
        <div className="flex items-center gap-3">
          <Avatar size="lg">
            <AvatarFallback>{CUSTOMER.initials}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium">{CUSTOMER.name}</span>
            <span className="text-xs text-muted-foreground">Prospective tenant</span>
          </div>
        </div>
        <dl className="flex flex-col gap-4">
          <DataField label="Intent" value="Rent apartment 4B" />
          <DataField label="Status" value="Viewing booked" />
          <DataField label="Owner" value={`${STAFF.name}, ${STAFF.role}`} />
          <DataField label="Next follow-up" value="Reminder, Fri 18:00" />
        </dl>
      </aside>
    </EvidenceFrame>
  );
}

// ─── One customer experience across connected channels ───────

export function ChannelTimeline({ className }: { className?: string }) {
  const events = [
    { when: "Mon 21:40", channel: LAUNCH_CHANNELS[0]?.name ?? "Website", text: "Asked about two-bedroom availability." },
    { when: "Tue 09:14", channel: LAUNCH_CHANNELS[0]?.name ?? "Website", text: "Returned. The agent continued from Monday's question." },
    { when: "Tue 09:16", channel: "Team", text: "Viewing booked and assigned to leasing." },
  ];
  return (
    <EvidenceFrame title="Customer history" meta={CUSTOMER.name} className={className}>
      <InView as="ol" className="flex flex-col gap-0 p-5 sm:p-6">
        {events.map((event, index) => (
          <li key={event.when} className="relative flex gap-4 pb-6 last:pb-0">
            {index < events.length - 1 ? (
              <span aria-hidden="true" className="absolute top-6 bottom-0 left-[0.6875rem] w-px bg-border" />
            ) : null}
            <span className="relative mt-1 grid size-6 shrink-0 place-items-center rounded-full border bg-card">
              <span className="size-1.5 rounded-full bg-gold" />
            </span>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{event.channel}</Badge>
                <span className="text-xs text-muted-foreground">{event.when}</span>
              </div>
              <p>{event.text}</p>
            </div>
          </li>
        ))}
      </InView>
    </EvidenceFrame>
  );
}

// ─── Not every conversation has to start with the customer ───

const FOLLOW_UPS = [
  { kind: "Appointment reminder", to: CUSTOMER.name, when: "Fri 18:00", text: "A reminder of your viewing of 4B tomorrow at 10:00." },
  { kind: "Quotation follow-up", to: "Meron Tadesse", when: "Mon 10:00", text: "Following up on the lease summary we sent last week." },
  { kind: "Availability update", to: "Yonas Girma", when: "When 2B is listed", text: "The two-bedroom you asked about is now available." },
  { kind: "Request follow-up", to: "Samuel Haile", when: "After viewing", text: "Thank you for visiting. Would you like to reserve the apartment?" },
] as const;

export function FollowUpQueue({ className }: { className?: string }) {
  return (
    <EvidenceFrame title="Scheduled follow-ups" meta="Sent with context" className={className}>
      <InView as="ul" className="divide-y">
        {FOLLOW_UPS.map((item) => (
          <li key={item.kind} className="flex flex-col gap-1.5 px-5 py-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="flex items-center gap-2 font-medium">
                <BellIcon aria-hidden="true" className="size-4 text-gold-ink" />
                {item.kind}
              </span>
              <span className="text-xs text-muted-foreground">{item.when}</span>
            </div>
            <p className="text-muted-foreground">
              To {item.to}: &ldquo;{item.text}&rdquo;
            </p>
          </li>
        ))}
      </InView>
    </EvidenceFrame>
  );
}

// ─── AI when it helps. People when they matter. ──────────────

export function HandoffExample({ className }: { className?: string }) {
  return (
    <EvidenceFrame title={BUSINESS} meta="Website conversation" className={className}>
      <div className="flex flex-col gap-5 p-5 sm:p-7">
        <CustomerLine>
          If we sign for 18 months instead of 12, is there any flexibility on the rent?
        </CustomerLine>
        <AgentLine>
          That is a question for our leasing team. I&apos;ve passed on what you&apos;ve told me so far, so you
          won&apos;t need to repeat it.
        </AgentLine>
        <SystemNote icon={UserRoundCheckIcon}>
          {STAFF.name} joined with the conversation summary
        </SystemNote>
        <AgentLine label={`${STAFF.name}, ${STAFF.role}`}>
          Hi Hana, Daniel here. I can see you&apos;re looking at 4B from March. Let&apos;s talk through an
          18-month term at Saturday&apos;s viewing.
        </AgentLine>
      </div>
    </EvidenceFrame>
  );
}

// ─── See what customers are actually asking for ──────────────

const TOPICS = [
  { topic: "Two-bedroom availability", weight: 0.92 },
  { topic: "Parking", weight: 0.71 },
  { topic: "Lease length", weight: 0.55 },
  { topic: "Pet policy", weight: 0.38 },
  { topic: "Move-in costs", weight: 0.3 },
] as const;

export function ReportingPreview({ className }: { className?: string }) {
  return (
    <EvidenceFrame
      title="What customers are asking"
      meta="This month"
      caption="Illustrative interface. Reporting shows real figures once a system is live."
      className={className}
    >
      <div className="grid gap-6 p-5 sm:p-6 md:grid-cols-[1.3fr_1fr]">
        <div className="flex flex-col gap-3.5">
          <span className="text-xs text-muted-foreground">Common questions, relative volume</span>
          <ul className="flex flex-col gap-3">
            {TOPICS.map((item) => (
              <li key={item.topic} className="flex flex-col gap-1.5">
                <span>{item.topic}</span>
                <span className="h-1.5 rounded-full bg-muted">
                  <span
                    className="block h-full rounded-full bg-primary"
                    style={{ width: `${item.weight * 100}%` }}
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
        <dl className="grid grid-cols-2 content-start gap-x-4 gap-y-5 border-t pt-5 md:border-t-0 md:border-l md:pt-0 md:pl-6">
          {["Conversations", "Qualified leads", "Appointments", "Handoffs"].map((label) => (
            <div key={label} className="flex flex-col gap-1.5">
              <dt className="text-xs text-muted-foreground">{label}</dt>
              <dd aria-label="Shown once live">
                <span className="block h-6 w-12 rounded bg-muted" />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </EvidenceFrame>
  );
}

// ─── Compact workflow icons (shared by Home and the agent page) ──

export const WORKFLOW_ICONS = {
  understand: ScanSearchIcon,
  answer: BookOpenCheckIcon,
  capture: ClipboardListIcon,
  act: CalendarCheck2Icon,
  connect: UserRoundCheckIcon,
  "follow-up": BellIcon,
} as const;
