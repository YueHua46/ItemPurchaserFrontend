<template>
  <div class="smallFunctions">
    <button
      ref="$triggerEl"
      id="dropdownMenuIconHorizontalButton"
      data-dropdown-toggle="dropdownDotsHorizontal"
      class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      type="button"
    >
      <svg
        class="w-6 h-6"
        aria-hidden="true"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        ></path>
      </svg>
    </button>
    <!-- Dropdown menu -->
    <div
      id="dropdownDotsHorizontal"
      ref="$targetEl"
      class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
    >
      <ul
        class="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownMenuIconHorizontalButton"
      >
        <li>
          <a
            href="#"
            @click="publishedHandle"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >发表</a
          >
        </li>
        <li>
          <a
            data-modal-target="authentication-modal"
            data-modal-toggle="authentication-modal"
            href="#"
            @click="loginHandle"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            登录
          </a>
          <!-- <MyHeaderLogin /> -->
        </li>
        <li>
          <div
            class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <label
              class="relative inline-flex items-center w-full cursor-pointer"
            >
              <input
                @click="darkmodeHandle"
                type="checkbox"
                value=""
                class="sr-only peer"
              />
              <div
                class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"
              ></div>
              <span
                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                >暗色模式</span
              >
            </label>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const smallFuncsDropdownStore = useSmallFuncsDropdownStore()
const darkmodeStore = useDarkmodeStore()
const loginModalStore = useLoginModalStore()

const $triggerEl = ref<HTMLElement>()
const $targetEl = ref<HTMLElement>()

onMounted(() => {
  // 初始化浏览器视图缩小后所显示的功能区（头部右边）dropdown实例
  smallFuncsDropdownStore.dropdownChange(
    new Dropdown(
      $targetEl.value,
      $triggerEl.value,
      smallFuncsDropdownStore.dropdownOptions
    )
  )
})

function publishedHandle() {
  console.log('发表按钮触发')
}
function loginHandle() {
  console.log('登陆按钮触发')
  // 切换显示或隐藏
  loginModalStore.toggle()
}
function darkmodeHandle() {
  console.log('暗色模式触发')
  darkmodeStore.darkChange()
}
</script>

<style scoped></style>
