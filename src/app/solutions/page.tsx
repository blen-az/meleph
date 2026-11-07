import { AutomationRun } from "@/components/evidence/automation-run";
import type { Metadata } from "next";
import { ClosingCta, PageHero, PrimaryCta, TextLink } from "@/components/site/section";
import { ConversationExample } from "@/components/evidence/agent";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "From customer-facing AI to custom operational systems, Meleph designs technology around the problem, workflow and people it needs to support.",
  alternates: { canonical: "/solutions" },
};

const SOLUTIONS = [
  {
    index: "Solution 1",
    name: "AI Customer Agent",
    title: "Turn customer conversations into business action.",
    text: "An AI Customer Agent that answers questions, understands intent, captures opportunities and connects customers to your team and business processes.",
    listLabel: "Capabilities",
    list: [
      "Customer conversations",
      "Lead capture",
      "Conversation inbox",
      "Connected channels",
      "Appointments",
      "Quotations",
      "Proactive messaging",
      "Human handoff",
      "Workflows",
      "Reporting",
    ],
    cta: "Explore AI Customer Agent",
    href: "/solutions/ai-customer-agent",
    surface: "",
  },
  {
    index: "Solution 2",
    name: "Custom AI Systems",
    title: "When your workflow does not fit a template.",
    text: "We design and build AI-powered systems around your processes, information and business goals.",
    listLabel: "Examples",
    list: [
      "Internal AI assistants",
      "Knowledge systems",
      "Workflow automation",
      "Operational dashboards",
      "Business portals",
      "Data integrations",
      "Employee tools",
      "Customer portals",
    ],
    cta: "Explore Custom AI Systems",
    href: "/solutions/custom-ai-systems",
    surface: "surface-ink",
  },
] as const;

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Systems built around how your business actually works."
        lede="From customer-facing AI to custom operational systems, we design technology around the problem, workflow and people it needs to support."
      />

      {SOLUTIONS.map((solution) => (
        <section key={solution.href} className={`section-y border-t ${solution.surface}`}>
          <div className="page-container grid gap-14 lg:grid-cols-12 lg:items-center">
            <div className="flex flex-col gap-6 lg:col-span-5">
              <p className="text-sm text-muted-foreground">
                {solution.index} <span aria-hidden="true">/</span> {solution.name}
              </p>
              <h2 className="display-section">{solution.title}</h2>
              <p className="lede">{solution.text}</p>
              <div className="flex flex-col gap-3 border-t pt-6">
                <h3 className="text-sm text-muted-foreground">{solution.listLabel}</h3>
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  {solution.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="pt-2">
                {solution.surface ? (
                  <TextLink href={solution.href}>{solution.cta}</TextLink>
                ) : (
                  <PrimaryCta href={solution.href}>{solution.cta}</PrimaryCta>
                )}
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              {solution.surface ? <AutomationRun /> : <ConversationExample />}
            </div>
          </div>
        </section>
      ))}

      <ClosingCta
        title="Not sure which one you need?"
        lede="Tell us about the problem. We will help you work out whether it is a customer-facing system, an internal one, or both."
      />
    </>
  );
}
