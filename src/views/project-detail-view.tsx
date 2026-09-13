"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Reveal } from "@/components/reveal";
import { SplitText } from "@/components/split-text";
import { TransitionLink } from "@/components/transition";
import { PROJECTS } from "@/data/content";
import { useLang } from "@/lib/i18n";
import { EASE_OUT } from "@/lib/motion";

export function ProjectDetailView({ slug }: { slug: string }) {
  const { lang, t } = useLang();
  const projects = PROJECTS[lang];
  const current = projects.find((p) => p.slug === slug) ?? projects[0];

  return (
    <div data-page="project">
      <section className="px-5 pt-8 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
        >
          <TransitionLink
            href="/projects"
            label={t.navProjects}
            className="group label inline-flex items-center gap-2 text-accent-700 transition-colors duration-300 hover:text-accent"
          >
            <span
              aria-hidden
              className="inline-block transition-transform duration-500 ease-out group-hover:-translate-x-1"
            >
              ←
            </span>
            {t.backProjects}
          </TransitionLink>
        </motion.div>
      </section>

      <section className="rule-b px-5 pt-8 pb-12 md:px-8">
        <motion.div
          className="label mb-6 text-accent"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.1 }}
        >
          {current.code} — {current.year}
        </motion.div>
        <h1 className="display mb-6 max-w-[20ch] text-[clamp(36px,6vw,86px)]">
          <SplitText text={current.name} delay={0.15} />
        </h1>
        <motion.p
          className="max-w-[44ch] text-[clamp(20px,2.2vw,28px)] leading-[1.35] font-medium tracking-[-0.015em]"
          style={{ textWrap: "pretty" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.5 }}
        >
          {current.short}
        </motion.p>
      </section>

      <section className="rule-b grid md:grid-cols-12">
        <Reveal className="px-5 py-10 md:col-span-7 md:rule-r md:px-8">
          <div className="label mb-[18px] text-ink-700">{t.whatItIs}</div>
          <p
            className="max-w-[72ch] text-[17px] leading-[1.6] text-ink-800"
            style={{ textWrap: "pretty" }}
          >
            {current.detail}
          </p>
        </Reveal>
        <Reveal delay={0.12} className="bg-surface px-5 py-10 md:col-span-5 md:px-8">
          <div className="label mb-[18px] text-ink-700">{t.impact}</div>
          <p className="mb-7 text-[17px] leading-[1.6]" style={{ textWrap: "pretty" }}>
            {current.impact}
          </p>
          <motion.div
            className="mb-5 h-0.5 bg-ink"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
            transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.3 }}
          />
          <div className="label mb-2.5 text-ink-700">{t.headline}</div>
          <div className="text-[30px] leading-[1.1] font-black tracking-[-0.03em]">
            {current.metric}
          </div>
          {current.link ? (
            <div className="mt-7">
              <a
                href={current.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {t.openDemo}
                <span aria-hidden>↗</span>
              </a>
              <div className="mt-3 text-[13px] leading-[1.5] text-ink-700">{t.demoNote}</div>
            </div>
          ) : null}
        </Reveal>
      </section>

      {current.docs?.length ? (
        <section className="rule-b px-5 py-10 md:px-8">
          <Reveal className="label mb-6 text-ink-700">{t.documentation}</Reveal>
          <div className="grid gap-8 md:grid-cols-2">
            {current.docs.map((doc, i) => (
              <Reveal key={doc.src} delay={i * 0.12}>
                <figure className="m-0 max-w-[504px]">
                  {doc.kind === "linkedin" ? (
                    <iframe
                      src={doc.src}
                      title={doc.caption}
                      loading="lazy"
                      allowFullScreen
                      className="block h-[399px] w-full border-0"
                    />
                  ) : (
                    <Image
                      src={doc.src}
                      alt={doc.alt ?? doc.caption}
                      width={doc.width}
                      height={doc.height}
                      sizes="(min-width: 768px) 504px, 100vw"
                      className="block h-auto w-full bg-surface"
                    />
                  )}
                  <figcaption className="mt-3 text-[13px] leading-[1.5] text-ink-700">
                    {doc.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      <section className="px-5 py-10 md:px-8">
        <Reveal className="label mb-5 text-ink-700">{t.otherProjects}</Reveal>
        <motion.div
          className="flex flex-wrap gap-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        >
          {projects.map((p) => {
            const active = p.slug === current.slug;
            return (
              <motion.div
                key={p.slug}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
                }}
              >
                <TransitionLink
                  href={`/projects/${p.slug}`}
                  label={p.code}
                  aria-current={active ? "page" : undefined}
                  className={`btn px-4 py-3 text-[12px] tracking-[0.06em] ${
                    active ? "bg-ink text-ground" : "btn-outline"
                  }`}
                >
                  {p.code}
                </TransitionLink>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
}
