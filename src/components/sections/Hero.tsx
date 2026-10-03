import Link from "next/link";
import { CustomerAgentInterface } from "@/components/product/CustomerAgentInterface";

export function Hero() {
  return (
    <section className="hero-shell relative overflow-hidden border-b border-ink/10">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="product-glow pointer-events-none absolute right-0 top-0 h-full w-3/5" aria-hidden="true" />

      <div className="hero-index pointer-events-none absolute left-5 top-1/2 hidden -translate-y-1/2 xl:flex" aria-hidden="true">
        <span>01</span><i /><span>INTELLIGENT SYSTEMS</span>
      </div>

      <div className="container-site relative grid min-h-[calc(100svh-5rem)] items-center gap-16 py-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-6 lg:py-20 xl:gap-16">
        <div className="relative z-10 max-w-[42rem]">
          <p className="hero-reveal mb-7 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-ink/60">
            <span className="mr-3 inline-block h-px w-8 bg-gold align-middle" />
            AI Systems &amp; Digital Products
          </p>

          <h1 className="hero-reveal hero-delay-1 font-serif text-[clamp(3.1rem,5.45vw,5.85rem)] leading-[0.94] tracking-[-0.048em] text-ink">
            Give your business
            <br />a system that <em className="font-normal text-ink/55">listens,</em>
            <br />understands <span className="whitespace-nowrap">and acts.</span>
          </h1>

          <p className="hero-reveal hero-delay-2 mt-8 max-w-[38rem] text-[1.02rem] leading-7 text-ink/64 md:text-[1.08rem]">
            Meleph builds AI systems and digital products that help businesses
            understand customer needs, capture opportunities, connect teams and
            move every interaction toward the right next step.
          </p>

          <div className="hero-reveal hero-delay-3 mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link href="#what-we-build" className="group inline-flex items-center gap-4 bg-ink px-6 py-3.5 text-sm font-medium text-ivory transition-transform hover:-translate-y-0.5">
              Explore Our Work
              <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
            <Link href="/get-started" className="link-underline py-2 text-sm font-medium text-ink">
              Talk to Us
            </Link>
          </div>

          <div className="hero-reveal hero-delay-3 mt-14 grid max-w-[35rem] grid-cols-3 border-y border-ink/12 py-4">
            <div><span className="block font-serif text-2xl text-ink">24/7</span><span className="text-[0.52rem] uppercase tracking-[0.15em] text-ink/42">Responsive</span></div>
            <div className="border-x border-ink/12 px-5"><span className="block font-serif text-2xl text-ink">One</span><span className="text-[0.52rem] uppercase tracking-[0.15em] text-ink/42">Shared context</span></div>
            <div className="pl-5"><span className="block font-serif text-2xl text-ink">Live</span><span className="text-[0.52rem] uppercase tracking-[0.15em] text-ink/42">Team handoff</span></div>
          </div>
        </div>

        <div className="ui-entrance relative min-w-0 lg:-mr-20 xl:-mr-28">
          <div className="absolute -left-5 -top-5 z-20 hidden border border-ink/15 bg-ivory px-3 py-2 text-[0.5rem] uppercase tracking-[0.14em] text-ink/50 sm:block"><span className="mr-2 inline-block size-1.5 rounded-full bg-[#578568]" />Agent active</div>
          <div className="absolute -bottom-2 left-1/3 z-20 hidden items-center gap-3 border border-ink/15 bg-ivory px-3 py-2 text-[0.5rem] uppercase tracking-[0.14em] text-ink/50 sm:flex"><span className="font-mono text-gold">↗</span> Opportunity captured</div>
          <CustomerAgentInterface />
        </div>
      </div>

      <div className="relative border-t border-ink/10 bg-ink text-ivory">
        <div className="container-site grid items-center gap-5 py-6 md:grid-cols-[1.2fr_repeat(3,1fr)] xl:grid-cols-[1.2fr_repeat(6,1fr)]">
          <p className="font-serif text-xl tracking-[-0.02em] text-ivory/90">One continuous intelligence layer.</p>
          {[["01", "Understand", "Intent + context"], ["02", "Answer", "Useful responses"], ["03", "Capture", "Details that matter"], ["04", "Act", "The next step"], ["05", "Connect", "Systems + people"], ["06", "Follow up", "Keep momentum"]].map(([number, title, detail]) => (
            <div key={number} className="flex items-center gap-4 border-l border-white/12 pl-5"><span className="font-mono text-[0.5rem] text-gold">{number}</span><div><p className="text-[0.66rem] font-medium">{title}</p><p className="text-[0.5rem] text-white/38">{detail}</p></div></div>
          ))}
        </div>
      </div>
    </section>
  );
}
