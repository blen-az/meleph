import type { Metadata } from "next";
import { ClosingCta, Eyebrow } from "@/components/site/section";
import { WorkGrid } from "@/components/work/work-grid";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Real systems, Meleph products and developed demonstrations showing how we approach business problems.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="page-container flex flex-col gap-14">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="flex flex-col gap-7 lg:col-span-7">
              <Eyebrow className="rise">Our work</Eyebrow>
              <h1 className="display-page rise [animation-delay:80ms]">See what we build.</h1>
              <p className="lede max-w-[52ch] rise [animation-delay:160ms]">
                Real systems, Meleph products and developed demonstrations showing how we approach business
                problems.
              </p>
            </div>
            <p className="border-l-2 border-gold pl-5 text-sm text-muted-foreground lg:col-span-4 lg:col-start-9">
              Every project is labelled. Demonstrations show what a system could do; they are never presented
              as deployed client work.
            </p>
          </div>
          <WorkGrid />
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
