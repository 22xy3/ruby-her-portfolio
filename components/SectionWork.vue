<template>
  <section class="work-sec" id="sc1">
    <div class="work-header rv">
      <h2 class="work-title" data-split>Experience</h2>
      <span class="work-tag">scroll to explore</span>
    </div>

    <div class="cards">
      <div v-for="(card, i) in cards" :key="card.company" :id="`card-${i}`" class="card">
        <div class="card-inner">
          <div class="card-top">
            <h3 class="card-title">{{ card.company }}</h3>
            <p class="card-number">({{ String(i + 1).padStart(2, '0') }})</p>
          </div>
          <div class="card-bottom">
            <div class="card-text">
              <p class="card-role">{{ card.role }}</p>
              <p class="card-desc">{{ card.desc }}</p>
              <div class="card-tags">
                <span v-for="tag in card.tags" :key="tag" class="card-tag">{{ tag }}</span>
              </div>
            </div>
            <div class="card-meta-side">
              <p class="card-date">{{ card.date }}</p>
              <p class="card-loc">{{ card.loc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    company: 'Cloud Closet',
    role: 'Marketing & PR/Outreach Intern',
    desc: 'Conceptualizes and executes creative content shoots — mood boards, styling direction, on-site production. Builds relationships with marketing teams, PR reps, and brand decision-makers to drive long-term collaboration.',
    tags: ['Content Production', 'PR', 'Brand Partnerships', 'Styling', 'Outreach'],
    date: 'Feb 2026 – Present',
    loc: 'Madison, WI',
  },
  {
    company: 'Curation Media',
    role: 'Marketing & Outreach Coordinator',
    desc: 'Develops strategic marketing campaigns for Madison-area businesses. Transforms brand objectives into audience-centered content. Collaborates within cross-functional creative teams to ideate, pitch, and execute integrated campaigns.',
    tags: ['Campaigns', 'Strategy', 'Cross-functional', 'Content', 'Local Business'],
    date: 'Feb 2026 – Present',
    loc: 'Madison, WI',
  },
  {
    company: 'The Vault',
    role: 'Senior Editor & TikTok Support Lead',
    desc: 'Writes and edits multi-format content. Provides editorial feedback and mentorship to support team development. Collaborates with peers to refine voice, structure, and clarity across the publication.',
    tags: ['Editorial', 'TikTok', 'Mentorship', 'Writing', 'Content Strategy'],
    date: 'Sep 2025 – Present',
    loc: 'Madison, WI',
  },
  {
    company: 'Structa Media',
    role: 'Creative Strategist',
    desc: 'Leads high-impact digital narratives for a creative talent agency representing creators with a collective audience of 15M+ followers. Develops conversion-focused scripts and content strategies to increase engagement and strengthen brand position.',
    tags: ['Scriptwriting', 'Creative Direction', '15M+ Reach', 'Engagement', 'Digital Media'],
    date: 'Apr 2025 – Present',
    loc: 'Atlanta, GA (Hybrid)',
  },
  {
    company: 'California Mini-Corps',
    role: 'Research & Data Assistant',
    desc: 'Supported California Department of Education grant initiatives through data analysis and structured research synthesis. Transformed high-volume data into decision-ready outputs for research and administrative leadership.',
    tags: ['Data Analysis', 'Research', 'Education', 'Grant Support', 'Operations'],
    date: 'Dec 2025 – Jan 2026',
    loc: 'Remote',
  },
]
</script>
