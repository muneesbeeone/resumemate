// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-09-25',
  devtools: { enabled: true },

  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-adsense',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],
  googleAdsense: {
    id: 'ca-pub-4391323106927085'
  },
})