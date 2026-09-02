"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { EASE_OUT } from "@/lib/motion";

type CounterProps = {
  to: number;
  suffix?: ReactNode;
  className?: string;
};

/** Counts from 0 to `to` the first time it scrolls into view. */
export function Counter({ to, suffix, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: EASE_OUT,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
