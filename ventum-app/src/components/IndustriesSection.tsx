"use client";

import React from "react";
import Image from "next/image";
import { FadeUp, StaggerContainer, StaggerItem } from "./ScrollAnimations";
import styles from "./IndustriesSection.module.css";

const industries = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Real Estate & Construction",
    description: "Property development, infrastructure, and urban planning advisory",
    gradient: "linear-gradient(135deg, #1a3a4a, #0d2030)",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Banking & Finance",
    description: "Financial institutions, investment firms, and fintech companies",
    gradient: "linear-gradient(135deg, #2a1f3a, #1a1230)",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    title: "Government & Public Sector",
    description: "Government entities, public institutions, and regulatory bodies",
    gradient: "linear-gradient(135deg, #1a2a3a, #0d1520)",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Oil, Gas & Energy",
    description: "Energy companies, petrochemical firms, and renewable energy ventures",
    gradient: "linear-gradient(135deg, #3a2a1a, #201810)",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Healthcare & Pharma",
    description: "Hospitals, clinics, pharmaceutical companies, and health-tech startups",
    gradient: "linear-gradient(135deg, #1a3a2a, #0d2015)",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "Retail & FMCG",
    description: "Consumer goods, retail chains, e-commerce, and distribution networks",
    gradient: "linear-gradient(135deg, #2a2a3a, #151520)",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    title: "Manufacturing & Industrial",
    description: "Manufacturing plants, industrial operations, and supply chain enterprises",
    gradient: "linear-gradient(135deg, #2a3a2a, #152015)",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "Education & Training",
    description: "Educational institutions, training providers, and ed-tech organizations",
    gradient: "linear-gradient(135deg, #1a2a4a, #0d1530)",
  },
];

export default function IndustriesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeUp className={styles.header}>
          <span className="section-label">Industries</span>
          <h2 className="section-title">
            Sectors We
            <br />
            <span className="gold">Serve</span>
          </h2>
          <p className="section-description">
            Our advisory expertise spans across diverse industries, delivering
            tailored solutions that address sector-specific challenges and
            opportunities.
          </p>
        </FadeUp>

        <StaggerContainer className={styles.grid} staggerDelay={0.08}>
          {industries.map((industry) => (
            <StaggerItem key={industry.title}>
              <div className={styles.card} style={{ background: industry.gradient }}>
                <div className={styles.cardGlow} />
                <div className={styles.cardIcon}>{industry.icon}</div>
                <h3 className={styles.cardTitle}>{industry.title}</h3>
                <p className={styles.cardDesc}>{industry.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
