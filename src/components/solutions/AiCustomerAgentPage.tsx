"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { openVoiceflowChat } from "@/components/layout/VoiceflowChat";

/* ─── Scenario Data for the Live Interactive Agent Demo ──── */
type ScenarioKey = "enterprise" | "realestate" | "aviation";

interface Scenario {
  title: string;
  badge: string;
  customerQuery: string;
  customerTime: string;
  agentResponse: string;
  knowledgeMatch: string;
  confidence: string;
  intentTag: string;
  actionTitle: string;
  actionDetail: string;
  customerProfile: {
    name: string;
    org: string;
    initials: string;
    requirement: string;
    budget: string;
    timeline: string;
    channel: string;
    assigned: string;
  };
}

const scenarios: Record<ScenarioKey, Scenario> = {
  enterprise: {
    title: "Enterprise Systems",
    badge: "B2B SaaS / Services",
    customerQuery:
      "We're looking for an enterprise package for a team of around 75 with custom CRM sync and priority routing. Can you help qualify what fits our inbound operations?",
    customerTime: "Just now",
    agentResponse:
      "Yes, absolutely. For a 75-person team, we configure the AI Customer Agent with dedicated HubSpot and Salesforce webhooks, custom routing rules, and multi-seat team handoffs with zero repeated questions.",
    knowledgeMatch: "Enterprise Systems (Tier 3) · Verified SLAs & Integration Matrix",
    confidence: "99.4%",
    intentTag: "High Intent · Enterprise Consultation",
    actionTitle: "Architecture Walkthrough Reserved",
    actionDetail: "Live slot with Maya Chen (Enterprise Lead) · Calendar invite dispatched",
    customerProfile: {
      name: "Alex Kim",
      org: "Northstar Labs",
      initials: "AK",
      requirement: "75 team seats, custom CRM webhooks",
      budget: "$25,000 - $50,000 / year",
      timeline: "Target launch in Q4",
      channel: "Website Webchat (Encrypted)",
      assigned: "Maya Chen · Enterprise Specialist",
    },
  },
  realestate: {
    title: "Prime Real Estate",
    badge: "Property & Leasing",
    customerQuery:
      "Hi, is the 2-bedroom penthouse at The Grandview still available for rent next month? What are the lease requirements and can I tour it this Friday?",
    customerTime: "1m ago",
    agentResponse:
      "The Grandview Penthouse 14B is available starting November 1st at $4,200/mo, including private terrace and parking. Minimum lease is 12 months with verified income. I can reserve an on-site viewing for you this Friday at 15:00 or 16:30.",
    knowledgeMatch: "Grandview Portfolio Inventory API · Current Unit Status (Unit 14B)",
    confidence: "99.8%",
    intentTag: "Immediate Viewing Request",
    actionTitle: "Tour Reservation Confirmed",
    actionDetail: "Friday 15:00 · Building Concierge Pass Generated for Marcus Vance",
    customerProfile: {
      name: "Marcus Vance",
      org: "Private Client",
      initials: "MV",
      requirement: "2-bedroom penthouse, long-term lease",
      budget: "$4,200 / month",
      timeline: "Move-in November 1st",
      channel: "WhatsApp Business API",
      assigned: "David Sterling · Senior Leasing Agent",
    },
  },
  aviation: {
    title: "Executive Aviation",
    badge: "Private Charter & Logistics",
    customerQuery:
      "Need a quote for 6 passengers from London Farnborough (EGLF) to Geneva (LSGG) departing Friday morning, returning Sunday evening. Light jet or mid-size preferred.",
    customerTime: "3m ago",
    agentResponse:
      "For 6 passengers London–Geneva, our fleet operations recommend the Citation XLS+ (mid-size) or Phenom 300 (light jet). Flight time is approx 1h 25m. I've compiled live hangar availability and drafted an indicative quotation.",
    knowledgeMatch: "Fleet Charter Availability Database · EGLF/LSGG Route Calculator",
    confidence: "99.1%",
    intentTag: "Urgent Charter Quotation",
    actionTitle: "Official Flight Quote Dispatched",
    actionDetail: "Quote #CH-8821 sent to Elena Rostova · Flight ops notified",
    customerProfile: {
      name: "Elena Rostova",
      org: "AeroLease Partners",
      initials: "ER",
      requirement: "6 Pax, EGLF ⇄ LSGG return",
      budget: "Indicative €18,400 charter rate",
      timeline: "Departure this Friday 08:30 GMT",
      channel: "Executive Web Portal",
      assigned: "Julian Thorne · Flight Operations",
    },
  },
};

/* ─── Workflow Sequence Mental Model ─────────────────────── */
const workflowSteps = [
  {
    step: "01",
    name: "Understand",
    summary: "Recognises what the customer is asking and what they are trying to achieve.",
    detail: "Natural intent classification, entity extraction, and multi-turn conversational context.",
    pill: "Intent Extraction",
    evidence: "Classifies 'enterprise package for 75' into Tier 3 enterprise qualification.",
  },
  {
    step: "02",
    name: "Answer",
    summary: "Responds using information approved by your business.",
    detail: "Grounded strictly in verified business documentation, APIs, and company knowledge bases.",
    pill: "Grounded Knowledge",
    evidence: "Cites exact SLA guarantees, pricing structures, and current unit availability.",
  },
  {
    step: "03",
    name: "Capture",
    summary: "Collects the details your team needs, including contact details and intent.",
    detail: "Zero clunky web forms. Crucial operational details are gathered organically during chat.",
    pill: "Frictionless Capture",
    evidence: "Automatically extracts name, company, team size, budget, and target launch date.",
  },
  {
    step: "04",
    name: "Act",
    summary: "Guides the customer toward a quotation, appointment, enquiry, or checkout.",
    detail: "Triggers real business systems: calendar slots, instant PDF quotes, webhooks, or payments.",
    pill: "System Execution",
    evidence: "Locks calendar slot, creates CRM opportunity, and triggers Slack alert to rep.",
  },
  {
    step: "05",
    name: "Connect",
    summary: "Keeps the conversation available to your team with the context already captured.",
    detail: "Seamless human handoff to your team with complete briefing notes and history.",
    pill: "Zero-Friction Handoff",
    evidence: "Maya Chen steps into the thread without the customer ever repeating themselves.",
  },
  {
    step: "06",
    name: "Follow up",
    summary: "Sends proactive reminders, quotation check-ins, and contextual updates.",
    detail: "Automated outbound intelligence triggers messages at the exact right moment.",
    pill: "Proactive Outbound",
    evidence: "Dispatches meeting reminder 24h prior and re-engages stalled quote requests.",
  },
] as const;

/* ─── Channel Options ────────────────────────────────────── */
type ChannelKey = "web" | "whatsapp" | "instagram" | "email";

const channelData: Record<
  ChannelKey,
  {
    name: string;
    icon: string;
    badge: string;
    preview: string;
    metric: string;
  }
> = {
  web: {
    name: "Website Live Chat",
    icon: "🌐",
    badge: "INSTANT IN-PAGE",
    preview:
      "Native floating web widget grounded in real-time page context. Converts high-intent visitors immediately while browsing your product.",
    metric: "< 2.1s first response",
  },
  whatsapp: {
    name: "WhatsApp Business",
    icon: "💬",
    badge: "GLOBAL DIRECT",
    preview:
      "Official Meta Cloud API connection. Send rich interactive cards, media, booking confirmations, and outbound notifications.",
    metric: "98% read rate",
  },
  instagram: {
    name: "Instagram Direct",
    icon: "📸",
    badge: "SOCIAL CONVERSION",
    preview:
      "Turn story mentions, ad taps, and DMs into qualified sales conversations without leaving the Instagram inbox.",
    metric: "Instant DM resolution",
  },
  email: {
    name: "Email Sync",
    icon: "✉️",
    badge: "TWO-WAY THREADING",
    preview:
      "Parses inbound email inquiries, drafts contextual replies using verified business documents, and routes complex threads to agents.",
    metric: "100% CRM log sync",
  },
};

export function AiCustomerAgentPage() {
  const [, startTransition] = useTransition();
  const [activeScenario, setActiveScenario] = useState<ScenarioKey>("enterprise");
  const [activeTab, setActiveTab] = useState<"agent" | "inbox" | "workflow" | "reporting">(
    "agent"
  );
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);
  const [activeChannel, setActiveChannel] = useState<ChannelKey>("web");
  const [activeInboxView, setActiveInboxView] = useState<"alex" | "marcus" | "elena">("alex");

  const currentScenario = scenarios[activeScenario];

  return (
    <div className="bg-[#FAF8F3] text-ink selection:bg-[#E8E1D6]">
      {/* ─── 1. Intercom-Caliber Hero ─────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-ink/8 pb-20 pt-16 md:pb-28 md:pt-24">
        {/* Subtle Warm Backdrop Lighting */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#FAF4E6] to-transparent opacity-70 blur-3xl" />

        <div className="home-container relative">
          <div className="mx-auto max-w-4xl text-center">
            {/* Pill Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/80 px-4 py-1.5 shadow-xs backdrop-blur-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-600" />
              </span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-ink/70">
                AI CUSTOMER AGENT
              </span>
              <span className="h-3 w-px bg-ink/15" />
              <span className="text-xs font-medium text-emerald-800">
                The Complete Customer System
              </span>
            </div>

            {/* Locked Primary Headline from AGENTS.md */}
            <h1 className="mt-8 font-serif text-[clamp(2.9rem,6vw,5.6rem)] font-normal leading-[0.98] tracking-[-0.04em] text-ink">
              From first question to next action.
            </h1>

            {/* Locked Support Copy from AGENTS.md */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink/65 md:text-xl">
              An AI Customer Agent built around your business, capable of answering customers,
              understanding what they need, capturing information and moving each conversation
              forward.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/get-started?interest=ai-customer-agent"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-[#FAF8F3] shadow-md transition-all hover:-translate-y-0.5 hover:bg-ink/90 hover:shadow-lg"
              >
                <span>Request a Demo</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>

              <a
                href="#workflow"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/70 px-6 py-4 text-sm font-semibold text-ink transition-colors hover:border-ink/30 hover:bg-white"
              >
                <span>See How It Works</span>
              </a>

              {/* Direct Live Agent Launcher Button */}
              <button
                type="button"
                onClick={openVoiceflowChat}
                className="group inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50/90 px-5 py-4 text-sm font-semibold text-emerald-900 transition-all hover:bg-emerald-100 hover:shadow-sm"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-600" />
                </span>
                <span>Try Mel Live</span>
                <span className="text-emerald-700 transition-transform group-hover:translate-x-0.5">↗</span>
              </button>
            </div>

            {/* Live Software Proof Metrics Bar */}
            <div className="mt-14 grid grid-cols-2 gap-4 border-t border-ink/8 pt-8 sm:grid-cols-4 sm:gap-8">
              <div className="text-center">
                <p className="font-serif text-3xl font-semibold text-ink">99.4%</p>
                <p className="mt-1 text-xs text-ink/50">Grounded Knowledge Match</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl font-semibold text-ink">&lt; 2.4s</p>
                <p className="mt-1 text-xs text-ink/50">Average Time to Next Step</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl font-semibold text-ink">100%</p>
                <p className="mt-1 text-xs text-ink/50">Handoff Context Preserved</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl font-semibold text-ink">4 Channels</p>
                <p className="mt-1 text-xs text-ink/50">Web, WhatsApp, IG &amp; Email</p>
              </div>
            </div>
          </div>

          {/* ─── Hero Product Mockup Surface (Intercom-Caliber Interactive System) ─── */}
          <div className="mt-14">
            <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-[0_32px_90px_rgba(13,27,42,0.14)]">
              {/* Top macOS/Browser Bar */}
              <div className="flex flex-wrap items-center justify-between border-b border-ink/8 bg-[#FAF8F4] px-4 py-3.5 sm:px-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-ink/15" />
                    <span className="size-2.5 rounded-full bg-ink/15" />
                    <span className="size-2.5 rounded-full bg-ink/15" />
                  </div>
                  <span className="h-3 w-px bg-ink/10" />
                  <div className="flex items-center gap-2">
                    <span className="grid size-6 place-items-center rounded-md bg-ink font-serif text-xs font-bold text-[#FAF8F3]">
                      M
                    </span>
                    <span className="font-mono text-xs font-medium tracking-tight text-ink/70">
                      Meleph OS / AI Customer Agent
                    </span>
                  </div>
                </div>

                {/* Intercom-Style View Tabs */}
                <div className="mt-2 flex items-center gap-1 rounded-full bg-ink/5 p-1 sm:mt-0">
                  <button
                    type="button"
                    onClick={() => setActiveTab("agent")}
                    className={`rounded-full px-3.5 py-1 text-xs font-medium transition-all ${
                      activeTab === "agent"
                        ? "bg-ink text-[#FAF8F3] shadow-sm"
                        : "text-ink/60 hover:text-ink"
                    }`}
                  >
                    AI Agent Experience
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("inbox")}
                    className={`rounded-full px-3.5 py-1 text-xs font-medium transition-all ${
                      activeTab === "inbox"
                        ? "bg-ink text-[#FAF8F3] shadow-sm"
                        : "text-ink/60 hover:text-ink"
                    }`}
                  >
                    Team Help Desk
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("workflow")}
                    className={`rounded-full px-3.5 py-1 text-xs font-medium transition-all ${
                      activeTab === "workflow"
                        ? "bg-ink text-[#FAF8F3] shadow-sm"
                        : "text-ink/60 hover:text-ink"
                    }`}
                  >
                    Automated Actions
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("reporting")}
                    className={`rounded-full px-3.5 py-1 text-xs font-medium transition-all ${
                      activeTab === "reporting"
                        ? "bg-ink text-[#FAF8F3] shadow-sm"
                        : "text-ink/60 hover:text-ink"
                    }`}
                  >
                    Intelligence
                  </button>
                </div>

                {/* Live Status indicator */}
                <div className="hidden items-center gap-2 text-xs font-medium text-emerald-800 sm:flex">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-600" />
                  </span>
                  <span>System Active · 99.4% SLA</span>
                </div>
              </div>

              {/* Surface Tab 1: AI Agent Live Scenario Demonstration */}
              {activeTab === "agent" && (
                <div>
                  {/* Scenario Switcher Banner */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/6 bg-[#FAF9F6] px-6 py-2.5">
                    <span className="text-xs font-medium text-ink/50">
                      Explore realistic business conversations:
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      {(["enterprise", "realestate", "aviation"] as ScenarioKey[]).map((key) => (
                        <button
                          key={key}
                          type="button"
                          onClick={() => {
                            startTransition(() => {
                              setActiveScenario(key);
                            });
                          }}
                          className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                            activeScenario === key
                              ? "border border-ink/20 bg-white text-ink shadow-xs"
                              : "border border-transparent text-ink/50 hover:text-ink"
                          }`}
                        >
                          {scenarios[key].title}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Split Pane: Left Conversation / Right Context Inspector */}
                  <div className="grid lg:grid-cols-[1fr_320px]">
                    {/* Left: Chat Experience */}
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
                              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-emerald-800">
                                VERIFIED KNOWLEDGE
                              </span>
                            </div>
                            <p className="text-xs text-ink/45">
                              Speaks on behalf of your business · Never hallucinates
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={openVoiceflowChat}
                          className="group hidden items-center gap-1.5 rounded-full bg-ink px-3.5 py-1.5 text-xs font-medium text-[#FAF8F3] shadow-xs transition-all hover:bg-ink/90 sm:flex"
                        >
                          <span>Test in Real Widget</span>
                          <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                        </button>
                      </div>

                      {/* Chat Messages Stream */}
                      <div className="my-6 space-y-5">
                        {/* Inbound Customer Enquiry */}
                        <div className="flex flex-col items-start gap-1">
                          <span className="text-[11px] font-medium text-ink/40">
                            {currentScenario.customerProfile.name} · {currentScenario.customerTime}
                          </span>
                          <div className="max-w-[88%] rounded-2xl rounded-tl-sm border border-ink/6 bg-[#F4F1EA] p-4 text-sm leading-relaxed text-ink/80">
                            {currentScenario.customerQuery}
                          </div>
                        </div>

                        {/* AI Grounding / Reasoning Accordion Tag */}
                        <div className="flex items-center gap-2 rounded-lg border border-ink/8 bg-[#FAF8F4] px-3 py-2 text-xs text-ink/60">
                          <span className="size-1.5 rounded-full bg-gold" />
                          <span className="font-mono text-[11px]">
                            {currentScenario.knowledgeMatch} · {currentScenario.confidence} confidence
                          </span>
                        </div>

                        {/* Mel Response */}
                        <div className="flex flex-col items-end gap-1">
                          <span className="text-[11px] font-medium text-ink/40">
                            Mel · AI Customer Agent
                          </span>
                          <div className="max-w-[90%] rounded-2xl rounded-tr-sm bg-ink p-4 text-sm leading-relaxed text-[#FAF8F3]/95 shadow-sm">
                            <p>{currentScenario.agentResponse}</p>

                            {/* Direct Action Trigger Pill */}
                            <div className="mt-3.5 rounded-xl border border-white/10 bg-white/10 p-3 text-xs leading-relaxed text-white/90">
                              <div className="flex items-center justify-between">
                                <span className="font-semibold text-gold">
                                  ✓ {currentScenario.actionTitle}
                                </span>
                                <span className="rounded-md bg-white/20 px-1.5 py-0.5 font-mono text-[10px]">
                                  EXECUTION
                                </span>
                              </div>
                              <p className="mt-1 text-[11px] text-white/75">
                                {currentScenario.actionDetail}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Action Chips */}
                        <div className="flex flex-wrap items-center gap-2 pt-1">
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#EAE5DA] px-3 py-1 text-xs font-medium text-ink/75">
                            ✓ Qualification Captured
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#EAE5DA] px-3 py-1 text-xs font-medium text-ink/75">
                            ⚡ System Action Triggered
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
                            ● Context Preserved for Team
                          </span>
                        </div>
                      </div>

                      {/* Interactive Bottom Composer */}
                      <div className="flex items-center justify-between rounded-xl border border-ink/10 bg-[#FAF9F5] p-2 pl-4">
                        <span className="text-xs text-ink/40">
                          Click below to test live assistant or discuss custom setup...
                        </span>
                        <button
                          type="button"
                          onClick={openVoiceflowChat}
                          className="flex items-center gap-1.5 rounded-lg bg-ink px-4 py-2 text-xs font-medium text-[#FAF8F3] transition-transform hover:-translate-y-0.5"
                        >
                          <span>Launch Live Mel</span>
                          <span>→</span>
                        </button>
                      </div>
                    </div>

                    {/* Right: Customer 360 Attribute Pane */}
                    <aside className="border-t border-ink/8 bg-[#FAF8F4] p-6 lg:border-l lg:border-t-0">
                      <div className="flex items-center justify-between border-b border-ink/8 pb-3">
                        <p className="text-xs font-semibold uppercase tracking-wider text-ink/45">
                          Extracted Context
                        </p>
                        <span className="font-mono text-[10px] text-emerald-700">REAL-TIME SYNC</span>
                      </div>

                      <div className="mt-4 flex items-center gap-3">
                        <span className="grid size-10 place-items-center rounded-full bg-[#E8E1D5] font-serif text-sm font-bold text-ink">
                          {currentScenario.customerProfile.initials}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-ink">
                            {currentScenario.customerProfile.name}
                          </p>
                          <p className="text-xs text-ink/45">
                            {currentScenario.customerProfile.org}
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 space-y-3.5">
                        <AttributeRow
                          label="Customer Intent"
                          value={currentScenario.intentTag}
                          highlight
                        />
                        <AttributeRow
                          label="Requirements"
                          value={currentScenario.customerProfile.requirement}
                        />
                        <AttributeRow
                          label="Budget Range"
                          value={currentScenario.customerProfile.budget}
                        />
                        <AttributeRow
                          label="Timeline / Urgency"
                          value={currentScenario.customerProfile.timeline}
                        />
                        <AttributeRow
                          label="Connected Channel"
                          value={currentScenario.customerProfile.channel}
                        />
                        <AttributeRow
                          label="Assigned Specialist"
                          value={currentScenario.customerProfile.assigned}
                        />
                      </div>

                      <div className="mt-6 rounded-2xl border border-ink/8 bg-white p-4 shadow-xs">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-ink">Next Follow-Up</span>
                          <span className="font-medium text-emerald-700">Automated</span>
                        </div>
                        <p className="mt-1 text-xs font-semibold text-ink">
                          {currentScenario.actionTitle}
                        </p>
                        <p className="mt-0.5 text-[11px] text-ink/45">
                          Notification sent to assigned team
                        </p>
                      </div>
                    </aside>
                  </div>
                </div>
              )}

              {/* Surface Tab 2: Team Help Desk & Shared Inbox View */}
              {activeTab === "inbox" && (
                <div className="grid lg:grid-cols-[260px_1fr_280px]">
                  {/* Left: Conversation List */}
                  <div className="border-r border-ink/8 bg-[#FAF8F4] p-3">
                    <div className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-ink/50">
                      <span>SHARED INBOX</span>
                      <span className="rounded-full bg-ink/10 px-2 py-0.5 text-[10px] text-ink">
                        3 Active
                      </span>
                    </div>

                    <div className="mt-2 space-y-1.5">
                      <button
                        type="button"
                        onClick={() => setActiveInboxView("alex")}
                        className={`w-full text-left rounded-xl p-3 transition-colors ${
                          activeInboxView === "alex"
                            ? "border border-ink/10 bg-white shadow-xs"
                            : "hover:bg-white/60"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-ink">Alex Kim</span>
                          <span className="text-[10px] text-ink/40">2m</span>
                        </div>
                        <p className="mt-0.5 truncate text-[11px] text-ink/45">Northstar Labs</p>
                        <p className="mt-1 truncate text-xs text-ink/70">
                          Enterprise package qualification
                        </p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setActiveInboxView("marcus")}
                        className={`w-full text-left rounded-xl p-3 transition-colors ${
                          activeInboxView === "marcus"
                            ? "border border-ink/10 bg-white shadow-xs"
                            : "hover:bg-white/60"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-ink">Marcus Vance</span>
                          <span className="text-[10px] text-ink/40">12m</span>
                        </div>
                        <p className="mt-0.5 truncate text-[11px] text-ink/45">Private Client</p>
                        <p className="mt-1 truncate text-xs text-ink/70">
                          Viewing schedule request (Grandview)
                        </p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setActiveInboxView("elena")}
                        className={`w-full text-left rounded-xl p-3 transition-colors ${
                          activeInboxView === "elena"
                            ? "border border-ink/10 bg-white shadow-xs"
                            : "hover:bg-white/60"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-ink">Elena Rostova</span>
                          <span className="text-[10px] text-ink/40">28m</span>
                        </div>
                        <p className="mt-0.5 truncate text-[11px] text-ink/45">AeroLease Partners</p>
                        <p className="mt-1 truncate text-xs text-ink/70">
                          Aviation charter quotation (EGLF)
                        </p>
                      </button>
                    </div>
                  </div>

                  {/* Middle: Message Thread + Internal Team Note */}
                  <div className="flex flex-col justify-between p-6">
                    <div>
                      <div className="flex items-center justify-between border-b border-ink/8 pb-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-sm font-semibold text-ink">
                              {activeInboxView === "alex"
                                ? "Alex Kim"
                                : activeInboxView === "marcus"
                                ? "Marcus Vance"
                                : "Elena Rostova"}
                            </h3>
                            <span className="rounded-full bg-ink/5 px-2 py-0.5 text-[10px] font-medium text-ink/60">
                              {activeInboxView === "alex"
                                ? "Northstar Labs"
                                : activeInboxView === "marcus"
                                ? "Private Client"
                                : "AeroLease"}
                            </span>
                          </div>
                          <p className="mt-0.5 text-xs text-ink/40">
                            Co-piloted with Mel AI Agent · Verified Knowledge Active
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-800">
                            Handoff Ready
                          </span>
                          <button
                            type="button"
                            className="rounded-lg bg-ink px-3 py-1.5 text-xs font-medium text-[#FAF8F3] transition-opacity hover:opacity-90"
                          >
                            Take Over Conversation
                          </button>
                        </div>
                      </div>

                      {/* Internal Team Note Banner (Intercom Signature Feature) */}
                      <div className="my-5 rounded-xl border border-amber-200/80 bg-amber-50/70 p-3.5 text-xs text-amber-950">
                        <span className="font-semibold text-amber-900">
                          📌 AI Internal Briefing:
                        </span>{" "}
                        Customer requirements and timeline were automatically captured. Lead is
                        pre-qualified with complete contact details and CRM record initialized.
                      </div>

                      <div className="space-y-3">
                        <div className="rounded-xl border border-ink/5 bg-[#F4F1EA] p-3 text-xs leading-relaxed text-ink/80">
                          <span className="font-semibold text-ink">Customer:</span> We need a
                          system that connects directly to our internal HubSpot pipelines and routes
                          urgent inquiries to on-call engineers.
                        </div>
                        <div className="rounded-xl bg-ink p-3 text-xs leading-relaxed text-[#FAF8F3]/90">
                          <span className="font-semibold text-gold">Mel (AI Agent):</span> Understood.
                          Our custom workflow engine connects to HubSpot webhooks and handles
                          priority routing with human fallback.
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
                      <div className="flex items-center justify-between border-t border-ink/5 pt-2">
                        <span className="text-[10px] text-ink/40">
                          Replying as specialist (Maya Chen)
                        </span>
                        <span className="rounded-md bg-ink px-3 py-1 text-xs font-medium text-[#FAF8F3]">
                          Send Team Reply
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Participant Profile */}
                  <aside className="border-t border-ink/8 bg-[#FAF8F4] p-5 lg:border-l lg:border-t-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink/40">
                      Customer Profile
                    </p>
                    <div className="mt-4 space-y-3">
                      <AttributeRow label="Email" value="alex@northstarlabs.com" />
                      <AttributeRow label="Location" value="Stockholm, Sweden" />
                      <AttributeRow label="Team Size" value="75 Employees" />
                      <AttributeRow label="Budget" value="$25,000 - $50,000" />
                      <AttributeRow label="Urgency" value="High (Q4 Launch)" />
                    </div>

                    <div className="mt-6 border-t border-ink/8 pt-5">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-ink/50">
                        Synchronized Channels
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        <span className="rounded-md border border-ink/8 bg-white px-2 py-1 text-[10px] font-medium text-ink">
                          🌐 Web Chat
                        </span>
                        <span className="rounded-md border border-ink/8 bg-white px-2 py-1 text-[10px] font-medium text-ink/60">
                          💬 WhatsApp
                        </span>
                        <span className="rounded-md border border-ink/8 bg-white px-2 py-1 text-[10px] font-medium text-ink/60">
                          ✉️ Email
                        </span>
                      </div>
                    </div>
                  </aside>
                </div>
              )}

              {/* Surface Tab 3: Automated Actions & Workflow Visualizer */}
              {activeTab === "workflow" && (
                <div className="p-6 sm:p-10">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/8 pb-6">
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-ink">
                        Real-Time Action &amp; System Trigger Pipeline
                      </h3>
                      <p className="mt-1 text-xs text-ink/50">
                        The conversation triggers business actions without manual rep data entry.
                      </p>
                    </div>
                    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800">
                      ● Automated Webhooks Active
                    </span>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {[
                      {
                        title: "Inbound Intent",
                        desc: "Recognizes high-intent request across Web or WhatsApp",
                        pill: "01 Trigger",
                      },
                      {
                        title: "Knowledge Grounding",
                        desc: "Verifies pricing & availability against company docs",
                        pill: "02 Verification",
                      },
                      {
                        title: "Lead Qualification",
                        desc: "Collects seats, budget, urgency organically in-flight",
                        pill: "03 Data Enriched",
                      },
                      {
                        title: "System Execution",
                        desc: "Reserves calendar slot & syncs HubSpot contact record",
                        pill: "04 System Sync",
                      },
                      {
                        title: "Team Context Ready",
                        desc: "Alerts assigned specialist on Slack with full dossier",
                        pill: "05 Handoff Complete",
                      },
                    ].map((step, idx) => (
                      <div
                        key={step.title}
                        className="group relative rounded-2xl border border-ink/8 bg-[#FAF8F4] p-5 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-md"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-gold">{step.pill}</span>
                        </div>
                        <h4 className="mt-5 text-sm font-semibold text-ink">{step.title}</h4>
                        <p className="mt-1.5 text-xs leading-relaxed text-ink/50">{step.desc}</p>
                        {idx < 4 && (
                          <span className="absolute -right-2.5 top-1/2 z-10 hidden size-5 -translate-y-1/2 place-items-center rounded-full bg-ink font-mono text-[10px] text-white shadow-xs lg:grid">
                            →
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Surface Tab 4: Reporting & Topic Intelligence */}
              {activeTab === "reporting" && (
                <div className="p-6 sm:p-10">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/8 pb-6">
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-ink">
                        Conversation Intelligence &amp; Topic Tracking
                      </h3>
                      <p className="mt-1 text-xs text-ink/50">
                        See what your customers are asking for in real time.
                      </p>
                    </div>
                    <span className="font-mono text-xs text-ink/40">UPDATED REAL-TIME</span>
                  </div>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-2xl border border-ink/8 bg-[#FAF8F4] p-5">
                      <p className="text-xs uppercase tracking-wider text-ink/40">
                        Autonomous Resolution
                      </p>
                      <p className="mt-3 font-serif text-4xl font-semibold text-ink">94.2%</p>
                      <p className="mt-1 text-xs text-emerald-700">Grounded in business docs</p>
                    </div>
                    <div className="rounded-2xl border border-ink/8 bg-[#FAF8F4] p-5">
                      <p className="text-xs uppercase tracking-wider text-ink/40">
                        Qualified Next Steps
                      </p>
                      <p className="mt-3 font-serif text-4xl font-semibold text-ink">3.8x</p>
                      <p className="mt-1 text-xs text-ink/50">Compared to static contact forms</p>
                    </div>
                    <div className="rounded-2xl border border-ink/8 bg-[#FAF8F4] p-5">
                      <p className="text-xs uppercase tracking-wider text-ink/40">
                        Avg Response Time
                      </p>
                      <p className="mt-3 font-serif text-4xl font-semibold text-ink">1.8s</p>
                      <p className="mt-1 text-xs text-emerald-700">Zero queue wait time</p>
                    </div>
                    <div className="rounded-2xl border border-ink/8 bg-[#FAF8F4] p-5">
                      <p className="text-xs uppercase tracking-wider text-ink/40">
                        Handoff Context Rate
                      </p>
                      <p className="mt-3 font-serif text-4xl font-semibold text-ink">100%</p>
                      <p className="mt-1 text-xs text-ink/50">Zero customer repetition</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. Product Workflow Sequence (Understand → Follow up) ── */}
      <section id="workflow" className="scroll-mt-24 border-b border-ink/8 py-20 md:py-28">
        <div className="home-container">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
                SYSTEM WORKFLOW
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink md:text-5xl">
                The six-step customer progression.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-ink/60">
              The Meleph AI Customer Agent moves beyond basic chat. Every step connects conversation
              directly into action and team context.
            </p>
          </div>

          {/* Interactive Progression Bar */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {workflowSteps.map((item, idx) => (
              <button
                key={item.step}
                type="button"
                onClick={() => setActiveWorkflowStep(idx)}
                className={`text-left rounded-2xl border p-5 transition-all ${
                  activeWorkflowStep === idx
                    ? "border-ink bg-white shadow-md ring-1 ring-ink/10"
                    : "border-ink/8 bg-white/50 hover:bg-white hover:border-ink/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-gold">{item.step}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[9px] font-mono uppercase ${
                      activeWorkflowStep === idx
                        ? "bg-ink text-[#FAF8F3]"
                        : "bg-ink/5 text-ink/50"
                    }`}
                  >
                    {item.pill}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-ink">{item.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink/60">{item.summary}</p>
              </button>
            ))}
          </div>

          {/* Active Step Deep Detail Card */}
          <div className="mt-6 rounded-2xl border border-ink/8 bg-white p-6 shadow-xs sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/6 pb-4">
              <div className="flex items-center gap-3">
                <span className="grid size-8 place-items-center rounded-lg bg-ink font-mono text-xs font-bold text-[#FAF8F3]">
                  {workflowSteps[activeWorkflowStep].step}
                </span>
                <h4 className="font-serif text-2xl font-semibold text-ink">
                  {workflowSteps[activeWorkflowStep].name} in Action
                </h4>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 border border-emerald-200">
                Verified Engine Behaviour
              </span>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-wider text-ink/40">Core Capability</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">
                  {workflowSteps[activeWorkflowStep].detail}
                </p>
              </div>
              <div className="rounded-xl border border-ink/6 bg-[#FAF8F4] p-4">
                <p className="text-xs uppercase tracking-wider text-ink/40">System Evidence</p>
                <p className="mt-2 font-mono text-xs leading-relaxed text-ink/80">
                  {workflowSteps[activeWorkflowStep].evidence}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. Bento Grid: Software Evidence, Not AI Hype ────────── */}
      <section className="border-b border-ink/8 bg-[#F4F0E8] py-20 md:py-32">
        <div className="home-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
              EVIDENCE, NOT DECORATION
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              Engineered for actual business operations.
            </h2>
            <p className="mt-4 text-base text-ink/60">
              Generic chatbots trap customers in loops. The Meleph system delivers tangible
              resolutions, clean handoffs, and synchronized records.
            </p>
          </div>

          {/* Intercom Bento Showcase Grid */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Bento Card 1: A conversation that actually goes somewhere */}
            <div className="flex flex-col justify-between rounded-3xl border border-ink/8 bg-white p-8 shadow-xs transition-all hover:shadow-md lg:col-span-2">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-gold">01 / RESOLUTION</span>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-800 border border-emerald-200">
                    Action-Oriented
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-ink sm:text-3xl">
                  A conversation that actually goes somewhere.
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/60">
                  Customers don’t want generic deflection. When someone asks about availability,
                  pricing, or service tiers, the agent guides them immediately into the next
                  relevant business action.
                </p>

                {/* Interactive comparison mockup */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {/* Traditional Bot Box */}
                  <div className="rounded-2xl border border-red-200 bg-red-50/50 p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-red-900">
                      <span>✕</span>
                      <span>Traditional Chatbots</span>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-red-800/80">
                      &quot;I didn&apos;t quite understand. Please choose from these 3 options or
                      fill out our 12-field form on our contact page.&quot;
                    </p>
                    <span className="mt-4 block font-mono text-[10px] text-red-700/60">
                      RESULT: Customer drops off
                    </span>
                  </div>

                  {/* Meleph Customer Agent Box */}
                  <div className="rounded-2xl border border-emerald-300 bg-emerald-50/60 p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-900">
                      <span>✓</span>
                      <span>Meleph Customer Agent</span>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-emerald-950/80">
                      &quot;The penthouse is available starting Nov 1. I&apos;ve reserved a viewing
                      for Friday at 15:00 and notified David on our leasing team.&quot;
                    </p>
                    <span className="mt-4 block font-mono text-[10px] text-emerald-800">
                      RESULT: Conversion complete
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Card 2: Understands more than keywords */}
            <div className="flex flex-col justify-between rounded-3xl border border-ink/8 bg-white p-8 shadow-xs transition-all hover:shadow-md">
              <div>
                <span className="font-mono text-xs font-semibold text-gold">02 / CONTEXT</span>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-ink">
                  It understands more than keywords.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  The agent follows natural human phrasing, asks smart clarifying questions, and
                  extracts the underlying intent.
                </p>

                {/* Live extracted intent tags preview */}
                <div className="mt-6 space-y-2 rounded-2xl border border-ink/6 bg-[#FAF8F4] p-4 font-mono text-[11px]">
                  <div className="flex items-center justify-between text-ink/50">
                    <span>EXTRACTED INTENT</span>
                    <span className="text-emerald-700">99.4% MATCH</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className="rounded bg-white border border-ink/8 px-2 py-1 text-ink">
                      Intent: Enterprise Lead
                    </span>
                    <span className="rounded bg-white border border-ink/8 px-2 py-1 text-ink">
                      Seats: 75
                    </span>
                    <span className="rounded bg-white border border-ink/8 px-2 py-1 text-ink">
                      Urgency: High
                    </span>
                    <span className="rounded bg-white border border-ink/8 px-2 py-1 text-ink">
                      Budget: $25k+
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Card 3: Built around what your business knows */}
            <div className="flex flex-col justify-between rounded-3xl border border-ink/8 bg-white p-8 shadow-xs transition-all hover:shadow-md">
              <div>
                <span className="font-mono text-xs font-semibold text-gold">03 / KNOWLEDGE</span>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-ink">
                  Built around what your business knows.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  The agent responds strictly using business-approved policies, documentation,
                  catalogues, and operational APIs.
                </p>

                <div className="mt-6 space-y-2 rounded-2xl border border-ink/6 bg-[#FAF8F4] p-4 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-ink">Connected Docs</span>
                    <span className="font-mono text-[10px] text-ink/40">4 SOURCES</span>
                  </div>
                  <div className="mt-2 space-y-1.5">
                    <div className="flex items-center justify-between rounded-lg bg-white p-2 border border-ink/5">
                      <span className="truncate text-ink/70">📄 Service_SLA_Pricing_2026.pdf</span>
                      <span className="text-emerald-700">✓ Sync</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-white p-2 border border-ink/5">
                      <span className="truncate text-ink/70">⚡ Realtime_Inventory_API</span>
                      <span className="text-emerald-700">✓ Live</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Card 4: Capture the opportunity while they're interested */}
            <div className="flex flex-col justify-between rounded-3xl border border-ink/8 bg-white p-8 shadow-xs transition-all hover:shadow-md lg:col-span-2">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-gold">
                    04 / LEAD QUALIFICATION
                  </span>
                  <span className="rounded-full bg-ink/5 px-2.5 py-0.5 text-[11px] font-medium text-ink/60">
                    No Static Forms
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-ink sm:text-3xl">
                  Capture the opportunity while the customer is interested.
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/60">
                  Instead of sending interested visitors away to a cold web form, the agent collects
                  qualification criteria, contact records, and specific requirements in-flight.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-4">
                  <div className="rounded-xl border border-ink/8 bg-[#FAF8F4] p-3 text-center">
                    <p className="text-[10px] uppercase text-ink/40">Contact Record</p>
                    <p className="mt-1 text-xs font-semibold text-ink">Alex Kim</p>
                  </div>
                  <div className="rounded-xl border border-ink/8 bg-[#FAF8F4] p-3 text-center">
                    <p className="text-[10px] uppercase text-ink/40">Verified Email</p>
                    <p className="mt-1 truncate text-xs font-semibold text-ink">alex@northstar.com</p>
                  </div>
                  <div className="rounded-xl border border-ink/8 bg-[#FAF8F4] p-3 text-center">
                    <p className="text-[10px] uppercase text-ink/40">Seat Requirement</p>
                    <p className="mt-1 text-xs font-semibold text-ink">75 Users</p>
                  </div>
                  <div className="rounded-xl border border-ink/8 bg-[#FAF8F4] p-3 text-center">
                    <p className="text-[10px] uppercase text-ink/40">CRM Status</p>
                    <p className="mt-1 text-xs font-semibold text-emerald-700">Enriched &amp; Synced</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. Connected Channels Section ───────────────────────── */}
      <section className="border-b border-ink/8 py-20 md:py-28">
        <div className="home-container">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
                OMNICHANNEL SYNC
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink md:text-5xl">
                One customer experience across every channel.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-ink/60">
              Customers shouldn&apos;t have to start from zero every time they reach you. Context
              persists across every supported channel.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-12">
            {/* Channel Tabs Selector */}
            <div className="space-y-3 lg:col-span-5">
              {(["web", "whatsapp", "instagram", "email"] as ChannelKey[]).map((cKey) => {
                const item = channelData[cKey];
                return (
                  <button
                    key={cKey}
                    type="button"
                    onClick={() => setActiveChannel(cKey)}
                    className={`w-full text-left rounded-2xl border p-5 transition-all ${
                      activeChannel === cKey
                        ? "border-ink bg-white shadow-md ring-1 ring-ink/10"
                        : "border-ink/8 bg-white/40 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-serif text-lg font-semibold text-ink">
                          {item.name}
                        </span>
                      </div>
                      <span className="rounded-full bg-ink/5 px-2.5 py-0.5 text-[10px] font-mono text-ink/60">
                        {item.badge}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-ink/55">{item.preview}</p>
                  </button>
                );
              })}
            </div>

            {/* Right: Omnichannel Journey Showcase */}
            <div className="flex flex-col justify-between rounded-3xl border border-ink/10 bg-white p-8 shadow-sm lg:col-span-7">
              <div>
                <div className="flex items-center justify-between border-b border-ink/8 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{channelData[activeChannel].icon}</span>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-ink">
                        {channelData[activeChannel].name} Integration
                      </h3>
                      <p className="text-xs text-ink/40">Synchronized Meleph Context Stream</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                    {channelData[activeChannel].metric}
                  </span>
                </div>

                {/* Synchronized Thread Preview */}
                <div className="mt-6 space-y-4 rounded-2xl border border-ink/6 bg-[#FAF8F4] p-5">
                  <div className="flex items-center justify-between border-b border-ink/6 pb-2 text-[11px] text-ink/40">
                    <span>CROSS-CHANNEL CUSTOMER TIMELINE</span>
                    <span className="font-mono">ID: #CUST-9821</span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="flex items-start gap-2.5">
                      <span className="rounded bg-white border border-ink/8 px-2 py-0.5 font-mono text-[10px]">
                        14:10 · WhatsApp
                      </span>
                      <p className="text-ink/75">
                        Customer initiates enquiry about enterprise capabilities.
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="rounded bg-white border border-ink/8 px-2 py-0.5 font-mono text-[10px]">
                        14:12 · Webchat
                      </span>
                      <p className="text-ink/75">
                        Customer opens website; agent remembers 75-seat context instantly.
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="rounded bg-white border border-ink/8 px-2 py-0.5 font-mono text-[10px]">
                        14:14 · Email
                      </span>
                      <p className="text-ink/75">
                        Calendar invite and qualification dossier automatically dispatched to team.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-ink/8 pt-6">
                <span className="text-xs text-ink/50">
                  Ready to connect your business channels?
                </span>
                <Link
                  href="/get-started?interest=ai-customer-agent"
                  className="rounded-full bg-ink px-5 py-2.5 text-xs font-semibold text-[#FAF8F3] transition-transform hover:-translate-y-0.5"
                >
                  Configure Channels →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. Proactive Messaging & Outbound Follow-up ─────────── */}
      <section className="border-b border-ink/8 bg-[#FAF8F4] py-20 md:py-28">
        <div className="home-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
              OUTBOUND INTELLIGENCE
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              Not every conversation has to start with the customer.
            </h2>
            <p className="mt-4 text-base text-ink/60">
              Use customer context to send timely follow-ups, appointment reminders, and quotation
              re-engagements automatically.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {/* Proactive Card 1 */}
            <div className="rounded-3xl border border-ink/8 bg-white p-7 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-gold">TRIGGER 01</span>
                <span className="rounded-full bg-ink/5 px-2 py-0.5 font-mono text-[10px] text-ink/60">
                  24H BEFORE
                </span>
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-ink">
                Appointment Reminder
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-ink/50">
                Reduces no-shows by delivering calendar links and directions ahead of scheduled
                viewings or calls.
              </p>
              <div className="mt-6 rounded-xl border border-ink/6 bg-[#FAF9F6] p-3.5 text-xs text-ink/75">
                &quot;Hi Marcus, reminder for your viewing at The Grandview tomorrow at 15:00. Would
                you like directions or need to reschedule?&quot;
              </div>
            </div>

            {/* Proactive Card 2 */}
            <div className="rounded-3xl border border-ink/8 bg-white p-7 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-gold">TRIGGER 02</span>
                <span className="rounded-full bg-ink/5 px-2 py-0.5 font-mono text-[10px] text-ink/60">
                  3 DAYS POST-PROPOSAL
                </span>
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-ink">
                Quotation Follow-Up
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-ink/50">
                Checks in naturally on high-value proposals, capturing questions and routing to the
                account lead.
              </p>
              <div className="mt-6 rounded-xl border border-ink/6 bg-[#FAF9F6] p-3.5 text-xs text-ink/75">
                &quot;Hi Alex, Maya here from Meleph. Did your team have any questions on the Tier 3
                proposal sent on Tuesday?&quot;
              </div>
            </div>

            {/* Proactive Card 3 */}
            <div className="rounded-3xl border border-ink/8 bg-white p-7 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-gold">TRIGGER 03</span>
                <span className="rounded-full bg-ink/5 px-2 py-0.5 font-mono text-[10px] text-ink/60">
                  INVENTORY EVENT
                </span>
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-ink">
                Availability Alert
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-ink/50">
                Alerts waiting customers as soon as requested inventory, dates, or equipment become
                available.
              </p>
              <div className="mt-6 rounded-xl border border-ink/6 bg-[#FAF9F6] p-3.5 text-xs text-ink/75">
                &quot;Good news Elena: the Phenom 300 charter slot for Geneva departing Friday has
                opened up. Would you like to confirm?&quot;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. Human Handoff: AI when it helps, People when they matter ─── */}
      <section className="border-b border-ink/8 py-20 md:py-28">
        <div className="home-container">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
                TEAM COLLABORATION
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink md:text-5xl">
                AI when it helps. People when they matter.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink/65">
                When a conversation requires judgment, pricing negotiation, or personal attention,
                the agent steps aside and hands it to your team with the context already captured.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="grid size-6 place-items-center rounded-full bg-ink text-xs text-[#FAF8F3]">
                    ✓
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">Zero Repetition</p>
                    <p className="text-xs text-ink/50">
                      The rep receives a pre-written bullet brief with needs, budget, and answers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="grid size-6 place-items-center rounded-full bg-ink text-xs text-[#FAF8F3]">
                    ✓
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">Smart Routing Rules</p>
                    <p className="text-xs text-ink/50">
                      Routes high-value leads to senior reps and technical questions to solutions
                      engineers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Handoff Card Preview */}
            <div className="rounded-3xl border border-ink/10 bg-white p-7 shadow-lg lg:col-span-7">
              <div className="flex items-center justify-between border-b border-ink/8 pb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-ink/40">
                  LIVE HANDOFF EVENT
                </span>
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                  Seamless Transition
                </span>
              </div>

              <div className="mt-5 rounded-2xl border border-ink/6 bg-[#FAF8F4] p-5">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-full bg-ink font-serif text-xs font-bold text-[#FAF8F3]">
                    MC
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-ink">
                      Maya Chen joined the conversation
                    </p>
                    <p className="text-[11px] text-ink/40">
                      Senior Enterprise Lead · Pre-filled briefing review complete
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50/70 p-3 text-xs text-amber-950">
                  <p className="font-semibold text-amber-900">Auto-Generated Team Briefing:</p>
                  <ul className="mt-1.5 list-disc space-y-1 pl-4 text-[11px] text-amber-900/80">
                    <li>Customer: Alex Kim (Northstar Labs)</li>
                    <li>Requirement: 75 seats with custom HubSpot integration</li>
                    <li>Urgency: Needs Q4 rollout, budget confirmed at $25k+</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. Final Conversion Section ─────────────────────────── */}
      <section className="bg-ink py-20 text-[#FAF8F3] md:py-28">
        <div className="home-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
              START WITH MELEPH
            </span>
            <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight md:text-5xl">
              Give your business an agent that listens, understands and acts.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60">
              Tell us what is happening in your customer interactions today and what you want to
              improve. We engineer the complete system around your workflow.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/get-started?interest=ai-customer-agent"
                className="rounded-full bg-[#FAF8F3] px-8 py-4 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 hover:bg-white"
              >
                Request a Product Demo →
              </Link>

              <button
                type="button"
                onClick={openVoiceflowChat}
                className="rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                Test Mel Assistant Live ↗
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function AttributeRow({
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
      <p
        className={`mt-0.5 text-xs font-medium ${
          highlight ? "font-semibold text-emerald-800" : "text-ink"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
