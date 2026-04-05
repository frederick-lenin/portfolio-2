import { lazy, Suspense } from 'solid-js';
import { Router, Route } from '@solidjs/router';
import BackgroundCanvas from './components/BackgroundCanvas';
import GradientOrbs from './components/GradientOrbs';
import NoiseOverlay from './components/NoiseOverlay';
import Navbar from './components/Navbar';
import './index.css';

// Lazy-loaded pages
const Hero     = lazy(() => import('./pages/Hero'));
const Projects = lazy(() => import('./pages/Projects'));
const About    = lazy(() => import('./pages/About'));
const Contact  = lazy(() => import('./pages/Contact'));

function PageLoader() {
  return (
    <div style={{
      'min-height': '100dvh',
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
    }}>
      <span style={{
        'font-family': 'var(--font-mono)',
        'font-size': 'var(--text-small)',
        color: 'var(--accent-primary)',
        'letter-spacing': '0.1em',
        'text-transform': 'uppercase',
      }}>
        Loading_Module...
      </span>
    </div>
  );
}

function AppShell(props: { children: any }) {
  return (
    <>
      {/* Background Layers — z-index 0, 0, 1 */}
      <BackgroundCanvas />
      <GradientOrbs />
      <NoiseOverlay />

      {/* Navigation — z-index 100 */}
      <Navbar />

      {/* Page Content — z-index 2 */}
      <main style={{ position: 'relative', 'z-index': '2' }}>
        <Suspense fallback={<PageLoader />}>
          {props.children}
        </Suspense>
      </main>
    </>
  );
}

export default function App() {
  return (
    <Router root={AppShell}>
      <Route path="/"        component={Hero} />
      <Route path="/projects" component={Projects} />
      <Route path="/stack"    component={About} />
      <Route path="/contact"  component={Contact} />
      {/* 404 fallback */}
      <Route path="*"        component={Hero} />
    </Router>
  );
}
