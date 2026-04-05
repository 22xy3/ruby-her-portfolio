/* ═══════════════════════════════════════════════════════
   DRAGGABLE — Pick up and drop in a container
   Blobs stay where you drop them. No spring-back.
   ═══════════════════════════════════════════════════════ */

export function initDraggable() {
  const container = document.querySelector('.bf-blobs');
  const blobs = document.querySelectorAll('.bf-blob');
  if (!blobs.length || !container) return;

  blobs.forEach((blob) => {
    let isDragging = false;
    let offsetX, offsetY;
    let currentX = 0, currentY = 0;
    const initialRotation = blob.dataset.rotation || '0';

    // Lift effect
    function lift() {
      blob.classList.add('dragging');
      blob.style.zIndex = 20;
      blob.style.transition = 'box-shadow .2s ease, filter .2s ease';
    }

    // Drop effect — settles with a bounce
    function drop() {
      blob.classList.remove('dragging');
      blob.classList.add('dropping');
      blob.style.zIndex = '';
      blob.style.transition = 'transform .4s cubic-bezier(.34,1.56,.64,1), box-shadow .3s ease, filter .3s ease';

      // Small settle bounce: nudge down 4px then back
      const dropX = currentX;
      const dropY = currentY;
      blob.style.transform = `translate(${dropX}px, ${dropY + 6}px) rotate(${initialRotation}deg) scale(0.98)`;

      setTimeout(() => {
        blob.style.transform = `translate(${dropX}px, ${dropY}px) rotate(${initialRotation}deg) scale(1)`;
      }, 150);

      setTimeout(() => {
        blob.classList.remove('dropping');
        blob.style.transition = '';
      }, 500);
    }

    // Clamp position inside container
    function clamp(val, min, max) {
      return Math.max(min, Math.min(max, val));
    }

    function getContainerBounds() {
      return container.getBoundingClientRect();
    }

    function getBlobSize() {
      return blob.getBoundingClientRect();
    }

    // --- MOUSE ---
    blob.addEventListener('mousedown', (e) => {
      isDragging = true;
      const blobRect = getBlobSize();
      offsetX = e.clientX - blobRect.left - blobRect.width / 2;
      offsetY = e.clientY - blobRect.top - blobRect.height / 2;

      // Calculate current translate from center of blob's original position
      const containerRect = getContainerBounds();
      const blobOrigLeft = blob.offsetLeft;
      const blobOrigTop = blob.offsetTop;

      offsetX = e.clientX - (containerRect.left + blobOrigLeft + blobRect.width / 2) - currentX;
      offsetY = e.clientY - (containerRect.top + blobOrigTop + blobRect.height / 2) - currentY;

      lift();
      e.preventDefault();
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;

      const containerRect = getContainerBounds();
      const blobRect = getBlobSize();
      const blobOrigLeft = blob.offsetLeft;
      const blobOrigTop = blob.offsetTop;

      // Target position relative to blob's original position
      let newX = e.clientX - containerRect.left - blobOrigLeft - blobRect.width / 2 - offsetX;
      let newY = e.clientY - containerRect.top - blobOrigTop - blobRect.height / 2 - offsetY;

      // Clamp within container bounds
      const maxX = containerRect.width - blobOrigLeft - blobRect.width;
      const minX = -blobOrigLeft;
      const maxY = containerRect.height - blobOrigTop - blobRect.height;
      const minY = -blobOrigTop;

      newX = clamp(newX, minX, maxX);
      newY = clamp(newY, minY, maxY);

      currentX = newX;
      currentY = newY;

      blob.style.transition = 'none';
      blob.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${initialRotation}deg) scale(1.05)`;
    });

    window.addEventListener('mouseup', () => {
      if (!isDragging) return;
      isDragging = false;
      drop();
    });

    // --- TOUCH ---
    blob.addEventListener('touchstart', (e) => {
      isDragging = true;
      const touch = e.touches[0];
      const containerRect = getContainerBounds();
      const blobRect = getBlobSize();
      const blobOrigLeft = blob.offsetLeft;
      const blobOrigTop = blob.offsetTop;

      offsetX = touch.clientX - (containerRect.left + blobOrigLeft + blobRect.width / 2) - currentX;
      offsetY = touch.clientY - (containerRect.top + blobOrigTop + blobRect.height / 2) - currentY;

      lift();
      e.preventDefault();
    }, { passive: false });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const touch = e.touches[0];
      const containerRect = getContainerBounds();
      const blobRect = getBlobSize();
      const blobOrigLeft = blob.offsetLeft;
      const blobOrigTop = blob.offsetTop;

      let newX = touch.clientX - containerRect.left - blobOrigLeft - blobRect.width / 2 - offsetX;
      let newY = touch.clientY - containerRect.top - blobOrigTop - blobRect.height / 2 - offsetY;

      const maxX = containerRect.width - blobOrigLeft - blobRect.width;
      const minX = -blobOrigLeft;
      const maxY = containerRect.height - blobOrigTop - blobRect.height;
      const minY = -blobOrigTop;

      newX = clamp(newX, minX, maxX);
      newY = clamp(newY, minY, maxY);

      currentX = newX;
      currentY = newY;

      blob.style.transition = 'none';
      blob.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${initialRotation}deg) scale(1.05)`;
      e.preventDefault();
    }, { passive: false });

    window.addEventListener('touchend', () => {
      if (!isDragging) return;
      isDragging = false;
      drop();
    });
  });
}
