/* ═══════════════════════════════════════════════════════
   DRAGGABLE — Kinetic sand / deadweight physics
   Blobs collide, push each other, spill like water
   ═══════════════════════════════════════════════════════ */

export function initDraggable() {
  const container = document.querySelector('.bf-dropzone');
  const blobEls = document.querySelectorAll('.bf-blob');
  if (!blobEls.length || !container) return;

  const blobs = [];
  let draggedIndex = -1;

  // Initialize blob physics state
  blobEls.forEach((el, i) => {
    const rotation = parseFloat(el.dataset.rotation) || 0;
    blobs.push({
      el,
      rotation,
      x: 0, y: 0,
      vx: 0, vy: 0,
      width: el.offsetWidth,
      height: el.offsetHeight,
      origLeft: el.offsetLeft,
      origTop: el.offsetTop,
      isDragging: false,
      offsetX: 0, offsetY: 0,
    });
  });

  const gravity = 1800;
  const bounceDamp = 0.25;
  const friction = 0.94;
  const pushForce = 600;
  let running = false;

  function getRect() { return container.getBoundingClientRect(); }

  function setPos(b) {
    b.el.style.transform = `translate(${b.x}px, ${b.y}px) rotate(${b.rotation}deg)`;
  }

  // Refresh blob measurements
  function measure() {
    blobs.forEach((b) => {
      b.width = b.el.offsetWidth;
      b.height = b.el.offsetHeight;
      b.origLeft = b.el.offsetLeft;
      b.origTop = b.el.offsetTop;
    });
  }

  // Drop all blobs — they start at CSS position and fall
  function dropAll() {
    measure();
    // Give each a random nudge so they spread when falling
    blobs.forEach((b, i) => {
      b.x = 0;
      b.y = 0;
      b.vx = (Math.random() - 0.5) * 200;
      b.vy = 50;
      setPos(b);
    });
    startSim();
  }

  // Collision between two blobs (AABB)
  function collide(a, b) {
    const cr = getRect();
    const ax = a.origLeft + a.x;
    const ay = a.origTop + a.y;
    const bx = b.origLeft + b.x;
    const by = b.origTop + b.y;

    const overlapX = Math.min(ax + a.width, bx + b.width) - Math.max(ax, bx);
    const overlapY = Math.min(ay + a.height, by + b.height) - Math.max(ay, by);

    if (overlapX > 0 && overlapY > 0) {
      // Push direction
      const cx = (ax + a.width / 2) - (bx + b.width / 2);
      const cy = (ay + a.height / 2) - (by + b.height / 2);
      const len = Math.sqrt(cx * cx + cy * cy) || 1;

      // The non-dragged blob gets pushed
      if (a.isDragging) {
        b.vx += (cx / len) * -pushForce * 0.5;
        b.vy += (cy / len) * -pushForce * 0.3;
      } else if (b.isDragging) {
        a.vx += (cx / len) * pushForce * 0.5;
        a.vy += (cy / len) * pushForce * 0.3;
      } else {
        // Both free — gentle push apart
        const push = 2;
        a.vx += (cx / len) * push;
        b.vx -= (cx / len) * push;
      }
    }
  }

  // Physics loop
  function simulate() {
    const cr = getRect();
    const dt = 1 / 60;

    blobs.forEach((b, i) => {
      if (b.isDragging) return;

      // Gravity
      b.vy += gravity * dt;
      b.vx *= friction;

      b.x += b.vx * dt;
      b.y += b.vy * dt;

      // Floor
      const maxY = cr.height - b.origTop - b.height;
      if (b.y > maxY) {
        b.y = maxY;
        b.vy = -b.vy * bounceDamp;
        b.vx *= 0.85;
        if (Math.abs(b.vy) < 15) b.vy = 0;
      }

      // Ceiling
      const minY = -b.origTop;
      if (b.y < minY) { b.y = minY; b.vy = -b.vy * bounceDamp; }

      // Walls
      const minX = -b.origLeft;
      const maxX = cr.width - b.origLeft - b.width;
      if (b.x < minX) { b.x = minX; b.vx = -b.vx * bounceDamp; }
      if (b.x > maxX) { b.x = maxX; b.vx = -b.vx * bounceDamp; }

      setPos(b);
    });

    // Collisions
    for (let i = 0; i < blobs.length; i++) {
      for (let j = i + 1; j < blobs.length; j++) {
        collide(blobs[i], blobs[j]);
      }
    }

    // Keep running if anything is moving or being dragged
    const anyMoving = blobs.some(b => b.isDragging || Math.abs(b.vx) > 0.5 || Math.abs(b.vy) > 0.5);
    if (anyMoving) {
      requestAnimationFrame(simulate);
    } else {
      running = false;
    }
  }

  function startSim() {
    if (!running) {
      running = true;
      requestAnimationFrame(simulate);
    }
  }

  // Drag handlers
  blobs.forEach((b, i) => {
    function pickUp(clientX, clientY) {
      measure();
      b.isDragging = true;
      draggedIndex = i;
      b.vx = 0;
      b.vy = 0;

      const cr = getRect();
      const cx = cr.left + b.origLeft + b.width / 2 + b.x;
      const cy = cr.top + b.origTop + b.height / 2 + b.y;
      b.offsetX = clientX - cx;
      b.offsetY = clientY - cy;

      b.el.classList.add('dragging');
      b.el.style.zIndex = '20';
      b.el.style.transition = 'none';
      startSim();
    }

    function carry(clientX, clientY) {
      if (!b.isDragging) return;
      const cr = getRect();

      let newX = clientX - cr.left - b.origLeft - b.width / 2 - b.offsetX;
      let newY = clientY - cr.top - b.origTop - b.height / 2 - b.offsetY;

      const minX = -b.origLeft;
      const maxX = cr.width - b.origLeft - b.width;
      const minY = -b.origTop;
      const maxY = cr.height - b.origTop - b.height;

      // Track velocity from movement
      b.vx = (newX - b.x) * 8;
      b.vy = (newY - b.y) * 8;

      b.x = Math.max(minX, Math.min(maxX, newX));
      b.y = Math.max(minY, Math.min(maxY, newY));
      setPos(b);
    }

    function drop() {
      if (!b.isDragging) return;
      b.isDragging = false;
      draggedIndex = -1;
      b.el.classList.remove('dragging');
      b.el.style.zIndex = '';
      // velocity is already set from carry — gravity takes over
      startSim();
    }

    b.el.addEventListener('mousedown', (e) => { pickUp(e.clientX, e.clientY); e.preventDefault(); });
    window.addEventListener('mousemove', (e) => carry(e.clientX, e.clientY));
    window.addEventListener('mouseup', () => drop());

    b.el.addEventListener('touchstart', (e) => { pickUp(e.touches[0].clientX, e.touches[0].clientY); e.preventDefault(); }, { passive: false });
    window.addEventListener('touchmove', (e) => { if (b.isDragging) { carry(e.touches[0].clientX, e.touches[0].clientY); e.preventDefault(); } }, { passive: false });
    window.addEventListener('touchend', () => drop());
  });

  // Drop them all on load — they fall and pile up
  setTimeout(dropAll, 300);
}
