import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { teamMembers, type TeamMember } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';
import { RailButtons } from './Rail';
import { useScrollLock } from '../hooks/smoothScroll';

const colors = ['#0d5a40', '#0f4c6e', '#6e0d1d', '#3d1a6e', '#6b3c06'];

export default function Team() {
  const rail = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  useScrollLock(selectedMember !== null);

  useEffect(() => {
    if (!selectedMember) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    closeButton.current?.focus({ preventScroll: true });
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedMember(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      previousFocus?.focus?.({ preventScroll: true });
    };
  }, [selectedMember]);

  return (
    <>
      <SectionHeading kicker="The people behind the work" title="My Team Members" />
      <div className="group/rail relative">
        <div ref={rail} className="rail gutter flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
              aria-label={`Open team card for ${member.name}`}
              onClick={() => setSelectedMember(member)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedMember(member);
                }
              }}
              className="team-member-card focus-ring relative flex h-[340px] w-[78vw] shrink-0 snap-start cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-white/10 p-6 text-left transition hover:-translate-y-1 hover:border-white/30 sm:w-[42vw] lg:h-[420px] lg:w-[27vw]"
              style={{
                background: `radial-gradient(100% 80% at 90% 0%, ${colors[index % colors.length]} 0%, transparent 65%), linear-gradient(145deg, #111117, #07070a)`,
              }}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
            >
              <span aria-hidden className="team-member-ghost absolute -right-5 -top-14 font-display text-[15rem] leading-none text-white/[0.06]">
                {member.name.split(/\s+/).map((part) => part[0]).join('').slice(0, 2)}
              </span>
              <div className="relative flex items-center justify-between">
                <span className="team-member-meta text-[10px] font-bold tracking-[0.3em] text-bone/70">TEAM MEMBER {String(index + 1).padStart(2, '0')}</span>
                <span className="team-member-meta rounded-full border border-white/20 px-3 py-1 text-[10px] text-bone/70">{index === 0 ? 'YOU' : 'COLLABORATOR'}</span>
              </div>
              <div className="relative">
                <h3 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[0.92] text-bone">{member.name}</h3>
                <p className="team-member-role mt-3 mb-2 text-[10px] font-bold uppercase tracking-[0.28em] text-[#46e3a8]">{member.role}</p>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-bone/70">{member.impact}</p>
              </div>
              <span className="relative mt-5 text-xs font-bold tracking-[0.18em] text-bone/70">OPEN MEMBER CARD ↗</span>
            </motion.article>
          ))}
        </div>
        <RailButtons rail={rail} />
      </div>
      {createPortal(
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              className="fixed inset-0 z-[150] flex items-center justify-center px-4 py-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                type="button"
                aria-label="Close team member card"
                className="absolute inset-0 bg-black/75 backdrop-blur-md"
                onClick={() => setSelectedMember(null)}
              />
              <motion.article
                role="dialog"
                aria-modal="true"
                aria-labelledby="team-member-dialog-title"
                className="team-member-card relative z-10 max-h-[calc(100svh-3rem)] w-full max-w-xl overflow-x-hidden overflow-y-auto rounded-2xl border border-white/15 p-7 shadow-2xl sm:p-10"
                style={{
                  background: `radial-gradient(100% 80% at 90% 0%, ${colors[teamMembers.indexOf(selectedMember) % colors.length]} 0%, transparent 65%), linear-gradient(145deg, #111117, #07070a)`,
                }}
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.98 }}
                transition={{ duration: 0.25, ease: EASE }}
              >
                <span aria-hidden className="team-member-ghost absolute -right-4 -top-12 font-display text-[13rem] leading-none text-white/[0.06]">
                  {selectedMember.name.split(/\s+/).map((part) => part[0]).join('').slice(0, 2)}
                </span>
                <div className="relative flex items-center justify-between">
                  <span className="team-member-meta text-[10px] font-bold tracking-[0.3em] text-bone/70">TEAM MEMBER</span>
                  <button
                    ref={closeButton}
                    type="button"
                    aria-label="Close team member card"
                    onClick={() => setSelectedMember(null)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-bone transition hover:bg-white/10"
                  >
                    ✕
                  </button>
                </div>
                <div className="relative mt-10">
                  <h3 id="team-member-dialog-title" className="font-display text-[clamp(2.5rem,10vw,4.5rem)] leading-[0.92] text-bone">{selectedMember.name}</h3>
                  <p className="team-member-role mt-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#46e3a8]">{selectedMember.role}</p>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-bone/75">{selectedMember.impact}</p>
                  {selectedMember.linkedin && (
                    <a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="team-member-link mt-7 inline-flex min-h-11 items-center rounded-md border border-white/25 bg-black/20 px-4 text-sm font-semibold text-bone transition hover:border-white/60"
                    >
                      View LinkedIn ↗
                    </a>
                  )}
                </div>
              </motion.article>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
}
