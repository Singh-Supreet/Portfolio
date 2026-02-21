"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import styles from "./Skills.module.scss";

const categoryIcons: Record<string, string> = {
  Frontend: "🎨",
  Backend: "⚙️",
  Languages: "💻",
  "Tools & Platforms": "🛠️",
  Concepts: "🧠",
};

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>
            Technical <span>Skills</span>
          </h2>
          <p>Technologies and tools I work with</p>
        </motion.div>

        <div className={styles.grid}>
          {skills.map((category, i) => (
            <motion.div
              key={category.category}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{categoryIcons[category.category] ?? "⚡"}</span>
                <h3>{category.category}</h3>
              </div>
              <div className={styles.chips}>
                {category.skills.map((skill) => (
                  <span key={skill} className={styles.chip}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
