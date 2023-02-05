export default defineNuxtConfig({
  css: ['@/assets/css/global.less', '@/assets/css/media.less'],
  modules: ['nuxt-icon'],
  srcDir: 'src',
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      api: {
        baseUrl: 'http://httpbin.org/',
      },
    },
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
})
