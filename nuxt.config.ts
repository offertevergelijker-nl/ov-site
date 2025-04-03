// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    extends: ['../_common'],
    devtools: {enabled: true},
    future: {
        compatibilityVersion: 4,
    },
    compatibilityDate: '2024-04-03',

    // Styling
    css: ['./css/tailwind.css'],
    modules: ['@nuxt/image'],
    plugins: [
        //
    ]
})