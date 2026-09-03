"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, PROFILE, type Lang } from "@/data/content";
import { useLang } from "@/lib/i18n";
import { samePath } from "@/lib/path";
import { EASE_IN_OUT, EASE_OUT } from "@/lib/motion";
import { TransitionLink, useTransition } from "./transition";

/** Sticky header plus the full-screen menu overlay. */
export function Shell() {
  const { lang, setLang, t } = useLang();
  const { navigate } = useTransition();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock scroll + Escape to close while the menu is open.
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  // navigate() decides what a given href means: a real route change raises the
  // curtain, and re-picking the current page just returns to the top.
  const go = (href: string, label: string) => {
    setMenuOpen(false);
    navigate(href, label);
  };

  return (
    <>
      <header className="rule-b sticky top-0 z-40 flex items-center justify-between gap-4 bg-ground px-5 py-3.5 md:gap-6 md:px-8">
        <TransitionLink
          href="/"
          label={t.navAbout}
          className="text-xl font-black tracking-[-0.03em] text-ink"
          onClick={() => setMenuOpen(false)}
        >
          {PROFILE.initials}
          <span className="text-accent">.</span>
        </TransitionLink>

        <div className="flex items-center gap-3 md:gap-5">
          <LangToggle lang={lang} setLang={setLang} />

          <a
            href={PROFILE.cv}
            download
            className="btn btn-outline hidden px-4 py-[11px] text-[11px] sm:inline-flex"
          >
            {t.cvShort}
          </a>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpen((o) => !o)}
            className="btn btn-primary min-w-[96px] px-[18px] py-[11px]"
          >
            <span className="relative block h-[14px] overflow-hidden">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.span
                  key={menuOpen ? "close" : "menu"}
                  className="block leading-[14px]"
                  initial={{ y: 14 }}
                  animate={{ y: 0 }}
                  exit={{ y: -14 }}
                  transition={{ duration: 0.3, ease: EASE_OUT }}
                >
                  {menuOpen ? t.close : t.menu}
                </motion.span>
              </AnimatePresence>
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="site-menu"
            key="menu"
            className="fixed inset-0 z-30 flex flex-col overflow-y-auto bg-ground px-5 pt-24 pb-8 md:px-8"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: EASE_IN_OUT }}
          >
            <nav className="rule-t flex flex-col">
              {NAV.map((item, i) => {
                const label = t[item.key];
                const active = samePath(pathname, item.href);
                return (
                  <motion.button
                    key={item.href}
                    type="button"
                    onClick={() => go(item.href, label)}
                    className="group rule-b flex cursor-pointer items-baseline gap-5 px-2 py-[18px] text-left text-ink transition-colors duration-300 hover:bg-accent-200 md:gap-7"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
                    transition={{
                      duration: 0.6,
                      ease: EASE_OUT,
                      delay: 0.15 + i * 0.06,
                    }}
                  >
                    <span className="label min-w-8 text-accent">{item.num}</span>
                    <span className="display text-[clamp(30px,6vw,72px)] leading-none">
                      {label}
                    </span>
                    <span
                      aria-hidden
                      className={`ml-auto self-center text-accent transition-transform duration-500 ease-out ${
                        active
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                    >
                      →
                    </span>
                  </motion.button>
                );
              })}
            </nav>

            <motion.div
              className="label mt-10 flex flex-wrap gap-x-8 gap-y-3 text-ink-700 [&_a]:text-accent-700 [&_a]:transition-colors [&_a]:hover:text-accent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span>{PROFILE.location.toUpperCase()}</span>
              <a href={`mailto:${PROFILE.email}`}>{PROFILE.email.toUpperCase()}</a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
                LINKEDIN
              </a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function LangToggle({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  const options: Lang[] = ["en", "id"];
  return (
    <div
      role="group"
      aria-label="Language"
      className="relative flex border-2 border-ink"
    >
      {options.map((opt) => {
        const active = lang === opt;
        return (
          <button
            key={opt}
            type="button"
            aria-pressed={active}
            onClick={() => setLang(opt)}
            className={`relative z-10 cursor-pointer px-3 py-[7px] text-[11px] font-bold tracking-[0.08em] uppercase transition-colors duration-300 ${
              active ? "text-ground" : "text-ink hover:bg-accent-200"
            }`}
          >
            {active ? (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 -z-10 bg-ink"
                transition={{ duration: 0.4, ease: EASE_OUT }}
              />
            ) : null}
            {opt}
          </button>
        );
      })}
    </div>
  );
}
