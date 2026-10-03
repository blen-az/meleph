import Link from "next/link";

const navigation = [
  ["Solutions", "/solutions"], ["Products", "/products"], ["Work", "/work"], ["About", "/about"], ["Get Started", "/get-started"],
] as const;

export function Footer() {
  return <footer className="bg-ink text-white/45"><div className="container-site"><div className="grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr]"><div><Link href="/" className="font-serif text-3xl font-semibold text-white">Meleph</Link><p className="mt-5 max-w-sm text-sm leading-7">AI systems and digital products built around real business needs.</p></div><div><p className="text-[.55rem] uppercase tracking-[.18em] text-gold">Navigate</p><ul className="mt-5 space-y-3">{navigation.map(([label, href]) => <li key={href}><Link href={href} className="text-sm hover:text-white">{label}</Link></li>)}</ul></div><div><p className="text-[.55rem] uppercase tracking-[.18em] text-gold">Contact</p><a href="mailto:hello@meleph.com" className="mt-5 block text-sm hover:text-white">hello@meleph.com</a></div></div><div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs md:flex-row md:justify-between"><span>© {new Date().getFullYear()} Meleph</span><span>AI Systems &amp; Digital Products</span></div></div></footer>;
}
