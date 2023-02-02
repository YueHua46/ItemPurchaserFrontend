import { DropdownOptions, Modal, ModalOptions } from "flowbite";

export const useDropdownOptions = () =>
  useState<DropdownOptions>("dropdownOption", () =>
    reactive({
      placement: "bottom",
      triggerType: "click",
      offsetSkidding: 0,
      offsetDistance: 10,
      delay: 300,
    })
  );

export const useModalOptions = () =>
  useState<ModalOptions>("modalOptions", () =>
    reactive({
      // 弹窗位置
      placement: "center",
      // 点击dialog外是否关闭弹窗，static表示不关闭
      backdrop: "static",
    })
  );

export const useModal = () =>
  useState<Modal>("modal", () => reactive({}) as Modal);

// export const useDropdown = () =>
//   useState<DropdownInterface>("dropdown", () => reactive(new Dropdown()));
export const useDarkMode = () => useState<boolean>("darkMode", () => ref(true));
