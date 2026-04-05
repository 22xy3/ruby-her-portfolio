export function useTextSplit() {
  const init = () => {
    if (import.meta.server) return

    const targets = document.querySelectorAll<HTMLElement>('[data-split]')

    targets.forEach((el) => {
      const text = el.textContent || ''
      const words = text.split(' ')

      el.innerHTML = ''
      el.setAttribute('aria-label', text)

      words.forEach((word, wi) => {
        const wordSpan = document.createElement('span')
        wordSpan.classList.add('split-word')

        ;[...word].forEach((char, ci) => {
          const s = document.createElement('span')
          s.classList.add('split-char')
          s.textContent = char
          s.style.transitionDelay = `${(wi * 4 + ci) * 0.03}s`
          wordSpan.appendChild(s)
        })

        el.appendChild(wordSpan)
        if (wi < words.length - 1) el.appendChild(document.createTextNode('\u00A0'))
      })
    })

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('split-active')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.3 })

    targets.forEach((el) => observer.observe(el))
  }

  return { init }
}
