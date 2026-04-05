<template>
  <div class="scroll-progress" ref="bar" aria-hidden="true"></div>
</template>

<script setup lang="ts">
const bar = ref<HTMLElement | null>(null)

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (!bar.value) return
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = docHeight > 0 ? scrollTop / docHeight : 0
    bar.value.style.transform = `scaleX(${progress})`
  }, { passive: true })
})
</script>
