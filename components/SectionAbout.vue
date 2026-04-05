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
          <p>Hmong-American. First-gen. Information Sciences student at UW-Madison. I'm the kind of person who ends up in rooms I wasn't expected to be in — and then makes sure the door stays open for everyone behind me.</p>
          <p>I found marketing through healthcare advocacy and community organizing, not a textbook. Turns out, the best marketers are the ones who actually have something to say.</p>
        </div>

        <blockquote class="pull-quote rv rv-d2">
          The best marketing doesn't just sell — it tells the truth beautifully and builds bridges between cultures and communities.
        </blockquote>

        <div class="about-text rv rv-d3">
          <p>All-in-Milwaukee Scholar. Milwaukee's Finest. Kelben Foundation Scholar. Not titles I chase — they're reminders of who raised me and who I'm building for.</p>
        </div>

        <div class="stats-row rv rv-d4">
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
