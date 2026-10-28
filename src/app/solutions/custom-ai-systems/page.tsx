import { AutomationRun } from "@/components/evidence/automation-run";
import type { Metadata } from "next";
import { ClosingCta, PageHero, PrimaryCta, SectionHeading, TextLink } from "@/components/site/section";
import { CustomSystemList } from "@/components/evidence/systems";

export const metadata: Metadata = {
  title: "Custom AI Systems",
  description:
    "Some business problems need more than another piece of off-the-shelf software. Meleph designs systems around the way your organisation actually operates.",
  alternates: { canonical: "/solutions/custom-ai-systems" },
};

const UNDERSTAND = [
  { name: "The workflow", text: "What actually happens today, step by step, including the workarounds." },
  { name: "The people involved", text: "Who does the work, who decides, and who needs to know." },
  { name: "The information being used", text: "Where it lives, who maintains it, and how reliable it is." },
  { name: "Where the process breaks down", text: "The delays, repeated work and lost information worth fixing first." },
] as const;

export default function CustomAiSystemsPage() {
  return (
    <>
      <PageHero
        eyebrow="Custom AI Systems"
        title="When your workflow does not fit a template."
        lede="Some business problems need more than another piece of off-the-shelf software. We design systems around the way your organisation actually operates."
        actions={<PrimaryCta href="/get-started?path=project&interest=custom-ai-system">Discuss Your Project</PrimaryCta>}
        visual={<AutomationRun />}
      />

      <section className="section-y border-t">
        <div className="page-container flex flex-col gap-12">
          <SectionHeading eyebrow="What we build" title="Systems shaped around the work." />
          <CustomSystemList />
        </div>
      </section>

      <section className="section-y surface-ink">
        <div className="page-container grid gap-14 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <h2 className="display-section">We do not start with the technology.</h2>
            <p className="lede">
              We first understand the workflow, the people involved, the information being used and where
              the current process breaks down.
            </p>
            <TextLink href="/about/how-we-work">How we work</TextLink>
          </div>
          <dl className="grid gap-x-10 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            {UNDERSTAND.map((item) => (
              <div key={item.name} className="flex flex-col gap-2 border-t py-6">
                <dt className="text-lg font-medium">{item.name}</dt>
                <dd className="text-muted-foreground">{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ClosingCta
        title="Tell us where the process breaks down."
        lede="Describe what happens today. We will help you decide what the system needs to do, and what it does not."
      />
    </>
  );
}
