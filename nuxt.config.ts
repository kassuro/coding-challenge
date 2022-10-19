export default defineNuxtConfig({
  srcDir: 'src',
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],

  runtimeConfig: {
    catApiBaseUrl: '',
    catApiKey: '',
    dogApiBaseUrl: '',

  build: {
    transpile: ['@headlessui/vue'],
  },
});
