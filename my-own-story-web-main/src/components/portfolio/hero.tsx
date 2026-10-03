import { profile } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <header
      id="top"
      className="mx-auto grid max-w-6xl scroll-mt-24 items-center gap-10 px-6 pt-16 pb-12"
    >
      <div className="animate-rise">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
          <span className="size-1.5 animate-pulse-dot rounded-full bg-primary" />
          Portfolio · {new Date().getFullYear()}
        </p>

        <h1 className="text-balance font-display text-5xl font-extrabold tracking-tight text-foreground md:text-6xl">
          {profile.firstName}
          <br />
          {profile.lastName}
        </h1>

        <p className="mt-4 font-mono text-[13px] uppercase tracking-[0.14em] text-muted-foreground">
          {profile.title}
        </p>

        <p className="mt-5 max-w-[46ch] text-pretty text-muted-foreground">{profile.intro}</p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="#projects"
            className="rounded-full bg-primary px-5 py-2.5 text-center font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View Projects
          </a>
          <a
            href={profile.resumeFile}
            download
            className="rounded-full bg-glass/70 px-5 py-2.5 text-center font-medium text-foreground ring-1 ring-hairline backdrop-blur transition-colors hover:bg-glass"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="rounded-full px-5 py-2.5 text-center font-medium text-foreground ring-1 ring-line transition-colors hover:ring-primary/40"
          >
            Contact Me
          </a>
        </div>

        <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          <span>{profile.program}</span>
          <span aria-hidden className="h-3 w-px bg-line" />
          <span>{profile.location}</span>
        </p>
      </div>
    </header>
  );
}
