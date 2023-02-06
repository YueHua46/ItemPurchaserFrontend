<template>
  <div>
    <button
      data-modal-target="authentication-modal"
      data-modal-toggle="authentication-modal"
      type="button"
      @click="loginHandle"
      class="flex items-center focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
    >
      <svg
        fill="none"
        stroke="currentColor"
        class="w-6 h-6"
        stroke-width="1.5"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        ></path>
      </svg>
      <p>登陆</p>
    </button>
  </div>
</template>

<script setup lang="ts">
const loginModalStore = useLoginModalStore()

function loginHandle() {
  console.log('用户点击登陆按钮')
  // 切换显示或隐藏
  loginModalStore.toggle()
}
</script>

<style scoped></style>
