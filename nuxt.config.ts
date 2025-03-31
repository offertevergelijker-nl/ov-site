// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    extends: ['../_common'],
    modules: ['@nuxt/content'],
    components: ['../_common/components'],
    devtools: {enabled: true},
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
        },
    },

    // Styling
    css: ['./css/tailwind.css'],
})