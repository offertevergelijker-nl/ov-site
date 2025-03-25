// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  css: ['~/css/main.css'],
  modules: [
    '@nuxt/content',
  ],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
  content: {
    preview: {
      api: 'https://api.nuxt.studio',
      gitInfo: {
        name: 'ov-site',
        owner: 'offertevergelijker-nl',
        url: 'https://github.com/offertevergelijker-nl/ov-site'
      },
      dev: true
    }
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
