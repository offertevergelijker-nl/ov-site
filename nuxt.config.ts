// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  css: ['~/css/main.css'],
  modules: ['@nuxt/content', '@nuxt/icon', '@nuxt/image'],
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
      dev: true,
      watch: {
        port: 4000,
        showURL: true
      }

    }
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})