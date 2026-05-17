"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Resume Builder",
    description:
      "Production full-stack resume builder adopted by 100+ users, delivering ATS-optimized PDF exports with real-time preview. Reduced resume creation time by ~80% through automated PDF generation, eliminating manual formatting entirely.",
    stack: ["Next.js", "React", "Redux Toolkit", "Tailwind CSS", "@react-pdf/renderer"],
    liveUrl: "https://resume-b-ohkj.vercel.app/",
    githubUrl: "https://github.com/Dussavarun/ResumeB",
    image: "/resume.png",
    number: "01",
  },
  {
    title: "Jharkhand Journeys",
    description:
      "AI-powered itinerary generator producing personalized travel plans based on user budget, preferences, and travel duration. Built for Smart India Hackathon 2025 with real-time location-based recommendations and multilingual support.",
    stack: ["Next.js", "React", "Redux", "Tailwind CSS", "REST APIs", "Gemini API"],
    liveUrl: "https://sih-25032-b254-git-main-varuns-projects-db19878b.vercel.app/",
    githubUrl: "https://github.com/Dussavarun/Jharkhand-Journeys.sih",
    image: "/jh2.png",
    number: "02",
  },
  {
    title: "SafetyEye — PPE Detector",
    description:
      "Real-time PPE compliance detection system using YOLOv8, achieving 91% accuracy at 25–30 FPS. Includes a Grafana dashboard for live monitoring, alerting, and operational insights across video streams.",
    stack: ["Python", "YOLOv8", "PyTorch", "OpenCV", "Docker", "PostgreSQL", "Grafana"],
    liveUrl: null,
    githubUrl: "https://github.com/Dussavarun/Safety-Eye-Infy-Springboard",
    image: "/safetyeye.png",
    number: "03",
  },
];

/* sticky top offset per card so they stack visually */
const STICKY_TOP = 100; // px — navbar height + breathing room
const CARD_OFFSET = 24; // px — each card peeks this much below the previous

export default function Projects() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* Scale down cards that are "buried" under newer ones */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) {
            /* card has scrolled past — scale it down slightly */
            card.style.transform = `scale(0.97)`;
            card.style.opacity = "0.85";
          } else {
            card.style.transform = "scale(1)";
            card.style.opacity = "1";
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(card);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={styles.sectionHeader}>
        <h2 className={styles.heading}>Featured Projects</h2>
        <p className={styles.subheading}>
          Showcasing my most ambitious full-stack and AI applications.
        </p>
      </div>

      {/* Sticky stack container */}
      <div className={styles.stackContainer}>
        {projects.map((project, i) => (
          <div
            key={i}
            className={styles.stickyWrapper}
            style={{ top: STICKY_TOP + i * CARD_OFFSET }}
          >
            <div
              ref={(el) => { cardRefs.current[i] = el; }}
              className={styles.card}
            >
              {/* Left — text content */}
              <div className={styles.cardContent}>
                <div className={styles.cardMeta}>
                  <span className={styles.cardNumber}>{project.number}</span>
                  <div className={styles.cardLinks}>
                    {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconLink}
                      aria-label="Live site"
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconLink}
                      aria-label="GitHub"
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.stack}>
                  {project.stack.map((s) => (
                    <span key={s} className={styles.tag}>{s}</span>
                  ))}
                </div>
              </div>

              {/* Right — project image */}
              <div className={styles.cardImage}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.img}
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
