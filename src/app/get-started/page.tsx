import type { Metadata } from "next";
import { ENQUIRY_PATHS, INTERESTS, SITE, type EnquiryPath, type Interest } from "@/lib/site";
import { Eyebrow } from "@/components/site/section";
import { EnquiryForm } from "@/components/forms/enquiry-form";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Tell Meleph what you are trying to improve. You do not need to know what technology you need.",
  alternates: { canonical: "/get-started" },
};

const first = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value);

export default async function GetStartedPage({ searchParams }: PageProps<"/get-started">) {
  const params = await searchParams;
  const pathParam = first(params.path);
  const interestParam = first(params.interest);
  const path = ENQUIRY_PATHS.some((p) => p.value === pathParam) ? (pathParam as EnquiryPath) : "project";
  const interest = INTERESTS.some((i) => i.value === interestParam)
    ? (interestParam as Interest)
    : path === "demo"
      ? "ai-customer-agent"
      : undefined;

  return (
    <section className="pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="page-container grid gap-16 lg:grid-cols-12">
        <div className="flex flex-col gap-7 lg:col-span-5">
          <Eyebrow className="rise">Get started</Eyebrow>
          <h1 className="display-page rise [animation-delay:80ms]">Tell us what you are trying to improve.</h1>
          <p className="lede rise [animation-delay:160ms]">
            You do not need to know what technology you need. Tell us about the problem, process or
            opportunity and we will help determine the right starting point.
          </p>
          <p className="border-t pt-6 text-sm text-muted-foreground rise [animation-delay:240ms]">
            Prefer email? Write to{" "}
            <a href={`mailto:${SITE.email}`} className="text-foreground underline underline-offset-4">
              {SITE.email}
            </a>
            .
          </p>
        </div>
        <div className="lg:col-span-7">
          <EnquiryForm key={`${path}-${interest ?? ""}`} defaultPath={path} defaultInterest={interest} />
        </div>
      </div>
    </section>
  );
}
