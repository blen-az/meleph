"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Solutions", href: "/services", dropdown: true },
  { label: "Products", href: "/#what-we-build", dropdown: false },
  { label: "Work", href: "/#what-we-build", dropdown: false },
  { label: "About", href: "/about", dropdown: false },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-ivory/90 backdrop-blur-xl">
      <nav className="container-site flex h-20 items-center" aria-label="Primary navigation">
        <Link href="/" className="font-serif text-[1.65rem] font-semibold tracking-[-0.035em] text-ink" aria-label="Meleph home">Meleph</Link>
        <div className="ml-auto hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="nav-link text-[0.78rem] font-medium text-ink/65 transition-colors hover:text-ink">
              {link.label}{link.dropdown && <span className="ml-1.5 text-[0.55rem] text-gold">▾</span>}
            </Link>
          ))}
          <Link href="/contact" className="group ml-2 inline-flex items-center gap-3 border-l border-ink/15 pl-8 text-[0.78rem] font-semibold text-ink">Get Started <span className="text-gold transition-transform group-hover:translate-x-1">→</span></Link>
        </div>
        <button type="button" className="ml-auto grid size-10 place-items-center md:hidden" aria-label="Toggle navigation menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen((open) => !open)}>
          <span className="sr-only">Menu</span><span className="relative h-3.5 w-5"><i className={`absolute left-0 top-0 h-px w-5 bg-ink transition-transform ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`} /><i className={`absolute bottom-0 left-0 h-px w-5 bg-ink transition-transform ${mobileOpen ? "-translate-y-[6px] -rotate-45" : ""}`} /></span>
        </button>
      </nav>
      {mobileOpen && <div className="border-t border-ink/10 bg-ivory md:hidden"><div className="container-site flex flex-col py-5">{links.map((link) => <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="border-b border-ink/10 py-4 font-serif text-2xl text-ink">{link.label}{link.dropdown && <span className="ml-2 text-sm text-gold">▾</span>}</Link>)}<Link href="/contact" onClick={() => setMobileOpen(false)} className="mt-5 flex items-center justify-between bg-ink px-5 py-4 text-sm text-ivory">Get Started <span>→</span></Link></div></div>}
    </header>
  );
}
