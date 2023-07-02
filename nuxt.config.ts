// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@invictus.codes/nuxt-vuetify',
        '@vueuse/nuxt'
    ],
    css: [
        "~/assets/css/main.css"
    ],
    vuetify: {
        moduleOptions: {
            treeshaking: true,
            useIconCDN: true,

            styles: true,
            autoImport: true,
        }
    }
})
