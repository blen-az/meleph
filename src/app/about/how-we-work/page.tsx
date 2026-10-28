import type { Metadata } from "next";
import { CheckIcon } from "lucide-react";
import { PROCESS } from "@/lib/site";
import { ClosingCta, PageHero } from "@/components/site/section";
import { ProcessSteps } from "@/components/evidence/systems";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Meleph's delivery process: discover, define, design, build, test and launch, then improve.",
  alternates: { canonical: "/about/how-we-work" },
};

const FROM_CLIENT = [
  "Business information",
  "Existing workflow",
  "People involved",
  "Systems currently used",
  "Desired outcome",
] as const;

const CLIENT_RECEIVES = [
  "Defined solution",
  "Interface design",
  "Working system",
  "Integrations",
  "Testing",
  "Deployment",
  "Ongoing support where agreed",
] as const;

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="Understand first. Build second."
        lede="We learn how the business works before deciding what technology belongs inside it. Then we build, launch and keep improving."
      />

      <section className="pb-24 md:pb-32">
        <div className="page-container">
          <ProcessSteps steps={PROCESS} />
        </div>
      </section>

      <section className="section-y surface-stone">
        <div className="page-container grid gap-14 md:grid-cols-2">
          <Checklist title="What we need from you" items={FROM_CLIENT} />
          <Checklist title="What you receive" items={CLIENT_RECEIVES} />
        </div>
      </section>

      <ClosingCta />
    </>
  );
}

function Checklist({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="display-item">{title}</h2>
      <ul className="flex flex-col">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-4 border-t py-4 text-lg">
            <CheckIcon aria-hidden="true" className="size-4 shrink-0 text-gold-ink" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
