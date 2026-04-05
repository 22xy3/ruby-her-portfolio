<template>
  <section class="linkedin-sec" id="linkedin">
    <div class="linkedin-header rv">
      <p class="linkedin-eyebrow"><span class="li-sparkle">✦</span> In the feed <span class="li-sparkle">✦</span></p>
      <h2 class="linkedin-title" data-split>Don't take my word for it.</h2>
      <p class="linkedin-sub">A little peek at the moments that meant something.</p>
    </div>

    <div class="linkedin-board">
      <!-- Decorative floating elements -->
      <span class="li-doodle li-doodle-1" aria-hidden="true">♡</span>
      <span class="li-doodle li-doodle-2" aria-hidden="true">✦</span>
      <span class="li-doodle li-doodle-3" aria-hidden="true">♡</span>

      <div v-for="(post, i) in posts" :key="post.id"
        class="li-post" :class="`li-post-${i + 1}`">
        <!-- Washi tape on top -->
        <span class="li-tape"></span>
        <!-- Sticky note caption -->
        <span class="li-caption">{{ post.caption }}</span>
        <!-- The embed -->
        <div class="li-embed">
          <iframe
            :src="`https://www.linkedin.com/embed/feed/update/urn:li:share:${post.id}`"
            :height="post.height" width="504" frameborder="0" allowfullscreen
            :title="post.title" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const posts = [
  {
    id: '7432599109607526401',
    title: 'LinkedIn post — Cloud Closet announcement',
    height: 441,
    caption: 'so excited ♡',
  },
  {
    id: '7328223979452678144',
    title: 'LinkedIn post — All-in-Milwaukee Scholars',
    height: 627,
    caption: 'my people ✦',
  },
  {
    id: '7274450282040737792',
    title: 'LinkedIn post — Hmong American advocacy',
    height: 551,
    caption: 'for the culture',
  },
]
</script>
