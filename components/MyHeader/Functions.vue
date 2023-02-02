<template>
  <div class="userinfo flex items-center justify-center">
    <!-- 功能区 -->
    <div class="functions flex items-center justify-center">
      <!-- 发表 -->
      <button
        type="button"
        @click="publishedHandle"
        class="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          class="w-6 h-6 dark:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          ></path>
        </svg>
        <p>发表</p>
      </button>
      <!-- 登陆 -->
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
        <MyHeaderLogin />
      </div>
      <!-- 暗色模式切换 -->
      <button
        type="button"
        @click="darkmodeHandle"
        class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
      >
        <svg
          class="cursor-pointer w-5 h-5"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          ></path>
        </svg>
      </button>
    </div>
    <!-- 宽度缩小后的功能区 -->
    <div class="dropmenu">
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
              href="#"
              @click="loginHandle"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >登录</a
            >
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
  </div>
</template>

<script setup lang="ts">
import { Dropdown, DropdownInterface } from "flowbite";

const $targetEl = ref<HTMLElement>();
const $triggerEl = ref<HTMLElement>();
const options = useDropdownOptions().value;
const darkMode = useDarkMode().value;
let dropdown: DropdownInterface = reactive({}) as DropdownInterface;

options.onShow = function () {};
options.onHide = function () {};
options.onToggle = function () {};

onMounted(() => {
  console.log($targetEl.value);
  console.log($triggerEl.value);
  dropdown = new Dropdown($targetEl.value, $triggerEl.value, options);
});
function publishedHandle() {
  console.log("发表按钮触发");
  dropdown.toggle();
}
function loginHandle() {
  console.log("登陆按钮触发");
  dropdown.toggle();
  useModal().value.toggle();
}
function darkmodeHandle() {
  console.log("暗色模式触发");
  console.log("darkMode", darkMode);
  useDarkMode().value = !useDarkMode().value;
}
</script>

<style scoped></style>
