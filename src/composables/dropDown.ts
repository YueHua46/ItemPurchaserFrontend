import { DropdownInterface, DropdownOptions } from 'flowbite'

// 窄宽度下的功能区（header右边）的dropdown状态
export const useSmallFuncsDropdownStore = defineStore(
  'small-funcs-dropdown',
  () => {
    const dropdown = ref<DropdownInterface>({} as DropdownInterface)
    const dropdownOptions = ref<DropdownOptions>({
      placement: 'bottom',
      triggerType: 'click',
      offsetSkidding: 0,
      offsetDistance: 10,
      delay: 100,
    })
    function dropdownChange(dropdownInstance: DropdownInterface) {
      dropdown.value = dropdownInstance
    }
    function dropdownOptionsChange(newDropdownOptions: DropdownOptions) {
      dropdownOptions.value = newDropdownOptions
    }
    return { dropdown, dropdownChange, dropdownOptions, dropdownOptionsChange }
  }
)

// 消息列表的dropdown状态
export const useMessageDropdownStore = defineStore('message-dropdown', () => {
  const dropdown = ref<DropdownInterface>({} as DropdownInterface)
  const dropdownOptions = ref<DropdownOptions>({
    placement: 'bottom',
    triggerType: 'click',
    offsetSkidding: 0,
    offsetDistance: 10,
    // 点击后延迟
    delay: 100,
  })
  function dropdownChange(dropdownInstance: DropdownInterface) {
    dropdown.value = dropdownInstance
  }
  function dropdownOptionsChange(newDropdownOptions: DropdownOptions) {
    dropdownOptions.value = newDropdownOptions
  }
  return { dropdown, dropdownChange, dropdownOptions, dropdownOptionsChange }
})
