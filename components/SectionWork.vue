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
    company: 'Curation Media',
    role: 'Marketing & Co-outreach Coordinator',
    desc: 'Leads marketing strategy and PR outreach coordination for an independent media organization, shaping brand voice and community engagement across platforms.',
    tags: ['Marketing', 'PR & Outreach', 'Brand Voice', 'Community', 'Strategy'],
    date: 'Feb 2026 – Present',
    loc: 'Madison, WI',
  },
  {
    company: 'Cloud Closet',
    role: 'Marketing + PR/Outreach Intern',
    desc: 'Contributing to brand storytelling, community outreach, and marketing strategy for a digital fashion and media startup. Featured at Wisconsin Vintage Fest and covered by WISC-TV and WKOW.',
    tags: ['Startup', 'Brand Storytelling', 'Fashion', 'PR', 'Community Outreach'],
    date: 'Feb 2026 – Present',
    loc: 'Madison, WI',
  },
  {
    company: 'The Vault',
    role: 'Senior Editor & TikTok Support Lead',
    desc: 'Leads editorial content direction and supports TikTok strategy and content production, bridging editorial craft with social-first storytelling.',
    tags: ['Editorial', 'TikTok', 'Social Media', 'Content Direction', 'Storytelling'],
    date: 'Sep 2025 – Present',
    loc: 'Madison, WI',
  },
  {
    company: 'Structa Media',
    role: 'Creative Strategist & Executive Assistant',
    desc: 'Produces scripts, creative direction, and strategy for a premiere digital creator agency. Creates content assets for networks with over 15 million active subscribers.',
    tags: ['Creative Strategy', 'Scripts', 'Direction', '15M+ Reach', 'Digital Media'],
    date: 'Apr 2025 – Present',
    loc: 'Remote',
  },
  {
    company: 'California Mini-Corps',
    role: 'Research & Data Assistant',
    desc: 'Managed large datasets, ensured data integrity, and supported research and operational decision-making for the California Department of Education.',
    tags: ['Research', 'Data Integrity', 'Education', 'Analysis', 'Operations'],
    date: 'Dec 2025 – Jan 2026',
    loc: 'Remote',
  },
]
</script>
