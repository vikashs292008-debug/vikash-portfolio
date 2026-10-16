
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { SylvaLivingWorldScene } from "@designcodeio/threeui";

const PROFILE = {
  name: "VIKASH.S",
  role: "Computer Science Engineering Student",
  college: "Atria Institute of Technology",
  location: "Bengaluru, India",
  email: "vikashs292008@gmail.com",
  photo: "/profile.jpeg",
  github: "https://github.com/vikashs292008-debug",
  linkedin: "https://www.linkedin.com/",
};

const skills = [
  { name: "C Programming", level: "Learning" },
  { name: "Python", level: "Learning" },
  { name: "HTML & CSS", level: "Building" },
  { name: "JavaScript", level: "Building" },
  { name: "React", level: "Exploring" },
  { name: "Flask & APIs", level: "Exploring" },
  { name: "Git & GitHub", level: "Using" },
  { name: "Data Structures", level: "Learning" },
];

const projects = [
  {
    number: "01",
    name: "BedFlow AI",
    category: "Healthcare · AI · Hackathon",
    description:
      "A hospital patient-flow and bed-management project designed to help identify operational bottlenecks and support better resource allocation.",
    tags: ["Python", "React", "FastAPI", "Data"],
    link: "https://github.com/vikashs292008-debug/BedFlow-AI",
    featured: true,
  },
  {
    number: "02",
    name: "Adaptive Interviewer",
    category: "AI · Interview Technology",
    description:
      "An interview-assistance concept exploring adaptive questions and camera-based interaction using computer vision.",
    tags: ["AI", "MediaPipe", "Web"],
    link: "https://github.com/vikashs292008-debug",
  },
  {
    number: "03",
    name: "NCC Digital Campus",
    category: "Campus Technology",
    description:
      "A campus-focused application concept for simplifying NCC attendance and related digital workflows.",
    tags: ["Web Development", "UI"],
    link: "https://github.com/vikashs292008-debug",
  },
  {
    number: "04",
    name: "Punch Matrix AI",
    category: "AI · Project Concept",
    description:
      "An AI-oriented project concept focused on building practical digital experiences.",
    tags: ["AI", "Problem Solving"],
    link: "https://github.com/vikashs292008-debug",
  },
  {
    number: "05",
    name: "MindfulChat",
    category: "Web · Conversational Technology",
    description:
      "A conversational application concept designed around accessible, supportive digital interactions.",
    tags: ["Python", "Web", "UI"],
    link: "https://github.com/vikashs292008-debug",
  },
  {
    number: "06",
    name: "Population Estimation",
    category: "Numerical Methods",
    description:
      "A project exploring population estimation using Newton's backward interpolation.",
    tags: ["Python", "Mathematics", "Data"],
    link: "https://github.com/vikashs292008-debug",
  },
];

const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap');

:root {
  --bg: #07110b;
  --panel: rgba(12, 26, 16, .72);
  --line: rgba(190, 255, 201, .15);
  --green: #a4ffb5;
  --muted: #a4b8a8;
  --white: #f2fff4;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; scroll-padding-top: 90px; }
body {
  margin: 0;
  background: var(--bg);
  color: var(--white);
  font-family: 'Manrope', sans-serif;
}
a { color: inherit; text-decoration: none; }
button, a { -webkit-tap-highlight-color: transparent; }
button { font: inherit; }
::selection { background: var(--green); color: #07110b; }

.portfolio { position: relative; min-height: 100vh; isolation: isolate; }
.world {
  position: fixed;
  inset: 0;
  z-index: -3;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 50% 15%, #284a2c 0%, transparent 55%),
    linear-gradient(140deg, #0b2412, #07110b 70%);
}
.world > div { width: 100%; height: 100%; }
.world canvas { width: 100% !important; height: 100% !important; }
.world-shade {
  position: fixed;
  inset: 0;
  z-index: -2;
  pointer-events: none;
  background:
    linear-gradient(180deg, rgba(5,18,7,.13), rgba(5,18,7,.27) 45%, rgba(5,18,7,.72)),
    linear-gradient(90deg, rgba(5,18,7,.45), rgba(5,18,7,.12) 60%, rgba(5,18,7,.22));
}
.noise {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  opacity: .08;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.4'/%3E%3C/svg%3E");
}
.container { width: min(1120px, calc(100% - 40px)); margin: auto; }
.nav-wrap {
  position: fixed; top: 14px; left: 0; right: 0; z-index: 20;
  padding: 0 20px;
}
.nav {
  max-width: 1120px; margin: auto; min-height: 60px; padding: 10px 14px;
  display: flex; align-items: center; justify-content: space-between; gap: 18px;
  border: 1px solid var(--line); border-radius: 18px;
  background: rgba(7, 17, 10, .78); backdrop-filter: blur(22px);
  box-shadow: 0 12px 40px rgba(0,0,0,.18);
}
.brand { display: flex; align-items: center; gap: 10px; font-weight: 800; letter-spacing: .04em; }
.brand-icon {
  width: 35px; height: 35px; display: grid; place-items: center;
  border-radius: 12px; background: var(--green); color: #07110b;
}
.nav-links { display: flex; align-items: center; gap: 22px; font-size: 12px; color: #c4d4c7; }
.nav-links a:hover { color: var(--green); }
.nav-links .nav-contact { border: 1px solid var(--line); padding: 10px 14px; border-radius: 30px; }
.menu-toggle {
  display: none; color: var(--white); background: transparent;
  border: 1px solid var(--line); border-radius: 10px; padding: 8px 12px;
}
.hero {
  min-height: 100svh; display: grid; align-items: center;
  padding: 125px 0 70px;
}
.hero-grid { display: grid; grid-template-columns: 1.15fr .85fr; gap: 65px; align-items: center; }
.eyebrow {
  display: inline-flex; align-items: center; gap: 9px;
  padding: 9px 13px; border: 1px solid rgba(164,255,181,.28);
  background: rgba(8,32,14,.56); border-radius: 30px;
  font: 10px 'DM Mono', monospace; letter-spacing: .09em;
  text-transform: uppercase; color: #d5ffe0;
}
.pulse {
  width: 7px; height: 7px; background: var(--green); border-radius: 50%;
  box-shadow: 0 0 15px var(--green); animation: pulse 2s infinite;
}
h1 {
  margin: 26px 0 20px; font-size: clamp(48px, 7vw, 88px);
  line-height: .99; letter-spacing: -.075em; font-weight: 800;
}
h1 span { display: block; color: var(--green); }
.hero-copy { color: #d0ddd2; max-width: 590px; font-size: 15px; line-height: 1.95; }
.actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 27px; }
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 9px;
  padding: 13px 18px; border-radius: 13px; border: 1px solid var(--line);
  font-size: 12px; font-weight: 800; transition: .25s ease;
}
.btn-primary { color: #07110b; background: var(--green); border-color: var(--green); }
.btn-secondary { background: rgba(7,17,10,.48); }
.btn:hover { transform: translateY(-3px); box-shadow: 0 8px 28px rgba(164,255,181,.12); }
.meta { display: flex; flex-wrap: wrap; gap: 20px; margin-top: 28px; color: #d0ddd2; font-size: 11px; }
.meta span { display: inline-flex; gap: 7px; align-items: center; }
.portrait-card {
  position: relative; max-width: 390px; width: 100%; justify-self: end;
  padding: 10px; border-radius: 30px; border: 1px solid rgba(164,255,181,.5);
  background: linear-gradient(145deg, rgba(164,255,181,.13), rgba(7,17,10,.55));
  box-shadow: 0 0 70px rgba(75,185,95,.13), inset 0 0 30px rgba(164,255,181,.03);
  animation: float 6s ease-in-out infinite;
}
.portrait-frame { position: relative; height: 460px; overflow: hidden; border-radius: 22px; background: #14281a; }
.portrait { width: 100%; height: 100%; object-fit: cover; object-position: center 25%; display: block; }
.portrait-caption {
  position: absolute; bottom: 13px; left: 13px; right: 13px;
  padding: 16px; border: 1px solid rgba(255,255,255,.12);
  border-radius: 15px; background: rgba(5,16,8,.8); backdrop-filter: blur(15px);
}
.portrait-caption strong { display: block; font-size: 14px; }
.portrait-caption small { display: block; margin-top: 5px; color: #b5cbb9; font-size: 11px; }
.floating-label {
  position: absolute; top: 25px; right: -20px; padding: 12px 15px;
  border-radius: 13px; border: 1px solid var(--line);
  background: rgba(7,17,10,.9); font-size: 10px; font-weight: 800;
}
.section { padding: 100px 0; }
.section-head { display: flex; justify-content: space-between; align-items: end; gap: 20px; margin-bottom: 36px; }
.kicker { color: var(--green); font: 11px 'DM Mono', monospace; letter-spacing: .14em; text-transform: uppercase; }
h2 { margin: 12px 0 0; font-size: clamp(32px, 4vw, 52px); letter-spacing: -.06em; line-height: 1.1; }
.section-intro { max-width: 560px; color: var(--muted); line-height: 1.85; font-size: 13px; }
.panel {
  border: 1px solid var(--line); background: var(--panel);
  backdrop-filter: blur(17px); border-radius: 23px;
}
.about-grid { display: grid; grid-template-columns: 1.1fr .9fr; gap: 20px; }
.about-main { padding: 30px; }
.about-main p { color: #c3d2c6; line-height: 1.95; font-size: 13px; }
.stats { display: grid; grid-template-columns: repeat(2,1fr); gap: 12px; }
.stat { padding: 23px; }
.stat strong { display: block; font-size: 26px; color: var(--green); letter-spacing: -.05em; }
.stat span { display: block; margin-top: 8px; color: var(--muted); font-size: 11px; line-height: 1.6; }
.skill-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 13px; }
.skill {
  padding: 19px; border: 1px solid var(--line); border-radius: 16px;
  background: rgba(9,24,13,.68); transition: .25s ease;
}
.skill:hover { transform: translateY(-5px); border-color: rgba(164,255,181,.5); }
.skill-icon { color: var(--green); font-size: 20px; }
.skill strong { display: block; margin-top: 15px; font-size: 12px; }
.skill small { display: block; margin-top: 6px; color: var(--muted); font-size: 10px; }
.project-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 16px; }
.project {
  position: relative; padding: 25px; border: 1px solid var(--line);
  border-radius: 20px; background: rgba(9,24,13,.76); overflow: hidden;
  transition: transform .3s ease, border-color .3s ease;
}
.project::before {
  content: ""; position: absolute; width: 180px; height: 180px;
  right: -100px; top: -100px; border-radius: 50%;
  background: rgba(164,255,181,.09); filter: blur(10px);
}
.project:hover { transform: translateY(-5px); border-color: rgba(164,255,181,.45); }
.project-top { display: flex; justify-content: space-between; gap: 15px; align-items: center; }
.project-number { color: var(--green); font: 12px 'DM Mono', monospace; }
.project-category { color: var(--muted); font-size: 10px; text-align: right; }
.project h3 { font-size: 22px; margin: 25px 0 10px; letter-spacing: -.04em; }
.project p { min-height: 70px; color: #b8cabb; font-size: 12px; line-height: 1.9; }
.tags { display: flex; flex-wrap: wrap; gap: 7px; margin: 18px 0 22px; }
.tag { padding: 7px 10px; border: 1px solid var(--line); border-radius: 20px; color: #c8e4ce; font-size: 10px; }
.project-link { display: inline-flex; gap: 8px; align-items: center; color: var(--green); font-size: 11px; font-weight: 800; }
.timeline { display: grid; grid-template-columns: 20px 1fr; gap: 18px; max-width: 760px; }
.timeline-line { position: relative; display: flex; justify-content: center; }
.timeline-line::before { content: ""; position: absolute; top: 10px; bottom: -30px; width: 1px; background: rgba(164,255,181,.3); }
.timeline-dot { position: relative; width: 11px; height: 11px; border-radius: 50%; background: var(--green); box-shadow: 0 0 15px rgba(164,255,181,.5); }
.timeline-card { padding: 24px; margin-bottom: 25px; }
.timeline-card h3 { margin: 0 0 8px; font-size: 17px; }
.timeline-card p { margin: 0; color: var(--muted); font-size: 12px; line-height: 1.9; }
.timeline-card small { display: block; margin-bottom: 12px; color: var(--green); font: 10px 'DM Mono', monospace; }
.contact-panel {
  padding: clamp(25px, 5vw, 55px); text-align: center;
  background: radial-gradient(ellipse at top, rgba(65,132,74,.2), transparent 65%), var(--panel);
}
.contact-panel h2 { max-width: 670px; margin: 15px auto; }
.contact-panel p { max-width: 560px; margin: 0 auto; color: var(--muted); font-size: 13px; line-height: 1.9; }
.contact-links { display: flex; justify-content: center; flex-wrap: wrap; gap: 12px; margin-top: 27px; }
.footer {
  padding: 28px 0; border-top: 1px solid var(--line);
  color: var(--muted); font-size: 11px;
}
.footer-inner { display: flex; justify-content: space-between; align-items: center; gap: 15px; flex-wrap: wrap; }
.socials { display: flex; flex-wrap: wrap; gap: 17px; }
.socials a:hover { color: var(--green); }
.reveal { opacity: 0; transform: translateY(22px); transition: opacity .7s ease, transform .7s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }
.back-top {
  position: fixed; bottom: 20px; right: 20px; z-index: 10;
  width: 43px; height: 43px; border-radius: 50%; border: 1px solid var(--line);
  background: rgba(7,17,10,.8); color: var(--green); cursor: pointer;
  backdrop-filter: blur(12px);
}
@keyframes pulse { 50% { opacity: .4; transform: scale(.8); } }
@keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
@media (max-width: 850px) {
  .hero-grid { grid-template-columns: 1fr .8fr; gap: 25px; }
  .portrait-frame { height: 370px; }
  .skill-grid { grid-template-columns: repeat(2,1fr); }
  .nav-links { gap: 12px; }
}
@media (max-width: 650px) {
  .container { width: calc(100% - 30px); }
  .nav-wrap { top: 8px; padding: 0 10px; }
  .nav { min-height: 54px; }
  .menu-toggle { display: block; }
  .nav-links {
    display: none; position: absolute; top: 63px; left: 10px; right: 10px;
    padding: 18px; flex-direction: column; align-items: stretch; gap: 0;
    background: rgba(7,17,10,.97); border: 1px solid var(--line);
    border-radius: 16px; backdrop-filter: blur(20px);
  }
  .nav-links.open { display: flex; }
  .nav-links a { padding: 13px 8px; }
  .hero { padding: 115px 0 50px; }
  .hero-grid { grid-template-columns: 1fr; gap: 38px; }
  h1 { font-size: clamp(48px, 14vw, 72px); }
  .hero-copy { font-size: 13px; }
  .portrait-card { justify-self: center; max-width: 330px; }
  .portrait-frame { height: 390px; }
  .floating-label { right: -6px; }
  .section { padding: 68px 0; }
  .section-head { display: block; }
  .about-grid, .project-grid { grid-template-columns: 1fr; }
  .about-main { padding: 23px; }
  .stats { gap: 9px; }
  .stat { padding: 17px; }
  .project p { min-height: auto; }
  .meta { gap: 12px; }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    scroll-behavior: auto !important;
    transition-duration: .01ms !important;
  }
  .reveal { opacity: 1; transform: none; }
}
`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));

    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <style>{styles}</style>

      <div className="world" aria-hidden="true">
        <SylvaLivingWorldScene />
      </div>
      <div className="world-shade" />
      <div className="noise" />

      <div className="nav-wrap">
        <nav className="nav">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-icon">V.</span>
            <span>VIKASH.S</span>
          </a>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {[
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Education", "#education"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu}>
                {label}
              </a>
            ))}
            <a
              className="nav-contact"
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              GitHub ↗
            </a>
          </div>
        </nav>
      </div>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">
                <span className="pulse" />
                CSE STUDENT · ASPIRING SOFTWARE DEVELOPER
              </div>
              <h1>
                Hello, I'm
                <span>Vikash S.</span>
              </h1>
              <p className="hero-copy">
                I'm a Computer Science Engineering student at Atria Institute
                of Technology, Bengaluru. I enjoy learning new technologies,
                building web experiences, exploring AI, and turning ideas into
                practical projects.
              </p>
              <div className="actions">
                <a className="btn btn-primary" href="#projects">
                  Explore my work ↘
                </a>
                <a
                  className="btn btn-secondary"
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
                <a className="btn btn-secondary" href="#contact">
                  Contact me →
                </a>
              </div>
              <div className="meta">
                <span>📍 {PROFILE.location}</span>
                <span>🎓 CSE Engineering</span>
                <span>✳ Always learning</span>
              </div>
            </div>

            <div className="portrait-card">
              <div className="portrait-frame">
                <img
                  className="portrait"
                  src={PROFILE.photo}
                  alt="Vikash S."
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    console.error(
                      "Profile image could not load:",
                      PROFILE.photo
                    );
                  }}
                />
                <div className="portrait-caption">
                  <strong>Vikash S.</strong>
                  <small>Computer Science Engineering · Bengaluru</small>
                </div>
              </div>
              <div className="floating-label">✦ Building my future</div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <div className="kicker">01 / About me</div>
                <h2>Curious mind.<br />Builder's mindset.</h2>
              </div>
              <p className="section-intro">
                I'm developing my skills in software engineering by combining
                academic learning with hands-on projects and collaboration.
              </p>
            </div>
            <div className="about-grid reveal">
              <div className="panel about-main">
                <div className="kicker">My journey</div>
                <p>
                  I am a CSE engineering student who enjoys exploring how
                  software solves real problems. My interests include web
                  development, Python, data structures, AI-powered ideas, and
                  building useful applications.
                </p>
                <p>
                  I learn by experimenting, debugging, collaborating through
                  GitHub, and improving projects step by step. My current goal
                  is to strengthen my fundamentals and build a portfolio of
                  projects that demonstrate practical engineering skills.
                </p>
                <a className="project-link" href="#projects">
                  See what I'm building ↗
                </a>
              </div>
              <div className="stats">
                <div className="panel stat">
                  <strong>01</strong>
                  <span>Computer Science Engineering</span>
                </div>
                <div className="panel stat">
                  <strong>AI + Web</strong>
                  <span>Areas I'm exploring</span>
                </div>
                <div className="panel stat">
                  <strong>Build</strong>
                  <span>Learn by creating projects</span>
                </div>
                <div className="panel stat">
                  <strong>Grow</strong>
                  <span>Consistent learning mindset</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <div className="kicker">02 / Technical toolkit</div>
                <h2>Skills I'm growing.</h2>
              </div>
              <p className="section-intro">
                A snapshot of the technologies I have been learning and
                experimenting with. Skill levels are intentionally described
                as learning stages, not certifications.
              </p>
            </div>
            <div className="skill-grid reveal">
              {skills.map((skill, index) => (
                <div className="skill" key={skill.name}>
                  <span className="skill-icon">
                    {["⌘", "Py", "〈〉", "JS", "⚛", "API", "⑂", "▦"][index]}
                  </span>
                  <strong>{skill.name}</strong>
                  <small>{skill.level}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <div className="kicker">03 / Selected work</div>
                <h2>Ideas into projects.</h2>
              </div>
              <p className="section-intro">
                A selection of projects and concepts I have explored. Open the
                links to see my GitHub profile and available source code.
              </p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project reveal" key={project.number}>
                  <div className="project-top">
                    <span className="project-number">
                      / {project.number}
                    </span>
                    <span className="project-category">
                      {project.category}
                    </span>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.featured
                      ? "View BedFlow AI repository ↗"
                      : "Explore GitHub ↗"}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="education">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <div className="kicker">04 / Education</div>
                <h2>The foundation.</h2>
              </div>
            </div>
            <div className="timeline reveal">
              <div className="timeline-line">
                <span className="timeline-dot" />
              </div>
              <div className="panel timeline-card">
                <small>ENGINEERING · CURRENT</small>
                <h3>B.E. Computer Science and Engineering</h3>
                <p>
                  {PROFILE.college}<br />
                  Bengaluru, Karnataka, India
                </p>
                <p>
                  Focus areas: programming fundamentals, data structures,
                  software development, web technologies, and AI exploration.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <div className="panel contact-panel reveal">
              <div className="kicker">05 / Let's connect</div>
              <h2>Have an idea?<br />Let's build something useful.</h2>
              <p>
                I'm interested in learning opportunities, student projects,
                hackathons, collaboration, and connecting with other people
                passionate about technology.
              </p>
              <div className="contact-links">
                <a
                  className="btn btn-primary"
                  href={`mailto:${PROFILE.email}?subject=${encodeURIComponent("Portfolio contact")}`}
                >
                  ✉ Email me
                </a>
                <a
                  className="btn btn-secondary"
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
                <a
                  className="btn btn-secondary"
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>
              </div>
              <p style={{ marginTop: 22 }}>
                {PROFILE.email}
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} VIKASH.S · Built with curiosity.</span>
          <div className="socials">
            <a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={`mailto:${PROFILE.email}`}>Email ↗</a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      </footer>

      {showTop && (
        <button
          className="back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
