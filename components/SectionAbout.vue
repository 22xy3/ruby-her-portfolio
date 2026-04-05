<template>
  <section class="about-sec" id="about">
    <div class="about-grid">
      <div class="about-photo-wrap rv">
        <div class="img-reveal">
          <img class="about-photo"
            src="https://media.licdn.com/dms/image/v2/D4E03AQEjGcf5DFcWgg/profile-displayphoto-crop_800_800/B4EZkn7mbwGcAI-/0/1757311559764?e=1776902400&v=beta&t=DLG0hFlq7bCVPgkDzyWbyKhhKcWEkARVBYHtkHXiM70"
            alt="Ruby Her, Hmong-American creative strategist and marketing professional">
        </div>
        <p class="about-label-side">Madison, WI · 2026</p>

        <div class="about-links" style="margin-top:2rem">
          <a href="https://linkedin.com/in/rubyherr" target="_blank" rel="noopener noreferrer" class="magnetic" data-strength="0.2">
            <span class="star" style="font-size:.5rem">✦</span> LinkedIn
          </a>
          <a href="mailto:hello@rubyher.com" class="magnetic" data-strength="0.2">
            <span class="star" style="font-size:.5rem">✦</span> hello@rubyher.com
          </a>
        </div>
      </div>

      <div class="about-right rv rv-d1">
        <p class="about-eyebrow">The short version</p>
        <h2 data-split>Hey, I'm Ruby.</h2>

        <div class="about-text">
          <p>Hi there! I am a Hmong-American and first-generation college student at the University of Wisconsin-Madison, pursuing Information Sciences on the pre-business track for Marketing and Management.</p>
          <p>My passion for consumer insight and communication began with my experiences in healthcare, which include PATCH (Providers and Teens Communicating for Health) and Medical College of Wisconsin's StEP-UP program. Alongside healthcare, I have cultivated strong business and leadership experience through my positions as Senior Editor &amp; TikTok Support Lead at The Vault, Marketing &amp; PR Outreach Co-Coordinator at Curation Media, and Creative Strategist at Structa Media.</p>
          <p>As an All-in-Milwaukee, Milwaukee's Finest, and Kelben's Scholar, my long-term goal is to build a career in marketing and communications, where I can combine analytical insight with cultural awareness and creative storytelling. I am eager to continue learning, growing, and contributing to your wonderful organization!</p>
        </div>

        <div class="stats-row rv rv-d2">
          <div v-for="stat in stats" :key="stat.label">
            <div class="stat-num"><span class="count-up" :data-target="stat.target" :data-suffix="stat.suffix">0</span></div>
            <div class="stat-lbl">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { target: '5', suffix: '+', label: 'Roles' },
  { target: '15', suffix: 'M+', label: 'Network Reach' },
  { target: '3', suffix: '', label: 'Scholarships' },
]
</script>
