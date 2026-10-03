import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Solutions", description: "AI Customer Agent and Custom AI Systems from Meleph." };

const solutions = [
  { number: "01", title: "AI Customer Agent", href: "/solutions/ai-customer-agent", text: "A customer-facing system that understands enquiries, answers questions, captures context and connects each conversation to the right next step." },
  { number: "02", title: "Custom AI Systems", href: "/solutions/custom-ai-systems", text: "Purpose-built internal systems for workflows, knowledge, operations, portals and the connections between existing tools." },
] as const;

export default function SolutionsPage() { return <><section className="border-b border-ink/10 py-24 md:py-32"><div className="container-site"><p className="eyebrow">Solutions</p><h1 className="mt-7 max-w-5xl font-serif text-[clamp(3.5rem,7vw,7rem)] leading-[.92] tracking-[-.045em] text-ink">Systems built around how the business needs to work.</h1><p className="mt-8 max-w-2xl text-base leading-8 text-ink/58">Two solution families, each shaped around a real process rather than a generic technology package.</p></div></section><section className="container-site grid md:grid-cols-2">{solutions.map((item) => <Link key={item.href} href={item.href} className="group min-h-[34rem] border-b border-r border-ink/12 py-10 md:p-10"><span className="font-mono text-[.55rem] text-gold">{item.number}</span><h2 className="mt-20 font-serif text-5xl tracking-[-.03em] text-ink">{item.title}</h2><p className="mt-6 max-w-lg text-sm leading-7 text-ink/55">{item.text}</p><span className="mt-16 inline-block transition-transform group-hover:translate-x-1">Explore →</span></Link>)}</section></>; }
