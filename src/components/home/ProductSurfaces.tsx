"use client";

import { useState } from "react";
import { openVoiceflowChat } from "@/components/layout/VoiceflowChat";

type SurfaceTab = "agent" | "inbox" | "workflow";

export function CustomerAgentSurface({ compact = false }: { compact?: boolean }) {
  const [activeTab, setActiveTab] = useState<SurfaceTab>("agent");

  return (
    <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-[0_32px_90px_rgba(13,27,42,0.12)]">
      {/* Top Browser / Workspace Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-ink/8 bg-[#FAF8F4] px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-ink/15" />
            <span className="size-2.5 rounded-full bg-ink/15" />
            <span className="size-2.5 rounded-full bg-ink/15" />
          </div>
          <span className="h-3 w-px bg-ink/10" />
          <div className="flex items-center gap-2">
            <span className="grid size-6 place-items-center rounded-md bg-ink font-serif text-xs font-bold text-white">
              M
            </span>
            <span className="font-mono text-xs font-medium tracking-tight text-ink/70">
              Meleph OS / Customer System
            </span>
          </div>
        </div>

        {/* Intercom-style Switcher Tabs */}
        <div className="mt-2 flex items-center gap-1 rounded-full bg-ink/5 p-1 sm:mt-0">
          <button
            type="button"
            onClick={() => setActiveTab("agent")}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
              activeTab === "agent"
                ? "bg-ink text-white shadow-sm"
                : "text-ink/60 hover:text-ink"
            }`}
          >
            AI Agent
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("inbox")}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
              activeTab === "inbox"
                ? "bg-ink text-white shadow-sm"
                : "text-ink/60 hover:text-ink"
            }`}
          >
            Team Inbox
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("workflow")}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
              activeTab === "workflow"
                ? "bg-ink text-white shadow-sm"
                : "text-ink/60 hover:text-ink"
            }`}
          >
            Automations
          </button>
        </div>

        {/* Live Status indicator */}
        <div className="hidden items-center gap-2 text-xs font-medium text-emerald-700 sm:flex">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-600" />
          </span>
          Mel Active
        </div>
      </div>

      {/* Surface Content Area */}
      <div className="min-h-[500px]">
        {activeTab === "agent" && <AgentView compact={compact} />}
        {activeTab === "inbox" && <InboxView compact={compact} />}
        {activeTab === "workflow" && <WorkflowVisualView />}
      </div>
    </div>
  );
}

/** 1. AI Agent Front-Facing Customer Experience with Live Reasoning */
function AgentView({ compact }: { compact?: boolean }) {
  return (
    <div className={`grid ${compact ? "md:grid-cols-[1fr]" : "lg:grid-cols-[1fr_300px]"}`}>
      <div className="flex flex-col justify-between p-6 sm:p-8">
        {/* Customer Header */}
        <div className="flex items-center justify-between border-b border-ink/8 pb-4">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-full bg-[#EFE9DD] font-serif font-bold text-ink">
              M
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-ink">Mel · Meleph Agent</p>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-emerald-700 border border-emerald-200">
                  VERIFIED KNOWLEDGE
                </span>
              </div>
              <p className="text-xs text-ink/45">Speaks on behalf of Meleph · Instant response</p>
            </div>
          </div>
          <button
            type="button"
            onClick={openVoiceflowChat}
            className="group hidden items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-xs font-medium text-white shadow-sm transition-all hover:bg-ink/90 sm:flex"
          >
            <span>Test Live</span>
            <span className="transition-transform group-hover:translate-x-0.5">↗</span>
          </button>
        </div>

        {/* Live Conversation Stream */}
        <div className="my-6 space-y-4">
          {/* Inbound Customer Enquiry */}
          <div className="flex flex-col items-start gap-1">
            <span className="text-[11px] font-medium text-ink/40">Alex Kim · 2m ago</span>
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-[#F4F1EA] p-4 text-sm leading-relaxed text-ink/80 border border-ink/5">
              We&apos;re looking for an enterprise package for a team of around 75. Can you help qualify what fits our inbound operations?
            </div>
          </div>

          {/* AI Reasoning / Knowledge Retrieval Tag */}
          <div className="flex items-center gap-2 pl-2">
            <span className="size-1.5 rounded-full bg-gold" />
            <span className="font-mono text-[11px] text-ink/50">
              Approved Knowledge Match: Enterprise Systems (Tier 3) · 99.4% confidence
            </span>
          </div>

          {/* Mel's Response */}
          <div className="flex flex-col items-end gap-1">
            <span className="text-[11px] font-medium text-ink/40">Mel · AI Agent · 1m ago</span>
            <div className="max-w-[88%] rounded-2xl rounded-tr-sm bg-ink p-4 text-sm leading-relaxed text-white/90 shadow-sm">
              <p>
                Yes, absolutely. For a 75-person team, we configure the AI Customer Agent with dedicated channel connectors, inbound routing rules, and multi-seat team handoffs.
              </p>
              <div className="mt-3 rounded-xl bg-white/10 p-3 text-xs leading-relaxed text-white/80 border border-white/10">
                <span className="font-semibold text-gold">Suggested next step:</span> I can capture your qualification details now and connect you directly with Maya Chen on our enterprise team.
              </div>
            </div>
          </div>

          {/* Action Chips Generated */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#EAE5DA] px-3 py-1 text-xs font-medium text-ink/75">
              ✓ Qualification Captured
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-[#EAE5DA] px-3 py-1 text-xs font-medium text-ink/75">
              📅 Slot Reserved (Thu 14:30)
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 border border-emerald-200">
              ● Ready for Team Handoff
            </span>
          </div>
        </div>

        {/* Input Simulation Bar */}
        <div className="flex items-center justify-between rounded-xl border border-ink/10 bg-[#FAF9F5] p-2 pl-4">
          <span className="text-xs text-ink/40">Type a question or click below to launch Mel...</span>
          <button
            type="button"
            onClick={openVoiceflowChat}
            className="flex items-center gap-1.5 rounded-lg bg-ink px-4 py-2 text-xs font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            <span>Chat with Mel</span>
            <span>→</span>
          </button>
        </div>
      </div>

      {/* Customer 360 Attribute Panel (Right column on desktop) */}
      {!compact && (
        <aside className="hidden border-l border-ink/8 bg-[#FAF8F4] p-6 lg:block">
          <div className="flex items-center justify-between pb-4 border-b border-ink/8">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink/45">
              Extracted Context
            </p>
            <span className="font-mono text-[10px] text-ink/40">CRM SYNC</span>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-[#E8E1D5] font-serif text-sm font-bold text-ink">
              AK
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">Alex Kim</p>
              <p className="text-xs text-ink/45">Northstar Labs</p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <MetadataField label="Customer Intent" value="Enterprise Consultation" />
            <MetadataField label="Team Size" value="75 users" />
            <MetadataField label="Qualification Status" value="Qualified (Tier 1)" highlight />
            <MetadataField label="Assigned Specialist" value="Maya Chen · Enterprise" />
            <MetadataField label="Channel" value="Website Webchat" />
            <MetadataField label="Target Launch" value="Q4 2026" />
          </div>

          <div className="mt-7 rounded-2xl border border-ink/8 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-ink">Next Action</span>
              <span className="text-emerald-700 font-medium">Scheduled</span>
            </div>
            <p className="mt-2 text-xs font-semibold text-ink">Architecture Walkthrough</p>
            <p className="text-[11px] text-ink/45">Thursday at 14:30 GMT</p>
          </div>
        </aside>
      )}
    </div>
  );
}

/** 2. Team Inbox / Workspace View (Modeled after Intercom's High-Velocity Inbox) */
function InboxView({ compact }: { compact?: boolean }) {
  const tickets = [
    { name: "Alex Kim", company: "Northstar Labs", issue: "Enterprise package qualification", time: "2m", active: true, unread: false },
    { name: "Elena Rostova", company: "AeroLease", issue: "Aviation enquiry follow-up", time: "14m", active: false, unread: true },
    { name: "Marcus Vance", company: "Prime Realty", issue: "Viewing schedule request", time: "1h", active: false, unread: false },
    { name: "Siddharth Rao", company: "FinTech Orbit", issue: "Custom knowledge integration", time: "3h", active: false, unread: false },
  ];

  return (
    <div className={`grid ${compact ? "md:grid-cols-[200px_1fr]" : "lg:grid-cols-[240px_1fr_260px]"}`}>
      {/* Inbox List Column */}
      <div className="border-r border-ink/8 bg-[#FAF8F4] p-3">
        <div className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-ink/50">
          <span>ALL CONVERSATIONS</span>
          <span className="rounded-full bg-ink/10 px-1.5 py-0.5 text-[10px] text-ink">4</span>
        </div>
        <div className="mt-2 space-y-1">
          {tickets.map((t) => (
            <div
              key={t.name}
              className={`cursor-pointer rounded-xl p-3 transition-colors ${
                t.active ? "bg-white shadow-sm border border-ink/8" : "hover:bg-white/60"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-ink">{t.name}</span>
                <span className="text-[10px] text-ink/40">{t.time}</span>
              </div>
              <p className="mt-0.5 truncate text-[11px] text-ink/45">{t.company}</p>
              <p className="mt-1 truncate text-xs text-ink/70">{t.issue}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Conversation & Internal Note Pane */}
      <div className="flex flex-col justify-between p-6">
        <div>
          <div className="flex items-center justify-between border-b border-ink/8 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold text-ink">Alex Kim</h3>
                <span className="rounded-full bg-ink/5 px-2 py-0.5 text-[10px] font-medium text-ink/60">
                  Northstar Labs
                </span>
              </div>
              <p className="mt-0.5 text-xs text-ink/40">Assigned to Maya Chen · Mel Agent co-handling</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-800 border border-emerald-200">
                In Progress
              </span>
              <button
                type="button"
                className="rounded-lg bg-ink px-3 py-1.5 text-xs font-medium text-white transition-opacity hover:opacity-90"
              >
                Take Over
              </button>
            </div>
          </div>

          {/* Internal Team Note Banner */}
          <div className="my-5 rounded-xl border border-amber-200/80 bg-amber-50/70 p-3.5 text-xs text-amber-950">
            <span className="font-semibold text-amber-900">📌 AI Context Summary:</span> Alex qualified as enterprise tier (75 seats). Qualification score: 98/100. Consultation auto-scheduled for Thursday. Context fully pre-filled below.
          </div>

          <div className="space-y-3">
            <div className="rounded-xl bg-[#F4F1EA] p-3 text-xs leading-relaxed text-ink/75">
              <span className="font-semibold text-ink">Customer:</span> We need a system that connects directly to our internal HubSpot pipelines and routes urgent inquiries to on-call engineers.
            </div>
            <div className="rounded-xl bg-ink p-3 text-xs leading-relaxed text-white/90">
              <span className="font-semibold text-gold">Mel (AI Agent):</span> Understood. Our custom workflow engine connects to HubSpot webhooks and handles priority routing with human fallback.
            </div>
          </div>
        </div>

        {/* Team Reply Box */}
        <div className="mt-6 rounded-xl border border-ink/10 bg-[#FAF9F5] p-3">
          <textarea
            readOnly
            value="Hi Alex, Maya here from Meleph. I've reviewed Mel's qualification summary and your 75-seat requirements. Looking forward to our Thursday walkthrough."
            rows={2}
            className="w-full resize-none bg-transparent text-xs text-ink focus:outline-none"
          />
          <div className="flex items-center justify-between pt-2 border-t border-ink/5">
            <span className="text-[10px] text-ink/40">Reply as human specialist (Maya Chen)</span>
            <span className="rounded-md bg-ink px-3 py-1 text-xs font-medium text-white">Send Note</span>
          </div>
        </div>
      </div>

      {/* Right Column CRM Attributes */}
      {!compact && (
        <aside className="hidden border-l border-ink/8 bg-[#FAF8F4] p-5 lg:block">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink/40">
            Participant Profile
          </p>
          <div className="mt-4 space-y-3.5">
            <MetadataField label="Email" value="alex@northstarlabs.com" />
            <MetadataField label="Location" value="Stockholm, Sweden" />
            <MetadataField label="Team Size" value="75 Employees" />
            <MetadataField label="Budget Range" value="$25,000 - $50,000" />
            <MetadataField label="Urgency" value="High (Launch next month)" />
          </div>
          <div className="mt-6 pt-5 border-t border-ink/8">
            <p className="text-[11px] font-semibold text-ink/50 uppercase tracking-wider">
              Connected Channels
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <span className="rounded-md bg-white border border-ink/8 px-2 py-1 text-[10px] font-medium text-ink">
                Web Chat (Active)
              </span>
              <span className="rounded-md bg-white border border-ink/8 px-2 py-1 text-[10px] font-medium text-ink/60">
                Email
              </span>
              <span className="rounded-md bg-white border border-ink/8 px-2 py-1 text-[10px] font-medium text-ink/60">
                WhatsApp
              </span>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}

/** 3. Automated Workflow Visualizer */
function WorkflowVisualView() {
  const steps = [
    { title: "Inbound Event", sub: "Message received on Web / WhatsApp", status: "Triggered", icon: "01" },
    { title: "Intent & Extraction", sub: "AI classifies request against verified docs", status: "Resolved (12ms)", icon: "02" },
    { title: "Lead Qualification", sub: "Captured team size, budget, and urgency", status: "Qualified", icon: "03" },
    { title: "CRM Sync & Routing", sub: "Enriched record in HubSpot + Slack alert", status: "Synced", icon: "04" },
    { title: "Specialist Assigned", sub: "Assigned to Maya Chen with pre-filled context", status: "Complete", icon: "05" },
  ];

  return (
    <div className="p-6 sm:p-10">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/8 pb-6">
        <div>
          <h3 className="font-serif text-2xl font-semibold text-ink">
            Real-Time Qualification &amp; Handoff Workflow
          </h3>
          <p className="mt-1 text-xs text-ink/50">
            One conversation seamlessly propagating context across people and systems.
          </p>
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800 border border-emerald-200">
          ● Workflow Pipeline Active
        </span>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((s, idx) => (
          <div
            key={s.title}
            className="group relative rounded-2xl border border-ink/8 bg-[#FAF8F4] p-5 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-gold">{s.icon}</span>
              <span className="rounded-full bg-ink/5 px-2 py-0.5 text-[10px] font-medium text-ink/60">
                {s.status}
              </span>
            </div>
            <h4 className="mt-6 text-sm font-semibold text-ink">{s.title}</h4>
            <p className="mt-1.5 text-xs leading-relaxed text-ink/50">{s.sub}</p>
            {idx < steps.length - 1 && (
              <span className="absolute -right-2.5 top-1/2 z-10 hidden size-5 -translate-y-1/2 place-items-center rounded-full bg-ink font-mono text-[10px] text-white shadow-sm lg:grid">
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function MetadataField({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-wider text-ink/40">{label}</p>
      <p className={`mt-0.5 text-xs font-medium ${highlight ? "text-emerald-700 font-semibold" : "text-ink"}`}>
        {value}
      </p>
    </div>
  );
}

/** Legacy / Supporting export for custom systems page */
export function WorkflowSurface() {
  const steps = [
    ["Request received", "Customer operations", "Complete"],
    ["Classify request", "Enterprise enquiry", "Complete"],
    ["Gather account data", "CRM + knowledge", "Complete"],
    ["Create team task", "Enterprise sales", "In progress"],
    ["Human review", "Maya Chen", "Waiting"],
    ["Update system", "After approval", "Queued"],
  ];

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
        <div>
          <h3 className="text-sm font-semibold text-white">Enterprise enquiry workflow</h3>
          <p className="mt-1 text-xs text-white/45">One request moving across people and systems</p>
        </div>
        <span className="rounded-full bg-emerald-950/80 px-3 py-1.5 text-xs font-medium text-emerald-400 border border-emerald-800/40">
          ● Running
        </span>
      </div>
      <div className="p-4 sm:p-6 space-y-2.5">
        {steps.map(([title, detail, status], index) => (
          <div
            key={title}
            className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-4 transition-colors hover:bg-white/[0.06]"
          >
            <span
              className={`grid size-8 shrink-0 place-items-center rounded-full text-xs font-semibold ${
                status === "Complete"
                  ? "bg-emerald-900/60 text-emerald-300 border border-emerald-700/50"
                  : status === "In progress"
                  ? "bg-gold text-ink font-bold"
                  : "bg-white/10 text-white/40"
              }`}
            >
              {status === "Complete" ? "✓" : index + 1}
            </span>
            <div>
              <p className="text-sm font-medium text-white">{title}</p>
              <p className="mt-0.5 text-xs text-white/40">{detail}</p>
            </div>
            <span className="ml-auto hidden text-xs text-white/40 sm:block">{status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
