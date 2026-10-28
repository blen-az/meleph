import type { Metadata } from "next";
import { LEKIRAY_URL } from "@/lib/site";
import { Badge } from "@/components/ui/badge";
import { PageHero, PrimaryCta, TextLink } from "@/components/site/section";
import { LeKiraySearch } from "@/components/evidence/projects";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Alongside client systems, Meleph develops and operates its own digital products, starting with LeKiray.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our products"
        title="Digital products built to solve real problems."
        lede="Alongside client systems, Meleph develops and operates its own digital products."
      />

      <section className="pb-24 md:pb-32">
        <div className="page-container">
          <article className="surface-stone grid overflow-hidden rounded-3xl lg:grid-cols-12">
            <div className="flex flex-col gap-6 p-8 sm:p-12 lg:col-span-5 lg:p-14">
              <div className="flex flex-wrap items-center gap-3">
                <Badge>MELEPH PRODUCT</Badge>
                <span className="text-sm text-muted-foreground">Equipment rental marketplace</span>
              </div>
              <h2 className="font-serif text-6xl leading-none md:text-7xl">LeKiray</h2>
              <p className="lede">
                Find what you need. Rent it without the unnecessary search. LeKiray connects customers
                looking for vehicles, machinery and industrial equipment with providers offering them for
                rent.
              </p>
              <div className="mt-auto flex flex-wrap items-center gap-5 pt-4">
                <PrimaryCta href="/products/lekiray">Explore LeKiray</PrimaryCta>
                <TextLink href={LEKIRAY_URL} external>
                  Visit the product
                </TextLink>
              </div>
            </div>
            <div className="flex items-center p-6 sm:p-10 lg:col-span-7">
              <div className="w-full overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 shadow-[0_30px_60px_-36px_rgb(0_0_0/0.45)]">
                <LeKiraySearch rows={3} className="p-6" />
              </div>
            </div>
          </article>
          <p className="mt-6 max-w-[64ch] text-sm text-muted-foreground">
            LeKiray is owned and operated by Meleph. It is separate from the AI Customer Agent and is not
            part of client solution packages. More products will be listed here as they launch.
          </p>
        </div>
      </section>
    </>
  );
}
