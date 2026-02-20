"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

interface AnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: { delay: number; duration: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom.delay,
      duration: custom.duration,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: { delay: number; duration: number }) => ({
    opacity: 1,
    transition: {
      delay: custom.delay,
      duration: custom.duration,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: (custom: { delay: number; duration: number }) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom.delay,
      duration: custom.duration,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: (custom: { delay: number; duration: number }) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom.delay,
      duration: custom.duration,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (custom: { delay: number; duration: number }) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: custom.delay,
      duration: custom.duration,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

function createAnimatedComponent(variants: Variants) {
  const Component = ({
    children,
    className,
    delay = 0,
    duration = 0.7,
    once = true,
  }: AnimationProps) => (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      custom={{ delay, duration }}
    >
      {children}
    </motion.div>
  );
  Component.displayName = "AnimatedComponent";
  return Component;
}

export const FadeUp = createAnimatedComponent(fadeUpVariants);
export const FadeIn = createAnimatedComponent(fadeInVariants);
export const SlideLeft = createAnimatedComponent(slideLeftVariants);
export const SlideRight = createAnimatedComponent(slideRightVariants);
export const ScaleUp = createAnimatedComponent(scaleUpVariants);

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

const staggerContainerVariants: Variants = {
  hidden: {},
  visible: (custom: { staggerDelay: number }) => ({
    transition: {
      staggerChildren: custom.staggerDelay,
    },
  }),
};

export const StaggerContainer = ({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
}: StaggerProps) => (
  <motion.div
    className={className}
    variants={staggerContainerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once, margin: "-60px" }}
    custom={{ staggerDelay }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    className={className}
    variants={fadeUpVariants}
    custom={{ delay: 0, duration: 0.6 }}
  >
    {children}
  </motion.div>
);

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export const ParallaxElement = ({
  children,
  className,
  speed = 0.5,
}: ParallaxProps) => (
  <motion.div
    className={className}
    initial={{ y: 0 }}
    whileInView={{ y: speed * -40 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);
