<template>
  <div
    class="flex relative flex-col bg-gray-100 w-full h-full box-border"
    :class="darkMode"
  >
    <!-- header -->
    <div class="grey-shadow bg-white dark:bg-slate-900 dark:text-white">
      <PageHeader />
    </div>

    <!-- main -->
    <div class="dark:bg-slate-800 dark:text-white flex-1">
      <PageMain />
    </div>

    <!-- footer -->
    <div class="bg-white dark:bg-slate-900 dark:text-white">
      <PageFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import $http from '../request/http'

const darkMode = computed(() => {
  return useDarkMode().value == true ? 'dark' : ''
})

useHead({
  title: '首页',
})

const api = useRuntimeConfig().public.api.baseUrl

const data = await $http.get(`${api}/get`)

console.log('data', data)
console.log('data.url', data.url)
console.log('data.origin', data.origin)
</script>

<style scoped></style>
