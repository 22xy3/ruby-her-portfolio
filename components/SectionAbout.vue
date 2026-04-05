<template>
  <section class="about-sec" id="about">
    <!-- Big bold statement -->
    <div class="about-statement rv">
      <p class="about-eyebrow">About Ruby</p>
      <h2 class="about-big-text">Hmong-American creative strategist driven by storytelling and cultural insight. From healthcare advocacy to content for 15M+ audiences — I bring heart to every campaign.</h2>
    </div>

    <!-- Photo + info card row -->
    <div class="about-grid">
      <div class="about-photo-wrap rv rv-d1">
        <div class="img-reveal">
          <img class="about-photo"
            src="https://media.licdn.com/dms/image/v2/D4E03AQEjGcf5DFcWgg/profile-displayphoto-crop_800_800/B4EZkn7mbwGcAI-/0/1757311559764?e=1776902400&v=beta&t=DLG0hFlq7bCVPgkDzyWbyKhhKcWEkARVBYHtkHXiM70"
            alt="Ruby Her">
        </div>
      </div>

      <div class="about-card rv rv-d2">
        <div class="about-text">
          <p>First-generation college student at UW-Madison pursuing a Bachelor of Business Marketing. My passion for consumer insight started in healthcare — PATCH and Medical College of Wisconsin's StEP-UP program.</p>
          <p>From there I built real experience: Senior Editor &amp; TikTok Support Lead at The Vault, Marketing &amp; PR Outreach Co-Coordinator at Curation Media, and Creative Strategist at Structa Media in Atlanta.</p>
        </div>

        <div class="about-contact">
          <a href="https://linkedin.com/in/rubyherr" target="_blank" rel="noopener noreferrer" class="magnetic" data-strength="0.2">LinkedIn</a>
          <span class="about-dot">♦</span>
          <a href="mailto:her.ruby@outlook.com" class="magnetic" data-strength="0.2">her.ruby@outlook.com</a>
          <span class="about-dot">♦</span>
          <a href="tel:+14145191960" class="magnetic" data-strength="0.2">(414) 519-1960</a>
        </div>
      </div>
    </div>

    <!-- Stats -->
    <div class="about-stats-wrap rv rv-d3">
      <div class="stats-row">
        <div v-for="stat in stats" :key="stat.label">
          <div class="stat-num"><span class="count-up" :data-target="stat.target" :data-suffix="stat.suffix">0</span></div>
          <div class="stat-lbl">{{ stat.label }}</div>
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
