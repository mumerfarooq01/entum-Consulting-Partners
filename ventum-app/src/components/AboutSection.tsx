"use client";

import React from "react";
import { FadeUp, SlideLeft, SlideRight } from "./ScrollAnimations";
import styles from "./AboutSection.module.css";

const stats = [
  { number: "45+", label: "Years", desc: "Combined regional experience" },
  { number: "Multi", label: "Sectors", desc: "Infrastructure & energy" },
  { number: "Global", label: "Network", desc: "DFIs, ECAs & partners" },
  {
    number: "Full",
    label: "Lifecycle",
    desc: "Concept to financial close",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <SlideLeft className={styles.left}>
            <span className="section-label">About Us</span>
            <h2 className="section-title">
              Infrastructure, Energy
              <br />
              <span className="gold">&amp; Sustainability</span>
            </h2>
            <p className="section-description">
              We are an international consulting and project development advisory
              firm specializing in infrastructure, energy, and sustainability
              projects. Ventum Consulting Partners combines deep financial
              advisory expertise with hands-on project development experience,
              supporting clients in delivering complex infrastructure investments
              across emerging and developed markets. With over 45 years of
              combined regional experience, we provide strategic advisory
              services to governments, infrastructure developers, investment
              funds, corporate sponsors, and technology providers.
            </p>
            <p className={styles.secondPara}>
              <strong>Leadership.</strong> Our leadership team brings decades of
              experience in infrastructure development, project finance, and
              international investment advisory. The team has worked on
              large-scale infrastructure projects involving renewable energy,
              water security, telecom infrastructure, oil and gas assets, and
              environmental infrastructure across multiple regions. We work
              closely with governments, financial institutions, EPC contractors,
              and investors to transform strategic infrastructure concepts into
              bankable and investable projects.
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
                <span>Project development &amp; bankability</span>
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
                <span>PPP, concessions &amp; commercial structuring</span>
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
                <span>International financing &amp; ECAs</span>
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
