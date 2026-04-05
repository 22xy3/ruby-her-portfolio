/* ═══════════════════════════════════════════════════════
   DRAGGABLE — Physics-based drag for footer blobs
   Spring-back with momentum and boundary constraints
   ═══════════════════════════════════════════════════════ */

export function initDraggable() {
  const blobs = document.querySelectorAll('.bf-blob');
  if (!blobs.length) return;

  blobs.forEach((blob) => {
    let isDragging = false;
    let startX, startY, currentX = 0, currentY = 0;
    let velocityX = 0, velocityY = 0;
    let lastX, lastY, lastTime;
    let animFrame;

    // Store initial transform for combining with drag
    const initialRotation = blob.dataset.rotation || '0';

    function onPointerDown(e) {
      isDragging = true;
      blob.classList.add('dragging');
      startX = (e.clientX || e.touches?.[0]?.clientX) - currentX;
      startY = (e.clientY || e.touches?.[0]?.clientY) - currentY;
      lastX = e.clientX || e.touches?.[0]?.clientX;
      lastY = e.clientY || e.touches?.[0]?.clientY;
      lastTime = Date.now();
      cancelAnimationFrame(animFrame);
      e.preventDefault();
    }

    function onPointerMove(e) {
      if (!isDragging) return;
      const x = (e.clientX || e.touches?.[0]?.clientX);
      const y = (e.clientY || e.touches?.[0]?.clientY);

      currentX = x - startX;
      currentY = y - startY;

      // Track velocity
      const now = Date.now();
      const dt = now - lastTime;
      if (dt > 0) {
        velocityX = (x - lastX) / dt * 12;
        velocityY = (y - lastY) / dt * 12;
      }
      lastX = x;
      lastY = y;
      lastTime = now;

      blob.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${initialRotation}deg)`;
    }

    function onPointerUp() {
      if (!isDragging) return;
      isDragging = false;
      blob.classList.remove('dragging');

      // Apply momentum then spring back
      const friction = 0.92;
      const springStrength = 0.06;

      function animate() {
        // Apply friction to velocity
        velocityX *= friction;
        velocityY *= friction;

        // Spring back toward origin
        const springX = -currentX * springStrength;
        const springY = -currentY * springStrength;
        velocityX += springX;
        velocityY += springY;

        currentX += velocityX;
        currentY += velocityY;

        blob.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${initialRotation}deg)`;

        // Stop when close enough
        if (Math.abs(velocityX) > 0.1 || Math.abs(velocityY) > 0.1 ||
            Math.abs(currentX) > 0.5 || Math.abs(currentY) > 0.5) {
          animFrame = requestAnimationFrame(animate);
        } else {
          currentX = 0;
          currentY = 0;
          blob.style.transform = `rotate(${initialRotation}deg)`;
        }
      }

      animFrame = requestAnimationFrame(animate);
    }

    // Mouse events
    blob.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    // Touch events
    blob.addEventListener('touchstart', onPointerDown, { passive: false });
    window.addEventListener('touchmove', onPointerMove, { passive: false });
    window.addEventListener('touchend', onPointerUp);
  });
}
