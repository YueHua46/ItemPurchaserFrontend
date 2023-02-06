<template>
  <div class="userinfo flex items-center justify-center">
    <!-- 功能区 -->
    <div class="functions flex items-center justify-center">
      <!-- 发表 -->
      <PageHeaderFunctionsPublished />
      <!-- 登陆 -->
      <PageHeaderFunctionsLogin />
      <!-- 用户 -->
      <PageHeaderFunctionsUser />
      <!-- 用户消息 -->
      <PageHeaderFunctionsUserNoification />
      <!-- 暗色模式切换 -->
      <PageHeaderFunctionsDarkChange />
    </div>
    <!-- 宽度缩小后的功能区 -->
    <PageHeaderFunctionsSmallFunctions />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
