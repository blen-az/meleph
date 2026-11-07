import { AutomationRun } from "@/components/evidence/automation-run";
import { ActivityFeed } from "@/components/evidence/activity-feed";
import { AutomationRibbon } from "@/components/evidence/automation-ribbon";
import { InView } from "@/components/site/in-view";
import { PROCESS_PREVIEW, PROJECTS } from "@/lib/site";
import { Badge } from "@/components/ui/badge";
import { HeroDemo } from "@/components/evidence/hero-demo";
import {
  ClosingCta,
  Eyebrow,
  PrimaryCta,
  SecondaryCta,
  SectionHeading,
  TextLink,
} from "@/components/site/section";
import { ConversationExample, InboxWorkspace } from "@/components/evidence/agent";
import { AgentWorkflow, CapabilityList, ProcessSteps } from "@/components/evidence/systems";
import { LeKiraySearch } from "@/components/evidence/projects";
import { ProjectCard } from "@/components/evidence/project-card";
import { SystemMap } from "@/components/evidence/system-map";
import { Announcement } from "@/components/site/announcement";
import { Faq } from "@/components/site/faq";

const AGENT_CHIPS = [
  "Answers questions",
  "Captures leads",
  "Books appointments",
  "Supports quotations",
  "Connects channels",
  "Hands conversations to your team",
] as const;

const AUTOMATIONS = [
  "Leads recorded with the details already captured",
  "Bookings placed straight into the calendar",
  "Reminders and follow-ups sent on schedule",
  "Teams notified with the conversation summary",
  "Dashboards updated as work happens",
] as const;

const CUSTOM_EXAMPLES = [
  "Internal AI assistants",
  "Workflow automation",
  "Operational dashboards",
  "Knowledge systems",
  "Portals",
  "Integrations",
] as const;

export default function HomePage() {
  return (
    <>
      {/* 6.1 Hero */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28">
        <div aria-hidden="true" className="bg-blueprint pointer-events-none absolute inset-0" />
        <div className="page-container relative grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col gap-8 lg:col-span-7">
            <Eyebrow className="rise">AI Systems &amp; Digital Products</Eyebrow>
            <h1 className="display-hero max-w-[15.5ch] rise [animation-delay:80ms]">
              Give your business a system that listens, understands and acts.
            </h1>
            <p className="lede max-w-[50ch] rise [animation-delay:160ms]">
              Meleph builds AI systems and digital products that help businesses understand customer
              needs, capture opportunities, connect teams and move every interaction toward the right
              next step.
            </p>
            <div className="flex flex-wrap gap-3 pt-1 rise [animation-delay:240ms]">
              <PrimaryCta href="/work">Explore Our Work</PrimaryCta>
              <SecondaryCta href="/get-started">Talk to Us</SecondaryCta>
            </div>
            <Announcement className="rise [animation-delay:320ms]" />
          </div>
          <div className="lg:col-span-5">
            <HeroDemo className="rise mx-auto w-full max-w-lg [animation-delay:200ms] lg:max-w-none" />
          </div>
        </div>
      </section>

      {/* From message to action: the system at a glance */}
      <section className="surface-stone py-16 md:py-24">
        <div className="page-container flex flex-col gap-10">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="display-section max-w-[22ch]">Every message becomes the right next step.</h2>
            <p className="max-w-[44ch] text-muted-foreground">
              Customers write in their own words. The agent works out what they need and moves the
              conversation toward an answer, a booking or your team.
            </p>
          </div>
          <SystemMap />
        </div>
      </section>

      <AutomationRibbon />

      {/* 6.2 What we build */}
      <section className="section-y border-t">
        <div className="page-container flex flex-col gap-14">
          <SectionHeading eyebrow="What we build" title="One company. Three ways we build." />
          <div className="grid gap-5 lg:grid-cols-12">
            <article className="reveal flex flex-col gap-8 rounded-2xl bg-card p-7 ring-1 ring-foreground/10 sm:p-10 lg:col-span-7 lg:row-span-2">
              <div className="flex flex-col gap-4">
                <h3 className="display-item text-[2.25rem]">AI Customer Agent</h3>
                <p className="max-w-[48ch] text-muted-foreground">
                  An AI system that handles customer conversations, understands intent, captures
                  information and moves customers toward the right next step.
                </p>
              </div>
              <ul className="flex flex-wrap gap-2" aria-label="Capabilities">
                {AGENT_CHIPS.map((chip) => (
                  <li key={chip}>
                    <Badge variant="secondary" className="h-8 px-3.5 text-[0.8125rem]">
                      {chip}
                    </Badge>
                  </li>
                ))}
              </ul>
              <ConversationExample className="mt-auto" />
              <TextLink href="/solutions/ai-customer-agent">Explore AI Customer Agent</TextLink>
            </article>

            <article className="reveal surface-ink flex flex-col gap-6 rounded-2xl p-7 sm:p-10 lg:col-span-5">
              <h3 className="display-item text-[2.25rem]">Custom AI Systems</h3>
              <p className="max-w-[44ch] text-muted-foreground">
                AI-powered systems designed around the way your business actually operates.
              </p>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 border-t pt-6">
                {CUSTOM_EXAMPLES.map((example) => (
                  <li key={example} className="flex items-center gap-2.5">
                    <span aria-hidden="true" className="size-1 rounded-full bg-gold" />
                    {example}
                  </li>
                ))}
              </ul>
              <TextLink href="/solutions/custom-ai-systems" className="mt-auto">
                Explore Custom AI Systems
              </TextLink>
            </article>

            <article className="reveal surface-stone flex flex-col gap-6 rounded-2xl p-7 sm:p-10 lg:col-span-5">
              <h3 className="display-item text-[2.25rem]">Digital Products</h3>
              <p className="max-w-[44ch] text-muted-foreground">
                Products developed by Meleph to solve specific market and business problems. Starting
                with LeKiray.
              </p>
              <div className="overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10">
                <LeKiraySearch rows={1} className="p-4" />
              </div>
              <TextLink href="/products" className="mt-auto">
                Explore Our Products
              </TextLink>
            </article>
          </div>
        </div>
      </section>

      {/* 6.3 Flagship product preview */}
      <section className="section-y border-t">
        <div className="page-container flex flex-col gap-16">
          <SectionHeading
            eyebrow="AI Customer Agent"
            title="From conversation to action."
            lede="Your customers ask questions, request information and show intent every day. The Meleph AI Customer Agent understands those conversations, responds using your business information and connects each customer to the next appropriate action."
          />
          <AgentWorkflow />
          <InboxWorkspace />
        </div>
      </section>

      {/* 6.4 Capabilities preview */}
      <section className="section-y surface-stone">
        <div className="page-container flex flex-col gap-14">
          <SectionHeading
            title="One agent. Every part of the conversation connected."
            lede="These are capabilities inside one product, not separate tools to stitch together."
          />
          <CapabilityList />
          <TextLink href="/solutions/ai-customer-agent">See how the AI Customer Agent works</TextLink>
        </div>
      </section>

      {/* Automation after the conversation */}
      <section className="section-y">
        <div className="page-container grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="reveal flex flex-col gap-6 lg:col-span-5">
            <Eyebrow>Automation</Eyebrow>
            <h2 className="display-section">The work keeps moving after the conversation ends.</h2>
            <p className="lede">
              Records are created, calendars updated, reminders scheduled and the right people told,
              without anyone copying details from one place to another.
            </p>
            <InView as="ul" className="flex flex-col border-t">
              {AUTOMATIONS.map((item) => (
                <li key={item} className="flex items-center gap-3 border-b py-3.5">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </InView>
          </div>
          <ActivityFeed className="lg:col-span-6 lg:col-start-7" />
        </div>
      </section>

      {/* Custom systems, briefly */}
      <section className="section-y surface-ink">
        <div className="page-container grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <Eyebrow>Custom AI Systems</Eyebrow>
            <h2 className="display-section">When your workflow does not fit a template.</h2>
            <p className="lede">
              Some business problems need more than another piece of off-the-shelf software. We design
              systems around the way your organisation actually operates.
            </p>
            <TextLink href="/solutions/custom-ai-systems">Explore Custom AI Systems</TextLink>
          </div>
          <AutomationRun className="lg:col-span-6 lg:col-start-7" />
        </div>
      </section>

      {/* 6.5 Selected work */}
      <section className="section-y">
        <div className="page-container flex flex-col gap-14">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Our work" title="See what we build." align="stack" />
            <TextLink href="/work">View all work</TextLink>
          </div>
          <ul className="grid gap-5 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <li key={project.slug} className="reveal">
                <ProjectCard slug={project.slug} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6.6 How we work */}
      <section className="section-y border-t">
        <div className="page-container flex flex-col gap-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="How we work"
              title="Understand first. Build second."
              align="stack"
            />
            <TextLink href="/about/how-we-work">Our delivery process</TextLink>
          </div>
          <ProcessSteps steps={PROCESS_PREVIEW} />
        </div>
      </section>

      <Faq />

      {/* 6.7 Final CTA */}
      <ClosingCta />
    </>
  );
}
