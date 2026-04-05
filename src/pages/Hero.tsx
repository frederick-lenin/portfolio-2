import { onMount } from 'solid-js';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import styles from './Hero.module.css';

const TECH_STACK = [
  { id: 'CORE_01', name: 'PYTHON' },
  { id: 'CORE_02', name: 'DJANGO' },
  { id: 'CORE_03', name: 'FASTAPI' },
  { id: 'CORE_04', name: 'FLASK' },
  { id: 'UI_01', name: 'REACTJS' },
  { id: 'DATA_01', name: 'POSTGRESQL' },
  { id: 'CACHE_01', name: 'REDIS' },
  { id: 'DATA_02', name: 'MYSQL' },
  { id: 'VECTOR_01', name: 'MILVUS' },
  { id: 'INFRA_01', name: 'DOCKER' },
  { id: 'QUEUE_01', name: 'RABBITMQ' },
  { id: 'TASK_01', name: 'CELERY' },
  { id: 'COMM_01', name: 'WEBSOCKET' },
  { id: 'CORE_05', name: 'LLM' },
  { id: 'TASK_02', name: 'OCR MASKING' },
];

const EXPERIENCE = [
  {
    company: 'Quadance Technologies Pvt. Ltd.',
    role: 'Software Engineer',
    period: 'NOW',
    desc: 'Leading high-performance software initiatives and architectural design. Implementing robust back-end systems with focus on scalability and microservices architecture.',
    current: true,
  },
  {
    company: 'GSA Tech World Pvt. Ltd.',
    role: 'Full Stack Developer',
    period: '2024',
    desc: 'Spearheaded development of enterprise-level applications. Optimized database queries and system performance resulting in 40% reduction in latency.',
    current: false,
  },
  {
    company: 'Coding Crisp',
    role: 'Software Developer',
    period: '2023',
    desc: 'Developed responsive user interfaces and integrated RESTful APIs. Collaborated in Agile environments to deliver sprint goals ahead of schedule.',
    current: false,
  },
];

const TERMINAL_LINES = [
  '$ init_portfolio --user="FrederickLeninD"',
  '[SYSTEM] Scanning capabilities...',
  '[SUCCESS] Backend: Python / FastAPI / Django',
  '[SUCCESS] Frontend: React / TypeScript',
  '[SUCCESS] Infrastructure: Docker / Redis / PostgreSQL',
  '[SUCCESS] Real-time: WebSockets / Celery Workers',
  '[SUCCESS] Intelligence: LangChain / OpenAI Integration',
  '> EXEC_SYSTEM_OPTIMIZE [SUCCESS]',
  '> Pipeline Live ////////////////////',
];

export default function Hero() {
  let pageRef!: HTMLDivElement;
  let termRef!: HTMLParagraphElement;

  useIntersectionObserver(() => pageRef, '.fade-up, .fade-in');

  // Terminal typewriter animation
  onMount(() => {
    if (!termRef) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      termRef.textContent = TERMINAL_LINES.join('\n');
      return;
    }
    let lineIdx = 0;
    let charIdx = 0;
    let text = '';

    const cursor = document.createElement('span');
    cursor.textContent = '_';
    cursor.style.cssText = 'animation: blink 0.9s step-end infinite; color: var(--accent-primary);';

    function type() {
      if (lineIdx >= TERMINAL_LINES.length) {
        termRef.textContent = text;
        termRef.appendChild(cursor);
        return;
      }
      const line = TERMINAL_LINES[lineIdx];
      if (charIdx < line.length) {
        text += line[charIdx];
        charIdx++;
        termRef.textContent = text;
        termRef.appendChild(cursor);
        setTimeout(type, 22);
      } else {
        text += '\n';
        lineIdx++;
        charIdx = 0;
        setTimeout(type, 120);
      }
    }
    setTimeout(type, 800);
  });

  return (
    <div class={`${styles.page} page-wrapper`} ref={pageRef}>
      {/* ---- HERO SECTION ---- */}
      <section class={styles.hero} aria-labelledby="hero-name">
        <div class={`${styles.heroInner} container`}>
          {/* Left: Text Content */}
          <div class={styles.heroContent}>
            <p class={`${styles.heroLabel} fade-in stagger-1`}>
              <span class={styles.labelDot} />
              FULL STACK DEVELOPER / SOFTWARE ENGINEER
            </p>
            <h1 id="hero-name" class={`${styles.heroName} fade-up stagger-2`}>
              FREDERICK<br />LENIN D
            </h1>
            <p class={`${styles.heroTagline} fade-up stagger-3`}>
              Driven by the logic of clean code and the aesthetics of functional design.
              Bridging the gap between complex engineering and seamless user experience.
            </p>

            <div class={`${styles.heroMeta} fade-up stagger-4`}>
              <div class={styles.metaItem}>
                <span class={styles.metaLabel}>Availability</span>
                <span class={`${styles.metaValue} ${styles.metaGreen}`}>High / 90 Days</span>
              </div>
              <div class={styles.metaItem}>
                <span class={styles.metaLabel}>Preference</span>
                <span class={styles.metaValue}>Hybrid / On-Site</span>
              </div>
            </div>

            <div class={`${styles.heroActions} fade-up stagger-5`}>
              <a href="/contact" class="btn-primary">
                Initiate Contact
              </a>
              <a href="/projects" class="btn-ghost">
                View Projects
              </a>
            </div>

            <div class={`${styles.heroSocials} fade-in stagger-6`}>
              <a href="https://github.com/frederick-lenin" target="_blank" rel="noopener noreferrer" class={styles.socialLink}>
                <span>GITHUB</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
              </a>
              <a href="https://linkedin.com/in/frederick-lenin-d" target="_blank" rel="noopener noreferrer" class={styles.socialLink}>
                <span>LINKEDIN</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
              </a>
            </div>
          </div>

          {/* Right: Terminal Block */}
          <div class={`${styles.heroTerminal} fade-in stagger-3`} aria-hidden="true">
            <div class={styles.terminalCard}>
              <div class={styles.terminalHeader}>
                <span class={styles.termDot} style={{ background: '#ff716c' }} />
                <span class={styles.termDot} style={{ background: '#f6c90e' }} />
                <span class={styles.termDot} style={{ background: '#00edb4' }} />
                <span class={styles.termTitle}>architect.sh</span>
              </div>
              <p ref={termRef} class={styles.termContent} />
              <div class={styles.termGlow} />
            </div>

            {/* Stats */}
            <div class={styles.statGrid}>
              <div class={styles.statCard}>
                <span class={styles.statNum}>03</span>
                <span class={styles.statLabel}>Years Active</span>
              </div>
              <div class={styles.statCard}>
                <span class={styles.statNum}>09</span>
                <span class={styles.statLabel}>Projects Shipped</span>
              </div>
              <div class={styles.statCard}>
                <span class={styles.statNum}>15+</span>
                <span class={styles.statLabel}>Technologies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- TECHNICAL ARSENAL ---- */}
      <section class={`${styles.arsenal} section-alt`} aria-labelledby="arsenal-title">
        <div class={`${styles.sectionInner} container`}>
          <div class={`${styles.sectionHeader} fade-up`}>
            <p class={styles.sectionLabel}>System Core Modules v4.2</p>
            <h2 id="arsenal-title" class={styles.sectionTitle}>TECHNICAL ARSENAL</h2>
          </div>
          <div class={styles.techGrid}>
            {TECH_STACK.map((tech, i) => (
              <div class={`${styles.techCard} fade-up stagger-${Math.min(i % 6 + 1, 6) as 1}`}>
                <span class={styles.techId}>{tech.id}</span>
                <span class={styles.techName}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- ENGINEERING EXPERIENCE ---- */}
      <section class={styles.experience} aria-labelledby="exp-title">
        <div class={`${styles.sectionInner} container`}>
          <div class={`${styles.sectionHeader} fade-up`}>
            <p class={styles.sectionLabel}>System Trajectory Log v2.0</p>
            <h2 id="exp-title" class={styles.sectionTitle}>ENGINEERING EXPERIENCE</h2>
            <div class={styles.uptimeBadge}>
              <span class={styles.uptimePulse} />
              <span class={styles.uptimeLabel}>CUMULATIVE_UPTIME: 03 YEARS</span>
            </div>
          </div>
          <div class={styles.timeline}>
            {EXPERIENCE.map((exp, i) => (
              <div class={`${styles.timelineItem} fade-up stagger-${(i + 1) as 1}`}>
                <div class={styles.timelineLeft}>
                  <div class={`${styles.timelineDot} ${exp.current ? styles.dotActive : ''}`} />
                  {i < EXPERIENCE.length - 1 && <div class={styles.timelineLine} />}
                </div>
                <div class={styles.timelineContent}>
                  <div class={styles.timelineMeta}>
                    <span class={`${styles.timelinePeriod} ${exp.current ? styles.periodActive : ''}`}>
                      {exp.period}
                    </span>
                    {exp.current && <span class={styles.currentBadge}>CURRENT</span>}
                  </div>
                  <h3 class={styles.timelineCompany}>{exp.company}</h3>
                  <p class={styles.timelineRole}>{exp.role}</p>
                  <p class={styles.timelineDesc}>{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- PHILOSOPHY / MANIFESTO ---- */}
      <section class={`${styles.manifesto} section-alt`} aria-labelledby="manifesto-title">
        <div class={`${styles.sectionInner} container`}>
          <div class={styles.manifestoGrid}>
            <div class={`${styles.manifestoLeft} fade-up`}>
              <p class={styles.sectionLabel}>Engineering Manifesto</p>
              <h2 id="manifesto-title" class={styles.sectionTitle}>FREDERICK<br />LENIN D.</h2>
              <p class={styles.manifestoQuote}>
                "Driven by the logic of clean code and the aesthetics of functional design.
                My objective is to bridge the gap between complex engineering and seamless user experience."
              </p>
              <div class={styles.manifestoLinks}>
                <a href="https://github.com/frederick-lenin" target="_blank" rel="noopener noreferrer" class={styles.socialLink}>
                  GitHub ↗
                </a>
                <a href="https://linkedin.com/in/frederick-lenin-d" target="_blank" rel="noopener noreferrer" class={styles.socialLink}>
                  LinkedIn ↗
                </a>
              </div>
            </div>
            <div class={`${styles.manifestoRight} fade-up stagger-2`}>
              <div class={styles.codeBlock}>
                <div class={styles.codeHeader}>
                  <span>EngineeringManifesto.ts</span>
                </div>
                <pre class={styles.codePre}>{`export const EngineeringManifesto = () => {
  return {
    efficiency: "Fundamental requirement,
                  not an option",
    methodology: "First-principles mindset",
    coreValues: [
      "Zero-compromise code quality",
      "Asynchronous system design",
      "Automated CI/CD mastery"
    ],
    approach: (problem) => {
      return atomize(problem)
               .scale()
               .optimize();
    }
  };
}`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
