"use client";

import { motion } from "motion/react";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { PROFILE } from "@/data/content";
import { useLang } from "@/lib/i18n";
import { EASE_OUT } from "@/lib/motion";

const cell = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

export function ContactView() {
  const { t } = useLang();

  return (
    <div data-page="contact">
      <PageIntro
        kicker={`05 — ${t.navContact}`}
        title={t.contactTitle}
        sub={t.contactSub}
        titleClassName="text-[clamp(36px,6vw,88px)] max-w-[20ch]"
      />

      <motion.section
        className="rule-b grid md:grid-cols-3"
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.45 } } }}
      >
        <motion.a
          variants={cell}
          href={`mailto:${PROFILE.email}`}
          className="group rule-b block px-5 py-9 text-ink transition-colors duration-500 hover:bg-accent-200 md:rule-r md:border-b-0 md:px-8"
        >
          <div className="label mb-4 text-ink-700">EMAIL</div>
          <div className="text-[clamp(18px,1.8vw,24px)] leading-[1.2] font-extrabold tracking-[-0.02em] break-words">
            {PROFILE.email}
          </div>
          <Arrow />
        </motion.a>
        <motion.a
          variants={cell}
          href={PROFILE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group rule-b block px-5 py-9 text-ink transition-colors duration-500 hover:bg-accent-200 md:rule-r md:border-b-0 md:px-8"
        >
          <div className="label mb-4 text-ink-700">LINKEDIN</div>
          <div className="text-[clamp(18px,1.8vw,24px)] leading-[1.2] font-extrabold tracking-[-0.02em] break-words">
            {PROFILE.linkedinShort}
          </div>
          <Arrow />
        </motion.a>
        <motion.div variants={cell} className="px-5 py-9 md:px-8">
          <div className="label mb-4 text-ink-700">{t.basedIn}</div>
          <div className="text-[clamp(18px,1.8vw,24px)] leading-[1.2] font-extrabold tracking-[-0.02em]">
            {PROFILE.location}
          </div>
        </motion.div>
      </motion.section>

      <section className="overflow-hidden bg-accent px-5 py-14 text-ground md:px-8 md:py-16">
        <Reveal>
          <h2 className="display mb-6 max-w-[24ch] text-[clamp(30px,4.8vw,64px)] leading-none">
            {t.contactBanner}
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <a href={PROFILE.cv} download className="btn btn-light">
            {t.cvLong}
            <span aria-hidden>↓</span>
          </a>
        </Reveal>
      </section>
    </div>
  );
}

function Arrow() {
  return (
    <span
      aria-hidden
      className="mt-4 inline-block text-accent opacity-0 transition-all duration-500 ease-out -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100"
    >
      →
    </span>
  );
}
