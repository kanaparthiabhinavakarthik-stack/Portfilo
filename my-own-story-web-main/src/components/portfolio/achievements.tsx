import { achievements } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Achievements() {
  return (
    <Section id="achievements" n="06" label="Achievements">
      <ul className="space-y-3">
        {achievements.map((entry, index) => (
          <Reveal key={entry.title} delay={index * 70}>
            <li className="panel flex items-baseline gap-3 px-5 py-3">
              <span className="font-mono text-[11px] text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-medium text-foreground">{entry.title}</span>
              <span className="ml-auto hidden font-mono text-[11px] text-muted-foreground sm:inline">
                {entry.detail}
              </span>
              <span className="font-mono text-[11px] text-muted-foreground">{entry.year}</span>
            </li>
          </Reveal>
        ))}
      </ul>
      <Reveal delay={180}>
        <p className="mt-4 font-mono text-[11px] text-muted-foreground">
          Nothing here yet — this stays honest and fills up as things actually happen.
        </p>
      </Reveal>
    </Section>
  );
}
