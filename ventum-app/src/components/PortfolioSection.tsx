"use client";

import React from "react";
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
  },
  {
    title: "Water Security & Desalination Projects",
    text:
      "Advisory and development support for bulk water supply systems, desalination plants, and integrated water infrastructure.",
  },
  {
    title: "Telecom Infrastructure",
    text:
      "Advisory related to cellular tower networks and telecommunications infrastructure expansion.",
  },
  {
    title: "Oil & Gas and LNG Infrastructure",
    text:
      "Project development support for LNG terminals, midstream logistics infrastructure, and oil and gas facilities.",
  },
  {
    title: "Waste Management & Recycling Infrastructure",
    text:
      "Development advisory for waste-to-energy facilities, recycling plants, and circular economy infrastructure.",
  },
];

const projects = [
  {
    title: "Community Water Infrastructure Program",
    region: "West Sub‑Saharan Africa",
    description:
      "Regional community water infrastructure program serving approximately 45 communities, villages and towns including desalination and water treatment facilities.",
    capacity: "Approximately 12,000 m³/day",
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
    services: [
      "Strategic advisory during project development stage",
      "Coordination with public sector institutions",
      "Infrastructure commercial structuring",
      "Engagement with international energy partners",
    ],
  },
];

const portfolioHighlights = [
  "Infrastructure projects advised: 10+ major projects",
  "Estimated project value: USD 5–7 billion",
  "Renewable energy capacity: 200+ MW solar projects",
  "Water infrastructure capacity: 6.5+ million m³/day",
  "LNG & gas infrastructure: projects exceeding USD 2 billion",
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
            Africa, Europe, and South Asia. Representative project experience
            spans utility-scale renewables, water and desalination, telecom
            networks, LNG and oil &amp; gas infrastructure, and waste and circular
            economy assets — from early concepts through bankability and
            financial close.
          </p>
        </FadeUp>

        <FadeUp className={styles.subsection}>
          <h3 className={styles.subtitle}>Sector expertise</h3>
          <ul className={styles.sectorList}>
            {sectorExpertise.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </FadeUp>

        <FadeUp className={styles.subsection}>
          <h3 className={styles.subtitle}>Representative experience by category</h3>
          <div className={styles.categoryGrid}>
            {trackCategories.map((cat) => (
              <article key={cat.title} className={styles.categoryCard}>
                <h4 className={styles.categoryTitle}>{cat.title}</h4>
                <p className={styles.categoryText}>{cat.text}</p>
              </article>
            ))}
          </div>
        </FadeUp>

        <FadeUp className={styles.subsection}>
          <h3 className={styles.subtitle}>
            Representative projects (illustrative)
          </h3>
        </FadeUp>

        <StaggerContainer className={styles.projectGrid} staggerDelay={0.06}>
          {projects.map((project) => (
            <StaggerItem key={`${project.title}-${project.region}`}>
              <article className={styles.projectCard}>
                <h4 className={styles.projectTitle}>
                  {project.title}
                  {project.region ? (
                    <span className={styles.projectRegion}>
                      {" "}
                      — {project.region}
                    </span>
                  ) : null}
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
                <p className={styles.servicesLabel}>Services</p>
                <ul className={styles.servicesList}>
                  {project.services.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp className={styles.summaryBlock}>
          <h3 className={styles.subtitle}>Total project portfolio summary</h3>
          <p className={styles.summaryText}>
            Our advisory and project development engagements represent several
            billion dollars of infrastructure investment across multiple
            sectors and regions.
          </p>
          <h4 className={styles.highlightsTitle}>Portfolio highlights</h4>
          <ul className={styles.highlightsList}>
            {portfolioHighlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <h4 className={styles.highlightsTitle}>Geographic footprint</h4>
          <p className={styles.footprintIntro}>
            Projects and advisory engagements across:
          </p>
          <ul className={styles.footprintList}>
            {geographicFootprint.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
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
