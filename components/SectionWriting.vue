<template>
  <section class="writing-sec" id="writing">
    <div class="writing-header rv">
      <p class="writing-eyebrow">Published work</p>
      <h2 class="writing-title" data-split>My Recent Hits!</h2>
    </div>

    <div class="writing-articles">
      <a v-for="article in articles" :key="article.title"
        :href="article.url" target="_blank" rel="noopener noreferrer"
        class="writing-article rv">
        <span class="writing-article-pub">{{ article.pub }}</span>
        <h3 class="writing-article-title">{{ article.title }}</h3>
        <span class="writing-article-cta">Read on The Vault →</span>
      </a>
    </div>

    <!-- Flyers — playful scattered grid -->
    <div class="flyers-wrap rv rv-d2">
      <p class="flyers-label"><span class="flyers-sparkle">✦</span> Design work <span class="flyers-sparkle">✦</span></p>
      <div class="flyers-grid">
        <div v-for="(flyer, i) in flyers" :key="flyer.alt"
          class="flyer-card" :class="`flyer-card-${i + 1}`">
          <div class="flyer-inner">
            <img :src="flyer.src" :alt="flyer.alt" loading="lazy">
          </div>
          <span class="flyer-tape"></span>
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
  { src: 'https://images.guns.lol/b893d7d182282a7a680f0e2e7baa8e3278bd7f4e/BEo2KL.webp', alt: 'Ruby Her flyer design 1' },
  { src: 'https://images.guns.lol/b893d7d182282a7a680f0e2e7baa8e3278bd7f4e/fgRmQB.webp', alt: 'Ruby Her flyer design 2' },
  { src: 'https://images.guns.lol/b893d7d182282a7a680f0e2e7baa8e3278bd7f4e/4I0Lmc.webp', alt: 'Ruby Her flyer design 3' },
]
</script>
