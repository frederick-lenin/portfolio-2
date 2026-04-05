import { createSignal, onMount, onCleanup, Show } from 'solid-js';
import { A } from '@solidjs/router';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { href: '/', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/stack', label: 'Stack' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = createSignal(false);
  const [scrolled, setScrolled] = createSignal(false);

  onMount(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onCleanup(() => window.removeEventListener('scroll', onScroll));
  });

  const closeDrawer = () => setOpen(false);

  // Close on Escape
  onMount(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeDrawer();
    };
    window.addEventListener('keydown', onKey);
    onCleanup(() => window.removeEventListener('keydown', onKey));
  });

  return (
    <>
      <nav class={`${styles.nav} ${scrolled() ? styles.scrolled : ''}`} role="navigation" aria-label="Main navigation">
        <div class={`${styles.inner} container`}>
          {/* Logo */}
          <A href="/" class={styles.logo} onClick={closeDrawer}>
            <span class={styles.logoText}>PORTFOLIO</span>
            {/* <span class={styles.logoSep}>_</span>
            <span class={styles.logoAccent}>NOIR</span> */}
          </A>

          {/* Desktop Nav */}
          <ul class={styles.desktopLinks} role="list">
            {NAV_LINKS.map((link) => (
              <li>
                <A
                  href={link.href}
                  class={styles.navLink}
                  activeClass={styles.navLinkActive}
                  end={link.href === '/'}
                >
                  {link.label}
                </A>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" class={`${styles.ctaBtn} btn-primary`}>
            RESUME
          </a>

          {/* Hamburger */}
          <button
            class={styles.hamburger}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open()}
            aria-controls="mobile-drawer"
            aria-label={open() ? 'Close menu' : 'Open menu'}
          >
            <span class={`${styles.bar} ${open() ? styles.barTop : ''}`} />
            <span class={`${styles.bar} ${open() ? styles.barMid : ''}`} />
            <span class={`${styles.bar} ${open() ? styles.barBot : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Show when={open()}>
        <div
          class={styles.backdrop}
          onClick={closeDrawer}
          aria-hidden="true"
        />
      </Show>

      <div
        id="mobile-drawer"
        class={`${styles.drawer} ${open() ? styles.drawerOpen : ''}`}
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
      >
        <div class={styles.drawerHeader}>
          <span class={styles.drawerTitle}>Navigate</span>
          <button class={styles.closeBtn} onClick={closeDrawer} aria-label="Close menu">
            ✕
          </button>
        </div>
        <ul class={styles.drawerLinks} role="list">
          {NAV_LINKS.map((link, i) => (
            <li class={styles.drawerItem} style={{ '--i': i }}>
              <A
                href={link.href}
                class={styles.drawerLink}
                activeClass={styles.drawerLinkActive}
                end={link.href === '/'}
                onClick={closeDrawer}
              >
                <span class={styles.drawerLinkNum}>0{i + 1}</span>
                {link.label}
              </A>
            </li>
          ))}
        </ul>
        <div class={styles.drawerFooter}>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" class="btn-primary" onClick={closeDrawer} style={{ width: '100%', 'justify-content': 'center', display: 'flex' }}>
            RESUME
          </a>
        </div>
      </div>
    </>
  );
}
