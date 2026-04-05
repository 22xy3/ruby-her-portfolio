/* ═══════════════════════════════════════════════════════
   FOLDERS — Accordion-style work experience
   ═══════════════════════════════════════════════════════ */

export function initFolders() {
  const folders = document.querySelectorAll('.folder');
  if (!folders.length) return;

  folders.forEach((folder) => {
    const tab = folder.querySelector('.folder-tab');

    tab.addEventListener('click', () => {
      const isOpen = folder.classList.contains('open');

      // Close all folders
      folders.forEach((f) => f.classList.remove('open'));

      // Open clicked one (unless it was already open)
      if (!isOpen) {
        folder.classList.add('open');
      }
    });
  });

  // Open the first folder by default
  if (folders[0]) {
    folders[0].classList.add('open');
  }
}
