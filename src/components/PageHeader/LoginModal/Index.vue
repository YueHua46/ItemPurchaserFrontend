<template>
  <!-- 登录模态框实例 -->
  <div
    ref="$targetEl"
    id="authentication-modal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-modal h-full"
  >
    <div class="relative w-full h-auto max-w-md">
      <!-- 登录表单内容 -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-hide="authentication-modal"
          @click="modalCloseHandle"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">登录</span>
        </button>
        <div class="px-6 py-6 lg:px-8">
          <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            欢迎登录到您的账户
          </h3>
          <form class="space-y-6" action="#">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >用户名</label
              >
              <input
                type="email"
                name="Login-email"
                id="Login-email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="用户名或邮箱登录"
                required
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >密码</label
              >
              <input
                type="password"
                name="Login-password"
                id="Login-password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div class="flex justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >记住此次登录</label
                >
              </div>
              <a
                href="#"
                class="text-sm text-blue-700 hover:underline dark:text-blue-500"
                >忘记密码?</a
              >
            </div>
            <button
              type="submit"
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              立即登录
            </button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
              您还没有账号?
              <button
                data-modal-target="authentication-modal-register"
                data-modal-toggle="authentication-modal-register"
                href="#"
                @click.prevent="openRegister"
                class="text-blue-700 hover:underline dark:text-blue-500"
              >
                注册
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const $targetEl = ref<HTMLElement>()
const loginModalStore = useLoginModalStore()
const registerModalStore = useRegisterModalStore()
/*创建模态实例 */
onMounted(() => {
  loginModalStore.modalChange(
    new Modal($targetEl.value, loginModalStore.modalOptions)
  )
})

/*关闭登录框*/
function modalCloseHandle() {
  loginModalStore.modal.toggle()
}

/*打开注册模态并关闭登录模态*/
function openRegister() {
  // 登陆modal关闭
  loginModalStore.modal.toggle()
  // 注册modal开启
  registerModalStore.modal.toggle()
}
</script>

<style scoped></style>
