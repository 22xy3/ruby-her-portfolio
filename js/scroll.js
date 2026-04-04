/* ═══════════════════════════════════════════════════════
   SCROLL — Reveal animations, parallax, counters
   ═══════════════════════════════════════════════════════ */

export function initScrollReveal() {
  const revealElements = document.querySelectorAll('.rv, .rv-left, .rv-right, .rv-scale, .stagger-children, .hr-anim');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('v');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

export function initParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  if (!parallaxElements.length) return;

  let ticking = false;

  function updateParallax() {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    parallaxElements.forEach((el) => {
      const speed = parseFloat(el.dataset.parallax) || 0.1;
      const rect = el.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = elementCenter - viewportHeight / 2;
      const translate = distanceFromCenter * speed * -1;

      el.style.transform = `translateY(${translate}px) rotate(var(--r, 0deg))`;
    });

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });
}

export function initCounters() {
  const counters = document.querySelectorAll('.count-up');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((el) => observer.observe(el));
}

function animateCounter(el) {
  const target = el.dataset.target;
  const suffix = el.dataset.suffix || '';
  const numericTarget = parseInt(target, 10);
  const duration = 1500;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * numericTarget);

    el.textContent = current + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

export function initImageReveal() {
  const images = document.querySelectorAll('.img-reveal');
  if (!images.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Small delay for dramatic effect
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, 200);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  images.forEach((el) => observer.observe(el));
}
