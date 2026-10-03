import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-stone-50/50">
      <div className="container-site">
        <SectionHeading
          label="Testimonials"
          title="Trusted by teams building the future"
          description="Don't take our word for it — hear from the companies we've partnered with."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="animate-fade-in-up opacity-0 bg-white border border-stone-200 rounded-2xl p-8 card-hover"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Quote mark */}
              <div className="text-amber-400 text-4xl leading-none mb-4 font-serif">
                &ldquo;
              </div>
              <blockquote className="text-stone-600 text-sm leading-relaxed mb-6">
                {testimonial.quote}
              </blockquote>
              <div className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center text-white text-sm font-semibold">
                  {testimonial.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-stone-900">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-stone-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
