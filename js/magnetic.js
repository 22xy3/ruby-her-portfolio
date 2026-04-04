/* ═══════════════════════════════════════════════════════
   MAGNETIC — Buttons that subtly pull toward the cursor
   ═══════════════════════════════════════════════════════ */

export function initMagnetic() {
  if (window.matchMedia('(hover: none)').matches) return;

  const elements = document.querySelectorAll('.magnetic');

  elements.forEach((el) => {
    const strength = parseFloat(el.dataset.strength) || 0.3;

    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      el.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0, 0)';
    });
  });
}
