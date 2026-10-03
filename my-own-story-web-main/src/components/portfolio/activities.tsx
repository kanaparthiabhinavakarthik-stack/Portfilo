import { activities } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Activities() {
  return (
    <Section id="activities" n="07" label="Activities">
      <div className="flex flex-wrap gap-3">
        {activities.map((activity, index) => (
          <Reveal key={activity} delay={index * 60}>
            <span className="panel block rounded-full px-4 py-2 text-[13px] font-medium text-foreground">
              {activity}
            </span>
          </Reveal>
        ))}
      </div>
      <Reveal delay={180}>
        <p className="mt-4 font-mono text-[11px] text-muted-foreground">
          Hackathons, clubs, workshops, volunteering, open-source — anything that counts as
          learning outside the syllabus.
        </p>
      </Reveal>
    </Section>
  );
}
