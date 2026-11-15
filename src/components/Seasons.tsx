import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { seasons, type Season } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';
import EpisodeCard from './EpisodeCard';
import { RailButtons } from './Rail';
import { formatDateText } from '../dateFormat';

function EpisodeRail({ season }: { season: Season }) {
  const rail = useRef<HTMLDivElement>(null);

  return (
    <div className="group/rail relative">
      <div className="rail gutter flex snap-x snap-mandatory gap-3 overflow-x-auto py-6 sm:gap-4 sm:py-8 [perspective:1200px]" ref={rail}>
        {season.episodes.map((episode, index) => (
          <EpisodeCard key={episode.code} episode={episode} index={index} />
        ))}
      </div>
      <RailButtons rail={rail} />
    </div>
  );
}

export default function Seasons() {
  const [active, setActive] = useState(0);

  return (
    <>
      <SectionHeading
        kicker={`${seasons.length} Seasons`}
        title="My Journey"
        aside={<p className="max-w-xs text-xs leading-relaxed text-mist sm:text-sm">Choose a season, then swipe or tap an arrow to browse its episodes.</p>}
      />

      <div className="gutter grid gap-2 sm:gap-3">
        {seasons.map((season, i) => {
          const expanded = i === active;
          const tabId = `season-tab-${season.number}`;
          const panelId = `season-panel-${season.number}`;

          return (
            <section key={season.number} className="min-w-0">
              <button
                type="button"
                id={tabId}
                aria-controls={expanded ? panelId : undefined}
                aria-expanded={expanded}
                onClick={() => setActive(i)}
                className={`relative grid w-full grid-cols-[5.5rem_minmax(0,1fr)_auto] items-center gap-2 rounded-xl border px-3 py-2.5 text-left transition sm:grid-cols-[7rem_minmax(0,1fr)_auto] sm:gap-3 sm:px-4 sm:py-3 ${expanded ? 'border-bone/80 text-ink' : 'border-white/10 text-mist hover:border-white/25 hover:text-bone'}`}
              >
                {expanded && <motion.span layoutId="season-pill" className="absolute inset-0 rounded-xl bg-bone" transition={{ duration: 0.5, ease: EASE }} />}
                <span className="relative block text-[9px] font-bold tracking-[0.14em] sm:text-[10px] sm:tracking-[0.18em]">SEASON {String(season.number).padStart(2, '0')}</span>
                <span className="relative block min-w-0 text-xs font-semibold sm:text-sm">{season.title}</span>
                <span aria-hidden className={`relative text-xl ${expanded ? 'text-ink' : 'text-crimson-2'}`}>{expanded ? '−' : '+'}</span>
              </button>

              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    key={season.number}
                    id={panelId}
                    role="region"
                    aria-labelledby={tabId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="min-w-0 overflow-hidden"
                  >
                    <div className="pb-2 pt-4 sm:pb-4">
                      <div className="gutter mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="font-semibold text-smoke">S{String(season.number).padStart(2, '0')}</span>
                        <span className="text-sm text-mist">
                          {formatDateText(season.period)} · {season.episodes.length} {season.episodes.length === 1 ? 'Episode' : 'Episodes'}
                        </span>
                      </div>
                      <p className="gutter max-w-3xl text-sm leading-relaxed text-bone/75 sm:text-[15px]">{season.synopsis}</p>

                      <EpisodeRail season={season} />
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
