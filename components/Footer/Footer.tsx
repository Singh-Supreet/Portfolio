import { personalInfo } from "@/data/portfolio";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.name}>{personalInfo.name}</p>
        <p className={styles.copy}>
          © {new Date().getFullYear()} · Built with Next.js &amp; TypeScript
        </p>
        <div className={styles.links}>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${personalInfo.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
