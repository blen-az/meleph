const offerings = [
  { number: "01", title: "AI Customer Agent", text: "Customer-facing AI that understands conversations, captures intent, books appointments, supports quotations and connects customers to teams.", meta: ["Conversation", "Qualification", "Handoff"] },
  { number: "02", title: "Custom AI Systems", text: "Internal assistants, workflow automation, operational dashboards, knowledge systems, portals and integrations.", meta: ["Operations", "Knowledge", "Automation"] },
  { number: "03", title: "Digital Products", text: "Products developed and operated by Meleph. Starting with LeKiray.", meta: ["Strategy", "Design", "Engineering"] },
] as const;

export function WhatWeBuild() {
  return (
    <section id="what-we-build" className="bg-ivory py-24 md:py-36">
      <div className="container-site">
        <div className="grid gap-8 border-b border-ink/15 pb-12 md:grid-cols-[1fr_2fr] md:items-end">
          <div><p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-ink/50">What we build</p><p className="mt-6 max-w-[15rem] text-xs leading-5 text-ink/45">From the customer conversation to the systems behind it—and the products that open new markets.</p></div>
          <h2 className="max-w-3xl font-serif text-[clamp(2.8rem,5.3vw,5.1rem)] leading-[0.94] tracking-[-0.04em] text-ink">One company.<br /><em className="font-normal text-ink/48">Three ways we build.</em></h2>
        </div>

        <div className="build-grid">
          {offerings.map((item, index) => (
            <article key={item.number} className={`build-item build-item-${index + 1} group border-ink/15 py-10 md:py-14`}>
              <div className="flex h-full flex-col">
                <span className="font-mono text-[0.6rem] tracking-[0.18em] text-gold">{item.number}</span>
                <h3 className="mt-12 font-serif text-3xl leading-tight tracking-[-0.02em] text-ink md:text-[2.25rem]">{item.title}</h3>
                <p className="mt-5 max-w-md text-sm leading-7 text-ink/58">{item.text}</p>
                <OfferingVisual index={index} />
                <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-10">
                  {item.meta.map((tag) => <span key={tag} className="border-b border-ink/20 pb-1 text-[0.56rem] uppercase tracking-[0.14em] text-ink/45 transition-colors group-hover:border-gold group-hover:text-ink/70">{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferingVisual({ index }: { index: number }) {
  if (index === 0) {
    return <div className="system-visual mt-10 border border-ink/12 bg-white/35 p-5"><div className="flex items-center justify-between text-[0.5rem] uppercase tracking-[0.15em] text-ink/38"><span>Customer signal</span><span>Team action</span></div><div className="mt-6 flex items-center"><Node label="Conversation" active /><Line /><Node label="Intent" /><Line /><Node label="Handoff" /></div><div className="mt-6 grid grid-cols-3 border-t border-ink/10 pt-4 text-center"><Metric value="Live" label="Conversation" /><Metric value="Clear" label="Context" /><Metric value="Ready" label="Handoff" /></div></div>;
  }

  if (index === 1) {
    return <div className="mt-9 border-y border-ink/12 py-2 font-mono text-[0.55rem] text-ink/52"><FlowRow status="Running" title="Lead enrichment" /><FlowRow status="Ready" title="Knowledge assistant" /><FlowRow status="Synced" title="Operations dashboard" /></div>;
  }

  return <div className="relative mt-9 overflow-hidden bg-ink p-5 text-ivory"><div className="absolute right-0 top-0 size-28 border-l border-b border-white/10" /><p className="text-[0.5rem] uppercase tracking-[0.18em] text-gold">Meleph product 01</p><p className="mt-8 font-serif text-4xl">LeKiray</p><div className="mt-8 flex items-center justify-between border-t border-white/12 pt-3 text-[0.5rem] uppercase tracking-[0.14em] text-white/42"><span>In development</span><span>2026 →</span></div></div>;
}

function Node({ label, active = false }: { label: string; active?: boolean }) {
  return <div className="min-w-0 flex-1 text-center"><span className={`mx-auto grid size-8 place-items-center rounded-full border text-[0.55rem] ${active ? "border-gold bg-gold text-ink" : "border-ink/20 bg-ivory text-ink/50"}`}>{active ? "01" : "·"}</span><p className="mt-2 truncate text-[0.48rem] uppercase tracking-wider text-ink/45">{label}</p></div>;
}

function Line() { return <i className="-mt-4 h-px flex-1 bg-ink/15" />; }
function Metric({ value, label }: { value: string; label: string }) { return <div><p className="font-serif text-lg text-ink">{value}</p><p className="text-[0.45rem] uppercase tracking-wider text-ink/35">{label}</p></div>; }
function FlowRow({ status, title }: { status: string; title: string }) { return <div className="flex items-center border-b border-ink/8 px-1 py-3 last:border-0"><span className="mr-3 size-1.5 rounded-full bg-[#578568]" /><span>{title}</span><span className="ml-auto text-[0.46rem] uppercase tracking-wider text-ink/30">{status}</span></div>; }
