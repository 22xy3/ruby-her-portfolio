<template>
  <section class="about-sec" id="about">
    <div class="about-grid">
      <div class="about-photo-wrap rv">
        <div class="img-reveal">
          <img class="about-photo"
            src="https://media.licdn.com/dms/image/v2/D4E03AQEjGcf5DFcWgg/profile-displayphoto-crop_800_800/B4EZkn7mbwGcAI-/0/1757311559764?e=1776902400&v=beta&t=DLG0hFlq7bCVPgkDzyWbyKhhKcWEkARVBYHtkHXiM70"
            alt="Ruby Her">
        </div>
      </div>

      <div class="about-right rv rv-d1">
        <p class="about-eyebrow">About</p>
        <h2 data-split>Hey, I'm Ruby.</h2>

        <div class="about-text">
          <p>Hmong-American and first-generation college student at the University of Wisconsin-Madison, pursuing a Bachelor of Business Marketing.</p>
          <p>My passion for consumer insight and communication started in healthcare — PATCH and Medical College of Wisconsin's StEP-UP program. From there, I built real experience as Senior Editor &amp; TikTok Support Lead at The Vault, Marketing &amp; PR Outreach Co-Coordinator at Curation Media, and Creative Strategist at Structa Media.</p>
          <p>All-in-Milwaukee Scholar. Milwaukee's Finest. Kelben Scholar. My goal is a career in marketing and communications where analytical insight meets cultural awareness and creative storytelling.</p>
        </div>

        <div class="about-contact rv rv-d2">
          <a href="https://linkedin.com/in/rubyherr" target="_blank" rel="noopener noreferrer" class="magnetic" data-strength="0.2">LinkedIn</a>
          <span class="about-dot">♦</span>
          <a href="mailto:her.ruby@outlook.com" class="magnetic" data-strength="0.2">her.ruby@outlook.com</a>
          <span class="about-dot">♦</span>
          <a href="tel:+14145191960" class="magnetic" data-strength="0.2">(414) 519-1960</a>
        </div>

        <div class="stats-row rv rv-d3">
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
