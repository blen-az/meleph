import Link from "next/link";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-400">
      <div className="container-site">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="inline-flex font-serif text-2xl font-semibold text-white tracking-tight mb-4"
            >
              {COMPANY.name}
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm mb-6">
              {COMPANY.description}
            </p>
            <div className="flex items-center gap-4">
              {/* Social icons (placeholder SVGs) */}
              {["X", "Li", "GH"].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-stone-800/50 text-stone-400 text-xs font-medium hover:bg-stone-800 hover:text-white transition-colors"
                  aria-label={label}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <span className="text-stone-500">{COMPANY.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800/50 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <span>
            © {currentYear} {COMPANY.name}. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-stone-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-stone-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
