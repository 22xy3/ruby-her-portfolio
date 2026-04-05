/* ═══════════════════════════════════════════════════════
   TILT — 3D tilt + glow effect on hover
   ═══════════════════════════════════════════════════════ */

export function initTilt() {
  if (window.matchMedia('(hover: none)').matches) return;

  const cards = document.querySelectorAll('.adv-card, .sc-tag');

  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / centerY * -4;
      const rotateY = (x - centerX) / centerX * 4;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;

      // Glow follows cursor
      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;
      card.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(212, 160, 216, .06) 0%, transparent 60%)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.background = '';
    });
  });

  // Showcase sections get a subtle parallax glow on mouse move
  const showcases = document.querySelectorAll('.showcase');
  showcases.forEach((section) => {
    section.addEventListener('mousemove', (e) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      section.style.setProperty('--glow-x', x + '%');
      section.style.setProperty('--glow-y', y + '%');
    });
  });
}
