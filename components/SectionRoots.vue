<template>
  <section class="roots-sec" id="advocacy">
    <div class="roots-header rv">
      <p class="roots-eyebrow">Where I come from</p>
      <h2 class="roots-title" data-split>The roots run deep.</h2>
    </div>

    <div class="roots-grid">
      <article v-for="(card, i) in cards" :key="card.title"
        class="root-card rv"
        :class="[i === 0 ? 'root-card-lg' : '', i > 0 ? `rv-d${i}` : '']">
        <span class="root-emoji" aria-hidden="true">{{ card.emoji }}</span>
        <h3>{{ card.title }}</h3>
        <p>{{ card.desc }}</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    emoji: '🏛',
    title: 'Presented at the Wisconsin State Capitol',
    desc: 'Advocated for Act 266 on behalf of Hmong-American students — legislation for authentic representation of Hmong history and culture in Wisconsin schools. She was still in high school.',
  },
  {
    emoji: '🩺',
    title: 'Teen Health Educator',
    desc: "Wisconsin PATCH. Attended the NASW-WI 50th Annual Conference as a teen representative — bringing youth voices into rooms where policy was made.",
  },
  {
    emoji: '🎓',
    title: 'All-in-Milwaukee Scholar',
    desc: '7th Cohort. A community of high-achieving scholars committed to completing college, building careers, and transforming Milwaukee.',
  },
  {
    emoji: '✦',
    title: "Milwaukee's Finest & Kelben Scholar",
    desc: 'Recognized for making a difference. Community-rooted, forward-looking, always building for those who come next.',
  },
]
</script>
