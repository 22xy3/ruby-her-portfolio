<template>
  <nav class="tnav" :class="{ solid: isScrolled }" role="navigation" aria-label="Main navigation">
    <a href="#hero" class="tnav-logo" @click.prevent="scrollTo('hero')">Ruby Her</a>
    <ul class="tnav-links">
      <li><a href="#sc1" @click.prevent="scrollTo('sc1')">Work</a></li>
      <li><a href="#about" @click.prevent="scrollTo('about')">About</a></li>
      <li><a href="#advocacy" @click.prevent="scrollTo('advocacy')">Advocacy</a></li>
      <li><a href="#contact" @click.prevent="scrollTo('contact')">Contact</a></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const isScrolled = ref(false)

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 80
  }, { passive: true })
})
</script>
