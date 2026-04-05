import { Show } from 'solid-js';
import { useReducedMotion } from '../hooks/useReducedMotion';
import styles from './GradientOrbs.module.css';

export default function GradientOrbs() {
  const reduced = useReducedMotion();
  return (
    <Show when={!reduced()}>
      <div class={styles.orbContainer} aria-hidden="true">
        <div class={`${styles.orb} ${styles.orb1}`} />
        <div class={`${styles.orb} ${styles.orb2}`} />
        <div class={`${styles.orb} ${styles.orb3}`} />
      </div>
    </Show>
  );
}
