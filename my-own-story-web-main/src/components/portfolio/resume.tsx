import { profile } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Resume() {
  return (
    <Section id="resume" n="08" label="Resume">
      <Reveal>
        <div className="panel flex flex-wrap items-center gap-4 p-5">
          <div>
            <p className="font-display text-lg font-semibold text-foreground">
              {profile.firstName} {profile.lastName} — Resume
            </p>
            <p className="font-mono text-[12px] text-muted-foreground">
              Last updated: {profile.resumeUpdated}
            </p>
          </div>
          <div className="ml-auto flex gap-3">
            <a
              href={profile.resumeFile}
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-4 py-2 text-[13px] font-medium text-foreground ring-1 ring-line transition-colors hover:ring-primary/40"
            >
              View
            </a>
            <a
              href={profile.resumeFile}
              download
              className="rounded-full bg-primary px-4 py-2 text-[13px] font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Download PDF
            </a>
          </div>
        </div>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-4 font-mono text-[11px] text-muted-foreground">
          The current file is a placeholder — swap it for your own PDF whenever you are ready.
        </p>
      </Reveal>
    </Section>
  );
}
