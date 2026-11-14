import { useEffect, useSyncExternalStore, type RefObject } from 'react';

/**
 * Tracks how much of each section the visitor has actually watched (0–1),
 * so the "Continue Exploring" progress bars reflect real viewing, not fake numbers.
 */
const progress: Record<string, number> = {};
const listeners = new Set<() => void>();
const trackedSections = new Map<string, HTMLElement>();
let snapshot = { ...progress };
let frame = 0;

function measureProgress() {
  frame = 0;
  const viewportHeight = window.innerHeight;
  let changed = false;

  trackedSections.forEach((el, id) => {
    const rect = el.getBoundingClientRect();
    const seen = (viewportHeight - rect.top) / (rect.height + viewportHeight * 0.25);
    const value = Math.min(1, Math.max(0, seen));
    if ((progress[id] ?? 0) < value) {
      progress[id] = value;
      changed = true;
    }
  });

  if (changed) {
    snapshot = { ...progress };
    listeners.forEach((listener) => listener());
  }
}

function scheduleProgressMeasure() {
  if (!frame) frame = requestAnimationFrame(measureProgress);
}

export function useWatchProgress() {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    () => snapshot,
    () => snapshot,
  );
}

export function useTrackProgress(id: string, ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (trackedSections.size === 0) {
      window.addEventListener('scroll', scheduleProgressMeasure, { passive: true });
      window.addEventListener('resize', scheduleProgressMeasure);
    }
    trackedSections.set(id, el);
    scheduleProgressMeasure();

    return () => {
      trackedSections.delete(id);
      if (trackedSections.size === 0) {
        window.removeEventListener('scroll', scheduleProgressMeasure);
        window.removeEventListener('resize', scheduleProgressMeasure);
        if (frame) cancelAnimationFrame(frame);
        frame = 0;
      }
    };
  }, [id, ref]);
}
