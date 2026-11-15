import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { skillCategories, skillEvidence, type Skill } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';

const HUES = ['#ff3d5a', '#4cc9ff', '#46e3a8', '#ffb547', '#b98bff', '#ff8a5c', '#7ee0ff'];

export default function Skills() {
  const [cat, setCat] = useState(0);

  return (
    <>
      <SectionHeading kicker="Genres" title="My Skill Universe" />

      <div className="gutter grid min-w-0 gap-2 sm:gap-3">
        {skillCategories.map((c, i) => {
          const expanded = i === cat;
          const panelId = `skill-panel-${c.id}`;
          const tabId = `skill-tab-${c.id}`;
          const categoryHue = HUES[i % HUES.length];

          return (
            <section key={c.id} className="min-w-0">
              <button
                type="button"
                id={tabId}
                aria-controls={expanded ? panelId : undefined}
                aria-expanded={expanded}
                onClick={() => setCat(i)}
                className={`group relative flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left transition sm:px-4 sm:py-3 lg:px-5 ${expanded ? 'text-bone' : 'text-smoke hover:text-bone'}`}
              >
                {expanded && <motion.span layoutId="skill-tab" className="absolute inset-0 rounded-lg bg-white/[0.07] ring-1 ring-white/10" transition={{ duration: 0.45, ease: EASE }} />}
                <span className="relative min-w-0">
                  <span className="block font-display text-lg tracking-wide sm:text-xl lg:text-3xl">{c.title}</span>
                  <span className="hidden text-xs text-smoke sm:block">{c.skills.length} skills · {c.subtitle}</span>
                </span>
                <span aria-hidden className="relative shrink-0 text-xl text-crimson-2">{expanded ? '−' : '+'}</span>
              </button>

              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    key={c.id}
                    id={panelId}
                    role="region"
                    aria-labelledby={tabId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="min-w-0 overflow-hidden"
                  >
                    <div className="min-w-0 pb-3 pt-4 sm:pb-5">
                      <p className="mb-4 text-sm text-mist sm:mb-5">
                        <span className="font-semibold text-bone">{c.title}</span> — {c.subtitle}
                      </p>
                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                        {c.skills.map((s) => (
                          <SkillCard key={s.name} skill={s} hue={categoryHue} />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </section>
          );
        })}
      </div>
    </>
  );
}

function SkillCard({ skill, hue }: { skill: Skill; hue: string }) {
  const [open, setOpen] = useState(false);
  const evidence = skillEvidence[skill.name];

  return (
    <motion.button
      type="button"
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
      onClick={() => setOpen((o) => !o)}
      aria-expanded={open}
      variants={{
        hidden: { opacity: 0, y: 24, scale: 0.94, filter: 'blur(6px)' },
        show: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 0.55, ease: EASE } },
        exit: { opacity: 0, y: -12, transition: { duration: 0.2 } },
      }}
      whileHover={{ y: -6 }}
      className="group relative flex min-h-[132px] min-w-0 flex-col overflow-hidden rounded-xl bg-ink-2 p-3 text-left ring-1 ring-white/10 transition-shadow duration-500 hover:ring-white/20 sm:min-h-[148px] sm:p-4"
      style={{ boxShadow: open ? `0 18px 50px -12px ${hue}55, 0 0 0 1px ${hue}66` : undefined }}
    >
      <div aria-hidden className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition duration-500 group-hover:opacity-60" style={{ background: hue }} />
      <motion.span
        className="relative flex h-12 w-12 items-center justify-center rounded-lg font-display text-2xl tracking-wide"
        style={{ background: `${hue}1f`, color: hue, boxShadow: `inset 0 0 0 1px ${hue}55` }}
        animate={open ? { rotate: [0, -8, 8, 0], scale: 1.08 } : { rotate: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        aria-hidden
      >
        {skill.mono}
      </motion.span>
      <span className="relative mt-3 flex min-w-0 flex-wrap items-center gap-2 text-sm font-semibold text-bone sm:mt-4 sm:text-[15px]">
        {skill.name}
        {skill.note && (
          <span className="shrink-0 rounded px-1.5 py-px text-[9px] font-bold uppercase tracking-wider text-ink" style={{ background: hue }}>
            {skill.note}
          </span>
        )}
      </span>
      <AnimatePresence initial={false}>
        {open && evidence && (
          <motion.span
            className="relative mt-2 block text-[11px] leading-snug text-mist"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {evidence.join(' · ')}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
