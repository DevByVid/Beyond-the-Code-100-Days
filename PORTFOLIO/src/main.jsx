import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { projects } from "./data/projects";
import { profileLinks } from "./data/profileLinks";
import "./styles.css";

const skills = [
  {
    label: "Backend",
    items: ["Python", "REST APIs", "Node.js", "Java", "SQL"],
    note: "Building blocks for reliable services",
  },
  {
    label: "Data / AI",
    items: ["scikit-learn", "Machine Learning", "Gemini", "Data Analytics"],
    note: "Turning data and models into useful features",
  },
  {
    label: "Systems",
    items: ["Distributed systems", "TCP sockets", "Multithreading"],
    note: "Understanding how services communicate and scale",
  },
  {
    label: "Tools",
    items: ["Git / GitHub", "MongoDB", "PostgreSQL", "Vercel", "Render"],
    note: "Shipping, testing, and iterating",
  },
];

const certifications = [
  {
    title: "Vibe Coding — AI Assisted Application Development",
    issuer: "FutureSkills Prime",
    note: "Gold",
  },
  {
    title: "Salesforce Developer Catalyst",
    issuer: "FutureSkills Prime",
  },
  {
    title: "AI & platform badges",
    issuer: "ServiceNow University",
    note: "18+ badges",
  },
  {
    title: "Python Essentials 1 & 2",
    issuer: "Cisco Networking Academy",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
  },
  {
    title: "AWS Academy Graduate — Data Engineering",
    issuer: "AWS Academy",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Accenture / Forage",
  },
];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 16 16"
      fill="none"
    >
      {diagonal ? (
        <path d="M4 12 12 4M5 4h7v7" />
      ) : (
        <path d="M2.5 8h10m-4-4 4 4-4 4" />
      )}
    </svg>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Vidushi Singh, home">
        <span className="brand-mark">VS</span>
        <span className="brand-copy">
          <strong>Vidushi Singh</strong>
          <small>SOFTWARE DEVELOPER</small>
        </span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="site-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span>{menuOpen ? "CLOSE" : "MENU"}</span>
        <span className={`menu-icon${menuOpen ? " is-open" : ""}`} aria-hidden="true">
          <i /><i /><i />
        </span>
      </button>
    </header>
      <nav
        className="site-menu"
        id="site-menu"
        aria-label="Main navigation"
        hidden={!menuOpen}
      >
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        <a href={profileLinks.github} target="_blank" rel="noreferrer">GitHub <ArrowIcon diagonal /></a>
      </nav>
    </>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow">
          <span>PRE-FINAL YEAR B.TECH · VIDUSHI SINGH</span>
        </div>
        <h1 id="hero-title">
          Backend,
          <br />
          <span>AI &amp; systems.</span>
        </h1>
        <p className="hero-tagline">Learning, Building, Evolving.</p>
        <p className="hero-role">Backend Developer <span>/</span> AI/ML Engineer</p>
        <p className="hero-description">
          I build practical software and explore what makes systems work — from
          distributed backends to AI-powered tools. Currently building stronger
          foundations in backend systems and machine learning.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href={profileLinks.resume}>
            View resume <ArrowIcon diagonal />
          </a>
          <a className="button button-secondary" href={profileLinks.github} target="_blank" rel="noreferrer">
            GitHub <ArrowIcon diagonal />
          </a>
          <a className="button button-secondary" href={profileLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ArrowIcon diagonal />
          </a>
        </div>
      </div>
      <div className="hero-portrait">
        <img
          src={`${import.meta.env.BASE_URL}vidushi-singh.jpeg`}
          alt="Portrait of Vidushi Singh"
          fetchPriority="high"
        />
      </div>
      <div className="hero-bottom">
        <span className="mono">CURRENT FOCUS</span>
        <span>Backend systems <b>·</b> Applied AI</span>
        <a href="#projects" aria-label="Scroll to projects">
          SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article className={`project-card${project.featured ? " project-featured" : ""}`}>
      <div className="project-card-top">
        <span className="project-number">{project.number} / 08</span>
        <span className="project-kind">{project.kind}</span>
      </div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <ul className="tag-list" aria-label="Technologies used">
        {project.stack.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <div className="project-links">
        <a href={project.href} target="_blank" rel="noreferrer">
          {project.linkLabel} <ArrowIcon diagonal />
        </a>
        {project.demoHref && (
          <a href={project.demoHref} target="_blank" rel="noreferrer">
            {project.demoLabel} <ArrowIcon diagonal />
          </a>
        )}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section className="projects-section section-wrap" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <div>
          <p className="section-kicker">SELECTED WORK <span>01 — 08</span></p>
          <h2 id="projects-title">Proof of <span>practice.</span></h2>
        </div>
        <p className="section-intro">
          Real things I’ve built, learned from, and made a little better with
          every iteration.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project) => <ProjectCard key={project.name} project={project} />)}
      </div>
      <a className="text-link all-projects" href={profileLinks.github} target="_blank" rel="noreferrer">
        More on GitHub <ArrowIcon diagonal />
      </a>
    </section>
  );
}

function About() {
  return (
    <section className="about-section section-wrap" id="about" aria-labelledby="about-title">
      <div className="section-heading">
        <div>
          <p className="section-kicker">A LITTLE CONTEXT <span>02</span></p>
          <h2 id="about-title">Curiosity, <span>with a keyboard.</span></h2>
        </div>
      </div>
      <div className="about-grid">
        <div className="about-statement">
          <span className="quote-mark">“</span>
          <p>
            I’m a pre-final year B.Tech student drawn to the infrastructure
            behind useful software — and to the intelligence we can build on top.
          </p>
          <span className="mono">LEARNING, BUILDING, EVOLVING.</span>
        </div>
        <div className="about-details">
          <p>
            Python is my strongest language, and I enjoy getting a system from
            idea to working code. I’ve built socket-based brokers, full-stack
            apps, and tools that make codebases easier to understand.
          </p>
          <p>
            I’m focused on two directions: backend development and AI/ML. Right
            now, that means sharpening my foundations in DBMS, operating
            systems, and data structures.
          </p>
          <div className="about-facts">
            <span><b>01</b> Backend-first mindset</span>
            <span><b>02</b> Comfortable learning in public</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills-section section-wrap" id="skills" aria-labelledby="skills-title">
      <div className="section-heading">
        <div>
          <p className="section-kicker">THE TOOLKIT <span>03</span></p>
          <h2 id="skills-title">Building blocks, <span>in progress.</span></h2>
        </div>
        <p className="section-intro">A practical foundation — with plenty left to explore.</p>
      </div>
      <div className="skills-grid">
        {skills.map((group, index) => (
          <article className="skill-group" key={group.label}>
            <div className="skill-index">0{index + 1}</div>
            <h3>{group.label}</h3>
            <p>{group.note}</p>
            <ul className="tag-list">
              {group.items.map((item) => (
                <li key={item} className={/in progress/i.test(item) ? "is-active" : undefined}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="skills-note">
        Also working on: <span>DBMS</span><span>Operating systems</span>
        <span>Data structures &amp; algorithms</span>
      </p>
    </section>
  );
}

function Certifications() {
  return (
    <section className="cert-section section-wrap" id="certifications" aria-labelledby="cert-title">
      <div className="section-heading">
        <div>
          <p className="section-kicker">LEARNING LOG <span>04</span></p>
          <h2 id="cert-title">Learning <span>in the open.</span></h2>
        </div>
        <p className="section-intro">
          Courses and credentials that mark the things I’ve been curious enough
          to study.
        </p>
      </div>
      <div className="cert-list">
        {certifications.map((cert, index) => (
          <article
            className={`cert-row${cert.issuer === "In progress" ? " is-active" : ""}`}
            key={cert.title}
          >
            <span className="cert-number">0{index + 1}</span>
            <h3>{cert.title}</h3>
            <span className="cert-issuer">
              {cert.issuer === "In progress" && <i className="status-dot" aria-hidden="true" />}
              {cert.issuer}
            </span>
            {cert.note && <span className="cert-note">{cert.note}</span>}
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
      <div className="contact-card">
        <p className="section-kicker">HAVE A GOOD PROBLEM? <span>05</span></p>
        <h2 id="contact-title">Let’s build<br /><span>what’s next.</span></h2>
        <p>
          I’m looking for opportunities to learn, contribute, and work on
          software that has to work in the real world.
        </p>
        <div className="contact-actions">
          <a className="button button-primary" href={profileLinks.github} target="_blank" rel="noreferrer">
            Find me on GitHub <ArrowIcon diagonal />
          </a>
          <a className="button button-secondary" href={profileLinks.linkedin} target="_blank" rel="noreferrer">
            Find me on LinkedIn <ArrowIcon diagonal />
          </a>
          <a className="button button-secondary" href={profileLinks.resume}>
            View resume <ArrowIcon diagonal />
          </a>
          <a className="button button-secondary" href="#home">Back to top ↑</a>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <footer className="site-footer section-wrap">
        <a className="brand" href="#home">
          <span className="brand-mark">VS</span>
          <span className="brand-copy">
            <strong>Vidushi Singh</strong>
            <small>SOFTWARE DEVELOPER</small>
          </span>
        </a>
        <p>Made with curiosity, good questions, and a little Python.</p>
        <span className="mono">© {new Date().getFullYear()} · LEARNING, BUILDING, EVOLVING.</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
