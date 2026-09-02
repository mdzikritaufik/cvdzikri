"use client";

import { motion } from "motion/react";
import { EASE_OUT } from "@/lib/motion";
import { SplitText } from "./split-text";

type PageIntroProps = {
  kicker: string;
  title: string;
  sub?: string;
  titleClassName?: string;
  className?: string;
};

/** The numbered kicker + big display title that opens every inner page. */
export function PageIntro({
  kicker,
  title,
  sub,
  titleClassName = "text-[clamp(36px,5.6vw,80px)] max-w-[20ch]",
  className = "",
}: PageIntroProps) {
  return (
    <section className={`rule-b px-5 pt-14 pb-10 md:px-8 md:pt-16 ${className}`}>
      <motion.div
        className="label mb-6 text-accent"
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.1 }}
      >
        {kicker}
      </motion.div>
      <h1 className={`display mb-5 ${titleClassName}`}>
        <SplitText text={title} delay={0.15} />
      </h1>
      {sub ? (
        <motion.p
          className="max-w-[52ch] text-[17px] leading-[1.45] text-ink-800 md:text-[19px]"
          style={{ textWrap: "pretty" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.5 }}
        >
          {sub}
        </motion.p>
      ) : null}
    </section>
  );
}
