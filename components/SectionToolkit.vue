<template>
  <section class="toolkit-sec" id="skills">
    <div class="toolkit-inner">
      <div class="toolkit-left rv">
        <h2 class="toolkit-title" data-split>My Toolkit</h2>
        <p class="toolkit-sub">The things I've picked up along the way — from late nights editing to early morning strategy calls.</p>
      </div>

      <div class="toolkit-right">
        <div class="toolkit-group rv">
          <h3 class="toolkit-label">The Craft</h3>
          <div class="toolkit-pills stagger-children">
            <span v-for="s in craft" :key="s" class="pill">{{ s }}</span>
          </div>
        </div>

        <div class="toolkit-group rv rv-d2">
          <h3 class="toolkit-label">The Human</h3>
          <div class="toolkit-pills stagger-children">
            <span v-for="s in human" :key="s" class="pill pill-warm">{{ s }}</span>
          </div>
        </div>

        <div class="toolkit-group rv rv-d3">
          <h3 class="toolkit-label">The Tools</h3>
          <div class="toolkit-pills stagger-children">
            <span v-for="s in tools" :key="s" class="pill">{{ s }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const craft = [
  'Marketing Strategy', 'PR & Outreach', 'Creative Strategy', 'Scriptwriting',
  'Social Media Strategy', 'Editorial Editing', 'Brand Storytelling', 'Consumer Research',
  'Data Analysis', 'Creative Writing',
]
const human = [
  'Hmong & English', 'Cross-cultural Communication', 'Collaboration',
  'Advocacy', 'Storytelling', 'Research Synthesis', 'Community Building',
]
const tools = [
  'Microsoft Office', 'Canva', 'CapCut', 'Notion',
  'Google Workspace',
]
</script>
