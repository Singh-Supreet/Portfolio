"use client";

import { motion } from "framer-motion";
import { education } from "@/data/portfolio";
import styles from "./Education.module.scss";

export default function Education() {
  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>
            <span>Education</span>
          </h2>
          <p>My academic background</p>
        </motion.div>

        <div className={styles.list}>
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              className={styles.card}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className={styles.icon}>🎓</div>
              <div className={styles.info}>
                <h3>{edu.institution}</h3>
                <p className={styles.degree}>{edu.degree}</p>
                <div className={styles.meta}>
                  <span className={styles.duration}>{edu.duration}</span>
                  {edu.grade && (
                    <span className={styles.grade}>{edu.grade}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
