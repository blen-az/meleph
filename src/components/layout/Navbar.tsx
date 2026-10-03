"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Products", href: "/products" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
] as const;

const solutions = [
  { label: "AI Customer Agent", href: "/solutions/ai-customer-agent" },
  { label: "Custom AI Systems", href: "/solutions/custom-ai-systems" },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-ivory/90 backdrop-blur-xl">
      <nav className="container-site flex h-20 items-center" aria-label="Primary navigation">
        <Link href="/" className="font-serif text-[1.65rem] font-semibold tracking-[-0.035em] text-ink">Meleph</Link>
        <div className="ml-auto hidden items-center gap-8 md:flex">
          <div className="group relative py-7">
            <Link href="/solutions" className="nav-link text-[0.78rem] font-medium text-ink/65 hover:text-ink">Solutions <span className="ml-1 text-gold">⌄</span></Link>
            <div className="invisible absolute left-1/2 top-[4.25rem] w-64 -translate-x-1/2 border border-ink/12 bg-ivory p-2 opacity-0 shadow-[0_18px_45px_rgba(13,27,42,.12)] transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              {solutions.map((item) => <Link key={item.href} href={item.href} className="block border-b border-ink/8 px-4 py-3 text-xs text-ink/65 last:border-0 hover:bg-brand-stone/40 hover:text-ink">{item.label}</Link>)}
            </div>
          </div>
          {links.map((link) => <Link key={link.href} href={link.href} className="nav-link text-[0.78rem] font-medium text-ink/65 hover:text-ink">{link.label}</Link>)}
          <Link href="/get-started" className="group ml-2 inline-flex items-center gap-3 border-l border-ink/15 pl-8 text-[0.78rem] font-semibold text-ink">Get Started <span className="text-gold transition-transform group-hover:translate-x-1">→</span></Link>
        </div>
        <button type="button" className="ml-auto grid size-10 place-items-center md:hidden" aria-label="Toggle navigation menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen((open) => !open)}><span className="relative h-3.5 w-5"><i className={`absolute left-0 top-0 h-px w-5 bg-ink transition-transform ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`} /><i className={`absolute bottom-0 left-0 h-px w-5 bg-ink transition-transform ${mobileOpen ? "-translate-y-[6px] -rotate-45" : ""}`} /></span></button>
      </nav>
      {mobileOpen ? <div className="border-t border-ink/10 bg-ivory md:hidden"><div className="container-site flex flex-col py-5"><Link href="/solutions" onClick={() => setMobileOpen(false)} className="py-3 font-serif text-2xl text-ink">Solutions</Link>{solutions.map((item) => <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="border-l border-gold/50 py-2 pl-4 text-sm text-ink/60">{item.label}</Link>)}{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="border-b border-ink/10 py-4 font-serif text-2xl text-ink">{link.label}</Link>)}<Link href="/get-started" onClick={() => setMobileOpen(false)} className="mt-5 flex justify-between bg-ink px-5 py-4 text-sm text-ivory">Get Started <span>→</span></Link></div></div> : null}
    </header>
  );
}
