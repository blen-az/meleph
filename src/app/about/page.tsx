import type { Metadata } from "next";

export const metadata: Metadata = { title: "About", description: "Meleph builds practical AI systems and digital products around real business needs." };
const principles = [
  ["Practical", "We focus on problems that can actually be improved with better systems."],
  ["Thoughtful", "We understand the business before deciding what technology belongs inside it."],
  ["Connected", "We design systems as part of the wider business process, not isolated tools."],
  ["Long-term", "We build with the expectation that the product will evolve as the business does."],
] as const;

export default function AboutPage() { return <><section className="border-b border-ink/10 py-24 md:py-36"><div className="container-site"><p className="eyebrow">About Meleph</p><h1 className="mt-7 max-w-6xl font-serif text-[clamp(3.5rem,7vw,7rem)] leading-[.92] tracking-[-.045em] text-ink">Technology should fit the business, not the other way around.</h1><p className="mt-10 max-w-2xl text-lg leading-8 text-ink/58">Meleph is an AI systems and digital product company focused on building practical technology around real business needs.</p></div></section><section className="py-24 md:py-32"><div className="container-site"><p className="eyebrow">Principles</p><div className="mt-10 grid md:grid-cols-2">{principles.map(([title, text], index) => <article key={title} className="min-h-72 border-b border-r border-ink/12 p-8"><span className="font-mono text-[.5rem] text-gold">0{index + 1}</span><h2 className="mt-16 font-serif text-4xl text-ink">{title}</h2><p className="mt-5 max-w-md text-sm leading-7 text-ink/52">{text}</p></article>)}</div></div></section></>; }
