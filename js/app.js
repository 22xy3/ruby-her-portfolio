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
// Fun trivia
function initTrivia() {
  const btn = document.getElementById('triviaBtn');
  const text = document.getElementById('triviaText');
  if (!btn || !text) return;

  const facts = [
    "Ruby presented at the Wisconsin State Capitol as a high schooler advocating for Hmong history in schools.",
    "She's a first-generation college student — the first in her family to attend university.",
    "Ruby has helped create content reaching over 15 million subscribers at Structa Media.",
    "She was named Milwaukee's Finest — a recognition for community-rooted young leaders.",
    "Ruby speaks Hmong and English, bridging cultures through storytelling.",
    "She attended the NASW-WI 50th Annual Conference as a teen representative.",
    "Ruby is an All-in-Milwaukee Scholar, 7th Cohort — committed to transforming her city.",
    "Her path into marketing started as a teen health educator, not in a classroom.",
    "She studies Information Sciences at UW-Madison.",
    "Ruby believes the most powerful stories are the ones we were told didn't matter.",
  ];

  let lastIndex = -1;

  btn.addEventListener('click', () => {
    let idx;
    do { idx = Math.floor(Math.random() * facts.length); } while (idx === lastIndex);
    lastIndex = idx;

    text.style.opacity = '0';
    setTimeout(() => {
      text.textContent = facts[idx];
      text.style.opacity = '1';
    }, 200);
  });

  // Show one on load
  const first = Math.floor(Math.random() * facts.length);
  lastIndex = first;
  text.textContent = facts[first];
  text.style.opacity = '1';
}

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
  initTrivia();
  initScrollProgress();
  initClock();
}

// Go
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
