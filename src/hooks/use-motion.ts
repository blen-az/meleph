"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const REDUCE_QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const query = window.matchMedia(REDUCE_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

/** True when the visitor asked the OS for reduced motion. False on the server. */
export function useReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(REDUCE_QUERY).matches,
    () => false,
  );
}

/** Tracks whether an element is on screen, so loops only run while visible. */
export function useInView<T extends Element>({ once = false, threshold = 0.25 } = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting && once) observer.disconnect();
      },
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [once, threshold]);

  return [ref, inView] as const;
}

/**
 * Advances through `count` beats while visible, waiting `durationOf(i)` ms
 * on each, then loops. Reduced motion pins it to the final beat.
 */
export function useLoopingSequence<T extends Element>(
  count: number,
  durationOf: (index: number) => number,
) {
  const reduce = useReducedMotion();
  const [ref, inView] = useInView<T>();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce || !inView) return;
    const timer = window.setTimeout(
      () => setIndex((i) => (i >= count - 1 ? 0 : i + 1)),
      durationOf(index),
    );
    return () => window.clearTimeout(timer);
  }, [index, inView, reduce, count, durationOf]);

  return [ref, reduce ? count - 1 : index, reduce] as const;
}
