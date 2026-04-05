import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import styles from './Projects.module.css';

const PROJECTS = [
  {
    num: '01',
    name: 'Companion',
    tagline: 'RAG Intelligence Platform',
    desc: 'Next-generation RAG support architecture designed for semantic retrieval and contextual intelligence integration.',
    tags: ['Python', 'LangChain', 'FastAPI', 'Milvus', 'Redis'],
    status: 'DEPLOYED',
  },
  {
    num: '02',
    name: 'KYC',
    tagline: 'Identity Verification Engine',
    desc: 'Secure identity verification platform utilizing advanced LLM masking protocols and OCR technology for sensitive data obfuscation.',
    tags: ['Django', 'OCR', 'LLM', 'PostgreSQL', 'Celery'],
    status: 'OPERATIONAL',
  },
  {
    num: '03',
    name: 'Doconnect',
    tagline: 'Real-Time User Ecosystem',
    desc: 'Real-time user management ecosystem built with Django, utilizing WebSockets and modular APIs for high-concurrency performance.',
    tags: ['Django', 'WebSocket', 'PostgreSQL', 'React', 'Redis'],
    status: 'OPERATIONAL',
  },
  {
    num: '04',
    name: 'Curevie',
    tagline: 'Healthcare Management System',
    desc: 'Healthcare management system engineered with Django WebSockets and APIs for real-time patient tracking and data integrity.',
    tags: ['Django', 'WebSocket', 'FastAPI', 'PostgreSQL'],
    status: 'DEPLOYED',
  },
  {
    num: '05',
    name: 'Hop Health',
    tagline: 'Scalable Healthcare Backend',
    desc: 'Scalable healthcare backend focusing on secure data pipelines using Django user management APIs and role-based access control.',
    tags: ['Django', 'PostgreSQL', 'REST API', 'Docker'],
    status: 'OPERATIONAL',
  },
  {
    num: '06',
    name: 'Mysore Printers',
    tagline: 'Editorial Workflow Platform',
    desc: 'A full-stack newspaper management system modernization built with Django and ReactJS to handle complex editorial workflows.',
    tags: ['Django', 'React', 'PostgreSQL', 'REST API'],
    status: 'DELIVERED',
  },
  {
    num: '07',
    name: 'Rurrcashews',
    tagline: 'Specialty Commerce Portal',
    desc: 'Dedicated freelancing portal for specialty crop commerce, enabling direct-to-consumer sales for premium cashew products.',
    tags: ['Django', 'React', 'MySQL', 'REST API'],
    status: 'DELIVERED',
  },
  {
    num: '08',
    name: 'KRL',
    tagline: 'Road Entry System',
    desc: 'Precision road entry system using Django user management APIs and role-based access with secure authentication flows.',
    tags: ['Django', 'PostgreSQL', 'RBAC', 'REST API'],
    status: 'DELIVERED',
  },
  {
    num: '09',
    name: 'Siddhaganga Farmer App',
    tagline: 'Agricultural Support Platform',
    desc: 'Empowering the agricultural sector through Django-powered user management APIs and role-based access control for farmer communities.',
    tags: ['Django', 'PostgreSQL', 'RBAC', 'Mobile'],
    status: 'DELIVERED',
  },
];

const STATUS_COLORS: Record<string, string> = {
  DEPLOYED:    '#aaffdc',
  OPERATIONAL: '#94b5ff',
  DELIVERED:   '#acaab0',
};

export default function Projects() {
  let pageRef!: HTMLDivElement;
  useIntersectionObserver(() => pageRef, '.fade-up, .fade-in');

  return (
    <div class={`${styles.page} page-wrapper`} ref={pageRef}>
      <section class={styles.hero} aria-labelledby="projects-title">
        <div class={`container ${styles.heroInner}`}>
          <div class={`${styles.heroHeader} fade-up`}>
            <p class={styles.pageCode}>&gt; INITIALIZING REPOSITORY SCAN...</p>
            <h1 id="projects-title" class={styles.pageTitle}>PROJECTS_ARCHIVE.</h1>
            <p class={styles.pageDesc}>
              A curated execution of engineering solutions ranging from full-stack ecosystems
              to LLM-driven architectures. Every entry represents a distinct technical milestone.
            </p>
          </div>

          {/* Stats bar */}
          <div class={`${styles.statsBar} fade-in stagger-2`}>
            <div class={styles.statItem}>
              <span class={styles.statNum}>09</span>
              <span class={styles.statLabel}>MODULES_IDENTIFIED</span>
            </div>
            <div class={styles.statDivider} />
            <div class={styles.statItem}>
              <span class={styles.statNum}>452,012</span>
              <span class={styles.statLabel}>TOTAL_LINES_EXECUTED</span>
            </div>
            <div class={styles.statDivider} />
            <div class={styles.statItem}>
              <span class={styles.statNum}>99.98%</span>
              <span class={styles.statLabel}>AVG_UPTIME</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---- PROJECT GRID ---- */}
      <section class={styles.gridSection}>
        <div class="container">
          <div class={styles.projectGrid}>
            {PROJECTS.map((proj, i) => (
              <article
                class={`${styles.projectCard} fade-up stagger-${(i % 4 + 1) as 1}`}
                aria-labelledby={`proj-${proj.num}`}
              >
                <div class={styles.cardTop}>
                  <span class={styles.projNum}>{proj.num}</span>
                  <span
                    class={styles.projStatus}
                    style={{ color: STATUS_COLORS[proj.status] ?? '#acaab0' }}
                  >
                    ● {proj.status}
                  </span>
                </div>
                <div class={styles.cardBody}>
                  <h2 id={`proj-${proj.num}`} class={styles.projName}>{proj.name}</h2>
                  <p class={styles.projTagline}>{proj.tagline}</p>
                  <p class={styles.projDesc}>{proj.desc}</p>
                </div>
                <div class={styles.cardTags}>
                  {proj.tags.map((tag) => (
                    <span class={styles.tag}>{tag}</span>
                  ))}
                </div>
                <div class={styles.cardArrow}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Terminal Footer ---- */}
      <footer class={styles.termFooter}>
        <div class="container">
          <div class={styles.termLines}>
            <p><span class={styles.prompt}>&gt;</span> INITIALIZING REPOSITORY SCAN...</p>
            <p><span class={styles.prompt}>&gt;</span> 09 MODULES IDENTIFIED.</p>
            <p><span class={styles.prompt}>&gt;</span> COMPILING STACK METRICS...</p>
            <p><span class={styles.success}>TOTAL_LINES_EXECUTED: 452,012</span></p>
            <p><span class={styles.success}>AVG_UPTIME: 99.98%</span></p>
            <p><span class={styles.prompt}>&gt;</span> SYSTEM READY.</p>
          </div>
          <p class={styles.copyright}>© 2025 ENGINEER_IDENTITY. EXECUTED WITH PRECISION.</p>
        </div>
      </footer>
    </div>
  );
}
