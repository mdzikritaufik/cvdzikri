"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "motion/react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type MouseEvent,
  type ReactNode,
} from "react";
import { EASE_IN_OUT } from "@/lib/motion";

type Phase = "idle" | "cover" | "reveal";

type TransitionContextValue = {
  navigate: (href: string, label?: string) => void;
  phase: Phase;
};

const TransitionContext = createContext<TransitionContextValue>({
  navigate: () => {},
  phase: "idle",
});

/**
 * Page transition: a red curtain rises from the bottom, the route changes
 * underneath it, then the curtain lifts off the top to reveal the new page.
 */
export function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("idle");
  const [label, setLabel] = useState<string | undefined>();
  const pending = useRef<string | null>(null);

  const navigate = useCallback(
    (href: string, nextLabel?: string) => {
      if (phase !== "idle") return;
      if (href === pathname) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      pending.current = href;
      setLabel(nextLabel);
      router.prefetch(href);
      setPhase("cover");
    },
    [pathname, phase, router],
  );

  // The route has changed under the curtain: lift it.
  useEffect(() => {
    if (phase === "cover" && pending.current && pathname === pending.current) {
      pending.current = null;
      window.scrollTo(0, 0);
      setPhase("reveal");
    }
  }, [pathname, phase]);

  const onAnimationComplete = () => {
    if (phase === "cover" && pending.current) {
      router.push(pending.current);
    } else if (phase === "reveal") {
      setPhase("idle");
      setLabel(undefined);
    }
  };

  return (
    <TransitionContext.Provider value={{ navigate, phase }}>
      {children}
      <motion.div
        aria-hidden
        className="fixed inset-0 z-[100] flex items-end bg-accent px-5 pb-6 text-ground md:px-8 md:pb-8"
        style={{
          transformOrigin: phase === "cover" ? "bottom" : "top",
          pointerEvents: phase === "idle" ? "none" : "auto",
        }}
        initial={false}
        animate={{ scaleY: phase === "cover" ? 1 : 0 }}
        transition={{ duration: 0.55, ease: EASE_IN_OUT }}
        onAnimationComplete={onAnimationComplete}
      >
        {label ? (
          <motion.span
            key={label}
            className="display text-[clamp(32px,7vw,96px)]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: phase === "cover" ? 1 : 0, y: 0 }}
            transition={{ duration: 0.35, delay: 0.25 }}
          >
            {label}
          </motion.span>
        ) : null}
      </motion.div>
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  return useContext(TransitionContext);
}

type TransitionLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
  /** Large label flashed on the curtain while the route changes. */
  label?: string;
};

/** A Next.js Link that runs the curtain transition on plain left clicks. */
export function TransitionLink({
  href,
  label,
  onClick,
  ...rest
}: TransitionLinkProps) {
  const { navigate } = useTransition();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    ) {
      return;
    }
    e.preventDefault();
    navigate(href, label);
  };

  return <Link href={href} onClick={handleClick} {...rest} />;
}
