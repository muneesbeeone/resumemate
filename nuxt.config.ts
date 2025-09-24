// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/tailwindcss'
  ],

  scripts: {
    // @ts-expect-error: 'crossorigin' is a valid attribute
    'adsense-script': {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4391323106927085',
      crossorigin: 'anonymous',
      strategy: 'afterInteractive'
    }
  }
})