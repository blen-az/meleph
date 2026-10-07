"use client";

import Link from "next/link";
import { useState } from "react";
import { CustomerAgentSurface, WorkflowSurface } from "@/components/home/ProductSurfaces";
import { openVoiceflowChat } from "@/components/layout/VoiceflowChat";

const workflowSteps = [
  {
    step: "01",
    name: "Understand",
    desc: "Recognises what the customer is asking and what they are trying to achieve.",
    detail: "Natural intent classification & context extraction",
    badge: "Intent Identified",
    previewTitle: "Inbound Enquiry",
    previewBody: "Looking for an enterprise customer agent for 75 team members with custom CRM sync.",
    tag: "High Intent",
  },
  {
    step: "02",
    name: "Answer",
    desc: "Responds using information approved by your business.",
    detail: "Grounded strictly in verified business documentation",
    badge: "99.4% Confidence",
    previewTitle: "Approved Knowledge Retrieval",
    previewBody: "Answers tailored to your exact policies, services, pricing guidelines and availability.",
    tag: "Verified Docs",
  },
  {
    step: "03",
    name: "Capture",
    desc: "Collects the details your team needs, including contact information, requirements and intent.",
    detail: "No rigid web forms — captured naturally through conversation",
    badge: "Lead Qualified",
    previewTitle: "Structured Lead Records",
    previewBody: "Company: Northstar Labs · Size: 75 seats · Timeline: Next month · Budget: $25k+",
    tag: "Data Enriched",
  },
  {
    step: "04",
    name: "Act",
    desc: "Guides the customer toward a quotation, appointment, enquiry, or another relevant next step.",
    detail: "Direct conversion action triggered inside the conversation",
    badge: "Slot Reserved",
    previewTitle: "Next Step Triggered",
    previewBody: "Live calendar slot confirmed for Thursday 14:30. Confirmation sent via email.",
    tag: "Action Complete",
  },
  {
    step: "05",
    name: "Connect",
    desc: "Keeps the conversation available to your team with the context already captured.",
    detail: "Human handoff with zero repeated questions",
    badge: "Handoff Ready",
    previewTitle: "Team Workspace Sync",
    previewBody: "Conversation routed to Maya Chen with pre-filled CRM context and qualification summary.",
    tag: "Assigned to Maya",
  },
] as const;

export function Homepage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      {/* ─── 6.1 Hero Section ───────────────────────────────────── */}
      <section className="home-hero relative overflow-hidden border-b border-ink/8 pb-20 pt-14 md:pb-32 md:pt-20">
        <div className="home-container">
          <div className="grid items-center gap-12 lg:grid-cols-12 xl:gap-16">
            {/* Left Hero Content */}
            <div className="lg:col-span-5">
              <div className="home-reveal flex items-center gap-2">
                <span className="size-2 rounded-full bg-gold" />
                <p className="home-eyebrow text-ink/60">
                  AI Systems &amp; Digital Products
                </p>
              </div>

              <h1 className="home-reveal home-delay-1 mt-6 font-serif text-[clamp(3.1rem,5.6vw,5.8rem)] font-normal leading-[0.96] tracking-[-0.04em] text-ink">
                Give your business a system that listens, understands and acts.
              </h1>

              <p className="home-reveal home-delay-2 mt-7 max-w-xl text-base leading-relaxed text-ink/65 md:text-lg">
                Meleph builds AI systems and digital products that help businesses understand customer needs, capture opportunities, connect teams and move every interaction toward the right next step.
              </p>

              {/* CTAs */}
              <div className="home-reveal home-delay-3 mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/solutions/ai-customer-agent"
                  className="rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-ivory transition-transform hover:-translate-y-0.5"
                >
                  Explore the AI Customer Agent <span className="ml-1">→</span>
                </Link>

                <Link
                  href="/get-started"
                  className="rounded-full border border-ink/15 bg-white/70 px-5 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink/30 hover:bg-white"
                >
                  Talk to us
                </Link>

                {/* Direct Live Agent Launcher Pill */}
                <button
                  type="button"
                  onClick={openVoiceflowChat}
                  className="group flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50/80 px-4 py-2.5 text-xs font-semibold text-emerald-900 transition-all hover:bg-emerald-100"
                >
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-600" />
                  </span>
                  <span>Try Mel Live</span>
                  <span className="text-emerald-700 transition-transform group-hover:translate-x-0.5">↗</span>
                </button>
              </div>
            </div>

            {/* Right Hero Product Surface (Intercom-Caliber Interactive System) */}
            <div className="home-reveal home-delay-2 lg:col-span-7">
              <CustomerAgentSurface />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6.2 What We Build ─────────────────────────────────── */}
      <section className="home-section bg-[#FAF8F3]">
        <div className="home-container">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="home-eyebrow text-gold">WHAT WE BUILD</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-ink md:text-5xl">
                One company. Three ways we build.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-ink/55">
              Engineered systems tailored around the problem, workflow, and customer context.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {/* 1. AI Customer Agent */}
            <div className="group relative flex flex-col justify-between rounded-3xl border border-ink/10 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div>
                <span className="font-mono text-xs font-semibold text-gold">01</span>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-ink">
                  AI Customer Agent
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  An AI system that handles customer conversations, understands intent, captures information and moves customers toward the right next step.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Answers questions",
                    "Captures leads",
                    "Books appointments",
                    "Supports quotations",
                    "Connects channels",
                    "Hands to team",
                  ].map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full bg-[#FAF8F4] border border-ink/8 px-3 py-1 text-[11px] font-medium text-ink/70"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/solutions/ai-customer-agent"
                className="mt-10 inline-flex items-center text-sm font-semibold text-ink transition-transform group-hover:translate-x-1"
              >
                Explore AI Customer Agent <span>→</span>
              </Link>
            </div>

            {/* 2. Custom AI Systems */}
            <div className="group relative flex flex-col justify-between rounded-3xl border border-ink/10 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div>
                <span className="font-mono text-xs font-semibold text-gold">02</span>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-ink">
                  Custom AI Systems
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  AI-powered systems designed around the way your business actually operates.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Internal assistants",
                    "Workflow automation",
                    "Operational dashboards",
                    "Knowledge systems",
                    "Business portals",
                    "Data integrations",
                  ].map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full bg-[#FAF8F4] border border-ink/8 px-3 py-1 text-[11px] font-medium text-ink/70"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/solutions/custom-ai-systems"
                className="mt-10 inline-flex items-center text-sm font-semibold text-ink transition-transform group-hover:translate-x-1"
              >
                Explore Custom AI Systems <span>→</span>
              </Link>
            </div>

            {/* 3. Digital Products */}
            <div className="group relative flex flex-col justify-between rounded-3xl border border-ink/10 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div>
                <span className="font-mono text-xs font-semibold text-gold">03</span>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-ink">
                  Digital Products
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  Products developed by Meleph to solve specific market and business problems. Starting with LeKiray.
                </p>

                <div className="mt-7 rounded-2xl border border-ink/8 bg-[#FAF8F4] p-4">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-ink/40">
                    FLAGSHIP PRODUCT
                  </span>
                  <p className="mt-1 font-serif text-xl font-semibold text-ink">LeKiray</p>
                  <p className="mt-1 text-xs text-ink/55">
                    Rental marketplace for vehicles, machinery and industrial equipment.
                  </p>
                </div>
              </div>

              <Link
                href="/products"
                className="mt-10 inline-flex items-center text-sm font-semibold text-ink transition-transform group-hover:translate-x-1"
              >
                Explore Our Products <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6.3 Flagship Product Preview (Interactive Step Progression) ─── */}
      <section className="home-section border-y border-ink/8 bg-white">
        <div className="home-container">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <p className="home-eyebrow text-gold">AI CUSTOMER AGENT</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-ink md:text-5xl">
                From conversation to action.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-ink/60 lg:col-span-6">
              Your customers ask questions, request information and show intent every day. The Meleph AI Customer Agent understands those conversations, responds using your business information and connects each customer to the next appropriate action.
            </p>
          </div>

          {/* Interactive Step Navigator */}
          <div className="mt-14 rounded-3xl border border-ink/10 bg-[#FAF8F4] p-6 sm:p-10 shadow-sm">
            {/* Step Tabs Row */}
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-5">
              {workflowSteps.map((item, idx) => (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`flex flex-col items-start rounded-2xl p-4 text-left transition-all ${
                    activeStep === idx
                      ? "bg-white border border-ink/15 shadow-md"
                      : "border border-transparent hover:bg-white/60"
                  }`}
                >
                  <span
                    className={`grid size-7 place-items-center rounded-full text-xs font-semibold ${
                      activeStep === idx
                        ? "bg-ink text-white"
                        : "bg-ink/10 text-ink/60"
                    }`}
                  >
                    {item.step}
                  </span>
                  <span className="mt-3 text-sm font-semibold text-ink">{item.name}</span>
                  <span className="mt-1 text-xs text-ink/50 line-clamp-2">{item.desc}</span>
                </button>
              ))}
            </div>

            {/* Active Step Live Evidence Display */}
            <div className="mt-8 rounded-2xl border border-ink/10 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/8 pb-4">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-xl bg-ink font-mono text-sm font-bold text-white">
                    {workflowSteps[activeStep].step}
                  </span>
                  <div>
                    <h4 className="text-base font-semibold text-ink">
                      Stage {workflowSteps[activeStep].step}: {workflowSteps[activeStep].name}
                    </h4>
                    <p className="text-xs text-ink/50">{workflowSteps[activeStep].detail}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 border border-emerald-200">
                    {workflowSteps[activeStep].badge}
                  </span>
                  <span className="rounded-full bg-ink/5 px-3 py-1 text-xs font-medium text-ink/65">
                    {workflowSteps[activeStep].tag}
                  </span>
                </div>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                <div className="rounded-xl border border-ink/8 bg-[#FAF8F4] p-5">
                  <p className="text-xs font-semibold text-ink/40 uppercase tracking-wider">
                    {workflowSteps[activeStep].previewTitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/85">
                    {workflowSteps[activeStep].previewBody}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-lg bg-[#FAF8F4] px-4 py-2.5 text-xs">
                    <span className="text-ink/50">Execution Latency</span>
                    <span className="font-mono font-medium text-ink">&lt; 400ms</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-[#FAF8F4] px-4 py-2.5 text-xs">
                    <span className="text-ink/50">Data Accuracy</span>
                    <span className="font-mono font-medium text-emerald-700">100% Policy Grounded</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-[#FAF8F4] px-4 py-2.5 text-xs">
                    <span className="text-ink/50">Human Interruption</span>
                    <span className="font-mono font-medium text-ink">Zero Customer Repetition</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6.4 Capabilities Preview (Intercom-Style Bento Grid) ─── */}
      <section className="home-section bg-[#FAF8F3]">
        <div className="home-container">
          <div className="max-w-3xl">
            <p className="home-eyebrow text-gold">CAPABILITIES PREVIEW</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              One agent. Every part of the conversation connected.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/60">
              The AI Customer Agent is not an isolated chatbot. It weaves approved knowledge, lead qualification, team inboxes, and omnichannel messaging into a single cohesive system.
            </p>
          </div>

          {/* 8-Tile Intercom Bento Grid */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Bento 1: Large Team Inbox & Workspace (Spans 2 cols) */}
            <div className="group relative rounded-3xl border border-ink/10 bg-white p-7 shadow-sm transition-all hover:shadow-lg lg:col-span-2">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-ink px-3 py-1 text-[11px] font-semibold text-white">
                  CORE WORKSPACE
                </span>
                <span className="font-mono text-xs text-ink/40">TEAM COLLABORATION</span>
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-ink">
                Conversation inbox
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/60">
                Give the team one place to review conversations, customer information, intent and follow-up status.
              </p>

              {/* Realistic Inbox Preview Miniature */}
              <div className="mt-6 rounded-2xl border border-ink/8 bg-[#FAF8F4] p-4 sm:p-5">
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-ink/8 bg-white p-3 shadow-xs">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-semibold text-ink">Alex Kim</span>
                      <span className="text-emerald-700 font-medium">Qualified</span>
                    </div>
                    <p className="mt-1 text-xs text-ink/50 truncate">Enterprise package (75 seats)</p>
                  </div>
                  <div className="rounded-xl border border-ink/8 bg-white p-3 shadow-xs">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-semibold text-ink">Elena Rostova</span>
                      <span className="text-gold font-medium">Follow-up</span>
                    </div>
                    <p className="mt-1 text-xs text-ink/50 truncate">Aviation charter request</p>
                  </div>
                  <div className="rounded-xl border border-ink/8 bg-white p-3 shadow-xs">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-semibold text-ink">Marcus Vance</span>
                      <span className="text-ink/60 font-medium">Scheduled</span>
                    </div>
                    <p className="mt-1 text-xs text-ink/50 truncate">Property viewing booked</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento 2: Customer Conversations */}
            <div className="group rounded-3xl border border-ink/10 bg-white p-7 shadow-sm transition-all hover:shadow-lg">
              <div className="size-10 grid place-items-center rounded-2xl bg-[#FAF8F4] text-xl">
                💬
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-ink">
                Customer conversations
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Answer questions naturally using approved business information without hallucinations or evasive chatbot responses.
              </p>
              <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50/80 p-3 text-xs text-emerald-900">
                ✓ 100% Verified against approved documentation
              </div>
            </div>

            {/* Bento 3: Lead capture */}
            <div className="group rounded-3xl border border-ink/10 bg-white p-7 shadow-sm transition-all hover:shadow-lg">
              <div className="size-10 grid place-items-center rounded-2xl bg-[#FAF8F4] text-xl">
                📋
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-ink">
                Lead capture
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Collect customer details, requirements and intent during the conversation instead of relying on generic drop-off forms.
              </p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {["Intent", "Contact Details", "Urgency", "Budget"].map((tag) => (
                  <span key={tag} className="rounded-md bg-[#FAF8F4] border border-ink/8 px-2 py-1 text-[11px] text-ink/70">
                    +{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bento 4: Connected channels (Omnichannel) */}
            <div className="group rounded-3xl border border-ink/10 bg-white p-7 shadow-sm transition-all hover:shadow-lg">
              <div className="size-10 grid place-items-center rounded-2xl bg-[#FAF8F4] text-xl">
                🌐
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-ink">
                Connected channels
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Keep supported conversations connected across the channels where customers reach your business.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-2 text-xs font-medium text-ink/80">
                <span className="rounded-lg border border-ink/8 bg-[#FAF8F4] px-3 py-2 text-center">Website</span>
                <span className="rounded-lg border border-ink/8 bg-[#FAF8F4] px-3 py-2 text-center">WhatsApp</span>
                <span className="rounded-lg border border-ink/8 bg-[#FAF8F4] px-3 py-2 text-center">Email</span>
                <span className="rounded-lg border border-ink/8 bg-[#FAF8F4] px-3 py-2 text-center">Instagram</span>
              </div>
            </div>

            {/* Bento 5: Appointments & quotations */}
            <div className="group rounded-3xl border border-ink/10 bg-white p-7 shadow-sm transition-all hover:shadow-lg">
              <div className="size-10 grid place-items-center rounded-2xl bg-[#FAF8F4] text-xl">
                📅
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-ink">
                Appointments &amp; quotations
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Move customers directly from interest into booking, quotation or enquiry flows with instant calendar reservations.
              </p>
              <div className="mt-6 rounded-xl border border-ink/8 bg-[#FAF8F4] p-3 text-xs text-ink/70">
                Next Slot: Thu 14:30 · Auto-confirmed
              </div>
            </div>

            {/* Bento 6: Human handoff */}
            <div className="group rounded-3xl border border-ink/10 bg-white p-7 shadow-sm transition-all hover:shadow-lg">
              <div className="size-10 grid place-items-center rounded-2xl bg-[#FAF8F4] text-xl">
                🤝
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-ink">
                Human handoff
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Bring a team member into the conversation when human judgment is required, with full context pre-filled.
              </p>
              <div className="mt-6 rounded-xl border border-ink/8 bg-[#FAF8F4] p-3 text-xs text-ink/70">
                Specialist takeover · 0 repeated questions
              </div>
            </div>

            {/* Bento 7: Proactive messaging */}
            <div className="group rounded-3xl border border-ink/10 bg-white p-7 shadow-sm transition-all hover:shadow-lg">
              <div className="size-10 grid place-items-center rounded-2xl bg-[#FAF8F4] text-xl">
                🔔
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-ink">
                Proactive messaging
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Follow up with customers, send reminders, update enquiry statuses, and reconnect when appropriate.
              </p>
              <div className="mt-6 rounded-xl border border-ink/8 bg-[#FAF8F4] p-3 text-xs text-ink/70">
                Automated re-engagement · Trigger-based
              </div>
            </div>

            {/* Bento 8: Workflows & integrations (Spans 2 cols on lg) */}
            <div className="group rounded-3xl border border-ink/10 bg-white p-7 shadow-sm transition-all hover:shadow-lg lg:col-span-2">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-gold/20 px-3 py-1 text-[11px] font-semibold text-ink">
                  DATA PIPELINES
                </span>
                <span className="font-mono text-xs text-ink/40">SYSTEM SYNC</span>
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-ink">
                Workflows &amp; integrations
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/60">
                Connect conversations directly to the systems and processes the business already uses — CRMs, databases, booking tools, and internal APIs.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-ink/70">
                <span className="rounded-lg bg-[#FAF8F4] border border-ink/8 px-3 py-2">HubSpot</span>
                <span className="rounded-lg bg-[#FAF8F4] border border-ink/8 px-3 py-2">Salesforce</span>
                <span className="rounded-lg bg-[#FAF8F4] border border-ink/8 px-3 py-2">Google Calendar</span>
                <span className="rounded-lg bg-[#FAF8F4] border border-ink/8 px-3 py-2">Slack / Teams</span>
                <span className="rounded-lg bg-[#FAF8F4] border border-ink/8 px-3 py-2">REST Webhooks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Custom AI Systems (Dark Contrast Architectural Section) ─── */}
      <section className="home-section bg-ink text-white">
        <div className="home-container">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="home-eyebrow text-gold">CUSTOM AI SYSTEMS</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-white md:text-5xl">
                When your workflow does not fit a template.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/60">
                Some business problems need more than off-the-shelf software. We design internal assistants, operational tools and connected workflows around the way your organisation actually operates.
              </p>

              <div className="mt-8 space-y-3 font-mono text-xs text-white/50">
                <p>• Internal AI Assistants &amp; Knowledge Systems</p>
                <p>• Operational Dashboards &amp; Dispatch Tools</p>
                <p>• Custom Workflow Automation &amp; Webhooks</p>
              </div>

              <Link
                href="/solutions/custom-ai-systems"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                Explore Custom AI Systems <span>→</span>
              </Link>
            </div>

            <div className="lg:col-span-7">
              <WorkflowSurface />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Digital Products (LeKiray Showcase) ────────────────── */}
      <section className="home-section bg-[#FAF8F3]">
        <div className="home-container">
          <div className="grid overflow-hidden rounded-3xl border border-ink/10 bg-[#EFEAE1] lg:grid-cols-12 shadow-sm">
            <div className="flex flex-col justify-center p-8 sm:p-14 lg:col-span-6">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-gold">
                MELEPH-OWNED PRODUCT
              </span>
              <h2 className="mt-4 font-serif text-5xl font-semibold tracking-tight text-ink md:text-7xl">
                LeKiray
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink/65">
                A digital marketplace connecting people and businesses with vehicles, machinery and industrial equipment available for rent.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/products/lekiray"
                  className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  Discover LeKiray <span>→</span>
                </Link>
                <Link
                  href="/products"
                  className="rounded-full border border-ink/15 bg-white/60 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white"
                >
                  All Products
                </Link>
              </div>
            </div>

            <div className="relative min-h-[360px] overflow-hidden bg-ink p-10 lg:col-span-6 flex flex-col justify-between text-white">
              <div className="flex items-center justify-between text-xs text-white/40 font-mono">
                <span>DIGITAL MARKETPLACE</span>
                <span>V1.0 OPERATIONAL</span>
              </div>
              <div className="my-auto text-center">
                <span className="font-serif text-[10rem] font-bold leading-none text-white/10 select-none">
                  L
                </span>
                <p className="-mt-14 font-serif text-3xl font-semibold text-gold">
                  Find what you need. Rent it without the search.
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/50">
                <span>Vehicles · Machinery · Industrial Equipment</span>
                <span>Self-Service + Inquiries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6.5 Selected Work ─────────────────────────────────── */}
      <section className="home-section border-t border-ink/8 bg-white">
        <div className="home-container">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="home-eyebrow text-gold">OUR WORK</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-ink md:text-5xl">
                See what we build.
              </h2>
            </div>
            <Link
              href="/work"
              className="text-sm font-semibold text-ink transition-transform hover:translate-x-1"
            >
              View all work →
            </Link>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* Real Estate AI Customer Agent */}
            <div className="group rounded-3xl border border-ink/10 bg-[#FAF8F4] p-8 transition-all hover:shadow-xl">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-gold/20 px-3 py-1 text-[10px] font-bold text-ink">
                  DEMONSTRATION
                </span>
                <span className="font-mono text-xs text-ink/40">REAL ESTATE</span>
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-ink">
                Real Estate AI Customer Agent
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Helps property visitors ask about availability, compare options, share requirements and schedule viewings with assigned agents.
              </p>
              <div className="mt-8 rounded-2xl border border-ink/8 bg-white p-5 shadow-xs">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-ink">Property Enquiry</span>
                  <span className="text-emerald-700">Ready for Viewing</span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-ink/70">
                  &ldquo;Three bedrooms, waterfront, outdoor terrace. Availability confirmed for Saturday.&rdquo;
                </p>
              </div>
            </div>

            {/* Aviation Enquiry System */}
            <div className="group rounded-3xl border border-ink/10 bg-[#FAF8F4] p-8 transition-all hover:shadow-xl">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-gold/20 px-3 py-1 text-[10px] font-bold text-ink">
                  DEMONSTRATION
                </span>
                <span className="font-mono text-xs text-ink/40">AVIATION</span>
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-ink">
                Aviation Enquiry System
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Helps customers understand services, submit charter enquiries and send the structured flight information needed for sales follow-up.
              </p>
              <div className="mt-8 rounded-2xl border border-ink/8 bg-ink p-5 text-white shadow-xs">
                <div className="flex items-center justify-between font-mono text-sm">
                  <span className="font-bold text-gold">DXB</span>
                  <span className="h-px flex-1 bg-white/20 mx-4" />
                  <span className="font-bold text-gold">LHR</span>
                </div>
                <p className="mt-3 text-xs text-white/60">
                  Enquiry captured · 8 Passengers · Heavy Jet Quotation Ready
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6.6 How We Work ────────────────────────────────────── */}
      <section className="home-section border-t border-ink/8 bg-[#FAF8F3]">
        <div className="home-container">
          <div className="max-w-2xl">
            <p className="home-eyebrow text-gold">DELIVERY METHODOLOGY</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              Understand first. Build second.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/60">
              We do not start with the technology. We first understand the workflow, the people involved, and where the current process breaks down.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { num: "01", title: "Understand", desc: "Learn the business, users, information and current workflow." },
              { num: "02", title: "Define", desc: "Identify the problem and determine what the system needs to accomplish." },
              { num: "03", title: "Design", desc: "Map the user experience, workflows and system behaviour." },
              { num: "04", title: "Build", desc: "Develop the product and connect the necessary systems and APIs." },
              { num: "05", title: "Launch", desc: "Test, deploy and prepare the business to use it with full training." },
              { num: "06", title: "Improve", desc: "Learn from real usage and continue improving the system over time." },
            ].map((step) => (
              <div
                key={step.num}
                className="rounded-2xl border border-ink/10 bg-white p-6 shadow-xs transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="font-mono text-xs font-bold text-gold">{step.num}</span>
                <h3 className="mt-4 font-serif text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink/55">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6.7 Final CTA ─────────────────────────────────────── */}
      <section className="p-5 pb-10">
        <div className="home-container overflow-hidden rounded-3xl bg-ink py-20 text-center text-white md:py-28 shadow-2xl relative">
          <div className="relative z-10 mx-auto max-w-3xl px-6">
            <p className="text-xs font-mono font-semibold uppercase tracking-widest text-gold">
              START A CONVERSATION
            </p>
            <h2 className="mt-4 font-serif text-[clamp(2.8rem,5vw,4.8rem)] font-normal leading-[1.02] tracking-tight text-white">
              Have a process that should work better?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60">
              Tell us what is happening today and what you want to improve. You do not need to arrive with a technical specification.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/get-started?path=project"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                Discuss a Project
              </Link>
              <Link
                href="/get-started?path=demo"
                className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                Request a Demo
              </Link>
              <button
                type="button"
                onClick={openVoiceflowChat}
                className="rounded-full border border-emerald-400/40 bg-emerald-950/40 px-6 py-3.5 text-sm font-semibold text-emerald-300 transition-colors hover:bg-emerald-900/60"
              >
                Chat with Mel Now ↗
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
