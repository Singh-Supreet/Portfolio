"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import type { ContactFormData } from "@/types";
import styles from "./Contact.module.scss";

const initialForm: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setForm(initialForm);
      } else {
        throw new Error(data.error ?? "Something went wrong");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send message");
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>
            Get In <span>Touch</span>
          </h2>
          <p>Have a project in mind or just want to say hi?</p>
        </motion.div>

        <div className={styles.content}>
          {/* Left: Info */}
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Let&apos;s work together</h3>
            <p>
              I&apos;m currently open to freelance, full-time, and collaborative
              opportunities. Whether you have a question or just want to say hi,
              I&apos;ll try my best to get back to you!
            </p>

            <div className={styles.contactItems}>
              <a href={`mailto:${personalInfo.email}`} className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span>
                <div>
                  <span className={styles.contactLabel}>Email</span>
                  <span className={styles.contactValue}>{personalInfo.email}</span>
                </div>
              </a>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <div>
                  <span className={styles.contactLabel}>Phone</span>
                  <span className={styles.contactValue}>{personalInfo.phone}</span>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <div>
                  <span className={styles.contactLabel}>Location</span>
                  <span className={styles.contactValue}>Delhi, India</span>
                </div>
              </div>
            </div>

            <div className={styles.socials}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
              >
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="name">Name *</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  disabled={status === "loading"}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  disabled={status === "loading"}
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="subject">Subject *</label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
                disabled={status === "loading"}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or just say hi..."
                rows={5}
                required
                disabled={status === "loading"}
              />
            </div>

            {status === "success" && (
              <div className={styles.success}>
                ✅ Message sent! I&apos;ll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className={styles.error}>❌ {errorMsg}</div>
            )}

            <button
              type="submit"
              className={styles.submit}
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <span className={styles.spinner} />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
