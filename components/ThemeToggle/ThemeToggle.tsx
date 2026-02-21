"use client";

import { useTheme } from "@/context/ThemeContext";
import styles from "./ThemeToggle.module.scss";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <div className={`${styles.track} ${theme === "light" ? styles.light : ""}`}>
        <span className={styles.icon}>{theme === "dark" ? "🌙" : "☀️"}</span>
        <div className={styles.thumb} />
      </div>
    </button>
  );
}
