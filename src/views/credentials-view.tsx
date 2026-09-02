"use client";

import { motion } from "motion/react";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { CERTS, COMPETENCIES, EDUCATION, LANGUAGES } from "@/data/content";
import { useLang } from "@/lib/i18n";
import { EASE_OUT, viewportOnce } from "@/lib/motion";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

export function CredentialsView() {
  const { lang, t } = useLang();

  return (
    <div data-page="credentials">
      <PageIntro kicker={`04 — ${t.navCredentials}`} title={t.credTitle} />

      {/* Education */}
      <section className="rule-b px-5 py-12 md:px-8">
        <Reveal className="label mb-6 text-ink-700">{t.education}</Reveal>
        <motion.div
          className="rule-t rule-l grid sm:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          {EDUCATION[lang].map((e) => (
            <motion.div
              key={e.school}
              variants={item}
              className="rule-r rule-b px-5 py-7 transition-colors duration-500 hover:bg-surface md:px-[26px]"
            >
              <div className="label mb-3.5 text-accent">{e.years}</div>
              <h3 className="mb-2.5 text-[24px] leading-[1.1] font-black tracking-[-0.025em]">
                {e.school}
              </h3>
              <div className="text-[16px] leading-[1.5] text-ink-800">{e.degree}</div>
              <div className="mt-3 text-[14px] font-bold">
                {t.gpa} {e.gpa}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Certifications */}
      <section className="rule-b px-5 py-12 md:px-8">
        <Reveal className="mb-6 flex items-baseline justify-between gap-6">
          <div className="label text-ink-700">{t.certifications}</div>
          <div className="label text-ink-700">
            {CERTS.length} {t.total}
          </div>
        </Reveal>
        <motion.div
          className="rule-t"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px 0px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.035 } } }}
        >
          {CERTS.map((c, i) => (
            <motion.div
              key={`${c.name}-${c.issuer}-${i}`}
              variants={{
                hidden: { opacity: 0, x: -16 },
                show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE_OUT } },
              }}
              className="grid grid-cols-[56px_1fr] items-baseline gap-x-4 gap-y-1 border-b-2 border-ink/40 px-1 py-3.5 transition-colors duration-300 hover:bg-accent-200/60 md:grid-cols-[64px_1fr_220px] md:gap-5"
            >
              <span className="label text-accent">{c.year}</span>
              <span className="text-[16px] leading-[1.3] font-semibold tracking-[-0.01em] md:text-[17px]">
                {c.name}
              </span>
              <span className="col-start-2 text-[13px] text-ink-700 md:col-start-3">
                {c.issuer}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Competencies */}
      <section className="rule-b px-5 py-12 md:px-8">
        <Reveal className="label mb-6 text-ink-700">{t.competencies}</Reveal>
        <motion.div
          className="rule-t rule-l grid md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          {COMPETENCIES[lang].map((g) => (
            <motion.div
              key={g.group}
              variants={item}
              className="rule-r rule-b px-5 py-7 md:px-[26px]"
            >
              <h3 className="mb-[18px] text-[20px] leading-[1.15] font-black tracking-[-0.02em]">
                {g.group}
              </h3>
              <ul className="grid gap-2.5">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="border-b border-line pb-2.5 text-[15px] leading-[1.45] text-ink-800"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Languages */}
      <section className="px-5 py-12 md:px-8">
        <Reveal className="label mb-6 text-ink-700">{t.languages}</Reveal>
        <motion.div
          className="flex flex-wrap gap-3"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          {LANGUAGES[lang].map((l) => (
            <motion.div
              key={l.name}
              variants={item}
              className="border-2 border-ink px-6 py-[18px] transition-colors duration-500 hover:bg-ink hover:text-ground [&:hover_.lvl]:text-ground/70"
            >
              <div className="text-[22px] font-black tracking-[-0.02em]">{l.name}</div>
              <div className="lvl mt-1.5 text-[13px] font-semibold tracking-[0.08em] text-ink-700 transition-colors duration-500">
                {l.level}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
