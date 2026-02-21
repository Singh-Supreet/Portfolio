"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/portfolio";
import styles from "./Achievements.module.scss";

const icons = ["🏆", "👨‍💼", "⭐", "💻"];

export default function Achievements() {
  return (
    <section id="achievements" className={styles.achievements}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>
            Achievements &amp; <span>Leadership</span>
          </h2>
          <p>Milestones and recognitions I&apos;m proud of</p>
        </motion.div>

        <div className={styles.list}>
          {achievements.map((achievement, i) => (
            <motion.div
              key={i}
              className={styles.item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <span className={styles.icon}>{icons[i] ?? "🎯"}</span>
              <p>{achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
