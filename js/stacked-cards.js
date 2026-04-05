/* ═══════════════════════════════════════════════════════
   STACKED CARDS — Sticky stack, top card scrolls away
   No fading, no scaling — clean and simple
   ═══════════════════════════════════════════════════════ */

export function initStackedCards() {
  // No GSAP effects needed — pure CSS sticky handles it
}

export function initLenis() {
  if (typeof Lenis === 'undefined' || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis();

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  return lenis;
}
