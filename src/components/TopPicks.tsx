import { useRef } from 'react';
import { motion } from 'framer-motion';
import { topPicks, type Project } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';
import { ProjectArt } from './Poster';
import { RailButtons } from './Rail';

export default function TopPicks({ onOpen }: { onOpen: (project: Project) => void }) {
  const rail = useRef<HTMLDivElement>(null);

  return (
    <>
      <SectionHeading kicker="Top 3 from the portfolio" title="Featured Originals" />
      <div className="group/rail relative">
        <div ref={rail} className="rail gutter flex snap-x snap-mandatory gap-5 overflow-x-auto py-6">
          {topPicks.map((pick, index) => (
            <motion.button
              key={pick.project.id}
              type="button"
              onClick={() => onOpen(pick.project)}
              aria-label={`Open ${pick.project.title} original`}
              className="group relative flex h-[300px] w-[min(82vw,360px)] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-2xl border border-white/10 text-left transition hover:-translate-y-1 hover:border-white/30 sm:h-[340px]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '0px -5% 0px 0px' }}
              transition={{ duration: 0.7, delay: Math.min(index, 5) * 0.06, ease: EASE }}
            >
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <ProjectArt project={pick.project} />
              </div>
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-black/20" />
              <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/45 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur">
                TOP {index + 1} · {pick.label}
              </span>
              {pick.project.logo && (
                <img
                  src={pick.project.logo}
                  alt=""
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-2 object-contain shadow-xl ring-1 ring-white/60 sm:h-28 sm:w-28"
                  loading="lazy"
                />
              )}
              <div className="relative z-10 mt-auto p-5 sm:p-6">
                <p className="font-display text-3xl leading-[0.92] tracking-wide text-white sm:text-4xl">{pick.title}</p>
                <p className="mt-2 text-sm text-white/75">{pick.detail}</p>
                <span className="mt-4 inline-flex text-xs font-bold uppercase tracking-[0.2em] text-white">
                  Open Original <span aria-hidden className="ml-2">↗</span>
                </span>
              </div>
            </motion.button>
          ))}
        </div>
        <RailButtons rail={rail} />
      </div>
    </>
  );
}
