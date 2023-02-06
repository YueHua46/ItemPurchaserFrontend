<script setup lang="ts">
/*标题模板与网站关键词配置*/
useHead({
  titleTemplate: title => {
    return title ? `Minecraft_BBS-${title}` : 'Minecraft-Chain-BBS'
  },
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: 'ITEM_PURCHASER',
    },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
})

/*测试全局Api配置接口 */
// const runtime = useRuntimeConfig()
// console.log(runtime.public.api.baseUrl)
</script>

<template>
  <NuxtPage />
</template>

<style></style>
