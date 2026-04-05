<template>
  <section class="hero" id="hero">
    <!-- Gradient orbs -->
    <div class="hero-orb hero-orb-1" aria-hidden="true"></div>
    <div class="hero-orb hero-orb-2" aria-hidden="true"></div>
    <div class="hero-orb hero-orb-3" aria-hidden="true"></div>

    <!-- Just a few subtle decorations -->
    <span class="hero-deco hero-deco-1" aria-hidden="true">✦</span>
    <span class="hero-deco hero-deco-2" aria-hidden="true">♡</span>
    <span class="hero-deco hero-deco-3" aria-hidden="true">✧</span>

    <!-- "hi, I'm" sticky note -->
    <div class="hero-sticker" aria-hidden="true">
      <span class="hero-sticker-tape"></span>
      <span class="hero-sticker-text">hi, I'm</span>
    </div>

    <!-- NAME -->
    <div class="hero-name">
      <h1>
        <span class="hero-ruby">
          <span class="ruby-letter">R</span>
          <span class="ruby-letter">u</span>
          <span class="ruby-letter">b</span>
          <span class="ruby-letter">y</span>
        </span>
        <span class="hero-her">HER</span>
      </h1>
    </div>

    <!-- Polaroid photo -->
    <div class="hero-polaroid" aria-hidden="true">
      <span class="polaroid-tape"></span>
      <div class="polaroid-frame">
        <img src="https://media.licdn.com/dms/image/v2/D4E03AQEjGcf5DFcWgg/profile-displayphoto-crop_800_800/B4EZkn7mbwGcAI-/0/1757311559764?e=1776902400&v=beta&t=DLG0hFlq7bCVPgkDzyWbyKhhKcWEkARVBYHtkHXiM70"
          alt="Ruby Her">
      </div>
      <span class="polaroid-caption">that's me ✦</span>
    </div>

    <!-- Tagline + CTAs -->
    <div class="hero-bottom">
      <p class="hero-tag">Creative Strategist · Marketing Professional · Advocate</p>
      <p class="hero-desc">Hmong-American · First-Gen · UW-Madison Information Sciences</p>
      <div class="hero-ctas">
        <a href="#sc1" class="hero-cta hero-cta-primary magnetic" data-strength="0.15" @click.prevent="scrollTo('sc1')">
          See the work <span class="cta-arrow">↓</span>
        </a>
        <a href="#contact" class="hero-cta hero-cta-secondary magnetic" data-strength="0.15" @click.prevent="scrollTo('contact')">
          Say hi <span class="cta-heart">♡</span>
        </a>
      </div>
    </div>

    <!-- Running marquee at the bottom -->
    <div class="hero-marquee" aria-hidden="true">
      <div class="hero-marquee-inner">
        <template v-for="n in 2" :key="n">
          <span>creative strategy</span><span class="marquee-dot">✦</span>
          <span>brand storytelling</span><span class="marquee-dot">♡</span>
          <span>first-gen, forever forward</span><span class="marquee-dot">✦</span>
          <span>Hmong-American</span><span class="marquee-dot">♡</span>
          <span>marketing meets culture</span><span class="marquee-dot">✦</span>
          <span>strategy with heart</span><span class="marquee-dot">♡</span>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>
