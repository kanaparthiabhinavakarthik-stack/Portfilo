import { education } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Education() {
  return (
    <Section id="education" n="02" label="Education">
      <div className="relative pl-6">
        <div
          aria-hidden
          className="absolute top-1 bottom-1 left-0 w-px origin-top animate-draw-line bg-line"
        />
        <div className="space-y-4">
          {education.map((entry, index) => (
            <Reveal key={entry.title} delay={index * 90}>
              <div className="panel p-5 transition-shadow hover:shadow-[0_18px_40px_-24px_var(--primary)]">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <p className="font-mono text-[11px] text-muted-foreground">{entry.period}</p>
                  {entry.note && (
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-primary">
                      {entry.note}
                    </span>
                  )}
                </div>
                <h3 className="mt-1 font-display text-lg font-semibold text-foreground">
                  {entry.title}
                </h3>
                <p className="text-muted-foreground">{entry.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
