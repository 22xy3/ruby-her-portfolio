/* ═══════════════════════════════════════════════════════
   DRAGGABLE — Pick up, carry, drop with gravity
   Blobs fall like deadweight when released
   ═══════════════════════════════════════════════════════ */

export function initDraggable() {
  const container = document.querySelector('.bf-dropzone');
  const blobs = document.querySelectorAll('.bf-blob');
  if (!blobs.length || !container) return;

  blobs.forEach((blob) => {
    let isDragging = false;
    let offsetX = 0, offsetY = 0;
    let posX = 0, posY = 0;
    let velX = 0, velY = 0;
    let lastMouseX = 0, lastMouseY = 0, lastTime = 0;
    let animFrame;
    let settled = false;
    const rotation = parseFloat(blob.dataset.rotation) || 0;

    function getContainerRect() {
      return container.getBoundingClientRect();
    }

    function getBlobRect() {
      // Get size without transforms
      return {
        width: blob.offsetWidth,
        height: blob.offsetHeight
      };
    }

    function getOrigPos() {
      return {
        left: blob.offsetLeft,
        top: blob.offsetTop
      };
    }

    function setTransform(x, y, scale, rot) {
      blob.style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg) scale(${scale})`;
    }

    // --- PICK UP ---
    function pickUp(clientX, clientY) {
      isDragging = true;
      settled = false;
      cancelAnimationFrame(animFrame);

      const cr = getContainerRect();
      const orig = getOrigPos();
      const blobSize = getBlobRect();

      // Offset from blob center to cursor
      const blobCenterX = cr.left + orig.left + blobSize.width / 2 + posX;
      const blobCenterY = cr.top + orig.top + blobSize.height / 2 + posY;
      offsetX = clientX - blobCenterX;
      offsetY = clientY - blobCenterY;

      lastMouseX = clientX;
      lastMouseY = clientY;
      lastTime = performance.now();
      velX = 0;
      velY = 0;

      blob.classList.add('dragging');
      blob.style.zIndex = '20';
      blob.style.transition = 'none';
      setTransform(posX, posY, 1.06, rotation);
    }

    // --- CARRY ---
    function carry(clientX, clientY) {
      if (!isDragging) return;

      const cr = getContainerRect();
      const orig = getOrigPos();
      const blobSize = getBlobRect();

      // New position
      let newX = clientX - cr.left - orig.left - blobSize.width / 2 - offsetX;
      let newY = clientY - cr.top - orig.top - blobSize.height / 2 - offsetY;

      // Clamp inside container
      const minX = -orig.left;
      const maxX = cr.width - orig.left - blobSize.width;
      const minY = -orig.top;
      const maxY = cr.height - orig.top - blobSize.height;

      newX = Math.max(minX, Math.min(maxX, newX));
      newY = Math.max(minY, Math.min(maxY, newY));

      // Track velocity
      const now = performance.now();
      const dt = (now - lastTime) / 1000;
      if (dt > 0) {
        velX = (clientX - lastMouseX) / dt * 0.3;
        velY = (clientY - lastMouseY) / dt * 0.3;
      }
      lastMouseX = clientX;
      lastMouseY = clientY;
      lastTime = now;

      posX = newX;
      posY = newY;
      setTransform(posX, posY, 1.06, rotation);
    }

    // --- DROP WITH GRAVITY ---
    function drop() {
      if (!isDragging) return;
      isDragging = false;
      blob.classList.remove('dragging');
      blob.style.transition = 'none';

      const gravity = 2800; // px/s²
      const bounceDamping = 0.3;
      const friction = 0.97;
      const restThreshold = 0.5;

      let lastFrame = performance.now();

      function simulate(now) {
        const dt = Math.min((now - lastFrame) / 1000, 0.05);
        lastFrame = now;

        const cr = getContainerRect();
        const orig = getOrigPos();
        const blobSize = getBlobRect();

        // Apply gravity
        velY += gravity * dt;
        // Apply horizontal friction
        velX *= friction;

        posX += velX * dt;
        posY += velY * dt;

        // Floor collision
        const maxY = cr.height - orig.top - blobSize.height;
        if (posY >= maxY) {
          posY = maxY;
          velY = -velY * bounceDamping;
          velX *= 0.8; // floor friction
          if (Math.abs(velY) < 30) velY = 0;
        }

        // Ceiling
        const minY = -orig.top;
        if (posY < minY) {
          posY = minY;
          velY = -velY * bounceDamping;
        }

        // Walls
        const minX = -orig.left;
        const maxX = cr.width - orig.left - blobSize.width;
        if (posX < minX) { posX = minX; velX = -velX * bounceDamping; }
        if (posX > maxX) { posX = maxX; velX = -velX * bounceDamping; }

        setTransform(posX, posY, 1, rotation);

        // Check if settled
        if (Math.abs(velX) < restThreshold && Math.abs(velY) < restThreshold && posY >= maxY - 1) {
          posY = maxY;
          setTransform(posX, posY, 1, rotation);
          blob.style.zIndex = '';
          settled = true;
          return;
        }

        animFrame = requestAnimationFrame(simulate);
      }

      animFrame = requestAnimationFrame(simulate);
    }

    // Mouse
    blob.addEventListener('mousedown', (e) => {
      pickUp(e.clientX, e.clientY);
      e.preventDefault();
    });
    window.addEventListener('mousemove', (e) => carry(e.clientX, e.clientY));
    window.addEventListener('mouseup', () => drop());

    // Touch
    blob.addEventListener('touchstart', (e) => {
      pickUp(e.touches[0].clientX, e.touches[0].clientY);
      e.preventDefault();
    }, { passive: false });
    window.addEventListener('touchmove', (e) => {
      if (isDragging) {
        carry(e.touches[0].clientX, e.touches[0].clientY);
        e.preventDefault();
      }
    }, { passive: false });
    window.addEventListener('touchend', () => drop());
  });
}
