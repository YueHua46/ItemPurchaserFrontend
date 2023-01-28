export default defineNuxtConfig({
  css: ["@/assets/css/main.css"], // 加入这行在这里
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
