import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work | Client Systems, Products & Demonstrations",
  description:
    "Real systems, Meleph products and clearly labeled demonstrations showing how we approach business problems.",
};

const LEKIRAY_URL = "https://le-kiray.vercel.app/";

const projects = [
  {
    type: "DEMONSTRATION",
    title: "Real Estate AI Customer Agent",
    industry: "REAL ESTATE",
    text: "Helps property visitors ask about availability, compare options, share requirements and schedule viewings with assigned leasing agents.",
    href: null,
    liveUrl: null,
    visual: "property",
  },
  {
    type: "DEMONSTRATION",
    title: "Aviation Enquiry System",
    industry: "AVIATION & LOGISTICS",
    text: "Helps customers understand charter services, submit route enquiries and send the structured flight information needed for sales follow-up.",
    href: null,
    liveUrl: null,
    visual: "aviation",
  },
  {
    type: "MELEPH PRODUCT",
    title: "LeKiray",
    industry: "HEAVY EQUIPMENT & VEHICLES",
    text: "A digital marketplace connecting people and businesses with vehicles, machinery and industrial equipment available for rent.",
    href: "/products/lekiray",
    liveUrl: LEKIRAY_URL,
    visual: "lekiray",
  },
] as const;

export default function WorkPage() {
  return (
    <div className="bg-[#FAF8F3] text-ink selection:bg-[#E8E1D6]">
      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-ink/8 py-20 md:py-28">
        <div className="home-container">
          <div className="grid gap-10 lg:grid-cols-[1fr_.6fr] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">OUR WORK</p>
              <h1 className="mt-4 font-serif text-[clamp(2.8rem,6vw,5.5rem)] font-normal leading-[0.98] tracking-[-0.04em] text-ink">
                See what we build.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/65 md:text-lg">
                Real systems, Meleph products and developed demonstrations showing how we approach
                business problems.
              </p>
            </div>
            <div className="border-l border-gold/40 pl-6 text-xs leading-relaxed text-ink/55">
              Demonstrations show what a system could do. They are clearly separated from deployed
              client work and Meleph-owned products.
            </div>
          </div>
        </div>
      </section>

      {/* ─── Projects List ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="home-container space-y-10">
          {projects.map((project, index) => {
            return (
              <article
                key={project.title}
                className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm transition-all hover:shadow-xl"
              >
                <div className="grid lg:grid-cols-[.78fr_1.22fr]">
                  {/* Left Column: Details & Actions */}
                  <div className="flex flex-col justify-between p-8 sm:p-12">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-gold/15 px-3 py-1 font-mono text-[10px] font-bold text-ink">
                          {project.type}
                        </span>
                        <span className="font-mono text-xs text-ink/35">
                          0{index + 1} / 03
                        </span>
                      </div>

                      <p className="mt-6 font-mono text-[11px] uppercase tracking-wider text-ink/45">
                        {project.industry}
                      </p>

                      <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-ink md:text-4xl">
                        {project.title}
                      </h2>

                      <p className="mt-4 text-sm leading-relaxed text-ink/60">{project.text}</p>
                    </div>

                    <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-ink/8 pt-6">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-xs font-semibold text-[#FAF8F3] hover:bg-ink/90 transition-transform hover:-translate-y-0.5"
                        >
                          <span>Launch le-kiray.vercel.app</span>
                          <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                            ↗
                          </span>
                        </a>
                      )}

                      {project.href ? (
                        <Link
                          href={project.href}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-ink hover:underline decoration-ink/30"
                        >
                          <span>View Product Overview</span>
                          <span>→</span>
                        </Link>
                      ) : (
                        <span className="font-mono text-[11px] uppercase tracking-wider text-ink/40">
                          Illustrative System Study
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Visual Evidence */}
                  <ProjectVisual type={project.visual} />
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function ProjectVisual({ type }: { type: "property" | "aviation" | "lekiray" }) {
  if (type === "property") {
    return (
      <div className="relative min-h-[320px] overflow-hidden bg-[#F4F0E8] p-7 flex items-center justify-center">
        <div className="w-full max-w-md rounded-2xl border border-ink/10 bg-white p-5 shadow-md">
          <div className="flex items-center justify-between border-b border-ink/8 pb-3 text-xs">
            <span className="font-semibold text-ink">Property Search Flow</span>
            <span className="text-emerald-700">● Live Demonstration</span>
          </div>
          <div className="mt-4 rounded-xl border border-ink/6 bg-[#FAF8F4] p-3 text-xs leading-relaxed text-ink/70">
            &ldquo;Looking for a three-bedroom waterfront home with private terrace. Can we tour this
            Saturday?&rdquo;
          </div>
          <div className="mt-3 rounded-xl bg-ink p-3 text-xs leading-relaxed text-white/90">
            &ldquo;We have 2 units fitting your criteria at The Grandview. Reserved viewing for
            Saturday 14:00 with leasing team.&rdquo;
          </div>
        </div>
      </div>
    );
  }

  if (type === "aviation") {
    return (
      <div className="relative min-h-[320px] overflow-hidden bg-[#EAE5DA] p-7 flex items-center justify-center">
        <div className="w-full max-w-md rounded-2xl border border-ink/10 bg-ink p-6 text-white shadow-md">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs text-white/50">
            <span>CHARTER DISPATCH</span>
            <span className="text-gold">SLA CONFIRMED</span>
          </div>
          <div className="mt-5 flex items-center justify-around text-center">
            <div>
              <p className="font-serif text-3xl font-bold text-gold">DXB</p>
              <p className="text-[10px] text-white/40">Dubai Int&apos;l</p>
            </div>
            <span className="font-mono text-xs text-white/40">✈ 6h 40m</span>
            <div>
              <p className="font-serif text-3xl font-bold text-gold">LHR</p>
              <p className="text-[10px] text-white/40">London Heathrow</p>
            </div>
          </div>
          <div className="mt-5 rounded-lg bg-white/5 p-2.5 text-center font-mono text-[11px] text-white/70">
            8 Pax · Heavy Jet Category · Instant Quotation Dispatched
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[320px] overflow-hidden bg-[#101F2D] p-7 flex flex-col justify-between text-white">
      <div className="flex items-center justify-between font-mono text-xs text-white/40">
        <span>MELEPH PRODUCT 01</span>
        <a
          href={LEKIRAY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          le-kiray.vercel.app ↗
        </a>
      </div>

      <div className="my-auto text-center py-6">
        <span className="font-serif text-8xl font-bold text-white/5 select-none block">L</span>
        <p className="-mt-14 font-serif text-2xl font-semibold text-gold">
          Unified Heavy Machinery Marketplace
        </p>
        <p className="mt-2 text-xs text-white/60">
          Excavators · Mobile Cranes · Dump Trucks · Power Equipment
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-white/10 pt-3 text-xs text-white/40">
        <span>Grounded in Real Asset Listings</span>
        <span>Independent Venture</span>
      </div>
    </div>
  );
}
