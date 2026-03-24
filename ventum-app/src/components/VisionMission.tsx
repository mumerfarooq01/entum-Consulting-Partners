"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeUp, SlideLeft, SlideRight } from "./ScrollAnimations";
import styles from "./VisionMission.module.css";

export default function VisionMission() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeUp className={styles.header}>
          <span className="section-label">Our Purpose</span>
          <h2 className="section-title">
            Driven by <span className="gold">Vision</span>,
            <br />
            Guided by <span className="gold">Mission</span>
          </h2>
        </FadeUp>

        <div className={styles.cards}>
          <SlideLeft className={styles.cardWrapper}>
            <div className={styles.card}>
              <div className={styles.cardAccent} />
              <div className={styles.cardTag}>Vision</div>
              <h3 className={styles.cardTitle}>Where We&apos;re Headed</h3>
              <p className={styles.cardText}>
                To be a trusted consulting and project development partner for
                infrastructure, energy, and sustainability — helping sponsors
                turn complex projects into bankable, finance-ready investments
                across the GCC, MENA, and international markets.
              </p>
              <div className={styles.cardDecor}>
                <motion.div
                  className={styles.decorRing}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </div>
          </SlideLeft>

          <SlideRight className={styles.cardWrapper}>
            <div className={styles.card}>
              <div className={styles.cardAccent} />
              <div className={styles.cardTag}>Mission</div>
              <h3 className={styles.cardTitle}>What We Stand For</h3>
              <ul className={styles.missionList}>
                <li>
                  <span className={styles.bullet} />
                  Deliver independent advisory that aligns projects with
                  international project finance and regulatory expectations
                </li>
                <li>
                  <span className={styles.bullet} />
                  Combine financial structuring, technical coordination, and
                  stakeholder engagement from concept through financial close
                </li>
                <li>
                  <span className={styles.bullet} />
                  Serve governments, investors, developers, and sponsors with
                  integrity across critical infrastructure and sustainability
                  sectors
                </li>
              </ul>
              <div className={styles.cardDecor}>
                <motion.div
                  className={styles.decorDiamond}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </div>
          </SlideRight>
        </div>

        {/* Taglines */}
        <FadeUp className={styles.taglines} delay={0.3}>
          <div className={styles.tagline}>
            <span className={styles.tagQuote}>&ldquo;</span>
            Bankable projects. Trusted partners. Sustainable infrastructure.
            <span className={styles.tagQuote}>&rdquo;</span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
