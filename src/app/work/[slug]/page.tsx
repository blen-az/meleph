import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, InfoIcon } from "lucide-react";
import { DEMONSTRATION_DISCLOSURE, PROJECTS } from "@/lib/site";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { ClosingCta, TextLink } from "@/components/site/section";
import { ProjectVisual } from "@/components/evidence/projects";
import { ConversationExample, InboxWorkspace } from "@/components/evidence/agent";
import { LeKirayCompare, LeKirayEnquiry } from "@/components/evidence/projects";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
  };
}

function Experience({ slug }: { slug: string }) {
  if (slug === "lekiray") {
    return (
      <div className="grid gap-6 lg:grid-cols-2">
        <LeKirayCompare />
        <LeKirayEnquiry />
      </div>
    );
  }
  if (slug === "real-estate-ai-customer-agent") {
    return (
      <div className="flex flex-col gap-6">
        <ConversationExample />
        <InboxWorkspace />
      </div>
    );
  }
  return <ProjectVisual slug={slug} className="min-h-96 rounded-2xl" />;
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const isDemo = project.label === "DEMONSTRATION";

  return (
    <>
      <section className="pt-12 pb-16 md:pt-16">
        <div className="page-container flex flex-col gap-10">
          <Link
            href="/work"
            className="inline-flex w-fit items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeftIcon aria-hidden="true" className="size-4" />
            All work
          </Link>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="flex flex-col gap-6 lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant={isDemo ? "outline" : "default"}>{project.label}</Badge>
                <span className="text-sm text-muted-foreground">{project.industry}</span>
              </div>
              <h1 className="display-page">{project.title}</h1>
              <p className="lede max-w-[56ch]">{project.summary}</p>
            </div>
            {project.liveUrl ? (
              <div className="lg:col-span-4 lg:justify-self-end">
                <TextLink href={project.liveUrl} external>
                  Visit the product
                </TextLink>
              </div>
            ) : null}
          </div>
          {isDemo ? (
            <Alert className="max-w-2xl border-gold/50 bg-gold/10">
              <InfoIcon />
              <AlertTitle>Demonstration</AlertTitle>
              <AlertDescription>{DEMONSTRATION_DISCLOSURE.replace("Demonstration — ", "")}</AlertDescription>
            </Alert>
          ) : null}
        </div>
      </section>

      <ProjectVisual slug={project.slug} className="min-h-[24rem] md:min-h-[32rem]" />

      <section className="section-y">
        <div className="page-container flex flex-col gap-20">
          <CaseRow title="The problem">{project.problem}</CaseRow>
          <CaseRow title="The system">{project.system}</CaseRow>
          <CaseRow title="How it works">
            <ol className="flex flex-col">
              {project.steps.map((step, index) => (
                <li key={step} className="flex gap-5 border-t py-4 first:border-t-0 first:pt-0">
                  <span className="w-6 shrink-0 text-muted-foreground tabular-nums">{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </CaseRow>
          <div className="flex flex-col gap-10">
            <CaseRow title="The experience">{project.experience}</CaseRow>
            <Experience slug={project.slug} />
          </div>
          <CaseRow title="The outcome">
            <p>{project.outcome}</p>
            {isDemo ? <p className="mt-6 text-sm text-muted-foreground">{DEMONSTRATION_DISCLOSURE}</p> : null}
          </CaseRow>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}

function CaseRow({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-5 border-t pt-8 lg:grid-cols-12">
      <h2 className="display-item lg:col-span-4">{title}</h2>
      <div className="max-w-[62ch] text-lg leading-relaxed lg:col-span-7 lg:col-start-6">{children}</div>
    </div>
  );
}
