"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

/* ── Skill data with brand colors ── */
const frontendSkills = [
  { name: "Next.js",     slug: "nextdotjs",   color: "000000" },
  { name: "React",       slug: "react",        color: "61DAFB" },
  { name: "TypeScript",  slug: "typescript",   color: "3178C6" },
  { name: "JavaScript",  slug: "javascript",   color: "F7DF1E" },
];

const backendSkills = [
  { name: "FastAPI",     slug: "fastapi",      color: "009688" },
  { name: "Node.js",     slug: "nodedotjs",    color: "5FA04E" },
  { name: "Python",      slug: "python",       color: "3776AB" },
  { name: "PostgreSQL",  slug: "postgresql",   color: "4169E1" },
  { name: "MongoDB",     slug: "mongodb",      color: "47A248" },
  { name: "Redis",       slug: "redis",        color: "FF4438" },
  { name: "Docker",      slug: "docker",       color: "2496ED" },
  { name: "GCP",         slug: "googlecloud",  color: "4285F4" },
  { name: "AWS",         slug: "amazonaws",    color: "232F3E" },
];

const aiSkills = [
  { name: "PyTorch",     slug: "pytorch",      color: "EE4C2C" },
  { name: "OpenCV",      slug: "opencv",       color: "5C3EE8" },
  { name: "YOLOv8",      slug: null,           color: null },
  { name: "RAG",         slug: null,           color: null },
  { name: "LangChain",   slug: "langchain",    color: "1C3C3C" },
];

/* ── Social links ── */
const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Dussavarun",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/varun-dussa-45385928b/",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/Dussavarun/",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
  {
    label: "Resume",
    href: "https://resume-b-ohkj.vercel.app/",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
];

/* ── Live clock ── */
function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return <>{time}</>;
}

/* ── Skill badge — uses brand color via simpleicons color param ── */
function SkillBadge({
  name,
  slug,
  color,
}: {
  name: string;
  slug: string | null;
  color: string | null;
}) {
  return (
    <span className={styles.badge}>
      {slug && color ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://cdn.simpleicons.org/${slug}/${color}`}
          alt=""
          width={15}
          height={15}
          className={styles.badgeIcon}
        />
      ) : (
        <span className={styles.badgeIconText}>›_</span>
      )}
      {name}
    </span>
  );
}

/* ── Avatar with fallback ── */
function Avatar() {
  const [err, setErr] = useState(false);
  return err ? (
    <div className={styles.avatarFallback}>
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.35">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    </div>
  ) : (
    <Image
      src="/profile.png"
      alt="Varun Dussa"
      width={110}
      height={110}
      className={styles.avatar}
      priority
      onError={() => setErr(true)}
    />
  );
}

/* ── Hero ── */
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid}>
        {/* ════ LEFT COLUMN ════ */}
        <div className={styles.leftCol}>
          {/* About card */}
          <div className={styles.card}>
            <div className={styles.avatarWrap}>
              <Avatar />
            </div>

            <h2 className={styles.aboutHeading}>About me.</h2>
            <p className={styles.aboutText}>
              I build production-ready <strong>web</strong> and{" "}
              <strong>AI</strong> applications using{" "}
              <strong>TypeScript</strong>, <strong>React</strong>,{" "}
              <strong>Next.js</strong>, <strong>Node.js</strong>,{" "}
              <strong>FastAPI</strong>, Computer Vision — focused on clean UX
              and real user impact.
            </p>
            <a href="mailto:varundussa@gmail.com" className={styles.connectBtn}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Let&apos;s Connect
            </a>
          </div>

          {/* Bottom row: location + socials */}
          <div className={styles.bottomRow}>
            {/* Location / clock card */}
            <div className={`${styles.card} ${styles.locationCard}`}>
              <svg
                className={styles.locationIcon}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p className={styles.locationName}>India</p>
              <p className={styles.clockText}>
                <LiveClock />
                <span className={styles.tz}> (Asia/Kolkata)</span>
              </p>
            </div>

            {/* Social grid card */}
            <div className={`${styles.card} ${styles.socialCard}`}>
              <div className={styles.socialGrid}>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialItem}
                  >
                    <span className={styles.socialIcon}>{s.icon}</span>
                    <span className={styles.socialLabel}>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ════ RIGHT COLUMN — Skills ════ */}
        <div className={`${styles.card} ${styles.skillsCard}`}>
          <div className={styles.skillsHeader}>
            <span className={styles.skillsHeaderIcon}>›_</span>
            <span className={styles.skillsTitle}>Skills &amp; Stack</span>
          </div>

          <div className={styles.skillGroup}>
            <p className={styles.groupLabel}>Frontend</p>
            <div className={styles.badgeRow}>
              {frontendSkills.map((s) => (
                <SkillBadge key={s.name} {...s} />
              ))}
            </div>
          </div>

          <div className={styles.skillGroup}>
            <p className={styles.groupLabel}>Backend</p>
            <div className={styles.badgeRow}>
              {backendSkills.map((s) => (
                <SkillBadge key={s.name} {...s} />
              ))}
            </div>
          </div>

          <div className={styles.skillGroup}>
            <p className={styles.groupLabel}>AI &amp; CV</p>
            <div className={styles.badgeRow}>
              {aiSkills.map((s) => (
                <SkillBadge key={s.name} {...s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
