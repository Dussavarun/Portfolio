import styles from "./Education.module.css";

const education = [
  {
    degree: "B.Tech, Computer Science and Engineering",
    institution: "CMR Technical Campus",
    period: "Sep 2023 – Sep 2027",
    gpa: "9.15 GPA",
    current: true,
  },
  {
    degree: "Intermediate, MPC",
    institution: "Trinity Junior College",
    period: "Jun 2021 – Jun 2023",
    gpa: "9.81 GPA",
    current: false,
  },
];

const certifications = [
  {
    title: "AWS Certified Solutions Architect — Associate",
    issuer: "Amazon Web Services",
    date: "Jan 2025",
  },
  {
    title: "Salesforce Certified Agentforce Specialist",
    issuer: "Salesforce",
    date: "Dec 2025",
  },
];

const achievements = [
  {
    title: "HackFusion-2K26 — 6th Place",
    detail: "Ranked 6th among 350 teams at an international 2-day hackathon organized by JNTUH × Brain O Vision.",
    date: "Apr 2026",
  },
  {
    title: "Woxsen National Olympiad — Finalist",
    detail: "Qualified as a national-level finalist, demonstrating strong analytical and problem-solving skills.",
    date: "Jan 2026",
  },
  {
    title: "LeetCode — 300+ Problems Solved",
    detail: "Solved 300+ DSA problems in C++, covering arrays, graphs, and dynamic programming.",
    date: "Ongoing",
  },
];

export default function Education() {
  return (
    <section>
      <h2 className={styles.heading}>Education</h2>

      <div className={styles.eduList}>
        {education.map((edu, i) => (
          <div key={i} className={styles.eduCard}>
            <div className={styles.eduLeft}>
              <h3 className={styles.degree}>{edu.degree}</h3>
              <span className={styles.institution}>{edu.institution}</span>
            </div>
            <div className={styles.eduRight}>
              {edu.current && <span className={styles.currentBadge}>Current</span>}
              <span className={styles.period}>{edu.period}</span>
              <span className={styles.gpa}>{edu.gpa}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.subSection}>
        <h3 className={styles.subHeading}>Certifications</h3>
        <div className={styles.certList}>
          {certifications.map((cert, i) => (
            <div key={i} className={styles.certCard}>
              <div className={styles.certLeft}>
                <span className={styles.certTitle}>{cert.title}</span>
                <span className={styles.certIssuer}>{cert.issuer}</span>
              </div>
              <span className={styles.certDate}>{cert.date}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.subSection}>
        <h3 className={styles.subHeading}>Achievements</h3>
        <div className={styles.achieveList}>
          {achievements.map((ach, i) => (
            <div key={i} className={styles.achieveCard}>
              <div className={styles.achieveHeader}>
                <span className={styles.achieveTitle}>{ach.title}</span>
                <span className={styles.achieveDate}>{ach.date}</span>
              </div>
              <p className={styles.achieveDetail}>{ach.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}