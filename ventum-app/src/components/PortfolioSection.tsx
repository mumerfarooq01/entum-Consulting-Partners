"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerItem } from "./ScrollAnimations";
import styles from "./PortfolioSection.module.css";

const sectorExpertise = [
  "Renewable Energy (Solar & Clean Energy)",
  "Water Security & Desalination Infrastructure",
  "Food Security & Agricultural Development",
  "LNG Terminals & Oil & Gas Infrastructure",
  "Telecom Infrastructure & Cellular Tower Networks",
  "Waste-to-Energy Projects",
  "Recycling & Circular Economy Infrastructure",
  "Waste Management Systems",
  "Concession-Based Infrastructure Projects (PPP / BOT / BOO models)",
];

const trackCategories = [
  {
    title: "Renewable Energy Projects",
    text:
      "Development and structuring of utility-scale solar projects and distributed renewable energy infrastructure.",
    image: "/project-solar.png",
  },
  {
    title: "Water Security & Desalination Projects",
    text:
      "Advisory and development support for bulk water supply systems, desalination plants, and integrated water infrastructure.",
    image: "/project-water.png",
  },
  {
    title: "Telecom Infrastructure",
    text:
      "Advisory related to cellular tower networks and telecommunications infrastructure expansion.",
    image: "/project-telecom.png",
  },
  {
    title: "Oil & Gas and LNG Infrastructure",
    text:
      "Project development support for LNG terminals, midstream logistics infrastructure, and oil and gas facilities.",
    image: "/project-lng.png",
  },
  {
    title: "Waste Management & Recycling Infrastructure",
    text:
      "Development advisory for waste-to-energy facilities, recycling plants, and circular economy infrastructure.",
    image: "/project-waste.png",
  },
];

const projects = [
  {
    title: "Community Water Infrastructure Program",
    region: "West Sub‑Saharan Africa",
    description:
      "Regional community water infrastructure program serving approximately 45 communities, villages and towns including desalination and water treatment facilities.",
    capacity: "Approximately 12,000 m³/day",
    image: "/project-water-africa.png",
    services: [
      "Project concept development",
      "Feasibility and bankability assessment",
      "Coordination with engineering consultants",
      "Financial structuring advisory",
      "Engagement with development institutions and local authorities",
    ],
  },
  {
    title: "Strategic Desalination & Water Supply Project",
    region: "North Africa",
    description:
      "Large-scale desalination and municipal water supply infrastructure.",
    capacity: "Approximately 1.5 million m³/day",
    image: "/project-water.png",
    services: [
      "Strategic project development advisory",
      "Structuring of long‑term Water Purchase Agreement (WPA)",
      "Engagement with infrastructure investors and lenders",
      "Coordination with engineering advisors",
    ],
  },
  {
    title: "Tourism Water Supply Concession (BOT Model)",
    region: "Egypt",
    description:
      "Long-term BOT water treatment and supply infrastructure supporting tourism zones in Egypt. Approximately 42% of water supply is designed for tourism infrastructure including five-star hotels, resorts, chalets and commercial tourism facilities.",
    capacity: "Approximately 5 million m³/day",
    image: "/project-egypt-water.png",
    services: [
      "BOT concession structuring",
      "Commercial feasibility and project structuring",
      "Water offtake advisory",
      "Engagement with government stakeholders and investors",
    ],
  },
  {
    title: "Solar IPP Project",
    region: "Kenya",
    description: "20 MW Solar PV independent power producer project.",
    image: "/project-solar-kenya.png",
    services: [
      "Project development advisory",
      "Feasibility and financial modeling",
      "Structuring power purchase agreement framework",
      "Coordination with EPC contractors and investors",
    ],
  },
  {
    title: "Utility Scale Solar IPP",
    region: "Burkina Faso",
    description: "100 MW Solar PV power project.",
    image: "/project-solar.png",
    services: [
      "Project origination and development support",
      "Financial structuring advisory",
      "Engagement with utilities and government authorities",
      "Coordination with engineering partners and lenders",
    ],
  },
  {
    title: "Merchant Solar Power Project",
    region: "Eastern Europe",
    description:
      "80 MW merchant solar project participating in the electricity trading market.",
    image: "/project-solar-europe.png",
    services: [
      "Merchant market solar development",
      "Power market analysis and price forecasting",
      "Energy trading advisory",
      "Engagement with trading partners and investors",
    ],
  },
  {
    title: "LNG Supply & Import Terminal",
    region: "Louisiana, USA",
    description:
      "Development of LNG supply infrastructure and terminal facilities along the Louisiana Gulf Coast.",
    image: "/project-lng-louisiana.png",
    services: [
      "Strategic project development advisory",
      "LNG supply chain structuring",
      "Infrastructure coordination with technical partners",
      "Engagement with infrastructure investors",
    ],
  },
  {
    title: "Underground LNG Storage Infrastructure",
    region: "Konya, Turkey",
    description:
      "Large underground LNG storage infrastructure project coordinated with public institutions and Western and American upstream oil & gas companies.",
    note: "Estimated value: approximately USD 2 billion",
    image: "/project-lng-turkey.png",
    services: [
      "Strategic advisory during project development stage",
      "Coordination with public sector institutions",
      "Infrastructure commercial structuring",
      "Engagement with international energy partners",
    ],
  },
];

const portfolioHighlights = [
  { label: "Projects Advised", value: "10+", suffix: "Major Projects" },
  { label: "Portfolio Value", value: "$5-7B", suffix: "USD Estimated" },
  { label: "Solar Capacity", value: "200+", suffix: "MW Projects" },
  { label: "Water Capacity", value: "6.5M+", suffix: "m³/day" },
  { label: "LNG & Gas", value: "$2B+", suffix: "Infrastructure" },
];

const geographicFootprint = [
  "Sub‑Saharan Africa",
  "North Africa",
  "Eastern Europe",
  "Turkey",
  "North America",
  "GCC & Middle East",
  "South Asia",
];

export default function PortfolioSection() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <section id="portfolio" className={styles.section}>
      <div className={styles.container}>
        <FadeUp className={styles.header}>
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Selected Project
            <br />
            <span className="gold">Track Record</span>
          </h2>
          <p className={`section-description ${styles.lead}`}>
            Our advisory team has supported the origination, structuring, and
            financing of infrastructure and energy projects across the GCC, MENA,
            Africa, Europe, and South Asia.
          </p>
        </FadeUp>

        {/* Category cards with images */}
        <FadeUp className={styles.subsection}>
          <h3 className={styles.subtitle}>Representative experience by category</h3>
          <div className={styles.categoryGrid}>
            {trackCategories.map((cat) => (
              <article key={cat.title} className={styles.categoryCard}>
                <div className={styles.categoryImageWrapper}>
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className={styles.categoryImageOverlay} />
                </div>
                <div className={styles.categoryContent}>
                  <h4 className={styles.categoryTitle}>{cat.title}</h4>
                  <p className={styles.categoryText}>{cat.text}</p>
                </div>
              </article>
            ))}
          </div>
        </FadeUp>

        {/* Representative projects with images */}
        <FadeUp className={styles.subsection}>
          <h3 className={styles.subtitle}>
            Representative projects (illustrative)
          </h3>
        </FadeUp>

        <StaggerContainer className={styles.projectGrid} staggerDelay={0.06}>
          {projects.map((project, index) => (
            <StaggerItem key={`${project.title}-${project.region}`}>
              <article
                className={`${styles.projectCard} ${expandedProject === index ? styles.projectCardExpanded : ""}`}
                onClick={() => setExpandedProject(expandedProject === index ? null : index)}
              >
                <div className={styles.projectImageWrapper}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.projectImageOverlay} />
                  <div className={styles.projectRegionBadge}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {project.region}
                  </div>
                </div>
                <div className={styles.projectBody}>
                  <h4 className={styles.projectTitle}>
                    {project.title}
                  </h4>
                  <p className={styles.projectDesc}>{project.description}</p>
                  {project.capacity ? (
                    <p className={styles.projectMeta}>
                      <strong>Capacity:</strong> {project.capacity}
                    </p>
                  ) : null}
                  {project.note ? (
                    <p className={styles.projectMeta}>{project.note}</p>
                  ) : null}

                  <AnimatePresence>
                    {expandedProject === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={styles.projectServicesWrapper}
                      >
                        <p className={styles.servicesLabel}>Services provided</p>
                        <ul className={styles.servicesList}>
                          {project.services.map((s) => (
                            <li key={s}>{s}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button className={styles.expandBtn}>
                    {expandedProject === index ? "Show less" : "View details"}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{
                        transform: expandedProject === index ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Portfolio Summary - visual stats */}
        <FadeUp className={styles.summaryBlock}>
          <h3 className={styles.subtitle}>Portfolio highlights</h3>
          <div className={styles.highlightsGrid}>
            {portfolioHighlights.map((h) => (
              <div key={h.label} className={styles.highlightCard}>
                <span className={styles.highlightValue}>{h.value}</span>
                <span className={styles.highlightLabel}>{h.label}</span>
                <span className={styles.highlightSuffix}>{h.suffix}</span>
              </div>
            ))}
          </div>

          <h4 className={styles.footprintTitle}>Geographic footprint</h4>
          <div className={styles.footprintTags}>
            {geographicFootprint.map((g) => (
              <span key={g} className={styles.footprintTag}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                {g}
              </span>
            ))}
          </div>
        </FadeUp>

        <FadeUp className={styles.disclaimer}>
          <p>
            <strong>Confidentiality notice.</strong> Certain project references
            are presented on a non‑attributable basis due to client
            confidentiality obligations and regulatory considerations.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
