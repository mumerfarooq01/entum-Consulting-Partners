"use client";

import React from "react";
import { FadeUp, StaggerContainer, StaggerItem } from "./ScrollAnimations";
import styles from "./ServicesSection.module.css";

const iconPaths = {
  sun: (
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  ),
  droplet: <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />,
  leaf: <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 2 8.8-1.5.5-3.5 1-5.4 1.8" />,
  flame: <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-4-2.5-4-6a6 6 0 0 1 9.975 4.5" />,
  tower: (
    <>
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </>
  ),
  recycle: (
    <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5M9.76 14.223 13.836 7.4M14 19h2.185a1.83 1.83 0 0 0 1.57-.881 1.785 1.785 0 0 0 .004-1.784L16.804 9.5M9.76 9.777 13.836 16.6" />
  ),
  trash: (
    <>
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </>
  ),
  handshake: (
    <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L7 14M7 14l-1.2 3.8a1 1 0 0 0 .9 1.2h9.7" />
  ),
};

const sectors = [
  {
    title: "Renewable Energy (Solar & Clean Energy)",
    icon: iconPaths.sun,
  },
  {
    title: "Water Security & Desalination Infrastructure",
    icon: iconPaths.droplet,
  },
  {
    title: "Food Security & Agricultural Development",
    icon: iconPaths.leaf,
  },
  {
    title: "LNG Terminals & Oil & Gas Infrastructure",
    icon: iconPaths.flame,
  },
  {
    title: "Telecom Infrastructure & Cellular Tower Networks",
    icon: iconPaths.tower,
  },
  {
    title: "Waste-to-Energy Projects",
    icon: iconPaths.recycle,
  },
  {
    title: "Recycling & Circular Economy Infrastructure",
    icon: iconPaths.recycle,
  },
  {
    title: "Waste Management Systems",
    icon: iconPaths.trash,
  },
  {
    title: "Concession-Based Infrastructure Projects (PPP / BOT / BOO models)",
    icon: iconPaths.handshake,
  },
];

const endToEndItems = [
  "Project origination and opportunity identification",
  "Support during Letter of Intent (LOI) and project award stage",
  "Preparation of feasibility studies and bankable documentation",
  "Licensing, regulatory approvals, and government permits",
  "Land allocation and concession structuring",
  "Structuring of offtake agreements and commercial contracts",
  "Coordination with legal advisors, consultants, and technical experts",
  "EPC contract structuring and negotiation",
  "Operations & Maintenance (O&M) agreement structuring",
  "Financial advisory and capital structuring",
  "Engagement with commercial banks, investors, and development institutions",
  "Arranging debt financing through Export Credit Agencies (ECAs), EXIM Banks, and international lenders",
];

const advisoryCapabilities: {
  title: string;
  body?: string;
  items?: string[];
}[] = [
  {
    title: "Project Development Advisory",
    body:
      "We assist clients in transforming early-stage project concepts into bankable infrastructure investments through feasibility development, regulatory approvals, commercial structuring, and project documentation.",
  },
  {
    title: "Project Finance & Financial Advisory",
    items: [
      "Financial modeling and project finance structuring",
      "Debt and equity structuring",
      "Engagement with commercial banks and institutional investors",
      "Structuring financing through Export Credit Agencies (ECAs) and EXIM banks",
      "Negotiation support with lenders and financing institutions",
      "Support during financing due diligence and financial close",
    ],
  },
  {
    title: "Public-Private Partnership (PPP) Advisory",
    items: [
      "PPP structuring and advisory",
      "Concession agreement support",
      "Risk allocation frameworks",
      "Financial feasibility assessments",
      "Transaction advisory for PPP projects",
    ],
  },
  {
    title: "Strategic Infrastructure Advisory",
    items: [
      "Infrastructure investment strategy development",
      "Market entry and sector analysis",
      "Strategic partnerships and joint ventures",
      "Project acquisition and development advisory",
    ],
  },
];

function SectorIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <FadeUp className={styles.header}>
          <span className="section-label">Consulting &amp; Advisory Services</span>
          <h2 className="section-title">
            Strategic Advisory
            <br />
            <span className="gold">&amp; Project Development</span>
          </h2>
          <p className="section-description">
            With over 45 years of combined experience across the GCC and wider
            MENA region, our team provides specialized financial advisory, project
            development, and infrastructure structuring services to governments,
            investors, developers, and corporate sponsors. Our expertise spans a
            broad range of critical infrastructure and sustainability sectors
            including renewable energy, water security, food security, telecom
            infrastructure, LNG terminals, oil and gas infrastructure,
            waste-to-energy, recycling, and concession-based infrastructure
            projects.
          </p>
        </FadeUp>

        <FadeUp className={styles.blockHeading}>
          <h3 className={styles.blockTitle}>Sector expertise</h3>
        </FadeUp>

        <StaggerContainer className={styles.grid} staggerDelay={0.06}>
          {sectors.map((sector) => (
            <StaggerItem key={sector.title}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <SectorIcon>{sector.icon}</SectorIcon>
                </div>
                <h3 className={styles.cardTitle}>{sector.title}</h3>
                <div className={styles.cardLine} />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp className={styles.endToEnd}>
          <h3 className={styles.blockTitle}>End-to-End Project Development Services</h3>
          <p className={styles.endToEndIntro}>
            We provide comprehensive project development and advisory support,
            guiding projects from early-stage concept through bankability and
            financial close. Our services include:
          </p>
          <ul className={styles.endToEndList}>
            {endToEndItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </FadeUp>

        <FadeUp className={styles.blockHeading}>
          <h3 className={styles.blockTitle}>Our advisory capabilities</h3>
        </FadeUp>

        <StaggerContainer className={styles.capabilitiesGrid} staggerDelay={0.08}>
          {advisoryCapabilities.map((cap) => (
            <StaggerItem key={cap.title}>
              <div className={styles.capabilityCard}>
                <h4 className={styles.capabilityTitle}>{cap.title}</h4>
                {cap.body ? (
                  <p className={styles.capabilityBody}>{cap.body}</p>
                ) : null}
                {cap.items ? (
                  <ul className={styles.capabilityList}>
                    {cap.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
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
