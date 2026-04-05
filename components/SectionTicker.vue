<template>
  <div class="ticker" :class="variant" aria-hidden="true">
    <div class="ticker-in">
      <span v-for="(item, i) in doubledItems" :key="i">{{ item }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  items: string[]
  variant?: string
}>()

const doubledItems = computed(() => {
  const withStars: string[] = []
  props.items.forEach((item) => { withStars.push(item, '✦') })
  return [...withStars, ...withStars]
})
</script>
