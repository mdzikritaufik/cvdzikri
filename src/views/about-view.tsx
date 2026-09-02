"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Counter } from "@/components/counter";
import { EngineOrnament } from "@/components/engine-ornament";
import { Reveal } from "@/components/reveal";
import { SplitText } from "@/components/split-text";
import { TransitionLink } from "@/components/transition";
import { PROFILE } from "@/data/content";
import { useLang } from "@/lib/i18n";
import { EASE_OUT } from "@/lib/motion";

export function AboutView() {
  const { t } = useLang();

  return (
    <div data-page="about">
      {/* Hero */}
      <section className="rule-b grid md:grid-cols-12">
        <div className="relative overflow-hidden px-5 pt-14 pb-12 md:col-span-8 md:rule-r md:px-8 md:pt-[72px]">
          <EngineOrnament />
          <motion.div
            className="label mb-9 text-ink-700"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.1 }}
          >
            {PROFILE.name.toUpperCase()} — {PROFILE.location.toUpperCase()}
          </motion.div>
          <h1 className="display mb-7 max-w-[15ch] text-[clamp(44px,6.2vw,90px)] leading-[0.92]">
            <SplitText text={PROFILE.title} delay={0.15} stagger={0.08} />
          </h1>
          <motion.div
            className="mb-6 h-0.5 bg-ink"
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.55 }}
          />
          <motion.p
            className="max-w-[48ch] text-[18px] leading-[1.4] text-ink-800 md:text-[20px]"
            style={{ textWrap: "pretty" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.6 }}
          >
            {t.heroSub}
          </motion.p>
        </div>

        <motion.div
          className="relative min-h-[360px] overflow-hidden bg-surface md:col-span-4 md:min-h-[520px]"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 1, ease: EASE_OUT, delay: 0.25 }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: EASE_OUT, delay: 0.25 }}
          >
            <Image
              src="/photo.jpg"
              alt={PROFILE.name}
              fill
              priority
              sizes="(min-width: 768px) 33vw, 100vw"
              className="grayscale-photo object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="rule-b grid sm:grid-cols-2">
        <Reveal className="rule-b px-5 py-7 sm:rule-r sm:border-b-0 md:px-8">
          <div className="text-[56px] leading-none font-black tracking-[-0.04em]">
            <Counter to={9} suffix={<span className="text-accent">+</span>} />
          </div>
          <div className="label mt-2.5 text-ink-700">{t.stat1}</div>
        </Reveal>
        <Reveal delay={0.1} className="px-5 py-7 md:px-8">
          <div className="text-[56px] leading-none font-black tracking-[-0.04em]">
            <Counter to={5} />
          </div>
          <div className="label mt-2.5 text-ink-700">{t.stat2}</div>
        </Reveal>
      </section>

      {/* About */}
      <section className="max-w-[1400px] px-5 py-14 md:px-8 md:py-16 md:pb-[72px]">
        <Reveal className="label mb-7 text-accent">01 — {t.navAbout}</Reveal>
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <Reveal delay={0.1}>
            <p
              className="text-[clamp(22px,2.3vw,32px)] leading-[1.32] font-medium tracking-[-0.02em]"
              style={{ textWrap: "pretty" }}
            >
              {t.aboutLead}
            </p>
          </Reveal>
          <Reveal delay={0.2} className="flex flex-col gap-5">
            <p className="text-[17px] leading-[1.6] text-ink-800" style={{ textWrap: "pretty" }}>
              {t.aboutP2}
            </p>
            <p className="text-[17px] leading-[1.6] text-ink-800" style={{ textWrap: "pretty" }}>
              {t.aboutP3}
            </p>
            <div className="mt-2 flex gap-3">
              <TransitionLink
                href="/projects"
                label={t.navProjects}
                className="btn btn-primary"
              >
                {t.ctaProjects}
                <span aria-hidden>→</span>
              </TransitionLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Banner */}
      <section className="overflow-hidden bg-accent px-5 py-14 text-ground md:px-8 md:py-16">
        <Reveal>
          <h2 className="display mb-6 max-w-[24ch] text-[clamp(30px,4.8vw,64px)] leading-none">
            {t.bannerLine}
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <a href={`mailto:${PROFILE.email}`} className="btn btn-light">
            {PROFILE.email.toUpperCase()}
          </a>
        </Reveal>
      </section>
    </div>
  );
}
