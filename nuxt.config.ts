export default defineNuxtConfig({
  srcDir: 'src',
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],

  runtimeConfig: {
    catApiBaseUrl: '',
    catApiKey: '',
  },
});
