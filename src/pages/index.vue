<!-- 用户登录主页面 -->
<template>
  <div
    class="flex relative flex-col bg-gray-100 w-full h-full box-border"
    :class="darkMode"
  >
    <!-- 头部配置 -->
    <div class="grey-shadow bg-white dark:bg-slate-900 dark:text-white">
      <PageHeader />
    </div>

    <!-- 内容配置 -->
    <div class="dark:bg-slate-800 dark:text-white flex-1">
      <PageMain />
    </div>

    <!-- 尾部配置 -->
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
/*测试全局API配置与网络请求体 */
// const api = useRuntimeConfig().public.api.baseUrl
// const data = await $http.get(`${api}/get`)

// console.log('data', data)
// console.log('data.url', data.url)
// console.log('data.origin', data.origin)
</script>

<style scoped></style>
