"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { EASE_OUT } from "@/lib/motion";

/**
 * Decorative engine front view bleeding off the hero's top-right corner.
 * Printed in grayscale at low opacity with multiply blending so the
 * headline on top of it stays fully legible.
 */
export function EngineOrnament({ className = "" }: { className?: string }) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute -top-[60px] -right-[130px] w-[360px] select-none md:-top-[130px] md:-right-[150px] md:w-[520px] ${className}`}
      initial={{ opacity: 0, scale: 0.92, rotate: -6 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.6, ease: EASE_OUT, delay: 0.2 }}
    >
      <Image
        src="/engine-frontview.png"
        alt=""
        width={3000}
        height={2755}
        sizes="(min-width: 768px) 560px, 320px"
        priority
        className="h-auto w-full opacity-[0.18] grayscale contrast-125 mix-blend-multiply md:opacity-[0.15]"
      />
    </motion.div>
  );
}
