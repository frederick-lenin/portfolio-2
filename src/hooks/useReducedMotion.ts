import { createSignal, onMount, onCleanup } from 'solid-js';

/**
 * Returns true if the user has requested reduced motion.
 * Reactively updates if the preference changes at runtime.
 */
export function useReducedMotion(): () => boolean {
  const query = window.matchMedia('(prefers-reduced-motion: reduce)');
  const [reduced, setReduced] = createSignal<boolean>(query.matches);

  onMount(() => {
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    query.addEventListener('change', handler);
    onCleanup(() => query.removeEventListener('change', handler));
  });

  return reduced;
}
