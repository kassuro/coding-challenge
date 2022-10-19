export default defineNuxtConfig({
  srcDir: 'src',
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],

  runtimeConfig: {
    public: {
      catApiBaseUrl: '',
      catApiKey: '',
      dogApiBaseUrl: '',
    },
  },

  build: {
    transpile: ['@headlessui/vue'],
  },
});
