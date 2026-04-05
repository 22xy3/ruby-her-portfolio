export function useLoader() {
  const init = (): Promise<void> => {
    return new Promise((resolve) => {
      if (import.meta.server) { resolve(); return }

      const loader = document.getElementById('loader')
      if (!loader) { resolve(); return }

      document.body.style.overflow = 'hidden'

      const minDelay = new Promise<void>((r) => setTimeout(r, 1800))
      const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve()

      Promise.all([fontsReady, minDelay]).then(() => {
        loader.classList.add('done')
        document.body.style.overflow = ''
        setTimeout(() => {
          loader.remove()
          resolve()
        }, 800)
      })
    })
  }

  return { init }
}
