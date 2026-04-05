export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Ruby Her | Creative Strategist & Marketing Professional',
      meta: [
        { name: 'description', content: 'Ruby Her — Hmong-American creative strategist at UW-Madison. First-gen. Information Sciences, pre-business track.' },
        { property: 'og:title', content: 'Ruby Her | Creative Strategist & Marketing Professional' },
        { property: 'og:description', content: 'Hmong-American creative strategist, marketing professional, writer, editor, and advocate.' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'icon', href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✦</text></svg>" },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap' },
      ],
    },
  },

  css: [
    '~/assets/css/variables.css',
    '~/assets/css/base.css',
    '~/assets/css/animations.css',
    '~/assets/css/components.css',
  ],

  ssr: true,
})
