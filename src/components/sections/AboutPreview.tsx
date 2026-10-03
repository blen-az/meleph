import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { STATS } from "@/lib/constants";

export function AboutPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div>
            <SectionHeading
              label="About Meleph"
              title="The kind of team you want building your most important systems"
              align="left"
              className="mb-8"
            />
            <div className="space-y-4 text-stone-500 leading-relaxed">
              <p>
                Meleph was founded on a simple observation: the gap between
                what AI can do and what most businesses are actually doing with
                it is enormous. Not because the technology isn&apos;t ready, but
                because most teams lack the combination of deep AI expertise
                and practical product sense needed to turn possibility into
                production.
              </p>
              <p>
                We bridge that gap. Our team brings experience from leading
                technology companies and research labs, combined with the
                pragmatism that comes from shipping products that real people
                depend on every day.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/about" variant="secondary">
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className="animate-fade-in opacity-0 bg-white border border-stone-200 rounded-2xl p-6 text-center card-hover"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-semibold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-stone-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
