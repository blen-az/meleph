import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTA } from "@/components/sections/CTA";
import { STATS, VALUES, COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Meleph — our mission, values, and the team building intelligent systems that move businesses forward.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold tracking-[0.12em] uppercase rounded-full bg-amber-50 text-amber-700 border border-amber-200/60 mb-6">
              About {COMPANY.name}
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold text-stone-900 leading-tight tracking-tight mb-6">
              We believe AI should{" "}
              <span className="text-gradient">work in the real world</span>,
              not just in demos
            </h1>
            <p className="text-lg text-stone-500 leading-relaxed">
              {COMPANY.name} was founded to bridge the gap between what AI can
              do and what most businesses are actually doing with it. We bring
              the technical depth, product sense, and execution discipline
              needed to turn ambitious ideas into production systems.
            </p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 border-y border-stone-200 bg-stone-50/50">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-semibold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-stone-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              label="Our Story"
              title="Built from experience, driven by purpose"
              align="left"
              className="mb-8"
            />
            <div className="space-y-5 text-stone-500 leading-relaxed">
              <p>
                Before {COMPANY.name}, our founding team spent years building AI
                systems and digital products at leading technology companies.
                We saw the same pattern everywhere: brilliant research that
                never made it to production, promising prototypes that
                couldn&apos;t handle real-world complexity, and organizations
                that invested in AI without the infrastructure or processes to
                sustain it.
              </p>
              <p>
                We started {COMPANY.name} to do things differently. Every system
                we build is designed for production from day one — tested,
                monitored, and operationally sound. Every product is grounded
                in real user needs, not theoretical capabilities. And every
                engagement is structured as a true partnership, not a handoff.
              </p>
              <p>
                Today, we work with companies across industries — from
                healthcare and financial services to logistics and media —
                helping them build intelligent systems that actually work. Not
                demo-ware. Not slide-ware. Real systems that real people depend
                on, every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-stone-50/50">
        <div className="container-site">
          <SectionHeading
            label="Our Values"
            title="What guides every decision we make"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {VALUES.map((value, index) => (
              <div
                key={value.title}
                className="animate-fade-in-up opacity-0 bg-white border border-stone-200 rounded-2xl p-8 card-hover"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="section-divider mb-5" />
                <h3 className="text-lg font-semibold text-stone-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {value.description}
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
