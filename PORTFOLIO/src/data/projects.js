const github = "https://github.com/DevByVid";

export const projects = [
  {
    name: "Mini Kafka Chat System",
    kind: "Distributed systems",
    number: "01",
    description:
      "A two-broker messaging system that replicates events and recovers state from append-only logs.",
    stack: ["Python", "TCP sockets", "Lamport clocks"],
    href: `${github}/mini-kafka-chat-system`,
    linkLabel: "Source code",
    featured: true,
  },
  {
    name: "RepoLens",
    kind: "AI / developer tooling",
    number: "02",
    description:
      "Turns unfamiliar repositories into useful architecture insights, dependency context, and codebase answers.",
    stack: ["Next.js", "FastAPI", "Gemini"],
    href: `${github}/Repolens`,
    linkLabel: "Source code",
    featured: true,
  },
  {
    name: "StaffSync",
    kind: "Full-stack product",
    number: "03",
    description:
      "A role-based HR management app with dedicated workflows for HR, managers, and employees.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    href: `${github}/staffsync`,
    linkLabel: "Source code",
    demoHref:
      "https://drive.google.com/file/d/11DVc_XoEKjyYwSQzhEJuEniGPWk4dUy-/view?usp=drive_link",
    demoLabel: "Watch demo",
    featured: true,
  },
  {
    name: "Skill Swap",
    kind: "Backend ownership",
    number: "04",
    description:
      "A team skill-exchange platform where I own backend development across the product's modules.",
    stack: ["Backend", "REST APIs", "Team project"],
    href: github,
    linkLabel: "GitHub profile",
  },
  {
    name: "DSA Practice Tracker",
    kind: "Web app",
    number: "05",
    description:
      "A lightweight tracker for recording practice, reviewing progress, and keeping a consistent streak.",
    stack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    href: `${github}/DSA-practice-tracker`,
    linkLabel: "Source code",
  },
  {
    name: "To-Do List",
    kind: "Python project",
    number: "06",
    description:
      "A small command-line app for keeping everyday tasks organized and easy to revisit.",
    stack: ["Python", "CLI"],
    href: `${github}/todo-list-python`,
    linkLabel: "Source code",
  },
  {
    name: "Quiz App",
    kind: "Python project",
    number: "07",
    description:
      "A terminal quiz that loads questions from JSON and gives a simple way to practice.",
    stack: ["Python", "JSON"],
    href: `${github}/python-quiz-app`,
    linkLabel: "Source code",
  },
  {
    name: "Typing Speed Test",
    kind: "Python project",
    number: "08",
    description:
      "A focused typing exercise that measures words per minute and accuracy in real time.",
    stack: ["Python", "Jupyter"],
    href: `${github}/TypingSpeedTest`,
    linkLabel: "Source code",
  },
];
