import Link from "next/link";

type SolutionDetailProps = {
  eyebrow: string;
  title: string;
  intro: string;
  outcomes: readonly { title: string; text: string }[];
  workflow: readonly string[];
};

export function SolutionDetail({ eyebrow, title, intro, outcomes, workflow }: SolutionDetailProps) {
  return <>
    <section className="border-b border-ink/10 py-24 md:py-32"><div className="container-site grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end"><div><p className="eyebrow">{eyebrow}</p><h1 className="mt-7 max-w-5xl font-serif text-[clamp(3.5rem,7vw,7rem)] leading-[.9] tracking-[-.045em] text-ink">{title}</h1></div><div><p className="text-base leading-8 text-ink/58">{intro}</p><Link href="/get-started" className="mt-8 inline-flex bg-ink px-6 py-4 text-sm text-ivory">Discuss your process →</Link></div></div></section>
    <section className="bg-ink py-20 text-ivory"><div className="container-site"><p className="text-[.6rem] uppercase tracking-[.2em] text-gold">How it moves</p><div className="mt-8 grid md:grid-cols-3 lg:grid-cols-6">{workflow.map((step, index) => <div key={step} className="border-l border-white/15 p-5"><span className="font-mono text-[.5rem] text-gold">0{index + 1}</span><p className="mt-12 font-serif text-2xl">{step}</p></div>)}</div></div></section>
    <section className="py-24 md:py-32"><div className="container-site"><div className="grid gap-8 border-b border-ink/15 pb-10 md:grid-cols-2"><h2 className="font-serif text-5xl tracking-[-.035em] text-ink">Built around the work.</h2><p className="max-w-lg text-sm leading-7 text-ink/55">The system is defined around the decisions, handoffs and information the business actually needs.</p></div><div className="grid md:grid-cols-2">{outcomes.map((item, index) => <article key={item.title} className="min-h-64 border-b border-r border-ink/10 p-7"><span className="font-mono text-[.5rem] text-gold">0{index + 1}</span><h3 className="mt-12 font-serif text-3xl text-ink">{item.title}</h3><p className="mt-4 max-w-md text-sm leading-7 text-ink/52">{item.text}</p></article>)}</div></div></section>
  </>;
}
