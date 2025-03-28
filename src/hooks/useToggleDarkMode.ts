import { useDarkModeStoreHook } from "@/store/modules/darkMode";

/**
 * 是否是暗黑模式
 * @returns boolean
 */
export function useDarkMode() {
  return useDarkModeStoreHook().darkMode;
}

/**
 * 切换暗黑模式
 */
export function useToggleDarkMode(event?: TouchEvent | MouseEvent) {
  useDarkModeStoreHook().toggleDarkMode(event);
}
