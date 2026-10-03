import { skillGroups } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Skills() {
  return (
    <Section id="skills" n="03" label="Skills">
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, groupIndex) => (
          <Reveal key={group.label} delay={groupIndex * 80}>
            <div className="panel h-full p-5">
              <p className="eyebrow mb-3">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, itemIndex) => (
                  <span
                    key={item}
                    style={{ animationDelay: `${groupIndex * 80 + itemIndex * 60}ms` }}
                    className="animate-chip-in rounded-full bg-primary/8 px-3 py-1 text-[13px] font-medium text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={160}>
        <p className="mt-4 font-mono text-[11px] text-muted-foreground">
          Only the technologies I have actually used or am actively learning.
        </p>
      </Reveal>
    </Section>
  );
}
