"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerItem } from "./ScrollAnimations";
import styles from "./TechnologySection.module.css";

const financingSolutions = [
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
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
        <path d="M12 18V6" />
      </svg>
    ),
    title: "Access to International Financing",
    description:
      "International commercial banks; Export Credit Agencies (ECAs); development finance institutions (DFIs); infrastructure investment funds; institutional investors and private equity firms.",
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
        <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />
        <path d="M9 9v0M9 12v0M9 15v0M9 18v0" />
      </svg>
    ),
    title: "Export Credit Agency (ECA) Financing",
    description:
      "We assist clients in structuring financing supported by ECAs, supplier credit structures, buyer credit facilities, and government-backed financing programs that often provide longer tenors and competitive interest rates.",
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
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "Structured Project Finance",
    description:
      "Non-recourse and limited recourse financing structures; debt structuring and repayment profiles; risk allocation among project stakeholders; security structures and financing covenants.",
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
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Financial Close & Transaction Execution",
    description:
      "Lender negotiations; documentation coordination with legal advisors; financial due diligence support; closing conditions and funding arrangements.",
  },
];

const globalPartners = [
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
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Financial Institutions",
    description:
      "We maintain working relationships with international commercial banks, development finance institutions, export credit agencies, sovereign investors, and infrastructure funds.",
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
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Technology Providers & EPC Contractors",
    description:
      "Our network includes engineering firms, technology providers, and EPC contractors specializing in renewable energy, water treatment, waste management, and industrial infrastructure.",
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
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Government & Institutional Stakeholders",
    description:
      "We assist clients in navigating licensing frameworks, regulatory approvals, concession agreements, and public-private partnership structures across multiple jurisdictions.",
  },
];

export default function TechnologySection() {
  const renderCard = (
    item: (typeof financingSolutions)[0],
    key: string,
    index: number,
  ) => {
    const num = index + 1 < 10 ? `0${index + 1}` : String(index + 1);
    return (
      <StaggerItem key={key}>
        <div className={styles.featureCard}>
          <div className={styles.featureNumber}>{num}</div>
          <div className={styles.featureIcon}>{item.icon}</div>
          <h3 className={styles.featureTitle}>{item.title}</h3>
          <p className={styles.featureDesc}>{item.description}</p>
        </div>
      </StaggerItem>
    );
  };

  return (
    <section id="financing" className={styles.section}>
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
          <span className="section-label">Investor &amp; Financing Solutions</span>
          <h2 className="section-title">
            Capital Aligned With
            <br />
            <span className="gold">Project Finance Standards</span>
          </h2>
          <p className="section-description">
            Infrastructure projects require strong access to long-term capital
            and financing partners. Our team assists clients in structuring
            financing solutions aligned with international project finance
            standards.
          </p>
        </FadeUp>

        <StaggerContainer className={styles.grid} staggerDelay={0.12}>
          {financingSolutions.map((item, i) =>
            renderCard(item, `fin-${item.title}`, i),
          )}
        </StaggerContainer>

        <FadeUp className={styles.subHeader}>
          <span className="section-label">Partnership</span>
          <h3 className={styles.subTitle}>
            Our Global Partners <span className="gold">&amp; Network</span>
          </h3>
          <p className={styles.subDesc}>
            Successful infrastructure projects require collaboration between
            financial institutions, technology providers, EPC contractors, and
            government stakeholders.
          </p>
        </FadeUp>

        <StaggerContainer className={styles.grid} staggerDelay={0.12}>
          {globalPartners.map((item, i) =>
            renderCard(item, `gp-${item.title}`, financingSolutions.length + i),
          )}
        </StaggerContainer>
      </div>
    </section>
  );
}
