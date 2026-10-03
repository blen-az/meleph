import type { Metadata } from "next";
import { GetStartedForm } from "@/components/forms/GetStartedForm";

export const metadata: Metadata = { title: "Get Started", description: "Tell Meleph what you are trying to improve." };

export default function GetStartedPage() { return <section className="py-24 md:py-32"><div className="container-site grid gap-16 lg:grid-cols-[.85fr_1.15fr]"><div><p className="eyebrow">Get started</p><h1 className="mt-7 font-serif text-[clamp(3.5rem,6vw,6rem)] leading-[.92] tracking-[-.045em] text-ink">Tell us what you are trying to improve.</h1><p className="mt-8 max-w-xl text-base leading-8 text-ink/58">You do not need to know what technology you need. Tell us about the problem, process or opportunity and we will help determine the right starting point.</p></div><GetStartedForm /></div></section>; }
