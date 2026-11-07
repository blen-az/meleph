import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading, TextLink } from "@/components/site/section";

// Answers are limited to facts already stated in the brand spec and
// Mel's knowledge base. Do not add claims here that Mel cannot repeat.
const FAQS = [
  {
    q: "Is the AI Customer Agent a chatbot?",
    a: "No. It is a customer-facing system built around your business. It answers questions from approved information, captures the details your team needs, moves customers toward a booking, quotation or enquiry, and hands conversations to your team with the context already captured.",
  },
  {
    q: "Where does the agent get its answers?",
    a: "Only from information your business approves, such as services, products, policies, availability and frequently asked questions. Anything not yet approved is not used.",
  },
  {
    q: "What happens when a customer needs a person?",
    a: "When a conversation needs judgment, negotiation or personal attention, the agent hands it to a team member with the conversation and customer details already summarised, so the customer does not have to repeat themselves.",
  },
  {
    q: "Which channels does it work on?",
    a: "Website conversations are supported at launch. Other channels are scoped with each business and confirmed before a system goes live.",
  },
  {
    q: "Do we need a technical specification to start?",
    a: "No. Tell us what is happening today and what you want to improve. We start by understanding the workflow, the people involved and where the process breaks down.",
  },
  {
    q: "Is LeKiray part of what you build for clients?",
    a: "No. LeKiray is a digital product owned and operated by Meleph. It is separate from the AI Customer Agent and is not part of client solution packages.",
  },
] as const;

export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className="section-y border-t">
      <div className="page-container grid gap-12 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-4">
          <SectionHeading eyebrow="Questions" title="What people ask before starting." align="stack" />
          <TextLink href="/get-started">Ask us something else</TextLink>
        </div>
        <Accordion type="single" collapsible className="lg:col-span-7 lg:col-start-6">
          {FAQS.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger className="py-5 text-left text-lg font-medium hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </section>
  );
}
