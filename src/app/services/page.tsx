import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { CTA } from "@/components/sections/CTA";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From AI strategy and custom model development to digital product design and data engineering — explore how Meleph can help your business.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="py-24 md:py-32">
        <div className="container-site">
          <SectionHeading
            label="Our Services"
            title="Everything you need to build, launch, and scale AI-powered products"
            description="We offer end-to-end capabilities — from strategy and design through engineering and optimization. Each engagement is tailored to your specific challenges and goals."
          />
        </div>
      </section>

      {/* Services grid */}
      <section className="pb-24 md:pb-32">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="animate-fade-in-up opacity-0 scroll-mt-24"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <Card
                  icon={service.icon}
                  title={service.title}
                  description={service.longDescription}
                  features={service.features}
                  className="h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 bg-stone-50/50">
        <div className="container-site">
          <SectionHeading
            label="Our Process"
            title="How we work"
            description="Every engagement follows a proven process designed to minimize risk and maximize impact."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Discover",
                description:
                  "We immerse ourselves in your business, data, and challenges to identify the highest-impact opportunities.",
              },
              {
                step: "02",
                title: "Design",
                description:
                  "We architect solutions that balance ambition with pragmatism — technically sound and operationally feasible.",
              },
              {
                step: "03",
                title: "Build",
                description:
                  "We develop iteratively, shipping working software early and often so you can validate direction continuously.",
              },
              {
                step: "04",
                title: "Scale",
                description:
                  "We optimize for production: performance, reliability, cost, and the operational workflows to keep it all running.",
              },
            ].map((phase, index) => (
              <div
                key={phase.step}
                className="animate-fade-in-up opacity-0 text-center"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="text-3xl font-semibold text-gradient mb-3">
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">
                  {phase.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
