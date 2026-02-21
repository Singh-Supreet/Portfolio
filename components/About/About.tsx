"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import styles from "./About.module.scss";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "500+", label: "DSA Problems" },
  { value: "15+", label: "UI Components Built" },
  { value: "25%", label: "Load Time Reduction" },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>
            About <span>Me</span>
          </h2>
          <p>Turning ideas into digital experiences</p>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.text}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p>{personalInfo.about}</p>
            <p className={styles.location}>
              📍 Delhi, India &nbsp;·&nbsp; 🎓 NIT Delhi &nbsp;·&nbsp; 💼 Open to opportunities
            </p>
            <div className={styles.links}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkBtn}
              >
                GitHub Profile
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkBtn}
              >
                LinkedIn Profile
              </a>
            </div>
          </motion.div>

          <motion.div
            className={styles.stats}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
