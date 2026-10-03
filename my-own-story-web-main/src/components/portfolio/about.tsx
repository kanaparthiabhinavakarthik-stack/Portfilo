import { about, interests } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function About() {
  return (
    <Section id="about" n="01" label="About">
      <div className="grid gap-4 sm:grid-cols-2">
        {about.map((card, index) => (
          <Reveal key={card.label} delay={index * 70}>
            <div className="panel h-full p-5">
              <p className="eyebrow mb-2">{card.label}</p>
              <p className="text-pretty text-foreground/85">{card.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="panel mt-4 p-5">
          <p className="eyebrow mb-3">Areas of computer science that pull me in</p>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full bg-primary/8 px-3 py-1 text-[13px] font-medium text-primary"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
