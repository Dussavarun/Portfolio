"use client";

import { useEffect, useRef } from "react";
import styles from "./Experience.module.css";

const experiences = [
  {
    roleHighlight: "AI/ML Engineer",
    company: "Infosys Springboard",
    companyUrl: "https://infosysbpm.com",
    period: "Feb 2026 – Apr 2026",
    location: "Remote, India",
    number: "01",
    summary:
      "Built a production-grade real-time PPE compliance detection system using YOLOv8 with live monitoring, containerized deployment, and structured analytics.",
    bullets: [
      "Engineered a production-grade real-time PPE compliance detection system using YOLOv8, achieving 91% accuracy at 25–30 FPS with ~5 ms inference latency.",
      "Built an end-to-end inference pipeline with a Grafana dashboard, enabling live monitoring, alerting, and operational insights across video streams.",
      "Containerized the full system using Docker, ensuring consistent deployment across environments and reducing setup overhead.",
      "Integrated PostgreSQL for structured event logging and analytics, supporting long-term safety trend analysis and audit trails.",
    ],
    stack: ["Python", "YOLOv8", "PyTorch", "OpenCV", "React.js", "Docker", "PostgreSQL", "Grafana"],
  },
  {
    roleHighlight: "Web Development Trainer Intern",
    company: "Tech Nirman",
    companyUrl: "https://technirman.com",
    period: "Aug 2025 – Sep 2025",
    location: "Hyderabad, India",
    number: "02",
    summary:
      "Trained 30+ students in modern front-end development, covering React, Tailwind CSS, and JavaScript fundamentals through hands-on sessions.",
    bullets: [
      "Mentored 30+ students in modern React-based application development, emphasizing component architecture and state management.",
      "Guided students in building responsive UIs using Tailwind CSS and modular component design principles.",
      "Conducted hands-on sessions on DOM manipulation, JavaScript fundamentals, and real-world project structuring.",
    ],
    stack: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
];

const STICKY_TOP = 100;
const CARD_OFFSET = 24;

export default function Experience() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((card) => {
      if (!card) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) {
            card.style.transform = "scale(0.97)";
            card.style.opacity = "0.8";
          } else {
            card.style.transform = "scale(1)";
            card.style.opacity = "1";
          }
        },
        { threshold: 0.12 }
      );
      observer.observe(card);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className={styles.section}>
      {/* Section label pill */}
      <div className={styles.sectionLabel}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2"/>
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        </svg>
        Professional Experience
      </div>

      <h2 className={styles.heading}>Work Experience</h2>
      <p className={styles.subheading}>Building impactful solutions that transform industries</p>

      {/* Sticky stack */}
      <div className={styles.stackContainer}>
        {experiences.map((exp, i) => (
          <div
            key={i}
            className={styles.stickyWrapper}
            style={{ top: STICKY_TOP + i * CARD_OFFSET, zIndex: i + 1 }}
          >
            <div
              ref={(el) => { cardRefs.current[i] = el; }}
              className={styles.card}
            >
              {/* Card header */}
              <div className={styles.cardHeader}>
                <div className={styles.headerLeft}>
                  <div className={styles.companyIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                  </div>
                  <div>
                    <div className={styles.companyRow}>
                      <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className={styles.company}>
                        {exp.company}
                      </a>
                      <span className={styles.cardNumber}>{exp.number}</span>
                    </div>
                    <p className={styles.role}>{exp.roleHighlight}</p>
                  </div>
                </div>

                <div className={styles.headerRight}>
                  <span className={styles.period}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {exp.period}
                  </span>
                  <span className={styles.location}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className={styles.summary}>{exp.summary}</p>

              {/* Key Responsibilities */}
              <div className={styles.sectionSubHeader}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
                <span>Key Responsibilities</span>
              </div>
              <ul className={styles.bullets}>
                {exp.bullets.map((b, j) => (
                  <li key={j}>
                    <span className={styles.bulletDot} />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className={styles.sectionSubHeader}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
                <span>Technologies Used</span>
              </div>
              <div className={styles.stack}>
                {exp.stack.map((s) => (
                  <span key={s} className={styles.tag}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
