/* ═══════════════════════════════════════════════════════
   STACKED CARDS — GSAP ScrollTrigger pin + scale
   Reverse-engineered from jazzicreates.tv folder effect
   ═══════════════════════════════════════════════════════ */

export function initStackedCards() {
  // GSAP and ScrollTrigger loaded via CDN (global scope)
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn('GSAP or ScrollTrigger not loaded');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const cards = gsap.utils.toArray('.card');
  if (!cards.length) return;

  // Pin each card — short pin duration so they stack tight
  cards.forEach((card, i) => {
    ScrollTrigger.create({
      trigger: card,
      start: 'top top',
      end: () => `+=${(cards.length - i) * 40}%`,
      pin: true,
      pinSpacing: true,
    });

    // Scale down previous card as current one slides over
    if (i > 0) {
      const prevInner = cards[i - 1].querySelector('.card-inner');
      if (prevInner) {
        gsap.to(prevInner, {
          scale: 0.95,
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
        });
      }
    }
  });
}

export function initLenis() {
  if (typeof Lenis === 'undefined' || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn('Lenis not loaded');
    return;
  }

  const lenis = new Lenis();

  // Sync Lenis scroll position with GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return lenis;
}
