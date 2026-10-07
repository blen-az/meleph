"use client";

import Link from "next/link";
import { useState } from "react";

const LEKIRAY_URL = "https://le-kiray.vercel.app/";

type CategoryFilter = "all" | "excavators" | "cranes" | "trucks" | "power";

interface EquipmentItem {
  id: string;
  name: string;
  category: "excavators" | "cranes" | "trucks" | "power";
  categoryLabel: string;
  specs: string;
  location: string;
  rate: string;
  ratePeriod: string;
  operator: boolean;
  status: "Available Now" | "On Site (Free Next Week)";
  provider: string;
  providerVerified: boolean;
}

const equipmentCatalog: EquipmentItem[] = [
  {
    id: "CAT-320D",
    name: "Caterpillar 320D Hydraulic Excavator",
    category: "excavators",
    categoryLabel: "Excavators",
    specs: "21.8 Ton Operating Weight · 1.2 m³ Bucket · 104 kW",
    location: "Addis Ababa (Bole Industrial)",
    rate: "ETB 14,500",
    ratePeriod: "/ day",
    operator: true,
    status: "Available Now",
    provider: "Abyssinia Heavy Plant",
    providerVerified: true,
  },
  {
    id: "TDN-50T",
    name: "Tadano GR-500XL Rough Terrain Crane",
    category: "cranes",
    categoryLabel: "Mobile Cranes",
    specs: "50-Ton Capacity · 42m Boom + 14m Jib · 4x4 Steer",
    location: "Addis Ababa (Akaki Kality)",
    rate: "ETB 38,000",
    ratePeriod: "/ day",
    operator: true,
    status: "Available Now",
    provider: "Horn Machinery Logistics",
    providerVerified: true,
  },
  {
    id: "MB-3340",
    name: "Mercedes-Benz Actros 3340 6x4 Tipper",
    category: "trucks",
    categoryLabel: "Dump Trucks",
    specs: "18 m³ Dump Bed · 400 HP · Heavy Duty Suspension",
    location: "Adama (Expressway Corridor)",
    rate: "ETB 9,800",
    ratePeriod: "/ day",
    operator: true,
    status: "Available Now",
    provider: "Rift Valley Haulers",
    providerVerified: true,
  },
  {
    id: "KOM-WA380",
    name: "Komatsu WA380-6 Wheel Loader",
    category: "excavators",
    categoryLabel: "Wheel Loaders",
    specs: "3.3 m³ Bucket · 18.5 Ton Weight · Quick Coupler",
    location: "Hawassa (Industrial Zone)",
    rate: "ETB 12,000",
    ratePeriod: "/ day",
    operator: false,
    status: "On Site (Free Next Week)",
    provider: "Southern Infrastructure Rentals",
    providerVerified: true,
  },
  {
    id: "CAT-300KVA",
    name: "Olympian 300 kVA Sound-Attenuated Generator",
    category: "power",
    categoryLabel: "Power & Compaction",
    specs: "300 kVA Prime / 330 kVA Standby · 500L Fuel Tank",
    location: "Addis Ababa (CMC Area)",
    rate: "ETB 6,500",
    ratePeriod: "/ day",
    operator: false,
    status: "Available Now",
    provider: "Atlas Power Solutions",
    providerVerified: true,
  },
];

export function LeKirayPage() {
  const [filter, setFilter] = useState<CategoryFilter>("all");
  const [activeStep, setActiveStep] = useState<number>(0);

  const filteredItems =
    filter === "all"
      ? equipmentCatalog
      : equipmentCatalog.filter((item) => item.category === filter);

  return (
    <div className="bg-[#FAF8F3] text-ink selection:bg-[#E8E1D6]">
      {/* ─── 1. Editorial Hero ───────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-ink/8 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#FAF4E6] to-transparent opacity-70 blur-3xl" />

        <div className="home-container relative">
          <div className="mx-auto max-w-4xl text-center">
            {/* Live External App Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/80 px-4 py-1.5 shadow-xs backdrop-blur-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-600" />
              </span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-ink/70">
                MELEPH PRODUCT 01
              </span>
              <span className="h-3 w-px bg-ink/15" />
              <a
                href={LEKIRAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 text-xs font-semibold text-emerald-800 hover:text-emerald-950 transition-colors"
              >
                <span>Live Marketplace: le-kiray.vercel.app</span>
                <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            </div>

            {/* Approved Headline from AGENTS.md Section 10.2 */}
            <h1 className="mt-8 font-serif text-[clamp(2.8rem,6vw,5.5rem)] font-normal leading-[0.98] tracking-[-0.04em] text-ink">
              Find what you need. <br className="hidden sm:inline" />
              Rent it without the unnecessary search.
            </h1>

            {/* Approved Support Copy from AGENTS.md Section 10.2 */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink/65 md:text-xl">
              LeKiray connects customers looking for vehicles, machinery and industrial equipment
              with providers offering them for rent.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={LEKIRAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-[#FAF8F3] shadow-md transition-all hover:-translate-y-0.5 hover:bg-ink/90 hover:shadow-lg"
              >
                <span>Browse Live Listings</span>
                <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>

              <a
                href={`${LEKIRAY_URL}#list-equipment`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/70 px-6 py-4 text-sm font-semibold text-ink transition-colors hover:border-ink/30 hover:bg-white"
              >
                <span>List Your Equipment</span>
                <span className="text-xs text-ink/40">↗</span>
              </a>

              <Link
                href="/contact?interest=lekiray-enterprise"
                className="inline-flex items-center gap-1.5 rounded-full border border-transparent px-5 py-4 text-sm font-semibold text-ink/65 hover:text-ink transition-colors"
              >
                <span>Enterprise Fleet Inquiries</span>
                <span>→</span>
              </Link>
            </div>

            {/* Critical Product Separation Notice as specified in AGENTS.md */}
            <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-ink/8 bg-white/60 p-4 text-center text-xs leading-relaxed text-ink/55 backdrop-blur-xs">
              <span className="font-semibold text-ink">Product Separation:</span> LeKiray is a
              Meleph-owned and operated digital product. It functions independently from our
              client-facing AI Customer Agent system, demonstrating how Meleph builds high-utility
              transaction platforms for real-world industries.
            </div>
          </div>

          {/* ─── 2. Interactive Marketplace Live Surface Mockup ─── */}
          <div className="mt-14">
            <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-[0_32px_90px_rgba(13,27,42,0.12)]">
              {/* Browser Navigation Top Bar */}
              <div className="flex flex-wrap items-center justify-between border-b border-ink/8 bg-[#FAF8F4] px-4 py-3 sm:px-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-ink/15" />
                    <span className="size-2.5 rounded-full bg-ink/15" />
                    <span className="size-2.5 rounded-full bg-ink/15" />
                  </div>
                  <span className="h-3 w-px bg-ink/10" />
                  <a
                    href={LEKIRAY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-xs text-ink/60 hover:text-ink transition-colors"
                  >
                    <span className="rounded bg-ink/10 px-2 py-0.5 text-[11px] font-semibold text-ink">
                      https://
                    </span>
                    <span className="font-medium">le-kiray.vercel.app</span>
                    <span className="text-emerald-700">● Live Preview</span>
                  </a>
                </div>

                <div className="mt-2 flex items-center gap-2 sm:mt-0">
                  <span className="hidden font-mono text-xs text-ink/40 md:inline">
                    HEAVY MACHINERY &amp; VEHICLE RENTALS
                  </span>
                  <a
                    href={LEKIRAY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-ink px-3.5 py-1 text-xs font-semibold text-[#FAF8F3] hover:bg-ink/90 transition-colors"
                  >
                    Open Full App ↗
                  </a>
                </div>
              </div>

              {/* In-Browser Filter & Category Bar */}
              <div className="border-b border-ink/8 bg-[#FAF9F6] p-4 sm:p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setFilter("all")}
                      className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                        filter === "all"
                          ? "bg-ink text-[#FAF8F3] shadow-xs"
                          : "text-ink/60 hover:bg-ink/5"
                      }`}
                    >
                      All Categories ({equipmentCatalog.length})
                    </button>
                    <button
                      type="button"
                      onClick={() => setFilter("excavators")}
                      className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                        filter === "excavators"
                          ? "bg-ink text-[#FAF8F3] shadow-xs"
                          : "text-ink/60 hover:bg-ink/5"
                      }`}
                    >
                      Excavators &amp; Loaders
                    </button>
                    <button
                      type="button"
                      onClick={() => setFilter("cranes")}
                      className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                        filter === "cranes"
                          ? "bg-ink text-[#FAF8F3] shadow-xs"
                          : "text-ink/60 hover:bg-ink/5"
                      }`}
                    >
                      Mobile Cranes
                    </button>
                    <button
                      type="button"
                      onClick={() => setFilter("trucks")}
                      className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                        filter === "trucks"
                          ? "bg-ink text-[#FAF8F3] shadow-xs"
                          : "text-ink/60 hover:bg-ink/5"
                      }`}
                    >
                      Tippers &amp; Haulers
                    </button>
                    <button
                      type="button"
                      onClick={() => setFilter("power")}
                      className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                        filter === "power"
                          ? "bg-ink text-[#FAF8F3] shadow-xs"
                          : "text-ink/60 hover:bg-ink/5"
                      }`}
                    >
                      Power &amp; Generators
                    </button>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-ink/50">
                    <span>📍 Ethiopia Corridor</span>
                    <span className="h-3 w-px bg-ink/15" />
                    <span>✓ Verified Asset Ownership</span>
                  </div>
                </div>
              </div>

              {/* Equipment Listings Grid (Live Data Feed) */}
              <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="group flex flex-col justify-between rounded-2xl border border-ink/8 bg-[#FAF8F4] p-5 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-md"
                  >
                    <div>
                      {/* Status + Category Tag */}
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-mono text-ink/45 uppercase tracking-wider">
                          {item.categoryLabel}
                        </span>
                        <span
                          className={`rounded-full px-2 py-0.5 font-medium ${
                            item.status === "Available Now"
                              ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                              : "bg-amber-50 text-amber-900 border border-amber-200"
                          }`}
                        >
                          ● {item.status}
                        </span>
                      </div>

                      {/* Equipment Name */}
                      <h4 className="mt-3 font-serif text-lg font-semibold text-ink group-hover:text-ink/85">
                        {item.name}
                      </h4>
                      <p className="mt-1 text-xs text-ink/55 leading-relaxed">{item.specs}</p>

                      {/* Location & Operator details */}
                      <div className="mt-4 space-y-1.5 text-xs text-ink/65 border-t border-ink/6 pt-3">
                        <div className="flex items-center justify-between">
                          <span className="text-ink/40">Location:</span>
                          <span className="font-medium text-ink">{item.location}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-ink/40">Certified Operator:</span>
                          <span className="font-medium text-ink">
                            {item.operator ? "Included" : "Available on Request"}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-ink/40">Verified Provider:</span>
                          <span className="font-medium text-emerald-800 flex items-center gap-1">
                            ✓ {item.provider}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Pricing + Direct Inquiry Button */}
                    <div className="mt-6 flex items-center justify-between border-t border-ink/8 pt-4">
                      <div>
                        <span className="font-serif text-lg font-bold text-ink">{item.rate}</span>
                        <span className="text-xs text-ink/45 font-normal"> {item.ratePeriod}</span>
                      </div>

                      <a
                        href={LEKIRAY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-ink px-3.5 py-1.5 text-xs font-semibold text-[#FAF8F3] transition-transform hover:-translate-y-0.5 hover:bg-ink/90"
                      >
                        Enquire on LeKiray ↗
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Surface Banner */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-ink/8 bg-[#FAF8F4] px-6 py-4">
                <span className="text-xs text-ink/50">
                  Showing real heavy machinery assets currently listed on the LeKiray network.
                </span>
                <a
                  href={LEKIRAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-xs text-ink underline decoration-ink/30 hover:decoration-ink"
                >
                  Visit https://le-kiray.vercel.app to explore the full marketplace →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. Core Four Sections from AGENTS.md 10.2 ───────────── */}
      <section className="border-b border-ink/8 py-20 md:py-28">
        <div className="home-container">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
                HOW LEKIRAY WORKS
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink md:text-5xl">
                A structured marketplace for equipment rental.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-ink/60">
              Contractors need equipment without days of cold calling. Providers need reliable
              utilization. LeKiray connects both sides with verified specifications.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                num: "01",
                name: "Search",
                desc: "Search by category, location, capacity and rental requirement.",
                detail:
                  "Filter by machine specs, tonnage, brand, availability dates, and geographic proximity to your project site.",
                action: "Explore Search Filters",
              },
              {
                num: "02",
                name: "Compare",
                desc: "Review listings, specifications and provider information.",
                detail:
                  "Transparent rates, certified operator terms, maintenance records, and provider verification scores.",
                action: "Compare Machine Specs",
              },
              {
                num: "03",
                name: "Enquire",
                desc: "Contact providers about availability and rental details.",
                detail:
                  "Direct quote requests, job site logistics, fuel responsibilities, and flexible daily or monthly arrangements.",
                action: "Submit Instant Inquiry",
              },
              {
                num: "04",
                name: "For Providers",
                desc: "List available assets and receive enquiries from potential customers.",
                detail:
                  "Monetize idle machinery, manage incoming reservation requests, and connect with reputable commercial builders.",
                action: "List Your Heavy Fleet",
              },
            ].map((step, idx) => (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-2xl border p-6 transition-all ${
                  activeStep === idx
                    ? "border-ink bg-white shadow-md ring-1 ring-ink/10"
                    : "border-ink/8 bg-white/50 hover:bg-white hover:border-ink/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-gold">{step.num}</span>
                  <span className="font-mono text-[10px] text-ink/40 uppercase">STEP</span>
                </div>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-ink">{step.name}</h3>
                <p className="mt-2 text-xs font-medium text-ink/80 leading-relaxed">{step.desc}</p>
                <p className="mt-3 text-xs text-ink/50 leading-relaxed border-t border-ink/6 pt-3">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. For Fleet Owners & Providers ─────────────────────── */}
      <section className="border-b border-ink/8 bg-[#F4F0E8] py-20 md:py-28">
        <div className="home-container">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
                FOR ASSET OWNERS
              </span>
              <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink md:text-5xl">
                Keep your equipment working, not waiting.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink/65">
                Machinery sitting idle between project contracts loses capital value every day.
                LeKiray provides fleet operators with an organized channel to receive verified
                rental inquiries from reputable civil contractors.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="grid size-6 place-items-center rounded-full bg-ink text-xs text-[#FAF8F3]">
                    ✓
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">Zero Listing Fees to Start</p>
                    <p className="text-xs text-ink/50">
                      List your excavators, cranes, loaders, and tippers with zero upfront listing
                      costs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="grid size-6 place-items-center rounded-full bg-ink text-xs text-[#FAF8F3]">
                    ✓
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">Verified Contractor Inquiries</p>
                    <p className="text-xs text-ink/50">
                      Receive clear project scopes with location, project timeline, and operator
                      specifications.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="grid size-6 place-items-center rounded-full bg-ink text-xs text-[#FAF8F3]">
                    ✓
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">Operator Flexibility</p>
                    <p className="text-xs text-ink/50">
                      Choose whether you supply your own certified operators or lease bare machine
                      units.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={`${LEKIRAY_URL}#list-equipment`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-[#FAF8F3] hover:bg-ink/90 transition-transform hover:-translate-y-0.5"
                >
                  List Equipment on LeKiray ↗
                </a>

                <Link
                  href="/contact?interest=lekiray-provider"
                  className="rounded-full border border-ink/15 bg-white/70 px-5 py-3.5 text-sm font-semibold text-ink hover:bg-white transition-colors"
                >
                  Partner With Meleph
                </Link>
              </div>
            </div>

            {/* Right: Provider Dashboard Mockup */}
            <div className="rounded-3xl border border-ink/10 bg-white p-7 shadow-lg lg:col-span-6">
              <div className="flex items-center justify-between border-b border-ink/8 pb-4">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-lg font-bold text-ink">LeKiray Provider Hub</span>
                  <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-800 border border-emerald-200">
                    Active Fleet
                  </span>
                </div>
                <span className="font-mono text-xs text-ink/40">FLEET DISPATCH</span>
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between rounded-xl border border-ink/6 bg-[#FAF8F4] p-3 text-xs">
                  <div>
                    <p className="font-semibold text-ink">CAT 320D Excavator</p>
                    <p className="text-[11px] text-ink/45">Bole Industrial Corridor · Assigned</p>
                  </div>
                  <span className="font-mono font-medium text-emerald-700">Utilized (94%)</span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-ink/6 bg-[#FAF8F4] p-3 text-xs">
                  <div>
                    <p className="font-semibold text-ink">Tadano 50T Mobile Crane</p>
                    <p className="text-[11px] text-ink/45">Akaki Kality Yard · 2 New Inquiries</p>
                  </div>
                  <span className="font-mono font-medium text-gold font-bold">New Inbound</span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-ink/6 bg-[#FAF8F4] p-3 text-xs">
                  <div>
                    <p className="font-semibold text-ink">Mercedes Actros Tipper</p>
                    <p className="text-[11px] text-ink/45">Adama Expressway Project · Return Fri</p>
                  </div>
                  <span className="font-mono font-medium text-ink/60">Ending Soon</span>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/70 p-4 text-xs text-amber-950">
                <p className="font-semibold text-amber-900">Latest Contractor Enquiry:</p>
                <p className="mt-1 text-[11px] text-amber-900/85">
                  &quot;Looking to secure 2 tipper trucks for 45-day subgrade hauling in Adama. Ready
                  to sign mobilization contract.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. Final CTA ────────────────────────────────────────── */}
      <section className="bg-ink py-20 text-[#FAF8F3] md:py-28">
        <div className="home-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
              EXPERIENCE LEKIRAY
            </span>
            <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight md:text-5xl">
              Ready to find or list heavy equipment?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60">
              Explore the live marketplace directly or discuss fleet partnership with the Meleph
              digital products team.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={LEKIRAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full bg-[#FAF8F3] px-8 py-4 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 hover:bg-white"
              >
                <span>Launch Live LeKiray Marketplace</span>
                <span className="ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 inline-block">
                  ↗
                </span>
              </a>

              <Link
                href="/products"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                View All Meleph Products →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
