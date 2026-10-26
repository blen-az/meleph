"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRightIcon, MenuIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV, SITE, SOLUTIONS } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const isActive = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`);

const navLinkClass =
  "inline-flex h-9 items-center rounded-full px-3.5 text-[0.9375rem] text-foreground/75 transition-colors hover:text-foreground data-[active=true]:text-foreground";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md supports-backdrop-filter:bg-background/80">
      <div className="page-container flex h-[4.5rem] items-center justify-between gap-6">
        <Link
          href="/"
          className="font-serif text-[1.875rem] leading-none tracking-[-0.02em]"
          aria-label={`${SITE.name} home`}
        >
          {SITE.name}
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          <NavigationMenu viewport={false} aria-label="Primary">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  data-active={isActive(pathname, "/solutions")}
                  className="rounded-full bg-transparent px-3.5 text-[0.9375rem] font-normal text-foreground/75 hover:bg-transparent hover:text-foreground focus:bg-transparent data-open:bg-transparent data-[active=true]:text-foreground"
                >
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex w-80 flex-col gap-1 p-1">
                    {SOLUTIONS.map((solution) => (
                      <li key={solution.href}>
                        <NavigationMenuLink asChild>
                          <Link href={solution.href} className="flex-col items-start gap-0.5 p-3">
                            <span className="font-medium">{solution.title}</span>
                            <span className="text-muted-foreground">{solution.description}</span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                    <li>
                      <Separator className="my-1" />
                      <NavigationMenuLink asChild>
                        <Link href="/solutions" className="px-3 text-muted-foreground">
                          Compare solutions
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {NAV.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      data-active={isActive(pathname, item.href)}
                      aria-current={isActive(pathname, item.href) ? "page" : undefined}
                      className={cn(navLinkClass, "hover:bg-transparent focus:bg-transparent")}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button asChild className="h-10 rounded-full px-5 text-[0.9375rem]">
            <Link href="/get-started">
              Get Started
              <ArrowRightIcon data-icon="inline-end" />
            </Link>
          </Button>
        </div>

        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon-lg" className="rounded-full md:hidden">
              <MenuIcon />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full bg-background sm:max-w-sm">
            <SheetHeader className="px-6 pt-6">
              <SheetTitle className="font-serif text-3xl font-normal">{SITE.name}</SheetTitle>
              <SheetDescription>{SITE.descriptor}</SheetDescription>
            </SheetHeader>
            <nav aria-label="Mobile" className="flex flex-col px-6">
              <p className="pt-2 pb-1 text-sm text-muted-foreground">Solutions</p>
              {SOLUTIONS.map((solution) => (
                <MobileLink
                  key={solution.href}
                  href={solution.href}
                  active={isActive(pathname, solution.href)}
                  onNavigate={() => setMenuOpen(false)}
                >
                  {solution.title}
                </MobileLink>
              ))}
              <Link
                href="/solutions"
                onClick={() => setMenuOpen(false)}
                aria-current={pathname === "/solutions" ? "page" : undefined}
                className="w-fit py-1.5 text-muted-foreground transition-colors hover:text-foreground aria-[current=page]:text-foreground"
              >
                Compare solutions
              </Link>
              <Separator className="my-3" />
              {NAV.map((item) => (
                <MobileLink
                  key={item.href}
                  href={item.href}
                  active={isActive(pathname, item.href)}
                  onNavigate={() => setMenuOpen(false)}
                >
                  {item.label}
                </MobileLink>
              ))}
            </nav>
            <div className="mt-auto p-6">
              <Button asChild size="cta" className="w-full">
                <Link href="/get-started" onClick={() => setMenuOpen(false)}>
                  Get Started
                  <ArrowRightIcon data-icon="inline-end" />
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function MobileLink({
  href,
  active,
  onNavigate,
  children,
}: {
  href: string;
  active: boolean;
  onNavigate: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className="flex items-center gap-3 py-2.5 font-serif text-[1.75rem] leading-tight text-foreground/75 aria-[current=page]:text-foreground"
    >
      {children}
      {active ? <span aria-hidden="true" className="size-1.5 rounded-full bg-gold" /> : null}
    </Link>
  );
}
