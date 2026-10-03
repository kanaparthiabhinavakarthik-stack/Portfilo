/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT YOUR PORTFOLIO HERE
 *  Everything the site displays lives in this one file.
 *  Replace the [bracketed placeholders] with your real details.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  firstName: "Abhinava Karthik",
  lastName: "Kanaparthi",
  initials: "AKK",
  title: "B.Tech CSE Student · 1st Year",
  year: "1st Year",
  program: "B.Tech, Computer Science and Engineering",
  college: "[College Name]",
  location: "[City, State, Country]",
  // TODO: put your real email here — it powers the contact form and the
  // "Email" link. Nothing sensitive (phone, address) belongs on this page.
  email: "your.name@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
  resumeFile: "/resume.pdf",
  resumeUpdated: "[Month Year]",
  intro:
    "I build small, honest things — learning how software, machines, and intelligent systems actually fit together. This is where I keep the work so far.",
};

/**
 * The numbered sections, in page order.
 * `id` must match the section's anchor, `n` is the label shown in the margin.
 */
export const sections = [
  { id: "about", n: "01", label: "About" },
  { id: "education", n: "02", label: "Education" },
  { id: "skills", n: "03", label: "Skills" },
  { id: "learning", n: "04", label: "Currently Learning" },
  { id: "projects", n: "05", label: "Projects" },
  { id: "achievements", n: "06", label: "Achievements" },
  { id: "activities", n: "07", label: "Activities" },
  { id: "resume", n: "08", label: "Resume" },
  { id: "contact", n: "09", label: "Contact" },
] as const;

export const about = [
  {
    label: "Who I am",
    body: "A first-year Computer Science student who learns by taking things apart, breaking them, and putting them back together again.",
  },
  {
    label: "What I study",
    body: "Programming fundamentals, data structures, and the maths behind computation — plus whatever I can build on the side.",
  },
  {
    label: "My specialization",
    body: "Computer Science and Engineering. Still early, still widening the surface area before I go deep.",
  },
  {
    label: "Where I want to go",
    body: "Into intelligent systems — the place where software meets hardware. Starting with small, useful tools and getting genuinely good at building.",
  },
];

export const education = [
  {
    period: "2025 — Present",
    title: "B.Tech, Computer Science and Engineering",
    detail: "[College Name] · [City] · Expected graduation [Year]",
    note: "1st Year",
  },
  {
    period: "[Year]",
    title: "Class XII (Intermediate)",
    detail: "[School] · [Board] · [Percentage]",
  },
  {
    period: "[Year]",
    title: "Class X (Secondary)",
    detail: "[School] · [Board] · [Percentage]",
  },
];

export const skillGroups = [
  {
    label: "Programming Languages",
    items: ["C", "C++", "Python"],
  },
  {
    label: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    label: "Tools & Technologies",
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    label: "AI / Machine Learning",
    items: ["Generative AI", "APIs", "Prompt Engineering"],
  },
];

/**
 * Add a line here whenever you start something new, and move it to Projects
 * or Skills once it sticks.
 */
export const currentlyLearning = [
  { item: "Data Structures and Algorithms", status: "in progress" },
  { item: "Python", status: "in progress" },
  { item: "C / C++", status: "in progress" },
  { item: "Web Development", status: "in progress" },
  { item: "Git & GitHub", status: "in progress" },
  { item: "Generative AI", status: "exploring" },
  { item: "Machine Learning", status: "exploring" },
  { item: "Cloud / Deployment", status: "exploring" },
];

export const interests = [
  "Artificial Intelligence",
  "Generative AI",
  "Software Development",
  "Computer Science",
  "Aerospace / Aeronautical Technology",
  "Robotics",
  "Embedded Systems",
];

/**
 * Only list projects you have actually built. Delete the placeholder cards
 * and copy the shape of one to add your own.
 */
export const projects = [
  {
    name: "[Project Name]",
    featured: true,
    role: "[Your role]",
    description:
      "A short, plain description of what this does and the problem it solves. No marketing — just what happened.",
    problem: "[The problem it solves]",
    tech: ["Python", "HTML", "CSS"],
    github: "#",
    demo: "#",
  },
  {
    name: "[Project Name]",
    role: "[Your role]",
    description: "Second entry — what it does and what it solved, in one or two lines.",
    tech: ["C++"],
    github: "#",
    demo: "#",
  },
  {
    name: "[Project Name]",
    role: "[Your role]",
    description: "Third entry — what it does and what it solved, in one or two lines.",
    tech: ["React", "APIs"],
    github: "#",
    demo: "#",
  },
];

/**
 * Do not add achievements you have not earned. Leave the placeholders until
 * something real happens.
 */
export const achievements = [
  { title: "[Hackathon / competition]", detail: "[Event · placement]", year: "[Year]" },
  { title: "[Academic achievement]", detail: "[Context]", year: "[Year]" },
  { title: "[Coding achievement]", detail: "[Platform · rank or milestone]", year: "[Year]" },
];

export const activities = [
  "[Student organization]",
  "[Technical event / workshop]",
  "[College project team]",
  "[Volunteering]",
  "[Open-source contribution]",
];

export const footerNote = "Designed and built by me — a work in progress, like everything else here.";
