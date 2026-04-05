<template>
  <footer class="big-footer" id="contact">
    <div class="bf-topbar">
      <span class="bf-location">Madison, WI</span>
      <span class="bf-time">{{ time }}</span>
    </div>

    <h2 class="bf-heading rv">
      Let's work <em>together!</em>
    </h2>

    <div class="bf-trivia rv rv-d2">
      <button class="trivia-btn" @click="nextFact">✦ Fun fact about Ruby</button>
      <p class="trivia-text" :style="{ opacity: factVisible ? 1 : 0 }">{{ currentFact }}</p>
    </div>

    <div class="bf-socials rv rv-d3">
      <template v-for="(s, i) in socials" :key="s.label">
        <span v-if="i > 0" class="bf-social-dot">♦</span>
        <a :href="s.href" target="_blank" rel="noopener noreferrer" class="bf-social-link">
          <span class="mask"><span class="line">{{ s.label }}</span><span class="line">{{ s.label }}</span></span>
        </a>
      </template>
    </div>

    <div class="bf-bottom">
      <span>&copy;2026 Ruby Her</span>
      <a href="mailto:hello@rubyher.com">Email</a>
      <span>Made with intention ✦</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
const time = ref('')
const currentFact = ref('')
const factVisible = ref(true)
let lastIdx = -1

const facts = [
  'Ruby presented at the Wisconsin State Capitol as a high schooler advocating for Hmong history in schools.',
  "She's a first-generation college student — the first in her family to attend university.",
  'Ruby has helped create content reaching over 15 million subscribers at Structa Media.',
  "She was named Milwaukee's Finest — a recognition for community-rooted young leaders.",
  'Ruby speaks Hmong and English, bridging cultures through storytelling.',
  'She attended the NASW-WI 50th Annual Conference as a teen representative.',
  'Ruby is an All-in-Milwaukee Scholar, 7th Cohort — committed to transforming her city.',
  'Her path into marketing started as a teen health educator, not in a classroom.',
  'She studies Information Sciences at UW-Madison.',
  "Ruby believes the most powerful stories are the ones we were told didn't matter.",
]

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/rubyherr' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
  { label: 'X', href: 'https://x.com' },
]

function nextFact() {
  let idx: number
  do { idx = Math.floor(Math.random() * facts.length) } while (idx === lastIdx)
  lastIdx = idx
  factVisible.value = false
  setTimeout(() => {
    currentFact.value = facts[idx]
    factVisible.value = true
  }, 200)
}

function updateClock() {
  const now = new Date()
  const h = now.getHours()
  const m = String(now.getMinutes()).padStart(2, '0')
  const ampm = h >= 12 ? 'PM' : 'AM'
  const h12 = h % 12 || 12
  time.value = `${String(h12).padStart(2, '0')} ${m} ${ampm}`
}

onMounted(() => {
  updateClock()
  setInterval(updateClock, 10000)
  nextFact()
})
</script>
