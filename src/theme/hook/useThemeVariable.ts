import { useUnstableNativeVariable } from "nativewind";
import { ThemeVars } from "../themeVars";


export function useThemeVariable<T extends ThemeVars>(variable: T) {
  return useUnstableNativeVariable(`--${variable}`);
}
