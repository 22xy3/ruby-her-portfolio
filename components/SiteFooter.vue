<template>
  <footer class="big-footer" id="contact">
    <div class="bf-inner">
      <h2 class="bf-heading rv">
        Get in <em>touch</em>
      </h2>

      <form class="bf-form rv rv-d1" @submit.prevent="handleSubmit">
        <div class="bf-form-grid">
          <div class="bf-field">
            <label class="bf-label" for="cf-name">Full name</label>
            <input id="cf-name" v-model="form.name" type="text" placeholder="Your name" required>
          </div>
          <div class="bf-field">
            <label class="bf-label" for="cf-email">Email</label>
            <input id="cf-email" v-model="form.email" type="email" placeholder="you@email.com" required>
          </div>
          <div class="bf-field">
            <label class="bf-label" for="cf-company">Company</label>
            <input id="cf-company" v-model="form.company" type="text" placeholder="Your company">
          </div>
          <div class="bf-field bf-field-wide">
            <label class="bf-label" for="cf-message">Project details</label>
            <textarea id="cf-message" v-model="form.message" placeholder="Tell me about your project" rows="4"></textarea>
          </div>
          <div class="bf-field">
            <label class="bf-label">What can I help with?</label>
            <div class="bf-pills">
              <button v-for="s in services" :key="s" type="button"
                :class="['bf-pill', { active: form.services.includes(s) }]"
                @click="toggleService(s)">{{ s }}</button>
            </div>
          </div>
        </div>

        <div class="bf-submit-row">
          <button type="submit" class="bf-submit magnetic" data-strength="0.15">
            <span>Send it</span> ✦
          </button>
        </div>
      </form>

      <p v-if="submitted" class="bf-success rv">Got it — I'll be in touch.</p>
    </div>

    <div class="bf-footer-bar">
      <span>&copy;2026 Ruby Her</span>
      <div class="bf-footer-links">
        <a href="tel:+14145191960">(414) 519-1960</a>
        <span class="bf-footer-dot">♦</span>
        <a href="https://linkedin.com/in/rubyherr" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span class="bf-footer-dot">♦</span>
        <a href="mailto:her.ruby@outlook.com">her.ruby@outlook.com</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const submitted = ref(false)

const form = reactive({
  name: '',
  email: '',
  company: '',
  message: '',
  services: [] as string[],
})

const services = [
  'Content Strategy',
  'Brand Storytelling',
  'PR & Outreach',
  'Creative Direction',
  'Editorial',
  'Social Media',
]

function toggleService(s: string) {
  const idx = form.services.indexOf(s)
  if (idx >= 0) form.services.splice(idx, 1)
  else form.services.push(s)
}

function handleSubmit() {
  submitted.value = true
}
</script>
