"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { PageIntro } from "@/components/page-intro";
import { EXPERIENCE } from "@/data/content";
import { useLang } from "@/lib/i18n";
import { EASE_OUT, viewportOnce } from "@/lib/motion";

export function ExperienceView() {
  const { lang, t } = useLang();
  const jobs = EXPERIENCE[lang];

  return (
    <div data-page="experience">
      <PageIntro kicker={`02 — ${t.navExperience}`} title={t.expTitle} sub={t.expSub} />

      {jobs.map((job, i) => (
        <motion.section
          key={`${job.company}-${job.period}`}
          className="group rule-b grid md:grid-cols-12"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
        >
          <motion.div
            className="px-5 pt-8 pb-4 md:col-span-3 md:rule-r md:p-8"
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
            }}
          >
            <Image
              src={job.logo.src}
              alt={`${job.company} logo`}
              width={job.logo.width}
              height={job.logo.height}
              style={{ height: job.logo.display }}
              className="mb-5 w-auto grayscale mix-blend-multiply transition-[filter] duration-500 group-hover:grayscale-0"
            />
            <div className="label mb-3 text-accent">{job.period}</div>
            <div className="text-[16px] leading-[1.25] font-extrabold tracking-[-0.01em]">
              {job.company}
            </div>
            <div className="mt-1.5 text-[14px] text-ink-700">{job.place}</div>
          </motion.div>

          <div className="px-5 pt-2 pb-8 md:col-span-9 md:p-8">
            <motion.h2
              className="mb-5 text-[clamp(24px,2.8vw,38px)] leading-[1.05] font-black tracking-[-0.03em]"
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
              }}
            >
              {job.role}
            </motion.h2>
            <ul className="grid max-w-[78ch] gap-3">
              {job.bullets.map((b, j) => (
                <motion.li
                  key={j}
                  className="grid grid-cols-[18px_1fr] gap-3 text-[16px] leading-[1.55] text-ink-800"
                  variants={{
                    hidden: { opacity: 0, x: -14 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE_OUT } },
                  }}
                >
                  <span className="font-black text-accent">—</span>
                  <span>{b}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* index marker on wide screens */}
          <span className="sr-only">{i + 1}</span>
        </motion.section>
      ))}
    </div>
  );
}
