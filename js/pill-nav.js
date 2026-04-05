/* ═══════════════════════════════════════════════════════
   PILL NAV — Floating pill + full-screen menu overlay
   ═══════════════════════════════════════════════════════ */

export function initPillNav() {
  const pill = document.getElementById('pillNav');
  const label = document.getElementById('pillNavLabel');
  const toggle = document.getElementById('pillNavToggle');
  const overlay = document.getElementById('menuOverlay');

  if (!pill || !toggle || !overlay) return;

  // Show pill after scrolling past hero
  const hero = document.getElementById('hero');
  let pillVisible = false;

  function checkPillVisibility() {
    const threshold = hero ? hero.offsetHeight * 0.5 : 300;
    if (window.scrollY > threshold && !pillVisible) {
      pill.classList.add('visible');
      pillVisible = true;
    } else if (window.scrollY <= threshold && pillVisible && !overlay.classList.contains('open')) {
      pill.classList.remove('visible');
      pillVisible = false;
    }
  }

  window.addEventListener('scroll', checkPillVisibility, { passive: true });
  checkPillVisibility();

  // Update label based on current section
  const sections = [
    { id: 'hero', name: 'HOME' },
    { id: 'about', name: 'ABOUT' },
    { id: 'sc1', name: 'WORK' },
    { id: 'skills', name: 'TOOLKIT' },
    { id: 'advocacy', name: 'ADVOCACY' },
    { id: 'contact', name: 'CONTACT' },
  ];

  function updateLabel() {
    const scrollY = window.scrollY + window.innerHeight * 0.5;
    let current = 'HOME';

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el && el.offsetTop <= scrollY) {
        current = section.name;
      }
    }

    if (label.textContent !== current) {
      label.style.opacity = '0';
      setTimeout(() => {
        label.textContent = current;
        label.style.opacity = '1';
      }, 150);
    }
  }

  label.style.transition = 'opacity .15s ease';
  window.addEventListener('scroll', updateLabel, { passive: true });
  updateLabel();

  // Toggle menu overlay
  let isOpen = false;

  function openMenu() {
    isOpen = true;
    pill.classList.add('open');
    overlay.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    isOpen = false;
    pill.classList.remove('open');
    overlay.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close on menu link click
  overlay.querySelectorAll('.menu-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        closeMenu();
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 400);
      }
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
      closeMenu();
    }
  });
}
