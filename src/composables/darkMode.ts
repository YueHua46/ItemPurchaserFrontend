export const useDarkmodeStore = defineStore('darkmode', () => {
  const isDark = ref(true)
  function darkChange() {
    console.log('dark change', !isDark.value)

    isDark.value = !isDark.value
  }
  const theme = computed(() => {
    return isDark.value ? 'dark' : ''
  })
  return { isDark, theme, darkChange }
})
