"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "@/data/portfolio";
import styles from "./Experience.module.scss";

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>
            Work <span>Experience</span>
          </h2>
          <p>My professional journey so far</p>
        </motion.div>

        <div className={styles.timeline}>
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              className={styles.item}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              <div className={styles.dot} />
              <div className={styles.card}>
                <button
                  className={styles.cardHeader}
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  aria-expanded={expanded === i}
                >
                  <div className={styles.meta}>
                    <h3 className={styles.role}>{job.role}</h3>
                    <span className={styles.company}>{job.company}</span>
                  </div>
                  <div className={styles.right}>
                    <span className={styles.duration}>{job.duration}</span>
                    <svg
                      className={`${styles.chevron} ${expanded === i ? styles.open : ""}`}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </button>

                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={styles.body}
                    >
                      <div className={styles.techStack}>
                        {job.techStack.map((tech) => (
                          <span key={tech} className={styles.tech}>
                            {tech}
                          </span>
                        ))}
                      </div>
                      <ul className={styles.bullets}>
                        {job.bullets.map((b, bi) => (
                          <li key={bi}>{b}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
