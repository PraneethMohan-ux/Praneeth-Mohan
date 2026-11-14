import { motion } from 'framer-motion';
import type { Project } from '../data/portfolio';
import { EASE, Tilt } from './fx';
import { ProjectArt } from './Poster';

export default function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  return (
    <motion.article
      className="w-[84vw] shrink-0 snap-start sm:w-[62vw] lg:w-[46vw] xl:w-[42vw]"
      initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '0px -10% 0px 0px' }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: EASE }}
    >
      <Tilt max={5} className="group rounded-2xl">
        <div
          role="button"
          tabIndex={0}
          data-cursor="view"
          onClick={onOpen}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onOpen();
            }
          }}
          aria-label={`Open ${project.title}`}
          className="focus-ring group/card relative flex min-h-[620px] flex-col overflow-hidden rounded-2xl bg-ink-2 ring-1 ring-white/10 transition duration-500 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] group-hover:ring-white/25 sm:min-h-[640px] lg:h-[66vh] lg:min-h-[520px]"
        >
          <div className="relative h-48 shrink-0 overflow-hidden sm:h-56 lg:h-[34%]">
            <motion.div layoutId={`art-${project.id}`} className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 transition-transform duration-[1.4s] ease-[var(--ease-cine)] group-hover/card:scale-[1.04]">
                <ProjectArt project={project} />
              </div>
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/20" />
            <div className="absolute inset-x-4 top-4 flex items-center justify-between sm:inset-x-6 sm:top-5">
              <span className="rounded-full border border-white/25 bg-black/35 px-3 py-1 text-[9px] font-bold tracking-[0.28em] text-white backdrop-blur-sm">
                P ORIGINAL
              </span>
              <span className="rounded border border-white/30 bg-black/30 px-2 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
                {project.year}
              </span>
            </div>
            <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-xl ring-1 ring-white/70 sm:h-32 sm:w-32">
              {project.logo ? (
                <img
                  src={project.logo}
                  alt={`${project.title} logo`}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              ) : (
                <span aria-label={`${project.title} mark`} className="font-display text-center text-2xl leading-none tracking-wide text-ink sm:text-3xl">
                  {project.title.split(/\s+/).slice(0, 3).map((word) => word[0]).join('')}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-1 flex-col p-5 sm:p-7">
            <p className="mb-2 line-clamp-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-mist sm:text-[11px] sm:tracking-[0.24em]">{project.genre}</p>
            <motion.h3 layoutId={`title-${project.id}`} className="font-display text-[clamp(2.2rem,5vw,4.6rem)] leading-[0.9] tracking-wide text-bone lg:text-[clamp(2rem,3.6vw,3.8rem)]">
              {project.title}
            </motion.h3>
            <p className="mt-2 line-clamp-3 max-w-md text-[13px] leading-relaxed text-bone/75 sm:mt-3 sm:text-[15px]">{project.logline}</p>
            <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4">
              {project.stack.slice(0, 5).map((t) => (
                <span key={t} className="rounded-full bg-black/35 px-2.5 py-1 text-[11px] font-medium text-bone/90 backdrop-blur">
                  {t}
                </span>
              ))}
              {project.stack.length > 5 && (
                <span className="rounded-full bg-black/35 px-2.5 py-1 text-[11px] font-medium text-mist">
                  +{project.stack.length - 5}
                </span>
              )}
            </div>
            <p className="mt-3 line-clamp-1 text-[11px] text-bone/70 sm:text-xs">
              Team · {project.team.map((member) => member.name).join(' • ')}
            </p>
            <div className="mt-auto flex flex-wrap items-center gap-3 pt-4 sm:pt-5">
              <span className="flex min-h-11 items-center gap-2 rounded-md bg-bone px-5 text-sm font-bold text-ink transition group-hover:bg-white">▶ View Project</span>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="link"
                  onClick={(e) => e.stopPropagation()}
                  className="flex min-h-11 items-center gap-2 rounded-md border border-white/25 bg-black/30 px-4 text-sm font-semibold text-bone backdrop-blur transition hover:border-bone"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.article>
  );
}
