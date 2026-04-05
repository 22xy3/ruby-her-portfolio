export function useCursor() {
  const init = () => {
    if (import.meta.server) return

    const dot = document.getElementById('cur')
    const ring = document.getElementById('curR')
    if (!dot || !ring) return
    if (window.matchMedia('(hover: none)').matches) return

    let mx = -100, my = -100
    let rx = -100, ry = -100

    document.addEventListener('mousemove', (e) => {
      mx = e.clientX
      my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top = my + 'px'
    })

    ;(function followRing() {
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      requestAnimationFrame(followRing)
    })()

    const hoverTargets = 'a, button, .chip, .adv-card, .showcase, input, select, textarea, .magnetic'

    document.addEventListener('mouseenter', (e) => {
      const t = e.target as HTMLElement
      if (t.matches(hoverTargets) || t.closest(hoverTargets)) {
        dot.classList.add('h')
        ring.classList.add('h')
      }
    }, true)

    document.addEventListener('mouseleave', (e) => {
      const t = e.target as HTMLElement
      if (t.matches(hoverTargets) || t.closest(hoverTargets)) {
        dot.classList.remove('h')
        ring.classList.remove('h')
      }
    }, true)
  }

  return { init }
}
