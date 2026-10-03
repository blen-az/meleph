import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-3xl bg-stone-900 p-12 md:p-20 text-center">
          {/* Background effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full opacity-20 animate-pulse-glow"
              style={{
                background:
                  "radial-gradient(circle, var(--amber-500) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-10 animate-pulse-glow"
              style={{
                background:
                  "radial-gradient(circle, var(--amber-400) 0%, transparent 70%)",
                animationDelay: "2s",
              }}
            />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-[0.12em] uppercase rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-6">
              Let&apos;s Work Together
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight tracking-tight mb-4">
              Ready to build something{" "}
              <span className="text-amber-400">extraordinary</span>?
            </h2>
            <p className="text-stone-400 text-lg leading-relaxed mb-10">
              Whether you&apos;re exploring AI for the first time or scaling an
              existing system, we&apos;d love to hear about your challenges.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                href="/contact"
                size="lg"
                className="!bg-amber-500 !text-stone-900 hover:!bg-amber-400 !font-semibold"
              >
                Start a Conversation
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
              <Button
                href="/services"
                variant="ghost"
                size="lg"
                className="!text-stone-300 hover:!text-white hover:!bg-white/5"
              >
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
