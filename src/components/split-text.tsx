"use client";

import { motion } from "motion/react";
import { Fragment } from "react";
import { EASE_OUT } from "@/lib/motion";

type SplitTextProps = {
  text: string;
  delay?: number;
  stagger?: number;
  className?: string;
};

/**
 * Splits text into words and slides each one up out of a clipped box.
 * Used for the big display headings on every page.
 */
export function SplitText({
  text,
  delay = 0,
  stagger = 0.06,
  className,
}: SplitTextProps) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span
            aria-hidden
            className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-top"
          >
            <motion.span
              className="inline-block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                ease: EASE_OUT,
                delay: delay + i * stagger,
              }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </span>
  );
}
