import { useState } from "react";
import { profile, sections } from "@/lib/portfolio-data";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const links = [
  { href: "#top", label: "Home", id: "top" },
  ...sections.map((section) => ({
    href: `#${section.id}`,
    label: section.label,
    id: section.id,
  })),
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(["top", ...sections.map((section) => section.id)]);

  return (
    <nav className="sticky top-0 z-40 border-b border-line/60 bg-glass/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <a
          href="#top"
          className="font-display text-[15px] font-extrabold tracking-tight text-foreground"
        >
          {profile.initials}
          <span className="text-primary">.</span>
        </a>

        <div className="hidden items-center gap-1 text-[13px] font-medium text-muted-foreground lg:flex">
          {links
            .filter((link) => link.id !== "contact")
            .map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={active === link.id ? "true" : undefined}
                className={cn(
                  "rounded-full px-3 py-1.5 transition-colors hover:bg-foreground/[0.05] hover:text-foreground",
                  active === link.id && "bg-primary/10 text-primary",
                )}
              >
                {link.label}
              </a>
            ))}
          <a
            href="#contact"
            aria-current={active === "contact" ? "true" : undefined}
            className={cn(
              "ml-2 rounded-full bg-primary px-4 py-1.5 text-primary-foreground transition-colors hover:bg-primary/90",
              active === "contact" && "ring-2 ring-primary/30 ring-offset-2 ring-offset-background",
            )}
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="#contact"
            className="rounded-full bg-primary px-4 py-1.5 text-[13px] font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Contact
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:bg-foreground/[0.05] hover:text-foreground"
          >
            {open ? "close" : "menu"}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line/50 bg-glass/90 backdrop-blur-xl lg:hidden"
      >
        <ul className="mx-auto max-w-6xl px-6 py-4">
          {links
            .filter((link) => link.id !== "contact")
            .map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-foreground/[0.05] hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
}
