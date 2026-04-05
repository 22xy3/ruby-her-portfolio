<template>
  <div>
    <SiteLoader />
    <ScrollProgress />
    <SiteCursor />
    <TopNav />
    <PillNav />

    <SectionHero />
    <SectionTicker :items="tickerTop" variant="on-terra" />
    <DiamondDivider />
    <SectionAbout />
    <DiamondDivider />
    <SectionManifesto />
    <SectionWork />
    <SectionTicker :items="tickerSkills" variant="on-cream rev" />
    <DiamondDivider />
    <SectionToolkit />
    <DiamondDivider />
    <SectionRoots />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
const tickerTop = [
  'scroll to see what I\'ve been up to ↓',
  'the soul personified in fonts and colors',
  'marketing meets storytelling',
  'first-gen, forever forward',
  'strategy with heart',
  'community, identity, voice',
]

const tickerSkills = [
  'Creative Strategy', 'Brand Storytelling', 'Editorial', 'Marketing',
  'Advocacy', 'Consumer Insight', 'Cultural Awareness', 'Digital Media',
]

onMounted(async () => {
  const { init: initCursor } = useCursor()
  const { init: initLoader } = useLoader()
  const { init: initLenis } = useLenis()
  const { initReveal, initParallax, initCounters, initImageReveal } = useScrollEffects()
  const { init: initMagnetic } = useMagnetic()
  const { init: initTextSplit } = useTextSplit()

  initCursor()
  await initLoader()
  initLenis()

  await nextTick()

  initReveal()
  initParallax()
  initCounters()
  initImageReveal()
  initMagnetic()
  initTextSplit()
})
</script>
