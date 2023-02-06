import { Modal, ModalOptions } from 'flowbite'

// 登陆的modal状态
export const useLoginModalStore = defineStore('login-modal', () => {
  const modal = ref<Modal>({} as Modal)
  const modalOptions = ref<ModalOptions>({
    // 弹窗位置
    placement: 'center',
    // 点击dialog外是否关闭弹窗，static表示不关闭
    backdrop: 'static',
    // backdropClasses: 'bg-blue-500 dark:bg-blue-400',
  })
  function toggle() {
    modal.value.toggle()
  }
  function modalChange(modalInstance: Modal) {
    modal.value = modalInstance
  }
  function modalOptionsChange(newModalOptions: ModalOptions) {
    modalOptions.value = newModalOptions
  }
  return { modal, modalChange, modalOptions, modalOptionsChange, toggle }
})

// 注册的modal状态
export const useRegisterModalStore = defineStore('register-modal', () => {
  const modal = ref<Modal>({} as Modal)
  const modalOptions = ref<ModalOptions>({
    // 弹窗位置
    placement: 'center',
    // 点击dialog外是否关闭弹窗，static表示不关闭
    backdrop: 'static',
  })
  function toggle() {
    modal.value.toggle()
  }
  function modalChange(modalInstance: Modal) {
    modal.value = modalInstance
  }
  function modalOptionsChange(newModalOptions: ModalOptions) {
    modalOptions.value = newModalOptions
  }
  return { modal, modalChange, modalOptions, modalOptionsChange, toggle }
})
