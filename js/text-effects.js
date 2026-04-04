/* ═══════════════════════════════════════════════════════
   TEXT EFFECTS — Letter-by-letter reveal on scroll
   ═══════════════════════════════════════════════════════ */

export function initTextSplit() {
  const splitTargets = document.querySelectorAll('[data-split]');

  splitTargets.forEach((el) => {
    const text = el.textContent;
    const words = text.split(' ');

    el.innerHTML = '';
    el.setAttribute('aria-label', text);

    words.forEach((word, wordIndex) => {
      const wordSpan = document.createElement('span');
      wordSpan.classList.add('split-word');

      [...word].forEach((char, charIndex) => {
        const charSpan = document.createElement('span');
        charSpan.classList.add('split-char');
        charSpan.textContent = char;
        charSpan.style.transitionDelay = `${(wordIndex * 4 + charIndex) * 0.03}s`;
        wordSpan.appendChild(charSpan);
      });

      el.appendChild(wordSpan);

      // Add space between words
      if (wordIndex < words.length - 1) {
        const space = document.createTextNode('\u00A0');
        el.appendChild(space);
      }
    });
  });

  // Observe and trigger
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('split-active');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  splitTargets.forEach((el) => observer.observe(el));
}
