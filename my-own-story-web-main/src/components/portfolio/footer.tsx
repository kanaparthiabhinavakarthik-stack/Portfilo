import { footerNote, profile } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-line/50 px-6 py-8 text-[12px] text-muted-foreground sm:flex-row">
      <span className="font-mono">
        © {new Date().getFullYear()} {profile.firstName} {profile.lastName}
      </span>
      <span className="text-center">{footerNote}</span>
      <a href="#top" className="transition-colors hover:text-foreground">
        Back to top ↑
      </a>
    </footer>
  );
}
