import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SERVICES } from "@/lib/constants";

export function ServicesPreview() {
  // Show first 3 services on the homepage
  const previewServices = SERVICES.slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-stone-50/50">
      <div className="container-site">
        <SectionHeading
          label="What We Do"
          title="AI systems and digital products, from concept to production"
          description="We combine deep technical expertise with product thinking to build solutions that deliver real business value."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewServices.map((service, index) => (
            <div
              key={service.id}
              className="animate-fade-in-up opacity-0"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <Card
                icon={service.icon}
                title={service.title}
                description={service.shortDescription}
                href={`/services#${service.id}`}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/services" variant="secondary">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
