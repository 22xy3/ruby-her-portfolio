/* ═══════════════════════════════════════════════════════
   APP — Orchestrator: loads and initializes all modules
   ═══════════════════════════════════════════════════════ */

import { initLoader } from './loader.js';
import { initCursor } from './cursor.js';
import { initNavigation } from './navigation.js';
import { initScrollReveal, initParallax, initCounters, initImageReveal } from './scroll.js';
import { initMagnetic } from './magnetic.js';
import { initTilt } from './tilt.js';
import { initStackedCards, initLenis } from './stacked-cards.js';
import { initTextSplit } from './text-effects.js';
import { initDraggable } from './draggable.js';
// Scroll progress bar
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
    bar.style.transform = `scaleX(${progress})`;
  }, { passive: true });
}

// Live clock for footer
function initClock() {
  const el = document.getElementById('liveTime');
  if (!el) return;
  function update() {
    const now = new Date();
    const h = now.getHours();
    const m = String(now.getMinutes()).padStart(2, '0');
    const ampm = h >= 12 ? 'PM' : 'AM';
    const h12 = h % 12 || 12;
    el.textContent = `${String(h12).padStart(2, '0')} ${m} ${ampm}`;
  }
  update();
  setInterval(update, 10000);
}

// Start the experience
async function init() {
  // Cursor starts immediately (no waiting)
  initCursor();

  // Wait for the loader to finish its entrance
  await initLoader();

  // Lenis smooth scroll first (must be before ScrollTrigger stuff)
  initLenis();

  // Initialize everything else
  initNavigation();
  initScrollReveal();
  initParallax();
  initCounters();
  initImageReveal();
  initMagnetic();
  initTilt();
  initStackedCards();
  initTextSplit();
  initDraggable();
  initScrollProgress();
  initClock();
}

// Go
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
