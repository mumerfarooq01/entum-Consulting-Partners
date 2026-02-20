"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Technology", href: "#technology" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <div className={styles.container}>
        <a
          href="#home"
          className={styles.logo}
          onClick={() => handleNavClick("#home")}
        >
          <span className={styles.logoIcon}>V</span>
          <div className={styles.logoText}>
            <span className={styles.logoName}>Ventum</span>
            <span className={styles.logoSub}>Consulting Partners</span>
          </div>
        </a>

        <div className={styles.desktopLinks}>
          {navLinks.map((link) => (
            <button
              key={link.label}
              className={styles.navLink}
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </button>
          ))}
          <button
            className={styles.ctaBtn}
            onClick={() => handleNavClick("#contact")}
          >
            Get in Touch
          </button>
        </div>

        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.open : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                className={styles.mobileLink}
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </button>
            ))}
            <button
              className={styles.mobileCta}
              onClick={() => handleNavClick("#contact")}
            >
              Get in Touch
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
