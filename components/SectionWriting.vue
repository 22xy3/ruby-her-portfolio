<template>
  <section class="writing-sec" id="writing">
    <div class="writing-header rv">
      <p class="writing-eyebrow">Published work</p>
      <h2 class="writing-title" data-split>Words that landed.</h2>
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
</script>
