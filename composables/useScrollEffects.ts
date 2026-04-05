export function useScrollEffects() {
  const initReveal = () => {
    if (import.meta.server) return
    const els = document.querySelectorAll('.rv, .rv-left, .rv-right, .rv-scale, .stagger-children, .hr-anim')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('v')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })
    els.forEach((el) => observer.observe(el))
  }

  const initParallax = () => {
    if (import.meta.server) return
    const els = document.querySelectorAll<HTMLElement>('[data-parallax]')
    if (!els.length) return

    let ticking = false
    function update() {
      const vh = window.innerHeight
      els.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || '0.1')
        const rect = el.getBoundingClientRect()
        const center = rect.top + rect.height / 2
        const dist = center - vh / 2
        el.style.transform = `translateY(${dist * speed * -1}px) rotate(var(--r, 0deg))`
      })
      ticking = false
    }

    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true }
    }, { passive: true })
  }

  const initCounters = () => {
    if (import.meta.server) return
    const counters = document.querySelectorAll<HTMLElement>('.count-up')
    if (!counters.length) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target as HTMLElement)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })

    counters.forEach((el) => observer.observe(el))
  }

  const initImageReveal = () => {
    if (import.meta.server) return
    const imgs = document.querySelectorAll('.img-reveal')
    if (!imgs.length) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('revealed'), 200)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.3 })
    imgs.forEach((el) => observer.observe(el))
  }

  return { initReveal, initParallax, initCounters, initImageReveal }
}

function animateCounter(el: HTMLElement) {
  const target = parseInt(el.dataset.target || '0', 10)
  const suffix = el.dataset.suffix || ''
  const duration = 1500
  const start = performance.now()

  function update(now: number) {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    el.textContent = Math.round(eased * target) + suffix
    if (progress < 1) requestAnimationFrame(update)
  }
  requestAnimationFrame(update)
}
