<template>
  <div class="relative mx-3" @click="openUser">
    <img class="w-10 h-10 rounded-full" src="images/creeper2.png" alt="" />
    <span
      class="top-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"
    ></span>
  </div>
</template>
<script lang="ts" setup>
// 打开用户信息
function openUser() {
  console.log('打开用户信息')
}
</script>
<style></style>
