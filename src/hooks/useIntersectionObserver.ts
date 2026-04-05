import { onMount, onCleanup } from 'solid-js';

interface IntersectionOptions extends IntersectionObserverInit {
  activeClass?: string;
  once?: boolean;
}

export function useIntersectionObserver(
  getRoot: () => HTMLElement | undefined,
  selector: string,
  options: IntersectionOptions = {}
): void {
  const {
    activeClass = 'visible',
    once = true,
    threshold = 0.08,
    rootMargin = '0px 0px -20px 0px',
    ...ioOptions
  } = options;

  onMount(() => {
    const root = getRoot();
    if (!root) return;

    // Check prefers-reduced-motion — if reduced, make all visible immediately
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      root.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        el.classList.add(activeClass);
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(activeClass);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove(activeClass);
          }
        });
      },
      { threshold, rootMargin, ...ioOptions }
    );

    const elements = root.querySelectorAll<HTMLElement>(selector);
    elements.forEach((el) => observer.observe(el));

    onCleanup(() => observer.disconnect());
  });
}

