import type { Metadata } from "next";
import { CHANNELS, LAUNCH_CHANNELS } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  ClosingCta,
  Eyebrow,
  PrimaryCta,
  SecondaryCta,
  SectionHeading,
} from "@/components/site/section";
import { OpenChatButton } from "@/components/site/open-chat-button";
import {
  CapturePanel,
  ChannelTimeline,
  ConversationExample,
  FollowUpQueue,
  HandoffExample,
  InboxWorkspace,
  IntentPanel,
  KnowledgePanel,
  ReportingPreview,
} from "@/components/evidence/agent";
import { AgentWorkflow } from "@/components/evidence/systems";
import { ActionFlow } from "@/components/evidence/action-flow";
import { ExtendDiagram, SystemMap } from "@/components/evidence/system-map";

export const metadata: Metadata = {
  title: "AI Customer Agent",
  description:
    "An AI Customer Agent built around your business, capable of answering customers, understanding what they need, capturing information and moving each conversation forward.",
  alternates: { canonical: "/solutions/ai-customer-agent" },
};

const plannedChannels = CHANNELS.filter((channel) => !channel.launch);

function Feature({
  title,
  text,
  children,
  flip = false,
  footnote,
}: {
  title: string;
  text: string;
  children: React.ReactNode;
  flip?: boolean;
  footnote?: React.ReactNode;
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-10">
      <div className={cn("reveal flex flex-col gap-5 lg:col-span-5", flip && "lg:order-2 lg:col-start-8")}>
        <h2 className="display-section">{title}</h2>
        <p className="lede">{text}</p>
        {footnote}
      </div>
      <div className={cn("lg:col-span-6", flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-7")}>
        {children}
      </div>
    </div>
  );
}

export default function AiCustomerAgentPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
        <div aria-hidden="true" className="bg-blueprint pointer-events-none absolute inset-0" />
        <div className="page-container relative flex flex-col gap-16 md:gap-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="flex flex-col gap-7 lg:col-span-7">
              <Eyebrow className="rise">AI Customer Agent</Eyebrow>
              <h1 className="display-page rise [animation-delay:80ms]">From first question to next action.</h1>
            </div>
            <div className="flex flex-col gap-7 lg:col-span-5 rise [animation-delay:160ms]">
              <p className="lede">
                An AI Customer Agent built around your business, capable of answering customers,
                understanding what they need, capturing information and moving each conversation forward.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <PrimaryCta href="/get-started?path=demo&interest=ai-customer-agent">Request a Demo</PrimaryCta>
                <SecondaryCta href="#how-it-works">See How It Works</SecondaryCta>
              </div>
            </div>
          </div>
          <SystemMap className="rise [animation-delay:240ms]" />
        </div>
      </section>

      <section id="how-it-works" className="section-y surface-stone">
        <div className="page-container flex flex-col gap-14">
          <SectionHeading
            eyebrow="How it works"
            title="The AI moves beyond answering, into action."
            lede="Every conversation follows the same model. The interface may differ from one business to the next; the sequence does not."
          />
          <AgentWorkflow includeFollowUp />
        </div>
      </section>

      <section className="section-y">
        <div className="page-container flex flex-col gap-28 md:gap-36">
          <Feature
            title="A conversation that actually goes somewhere."
            text="A customer asks a specific question. The agent answers it with real information, then offers the next useful step: compare the options, or book a viewing."
          >
            <ConversationExample />
          </Feature>

          <Feature
            flip
            title="It understands more than keywords."
            text="The agent follows the conversation, asks relevant questions and identifies what the customer is trying to accomplish."
          >
            <IntentPanel />
          </Feature>

          <Feature
            title="Built around what your business knows."
            text="The agent responds using information approved by your business, including services, products, policies, availability, frequently asked questions and other relevant knowledge."
          >
            <KnowledgePanel />
          </Feature>

          <Feature
            flip
            title="Capture the opportunity while the customer is interested."
            text="The agent can collect the information your team needs during the conversation instead of sending customers to a generic contact form."
          >
            <CapturePanel />
          </Feature>
        </div>
      </section>

      <section className="section-y surface-stone">
        <div className="page-container flex flex-col gap-14">
          <SectionHeading
            title="Every conversation in one place."
            lede="Your team can review conversations, customer information, intent, assigned staff and follow-up status from one workspace."
          />
          <InboxWorkspace />
        </div>
      </section>

      <section className="section-y">
        <div className="page-container flex flex-col gap-28 md:gap-36">
          <Feature
            title="One customer experience across every connected channel."
            text="Customers should not have to start from zero every time they reach your business. Meleph keeps supported conversations and customer context connected."
            footnote={
              <div className="flex flex-col gap-3 border-t pt-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-muted-foreground">Available at launch</span>
                  {LAUNCH_CHANNELS.map((channel) => (
                    <Badge key={channel.name}>{channel.name}</Badge>
                  ))}
                </div>
                {plannedChannels.length ? (
                  <p className="text-sm text-muted-foreground">
                    Further channels are scoped with each business.
                  </p>
                ) : null}
              </div>
            }
          >
            <ChannelTimeline />
          </Feature>

          <div className="flex flex-col gap-10">
            <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
              <h2 className="display-section lg:col-span-6">The conversation can trigger the next step.</h2>
              <p className="lede lg:col-span-5 lg:col-start-8">
                Appointments, quotation requests, lead creation, notifications and connected-system updates
                can happen from the conversation.
              </p>
            </div>
            <ActionFlow />
          </div>

          <div className="flex flex-col gap-10">
            <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
              <h2 className="display-section lg:col-span-6">Extend what you have. Don&apos;t rebuild it.</h2>
              <p className="lede lg:col-span-5 lg:col-start-8">
                The agent works from the information and systems your business already uses, so customers
                get better answers without your team changing how it works.
              </p>
            </div>
            <ExtendDiagram />
          </div>

          <Feature
            flip
            title="Not every conversation has to start with the customer."
            text="Use customer context to send appropriate follow-ups, reminders, updates and re-engagement messages."
          >
            <FollowUpQueue />
          </Feature>

          <Feature
            title="AI when it helps. People when they matter."
            text="When a conversation requires judgment, negotiation or personal attention, the agent can hand it to your team with the context already captured."
          >
            <HandoffExample />
          </Feature>

          <Feature
            flip
            title="See what customers are actually asking for."
            text="Reporting reveals conversations, qualified leads, appointments, common questions, customer interests, handoffs and follow-up status."
          >
            <ReportingPreview />
          </Feature>
        </div>
      </section>

      <section className="section-y surface-ink">
        <div className="page-container grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="flex flex-col gap-5 lg:col-span-7">
            <h2 className="display-section">You are already talking to one.</h2>
            <p className="lede max-w-[52ch]">
              Mel, the assistant on this site, is a Meleph AI Customer Agent. Ask it anything about what we
              build.
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:justify-self-end">
            <OpenChatButton>Talk to Mel</OpenChatButton>
          </div>
        </div>
      </section>

      <ClosingCta
        title="See it working on your business."
        lede="We will walk through the AI Customer Agent using a scenario from your business: your questions, your information, your next steps."
      />
    </>
  );
}
