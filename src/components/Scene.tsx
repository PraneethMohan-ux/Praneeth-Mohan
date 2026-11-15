import { useRef, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useTrackProgress } from '../hooks/sectionProgress';

/**
 * A section of the series. Fades up out of black with a short blur-to-focus,
 * and reports viewing progress for the Continue Exploring row.
 */
export default function Scene({ id, children, className = '' }: { id: string; children: ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  useTrackProgress(id, ref);

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0.15, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`relative scroll-mt-16 py-16 sm:py-24 ${className}`}
    >
      {children}
    </motion.section>
  );
}
