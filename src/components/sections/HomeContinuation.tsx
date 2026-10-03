import Link from "next/link";

const workflow = ["Understand", "Answer", "Capture", "Act", "Connect", "Follow up"];
const capabilities = [
  ["01", "Customer conversations", "Natural conversations shaped around the questions customers actually ask."],
  ["02", "Lead capture", "Collect names, needs and relevant context as part of the conversation."],
  ["03", "Conversation inbox", "Give teams one place to review activity and continue a conversation."],
  ["04", "Connected channels", "Bring customer conversations into a consistent operating workflow."],
  ["05", "Appointments & quotations", "Move qualified enquiries toward a booking or quotation request."],
  ["06", "Proactive messaging", "Follow up when a customer needs information or a next step."],
  ["07", "Human handoff", "Connect the right person with the context already captured."],
  ["08", "Workflows & integrations", "Pass useful information into the systems and processes around the team."],
] as const;

const work = [
  { title: "Real Estate AI Customer Agent", label: "Demonstration", detail: "An illustrative customer journey for enquiries, qualification, property context and agent handoff." },
  { title: "Aviation Enquiry System", label: "Demonstration", detail: "An illustrative enquiry workflow for route questions, captured requirements and team follow-up." },
  { title: "LeKiray", label: "Meleph Product", detail: "A Meleph-owned digital product developed around a focused, real-world need." },
] as const;

const process = ["Understand", "Define", "Design", "Build", "Launch", "Improve"];

export function HomeContinuation() {
  return (
    <>
      <section className="border-y border-ink/10 bg-brand-stone/35 py-24 md:py-32">
        <div className="container-site">
          <p className="eyebrow">AI Customer Agent</p>
          <div className="mt-5 grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <h2 className="font-serif text-[clamp(3rem,6vw,6rem)] leading-[.92] tracking-[-.04em] text-ink">From conversation<br /><em className="font-normal text-ink/48">to action.</em></h2>
            <p className="max-w-xl text-base leading-7 text-ink/58">A customer conversation becomes useful when the system understands what is needed, gives a relevant answer, captures the right context and moves the enquiry forward.</p>
          </div>
          <div className="mt-16 grid border border-ink/12 bg-ivory md:grid-cols-3 xl:grid-cols-6">
            {workflow.map((step, index) => <div key={step} className="group relative min-h-40 border-b border-r border-ink/10 p-5 last:border-r-0 md:min-h-48"><span className="font-mono text-[.5rem] text-gold">0{index + 1}</span><p className="mt-16 font-serif text-2xl text-ink">{step}</p>{index < workflow.length - 1 ? <span className="absolute -right-2.5 top-1/2 z-10 hidden size-5 place-items-center bg-ink text-[.55rem] text-ivory xl:grid">→</span> : null}</div>)}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-site">
          <div className="grid gap-8 border-b border-ink/15 pb-10 md:grid-cols-2 md:items-end"><div><p className="eyebrow">Capabilities</p><h2 className="mt-5 font-serif text-5xl tracking-[-.035em] text-ink md:text-6xl">What the system can do.</h2></div><p className="max-w-lg text-sm leading-7 text-ink/55 md:justify-self-end">Each capability is designed around the wider customer and team workflow—not as a collection of disconnected features.</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4">{capabilities.map(([number, title, text]) => <article key={title} className="min-h-64 border-b border-r border-ink/10 p-6 transition-colors hover:bg-brand-stone/25"><span className="font-mono text-[.5rem] text-gold">{number}</span><h3 className="mt-12 font-serif text-2xl text-ink">{title}</h3><p className="mt-4 text-xs leading-6 text-ink/52">{text}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-ink py-24 text-ivory md:py-32">
        <div className="container-site"><p className="text-[.62rem] uppercase tracking-[.22em] text-gold">Selected work</p><div className="mt-5 flex flex-col justify-between gap-6 border-b border-white/15 pb-10 md:flex-row md:items-end"><h2 className="font-serif text-5xl tracking-[-.035em] md:text-6xl">See what we build.</h2><Link href="/work" className="text-sm text-white/60 hover:text-white">View all work →</Link></div><div className="grid md:grid-cols-3">{work.map((item, index) => <Link key={item.title} href={item.title === "LeKiray" ? "/products/lekiray" : "/work"} className="group min-h-[26rem] border-b border-r border-white/12 py-8 md:px-7"><span className="text-[.5rem] uppercase tracking-[.18em] text-gold">{item.label}</span><div className="mt-20 font-mono text-[.5rem] text-white/28">0{index + 1} / 03</div><h3 className="mt-4 max-w-xs font-serif text-3xl leading-tight">{item.title}</h3><p className="mt-5 max-w-sm text-xs leading-6 text-white/45">{item.detail}</p><span className="mt-12 inline-block text-white/45 transition-transform group-hover:translate-x-1">→</span></Link>)}</div></div>
      </section>

      <section className="py-24 md:py-32"><div className="container-site"><p className="eyebrow">How we work</p><h2 className="mt-5 font-serif text-5xl tracking-[-.035em] text-ink md:text-6xl">Understand first. <em className="font-normal text-ink/45">Build second.</em></h2><div className="mt-14 grid md:grid-cols-3 lg:grid-cols-6">{process.map((step, index) => <div key={step} className="border-l border-ink/12 px-5 py-5"><span className="font-mono text-[.5rem] text-gold">0{index + 1}</span><h3 className="mt-14 font-serif text-2xl text-ink">{step}</h3></div>)}</div></div></section>

      <section className="border-t border-ink/10 bg-brand-stone/35 py-24 md:py-32"><div className="container-site grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><h2 className="max-w-4xl font-serif text-[clamp(3rem,6vw,6rem)] leading-[.95] tracking-[-.04em] text-ink">Have a process that should work better?</h2><div className="flex flex-wrap gap-3"><Link href="/get-started?path=project" className="bg-ink px-6 py-4 text-sm text-ivory">Discuss a Project</Link><Link href="/get-started?path=demo" className="border border-ink/20 px-6 py-4 text-sm text-ink">Request a Demo</Link></div></div></section>
    </>
  );
}
