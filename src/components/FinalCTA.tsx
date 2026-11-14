import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE, Magnetic, Particles } from './fx';
import { SeriesMark } from './Poster';

export default function FinalCTA({
  onReplay,
  onPlayBailaLento,
  onSetDarkTheme,
}: {
  onReplay: () => void;
  onPlayBailaLento: () => void;
  onSetDarkTheme: () => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollTo } = useSmoothScroll();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.2'] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);
  const [easterEggMessage, setEasterEggMessage] = useState('');

  const ctas = [
    { label: 'LinkedIn', href: profile.links.linkedin, cursor: 'link' },
    { label: 'GitHub', href: profile.links.github, cursor: 'link' },
  ];

  return (
    <section id="contact" ref={ref} className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_60%,rgba(229,19,43,0.18),transparent_70%)]" />
      <Particles count={36} />

      <motion.p
        className="relative mb-6 text-[11px] font-bold uppercase tracking-[0.5em] text-crimson-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        The Next Episode
      </motion.p>
      <motion.h2
        className="relative font-display leading-[0.85] text-bone"
        style={{ fontSize: 'clamp(3.4rem, 13vw, 12rem)', scale, opacity }}
      >
        TO BE CONTINUED…
      </motion.h2>

      <motion.div
        className="relative mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
      >
        <p className="font-sans text-2xl font-semibold tracking-[0.2em] text-bone sm:text-3xl">{profile.displayName.toUpperCase()}</p>
        <p className="mt-2 text-xs font-semibold tracking-[0.4em] text-mist sm:text-sm">{profile.role.toUpperCase()}</p>
      </motion.div>

      <motion.div
        className="relative mt-10 flex flex-wrap justify-center gap-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.08, delayChildren: 0.35 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <Magnetic>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              data-cursor="link"
              className="flex min-h-12 items-center gap-2 rounded-full bg-crimson px-7 text-sm font-bold tracking-[0.12em] text-white shadow-[0_0_50px_rgba(229,19,43,0.5)] transition hover:bg-crimson-2"
            >
              <span>▶</span>
              LET&apos;S BUILD
            </a>
          </Magnetic>
        </motion.div>
        {ctas.map((c) => (
          <motion.div key={c.label} variants={{ hidden: { opacity: 0, y: 20, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE } } }}>
            <Magnetic>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                data-cursor={c.cursor}
                className="flex min-h-12 items-center gap-2 rounded-full border border-white/25 px-7 text-sm font-bold tracking-[0.12em] text-bone transition hover:border-bone hover:bg-white/10"
              >
                {c.label.toUpperCase()}
                <span className="text-mist">↗</span>
              </a>
            </Magnetic>
          </motion.div>
        ))}
      </motion.div>
      <footer className="absolute inset-x-0 bottom-0 px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-center">
        <div className="mb-[0.05cm] flex flex-wrap justify-center gap-6 text-xs font-semibold tracking-[0.24em] text-smoke">
          <button type="button" onClick={() => scrollTo(0, { offset: 0 })} className="hover:text-bone">
            ↺ WATCH AGAIN
          </button>
          <button type="button" onClick={onReplay} className="hover:text-bone">
            ▶ REPLAY OPENING
          </button>
        </div>
        <div className="mb-2 flex items-center justify-center text-base">
          <button
            type="button"
            aria-label="P Series Easter egg: switch to dark theme"
            title="P Series Easter egg"
            onClick={() => {
              setEasterEggMessage('Easter egg unlocked! Dark theme activated.');
              onSetDarkTheme();
            }}
            className="rounded-sm transition hover:opacity-75"
          >
            <SeriesMark />
          </button>
        </div>
        {easterEggMessage && (
          <p role="status" className="mb-2 text-sm font-semibold text-bone">
            {easterEggMessage}
          </p>
        )}
        <p className="text-[11px] leading-relaxed text-smoke">
          © {new Date().getFullYear()} {profile.displayName}. A personal, streaming-inspired portfolio — not affiliated with any{' '}
          <button
            type="button"
            onClick={() => {
              setEasterEggMessage(`Hi from developer, ${profile.displayName}!`);
              onPlayBailaLento();
            }}
            className="underline decoration-dotted underline-offset-2 transition hover:text-bone"
          >
            streaming service
          </button>
          .
        </p>
      </footer>
    </section>
  );
}
