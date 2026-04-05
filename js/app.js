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
import { initForm } from './form.js';

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
  initForm();
}

// Go
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
