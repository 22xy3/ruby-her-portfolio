<template>
  <footer class="big-footer" id="contact">
    <div class="bf-topbar">
      <span class="bf-location">Madison, WI</span>
      <span class="bf-time">{{ time }}</span>
    </div>

    <h2 class="bf-heading rv">
      Let's work <em>together.</em>
    </h2>

    <div class="bf-trivia rv rv-d2">
      <button class="trivia-btn" @click="nextFact">✦ Fun fact about Ruby</button>
      <p class="trivia-text" :style="{ opacity: factVisible ? 1 : 0 }">{{ currentFact }}</p>
    </div>

    <div class="bf-socials rv rv-d3">
      <a href="tel:+14145191960" class="bf-social-link">
        <span class="mask"><span class="line">(414) 519-1960</span><span class="line">(414) 519-1960</span></span>
      </a>
      <span class="bf-social-dot">♦</span>
      <a href="https://linkedin.com/in/rubyherr" target="_blank" rel="noopener noreferrer" class="bf-social-link">
        <span class="mask"><span class="line">LinkedIn</span><span class="line">LinkedIn</span></span>
      </a>
      <span class="bf-social-dot">♦</span>
      <a href="mailto:her.ruby@outlook.com" class="bf-social-link">
        <span class="mask"><span class="line">her.ruby@outlook.com</span><span class="line">her.ruby@outlook.com</span></span>
      </a>
    </div>

    <div class="bf-bottom">
      <span>&copy;2026 Ruby Her</span>
      <a href="mailto:her.ruby@outlook.com">Email</a>
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
  'Ruby advocated at the Wisconsin State Capitol for Hmong history in schools — while still in high school.',
  'She\'s a first-generation college student pursuing Business Marketing at UW-Madison.',
  'She develops content strategies for creators with 15M+ combined followers at Structa Media.',
  'Milwaukee\'s Finest Scholar — recognized for academic excellence and community impact.',
  'She speaks Hmong and English.',
  'Teen representative at the NASW-WI 50th Annual Conference.',
  'All-in-Milwaukee Scholar, 7th Cohort.',
  'Her marketing career started in healthcare — PATCH and Medical College of Wisconsin\'s StEP-UP program.',
  'Bucky Pathway Scholar at UW-Madison.',
  'She writes conversion-focused scripts for digital creators at Structa Media in Atlanta.',
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
