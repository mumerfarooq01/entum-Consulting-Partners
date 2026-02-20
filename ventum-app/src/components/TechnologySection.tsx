"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerItem } from "./ScrollAnimations";
import styles from "./TechnologySection.module.css";

const features = [
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M3 3v18h18" />
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
      </svg>
    ),
    title: "Financial Analytics & Reporting",
    description:
      "Advanced analytics dashboards delivering real-time financial insights and comprehensive reporting.",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="2" x2="9" y2="4" />
        <line x1="15" y1="2" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="22" />
        <line x1="15" y1="20" x2="15" y2="22" />
        <line x1="20" y1="9" x2="22" y2="9" />
        <line x1="20" y1="15" x2="22" y2="15" />
        <line x1="2" y1="9" x2="4" y2="9" />
        <line x1="2" y1="15" x2="4" y2="15" />
      </svg>
    ),
    title: "Digital Budgeting Models",
    description:
      "AI-powered digital budgeting and forecasting models with predictive analytics capabilities.",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "KPI Performance Monitoring",
    description:
      "Real-time KPI-based financial performance monitoring with automated alerts and benchmarking.",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    title: "Process Automation",
    description:
      "Finance process optimization and automation advisory for enhanced operational efficiency.",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Secure Data Handling",
    description:
      "Enterprise-grade digital data handling with advanced confidentiality and security protocols.",
  },
];

export default function TechnologySection() {
  return (
    <section id="technology" className={styles.section}>
      {/* Background decorative grid */}
      <div className={styles.bgGrid}>
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className={styles.bgDot}
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
          />
        ))}
      </div>

      <div className={styles.container}>
        <FadeUp className={styles.header}>
          <span className="section-label">Technology</span>
          <h2 className="section-title">
            Smart Financial Decisions,
            <br />
            <span className="gold">Powered by Data</span>
          </h2>
          <p className="section-description">
            We leverage advanced financial tools and digital platforms to
            enhance advisory outcomes with precision, speed, and security.
          </p>
        </FadeUp>

        <StaggerContainer className={styles.grid} staggerDelay={0.12}>
          {features.map((feature, index) => (
            <StaggerItem key={feature.title}>
              <div className={styles.featureCard}>
                <div className={styles.featureNumber}>0{index + 1}</div>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
