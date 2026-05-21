"use client";

import { useEffect, useRef, useState } from "react";
import ParticleField from "./ParticleField";

const links = [
  { label: "GitHub", href: "https://github.com/sannman" },
  { label: "Instagram", href: "https://instagram.com/sannman.ai" },
  { label: "LinkedIn", href: "https://linkedin.com/in/sannman" },
];

function PythonIcon() {
  return <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="16 16 32 32"><path fill="url(#python-a)" d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454a1.394 1.394 0 1 1 0 2.79 1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"/><path fill="url(#python-b)" d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395 1.394 1.394 0 1 1 1.395 1.395z"/><defs><linearGradient id="python-a" x1="19.075" x2="34.898" y1="18.782" y2="34.658" gradientUnits="userSpaceOnUse"><stop stopColor="#387EB8"/><stop offset="1" stopColor="#366994"/></linearGradient><linearGradient id="python-b" x1="28.809" x2="45.803" y1="28.882" y2="45.163" gradientUnits="userSpaceOnUse"><stop stopColor="#FFE052"/><stop offset="1" stopColor="#FFC331"/></linearGradient></defs></svg>;
}

function TSIcon() {
  return <svg width="14" height="14" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z" fill="#3178C6"/><path d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z" fill="#FFF"/></svg>;
}

function GitBrandIcon() {
  return <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33" fill="#DE4C36"/></svg>;
}

function CppIcon() {
  return <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 288"><path fill="#649AD2" d="M255.987 84.59c-.002-4.837-1.037-9.112-3.13-12.781-2.054-3.608-5.133-6.632-9.261-9.023-34.08-19.651-68.195-39.242-102.264-58.913-9.185-5.303-18.09-5.11-27.208.27-13.565 8-81.48 46.91-101.719 58.632C4.071 67.6.015 74.984.013 84.58 0 124.101.013 163.62 0 203.141c0 4.73.993 8.923 2.993 12.537 2.056 3.717 5.177 6.824 9.401 9.269 20.24 11.722 88.164 50.63 101.726 58.631 9.121 5.382 18.027 5.575 27.215.27 34.07-19.672 68.186-39.262 102.272-58.913 4.224-2.444 7.345-5.553 9.401-9.267 1.997-3.614 2.992-7.806 2.992-12.539 0 0 0-79.018-.013-118.539"/><path fill="#004482" d="m128.392 143.476-125.4 72.202c2.057 3.717 5.178 6.824 9.402 9.269 20.24 11.722 88.164 50.63 101.726 58.631 9.121 5.382 18.027 5.575 27.215.27 34.07-19.672 68.186-39.262 102.272-58.913 4.224-2.444 7.345-5.553 9.401-9.267l-124.616-72.192"/><path fill="#1A4674" d="M91.25 164.863c7.297 12.738 21.014 21.33 36.75 21.33 15.833 0 29.628-8.7 36.888-21.576l-36.496-21.141-37.142 21.387"/><path fill="#01589C" d="M255.987 84.59c-.002-4.837-1.037-9.112-3.13-12.781l-124.465 71.667 124.616 72.192c1.997-3.614 2.99-7.806 2.992-12.539 0 0 0-79.018-.013-118.539"/><path fill="#FFF" d="M249.135 148.636h-9.738v9.74h-9.74v-9.74h-9.737V138.9h9.737v-9.738h9.74v9.738h9.738v9.737ZM128 58.847c31.135 0 58.358 16.74 73.17 41.709l.444.759-37.001 21.307c-7.333-12.609-20.978-21.094-36.613-21.094-23.38 0-42.333 18.953-42.333 42.332a42.13 42.13 0 0 0 5.583 21.003c7.297 12.738 21.014 21.33 36.75 21.33 15.659 0 29.325-8.51 36.647-21.153l.241-.423 36.947 21.406c-14.65 25.597-42.228 42.851-73.835 42.851-31.549 0-59.084-17.185-73.754-42.707-7.162-12.459-11.26-26.904-11.26-42.307 0-46.95 38.061-85.013 85.014-85.013Zm75.865 70.314v9.738h9.737v9.737h-9.737v9.74h-9.738v-9.74h-9.738V138.9h9.738v-9.738h9.738Z"/></svg>;
}

const techStack = [
  { label: "Python", coursework: false, icon: <PythonIcon /> },
  { label: "JavaScript / TypeScript", coursework: false, icon: <TSIcon /> },
  { label: "Git / GitHub", coursework: false, icon: <GitBrandIcon /> },
  { label: "C / C++", coursework: true, icon: <CppIcon /> },
];

const education = [
  {
    institution: "Dr. Homi Bhabha State University, Mumbai",
    degree: "Bachelor of Science (Hons), Artificial Intelligence and Machine Learning",
    period: "Jun 2025 – 2029",
    grade: "CGPA: 8.59",
  },
  {
    institution: "Elphinstone College",
    degree: "Higher Secondary High School Diploma, Science (Electronics and Mathematics)",
    period: "Aug 2023 – Mar 2025",
    grade: "47.67 / C2",
  },
  {
    institution: "Changu Kana Thakur School",
    degree: "Secondary School Diploma",
    period: "May 2018 – Apr 2023",
    grade: "71.60 / B1",
  },
];

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mumbaiTime, setMumbaiTime] = useState("");

  useEffect(() => {
    // Prevent the browser from restoring previous scroll position (which can cause a 2-5px top offset on reload)
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    const initial = saved || "dark";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--mouse-x", `${x}%`);
      card.style.setProperty("--mouse-y", `${y}%`);
    };

    card.addEventListener("mousemove", handleMouseMove);
    return () => card.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      setMumbaiTime(
        new Date().toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="scrollProgress" style={{ width: `${scrollProgress}%` }} />
      <button
        className="themeToggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>
      <ParticleField />
      <main>
        {/* ── Hero ── */}
        <section className="hero" id="top">
          <div className="heroInner">
            <div className="terminalLine">
              <span className="prompt">~ $</span>
              <span className="command">whoami</span>
              <span className="cursor" />
            </div>

            <h1>
              Hi, I&apos;m <span className="nameGradient">Sannman</span>.
            </h1>

            <p className="lead">
              BSc AIML sophomore at Elphinstone College, HBSU. I build
              practical tools at the intersection of machine learning and
              finance.
            </p>

            <div className="actions">
              {links.map((link) => (
                <a className="button" href={link.href} key={link.label} target="_blank" rel="noopener noreferrer">
                  {link.label} ↗
                </a>
              ))}
            </div>

            <div className="statsBar">
              <div className="stat">
                <span className="statLabel">Education</span>
                <span className="statValue">Elphinstone College, HBSU</span>
              </div>
              <div className="stat">
                <span className="statLabel">Focus</span>
                <span className="statValue">AI/ML · Finance</span>
              </div>
              <div className="stat">
                <span className="statLabel">Location</span>
                <span className="statValue">Mumbai · {mumbaiTime || "--:--"} IST</span>
              </div>
              <div className="stat">
                <span className="statLabel">Status</span>
                <span className="statValue">
                  <span className="statusDot" />
                  Open to collaborate
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section className="about reveal" id="about">
          <div className="sectionLabel">About</div>
          <p className="aboutStatement">
            Figuring things out — one project at a time.
          </p>
        </section>

        {/* ── Education + Tech Stack (side by side) ── */}
        <div className="contentRow reveal">
          <div>
            <div className="sectionLabel">Education</div>
            <div className="timeline">
              {education.map((edu) => (
                <div className="timelineEntry" key={edu.institution}>
                  <div className="timelineDot" />
                  <div className="timelineContent">
                    <div className="timelineHeader">
                      <strong>{edu.institution}</strong>
                      <span className="timelinePeriod">{edu.period}</span>
                    </div>
                    <p className="timelineDegree">{edu.degree}</p>
                    {edu.grade && <span className="timelineGrade">{edu.grade}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="sectionLabel">Tech Stack</div>
            <div className="techGrid">
              {techStack.map((tech) => (
                <span className={tech.coursework ? "badge badgeCoursework" : "badge"} key={tech.label}>
                  {tech.icon}
                  {tech.label}
                </span>
              ))}
            </div>
            <p className="techNote">* coursework level</p>
          </div>
        </div>

        {/* ── Featured Project ── */}
        <section className="techSection reveal" id="work">
          <div className="sectionLabel">Featured Project</div>

          <a
            ref={cardRef}
            className="projectCard"
            href="https://github.com/sannman/Yfin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="featuredBadge">Open Source</span>
            <h2>Yfin</h2>
            <p>
              Building a scalable stock data pipeline using Yahoo Finance,
              PostgreSQL, and Python for technical analysis and
              experimentation.
            </p>
            <div className="projectTags">
              <span className="projectTag">Python</span>
              <span className="projectTag">PostgreSQL</span>
              <span className="projectTag">Yahoo Finance</span>
            </div>
            <span className="projectLink">View on GitHub →</span>
          </a>
        </section>

        {/* ── Footer ── */}
        <footer className="footer reveal" aria-label="Connect">
          <div>
            <span className="footerLabel">Connect</span>
            <p>Open to collaborations, feedback, and serious project ideas.</p>
          </div>
          <div className="footerLinks">
            {links.map((link) => (
              <a href={link.href} key={link.label} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </footer>
      </main>
    </>
  );
}
