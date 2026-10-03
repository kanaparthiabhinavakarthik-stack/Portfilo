import { currentlyLearning } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Learning() {
  return (
    <Section id="learning" n="04" label="Currently Learning">
      <ul className="space-y-3">
        {currentlyLearning.map((entry, index) => (
          <Reveal key={entry.item} delay={index * 55}>
            <li className="panel flex items-center gap-3 rounded-full px-5 py-3">
              <span aria-hidden className="size-2 shrink-0 rounded-full bg-primary" />
              <span className="font-medium text-foreground">{entry.item}</span>
              <span className="ml-auto font-mono text-[11px] text-muted-foreground">
                {entry.status}
              </span>
            </li>
          </Reveal>
        ))}
      </ul>
      <Reveal delay={200}>
        <p className="mt-4 font-mono text-[11px] text-muted-foreground">
          This list is meant to change — add a line when you start, move it when it sticks.
        </p>
      </Reveal>
    </Section>
  );
}
