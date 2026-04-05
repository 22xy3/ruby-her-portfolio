<template>
  <div class="pill-nav" :class="{ visible: pillVisible, open: menuOpen }" aria-label="Page indicator">
    <span class="pill-nav-label" ref="labelEl">{{ currentLabel }}</span>
    <button class="pill-nav-toggle" aria-label="Open menu" :aria-expanded="menuOpen" @click="toggleMenu">
      <span class="pill-nav-bar"></span>
      <span class="pill-nav-bar"></span>
    </button>
  </div>

  <div class="menu-overlay" :class="{ open: menuOpen }" role="dialog" aria-label="Full navigation">
    <div class="menu-overlay-inner">
      <nav class="menu-overlay-nav">
        <a v-for="link in navLinks" :key="link.id" :href="'#' + link.id" class="menu-link" @click.prevent="goTo(link.id)">
          <span class="mask"><span class="line">{{ link.label }}</span><span class="line">{{ link.label }}</span></span>
        </a>
      </nav>
      <div class="menu-overlay-footer">
        <div class="menu-overlay-contact">
          <a href="mailto:her.ruby@outlook.com" class="menu-contact-link">her.ruby@outlook.com</a>
        </div>
        <div class="menu-overlay-socials">
          <a href="https://linkedin.com/in/rubyherr" target="_blank" rel="noopener noreferrer" class="social-link">
            <span class="mask"><span class="line">LinkedIn</span><span class="line">LinkedIn</span></span>
          </a>
          <a href="mailto:her.ruby@outlook.com" class="social-link">
            <span class="mask"><span class="line">Email</span><span class="line">Email</span></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const pillVisible = ref(false)
const menuOpen = ref(false)
const currentLabel = ref('HOME')

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'sc1', label: 'Experience' },
  { id: 'skills', label: 'Toolkit' },
  { id: 'advocacy', label: 'Advocacy' },
  { id: 'contact', label: 'Contact' },
]

const sections = [
  { id: 'hero', name: 'HOME' },
  { id: 'about', name: 'ABOUT' },
  { id: 'sc1', name: 'WORK' },
  { id: 'skills', name: 'TOOLKIT' },
  { id: 'advocacy', name: 'ADVOCACY' },
  { id: 'contact', name: 'CONTACT' },
]

function toggleMenu() {
  menuOpen.value = !menuOpen.value
  document.body.style.overflow = menuOpen.value ? 'hidden' : ''
}

function goTo(id: string) {
  menuOpen.value = false
  document.body.style.overflow = ''
  setTimeout(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, 400)
}

onMounted(() => {
  const hero = document.getElementById('hero')

  function checkVisibility() {
    const threshold = hero ? hero.offsetHeight * 0.5 : 300
    pillVisible.value = window.scrollY > threshold || menuOpen.value
  }

  function updateLabel() {
    const scrollY = window.scrollY + window.innerHeight * 0.5
    let current = 'HOME'
    for (const s of sections) {
      const el = document.getElementById(s.id)
      if (el && el.offsetTop <= scrollY) current = s.name
    }
    currentLabel.value = current
  }

  window.addEventListener('scroll', () => { checkVisibility(); updateLabel() }, { passive: true })
  checkVisibility()
  updateLabel()

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOpen.value) {
      menuOpen.value = false
      document.body.style.overflow = ''
    }
  })
})
</script>
