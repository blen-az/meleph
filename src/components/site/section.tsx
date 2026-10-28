import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("eyebrow", className)}>{children}</p>;
}

/** Headline → explanation. Evidence follows as children of the section. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "split",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "split" | "stack";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "reveal grid gap-6",
        align === "split" && "lg:grid-cols-12 lg:items-end lg:gap-10",
        className,
      )}
    >
      <div className={cn("flex flex-col gap-5", align === "split" && "lg:col-span-7")}>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h2 className="display-section max-w-[18ch]">{title}</h2>
      </div>
      {lede ? (
        <p className={cn("lede max-w-[58ch]", align === "split" && "lg:col-span-5 lg:pb-1.5")}>{lede}</p>
      ) : null}
    </div>
  );
}

/** Interior page hero: eyebrow, H1, support copy, actions, optional visual. */
export function PageHero({
  eyebrow,
  title,
  lede,
  actions,
  visual,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede: React.ReactNode;
  actions?: React.ReactNode;
  visual?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("pt-16 pb-20 md:pt-24 md:pb-28", className)}>
      <div className={cn("page-container grid gap-14", visual && "lg:grid-cols-12 lg:items-center lg:gap-10")}>
        <div className={cn("flex flex-col gap-7", visual ? "lg:col-span-6" : "max-w-4xl")}>
          <Eyebrow className="rise">{eyebrow}</Eyebrow>
          <h1 className="display-page rise [animation-delay:80ms]">{title}</h1>
          <p className="lede max-w-[54ch] rise [animation-delay:160ms]">{lede}</p>
          {actions ? (
            <div className="flex flex-wrap items-center gap-3 pt-2 rise [animation-delay:240ms]">{actions}</div>
          ) : null}
        </div>
        {visual ? <div className="lg:col-span-6 rise [animation-delay:200ms]">{visual}</div> : null}
      </div>
    </section>
  );
}

export function PrimaryCta({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Button asChild size="cta">
      <Link href={href}>
        {children}
        <ArrowRightIcon data-icon="inline-end" />
      </Link>
    </Button>
  );
}

export function SecondaryCta({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Button asChild size="cta" variant="outline" className="bg-transparent">
      <Link href={href}>{children}</Link>
    </Button>
  );
}

/** Text link with a gold underline; used for in-section secondary actions. */
export function TextLink({
  href,
  children,
  external = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}) {
  const classes = cn(
    "group inline-flex w-fit items-center gap-1.5 border-b border-gold/70 pb-0.5 font-medium transition-colors hover:border-foreground",
    className,
  );
  const content = (
    <>
      {children}
      <ArrowRightIcon
        aria-hidden="true"
        className={cn("size-4 transition-transform group-hover:translate-x-0.5", external && "-rotate-45")}
      />
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {content}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

/** Closing conversion band (Home §6.7 and reused across pages). */
export function ClosingCta({
  title = "Have a process that should work better?",
  lede = "Tell us what is happening today and what you want to improve. You do not need to arrive with a technical specification.",
}: {
  title?: string;
  lede?: string;
}) {
  return (
    <section className="surface-stone section-y">
      <div className="page-container grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="reveal flex flex-col gap-6 lg:col-span-8">
          <h2 className="display-section max-w-[20ch]">{title}</h2>
          <p className="lede max-w-[52ch]">{lede}</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
          <PrimaryCta href="/get-started?path=project">Discuss a Project</PrimaryCta>
          <SecondaryCta href="/get-started?path=demo">Request a Demo</SecondaryCta>
        </div>
      </div>
    </section>
  );
}
