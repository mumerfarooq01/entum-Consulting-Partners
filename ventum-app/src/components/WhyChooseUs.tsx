"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerItem } from "./ScrollAnimations";
import styles from "./WhyChooseUs.module.css";

const reasons = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    number: "45+",
    title: "Decades of Trust",
    description:
      "Over 45 years of proven industry experience delivering reliable financial advisory and business consulting services.",
    barWidth: "90%",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    number: "7",
    title: "Full UAE Coverage",
    description:
      "Comprehensive advisory presence across all seven Emirates with international reach extending to global markets.",
    barWidth: "100%",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
    number: "100%",
    title: "Technology-Driven",
    description:
      "Advanced digital platforms and analytics tools powering every advisory engagement for precision and efficiency.",
    barWidth: "100%",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    number: "A+",
    title: "Ethical & Compliant",
    description:
      "Fully UAE-licensed with unwavering commitment to transparency, ethics, and regulatory compliance in every engagement.",
    barWidth: "95%",
  },
];

/* Donut chart segment data for visual flair */
const sectorBreakdown = [
  { label: "Renewable Energy", pct: 30, color: "#c8a961" },
  { label: "Water & Desal", pct: 25, color: "#3b82f6" },
  { label: "Oil, Gas & LNG", pct: 20, color: "#e0c87a" },
  { label: "Telecom Infra", pct: 15, color: "#6b7694" },
  { label: "Waste & Recycling", pct: 10, color: "#a08840" },
];

export default function WhyChooseUs() {
  /* Build cumulative offsets for donut */
  let cumulative = 0;
  const segments = sectorBreakdown.map((s) => {
    const start = cumulative;
    cumulative += s.pct;
    return { ...s, start };
  });

  return (
    <section className={styles.section}>
      <div className={styles.bgDecor} />
      <div className={styles.container}>
        <FadeUp className={styles.header}>
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">
            Built on <span className="gold">Experience</span>,
            <br />
            Driven by <span className="gold">Excellence</span>
          </h2>
          <p className="section-description">
            With over four decades of industry expertise, we bring unmatched
            depth to every advisory engagement — combining seasoned insight with
            modern innovation.
          </p>
        </FadeUp>

        <div className={styles.twoCol}>
          <StaggerContainer className={styles.grid} staggerDelay={0.12}>
            {reasons.map((reason) => (
              <StaggerItem key={reason.title}>
                <div className={styles.card}>
                  <div className={styles.cardTop}>
                    <div className={styles.iconWrapper}>{reason.icon}</div>
                    <div className={styles.number}>{reason.number}</div>
                  </div>
                  <h3 className={styles.cardTitle}>{reason.title}</h3>
                  <p className={styles.cardDesc}>{reason.description}</p>
                  {/* Visual progress bar */}
                  <div className={styles.progressTrack}>
                    <motion.div
                      className={styles.progressFill}
                      initial={{ width: 0 }}
                      whileInView={{ width: reason.barWidth }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                    />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Donut chart visualization */}
          <FadeUp className={styles.chartWrapper}>
            <div className={styles.chartContainer}>
              <svg viewBox="0 0 200 200" className={styles.donut}>
                {segments.map((seg) => {
                  const r = 80;
                  const circumference = 2 * Math.PI * r;
                  const dashLength = (seg.pct / 100) * circumference;
                  const dashOffset = -(seg.start / 100) * circumference;
                  return (
                    <motion.circle
                      key={seg.label}
                      cx="100"
                      cy="100"
                      r={r}
                      fill="none"
                      stroke={seg.color}
                      strokeWidth="18"
                      strokeDasharray={`${dashLength} ${circumference - dashLength}`}
                      strokeDashoffset={dashOffset}
                      strokeLinecap="round"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      style={{ transformOrigin: "center", transform: "rotate(-90deg)" }}
                    />
                  );
                })}
              </svg>
              <div className={styles.chartCenter}>
                <span className={styles.chartCenterValue}>10+</span>
                <span className={styles.chartCenterLabel}>Sectors</span>
              </div>
            </div>
            <h4 className={styles.chartTitle}>Sector Distribution</h4>
            <div className={styles.legend}>
              {sectorBreakdown.map((s) => (
                <div key={s.label} className={styles.legendItem}>
                  <span className={styles.legendDot} style={{ background: s.color }} />
                  <span className={styles.legendLabel}>{s.label}</span>
                  <span className={styles.legendPct}>{s.pct}%</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
