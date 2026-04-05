export function useLenis() {
  const init = () => {
    if (import.meta.server) return

    import('lenis').then(({ default: Lenis }) => {
      import('gsap').then(({ default: gsap }) => {
        import('gsap/ScrollTrigger').then(({ default: ScrollTrigger }) => {
          gsap.registerPlugin(ScrollTrigger)

          const lenis = new Lenis()
          lenis.on('scroll', ScrollTrigger.update)
          gsap.ticker.add((time: number) => { lenis.raf(time * 1000) })
          gsap.ticker.lagSmoothing(0)
        })
      })
    })
  }

  return { init }
}
