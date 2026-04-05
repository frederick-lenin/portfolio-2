import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import styles from './About.module.css';

const CATEGORIES = [
  {
    title: 'Architectural Core',
    desc: 'Foundational languages and high-performance frameworks.',
    icon: '⬡',
    skills: [
      { name: 'Python',   level: 95, note: 'Primary language' },
      { name: 'Django',   level: 90, note: 'Web framework' },
      { name: 'FastAPI',  level: 80, note: 'Async APIs' },
      { name: 'Flask',    level: 80, note: 'Microservices' },
    ],
  },
  {
    title: 'AI & Cognitive Layers',
    desc: 'Generative AI and Large Language Model orchestration.',
    icon: '◈',
    skills: [
      { name: 'LangChain', level: 70, note: 'RAG pipelines' },
      { name: 'OpenAI API', level: 80, note: 'GPT integration' },
      { name: 'LLM Integration', level: 75, note: 'Fine-tuning' },
      { name: 'OCR Masking',   level: 78, note: 'Data security' },
    ],
  },
  {
    title: 'Infrastructure',
    desc: 'Deployment, orchestration, and data persistence.',
    icon: '◫',
    skills: [
      { name: 'Docker',       level: 80, note: 'Containerization' },
      { name: 'PostgreSQL',   level: 88, note: 'Primary DB' },
      { name: 'Redis',        level: 86, note: 'Caching / broker' },
      { name: 'RabbitMQ',     level: 78, note: 'Message queue' },
      { name: 'Celery',       level: 80, note: 'Task workers' },
    ],
  },
  {
    title: 'Interface Layer',
    desc: 'Reactive UI systems and state management.',
    icon: '◻',
    skills: [
      { name: 'ReactJS',    level: 75, note: 'UI library' },
      { name: 'WebSocket',  level: 85, note: 'Real-time' },
      { name: 'MySQL',      level: 80, note: 'Relational DB' },
    ],
  },
];

const DEPLOY_PROTOCOL = [
  { line: '01', text: '$ init_arsenal --user "Frederick Lenin D."', type: 'cmd' },
  { line: '02', text: '[SYSTEM] Scanning capabilities...', type: 'sys' },
  { line: '03', text: '[SUCCESS] Backend: Python / FastAPI / Django', type: 'ok' },
  { line: '04', text: '[SUCCESS] Frontend: React / NextJS / Tailwind', type: 'ok' },
  { line: '05', text: '[SUCCESS] Infrastructure: Docker / Redis / PostgreSQL', type: 'ok' },
  { line: '06', text: '[SUCCESS] Real-time: WebSockets / Celery Workers', type: 'ok' },
  { line: '07', text: '[SUCCESS] Intelligence: LangChain / OpenAI Integration', type: 'ok' },
  { line: '08', text: '> Ready for next architectural challenge_', type: 'ready' },
];

export default function About() {
  let pageRef!: HTMLDivElement;
  useIntersectionObserver(() => pageRef, '.fade-up, .fade-in');

  return (
    <div class={`${styles.page} page-wrapper`} ref={pageRef}>

      {/* ---- HERO HEADER ---- */}
      <section class={styles.hero} aria-labelledby="stack-title">
        <div class="container">
          <div class={`${styles.heroHeader} fade-up`}>
            <p class={styles.pageCode}>Status: Fully Operational // Location: Trivandrum, India // Global</p>
            <h1 id="stack-title" class={styles.pageTitle}>Technical Arsenal.</h1>
            <p class={styles.pageDesc}>
              A precision-engineered collection of languages, frameworks, and infrastructure tools
              utilized to build high-concurrency systems.
            </p>
          </div>
        </div>
      </section>

      {/* ---- SKILL CATEGORIES ---- */}
      <section class={`${styles.categoriesSection} section-alt`} aria-label="Technical skills">
        <div class="container">
          <div class={styles.categoriesGrid}>
            {CATEGORIES.map((cat, ci) => (
              <div class={`${styles.categoryCard} fade-up stagger-${(ci + 1) as 1}`}>
                <div class={styles.catHeader}>
                  <span class={styles.catIcon}>{cat.icon}</span>
                  <div>
                    <h2 class={styles.catTitle}>{cat.title}</h2>
                    <p class={styles.catDesc}>{cat.desc}</p>
                  </div>
                </div>
                <div class={styles.skillList}>
                  {cat.skills.map((skill, si) => (
                    <div class={`${styles.skillItem} fade-in stagger-${(si + 1) as 1}`}>
                      <div class={styles.skillHeader}>
                        <span class={styles.skillName}>{skill.name}</span>
                        <span class={styles.skillNote}>{skill.note}</span>
                        <span class={styles.skillLevel}>{skill.level}%</span>
                      </div>
                      <div class={styles.skillBar}>
                        <div
                          class={styles.skillFill}
                          style={{ '--fill': `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- DEPLOYMENT PROTOCOL ---- */}
      <section class={styles.deploySection} aria-labelledby="deploy-title">
        <div class="container">
          <div class={styles.deployGrid}>
            <div class={`${styles.deployLeft} fade-up`}>
              <p class={styles.sectionLabel}>Deployment_Protocol</p>
              <h2 id="deploy-title" class={styles.sectionTitle}>STACK READOUT</h2>
              <p class={styles.deployDesc}>
                A comprehensive overview of the technical stack maintained at full operational capacity.
                Continuously evolving with industry demands.
              </p>
              <a href="/contact" class="btn-primary">
                Discuss a Project
              </a>
            </div>
            <div class={`${styles.deployRight} fade-up stagger-2`}>
              <div class={styles.terminalBlock}>
                <div class={styles.termHeader}>
                  <span class={styles.termDot} style={{ background: '#ff716c' }} />
                  <span class={styles.termDot} style={{ background: '#f6c90e' }} />
                  <span class={styles.termDot} style={{ background: '#00edb4' }} />
                  <span class={styles.termTitle}>stack_readout.sh</span>
                </div>
                <div class={styles.termBody}>
                  {DEPLOY_PROTOCOL.map((item) => (
                    <div class={`${styles.termLine} ${styles[`term${item.type}`]}`}>
                      <span class={styles.lineNum}>{item.line}</span>
                      <span class={styles.lineText}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- SUPPLEMENTARY TOOLING ---- */}
      <section class={`${styles.toolingSection} section-alt`} aria-labelledby="tooling-title">
        <div class="container">
          <h2 id="tooling-title" class={`${styles.sectionTitle} fade-up`}>Supplementary_Tooling</h2>
          <p class={`${styles.toolingDesc} fade-up stagger-1`}>
            Additional tools and platforms used throughout engineering workflows.
          </p>
          <div class={`${styles.toolingGrid} fade-up stagger-2`}>
            {['Git', 'VS Code', 'Postman', 'Nginx', 'Ubuntu', 'GitHub Actions', 'Jira', 'Figma', 'Milvus', 'Grafana'].map((tool) => (
              <span class="tech-chip">{tool}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
