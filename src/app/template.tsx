"use client";

import { motion } from "motion/react";
import { EASE_OUT } from "@/lib/motion";

/** Re-mounts on every navigation so each page rises in under the curtain. */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
