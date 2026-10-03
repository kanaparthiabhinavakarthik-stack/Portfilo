import { projects } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { Section } from "./section";

function Tech({ items }: { items: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full bg-primary/8 px-2.5 py-1 text-[12px] font-medium text-primary"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function Links({ github, demo }: { github: string; demo: string }) {
  return (
    <div className="mt-5 flex gap-4 text-[13px] font-medium">
      <a href={github} className="text-primary hover:underline">
        GitHub ↗
      </a>
      {demo !== "#" && (
        <a href={demo} className="text-primary hover:underline">
          Live ↗
        </a>
      )}
    </div>
  );
}

export function Projects() {
  const featured = projects.find((project) => project.featured) ?? projects[0];
  if (!featured) return null;
  const rest = projects.filter((project) => project !== featured);

  return (
    <Section id="projects" n="05" label="Projects">
      <div className="grid gap-4 md:grid-cols-2">
        <Reveal className="md:col-span-2">
          <article className="panel-strong group p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
                  Featured
                </p>
                <h3 className="mt-1 font-display text-xl font-bold text-foreground">
                  {featured.name}
                </h3>
              </div>
              <span className="font-mono text-[11px] text-muted-foreground">
                Role: {featured.role}
              </span>
            </div>
            <p className="mt-3 max-w-[52ch] text-pretty text-muted-foreground">
              {featured.description}
            </p>
            <p className="mt-2 text-pretty text-muted-foreground">
              <span className="eyebrow">Solves · </span>
              {featured.problem}
            </p>
            <Tech items={featured.tech} />
            <Links github={featured.github} demo={featured.demo} />
          </article>
        </Reveal>

        {rest.map((project, index) => (
          <Reveal key={`${project.name}-${index}`} delay={index * 90}>
            <article
              className={cn(
                "panel h-full p-5 transition-shadow",
                "hover:shadow-[0_18px_40px_-24px_var(--primary)]",
              )}
            >
              <h3 className="font-display text-lg font-semibold text-foreground">{project.name}</h3>
              <p className="mt-2 text-pretty text-[14px] text-muted-foreground">
                {project.description}
              </p>
              <Tech items={project.tech} />
              <Links github={project.github} demo={project.demo} />
            </article>
          </Reveal>
        ))}

        <Reveal delay={160} className="md:col-span-2">
          <div className="grid place-items-center rounded-2xl border-2 border-dashed border-line p-6 text-center">
            <p className="font-display text-lg font-semibold text-muted-foreground">Incoming</p>
            <p className="mt-1 text-[13px] text-muted-foreground">
              Next build goes here — placeholder until it ships.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
