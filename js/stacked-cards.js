/* ═══════════════════════════════════════════════════════
   STACKED CARDS — Sticky stack with scale-down on scroll
   Clean overlapping folders, no excessive pinning
   ═══════════════════════════════════════════════════════ */

export function initStackedCards() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  const cards = gsap.utils.toArray('.card');
  if (!cards.length) return;

  // Scale down + slight push as each card gets covered by the next
  cards.forEach((card, i) => {
    if (i < cards.length - 1) {
      const inner = card.querySelector('.card-inner');
      if (!inner) return;

      gsap.to(inner, {
        scale: 0.92,
        opacity: 0.5,
        scrollTrigger: {
          trigger: cards[i + 1],
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
        },
      });
    }
  });
}

export function initLenis() {
  if (typeof Lenis === 'undefined' || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const lenis = new Lenis();

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  return lenis;
}
