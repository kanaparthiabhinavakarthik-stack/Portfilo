import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type SectionProps = {
  id: string;
  n: string;
  label: string;
  children: ReactNode;
  className?: string;
};

/**
 * The portfolio's repeating frame: a numbered label in the left margin and the
 * content to its right, separated by a hairline rule.
 */
export function Section({ id, n, label, children, className }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn("scroll-mt-24 border-t border-line/50 py-14", className)}
    >
      <div className="grid gap-8 md:grid-cols-[220px_1fr]">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">{n}</p>
          <h2
            id={`${id}-heading`}
            className="mt-1 font-display text-2xl font-bold tracking-tight text-foreground"
          >
            {label}
          </h2>
        </Reveal>
        <div>{children}</div>
      </div>
    </section>
  );
}
