<script setup lang='ts'>
useHead({
  titleTemplate:(title) => {
      return title ? `Minecraft_BBS-${title}` : 'Minecraft-Chain-BBS'
  },
});

const runtime = useRuntimeConfig();
console.log(runtime.public.api.baseUrl );
</script>

<template>

<nuxt-page />

</template>

<style>

</style>
