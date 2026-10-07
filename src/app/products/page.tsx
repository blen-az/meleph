import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products | Digital Products Built by Meleph",
  description:
    "Alongside client systems, Meleph develops and operates its own digital products, starting with LeKiray.",
};

const LEKIRAY_URL = "https://le-kiray.vercel.app/";

export default function ProductsPage() {
  return (
    <div className="bg-[#FAF8F3] text-ink selection:bg-[#E8E1D6]">
      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-ink/8 py-20 md:py-28">
        <div className="home-container">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">OUR PRODUCTS</p>
            <h1 className="mt-4 font-serif text-[clamp(2.8rem,6vw,5.5rem)] font-normal leading-[0.98] tracking-[-0.04em] text-ink">
              Digital products built to solve real problems.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/65 md:text-lg">
              Alongside client systems, Meleph develops and operates its own digital products. We
              focus on fragmented industries where structured software creates immediate efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Product Card: LeKiray ─────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="home-container">
          <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-xl transition-all hover:shadow-2xl">
            <div className="grid lg:grid-cols-12">
              {/* Left Column: Product Definition */}
              <div className="flex flex-col justify-between p-8 sm:p-14 lg:col-span-6">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-gold">
                      PRODUCT 01
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                      <span className="size-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      Live in Production
                    </span>
                  </div>

                  <h2 className="mt-6 font-serif text-5xl font-semibold tracking-tight text-ink md:text-6xl">
                    LeKiray
                  </h2>

                  <p className="mt-4 text-sm font-medium text-ink/70">
                    Find what you need. Rent it without the unnecessary search.
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-ink/60">
                    A digital marketplace connecting people and businesses with vehicles, machinery
                    and industrial equipment available for rent.
                  </p>

                  {/* Capabilities / Categories */}
                  <div className="mt-8 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-ink/75">
                      <span className="text-gold font-bold">✓</span>
                      <span>Heavy Excavators, Wheel Loaders &amp; Compaction</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-ink/75">
                      <span className="text-gold font-bold">✓</span>
                      <span>Mobile Cranes &amp; Commercial Tipper Fleets</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-ink/75">
                      <span className="text-gold font-bold">✓</span>
                      <span>Direct Provider Inquiries &amp; Operator Inclusion Terms</span>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex flex-wrap items-center gap-4">
                  <a
                    href={LEKIRAY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-[#FAF8F3] hover:bg-ink/90 transition-transform hover:-translate-y-0.5"
                  >
                    <span>Launch le-kiray.vercel.app</span>
                    <span className="ml-1.5 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </a>

                  <Link
                    href="/products/lekiray"
                    className="rounded-full border border-ink/15 bg-white px-5 py-3.5 text-sm font-semibold text-ink hover:border-ink/30 transition-colors"
                  >
                    Explore Product Overview →
                  </Link>
                </div>
              </div>

              {/* Right Column: High-Impact Visual Frame */}
              <div className="relative min-h-[380px] overflow-hidden bg-ink p-8 sm:p-12 lg:col-span-6 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between font-mono text-xs text-white/40">
                  <span>UNIFIED HEAVY MARKETPLACE</span>
                  <a
                    href={LEKIRAY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    le-kiray.vercel.app ↗
                  </a>
                </div>

                <div className="my-auto text-center py-8">
                  <span className="font-serif text-[12rem] font-bold leading-none text-white/5 select-none block">
                    L
                  </span>
                  <p className="-mt-20 font-serif text-3xl font-semibold text-gold">
                    Heavy Machinery &amp; Vehicle Rentals
                  </p>
                  <p className="mt-2 text-xs text-white/50 max-w-sm mx-auto">
                    Search by category, review technical specs, and connect directly with verified
                    plant owners.
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/50">
                  <span>Operated by Meleph</span>
                  <span>Independent Product Line</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
