import { createSignal } from 'solid-js';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import styles from './Contact.module.css';

const CONTACTS = [
  {
    id: 'email',
    label: 'Primary_Email',
    value: 'fredericklenind@outlook.com',
    href: 'mailto:fredericklenind@outlook.com',
    copyable: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M2 7l10 7 10-7"/>
      </svg>
    ),
  },
  {
    id: 'phone',
    label: 'Secure_Line',
    value: '+91 8903573397',
    href: 'tel:8903573397',
    copyable: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
      </svg>
    ),
  },
  {
    id: 'location',
    label: 'Base_Location',
    value: 'Trivandrum, India',
    href: 'https://maps.google.com/?q=Trivandrum,India',
    copyable: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
];

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/frederick-lenin',
    desc: 'View source code and repositories',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/fredericklenind',
    desc: 'Professional profile and work history',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  let pageRef!: HTMLDivElement;
  const [copied, setCopied] = createSignal(false);
  const [fromEmail, setFromEmail] = createSignal('');
  const [subject, setSubject] = createSignal('');
  const [message, setMessage] = createSignal('');
  const [sent, setSent] = createSignal(false);

  useIntersectionObserver(() => pageRef, '.fade-up, .fade-in');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('fredericklenind@outlook.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const handleSend = (e: Event) => {
    e.preventDefault();
    if (!fromEmail().trim() || !subject().trim() || !message().trim()) return;
    const body = `From: ${fromEmail()}\n\n${message()}`;
    const mailto = `mailto:fredericklenind@outlook.com?subject=${encodeURIComponent(subject())}&body=${encodeURIComponent(body)}`;
    window.open(mailto, '_self');
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div class={`${styles.page} page-wrapper`} ref={pageRef}>

      {/* ---- HERO ---- */}
      <section class={styles.hero} aria-labelledby="contact-title">
        <div class="container">
          <div class={`${styles.heroHeader} fade-up`}>
            <p class={styles.pageCode}>Establishing_Connection</p>
            <h1 id="contact-title" class={styles.pageTitle}>
              LET'S BUILD<br />THE FUTURE.
            </h1>
            <p class={styles.pageDesc}>
              Frederick Lenin D. is available for high-impact technical roles and
              architectural consulting. Precision-driven engineering for global challenges.
            </p>
          </div>
        </div>
      </section>

      {/* ---- CONTACT CARDS ---- */}
      <section class={`${styles.contactSection} section-alt`} aria-label="Contact information">
        <div class="container">
          <div class={styles.contactGrid}>
            {/* Contact info cards */}
            <div class={styles.infoCol}>
              <div class={`${styles.infoCards} fade-up`}>
                {CONTACTS.map((c, i) => (
                  <a
                    href={c.href}
                    target={c.id === 'location' ? '_blank' : undefined}
                    rel={c.id === 'location' ? 'noopener noreferrer' : undefined}
                    class={`${styles.contactCard} fade-up stagger-${(i + 1) as 1}`}
                    aria-label={`${c.label}: ${c.value}`}
                    onClick={c.copyable ? (e) => { e.preventDefault(); copyEmail(); } : undefined}
                  >
                    <div class={styles.cardIcon}>{c.icon}</div>
                    <div class={styles.cardBody}>
                      <span class={styles.cardLabel}>{c.label}</span>
                      <span class={styles.cardValue}>{c.value}</span>
                    </div>
                    <div class={styles.cardAction}>
                      {c.copyable ? (
                        <span class={styles.copyHint}>
                          {copied() ? '✓ Copied!' : 'Click to copy'}
                        </span>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M7 17L17 7M17 7H7M17 7v10"/>
                        </svg>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Socials col */}
            <div class={`${styles.socialsCol} fade-up stagger-2`}>
              <p class={styles.socialsLabel}>Connect_Via</p>
              <div class={styles.socialCards}>
                {SOCIALS.map((s, i) => (
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    class={`${styles.socialCard} fade-up stagger-${(i + 1) as 1}`}
                  >
                    <div class={styles.socialIcon}>{s.icon}</div>
                    <div class={styles.socialBody}>
                      <span class={styles.socialLabel}>{s.label}</span>
                      <span class={styles.socialDesc}>{s.desc}</span>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class={styles.socialArrow}>
                      <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </a>
                ))}
              </div>

              {/* Status block */}
              <div class={`${styles.statusBlock} fade-up stagger-4`}>
                <div class={styles.statusRow}>
                  <span class={styles.statusDot} />
                  <span class={styles.statusText}>Available for new opportunities</span>
                </div>
                <p class={styles.statusDetail}>Open to full-time roles, consulting, and architectural projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- GET IN TOUCH FORM ---- */}
      <section class={styles.formSection} aria-labelledby="form-title">
        <div class="container">
          <div class={`${styles.formInner} fade-up`}>
            <div class={styles.formHeader}>
              <p class={styles.pageCode}>Transmit_Message</p>
              <h2 id="form-title" class={styles.formTitle}>Get In Touch.</h2>
              <p class={styles.formDesc}>
                Have a project in mind? Send a direct transmission and I'll respond within 24 hours.
              </p>
            </div>

            <form class={styles.form} onSubmit={handleSend} novalidate>
              <div class={styles.fieldGroup}>
                <label class={styles.fieldLabel} for="msg-from">Your Email</label>
                <input
                  id="msg-from"
                  type="email"
                  class={styles.fieldInput}
                  placeholder="you@example.com"
                  value={fromEmail()}
                  onInput={(e) => setFromEmail(e.currentTarget.value)}
                  required
                />
              </div>

              <div class={styles.fieldGroup}>
                <label class={styles.fieldLabel} for="msg-subject">Subject</label>
                <input
                  id="msg-subject"
                  type="text"
                  class={styles.fieldInput}
                  placeholder="e.g. Project Collaboration"
                  value={subject()}
                  onInput={(e) => setSubject(e.currentTarget.value)}
                  required
                  maxLength={120}
                />
              </div>

              <div class={styles.fieldGroup}>
                <label class={styles.fieldLabel} for="msg-body">Message</label>
                <textarea
                  id="msg-body"
                  class={`${styles.fieldInput} ${styles.fieldTextarea}`}
                  placeholder="Describe what you'd like to build or discuss..."
                  value={message()}
                  onInput={(e) => setMessage(e.currentTarget.value)}
                  required
                  rows={5}
                  maxLength={2000}
                />
                <span class={styles.charCount}>{message().length} / 2000</span>
              </div>

              <button
                type="submit"
                class={`${styles.sendBtn} ${sent() ? styles.sendBtnSent : ''}`}
                disabled={!fromEmail().trim() || !subject().trim() || !message().trim()}
              >
                {sent() ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    Transmission Initiated
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                    Transmit_Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ---- FOOTER ---- */}
      <footer class={styles.footer}>
        <div class="container">
          <div class={styles.footerInner}>
            <span class={styles.footerLogo}>
              PORTFOLIO
              {/* <span class={styles.sep}>_</span>NOIR */}
            </span>
            <p class={styles.footerLine}>© 2025 ENGINEER_IDENTITY. EXECUTED WITH PRECISION.</p>
            <div class={styles.footerLinks}>
              <a href="/" class={styles.footerLink}>Experience</a>
              <a href="/projects" class={styles.footerLink}>Projects</a>
              <a href="/stack" class={styles.footerLink}>Stack</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
