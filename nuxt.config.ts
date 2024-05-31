// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vue: { propsDestructure: true },
  css: ['~/assets/css/reset.css', '~/assets/css/main.css'],
  build: {
    transpile: [/echarts/],
  },
  modules: ['nuxt-svgo', '@nuxt/eslint'],
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
