"use client";

import React from "react";
import { FadeUp, SlideLeft, SlideRight } from "./ScrollAnimations";
import styles from "./AboutSection.module.css";

const stats = [
  { number: "7", label: "Emirates", desc: "Full UAE Coverage" },
  { number: "16+", label: "Services", desc: "Advisory Domains" },
  { number: "100%", label: "Compliant", desc: "UAE Regulations" },
  { number: "24/7", label: "Support", desc: "Digital Advisory" },
];

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <SlideLeft className={styles.left}>
            <span className="section-label">About Us</span>
            <h2 className="section-title">
              UAE-Based Advisory.
              <br />
              <span className="gold">Global Reach.</span>
            </h2>
            <p className="section-description">
              Ventum Consulting Partners is a UAE-licensed professional firm
              providing financial advisory and business consultancy services.
              Operating from the United Arab Emirates, we deliver
              technology-driven, compliant, and globally aligned advisory
              solutions to clients across all Emirates and internationally.
            </p>
            <p className={styles.secondPara}>
              Our advisory services are designed to support informed financial
              decision-making, operational efficiency, and sustainable business
              growth for SMEs, corporates, and entrepreneurs.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <span>Non-regulated advisory services</span>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <span>On-site, remote & digital models</span>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <span>Transparent & ethical practices</span>
              </div>
            </div>
          </SlideLeft>

          <SlideRight className={styles.right}>
            <div className={styles.statsGrid}>
              {stats.map((stat, i) => (
                <FadeUp key={stat.label} delay={i * 0.1}>
                  <div className={styles.statCard}>
                    <span className={styles.statNumber}>{stat.number}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                    <span className={styles.statDesc}>{stat.desc}</span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </SlideRight>
        </div>
      </div>

      {/* Decorative element */}
      <div className={styles.bgAccent} />
    </section>
  );
}
