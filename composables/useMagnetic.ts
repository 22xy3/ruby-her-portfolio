export function useMagnetic() {
  const init = () => {
    if (import.meta.server) return
    if (window.matchMedia('(hover: none)').matches) return

    document.querySelectorAll<HTMLElement>('.magnetic').forEach((el) => {
      const strength = parseFloat(el.dataset.strength || '0.3')

      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect()
        const dx = (e.clientX - (rect.left + rect.width / 2)) * strength
        const dy = (e.clientY - (rect.top + rect.height / 2)) * strength
        el.style.transform = `translate(${dx}px, ${dy}px)`
      })

      el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0, 0)'
      })
    })
  }

  return { init }
}
