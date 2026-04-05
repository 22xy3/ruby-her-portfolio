/**
 * Sparkle cursor trail — spawns tiny ✦/♥ particles behind the mouse
 * that drift, rotate, and fade out. Rate-limited so it doesn't spam.
 */
export function useSparkleTrail() {
  const init = () => {
    if (import.meta.server) return
    if (window.matchMedia('(hover: none)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const glyphs = ['✦', '✧', '♥', '♡', '✦']
    const colors = ['#D8C8E4', '#B595C8', '#C090C8', '#E0D0E4', '#B898D0']

    let lastSpawn = 0
    const minInterval = 55 // ms between spawns
    const minDistance = 22 // px from last position
    let lastX = 0
    let lastY = 0

    function spawn(x: number, y: number) {
      const el = document.createElement('span')
      el.className = 'sparkle-particle'
      el.textContent = glyphs[Math.floor(Math.random() * glyphs.length)]
      el.style.left = x + 'px'
      el.style.top = y + 'px'
      el.style.color = colors[Math.floor(Math.random() * colors.length)]
      el.style.fontSize = (10 + Math.random() * 10) + 'px'
      const driftX = (Math.random() - 0.5) * 60
      const driftY = -20 - Math.random() * 40
      const rot = (Math.random() - 0.5) * 360
      el.style.setProperty('--drift-x', driftX + 'px')
      el.style.setProperty('--drift-y', driftY + 'px')
      el.style.setProperty('--rot', rot + 'deg')
      document.body.appendChild(el)
      setTimeout(() => el.remove(), 1100)
    }

    document.addEventListener('mousemove', (e) => {
      const now = performance.now()
      const dx = e.clientX - lastX
      const dy = e.clientY - lastY
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (now - lastSpawn < minInterval) return
      if (dist < minDistance) return
      lastSpawn = now
      lastX = e.clientX
      lastY = e.clientY
      spawn(e.clientX + (Math.random() - 0.5) * 14, e.clientY + (Math.random() - 0.5) * 14)
    }, { passive: true })
  }

  return { init }
}
