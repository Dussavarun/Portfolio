"use client";

import { useTheme } from "@/context/ThemeContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        {/* Left: big title */}
        <h1 className={styles.title}>
          Hi, I&apos;m <span className={styles.name}>Varun</span>{" "}
          <span className={styles.role}>— Software Engineer.</span>
        </h1>

        {/* Right: availability + theme toggle */}
        <div className={styles.right}>
          <span className={styles.availability}>
            <span className={styles.dot} />
            Available for freelance
          </span>
          <button
            className={styles.toggle}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
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
            ) : (
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
