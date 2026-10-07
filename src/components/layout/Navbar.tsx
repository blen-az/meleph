"use client";

import Link from "next/link";
import { useState } from "react";
import { openVoiceflowChat } from "@/components/layout/VoiceflowChat";

const navigation = [
  { label: "Products", href: "/products" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
] as const;

const solutions = [
  {
    label: "AI Customer Agent",
    href: "/solutions/ai-customer-agent",
    desc: "Flagship customer-facing system",
    badge: "FLAGSHIP",
  },
  {
    label: "Custom AI Systems",
    href: "/solutions/custom-ai-systems",
    desc: "Tailored workflows & internal tools",
    badge: "CUSTOM",
  },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/8 bg-ivory/90 backdrop-blur-xl transition-all">
      <nav
        className="container-site flex h-[74px] items-center justify-between"
        aria-label="Primary navigation"
      >
        {/* Brand wordmark + live agent pill */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="font-serif text-[1.8rem] font-semibold tracking-[-0.04em] text-ink transition-opacity hover:opacity-85"
          >
            Meleph
          </Link>
          <span className="hidden items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50/80 px-2.5 py-1 text-[11px] font-semibold text-emerald-800 sm:inline-flex">
            <span className="size-1.5 rounded-full bg-emerald-600 animate-pulse" />
            Mel Active
          </span>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden items-center gap-8 md:flex">
          {/* Solutions Dropdown */}
          <div className="group relative py-6">
            <Link
              href="/solutions"
              className="flex items-center gap-1 text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            >
              Solutions
              <span className="text-[10px] text-ink/40 transition-transform group-hover:rotate-180">
                ⌄
              </span>
            </Link>

            <div className="invisible absolute left-1/2 top-16 w-80 -translate-x-1/2 rounded-2xl border border-ink/10 bg-white p-3 opacity-0 shadow-[0_20px_60px_rgba(13,27,42,0.14)] transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              {solutions.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl p-3 transition-colors hover:bg-[#FAF8F4]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-ink">{item.label}</span>
                    <span className="rounded-md bg-ink/5 px-1.5 py-0.5 text-[9px] font-mono font-medium text-ink/60">
                      {item.badge}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-ink/45">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}

          {/* Quick Chat Launcher Button */}
          <button
            type="button"
            onClick={openVoiceflowChat}
            className="text-xs font-semibold text-ink/60 hover:text-ink transition-colors"
          >
            Ask Mel
          </button>

          {/* Get Started Dominant CTA */}
          <Link
            href="/get-started"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-ivory transition-transform hover:-translate-y-0.5 shadow-sm"
          >
            Get Started <span className="ml-1">→</span>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="ml-auto grid size-10 place-items-center rounded-lg border border-ink/10 md:hidden"
        >
          <span className="space-y-1.5">
            <i
              className={`block h-0.5 w-5 bg-ink transition-transform ${
                open ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <i
              className={`block h-0.5 w-5 bg-ink transition-transform ${
                open ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {open ? (
        <div className="border-t border-ink/8 bg-ivory px-6 pb-8 pt-4 md:hidden">
          <Link
            href="/solutions"
            onClick={() => setOpen(false)}
            className="block py-2.5 text-lg font-semibold text-ink"
          >
            Solutions
          </Link>
          <div className="space-y-1 pl-3 pb-3">
            {solutions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-1.5 text-sm text-ink/65"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-lg font-semibold text-ink"
            >
              {item.label}
            </Link>
          ))}

          <button
            type="button"
            onClick={() => {
              setOpen(false);
              openVoiceflowChat();
            }}
            className="mt-3 flex w-full items-center justify-between rounded-xl border border-emerald-300 bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-900"
          >
            <span>Chat with Mel Agent</span>
            <span>↗</span>
          </button>

          <Link
            href="/get-started"
            onClick={() => setOpen(false)}
            className="mt-3 flex justify-between rounded-xl bg-ink px-5 py-4 text-sm font-semibold text-ivory"
          >
            <span>Get Started</span>
            <span>→</span>
          </Link>
        </div>
      ) : null}
    </header>
  );
}
