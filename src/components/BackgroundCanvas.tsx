import { onMount, onCleanup } from 'solid-js';
import { useReducedMotion } from '../hooks/useReducedMotion';
import styles from './BackgroundCanvas.module.css';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

const PARTICLE_COUNT_DESKTOP = 55;
const PARTICLE_COUNT_MOBILE  = 22;
const CONNECT_DISTANCE = 160;
const GRID_SPACING = 64;

function isMobile(): boolean {
  return window.innerWidth < 768;
}

function createParticle(w: number, h: number): Particle {
  const speed = 0.18 + Math.random() * 0.22;
  const angle = Math.random() * Math.PI * 2;
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    radius: 1.2 + Math.random() * 1.2,
    opacity: 0.45 + Math.random() * 0.45,
  };
}

export default function BackgroundCanvas() {
  let canvasRef!: HTMLCanvasElement;
  const reducedMotion = useReducedMotion();

  onMount(() => {
    if (reducedMotion()) return;

    const ctx = canvasRef.getContext('2d')!;
    let rafId = 0;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;

    // ---- Resize ----
    function resize() {
      width  = canvasRef.offsetWidth;
      height = canvasRef.offsetHeight;
      canvasRef.width  = width  * devicePixelRatio;
      canvasRef.height = height * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
      const count = isMobile() ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;
      particles = Array.from({ length: count }, () => createParticle(width, height));
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvasRef);
    resize();

    // ---- Visibility ----
    let visible = !document.hidden;
    const onVisChange = () => { visible = !document.hidden; };
    document.addEventListener('visibilitychange', onVisChange);

    // ---- Draw ----
    function drawGrid() {
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(170, 255, 220, 0.03)';
      ctx.lineWidth = 0.5;
      for (let x = 0; x < width; x += GRID_SPACING) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += GRID_SPACING) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();
    }

    function drawParticles() {
      particles.forEach((p) => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(170, 255, 220, ${p.opacity * 0.7})`;
        ctx.fill();
      });
    }

    function drawConnections() {
      const dist = isMobile() ? CONNECT_DISTANCE * 0.7 : CONNECT_DISTANCE;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < dist) {
            const alpha = (1 - d / dist) * 0.2;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(148, 181, 255, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }
    }

    function frame() {
      rafId = requestAnimationFrame(frame);
      if (!visible) return;
      ctx.clearRect(0, 0, width, height);
      drawGrid();
      drawConnections();
      drawParticles();
    }

    rafId = requestAnimationFrame(frame);

    onCleanup(() => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      document.removeEventListener('visibilitychange', onVisChange);
    });
  });

  return (
    <canvas
      ref={canvasRef}
      class={styles.canvas}
      aria-hidden="true"
    />
  );
}
