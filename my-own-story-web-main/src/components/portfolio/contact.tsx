import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { profile } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";
import { Section } from "./section";

const fieldClass =
  "mt-1 w-full rounded-xl bg-background px-4 py-2.5 text-[14px] text-foreground ring-1 ring-line transition-shadow focus:outline-none focus:ring-2 focus:ring-primary/50";

export function Contact() {
  const [sending, setSending] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      toast.error("Please fill in your name, email and message.");
      return;
    }

    setSending(true);
    const subject = `Portfolio message from ${name}`;
    const body = `${message}\n\n— ${name}\n${email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your mail app — hit send there.");
    setSending(false);
  }

  return (
    <Section id="contact" n="09" label="Contact">
      <div className="grid gap-4 md:grid-cols-[1.2fr_1fr]">
        <Reveal delay={80}>
          <form onSubmit={handleSubmit} className="panel space-y-3 p-5">
            <label className="block">
              <span className="eyebrow">Name</span>
              <input name="name" type="text" placeholder="Your name" className={fieldClass} />
            </label>
            <label className="block">
              <span className="eyebrow">Email</span>
              <input
                name="email"
                type="email"
                placeholder="you@email.com"
                className={fieldClass}
              />
            </label>
            <label className="block">
              <span className="eyebrow">Message</span>
              <textarea name="message" rows={3} placeholder="Say hello…" className={fieldClass} />
            </label>
            <button
              type="submit"
              disabled={sending}
              className="rounded-full bg-primary px-5 py-2.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
            >
              Send Message
            </button>
          </form>
        </Reveal>

        <Reveal delay={160}>
          <div className="panel space-y-3 p-5">
            {[
              { label: "GitHub", href: profile.github },
              { label: "LinkedIn", href: profile.linkedin },
              { label: "Email", href: `mailto:${profile.email}` },
              { label: "Location", href: profile.location },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between rounded-xl px-4 py-3 ring-1 ring-line"
              >
                <span className="font-medium text-foreground">{row.label}</span>
                <a
                  href={row.href}
                  target={row.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="max-w-[60%] truncate font-mono text-[11px] text-primary hover:underline"
                >
                  {row.href.replace(/^https?:\/\//, "").replace(/^mailto:/, "")}
                </a>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
