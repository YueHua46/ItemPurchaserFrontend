export default defineNuxtConfig({
  css: ["@/assets/css/global.less", "@/assets/css/media.less"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
