"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { EASE_OUT, viewportOnce } from "@/lib/motion";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

/** Fade-and-rise once the element scrolls into view. */
export function Reveal({ delay = 0, y = 28, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.75, ease: EASE_OUT, delay }}
      {...rest}
    />
  );
}
