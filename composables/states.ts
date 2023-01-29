import { DropdownOptions, DropdownInterface, Dropdown } from "flowbite";

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

// export const useDropdown = () =>
//   useState<DropdownInterface>("dropdown", () => reactive(new Dropdown()));
