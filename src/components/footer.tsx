"use client";

import { NAV, PROFILE } from "@/data/content";
import { useLang } from "@/lib/i18n";
import { TransitionLink } from "./transition";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="rule-t flex flex-wrap items-center justify-between gap-6 px-5 py-6 md:px-8">
      <div className="label text-ink-700">
        © 2026 {PROFILE.name.toUpperCase()}
      </div>
      <nav className="flex flex-wrap gap-5">
        {NAV.map((item) => (
          <TransitionLink
            key={item.href}
            href={item.href}
            label={t[item.key]}
            className="label text-ink-700 transition-colors duration-300 hover:text-accent"
          >
            {t[item.key]}
          </TransitionLink>
        ))}
      </nav>
    </footer>
  );
}
