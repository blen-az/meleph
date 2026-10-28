import Link from "next/link";
import { LEKIRAY_URL, SITE, SOLUTIONS } from "@/lib/site";
import { Separator } from "@/components/ui/separator";

const COLUMNS = [
  {
    title: "Solutions",
    links: [...SOLUTIONS.map(({ title, href }) => ({ label: title, href })), { label: "All solutions", href: "/solutions" }],
  },
  {
    title: "Company",
    links: [
      { label: "Work", href: "/work" },
      { label: "About", href: "/about" },
      { label: "How We Work", href: "/about/how-we-work" },
      { label: "Get Started", href: "/get-started" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "All products", href: "/products" },
      { label: "LeKiray", href: "/products/lekiray" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="surface-ink">
      <div className="page-container pt-20 pb-28 sm:pb-10">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_2fr]">
          <div className="flex flex-col gap-5">
            <Link href="/" className="font-serif text-5xl leading-none">
              {SITE.name}
            </Link>
            <p className="max-w-xs text-muted-foreground">
              AI systems and digital products built around real business needs.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="w-fit border-b border-gold/60 pb-0.5 transition-colors hover:border-gold"
            >
              {SITE.email}
            </a>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {COLUMNS.map((column) => (
              <div key={column.title} className="flex flex-col gap-4">
                <p className="text-sm text-muted-foreground">{column.title}</p>
                <ul className="flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="transition-colors hover:text-gold">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <Separator className="mt-20 mb-8" />
        <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. {SITE.descriptor}.
          </p>
          <a href={LEKIRAY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            LeKiray is a Meleph product
          </a>
        </div>
      </div>
    </footer>
  );
}
