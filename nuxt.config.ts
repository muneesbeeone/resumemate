// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Host on static hosting (GitHub Pages)
  ssr: false,
  nitro: { preset: 'github_pages' },

  // Using a custom domain at the root, keep baseURL as '/'
  app: { baseURL: '/' },

  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/tailwindcss'
  ]
})