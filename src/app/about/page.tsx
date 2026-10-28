import type { Metadata } from "next";
import { PRINCIPLES } from "@/lib/site";
import { ClosingCta, PageHero, SectionHeading, TextLink } from "@/components/site/section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meleph is an AI systems and digital product company focused on building practical technology around real business needs.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Meleph"
        title="Technology should fit the business, not the other way around."
        lede="Meleph is an AI systems and digital product company focused on building practical technology around real business needs."
      />

      <section className="section-y border-t">
        <div className="page-container flex flex-col gap-12">
          <SectionHeading eyebrow="Principles" title="How we approach the work." />
          <dl className="grid gap-x-16 md:grid-cols-2">
            {PRINCIPLES.map((principle) => (
              <div key={principle.name} className="reveal flex flex-col gap-3 border-t py-9">
                <dt className="font-serif text-4xl leading-none">{principle.name}</dt>
                <dd className="max-w-[44ch] text-lg text-muted-foreground">{principle.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-y surface-stone">
        <div className="page-container grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="flex flex-col gap-5 lg:col-span-7">
            <h2 className="display-section">Understand first. Build second.</h2>
            <p className="lede max-w-[52ch]">
              Every engagement follows the same delivery process, from learning how the business works to
              improving the system after launch.
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:justify-self-end">
            <TextLink href="/about/how-we-work">How we work</TextLink>
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
