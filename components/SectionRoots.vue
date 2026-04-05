<template>
  <section class="roots-sec" id="advocacy">
    <div class="roots-header rv">
      <p class="roots-eyebrow">Beyond the resume</p>
      <h2 class="roots-title" data-split>Leadership &amp; Involvement</h2>
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
    title: 'Wisconsin State Capitol',
    desc: 'Advocated for Act 266 on behalf of Hmong-American students — legislation for Hmong history and culture in Wisconsin schools. Still in high school at the time.',
  },
  {
    emoji: '🩺',
    title: 'PATCH & StEP-UP',
    desc: 'Providers and Teens Communicating for Health. Medical College of Wisconsin StEP-UP program. Teen representative at the NASW-WI 50th Annual Conference.',
  },
  {
    emoji: '🎓',
    title: 'All-in-Milwaukee Scholar',
    desc: '7th Cohort. High-achieving scholars committed to completing college, building careers, and investing back into Milwaukee.',
  },
  {
    emoji: '✦',
    title: "Milwaukee's Finest & Kelben Scholar",
    desc: 'Merit-based recognition for academic performance and community impact. Bucky Pathway Scholar at UW-Madison.',
  },
]
</script>
