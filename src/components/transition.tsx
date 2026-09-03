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
import { samePath } from "@/lib/path";

type Phase = "idle" | "cover" | "reveal";

type TransitionContextValue = {
  navigate: (href: string, label?: string) => void;
  phase: Phase;
};

const TransitionContext = createContext<TransitionContextValue>({
  navigate: () => {},
  phase: "idle",
});

/** How long to wait for a route to resolve before lifting the curtain anyway. */
const ROUTE_TIMEOUT_MS = 3000;

/**
 * Page transition: a red curtain rises from the bottom, the route changes
 * underneath it, then the curtain lifts off the top to reveal the new page.
 */
export function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("idle");
  const [label, setLabel] = useState<string | undefined>();

  // Where we were when the curtain went up, and where we asked to go.
  const from = useRef<string | null>(null);
  const target = useRef<string | null>(null);
  const failsafe = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearFailsafe = useCallback(() => {
    if (failsafe.current) {
      clearTimeout(failsafe.current);
      failsafe.current = null;
    }
  }, []);

  useEffect(() => clearFailsafe, [clearFailsafe]);

  const navigate = useCallback(
    (href: string, nextLabel?: string) => {
      if (phase !== "idle") return;
      if (samePath(href, pathname)) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      from.current = pathname;
      target.current = href;
      setLabel(nextLabel);
      router.prefetch(href);
      setPhase("cover");
    },
    [pathname, phase, router],
  );

  // Lift as soon as the route under the curtain has actually moved. Comparing
  // against the page we left rather than the href we asked for keeps this
  // working when the router lands somewhere adjacent — with `trailingSlash`
  // a push to "/projects" resolves to "/projects/".
  useEffect(() => {
    if (phase !== "cover" || target.current === null) return;
    if (from.current !== null && samePath(pathname, from.current)) return;
    clearFailsafe();
    target.current = null;
    window.scrollTo(0, 0);
    setPhase("reveal");
  }, [pathname, phase, clearFailsafe]);

  const onAnimationComplete = useCallback(() => {
    if (phase === "cover") {
      if (target.current === null) return;
      router.push(target.current);
      // A curtain that never lifts would trap the whole site behind it, so
      // give up waiting rather than leaving a red block on screen.
      clearFailsafe();
      failsafe.current = setTimeout(() => {
        target.current = null;
        setPhase("reveal");
      }, ROUTE_TIMEOUT_MS);
    } else if (phase === "reveal") {
      setPhase("idle");
      setLabel(undefined);
    }
  }, [phase, router, clearFailsafe]);

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
