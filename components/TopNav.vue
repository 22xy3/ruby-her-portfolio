<template>
  <nav class="tnav" :class="{ solid: isScrolled }" role="navigation" aria-label="Main navigation">
    <a href="#hero" class="tnav-logo" @click.prevent="scrollTo('hero')">Ruby Her</a>
    <ul class="tnav-links">
      <li><a href="#sc1" @click.prevent="scrollTo('sc1')">Work</a></li>
      <li><a href="#about" @click.prevent="scrollTo('about')">About</a></li>
      <li><a href="#advocacy" @click.prevent="scrollTo('advocacy')">Advocacy</a></li>
      <li><a href="#contact" @click.prevent="scrollTo('contact')">Contact</a></li>
    </ul>
    <button class="ham" :class="{ on: mobileOpen }" aria-label="Toggle menu" :aria-expanded="mobileOpen" @click="toggleMobile">
      <span></span><span></span><span></span>
    </button>
  </nav>

  <div class="mob-menu" :class="{ open: mobileOpen }" role="dialog" aria-label="Mobile navigation">
    <a v-for="link in mobileLinks" :key="link.id" :href="'#' + link.id" class="ml" @click.prevent="goMobile(link.id)">{{ link.label }}</a>
  </div>
</template>

<script setup lang="ts">
const isScrolled = ref(false)
const mobileOpen = ref(false)

const mobileLinks = [
  { id: 'sc1', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'advocacy', label: 'Advocacy' },
  { id: 'contact', label: 'Contact' },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value
  document.body.style.overflow = mobileOpen.value ? 'hidden' : ''
}

function goMobile(id: string) {
  mobileOpen.value = false
  document.body.style.overflow = ''
  nextTick(() => scrollTo(id))
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 80
  }, { passive: true })
})
</script>
