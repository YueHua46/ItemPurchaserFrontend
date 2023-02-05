<template>
  <div
    class="flex relative flex-col bg-gray-100 w-full h-full box-border"
    :class="darkMode"
  >
    <!-- header -->
    <div class="grey-shadow bg-white dark:bg-slate-900 dark:text-white">
      <MyHeader />
    </div>

    <!-- main -->
    <div class="dark:bg-slate-800 dark:text-white flex-1">
      <MyMain />
    </div>
    
    <!-- footer -->
    <div class="bg-white dark:bg-slate-900 dark:text-white">
      <MyFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import $axios from '../composables/feach'


const darkMode = computed(() => {
  return useDarkMode().value == true ? "dark" : "";
});

useHead({
  title: '首页',
})

const api = useRuntimeConfig().public.api.baseUrl
 
console.log($axios)

</script>

<style scoped></style>
