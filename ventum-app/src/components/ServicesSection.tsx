"use client";

import React from "react";
import { FadeUp, StaggerContainer, StaggerItem } from "./ScrollAnimations";
import styles from "./ServicesSection.module.css";

const services = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <path d="M13 6h3a2 2 0 0 1 2 2v7" />
        <path d="M11 18H8a2 2 0 0 1-2-2V9" />
      </svg>
    ),
    title: "Mergers & Acquisitions",
    description:
      "Expert M&A advisory services guiding transactions from due diligence to successful integration.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Financial Advisory & Planning",
    description:
      "Comprehensive financial planning consultancy to support informed decision-making and sustainable growth.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
        <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
        <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
      </svg>
    ),
    title: "Loan Arrangements",
    description:
      "Strategic loan arrangement and financial structuring services for optimal capital acquisition.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "Business & Management Consulting",
    description:
      "Strategic business consulting to optimize operations and drive organizational excellence.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16" />
      </svg>
    ),
    title: "Corporate Strategy & Restructuring",
    description:
      "Corporate financial strategy and restructuring advisory to navigate complex business transformations.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Feasibility Studies & Valuation",
    description:
      "In-depth financial feasibility studies and valuation advisory for strategic investment decisions.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Risk Assessment & Controls",
    description:
      "Comprehensive risk assessment and internal financial controls advisory to safeguard business assets.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    title: "Engineering Services",
    description:
      "Professional engineering consultancy and technical advisory for infrastructure and development projects.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    title: "Quantity Surveying",
    description:
      "Expert quantity surveying services ensuring precise cost management throughout project lifecycles.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
    title: "Public & Marketing Research",
    description:
      "Comprehensive market research and public opinion analysis to inform strategic business decisions.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Product Launch & Entry Research",
    description:
      "Market entry research and product launch strategy consulting for successful market penetration.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "HR Advisory Services",
    description:
      "People-first HR advisory services including talent strategy, workforce planning, and organizational design.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    title: "Strategic Diagnostics & Feasibility",
    description:
      "In-depth business diagnostic studies and feasibility analysis to identify growth opportunities.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Landscaping Survey",
    description:
      "Professional design and landscaping survey services for real estate and urban development projects.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <FadeUp className={styles.header}>
          <span className="section-label">Our Services</span>
          <h2 className="section-title">
            Comprehensive Advisory
            <br />
            <span className="gold">Solutions</span>
          </h2>
          <p className="section-description">
            From financial planning to strategic consulting, we offer a full
            spectrum of advisory services tailored to businesses operating in
            the Gulf region and beyond.
          </p>
          <div className={styles.feasibilityBlock}>
            <h3 className={styles.feasibilityTitle}>
              Preparing Technical &amp; Feasibility Studies of Projects and
              Opportunities
            </h3>
            <p className={styles.feasibilityTags}>
              Water, Clean Energy, Waste Management &amp; Recycling, Food
              Security, Energy Efficiency &amp; Environmental Business Services
            </p>
            <p className={styles.feasibilitySubtitle}>
              Ventum Consulting (Digital &amp; Sustainable Transformation
              Services)
            </p>
            <ul className={styles.feasibilityList}>
              <li>
                Sustainable transformation strategy, including ESG integration at
                both strategic and operational levels.
              </li>
              <li>
                Data-driven feasibility assessments and KPI frameworks for
                environmental business planning.
              </li>
              <li>
                Process and organizational alignment for sustainability and
                circular economy models.
              </li>
              <li>
                Digitalization strategy to support operational and environmental
                feasibility studies.
              </li>
            </ul>
          </div>
        </FadeUp>

        <StaggerContainer className={styles.grid} staggerDelay={0.06}>
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>{service.icon}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
                <div className={styles.cardLine} />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp className={styles.disclaimer}>
          <p>
            All services are advisory in nature. Ventum Consulting Partners does
            not conduct regulated investment, brokerage, portfolio management,
            or fund management activities.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
