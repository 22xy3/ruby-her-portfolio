<template>
  <section class="hero" id="hero">
    <!-- Gradient orbs -->
    <div class="hero-orb hero-orb-1" aria-hidden="true"></div>
    <div class="hero-orb hero-orb-2" aria-hidden="true"></div>
    <div class="hero-orb hero-orb-3" aria-hidden="true"></div>

    <!-- Ghost watermark behind name -->
    <div class="hero-ghost" aria-hidden="true" data-parallax="0.05">Ruby</div>

    <!-- Status pill top-left -->
    <div class="hero-status">
      <span class="hero-status-dot"></span>
      <span class="hero-status-text">Available for opportunities</span>
    </div>

    <!-- Location pill top-right (above nav is tricky; put below under status) -->
    <div class="hero-locale">
      <span class="hero-locale-label">Madison, WI</span>
      <span class="hero-locale-sep">—</span>
      <span class="hero-locale-coord">43.0731° N</span>
    </div>

    <!-- Floating sparkle decorations -->
    <span class="hero-deco hero-deco-1" aria-hidden="true">✦</span>
    <span class="hero-deco hero-deco-2" aria-hidden="true">♥</span>
    <span class="hero-deco hero-deco-3" aria-hidden="true">✧</span>
    <span class="hero-deco hero-deco-4" aria-hidden="true">♡</span>
    <span class="hero-deco hero-deco-5" aria-hidden="true">✦</span>
    <span class="hero-deco hero-deco-6" aria-hidden="true">✧</span>
    <span class="hero-deco hero-deco-7" aria-hidden="true">✦</span>

    <!-- Faint floating script accents -->
    <span class="hero-script hero-script-1">storyteller</span>
    <span class="hero-script hero-script-2">advocate</span>
    <span class="hero-script hero-script-3">strategy</span>

    <!-- "hi, I'm" sticky note -->
    <div class="hero-sticker" aria-hidden="true">
      <span class="hero-sticker-tape"></span>
      <span class="hero-sticker-text">hi, I'm</span>
    </div>

    <!-- MAIN NAME — layered: outlined behind, filled in front -->
    <div class="hero-name">
      <h1>
        <span class="hero-ruby-outline" aria-hidden="true">Ruby</span>
        <span class="hero-ruby">
          <span class="ruby-letter">R</span>
          <span class="ruby-letter">u</span>
          <span class="ruby-letter">b</span>
          <span class="ruby-letter">y</span>
        </span>
        <span class="hero-her">
          <span class="her-letter">H</span>
          <span class="her-letter">E</span>
          <span class="her-letter">R</span>
        </span>
      </h1>
    </div>

    <!-- Polaroid photo, taped, tilted -->
    <div class="hero-polaroid" aria-hidden="true">
      <span class="polaroid-tape"></span>
      <div class="polaroid-frame">
        <img src="https://media.licdn.com/dms/image/v2/D4E03AQEjGcf5DFcWgg/profile-displayphoto-crop_800_800/B4EZkn7mbwGcAI-/0/1757311559764?e=1776902400&v=beta&t=DLG0hFlq7bCVPgkDzyWbyKhhKcWEkARVBYHtkHXiM70"
          alt="Ruby Her">
      </div>
      <span class="polaroid-caption">that's me ✦</span>
    </div>

    <!-- SVG hand-drawn arrow pointing at polaroid -->
    <svg class="hero-arrow" viewBox="0 0 200 120" aria-hidden="true">
      <path d="M 10 20 Q 60 5, 110 30 T 180 80" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="4 6"/>
      <path d="M 170 70 L 185 82 L 172 92" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <!-- Floating stat badges -->
    <div class="hero-badge hero-badge-1">
      <span class="badge-num">15M+</span>
      <span class="badge-label">audience reach</span>
    </div>
    <div class="hero-badge hero-badge-2">
      <span class="badge-icon">♥</span>
      <span class="badge-text">Bilingual<br><em>Hmong + English</em></span>
    </div>
    <div class="hero-badge hero-badge-3">
      <span class="badge-icon">✦</span>
      <span class="badge-text">All-in-Milwaukee<br><em>7th Cohort</em></span>
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
          Say hi <span class="cta-heart">♥</span>
        </a>
      </div>
    </div>

    <!-- Running marquee at the bottom -->
    <div class="hero-marquee" aria-hidden="true">
      <div class="hero-marquee-inner">
        <template v-for="n in 2" :key="n">
          <span>creative strategy</span><span class="marquee-dot">✦</span>
          <span>brand storytelling</span><span class="marquee-dot">♥</span>
          <span>first-gen, forever forward</span><span class="marquee-dot">✦</span>
          <span>Hmong-American</span><span class="marquee-dot">♥</span>
          <span>marketing meets culture</span><span class="marquee-dot">✦</span>
          <span>strategy with heart</span><span class="marquee-dot">♥</span>
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
