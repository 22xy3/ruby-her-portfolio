/* ═══════════════════════════════════════════════════════
   NAVIGATION — Top nav, side nav, mobile menu
   ═══════════════════════════════════════════════════════ */

export function initNavigation() {
  const tnav = document.getElementById('tnav');
  const vnav = document.getElementById('vnav');
  const ham = document.getElementById('ham');
  const mobMenu = document.getElementById('mobMenu');
  const hero = document.getElementById('hero');

  if (!tnav || !hero) return;

  const heroHeight = hero.offsetHeight;

  // Scroll-aware nav
  function onScroll() {
    const y = window.scrollY;

    if (y > 80) {
      tnav.classList.add('solid');
    } else {
      tnav.classList.remove('solid');
    }

    if (vnav) {
      if (y > heroHeight - 100) {
        vnav.classList.add('light');
      } else {
        vnav.classList.remove('light');
      }
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger toggle
  if (ham && mobMenu) {
    ham.addEventListener('click', () => {
      const isOpen = mobMenu.classList.contains('open');
      mobMenu.classList.toggle('open');
      ham.classList.toggle('on');
      ham.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    mobMenu.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        mobMenu.classList.remove('open');
        ham.classList.remove('on');
        ham.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
