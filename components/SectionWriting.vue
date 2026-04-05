<template>
  <section class="writing-sec" id="writing">
    <div class="writing-header rv">
      <p class="writing-eyebrow">Published work</p>
      <h2 class="writing-title" data-split>Words that landed.</h2>
    </div>

    <!-- Articles -->
    <div class="writing-articles">
      <a v-for="article in articles" :key="article.title"
        :href="article.url" target="_blank" rel="noopener noreferrer"
        class="writing-article rv">
        <span class="writing-article-pub">{{ article.pub }}</span>
        <h3 class="writing-article-title">{{ article.title }}</h3>
        <span class="writing-article-cta">Read on The Vault →</span>
      </a>
    </div>

    <!-- Design work -->
    <div class="writing-flyers rv rv-d2">
      <p class="writing-flyer-label">Design work</p>
      <div class="writing-flyer-grid">
        <div v-for="(flyer, i) in flyers" :key="flyer.title"
          class="writing-flyer-card" :class="`writing-flyer-${i + 1}`"
          :style="{ background: flyer.bg }">
          <span class="flyer-emoji">{{ flyer.emoji }}</span>
          <h4 class="flyer-title">{{ flyer.title }}</h4>
          <p class="flyer-desc">{{ flyer.desc }}</p>
          <span class="flyer-org">{{ flyer.org }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const articles = [
  {
    pub: 'The Vault · UW-Madison',
    title: 'Dopamine Through Fashion: Cure the Winter Blues with Color',
    url: 'https://www.thevaultuwmadison.com/blog/dopamine-through-fashion-cure-the-winter-blues-with-color',
  },
  {
    pub: 'The Vault · UW-Madison',
    title: 'Fast Fashion and Student Ethics: Staying Stylish Without Fracturing the Planet or Your Wallet',
    url: 'https://www.thevaultuwmadison.com/blog/fast-fashion-and-student-ethic-staying-stylish-without-fracturing-the-planet-or-your-wallet',
  },
]

const flyers = [
  {
    emoji: '🎓',
    title: 'Key Club Graduation Cord',
    desc: 'Flyer for HAPA seniors to order their Key Club graduation cords.',
    org: 'HAPA Key Club',
    bg: 'linear-gradient(145deg, #e8e6f0, #d0cde0)',
  },
  {
    emoji: '🌿',
    title: 'HAPA Clean Up Day',
    desc: 'Community event flyer — collecting garbage around HAPA to promote environmental health.',
    org: 'HAPA Key Club',
    bg: 'linear-gradient(145deg, #dce8d8, #c8d8c0)',
  },
  {
    emoji: '🏮',
    title: 'AAPI Day Celebration',
    desc: 'Community event with performances, activities, and food honoring Asian American and Pacific Islander month.',
    org: 'HAPA Key Club',
    bg: 'linear-gradient(145deg, #f0e8d8, #e8d8c0)',
  },
]
</script>
