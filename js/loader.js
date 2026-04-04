/* ═══════════════════════════════════════════════════════
   LOADER — Elegant page entrance
   ═══════════════════════════════════════════════════════ */

export function initLoader() {
  return new Promise((resolve) => {
    const loader = document.getElementById('loader');
    if (!loader) {
      resolve();
      return;
    }

    // Prevent scroll during load
    document.body.style.overflow = 'hidden';

    // Wait for fonts + minimum display time
    const minDelay = new Promise((r) => setTimeout(r, 1800));

    const fontsReady = document.fonts
      ? document.fonts.ready
      : Promise.resolve();

    Promise.all([fontsReady, minDelay]).then(() => {
      loader.classList.add('done');
      document.body.style.overflow = '';

      // Clean up after transition
      setTimeout(() => {
        loader.remove();
        resolve();
      }, 800);
    });
  });
}
