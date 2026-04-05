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

    <!-- Flyers -->
    <div class="writing-flyers rv rv-d2">
      <p class="writing-flyer-label">Design work</p>
      <div class="writing-flyer-grid">
        <div v-for="(flyer, i) in flyers" :key="flyer.alt"
          class="writing-flyer" :class="`writing-flyer-${i + 1}`">
          <img :src="flyer.src" :alt="flyer.alt" loading="lazy">
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
  { src: '/flyers/hapa-graduation-cord.jpg', alt: 'HAPA Seniors Key Club Graduation Cord flyer' },
  { src: '/flyers/hapa-clean-up-day.jpg', alt: 'HAPA Clean Up Day community event flyer' },
  { src: '/flyers/aapi-day.jpg', alt: 'AAPI Day community celebration flyer' },
]
</script>
