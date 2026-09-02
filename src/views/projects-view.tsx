"use client";

import { motion } from "motion/react";
import { PageIntro } from "@/components/page-intro";
import { TransitionLink } from "@/components/transition";
import { PROJECTS } from "@/data/content";
import { useLang } from "@/lib/i18n";
import { EASE_OUT, viewportOnce } from "@/lib/motion";

export function ProjectsView() {
  const { lang, t } = useLang();
  const projects = PROJECTS[lang];

  return (
    <div data-page="projects">
      <PageIntro
        kicker={`03 — ${t.navProjects}`}
        title={t.projTitle}
        sub={t.projSub}
        titleClassName="text-[clamp(36px,5.6vw,80px)] max-w-[22ch]"
      />

      <motion.section
        className="grid sm:grid-cols-2 sm:rule-l lg:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } } }}
      >
        {projects.map((p) => (
          <motion.div
            key={p.slug}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
            }}
            className="flex"
          >
            <TransitionLink
              href={`/projects/${p.slug}`}
              label={p.code}
              className="group rule-b flex min-h-[300px] w-full flex-col bg-ground px-5 py-7 text-left text-ink transition-colors duration-500 hover:bg-surface sm:rule-r md:px-[26px] md:py-[30px]"
            >
              <div className="label mb-5 flex justify-between gap-4 text-accent">
                <span>{p.code}</span>
                <span>{p.year}</span>
              </div>
              <h2 className="mb-3 text-[26px] leading-[1.08] font-black tracking-[-0.025em]">
                {p.name}
              </h2>
              <p className="mb-6 flex-1 text-[15px] leading-[1.5] text-ink-800">{p.short}</p>
              <div className="rule-t flex items-center justify-between gap-3 pt-3.5">
                <span className="text-[13px] font-bold">{p.metric}</span>
                <span className="label flex items-center gap-1.5 text-accent">
                  {t.viewCase}
                  <span
                    aria-hidden
                    className="inline-block transition-transform duration-500 ease-out group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>
            </TransitionLink>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}
