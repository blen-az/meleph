"use client";

import { useState } from "react";

const inputClass = "w-full border-b border-ink/20 bg-transparent px-0 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/28 focus:border-gold";

export function GetStartedForm() {
  const [path, setPath] = useState<"demo" | "project">("project");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) return <div className="border border-ink/15 bg-brand-stone/30 p-10"><p className="eyebrow">Enquiry received</p><h2 className="mt-5 font-serif text-4xl text-ink">Thank you.</h2><p className="mt-4 text-sm leading-7 text-ink/55">Your enquiry has been captured.</p></div>;

  return <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
    <div className="grid grid-cols-2 border border-ink/15">
      <button type="button" onClick={() => setPath("demo")} className={`p-5 text-left text-sm transition-colors ${path === "demo" ? "bg-ink text-ivory" : "text-ink"}`}><span className="block font-mono text-[.48rem] text-gold">01</span><span className="mt-4 block font-serif text-2xl">Request a Demo</span></button>
      <button type="button" onClick={() => setPath("project")} className={`border-l border-ink/15 p-5 text-left text-sm transition-colors ${path === "project" ? "bg-ink text-ivory" : "text-ink"}`}><span className="block font-mono text-[.48rem] text-gold">02</span><span className="mt-4 block font-serif text-2xl">Discuss a Project</span></button>
    </div>
    <input type="hidden" name="enquiryPath" value={path} />
    <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
      <Field label="Name"><input required name="name" autoComplete="name" className={inputClass} /></Field>
      <Field label="Company"><input required name="company" autoComplete="organization" className={inputClass} /></Field>
      <Field label="Phone"><input required name="phone" type="tel" autoComplete="tel" className={inputClass} /></Field>
      <Field label="Email"><input required name="email" type="email" autoComplete="email" className={inputClass} /></Field>
    </div>
    <div className="mt-8"><label htmlFor="interest" className="text-[.58rem] font-semibold uppercase tracking-[.16em] text-ink/48">Interest</label><select required id="interest" name="interest" className={`${inputClass} mt-2`} defaultValue=""><option value="" disabled>Select an option</option><option>AI Customer Agent</option><option>Custom AI System</option><option>Digital Product Development</option><option>Not sure yet</option></select></div>
    <div className="mt-8"><label htmlFor="message" className="text-[.58rem] font-semibold uppercase tracking-[.16em] text-ink/48">Tell us briefly what you want to improve</label><textarea required id="message" name="message" rows={5} className={`${inputClass} mt-2 resize-y`} /></div>
    <button type="submit" className="mt-10 bg-ink px-7 py-4 text-sm text-ivory">Send Enquiry →</button>
  </form>;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) { return <label className="text-[.58rem] font-semibold uppercase tracking-[.16em] text-ink/48">{label}{children}</label>; }
