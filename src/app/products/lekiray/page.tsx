import type { Metadata } from "next";
import { LEKIRAY_URL } from "@/lib/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eyebrow, SectionHeading } from "@/components/site/section";
import { EvidenceFrame } from "@/components/evidence/frame";
import { LeKirayCompare, LeKirayEnquiry, LeKiraySearch } from "@/components/evidence/projects";
import { ArrowUpRightIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "LeKiray",
  description:
    "Find what you need. Rent it without the unnecessary search. LeKiray connects customers looking for vehicles, machinery and industrial equipment with providers offering them for rent.",
  alternates: { canonical: "/products/lekiray" },
};

const PROVIDER_STEPS = [
  "List available vehicles, machinery and equipment.",
  "Add specifications, location and rental terms.",
  "Receive enquiries from customers who already know what they need.",
] as const;

export default function LeKirayPage() {
  return (
    <>
      <section className="pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="page-container grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="flex flex-col gap-7 lg:col-span-6">
            <div className="flex flex-wrap items-center gap-4 rise">
              <Eyebrow>LeKiray</Eyebrow>
              <Badge variant="outline">A Meleph product</Badge>
            </div>
            <h1 className="display-page rise [animation-delay:80ms]">
              Find what you need. Rent it without the unnecessary search.
            </h1>
            <p className="lede max-w-[52ch] rise [animation-delay:160ms]">
              LeKiray connects customers looking for vehicles, machinery and industrial equipment with
              providers offering them for rent.
            </p>
            <div className="flex flex-wrap gap-3 pt-2 rise [animation-delay:240ms]">
              <Button asChild size="cta">
                <a href={LEKIRAY_URL} target="_blank" rel="noopener noreferrer">
                  Browse Listings
                  <ArrowUpRightIcon data-icon="inline-end" />
                </a>
              </Button>
              <Button asChild size="cta" variant="outline" className="bg-transparent">
                <a href={LEKIRAY_URL} target="_blank" rel="noopener noreferrer">
                  List Your Equipment
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6">
            <EvidenceFrame title="Search" meta="LeKiray">
              <LeKiraySearch rows={3} className="p-6" />
            </EvidenceFrame>
          </div>
        </div>
      </section>

      <section className="section-y surface-stone">
        <div className="page-container flex flex-col gap-16">
          <SectionHeading
            title="Search, compare, enquire."
            lede="Everything a customer needs to go from a requirement to a conversation with the right provider."
          />
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="flex flex-col gap-5">
              <h3 className="display-item">Search</h3>
              <p className="text-muted-foreground">Search by category, location and requirement.</p>
              <EvidenceFrame title="Categories" caption={null}>
                <ul className="flex flex-wrap gap-2 p-5">
                  {["Vehicles", "Machinery", "Industrial equipment"].map((c) => (
                    <li key={c}>
                      <Badge variant="secondary" className="h-8 px-3.5">
                        {c}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </EvidenceFrame>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="display-item">Compare</h3>
              <p className="text-muted-foreground">Review listings, specifications and provider information.</p>
              <LeKirayCompare />
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="display-item">Enquire</h3>
              <p className="text-muted-foreground">Contact providers about availability and rental details.</p>
              <LeKirayEnquiry />
            </div>
          </div>
        </div>
      </section>

      <section className="section-y surface-ink">
        <div className="page-container grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <Eyebrow>For providers</Eyebrow>
            <h2 className="display-section">Put idle equipment in front of the people looking for it.</h2>
            <p className="lede">List available assets and receive enquiries from potential customers.</p>
            <div>
              <Button asChild size="cta">
                <a href={LEKIRAY_URL} target="_blank" rel="noopener noreferrer">
                  List Your Equipment
                  <ArrowUpRightIcon data-icon="inline-end" />
                </a>
              </Button>
            </div>
          </div>
          <ol className="flex flex-col lg:col-span-6 lg:col-start-7">
            {PROVIDER_STEPS.map((step, index) => (
              <li key={step} className="flex items-baseline gap-6 border-t py-6 text-lg">
                <span className="font-serif text-3xl text-gold-ink tabular-nums">{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-14">
        <div className="page-container">
          <p className="max-w-[70ch] text-sm text-muted-foreground">
            LeKiray is a digital product owned and operated by Meleph. It is not a feature of the AI Customer
            Agent and is not part of client solution packages. Interface views above are illustrative.
          </p>
        </div>
      </section>
    </>
  );
}
