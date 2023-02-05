export default defineNuxtConfig({
  
  css: ["@/assets/css/global.less", "@/assets/css/media.less"],
  modules: ["nuxt-icon"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      api: {
        baseUrl: 'http://localhost:4080',
      },
    },
  },

});
