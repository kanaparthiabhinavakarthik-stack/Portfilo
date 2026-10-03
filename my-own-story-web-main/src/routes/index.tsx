import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/nav";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Education } from "@/components/portfolio/education";
import { Skills } from "@/components/portfolio/skills";
import { Learning } from "@/components/portfolio/learning";
import { Projects } from "@/components/portfolio/projects";
import { Achievements } from "@/components/portfolio/achievements";
import { Activities } from "@/components/portfolio/activities";
import { Resume } from "@/components/portfolio/resume";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { profile } from "@/lib/portfolio-data";

const title = `${profile.firstName} ${profile.lastName} — B.Tech CSE Student`;
const description =
  "Portfolio of Abhinava Karthik Kanaparthi, a first-year Computer Science and Engineering student: projects, skills, what he is currently learning, and how to get in touch.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <div aria-hidden className="page-glow fixed inset-0 -z-10" />
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Nav />
      <Hero />
      <main className="mx-auto max-w-6xl px-6 pb-24">
        <About />
        <Education />
        <Skills />
        <Learning />
        <Projects />
        <Achievements />
        <Activities />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
