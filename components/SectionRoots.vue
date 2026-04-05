<template>
  <section class="roots-sec" id="advocacy">
    <div class="work-header rv">
      <h2 class="work-title" data-split>Leadership &amp; Involvement</h2>
      <span class="work-tag">beyond the resume</span>
    </div>

    <div class="cards roots-cards">
      <div v-for="(card, i) in cards" :key="card.title" :id="`root-card-${i}`" class="card root-folder">
        <div class="card-inner">
          <div class="card-top">
            <h3 class="card-title">{{ card.title }}</h3>
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
              <p class="card-date">{{ card.year }}</p>
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
    title: 'Wisconsin State Capitol',
    role: 'Youth Advocate',
    desc: 'Advocated for Act 266 on behalf of Hmong-American students — legislation for Hmong history and culture in Wisconsin schools. Still in high school at the time.',
    tags: ['Advocacy', 'Policy', 'Hmong Studies', 'Public Speaking'],
    year: '2023',
    loc: 'Madison, WI',
  },
  {
    title: 'PATCH & StEP-UP',
    role: 'Teen Health Educator',
    desc: 'Providers and Teens Communicating for Health. Medical College of Wisconsin StEP-UP program. Teen representative at the NASW-WI 50th Annual Conference.',
    tags: ['Healthcare', 'Youth Voice', 'Education', 'NASW-WI'],
    year: '2022 – 2024',
    loc: 'Wisconsin',
  },
  {
    title: 'All-in-Milwaukee Scholar',
    role: '7th Cohort',
    desc: 'High-achieving scholars committed to completing college, building careers, and investing back into Milwaukee. Selected from a highly competitive pool based on academic excellence, leadership, and community involvement.',
    tags: ['Scholarship', 'Community', 'Leadership', 'Milwaukee'],
    year: 'Feb 2025',
    loc: 'Milwaukee, WI',
  },
  {
    title: "Milwaukee's Finest Scholar",
    role: 'Academic & Community Honor',
    desc: 'Honored as one of a small group of top-performing students in the city of Milwaukee — recognized for academic excellence and community impact.',
    tags: ['Honor', 'Academic Excellence', 'Community Impact'],
    year: 'June 2025',
    loc: 'Milwaukee, WI',
  },
  {
    title: 'Kelben & Bucky Pathway Scholar',
    role: 'Merit-Based Recognition',
    desc: 'Kelben Scholarship — merit-based financial support for academic performance and long-term career goals. Bucky Pathway Scholar at UW-Madison.',
    tags: ['Merit Scholarship', 'UW-Madison', 'Academic'],
    year: 'June 2025',
    loc: 'Milwaukee & Madison, WI',
  },
]
</script>
